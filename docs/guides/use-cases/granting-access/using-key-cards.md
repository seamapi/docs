---
description: >-
  Learn how to create an Access Grant with a key card access method, then encode
  or assign the card to your user.
---

# Using Key Cards

Key cards are plastic cards that unlock doors when presented to a card reader. When you request a `card` access method in an Access Grant, Seam creates a card credential. Depending on your access control system, you either encode the credential onto a physical card using a card encoder or the system assigns the credential to a pre-registered card automatically.

Key cards work with:

- **Access control systems** — Salto KS, Salto Space, ASSA ABLOY Visionline and Vostio, dormakaba, Brivo, and other ACS platforms that support card-based credentials. Specify entrances with `acs_entrance_ids` or use `space_ids`.

## Before You Begin

To use key cards, you need:

- A [Seam API key](https://console.seam.co)
- A connected ACS that supports card-based credentials
- A [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities/) representing the person who will receive the card
- An entrance that supports card access (`can_unlock_with_card` is `true`)
- For encoding: a compatible card encoder connected to Seam (see [Working with Card Encoders and Scanners](../../low-level-apis/access-systems/working-with-card-encoders-and-scanners/))

## Step 1: Verify Entrance Support

List the entrances for your ACS and confirm that `can_unlock_with_card` is `true`.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const entrances = await seam.acs.entrances.list({
  acs_system_id: 'c359cba2-8ef2-47fc-bee0-1c7c2a886339',
})

const cardEntrances = entrances.filter(
  (e) => e.can_unlock_with_card
)
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/entrances/list' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
entrances = seam.acs.entrances.list(
    acs_system_id="c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)

card_entrances = [
    e for e in entrances if e.can_unlock_with_card
]
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
entrances = seam.acs.entrances.list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)

card_entrances = entrances.select do |e|
  e.can_unlock_with_card
end
```
{% endtab %}

{% tab title="PHP" %}


```php
$entrances = $seam->acs->entrances->list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

$cardEntrances = array_filter(
  $entrances,
  fn($e) => $e->can_unlock_with_card
);
```
{% endtab %}

{% tab title="C#" %}


```csharp
var entrances = seam.Acs.Entrances.List(
  acsSystemId: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

var cardEntrances = entrances
  .Where(e => e.CanUnlockWithCard)
  .ToList();
```
{% endtab %}

{% tab title="Java" %}


```java
var entrances = seam.acs().entrances().list(
  AcsEntrancesListRequest.builder()
    .acsSystemId("c359cba2-8ef2-47fc-bee0-1c7c2a886339")
    .build()
);
```
{% endtab %}
{% endtabs %}

## Step 2: Create an Access Grant with a Key Card

Create an [Access Grant](./) specifying `card` as the requested access method mode.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const accessGrant = await seam.accessGrants.create({
  user_identity_id: '22222222-2222-2222-2222-222222222222',
  acs_entrance_ids: ['f74e4879-5991-4e2f-a368-888983dcfbfc'],
  requested_access_methods: [
    { mode: 'card' }
  ],
  starts_at: '2025-07-13T15:00:00.000Z',
  ends_at: '2025-07-16T11:00:00.000Z',
})
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/create' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "acs_entrance_ids": ["f74e4879-5991-4e2f-a368-888983dcfbfc"],
  "requested_access_methods": [{ "mode": "card" }],
  "starts_at": "2025-07-13T15:00:00.000Z",
  "ends_at": "2025-07-16T11:00:00.000Z"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
access_grant = seam.access_grants.create(
    user_identity_id="22222222-2222-2222-2222-222222222222",
    acs_entrance_ids=["f74e4879-5991-4e2f-a368-888983dcfbfc"],
    requested_access_methods=[{"mode": "card"}],
    starts_at="2025-07-13T15:00:00.000Z",
    ends_at="2025-07-16T11:00:00.000Z",
)
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
access_grant = seam.access_grants.create(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_entrance_ids: ["f74e4879-5991-4e2f-a368-888983dcfbfc"],
  requested_access_methods: [{ mode: "card" }],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
)
```
{% endtab %}

{% tab title="PHP" %}


```php
$accessGrant = $seam->access_grants->create(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_entrance_ids: ["f74e4879-5991-4e2f-a368-888983dcfbfc"],
  requested_access_methods: [["mode" => "card"]],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
);
```
{% endtab %}

{% tab title="C#" %}


```csharp
var accessGrant = seam.AccessGrants.Create(
  userIdentityId: "22222222-2222-2222-2222-222222222222",
  acsEntranceIds: new List<string>
  {
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  },
  requestedAccessMethods: new List<RequestedAccessMethod>
  {
    new RequestedAccessMethod { Mode = "card" }
  },
  startsAt: "2025-07-13T15:00:00.000Z",
  endsAt: "2025-07-16T11:00:00.000Z"
);
```
{% endtab %}

{% tab title="Java" %}


```java
var accessGrant = seam.accessGrants().create(
  AccessGrantsCreateRequest.builder()
    .userIdentityId("22222222-2222-2222-2222-222222222222")
    .acsEntranceIds(List.of(
      "f74e4879-5991-4e2f-a368-888983dcfbfc"
    ))
    .requestedAccessMethods(List.of(
      RequestedAccessMethod.builder()
        .mode("card")
        .build()
    ))
    .startsAt("2025-07-13T15:00:00.000Z")
    .endsAt("2025-07-16T11:00:00.000Z")
    .build()
);
```
{% endtab %}
{% endtabs %}

## Step 3: Deliver the Key Card

Retrieve the access method and check the `is_encoding_required` property to determine whether you need to encode the card or whether the system assigns it automatically.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const accessMethod = await seam.accessMethods.get({
  access_method_id:
    accessGrant.requested_access_methods[0].created_access_method_ids[0],
})

console.log(accessMethod.is_encoding_required)
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/get' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_method_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
access_method = seam.access_methods.get(
    access_method_id=access_grant.requested_access_methods[0].created_access_method_ids[0]
)

print(access_method.is_encoding_required)
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
access_method = seam.access_methods.get(
  access_method_id: access_grant.requested_access_methods[0].created_access_method_ids[0]
)

puts access_method.is_encoding_required
```
{% endtab %}

{% tab title="PHP" %}


```php
$accessMethod = $seam->access_methods->get(
  access_method_id: $accessGrant->requested_access_methods[0]->created_access_method_ids[0]
);

echo $accessMethod->is_encoding_required;
```
{% endtab %}

{% tab title="C#" %}


```csharp
var accessMethod = seam.AccessMethods.Get(
  accessMethodId: accessGrant.RequestedAccessMethods[0].CreatedAccessMethodIds[0]
);

Console.WriteLine(accessMethod.IsEncodingRequired);
```
{% endtab %}

{% tab title="Java" %}


```java
var accessMethod = seam.accessMethods().get(
  AccessMethodsGetRequest.builder()
    .accessMethodId(
      accessGrant.getRequestedAccessMethods().get(0).getCreatedAccessMethodIds().get(0)
    )
    .build()
);
```
{% endtab %}
{% endtabs %}

**Output:**

```json
{
  "access_method_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "display_name": "Key Card",
  "mode": "card",
  "is_issued": false,
  "is_encoding_required": true,
  ...
}
```

***

### Encoding Cards

If `is_encoding_required` is `true`, you must encode the credential onto a physical card using a card encoder before handing the card to your user.

Use the Seam API to encode the card:

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const actionAttempt = await seam.accessMethods.encode({
  access_method_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  acs_encoder_id: 'encoder-001',
})
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/encode' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_method_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "acs_encoder_id": "encoder-001"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
action_attempt = seam.access_methods.encode(
    access_method_id="a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    acs_encoder_id="encoder-001",
)
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
action_attempt = seam.access_methods.encode(
  access_method_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  acs_encoder_id: "encoder-001"
)
```
{% endtab %}

{% tab title="PHP" %}


```php
$actionAttempt = $seam->access_methods->encode(
  access_method_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  acs_encoder_id: "encoder-001"
);
```
{% endtab %}

{% tab title="C#" %}


```csharp
var actionAttempt = seam.AccessMethods.Encode(
  accessMethodId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  acsEncoderId: "encoder-001"
);
```
{% endtab %}

{% tab title="Java" %}


```java
var actionAttempt = seam.accessMethods().encode(
  AccessMethodsEncodeRequest.builder()
    .accessMethodId("a1b2c3d4-e5f6-7890-abcd-ef1234567890")
    .acsEncoderId("encoder-001")
    .build()
);
```
{% endtab %}
{% endtabs %}

Once encoding is complete, the access method's `is_encoding_required` property changes to `false` and `is_issued` changes to `true`. Hand the encoded card to your user.

For the complete card encoding workflow, including listing encoders and scanning cards, see [Working with Card Encoders and Scanners](../../low-level-apis/access-systems/working-with-card-encoders-and-scanners/).

***

### Assigning Cards

If `is_encoding_required` is `false`, the ACS assigns the credential to a card automatically — no physical encoding step is needed. This is common with systems that use pre-registered or cloud-managed cards.

In this case, once `is_issued` is `true`, the card is ready. Hand the assigned card to your user.

## Next Steps

- [Working with Card Encoders and Scanners](../../low-level-apis/access-systems/working-with-card-encoders-and-scanners/) — Complete guide to encoding and scanning cards.
- [Delivering Access Methods](delivering-access-methods.md) — Learn how to deliver all access method types to your users.
- [Creating an Access Grant](creating-an-access-grant.md) — Learn more about specifying devices, entrances, and spaces.
- [Access Methods API Reference](https://docs.seam.co/latest/api/access_methods/) — See all access method properties and endpoints.
