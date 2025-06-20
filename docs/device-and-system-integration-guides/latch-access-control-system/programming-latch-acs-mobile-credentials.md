---
description: Learn how to create mobile credentials in the Latch ACS.
---

# Programming Latch ACS Mobile Credentials

You can create mobile credentials that enable your mobile app users to unlock entrances in your [Latch ACS](./). For more information about Seam mobile keys, see [Mobile Access](../../capability-guides/mobile-access/).

To use the Seam API to create mobile credentials for mobile app users in a Latch ACS:

1.  Create a [user identity](../../api/user_identities/) that corresponds to your user's app account.

    Seam [user identities](../../api/user_identities/) enable you to match your own mobile app users to ACS users that you create using the Seam API.
2. Retrieve a [credential manager](../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#initialize-the-user-identity-with-a-credential-manager) for your Latch ACS.
3. Set up an [enrollment automation](../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md) for the user identity, to enable mobile keys.
4. Create an [ACS user](../../products/access-systems/user-management.md) on the Latch ACS or assign an existing ACS user to the user identity.\
   The resources that you create for the ACS user are available under the associated user identity.
   * In the ACS user creation command, set the `user_identity_id` property for a new ACS user. Alternately, use the `add_acs_user` command for user identities to assign an existing ACS user to a user identity.
   * If you choose to create a new ACS user, specify the `acs_system_id` of the Latch ACS in the building to which you want to grant the new user access.
   * Specify the details of the ACS user, such as their `full_name`, `email_address`, and so on.
5.  Create an [ACS credential](../../capability-guides/access-systems/managing-credentials.md) to represent the mobile key.

    * Specify the `acs_user_id`.
    * Set [`is_multi_phone_sync_credential`](../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials) to `true`.
    * Set the `access_method` to `mobile_key`.
    * Specify the IDs of the entrances to which you want to grant access.\
      Note that you can include multiple entrances in a single mobile key credential.
    * Specify the desired start and end dates and times for this access.

    Creating a new `acs_credential` object prompts the Latch ACS to generate a PIN code for the user.

{% hint style="info" %}
When you create a mobile key for a Latch ACS, you cannot specify a code.
{% endhint %}

The following example walks you through this process:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Step 1:
# Create a user identity that corresponds to your user's mobile app account.
jane_user = seam.user_identities.create(
  email_address = "jane@example.com"
)

# Step 2:
# Retrieve a credential manager.
latch_credential_manager = seam.acs.systems.list_compatible_credential_manager_acs_systems(
    acs_system_id = building_a.acs_system_id
  )[0]

# Step 3:
# Set up an enrollment automation for the user identity, to enable mobile keys.
seam.user_identities.enrollment_automations.launch(
  user_identity_id = jane_user.user_identity_id,
  create_credential_manager_user = True,
  credential_manager_acs_system_id = latch_credential_manager.acs_system_id
)

# Step 4:
# Create an ACS user on the Latch ACS
# or assign the ACS user to the user identity.
building_a_resident = seam.acs.users.create(
  # To associate the ACS user with a user identity,
  # include the user_identity_id.
  # Resources that you create for this ACS user
  # are available under the associated user identity.
  user_identity_id = jane_user.user_identity_id,
  acs_system_id = building_a.acs_system_id,
  full_name = "Jane Doe",
  email_address = "jane@example.com"
)

# Step 5:
# Create a mobile key for the entrances to which
# you want to grant the ACS user access.
mobile_key = seam.acs.credentials.create(
  acs_user_id = building_a_resident.acs_user_id,
  is_multi_phone_sync_credential = True,
  access_method = "mobile_key",
  allowed_acs_entrance_ids = [
    # You can include multiple entrances per mobile key.
    room_entrance.acs_entrance_id,
    common_door_entrance.acs_entrance_id
  ],
  starts_at = "2024-07-13T16:50:42.072Z",
  ends_at = "2024-07-18T16:50:42.072Z"
)

pprint(mobile_key)

# It is also useful to list the entrances
# to which the mobile key grants access.
seam.acs.credentials.list_accessible_entrances(
  acs_credential_id = mobile_key.acs_credential_id
)
```

**Output:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='mobile_key',
  starts_at='2024-07-13T16:50:42.072Z',
  ends_at='2024-07-18T16:50:42.072Z',
  ...
)
[
  AcsEntrance(
    acs_entrance_id='55555555-5555-5555-5555-555555555555',
    display_name='Room Entrance',
    ...
  ),
  AcsEntrance(
    acs_entrance_id='55555555-5555-5555-5555-000000000000',
    display_name='Common Door Entrance',
    ...
  )
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Step 1:
# Create a user identity that corresponds to your user's app account.
jane_user=$(curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "email_address": "jane@example.com"
}')

# Step 2:
# Retrieve a credential manager.
latch_credential_manager=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/list_compatible_credential_manager_acs_systems' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\"
}" | jq -r '.acs_systems[0]')

# Step 3:
# Set up an enrollment automation for the user identity, to enable mobile keys.
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/enrollment_automations/launch' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${jane_user})\",
  \"create_credential_manager_user\": true,
  \"credential_manager_acs_system_id\": \"$(jq -r '.acs_system_id' <<< ${latch_credential_manager})\"
}"

# Step 4:
# Create an ACS user on the Latch ACS
# or assign the ACS user to the user identity.

# To associate the ACS user with a user identity,
# include the user_identity_id.
# Resources that you create for this ACS user
# are available under the associated user identity.
building_a_resident=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${jane_user})\",
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\",
  \"full_name\": \"Jane Doe\",
  \"email_address\": \"jane@example.com\"
}")

# Step 5:
# Create a mobile key for the entrances to which
# you want to grant the ACS user access.
# You can include multiple entrances per mobile key.
mobile_key=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${building_a_resident})\",
  \"is_multi_phone_sync_credential\": true,
  \"access_method\": \"mobile_key\",
  \"allowed_acs_entrance_ids\": [
    \"$(jq -r '.acs_entrance_id' <<< ${room_entrance})\",
    \"$(jq -r '.acs_entrance_id' <<< ${common_door_entrance})\"
  ],
  \"starts_at\": \"2024-07-13T16:50:42.072Z\",
  \"ends_at\": \"2024-07-18T16:50:42.072Z\"
}");

echo $mobile_key;

# It is also useful to list the entrances
# to which the mobile key grants access.
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/credentials/list_accessible_entrances' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_credential_id\": \"$(jq -r '.acs_credential_id' <<< ${mobile_key})\"
}"
```

**Output:**

```json
{
  "acs_credential":
    {
      "acs_credential_id": "66666666-6666-6666-6666-666666666666",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "access_method": "mobile_key",
      "starts_at": "2024-07-13T16:50:42.072Z",
      "ends_at": "2024-07-18T16:50:42.072Z",
      ...
    },
  "ok":true
}
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "display_name": "Room Entrance",
      ...
    },
    {
      "acs_entrance_id": "55555555-5555-5555-5555-000000000000",
      "display_name": "Common Door Entrance",
      ...
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Step 1:
// Create a user identity that corresponds to your user's app account.
const janeUser = await seam.userIdentities.create({
  email_address: "jane@example.com"
});

// Step 2:
// Retrieve a credential manager.
const latchCredentialManager = (await seam.acs.systems
  .listCompatibleCredentialManagerAcsSystems({
    acs_system_id: buildingA.acs_system_id
  }))[0];

// Step 3:
// Set up an enrollment automation for the user identity, to enable mobile keys.
await seam.userIdentities.enrollmentAutomations.launch({
  user_identity_id: janeUser.user_identity_id,
  create_credential_manager_user: true,
  credential_manager_acs_system_id: latchCredentialManager.acs_system_id
});

// Step 4:
// Create an ACS user on the Latch ACS
// or assign the ACS user to the user identity.
const buildingAResident = await seam.acs.users.create({
  // To associate the ACS user with a user identity,
  // include the user_identity_id.
  // Resources that you create for this ACS user
  // are available under the associated user identity.
  user_identity_id: janeUser.user_identity_id,
  acs_system_id: buildingA.acs_system_id,
  full_name: "Jane Doe",
  email_address: "jane@example.com"
});

// Step 5:
// Create a mobile key for the entrances to which
// you want to grant the ACS user access.
const mobileKey = await seam.acs.credentials.create({
  acs_user_id: buildingAResident.acs_user_id,
  is_multi_phone_sync_credential: true,
  access_method: "mobile_key",
  allowed_acs_entrance_ids: [
    // You can include multiple entrances per mobile key.
    roomEntrance.acs_entrance_id,
    commonDoorEntrance.acs_entrance_id
  ],
  starts_at: "2024-07-13T16:50:42.072Z",
  ends_at: "2024-07-18T16:50:42.072Z"
});

console.log(mobileKey);

// It is also useful to list the entrances
// to which the mobile key grants access.
await seam.acs.credentials.listAccessibleEntrances({
  acs_credential_id: mobileKey.acs_credential_id
});
```

**Output:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  code: '1234567',
  access_method: 'mobile_Key',
  starts_at: '2024-07-13T16:50:42.072Z',
  ends_at: '2024-07-18T16:50:42.072Z',
  ...
}
[
  {
    acs_entrance_id: '55555555-5555-5555-5555-555555555555',
    display_name: 'Room Entrance',
    ...
  },
  {
    acs_entrance_id: '55555555-5555-5555-5555-000000000000',
    display_name: 'Common Door Entrance',
    ...
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Coming soon!
```

**Output:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Step 1:
// Create a user identity that corresponds to your user's app account.
$jane_user = $seam->user_identities->create(
  email_address: "jane@example.com"
);

// Step 2:
// Retrieve a credential manager.
$latch_credential_manager = $seam->acs->systems->list_compatible_credential_manager_acs_systems(
  acs_system_id: $building_a->acs_system_id
)[0];

// Step 3:
// Set up an enrollment automation for the user identity, to enable mobile keys.
$seam->user_identities->enrollment_automations->launch(
  user_identity_id: $jane_user->user_identity_id,
  create_credential_manager_user: true,
  credential_manager_acs_system_id: $latch_credential_manager->acs_system_id
);

// Step 4:
// Create an ACS user on the Latch ACS
// or assign the ACS user to the user identity.
$building_a_resident = $seam->acs->users->create(
  // To associate the ACS user with a user identity,
  // include the user_identity_id.
  // Resources that you create for this ACS user
  // are available under the associated user identity.
  user_identity_id: $jane_user->user_identity_id,
  acs_system_id: $building_a->acs_system_id,
  full_name: "Jane Doe",
  email_address: "jane@example.com"
);

// Step 5:
// Create a mobile key for the entrances to which
// you want to grant the ACS user access.
$mobile_key = $seam->acs->credentials->create(
  acs_user_id: $building_a_resident->acs_user_id,
  is_multi_phone_sync_credential: true,
  access_method: "mobile_key",
  allowed_acs_entrance_ids: [
    // You can include multiple entrances per mobile key.
    $room_entrance->acs_entrance_id,
    $common_door_entrance->acs_entrance_id
  ],
  starts_at: "2024-07-13T16:50:42.072Z",
  ends_at: "2024-07-18T16:50:42.072Z"
);

echo json_encode($mobile_key, JSON_PRETTY_PRINT);

// It is also useful to list the entrances
// to which the mobile key grants access.
$seam->acs->credentials->list_accessible_entrances(
  acs_credential_id: $mobile_key->acs_credential_id
);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "starts_at": "2024-07-13T16:50:42.072Z",
  "ends_at": "2024-07-18T16:50:42.072Z",
  ...
}
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "display_name": "Room Entrance",
    ...
  },
  {
    "acs_entrance_id": "55555555-5555-5555-5555-000000000000",
    "display_name": "Common Door Entrance",
    ...
  }
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Step 1:
// Create a user identity that corresponds to your user's app account.
UserIdentity janeUser = seam.UserIdentities.Create(
  emailAddress: "jane@example.com"
);

// Step 2:
// Retrieve a credential manager.
var latchCredentialManager = seam.SystemsAcs
  .ListCompatibleCredentialManagerAcsSystems(
    acsSystemId: buildingA.acsSystemId
  )[0];

// Step 3:
// Set up an enrollment automation for the user identity, to enable mobile keys.
seam.UserIdentities.EnrollmentAutomations.Launch(
  userIdentityId: janeUser.userIdentityId,
  createCredentialManagerUser: true,
  credentialManagerAcsSystemId: latchCredentialManager.acsSystemId
);

// Step 4:
// Create an ACS user on the Latch ACS
// or assign the ACS user to the user identity.
AcsUser buildingAResident = seam.UsersAcs.Create(
  // To associate the ACS user with a user identity,
  // include the userIdentityId.
  // Resources that you create for this ACS user
  // are available under the associated user identity.
  userIdentityId: janeUser.userIdentityId,
  acsSystemId: buildingA.acsSystemId,
  fullName: "Jane Doe",
  emailAddress: "jane@example.com"
);

// Step 5:
// Create a mobile key for the entrances to which
// you want to grant the ACS user access.
AcsCredential mobileKey = seam.CredentialsAcs.Create(
  acsUserId: buildingAResident.acsUserId,
  isMultiPhoneSyncCredential: true,
  accessMethod: "mobile_key",
  allowedAcsEntranceIds: new List<string>
  {
    // You can include multiple entrances per mobile key.
    roomEntrance.acsEntranceId,
    commonDoorEntrance.acsEntranceId
  },
  startsAt: "2024-07-13T16:50:42Z",
  endsAt: "2024-07-18T16:50:42Z"
);

Console.WriteLine(mobileKey);

// It is also useful to list the entrances
// to which the mobile key grants access.
seam.CredentialsAcs.ListAccessibleEntrances(
  acsCredentialId: mobileKey.acsCredentialId
);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "starts_at": "2024-07-13T16:50:42Z",
  "ends_at": "2024-07-18T16:50:42Z",
  ...
}
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "display_name": "Room Entrance",
  ...
}
{
  "acs_entrance_id": "55555555-5555-5555-5555-000000000000",
  "display_name": "Common Door Entrance",
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}


{% endtabs %}

***

## Next Steps

To learn more about using the Seam API with your Latch ACS, see the following topics:

* [Programming PIN Codes for Latch ACS Users](programming-code-based-latch-credentials.md)
* [Access Control Systems](../../products/access-systems/)
* [Credential-based ACS](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#credential-based-acs)
* [Managing ACS Users](../../products/access-systems/user-management.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Mobile Access](../../capability-guides/mobile-access/)
* [Access Control Systems](../../api/acs/) in the Seam API reference
* [User Identities](../../api/user_identities/) in the Seam API reference
