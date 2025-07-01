---
description: Learn how to create mobile credentials in the Salto Space access system.
---

# Programming Salto Space Mobile Credentials

You can create mobile credentials that enable your mobile app users to unlock entrances in your [Salto Space access system](./). For each Salto Space user, you can create a maximum of one [key card credential](programming-salto-space-card-based-credentials.md) and one mobile key credential. For more information about Seam mobile keys, see [Mobile Access](../../capability-guides/mobile-access/).

To use the Seam API to create mobile credentials for mobile app users in a Salto Space access system:

1.  Create a [user identity](../../api/user_identities/).

    Seam user identities enable you to match your own mobile app users to access system users that you create using the Seam API.
2. Retrieve a [credential manager](../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#initialize-the-user-identity-with-a-credential-manager) for your Salto Space access system.
3. Create an [access system user](../../products/access-systems/user-management.md) on the Salto Space access system or assign an existing access system user to the user identity.\
   The resources that you create for the access system user are available under the associated user identity.
4. Assign the access system user to one or more [access groups](../../capability-guides/access-systems/user-management/assigning-users-to-access-groups.md).
   * Each access group is preconfigured with the allowed entrances.
5. Create a [credential](../../capability-guides/access-systems/managing-credentials.md) to represent the mobile key.
   * Specify the ID of the access system user.
   * Set [`is_multi_phone_sync_credential`](../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials) to `true`.
   * Set the `access_method` to `mobile_key`.

The following example walks you through this process:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the access system.
building_a = seam.acs.systems.get(
  acs_system_id = "11111111-1111-1111-1111-111111111111"
)

# Step 1:
# Create a user identity that corresponds to your user's mobile app account.
jane_user = seam.user_identities.create(
  full_name = "Jane Doe"
)

# Step 2:
# Retrieve a credential manager.
# In your app, find the acs_system_id of the Salto Space Credential Manager
# and then use this ID to set up an enrollment automation in the next step.
salto_space_credential_manager = seam.acs.systems.list_compatible_credential_manager_acs_systems(
    acs_system_id = building_a.acs_system_id
  )[0]

# Step 3:
# Create an access system user on the Salto Space access system.
access_system_user = seam.acs.users.create(
  user_identity_id = jane_user.user_identity_id,
  acs_system_id = building_a.acs_system_id,
  full_name = jane_user.full_name,
  phone_number = "+15555550100"
)

# Step 4:
# Add the access system user to all desired access groups.
access_group_ids = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
]
for access_group_id in seam_access_group_ids:
  seam.acs.users.add_to_access_group(
    acs_user_id = access_system_user.acs_user_id,
    acs_access_group_id = access_group_id
  )
  
# Step 5:
# Create a mobile key for the access system user.
mobile_key = seam.acs.credentials.create(
  acs_user_id = access_system_user.acs_user_id,
  is_multi_phone_sync_credential = True,
  access_method = "mobile_key"
)
```

**Output:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='mobile_key',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Get the access system.
building_a=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"11111111-1111-1111-1111-111111111111\"
}")

# Step 1:
# Create a user identity that corresponds to your user's app account.
jane_user=$(curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "full_name": "Jane Doe"
}')

# Step 2:
# Retrieve a credential manager.
# In your app, find the acs_system_id of the Salto Space Credential Manager
# and then use this ID to set up an enrollment automation in the next step.
salto_space_credential_manager=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/list_compatible_credential_manager_acs_systems' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\"
}" | jq -r '.acs_systems[0]')

# Step 3:
# Create an access system user on the Salto Space access system.
access_system_user=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${jane_user})\",
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\",
  \"full_name\": \"$(jq -r '.user_identity.full_name' <<< ${jane_user})\",
  \"phone_number\": \"+15555550100\"
}")

# Step 4:
# Add the access system user to all desired access groups.
declare -a access_group_ids=("44444444-4444-4444-4444-333333333333" "44444444-4444-4444-4444-444444444444")
for access_group_id in ${access_group_ids[@]};
do
  curl -X 'POST' \
    'https://connect.getseam.com/acs/users/add_to_access_group' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
    \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${access_system_user})\",
    \"acs_access_group_id\": \"$access_group_id\"
  }";
done

# Step 5:
# Create a mobile key for the access system user.
mobile_key=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${access_system_user})\",
  \"is_multi_phone_sync_credential\": true,
  \"access_method\": \"mobile_key\"
}")
```

**Output:**

```json
{
  "acs_credential":{
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "mobile_key",
    ...
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Get the access system.
const buildingA = await seam.acs.systems.get({
  acs_system_id: "11111111-1111-1111-1111-111111111111"
});

// Step 1:
// Create a user identity that corresponds to your user's app account.
const janeUser = await seam.userIdentities.create({
  full_name: "Jane Doe"
});

// Step 2:
// Retrieve a credential manager.
// In your app, find the acs_system_id of the Salto Space Credential Manager
// and then use this ID to set up an enrollment automation in the next step.
const saltoSpaceCredentialManager = (await seam.acs.systems
  .listCompatibleCredentialManagerAcsSystems({
    acs_system_id: buildingA.acs_system_id
  }))[0];

// Step 3:
// Create an access system user on the Salto Space access system.
const accessSystemUser = await seam.acs.users.create({
  user_identity_id: janeUser.user_identity_id,
  acs_system_id: buildingA.acs_system_id,
  full_name: janeUser.full_name,
  phone_number: "+15555550100"
});

// Step 4:
// Add the access system user to all desired access groups.
const accessGroupIds = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
];
for (const accessGroupId of accessGroupIds) {
  await seam.acs.users.addToAccessGroup({
    acs_user_id: accessSystemUser.acs_user_id,
    acs_access_group_id: accessGroupId
  });
}

// Step 5:
// Create a mobile key for the access system user.
const mobileKey = await seam.acs.credentials.create({
  acs_user_id: accessSystemUser.acs_user_id,
  access_method: "mobile_key",
  is_multi_phone_sync_credential: true
});
```

**Output:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'mobile_key',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Get the access system.
building_a = seam.acs.systems.get(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
)

# Step 1:
# Create a user identity that corresponds to your user's app account.
jane_user = seam.user_identities.create(
  full_name: "Jane Doe"
)

# Step 2:
# Retrieve a credential manager.
# In your app, find the acs_system_id of the Salto Space Credential Manager
# and then use this ID to set up an enrollment automation in the next step.
salto_space_credential_manager = (seam.acs.systems
  .list_compatible_credential_manager_acs_systems(
    acs_system_id: building_a.acs_system_id
  ))[0]

# Step 3:
# Create an access system user on the Salto Space access system.
access_system_user = seam.acs.users.create(
  user_identity_id: jane_user.user_identity_id,
  acs_system_id: building_a.acs_system_id,
  full_name: jane_user.full_name,
  phone_number: "+15555550100"
)

# Step 4:
# Add the access system user to all desired access groups.
access_group_ids = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
]
access_group_ids.each do |access_group_id|
  seam.acs.users.add_to_access_group(
    acs_user_id: access_system_user.acs_user_id,
    acs_access_group_id: access_group_id
  )
end

# Step 5:
# Create a mobile key for the access system user.
mobile_key = seam.acs.credentials.create(
  acs_user_id: access_system_user.acs_user_id,
  access_method: "mobile_key",
  is_multi_phone_sync_credential: true
)
```

**Output:**

```
<Seam::Resources::AcsCredential:0x00618
  acs_credential_id="66666666-6666-6666-6666-666666666666"
  acs_user_id="33333333-3333-3333-3333-333333333333"
  access_method="mobile_key"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Get the access system.
$building_a = $seam->acs->systems->get(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);

// Step 1:
// Create a user identity that corresponds to your user's app account.
$jane_user = $seam->user_identities->create(
  full_name: "Jane Doe"
);

// Step 2:
// Retrieve a credential manager.
// In your app, find the acs_system_id of the Salto Space Credential Manager
// and then use this ID to set up an enrollment automation in the next step.
$salto_space_credential_manager = $seam->acs->systems->list_compatible_credential_manager_acs_systems(
  acs_system_id: $building_a->acs_system_id
)[0];

// Step 3:
// Create an access system user on the Salto Space access system.
$access_system_user = $seam->acs->users->create(
  user_identity_id: $jane_user->user_identity_id,
  acs_system_id: $building_a->acs_system_id,
  full_name: $jane_user->full_name,
  phone_number: "+15555550100"
);

// Step 4:
// Add the access system user to all desired access groups.
$access_group_ids = array(
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
);
foreach ($access_group_ids as $access_group_id) {
  $seam->acs->users->add_to_access_group(
    acs_user_id: $access_system_user->acs_user_id,
    acs_access_group_id: $access_group_id
  );
};

// Step 5:
// Create a mobile key for the access system user.
$mobile_key = $seam->acs->credentials->create(
  acs_user_id: $access_system_user->acs_user_id,
  is_multi_phone_sync_credential: true,
  access_method: "mobile_key"
);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}
{% endtabs %}

***

## Learn More

To find out more about using the Seam API with your Salto Space access system, see the following topics:

* [Programming Salto Space Card-based Credentials](programming-salto-space-card-based-credentials.md)
* [Access Systems](../../products/access-systems/)
* [Access Group-Based Access Systems](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#access-group-based-access-control-systems)
* [Managing Access System Users](../../products/access-systems/user-management.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Mobile Access](../../capability-guides/mobile-access/)
* [Access Systems](../../api/acs/) in the Seam API reference
* [User Identities](../../api/user_identities/) in the Seam API reference
