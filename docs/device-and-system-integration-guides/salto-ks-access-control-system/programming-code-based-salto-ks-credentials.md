---
description: Learn how to create Salto KS PIN codes.
---

# Programming Code-Based Salto KS Credentials

To use the Seam API to program codes for users in a [Salto KS ACS](./):

1. Create an [ACS user](../../products/access-systems/user-management.md).
   * For Salto KS, you can specify the `access_schedule` for the new ACS user. An `access_schedule` consists of `starts_at` and `ends_at` times. In this case, a Salto KS ACS user appears as "unsubscribed" in the ACS until the `starts_at` time. Once the start time arrives, Seam switches the ACS user to "subscribed," which activates their access.
2. Assign access permissions to the ACS user by assigning them to one or more [access groups](../../products/access-systems/assigning-users-to-access-groups.md).
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

# Define the listing.
listing = {
  "listing_id": "2222222-2222",
  "seam_access_group_ids": [
    "555555-5555",
    "666666-6666"
  ]
}

# Define the reservation.
reservation = {
  "reservation_id": "3333122-432",
  "guest_email": "jane@example.com",
  "listing_id": "2222222-2222",
  "check_in": "2024-11-01T15:00:00.000Z",
  "check_out": "2024-11-04T11:00:00.000Z"
}

# Step 1:
# Create the new ACS user, including the
# desired access schedule.
reservation_user = seam.acs.users.create(
  full_name = reservation["reservation_id"],
  acs_system_id = building_a.acs_system_id,
  access_schedule = {
    "starts_at": reservation["check_in"],
    "ends_at": reservation["check_out"]
  }
)

# Step 2:
# Add the ACS user to all access groups for the listing.
for group_id_to_add in listing["seam_access_group_ids"]:
  seam.acs.users.add_to_access_group(
    acs_user_id = reservation_user.acs_user_id,
    acs_access_group_id = group_id_to_add
  )

# Step 3:
# Create a PIN code for the ACS user.
reservation_pin_code = seam.acs.credentials.create(
  acs_user_id = reservation_user.acs_user_id,
  access_method = "code"
)

# View the new credential.
pprint(reservation_pin_code)
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

# Define the listing.
listing_id="2222222-2222"
declare -a seam_access_group_ids=("555555-5555" "666666-6666")

# Define the reservation.
declare -A reservation=( \
  ["reservation_id"]="3333122-432" \
  ["guest_email"]="jane@example.com" \
  ["listing_id"]="2222222-2222", \
  ["check_in"]="2024-11-01T15:00:00.000Z" \
  ["check_out"]="2024-11-04T11:00:00.000Z" \
)

# Step 1:
# Create the new ACS user, including the
# desired access schedule.
reservation_user=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"full_name\": \"${reservation[reservation_id]}\",
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\",
  \"access_schedule\": {
      \"starts_at\": \"${reservation[check_in]}\",
      \"ends_at\": \"${reservation[check_out]}\"
  }
}")

# Step 2:
# Add the ACS user to all access groups for the listing.
for group_id_to_add in ${seam_access_group_ids[@]};
do
  curl -X 'POST' \
    'https://connect.getseam.com/acs/users/add_to_access_group' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
    \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${reservation_user})\",
    \"acs_access_group_id\": \"$group_id_to_add\"
  }";
done

# Step 3:
# Create a PIN code for the ACS user.
reservation_pin_code=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${reservation_user})\",
  \"access_method\": \"code\"
}")

# View the new credential.
echo $reservation_pin_code
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

// Define the listing.
const listing = {
  "listingId": "2222222-2222",
  "seamAccessGroupIds": [
    "555555-5555",
    "666666-6666"
  ]
};

// Define the reservation.
const reservation = {
  "reservationId": "3333122-432",
  "guestEmail": "jane@example.com",
  "listingId": "2222222-2222",
  "checkIn": "2024-11-01T15:00:00.000Z",
  "checkOut": "2024-11-04T11:00:00.000Z"
};

// Step 1:
// Create the new ACS user, including the
// desired access schedule.
const reservationUser = await seam.acs.users.create({
  full_name: reservation.reservationId,
  acs_system_id: buildingA.acs_system_id,
  access_schedule: {
    "starts_at": reservation.checkIn,
    "ends_at": reservation.checkOut
  }
});

// Step 2:
// Add the ACS user to all access groups for the listing.
for (const groupIdToAdd of listing.seamAccessGroupIds) {
  await seam.acs.users.addToAccessGroup({
    acs_user_id: reservationUser.acs_user_id,
    acs_access_group_id: groupIdToAdd
  });
}

// Step 3:
// Create a PIN code for the ACS user.
const reservationPinCode = await seam.acs.credentials.create({
  acs_user_id: reservationUser.acs_user_id,
  access_method: "code"
});

// View the new credential.
console.log(reservationPinCode);
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

// Define the listing.
$listing = array(
  "listing_id" => "2222222-2222",
  "seam_access_group_ids" => array(
    "555555-5555",
    "666666-6666"
  )
);

// Define the reservation.
$reservation = array(
  "reservation_id" => "3333122-432",
  "guest_email" => "jane@example.com",
  "listing_id" => "2222222-2222",
  "check_in" => "2024-11-01T15:00:00.000Z",
  "check_out" => "2024-11-04T11:00:00.000Z"
);

// Step 1:
// Create the new ACS user, including the
// desired access schedule.
$reservation_user = $seam->acs->users->create(
  full_name: $reservation["reservation_id"],
  acs_system_id: $building_a->acs_system_id,
  access_schedule: array(
    "starts_at" => $reservation["check_in"],
    "ends_at" => $reservation["check_out"]
  )
);

// Step 2:
// Add the ACS user to all access groups for the listing.
foreach ($listing['seam_access_group_ids'] as $group_id_to_add) {
  $seam->acs->users->add_to_access_group(
    acs_user_id: $reservation_user->acs_user_id,
    acs_access_group_id: $group_id_to_add
  );
};

// Step 3:
// Create a PIN code for the ACS user.
$reservation_pin_code = $seam->acs->credentials->create(
  acs_user_id: $reservation_user->acs_user_id,
  access_method: "code"
);

// View the new credential.
echo json_encode($reservation_pin_code, JSON_PRETTY_PRINT);
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

{% tab title="Go" %}
**Code:**

```go
// Get the ACS system.
buildingA, err := client.Acs.Systems.Get(
  context.Background(), &acs.SystemsGetRequest{
    AcsSystemId: "11111111-1111-1111-1111-111111111111",
  },
)
if err != nil {
  return err
}

// Define the listing.
// listingId := "2222222-2222"
seamAccessGroupIds := [...]string{
  "555555-5555",
  "666666-6666",
}

// Define the reservation.
reservation := map[string]string{
  "reservationId": "3333122-432",
  "guestEmail": "jane@example.com",
  "listingId": "2222222-2222",
}

checkIn, err := time.Parse(time.RFC3339, "2024-11-01T15:00:00Z")
checkOut, err := time.Parse(time.RFC3339, "2024-11-04T11:00:00Z")
if err != nil {
  return err
}

// Step 1:
// Create the new ACS user, including the
// desired access schedule.
reservationUser, err := client.Acs.Users.Create(
  context.Background(), &acs.UsersCreateRequest{
    FullName: api.String(reservation["reservationId"]),
    AcsSystemId: buildingA.AcsSystemId,
    AccessSchedule: &acs.UsersCreateRequestAccessSchedule{
      StartsAt: checkIn,
      EndsAt: checkOut,
    },
  },
)
if err != nil {
  return err
}

// Step 2:
// Add the ACS user to all access groups for the listing.
for _, groupIdToAdd := range seamAccessGroupIds {
  client.Acs.Users.AddToAccessGroup(
    context.Background(), &acs.UsersAddToAccessGroupRequest{
      AcsUserId: reservationUser.AcsUserId,
      AcsAccessGroupId: groupIdToAdd,
    },
  )
  if err != nil {
    return err
  }
}

// Step 3:
// Create a PIN code for the ACS user.
reservationPinCode, err := client.Acs.Credentials.Create(
  context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: reservationUser.AcsUserId,
    AccessMethod: "code",
})
if err != nil {
    return err
}

// View the new credential.
fmt.Println(reservationPinCode)
return nil
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
{% endtabs %}

***

## Next Steps

To learn more about using the Seam API with your Salto KS ACS, see the following topics:

* [Access Control Systems](../../products/access-systems/)
* [Access Group-Based Access Control Systems](../../capability-guides/access-systems/understanding-access-control-system-differences.md#access-group-based-access-control-systems)
* [Managing ACS Users](../../products/access-systems/user-management.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Mobile Access](../../products/mobile-access-in-development/)
* [Access Control Systems](../../api/acs/) in the Seam API reference
* [User Identities](../../api-clients/user\_identities/) in the Seam API reference
