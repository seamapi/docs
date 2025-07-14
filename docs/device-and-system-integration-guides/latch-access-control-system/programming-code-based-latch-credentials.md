---
description: Learn how to create Latch PIN codes.
---

# Programming Code-Based Latch Credentials

## Requirements for Syncing PIN Code Access Updates

If you want to sync access updates to Latch-controlled entrances remotely, you must install the hard-wired [Latch hub](https://marketing.latch.com/latch-hub) to connect to all the wireless entrances. Once installed, you can use Seam to program code-based credentials, and the changes will sync automatically through the hub.

Alternately, you can update entrances manually using the [Latch Manager App](https://support.latch.com/hc/en-us/articles/16123811974935-Door-Updates) whenever you've made changes to your users' access.

***

## Program a Code-Based Latch Credential

To use the Seam API to program codes for users in a [Latch ACS](./):

1. Create an [ACS user](../../products/access-systems/user-management.md).
   * Specify the `acs_system_id` of the Latch ACS in the building to which you want to grant the new user access.
   * Specify the details of the new ACS user, such as their `full_name`, `email_address`, and so on.
2.  Create an [ACS credential](../../capability-guides/access-systems/managing-credentials.md).

    * Specify the `acs_user_id` of the user that you just created.
    * Specify the ID of the entrance to which you want to grant access.\
      Note that you must create a separate credential for each entrance to which you want to grant the ACS user access.
    * Specify the desired start and end dates and times for this access.
    * Set the `access_method` to `code`.

    Creating a new `acs_credential` object prompts the Latch ACS to generate a PIN code for the user.

{% hint style="info" %}
When you create a credential for a Latch ACS, you cannot specify a custom code. Instead, you must let Latch generate the PIN code.
{% endhint %}

The following example walks you through this process:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Step 1:
# Create the new user on the Latch ACS.
# jane_user is a user_identity that represents
# a user within your set of app users.
building_a_resident = seam.acs.users.create(
  acs_system_id = "11111111-1111-1111-1111-111111111111",
  user_identity_id = jane_user.user_identity_id,
  full_name = "Jane Doe",
  email_address = "jane@example.com"
)

# Step 2:
# Create a PIN code for each door for the ACS user.
for entrance in entrances:
  credential = seam.acs.credentials.create(
    acs_user_id = building_a_resident.acs_user_id,
    access_method = "code",
    allowed_acs_entrance_ids = [
      # You must specify only one entrance per PIN code.
      entrance.acs_entrance_id
    ],
    starts_at = "2024-07-13T16:50:42.072Z",
    ends_at = "2024-07-18T16:50:42.072Z"
  )

  pprint(credential)

  # View the list of entrances to which the credential
  # grants access.
  seam.acs.credentials.list_accessible_entrances(
    acs_credential_id = credential.acs_credential_id
  )
```

**Output:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  code='1234567',
  access_method='code',
  starts_at='2024-07-13T16:50:42.072Z',
  ends_at='2024-07-18T16:50:42.072Z',
  ...
)
[
  AcsEntrance(
    acs_entrance_id='55555555-5555-5555-5555-555555555555',
    display_name='Room Entrance',
    ...
  )
]
...
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Step 1:
# Create the new user on the Latch ACS.
# jane_user is a user_identity that represents
# a user within your set of app users.
building_a_resident=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"11111111-1111-1111-1111-111111111111\",
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${jane_user})\",
  \"full_name\": \"Jane Doe\",
  \"email_address\": \"jane@example.com\"
}")

# Step 2:
# Create a PIN code for each door for the ACS user.
for entrance_id in ${entrance_ids[@]};
do
  # You must specify only one entrance per PIN code.
  credential=$(curl -X 'POST' \
    'https://connect.getseam.com/acs/credentials/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
    \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${building_a_resident})\",
    \"access_method\": \"code\",
    \"allowed_acs_entrance_ids\": [
      \"${entrance_id}\"
    ],
    \"starts_at\": \"2024-07-13T16:50:42.072Z\",
    \"ends_at\": \"2024-07-18T16:50:42.072Z\"
  }");

  echo $credential;

  # It is also useful to list the entrances
  # to which the mobile key grants access.
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/acs/credentials/list_accessible_entrances' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
    \"acs_credential_id\": \"$(jq -r '.acs_credential_id' <<< ${credential})\"
  }";
done
```

**Output:**

```json
{
  "acs_credential":
    {
      "acs_credential_id": "66666666-6666-6666-6666-666666666666",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "code": "1234567",
      "access_method": "code",
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
    }
  ],
  "ok": true
}
...
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Step 1:
// Create the new user on the Latch ACS.
// janeUser is a user_identity that represents
// a user within your set of app users.
const buildingAResident = await seam.acs.users.create({
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: janeUser.user_identity_id,
  full_name: "Jane Doe",
  email_address: "jane@example.com"
});

// Step 2:
// Create a PIN code for each door for the ACS user.
for (const entrance of entrances) {
  const credential = await seam.acs.credentials.create({
    acs_user_id: buildingAResident.acs_user_id,
    access_method: "code",
    allowed_acs_entrance_ids: [
      // You must specify only one entrance per PIN code.
      entrance.acs_entrance_id
    ],
    starts_at: "2024-07-13T16:50:42.072Z",
    ends_at: "2024-07-18T16:50:42.072Z"
  });

  console.log(credential);

  // It is also useful to list the entrances
  // to which the mobile key grants access.
  await seam.acs.credentials.listAccessibleEntrances({
    acs_credential_id: credential.acs_credential_id
  });
}
```

**Output:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  code: '1234567',
  access_method: 'code',
  starts_at: '2024-07-13T16:50:42.072Z',
  ends_at: '2024-07-18T16:50:42.072Z',
  ...
}
[
  {
    acs_entrance_id: '55555555-5555-5555-5555-555555555555',
    display_name: 'Room Entrance',
    ...
  }
]
...
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
// Create the new user on the Latch ACS.
// $jane_user is a user_identity that represents
// a user within your set of app users.
$building_a_resident = $seam->acs->users->create(
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  user_identity_id: $jane_user->user_identity_id,
  full_name: "Jane Doe",
  email_address: "jane@example.com"
);

// Step 2:
// Create a PIN code for each door for the ACS user.
foreach ($entrances as $entrance) {
  $credential = $seam->acs->credentials->create(
    acs_user_id: $building_a_resident->acs_user_id,
    access_method: "code",
    allowed_acs_entrance_ids: [
      // You must specify only one entrance per PIN code.
      $entrance->acs_entrance_id
    ],
    starts_at: "2024-07-13T16:50:42.072Z",
    ends_at: "2024-07-18T16:50:42.072Z"
  );

  echo json_encode($credential, JSON_PRETTY_PRINT);

  // It is also useful to list the entrances
  // to which the mobile key grants access.
  $seam->acs->credentials->list_accessible_entrances(
    acs_credential_id: $credential->acs_credential_id
  );
}
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "code": "1234567",
  "access_method": "code",
  "starts_at": "2024-07-13T16:50:42.072Z",
  "ends_at": "2024-07-18T16:50:42.072Z",
  ...
}
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "display_name": "Room Entrance",
    ...
  }
]
...
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Step 1:
// Create the new user on the Latch ACS.
// janeUser is a UserIdentity that represents
// a user within your set of app users.
AcsUser buildingAResident = seam.UsersAcs.Create(
  acsSystemId: "11111111-1111-1111-1111-111111111111",
  userIdentityId: janeUser.userIdentityId,
  fullName: "Jane Doe",
  emailAddress: "jane@example.com"
);

// Step 2:
// Create a PIN code for each door for the ACS user.
foreach (AcsEntrance entrance in entrances)
{
  AcsCredential credential = seam.CredentialsAcs.Create(
    acsUserId: buildingAResident.acsUserId,
    accessMethod: "code",
    allowedAcsEntranceIds: new List<string>
    {
      // You must specify only one entrance per PIN code.
      entrance.acsEntranceId
    },
    startsAt: "2024-07-13T16:50:42Z",
    endsAt: "2024-07-18T16:50:42Z"
  );

  Console.WriteLine(credential);

  // It is also useful to list the entrances
  // to which the mobile key grants access.
  seam.CredentialsAcs.ListAccessibleEntrances(
    acsCredentialId: credential.acsCredentialId
  );
}
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "code": "1234567",
  "access_method": "code",
  "starts_at": "2024-07-13T16:50:42Z",
  "ends_at": "2024-07-18T16:50:42Z",
  ...
}
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "display_name": "Room Entrance",
  ...
}
...
```
{% endtab %}



{% endtabs %}

***

## Next Steps

To learn more about using the Seam API with your Latch ACS, see the following topics:

* [Programming Latch ACS Mobile Keys for App Users](programming-latch-acs-mobile-credentials.md)
* [Access Control Systems](../../products/access-systems/)
* [Credential-based ACS](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#credential-based-acs)
* [Managing ACS Users](../../products/access-systems/user-management.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Mobile Access](../../capability-guides/mobile-access/)
* [Access Control Systems](../../api/acs/) in the Seam API reference
* [User Identities](../../api/user_identities/) in the Seam API reference
