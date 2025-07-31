---
description: Learn how Seam makes it easy to tag Seam resources with your own internal IDs.
---

# Mapping Your Resources to Seam Resources

Seam enables you to set a custom unique key on each instance of resources, like Spaces, User Identities, and Access Grants. Use these keys to map your own data—such as rooms, listings, or reservations—to the corresponding Seam resources. In addition, you can link your own customers with the Connect Webviews and resulting Connected Accounts that they use to connect their devices and systems to Seam.

Resource keys make it easier to cross-reference and sync information between your systems and Seam.

Each resource includes a `<resource>_key` property in which you can store your own identifier. For example:

* `space_key` for [Spaces](../api/spaces/)
* `user_identity_key` for [User Identities](../api/user_identities/)
* `access_grant_key` for [Access Grants](../api/access_grants/)
* `customer_key` for [Connect Webviews](../api/connect_webviews/) and [Connected Accounts](../api/connected_accounts/)

Resource keys of each type generally need to be unique within your workspace. For example, if you save a Space with the `space_key` `room-101-id`, you cannot create another Space with this key.

The one exception is with `customer_key`, where you can create multiple Connect Webviews using the same  `customer_key`.

The guide describes how to add resources keys to Seam resources of various relevant types and also how to retrieve a Seam resource using a resource key.

***

## **Associating Connected Accounts with Your Customers**

[Connected Accounts](connected-accounts/) represent connections that your customers set up with their own devices or access systems through your app. You embed a [Connect Webview](connect-webviews/) in your app, and your customers establish these connections by authenticating their device or system accounts through the pre-built Connect Webview flow. Each successful connection creates a Connected Account in your Seam workspace. Each Connected Account is linked to a specific customer.

When you create an instance of a Connect Webview, you can tag it with a customer key. When your customer completes the authentication flow through this Connect Webview, Seam automatically copies the `customer_key` to the resulting Connected Account. You can then use the `customer_key` to retrieve the Connected Account consistently.

### Create a Connect Webview for a Specific Customer

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.connect_webviews.create(
  accepted_providers = your_list_of_providers,
  customer_key = "customer-id" # Your unique identifier for the customer
)
```

**Output:**

```
ConnectWebview(
  connect_webview_id='12345678-1234-1234-1234-123456789012',
  customer_key='customer-id',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Include your unique identifier for the customer.
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"accepted_providers\": \"${your_list_of_providers}\",
  \"customer_key\": \"${customer-id}\"
}"
```

**Output:**

```json
{
  "connect_webview": {
    "connect_webview_id": "12345678-1234-1234-1234-123456789012",
    "customer_key": "customer-id",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.connectWebviews.create({
  accepted_providers: "",
  customer_key: "customer-id" // Your unique identifier for the customer
})
```

**Output:**

```json
{
  connect_webview_id: '12345678-1234-1234-1234-123456789012',
  customer_key: 'customer-id',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
client.connect_webviews.create(
  accepted_providers: "",
  customer_key: "customer-id" # Your unique identifier for the customer
)
```

**Output:**

```
<Seam::ConnectWebview:0x00438
    connect_webview_id="12345678-1234-1234-1234-123456789012"
    customer_key="customer-id"
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$created_connect_webview = $seam->connect_webviews->create(
  accepted_providers: "",
  customer_key: "customer-id" // Your unique identifier for the customer
);
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "customer_key": "customer-id",
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

### Retrieve All Connected Accounts for a Specific Customer

Once your customer has completed the Connect Webview authentication flow, and Seam has copied the `customer_key` to the resulting Connected Account, you can list all Connected Accounts associated with a specific `customer_key` tag. Then, you can also list all devices or systems associated with the customer, using the retrieved Connected Account ID.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
connected_accounts = seam.connected_accounts.list(
  customer_key="customer-id"
)

customer_systems = []

for account in connected_accounts:
  systems = seam.acs.systems.list(
    connected_account_id=account.connected_account_id
  )
  
  customer_systems.extend(systems)
    
pprint(customer_systems)
```

**Output:**

```
[
  AcsSystem(
    connected_account_id="11111111-1111-1111-1111-111111111111",
    acs_system_id="22222222-2222-2222-2222-222222222222",
    name="Salto KS Site",
    ...
  ),
  AcsSystem(
    connected_account_id="11111111-1111-1111-1111-111111111111",
    acs_system_id="33333333-3333-3333-3333-333333333333",
    name="Salto Space Site",
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
connected_accounts=$(curl -X GET \
  'https://connect.getseam.com/connected_accounts/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"customer_key\": \"${customer-id}\"
  }")

account_ids=$(echo $connected_accounts | jq -r '.connected_accounts[].connected_account_id')

customer_systems="[]"
for account_id in $account_ids; do
  systems=$(curl -X GET \
  'https://connect.getseam.com/acs/systems/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"connected_account_id\": \"${account_id}\"
  }")
  customer_systems=$(jq -s '.[0] + .[1]' <(echo "$customer_systems") <(echo $systems | jq '.systems'))
done

echo $customer_systems
```

**Output:**

```json
{
  "acs_systems": [
    {
      "connected_account_id": "11111111-1111-1111-1111-111111111111",
      "acs_system_id": "22222222-2222-2222-2222-222222222222",
      "name": "Salto KS Site",
      ...
    },
    {
      "connected_account_id": "11111111-1111-1111-1111-111111111111",
      "acs_system_id": "33333333-3333-3333-3333-333333333333",
      "name": "Salto Space Site",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const connected_accounts = await seam.connected_accounts.list({
  customer_key: "customer-id"
})

let customerSystems = []

for (const account of connectedAccounts) {
  const systems = await seam.acs.systems.list({
    connected_account_id: account.connected_account_id
  });
  customerSystems.push(...systems);
}

console.log(customerSystems)
```

**Output:**

```json
[
  {
    connected_account_id: '11111111-1111-1111-1111-111111111111',
    acs_system_id: '22222222-2222-2222-2222-222222222222',
    name: 'Salto KS Site',
    ...
  },
  {
    connected_account_id: '11111111-1111-1111-1111-111111111111',
    acs_system_id: '33333333-3333-3333-3333-333333333333',
    name: 'Salto Space Site',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
connected_accounts = seam.connected_accounts.list(
  customer_key: "customer-id"
)

customer_systems = []

connected_accounts.each do |account|
  systems = seam.acs.systems.list(
    connected_account_id: account.connected_account_id
  )
  customer_systems.concat(systems)
end

puts customer_systems.inspect
```

**Output:**

```
[
  <Seam::AcsSystem:0x00438
    connected_account_id="11111111-1111-1111-1111-111111111111"
    acs_system_id="22222222-2222-2222-2222-222222222222"
    name="Salto KS Site"
    ...
  >,
  <Seam::AcsSystem:0x00438
    connected_account_id="11111111-1111-1111-1111-111111111111"
    acs_system_id="33333333-3333-3333-3333-333333333333"
    name="Salto Space Site"
    ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$connected_accounts = $seam->connected_accounts->list(
  'customer_key' => 'customer-id'
);

$customer_systems = [];

foreach ($connected_accounts as $account) {
  $systems = $seam->acs->systems->list(
    "connected_account_id" : $account->connected_account_id
  );
  $customer_systems = array_merge($customer_systems, $systems);
}

echo json_encode($customer_systems);
```

**Output:**

{% code overflow="wrap" %}
```json
[
  {
    "connected_account_id": "11111111-1111-1111-1111-111111111111",
    "acs_system_id": "22222222-2222-2222-2222-222222222222",
    "name": "Salto KS Site",
    ...
  },
  {
    "connected_account_id": "11111111-1111-1111-1111-111111111111",
    "acs_system_id": "33333333-3333-3333-3333-333333333333",
    "name": "Salto Space Site",
    ...
  },
  ...
]
```
{% endcode %}
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

Any accounts that your customer sets up also carry this `customer_key`, so you can associate their connected systems with their properties, Spaces, and reservations in your own database.

***

## **Associating a Seam Space with Your Own Resource**

When you create a Seam space resource, you can include your own ID as the value for the `space_key`. Some examples of resources that you could tie to a Space include hotel rooms, apartments, or common area amenities.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.spaces.create(
  name = "Valley Grove - Room 104",
  acs_entrance_ids = [unit_104_entrance.acs_entrance_id],
  space_key = "room-104-id" # Your room ID
)
```

**Output:**

```
Space(
  space_id='44444444-4444-4444-4444-444444444444',
  name='Valley Grove - Room 104',
  space_key='room-104-id',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Include your room ID.
curl -X 'POST' \
  'https://connect.getseam.com/spaces/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"name\": \"Valley Grove - Room 104\",
  \"acs_entrance_ids\": [\"$(jq -r '.acs_entrance.acs_entrance_id' <<< ${unit_104_entrance})\"],
  \"space_key\": \"room-104-id\"
}"
```

**Output:**

```json
{
  "space": {
    "space_id": "44444444-4444-4444-4444-444444444444",
    "name": "Valley Grove - Room 104",
    "space_key": "room-104-id",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.spaces.create({
  name: "Valley Grove - Room 104",
  acs_entrance_ids: [unit104Entrance.acs_entrance_id],
  space_key: "room-104-id" // Your room ID
})
```

**Output:**

```json
{
  space_id: '44444444-4444-4444-4444-444444444444',
  name: 'Valley Grove - Room 104',
  space_key: 'room-104-id',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
client.spaces.create(
  name: "Valley Grove - Room 104",
  acs_entrance_ids: [unit_104_entrance.acs_entrance_id],
  space_key: "room-104-id" # Your room ID
)
```

**Output:**

```
<Seam::Space:0x00438
    space_id="44444444-4444-4444-4444-444444444444"
    name="Valley Grove - Room 104"
    space_key="room-104-id"
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->spaces->create(
  name: "Valley Grove - Room 104",
  acs_entrance_ids: [$unit_104_entrance->acs_entrance_id],
  space_key: "room-104-id" // Your room ID
);  
```

**Output:**

```json
{
  "space_id": "44444444-4444-4444-4444-444444444444",
  "name": "Valley Grove - Room 104",
  "space_key": "room-104-id",
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

## Associating a Seam User Identity with Your User

You can use the `user_identity_key` to link a Seam User Identity with your ID for a user, such as a hotel guest, resident, and so on.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.user_identities.create(
  full_name = "Jane Doe",
  user_identity_key = "user-123-id" # Your end user ID
)
```

**Output:**

```
UserIdentity(
  user_identity_id='55555555-5555-5555-5555-555555555555',
  full_name='Jane Doe',
  user_identity_key='user-123-id',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Include your end user ID.
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "full_name": "Jane Doe",
  "user_identity_key": "user-123-id"
}'
```

**Output:**

```json
{
  "space": {
    "user_identity_id": "55555555-5555-5555-5555-555555555555",
    "full_name": "Jane Doe",
    "user_identity_key": "user-123-id",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.userIdentities.create({
  full_name: "Jane Doe",
  user_identity_key: "user-123-id" // Your end user ID
})
```

**Output:**

```json
{
  user_identity_id: '55555555-5555-5555-5555-555555555555',
  full_name: 'Jane Doe',
  user_identity_key: 'user-123-id',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
client.user_identities.create(
  full_name: "Jane Doe",
  user_identity_key: "user-123-id" # Your end user ID
)
```

**Output:**

```
<Seam::UserIdentity:0x00438
    user_identity_id="55555555-5555-5555-5555-555555555555"
    full_name="Jane Doe"
    user_identity_key="user-123-id"
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->user_identities->create(
  full_name: "Jane Doe",
  user_identity_key: "user-123-id" // Your end user ID
);
```

**Output:**

```json
{
  "user_identity_id": "55555555-5555-5555-5555-555555555555",
  "full_name": "Jane Doe",
  "user_identity_key": "user-123-id",
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

## **Associating a Seam Access Grant with Your Own Resource**

You can add your own booking or lease reference to a Seam Access Grant as an `access_grant_key`. Some examples of resources that you could tie to an Access Grant include a guest booking, apartment lease, or gym day pass.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.create(
  user_identity_id=user_identity.user_identity_id,
  starts_at="2025-08-13T15:00:00.000Z",
  ends_at="2025-08-16T11:00:00.000Z",
  requested_access_methods=[
    {"mode": "mobile_key"}
  ],
  space_ids=[room_104_id],
  access_grant_key="booking-789-id" # Your booking or lease reference
)
```

**Output:**

```python
AccessGrant(
  access_grant_id="66666666-6666-6666-6666-666666666666",
  access_grant_key="booking-789-id",
  starts_at="2025-08-13T15:00:00.000Z",
  ends_at="2025-08-16T11:00:00.000Z",
  user_identity_id="55555555-5555-5555-5555-555555555555",
  space_ids=[ "44444444-4444-4444-4444-444444444444" ],
  requested_access_methods=[
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ],
  instant_key_url="https://ik.seam.co/ABCXYZ",
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
# Include your booking or lease reference.
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${user_identity})\",
    \"starts_at\": \"2025-08-13T15:00:00.000Z\",
    \"ends_at\": \"2025-08-16T11:00:00.000Z\",
    \"requested_access_methods\": [
      {\"mode\": \"mobile_key\"}
    ],
    \"space_ids\": [\"${room_104_id}\"],
    \"access_grant_key\": \"booking-789-id\"
}"
```

**Output:**

```json
{
  "access_grant": {
    "access_grant_id": "66666666-6666-6666-6666-666666666666",
    "access_grant_key": "booking-789-id",
    "starts_at": "2025-08-13T15:00:00.000Z",
    "ends_at": "2025-08-16T11:00:00.000Z",
    "user_identity_id": "55555555-5555-5555-5555-555555555555",
    "space_ids": [ "44444444-4444-4444-4444-444444444444" ],
    "requested_access_methods": [
      {
        "display_name": "Mobile Key Credential",
        "mode": "mobile_key",
        "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
        ...
      }
    ],
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    ...
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.create({
  user_identity_id: userIdentity.user_identity_id,
  starts_at: "2025-08-13T15:00:00.000Z",
  ends_at: "2025-08-16T11:00:00.000Z",
  requested_access_methods: [
    {"mode": "mobile_key"}
  ],
  space_ids: [room104Id],
  access_grant_key: "booking-789-id" // Your booking or lease reference
});
```

**Output:**

```json
{
  "access_grant_id": "66666666-6666-6666-6666-666666666666",
  "access_grant_key": "booking-789-id",
  "starts_at": "2025-08-13T15:00:00.000Z",
  "ends_at": "2025-08-16T11:00:00.000Z",
  "user_identity_id": "55555555-5555-5555-5555-555555555555",
  "space_ids": [ "44444444-4444-4444-4444-444444444444" ],
  "requested_access_methods": [
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ],
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.create(
  user_identity_id: user_identity.user_identity_id,
  starts_at: "2025-08-13T15:00:00.000Z",
  ends_at: "2025-08-16T11:00:00.000Z",
  requested_access_methods: [
    {"mode": "mobile_key"}
  ],
  space_ids: %w[ room_104_id ],
  access_grant_key: "booking-789-id" # Your booking or lease reference
)
```

**Output:**

```ruby
<Seam::AccessGrant:0x00438
  access_grant_id="66666666-6666-6666-6666-666666666666"
  access_grant_key="booking-789-id"
  starts_at="2025-08-13T15:00:00.000Z"
  ends_at="2025-08-16T11:00:00.000Z"
  user_identity_id="55555555-5555-5555-5555-555555555555"
  space_ids: [ "44444444-4444-4444-4444-444444444444" ]
  requested_access_methods: [
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ]
  instant_key_url: "https://ik.seam.co/ABCXYZ"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->create(
  user_identity_id: $user_identity->user_identity_id,
  starts_at: "2025-08-13T15:00:00.000Z",
  ends_at: "2025-08-16T11:00:00.000Z"
  requested_access_methods: [
    ["mode" => "mobile_key"]
  ],
  space_ids: [ room_104_id ],
  access_grant_key: "booking-789-id" // Your booking or lease reference
);
```

**Output:**

```php
{
  "access_grant_id": "66666666-6666-6666-6666-666666666666",
  "access_grant_key": "booking-789-id",
  "starts_at": "2025-08-13T15:00:00.000Z",
  "ends_at": "2025-08-16T11:00:00.000Z",
  "user_identity_id": "55555555-5555-5555-5555-555555555555",
  "space_ids": [ "44444444-4444-4444-4444-444444444444" ],
  "requested_access_methods": [
    {
      "display_name": "Mobile Key Credential",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ],
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

***

## Retrieving a Resource Using the `<resource>_key`

Once you have linked your resources to Seam resources using resource keys, you can retrieve a Seam resource using your custom unique identifier for it.

The following example retrieves a Seam Space using a `space_key`:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.spaces.get(
  space_key = "room-104-id"
)
```

**Output:**

```
Space(
  space_id='44444444-4444-4444-4444-444444444444',
  name='Valley Grove - Room 104',
  space_key='room-104-id',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/spaces/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "space_key": "room-104-id"
}'
```

**Output:**

```json
{
  "space": {
    "space_id": "44444444-4444-4444-4444-444444444444",
    "name": "Valley Grove - Room 104",
    "space_key": "room-104-id",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.spaces.get({
  space_key: "room-104-id"
})
```

**Output:**

```json
{
  space_id: '44444444-4444-4444-4444-444444444444',
  name: 'Valley Grove - Room 104',
  space_key: 'room-104-id',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
client.spaces.get(
  space_key: "room-104-id"
)
```

**Output:**

```
<Seam::Space:0x00438
    space_id="44444444-4444-4444-4444-444444444444"
    name="Valley Grove - Room 104"
    space_key="room-104-id"
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->spaces->get(
  space_key: "room-104-id"
);
```

**Output:**

```json
{
  "space_id": "44444444-4444-4444-4444-444444444444",
  "name": "Valley Grove - Room 104",
  "space_key": "room-104-id",
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

The following example retrieves a Seam Access Grant using an `access_grant_key`:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.get(
  access_grant_key = "booking-789-id"
)
```

**Output:**

```
AccessGrant(
  access_grant_id="66666666-6666-6666-6666-666666666666",
  access_grant_key="booking-789-id",
  starts_at="2025-08-13T15:00:00.000Z",
  ends_at="2025-08-16T11:00:00.000Z",
  user_identity_id="55555555-5555-5555-5555-555555555555",
  space_ids=[ "44444444-4444-4444-4444-444444444444" ],
  requested_access_methods=[
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ],
  instant_key_url="https://ik.seam.co/ABCXYZ",
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_grant_key": "booking-789-id"
}'
```

**Output:**

```json
{
  "access_grant": {
    "access_grant_id": "66666666-6666-6666-6666-666666666666",
    "access_grant_key": "booking-789-id",
    "starts_at": "2025-08-13T15:00:00.000Z",
    "ends_at": "2025-08-16T11:00:00.000Z",
    "user_identity_id": "55555555-5555-5555-5555-555555555555",
    "space_ids": [ "44444444-4444-4444-4444-444444444444" ],
    "requested_access_methods": [
      {
        "display_name": "Mobile Key Credential",
        "mode": "mobile_key",
        "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
        ...
      }
    ],
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    ...
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.get({
  access_grant_key: "booking-789-id"
})
```

**Output:**

```json
{
  "access_grant_id": "66666666-6666-6666-6666-666666666666",
  "access_grant_key": "booking-789-id",
  "starts_at": "2025-08-13T15:00:00.000Z",
  "ends_at": "2025-08-16T11:00:00.000Z",
  "user_identity_id": "55555555-5555-5555-5555-555555555555",
  "space_ids": [ "44444444-4444-4444-4444-444444444444" ],
  "requested_access_methods": [
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ],
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
client.access_grants.get(
  access_grant_key: "booking-789-id"
)
```

**Output:**

```
<Seam::AccessGrant:0x00438
  access_grant_id="66666666-6666-6666-6666-666666666666"
  access_grant_key="booking-789-id"
  starts_at="2025-08-13T15:00:00.000Z"
  ends_at="2025-08-16T11:00:00.000Z"
  user_identity_id="55555555-5555-5555-5555-555555555555"
  space_ids: [ "44444444-4444-4444-4444-444444444444" ]
  requested_access_methods: [
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ]
  instant_key_url: "https://ik.seam.co/ABCXYZ"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->get(
  access_grant_key: "booking-789-id"
);
```

**Output:**

```json
{
  "access_grant_id": "66666666-6666-6666-6666-666666666666",
  "access_grant_key": "booking-789-id",
  "starts_at": "2025-08-13T15:00:00.000Z",
  "ends_at": "2025-08-16T11:00:00.000Z",
  "user_identity_id": "55555555-5555-5555-5555-555555555555",
  "space_ids": [ "44444444-4444-4444-4444-444444444444" ],
  "requested_access_methods": [
    {
      "display_name": "Mobile Key Credential",
      "mode": "mobile_key",
      "created_access_method_ids": ["77777777-7777-7777-7777-777777777777"],
      ...
    }
  ],
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
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
