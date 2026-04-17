---
description: Learn how to create mobile credentials in the Salto KS ACS.
---

# Programming Salto KS Mobile Credentials

You can create mobile credentials that enable your mobile app users to unlock entrances in your [Salto KS ACS](./). For more information about Seam mobile keys, see [Mobile Access](../../capability-guides/mobile-access/).

To use the Seam API to create mobile credentials for mobile app users in a Salto KS ACS:

1.  Create a [user identity](../../api/user_identities/).

    Seam user identities enable you to match your own mobile app users to ACS users that you create using the Seam API.
2. Create an [ACS user](../../products/access-systems/user-management.md) on the Salto KS ACS or assign an existing ACS user to the user identity.\
   The resources that you create for the ACS user are available under the associated user identity.
   * For Salto KS, you can specify the `access_schedule` for the ACS user. The `access_schedule` consists of `starts_at` and `ends_at` times. In this case, a Salto KS ACS user appears as "unsubscribed" in the ACS until the `starts_at` time. Once the start time arrives, Seam switches the ACS user to "subscribed," which activates their access.
3. Assign the ACS user to one or more [access groups](../../capability-guides/access-systems/user-management/assigning-users-to-access-groups.md).
   * Each access group is preconfigured with the allowed entrances.
4. Create an [ACS credential](../../capability-guides/access-systems/managing-credentials.md) to represent the mobile key.
   * Specify the ID of the ACS user.
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
  "reservation_id": "3333122-433",
  "guest_email": "jane@example.com",
  "listing_id": "2222222-2222",
  "check_in": "2024-11-01T15:00:00.000Z",
  "check_out": "2024-11-04T11:00:00.000Z"
}

# Step 1:
# Create a user identity that corresponds to your user's mobile app account.
jane_user = seam.user_identities.create(
  email_address = "jane@example.com"
)

# Step 2:
# Create an access system user on the Salto KS access system.
# Specify the access schedule for the user.
reservation_user = seam.acs.users.create(
  user_identity_id = jane_user.user_identity_id,
  acs_system_id = building_a.acs_system_id,
  full_name = reservation["reservation_id"],
  access_schedule = {
    "starts_at": reservation["check_in"],
    "ends_at": reservation["check_out"]
  }
)

# Step 3:
# Add the access system user to all access groups for the listing.
for group_id_to_add in listing["seam_access_group_ids"]:
  seam.acs.users.add_to_access_group(
    acs_user_id = reservation_user.acs_user_id,
    acs_access_group_id = group_id_to_add
  )
  
# Step 4:
# Create a mobile key for the access system user.
reservation_mobile_key = seam.acs.credentials.create(
  acs_user_id = reservation_user.acs_user_id,
  is_multi_phone_sync_credential = True,
  access_method = "mobile_key"
)

# View the new credential.
pprint(reservation_mobile_key)
```

**Output:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_system_id='11111111-1111-1111-1111-111111111111',
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

# Define the listing.
listing_id="2222222-2222"
declare -a seam_access_group_ids=("555555-5555" "666666-6666")

# Define the reservation.
declare -A reservation=( \
  ["reservation_id"]="3333122-433" \
  ["guest_email"]="jane@example.com" \
  ["listing_id"]="2222222-2222", \
  ["check_in"]="2024-11-01T15:00:00.000Z" \
  ["check_out"]="2024-11-04T11:00:00.000Z" \
)

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
# Create an access system user on the Salto KS access system.
# Specify the access schedule for the user.
reservation_user=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${jane_user})\",
  \"full_name\": \"${reservation[reservation_id]}\",
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\",
  \"access_schedule\": {
      \"starts_at\": \"${reservation[check_in]}\",
      \"ends_at\": \"${reservation[check_out]}\"
  }
}")

# Step 3:
# Add the access system user to all access groups for the listing.
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

# Step 4:
# Create a mobile key for the access system user.
reservation_mobile_key=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${reservation_user})\",
  \"is_multi_phone_sync_credential\": true,
  \"access_method\": \"mobile_key\"
}");

# View the new credential.
echo $reservation_mobile_key;
```

**Output:**

```json
{
  "acs_credential":{
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
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
  "reservationId": "3333122-433",
  "guestEmail": "jane@example.com",
  "listingId": "2222222-2222",
  "checkIn": "2024-11-01T15:00:00.000Z",
  "checkOut": "2024-11-04T11:00:00.000Z"
};

// Step 1:
// Create a user identity that corresponds to your user's app account.
const janeUser = await seam.userIdentities.create({
  email_address: "jane@example.com"
});

// Step 2:
// Create an access system user on the Salto KS access system.
// Specify the access schedule for the user.
const reservationUser = await seam.acs.users.create({
  user_identity_id: janeUser.user_identity_id,
  full_name: reservation.reservationId,
  acs_system_id: buildingA.acs_system_id,
  access_schedule: {
    "starts_at": reservation.checkIn,
    "ends_at": reservation.checkOut
  }
});

// Step 3:
// Add the access system user to all access groups for the listing.
for (const groupIdToAdd of listing.seamAccessGroupIds) {
  await seam.acs.users.addToAccessGroup({
    acs_user_id: reservationUser.acs_user_id,
    acs_access_group_id: groupIdToAdd
  });
}

// Step 4:
// Create a mobile key for the access system user.
const reservationMobileKey = await seam.acs.credentials.create({
  acs_user_id: reservationUser.acs_user_id,
  access_method: "mobile_key",
  is_multi_phone_sync_credential: true
});

// View the new credential.
console.log(reservationMobileKey);
```

**Output:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
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

# Define the listing.
listing = {
  listing_id: "2222222-2222",
  seam_access_group_ids: [
    "555555-5555",
    "666666-6666"
  ]
}

# Define the reservation.
reservation = {
  reservation_id: "3333122-433",
  guest_email: "jane@example.com",
  listing_id: "2222222-2222",
  check_in: "2024-11-01T15:00:00.000Z",
  check_out: "2024-11-04T11:00:00.000Z"
}

# Step 1:
# Create a user identity that corresponds to your user's app account.
jane_user = seam.user_identities.create(
  email_address = "jane@example.com"
)

# Step 2:
# Create an access system user on the Salto KS access system.
# Specify the access schedule for the user.
reservation_user = seam.acs.users.create(
  user_identity_id: jane_user.user_identity_id,
  acs_system_id: building_a.acs_system_id,
  full_name: reservation[:reservation_id],
  access_schedule = {
    "starts_at": reservation[:check_in],
    "ends_at": reservation[:check_out]
  }
)

# Step 3:
# Add the access system user to all access groups for the listing.
access_group_ids = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
]
listing[:access_group_ids].each do |group_id_to_add|
  seam.acs.users.add_to_access_group(
    acs_user_id: reservation[:acs_user_id],
    acs_access_group_id: group_id_to_add
  )
end

# Step 4:
# Create a mobile key for the access system user.
reservation_mobile_key = seam.acs.credentials.create(
  acs_user_id: reservation_user[:acs_user_id],
  is_multi_phone_sync_credential: true,
  access_method: "mobile_key"
)

# View the new credential.
puts reservation_mobile_key.inspect
```

**Output:**

```
<Seam::Resources::AcsCredential:0x00618
  acs_credential_id="66666666-6666-6666-6666-666666666666"
  acs_system_id="11111111-1111-1111-1111-111111111111"
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
  "reservation_id" => "3333122-433",
  "guest_email" => "jane@example.com",
  "listing_id" => "2222222-2222",
  "check_in" => "2024-11-01T15:00:00.000Z",
  "check_out" => "2024-11-04T11:00:00.000Z"
);

// Step 1:
// Create a user identity that corresponds to your user's app account.
$jane_user = $seam->user_identities->create(
  email_address: "jane@example.com"
);

// Step 2:
// Create an access system user on the Salto KS access system.
// Specify the access schedule for the user.
$reservation_user = $seam->acs->users->create(
  user_identity_id: $jane_user->user_identity_id,
  full_name: $reservation["reservation_id"],
  acs_system_id: $building_a->acs_system_id,
  access_schedule: array(
    "starts_at" => $reservation["check_in"],
    "ends_at" => $reservation["check_out"]
  )
);

// Step 3:
// Add the access system user to all access groups for the listing.
foreach ($listing['seam_access_group_ids'] as $group_id_to_add) {
  $seam->acs->users->add_to_access_group(
    acs_user_id: $reservation_user->acs_user_id,
    acs_access_group_id: $group_id_to_add
  );
};

// Step 4:
// Create a mobile key for the access system user.
$reservation_mobile_key = $seam->acs->credentials->create(
  acs_user_id: $reservation_user->acs_user_id,
  is_multi_phone_sync_credential: true,
  access_method: "mobile_key"
);

// View the new credential.
echo json_encode($reservation_mobile_key, JSON_PRETTY_PRINT);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
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

## Next Steps

To learn more about using the Seam API with your Salto KS ACS, see the following topics:

* [Programming Code-Based Salto KS Credentials](programming-code-based-salto-ks-credentials.md)
* [Access Control Systems](../../products/access-systems/)
* [Credential-based ACS](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#credential-based-acs)
* [Managing ACS Users](../../products/access-systems/user-management.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Mobile Access](../../capability-guides/mobile-access/)
* [Access Control Systems](../../api/acs/) in the Seam API reference
* [User Identities](../../api/user_identities/) in the Seam API reference
