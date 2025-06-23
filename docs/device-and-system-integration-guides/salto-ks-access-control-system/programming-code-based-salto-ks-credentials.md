---
description: Learn how to create Salto KS PIN codes.
---

# Programming Salto KS PIN Code Credentials

To use the Seam API to program codes for users in a [Salto KS ACS](./):

1. Create an [ACS user](../../products/access-systems/user-management.md).
   * For Salto KS, you can specify the `access_schedule` for the new ACS user. An `access_schedule` consists of `starts_at` and `ends_at` times. In this case, a Salto KS ACS user appears as "unsubscribed" in the ACS until the `starts_at` time. Once the start time arrives, Seam switches the ACS user to "subscribed," which activates their access.
2. Assign access permissions to the ACS user by assigning them to one or more [access groups](../../capability-guides/access-systems/user-management/assigning-users-to-access-groups.md).
   * Each access group is preconfigured with specific entrances and schedules.
3.  Create an [ACS credential](../../capability-guides/access-systems/managing-credentials.md).

    * Specify the ID of the ACS user.
    * Set the `access_method` to `code`.

    Creating a new `acs_credential` object triggers the Salto KS ACS to generate a PIN code for the user.

{% hint style="info" %}
When you create a credential for a Salto KS ACS, you cannot specify a custom code. Instead, you must let Salto KS generate the PIN code.
{% endhint %}

The following example walks you through this process:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the ACS system.
building_a = seam.acs.systems.get(
  acs_system_id="11111111-1111-1111-1111-111111111111"
)

# Step 1:
# Create the new ACS user, including the
# desired access schedule.
acs_user = seam.acs.users.create(
  full_name = "Jane Doe",
  acs_system_id = building_a.acs_system_id,
  access_schedule = {
    "starts_at": "2024-11-01T15:00:00.000Z",
    "ends_at": "2024-11-04T11:00:00.000Z"
  }
)

# Step 2:
# Add the ACS user to all desired access groups.
access_group_ids = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
]
for access_group_id in access_group_ids:
  seam.acs.users.add_to_access_group(
    acs_user_id = acs_user.acs_user_id,
    acs_access_group_id = access_group_id
  )

# Step 3:
# Create a PIN code for the ACS user.
pin_code = seam.acs.credentials.create(
  acs_user_id = acs_user.acs_user_id,
  access_method = "code"
)

# View the new credential.
pprint(pin_code)
```

**Output:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_system_id='11111111-1111-1111-1111-111111111111',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  code='123456',
  access_method='code',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Get the ACS system.
building_a=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"11111111-1111-1111-1111-111111111111\"
}")

# Step 1:
# Create the new ACS user, including the
# desired access schedule.
acs_user=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"full_name\": \"Jane Doe\",
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\",
  \"access_schedule\": {
      \"starts_at\": \"2024-11-01T15:00:00.000Z\",
      \"ends_at\": \"2024-11-04T11:00:00.000Z\"
  }
}")

# Step 2:
# Add the ACS user to all desired access groups.
declare -a access_group_ids=("44444444-4444-4444-4444-333333333333" "44444444-4444-4444-4444-444444444444")
for access_group_id in ${access_group_ids[@]};
do
  curl -X 'POST' \
    'https://connect.getseam.com/acs/users/add_to_access_group' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
    \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${acs_user})\",
    \"acs_access_group_id\": \"$access_group_id\"
  }";
done

# Step 3:
# Create a PIN code for the ACS user.
pin_code=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${acs_user})\",
  \"access_method\": \"code\"
}")

# View the new credential.
echo $pin_code
```

**Output:**

```json
{
  "acs_credential":{
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "code": "123456",
    "access_method": "code",
    ...
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Get the ACS system.
const buildingA = await seam.acs.systems.get({
  acs_system_id: "11111111-1111-1111-1111-111111111111"
});

// Step 1:
// Create the new ACS user, including the
// desired access schedule.
const acsUser = await seam.acs.users.create({
  full_name: "Jane Doe",
  acs_system_id: buildingA.acs_system_id,
  access_schedule: {
    "starts_at": "2024-11-01T15:00:00.000Z",
    "ends_at": "2024-11-04T11:00:00.000Z"
  }
});

// Step 2:
// Add the ACS user to all desired access groups.
const accessGroupIds = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
];
for (const accessGroupId of accessGroupIds) {
  await seam.acs.users.addToAccessGroup({
    acs_user_id: acsUser.acs_user_id,
    acs_access_group_id: accessGroupId
  });
}

// Step 3:
// Create a PIN code for the ACS user.
const pinCode = await seam.acs.credentials.create({
  acs_user_id: acsUser.acs_user_id,
  access_method: "code"
});

// View the new credential.
console.log(pinCode);
```

**Output:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  code: '123456',
  access_method: 'code',
  ...
}
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
// Get the ACS system.
$building_a = $seam->acs->systems->get(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);

// Step 1:
// Create the new ACS user, including the
// desired access schedule.
$acs_user = $seam->acs->users->create(
  full_name: "Jane Doe",
  acs_system_id: $building_a->acs_system_id,
  access_schedule: array(
    "starts_at" => "2024-11-01T15:00:00.000Z",
    "ends_at" => "2024-11-04T11:00:00.000Z"
  )
);

// Step 2:
// Add the ACS user to all desired access groups.
$access_group_ids = array(
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
);
foreach ($access_group_ids as $access_group_id) {
  $seam->acs->users->add_to_access_group(
    acs_user_id: $acs_user->acs_user_id,
    acs_access_group_id: $access_group_id
  );
};

// Step 3:
// Create a PIN code for the ACS user.
$pin_code = $seam->acs->credentials->create(
  acs_user_id: $acs_user->acs_user_id,
  access_method: "code"
);

// View the new credential.
echo json_encode($pin_code, JSON_PRETTY_PRINT);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "code": "123456",
  "access_method": "code",
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

To learn more about using the Seam API with your Salto KS ACS, see the following topics:

* [Access Control Systems](../../products/access-systems/)
* [Access Group-Based Access Control Systems](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#access-group-based-access-control-systems)
* [Managing ACS Users](../../products/access-systems/user-management.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Mobile Access](../../capability-guides/mobile-access/)
* [Access Control Systems](../../api/acs/) in the Seam API reference
* [User Identities](../../api/user_identities/) in the Seam API reference
