---
description: >-
  Learn how to create an Access Grant with a mobile key access method and
  deliver it through your mobile app using the Seam mobile SDKs.
---

# Using Mobile Keys

Mobile keys let your users unlock doors by tapping a button in your mobile app. When you request a `mobile_key` access method in an Access Grant, Seam issues a mobile credential that you deliver through your own app using the Seam mobile SDKs. Each mobile key also includes an [Instant Key](../../capability-guides/instant-keys/) URL for immediate access without an app download.

Mobile keys work with:

- **Access control systems** — Salto KS, Salto Space, ASSA ABLOY Visionline and Vostio, dormakaba, Brivo, and other ACS platforms that support BLE-based mobile credentials. Specify entrances with `acs_entrance_ids` or use `space_ids`.

## Before You Begin

To use mobile keys, you need:

- A [Seam API key](https://console.seam.co)
- A connected ACS with BLE-capable lock hardware
- Mobile key licenses or subscriptions activated for your ACS (requirements vary by system — see your [system integration guide](https://docs.seam.co/latest/device-and-system-integration-guides#access-control-systems))
- A [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md) representing the person who will receive the mobile key
- An entrance that supports mobile keys (`can_unlock_with_mobile_key` is `true`)

{% hint style="info" %}
If you plan to build a mobile app that delivers mobile keys, see [Mobile Access](../../capability-guides/mobile-access/) for the complete SDK integration guide. If you just want to share a link for instant access, see [Using Instant Keys](using-instant-keys.md) instead.
{% endhint %}

## Step 1: Verify Entrance Support

List the entrances for your ACS and confirm that `can_unlock_with_mobile_key` is `true`.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const entrances = await seam.acs.entrances.list({
  acs_system_id: 'c359cba2-8ef2-47fc-bee0-1c7c2a886339',
})

const mobileKeyEntrances = entrances.filter(
  (e) => e.can_unlock_with_mobile_key
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

mobile_key_entrances = [
    e for e in entrances if e.can_unlock_with_mobile_key
]
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
entrances = seam.acs.entrances.list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)

mobile_key_entrances = entrances.select do |e|
  e.can_unlock_with_mobile_key
end
```
{% endtab %}

{% tab title="PHP" %}


```php
$entrances = $seam->acs->entrances->list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

$mobileKeyEntrances = array_filter(
  $entrances,
  fn($e) => $e->can_unlock_with_mobile_key
);
```
{% endtab %}

{% tab title="C#" %}


```csharp
var entrances = seam.Acs.Entrances.List(
  acsSystemId: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

var mobileKeyEntrances = entrances
  .Where(e => e.CanUnlockWithMobileKey)
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

## Step 2: Create an Access Grant with a Mobile Key

Create an [Access Grant](./) specifying `mobile_key` as the requested access method mode.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const accessGrant = await seam.accessGrants.create({
  user_identity_id: '22222222-2222-2222-2222-222222222222',
  acs_entrance_ids: ['f74e4879-5991-4e2f-a368-888983dcfbfc'],
  requested_access_methods: [
    { mode: 'mobile_key' }
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
  "requested_access_methods": [{ "mode": "mobile_key" }],
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
    requested_access_methods=[{"mode": "mobile_key"}],
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
  requested_access_methods: [{ mode: "mobile_key" }],
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
  requested_access_methods: [["mode" => "mobile_key"]],
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
    new RequestedAccessMethod { Mode = "mobile_key" }
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
        .mode("mobile_key")
        .build()
    ))
    .startsAt("2025-07-13T15:00:00.000Z")
    .endsAt("2025-07-16T11:00:00.000Z")
    .build()
);
```
{% endtab %}
{% endtabs %}

## Step 3: Deliver the Mobile Key

Once the access method is issued, retrieve it to get the `client_session_id`. Use this value to initialize the Seam mobile SDK on your user's device so they can unlock doors from your app.

{% tabs %}
{% tab title="JavaScript" %}


```javascript
const accessMethod = await seam.accessMethods.get({
  access_method_id:
    accessGrant.requested_access_methods[0].created_access_method_ids[0],
})

console.log(accessMethod.client_session_id)
console.log(accessMethod.instant_key_url)
```
{% endtab %}

{% tab title="cURL" %}


```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/get' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_method_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
}'
```
{% endtab %}

{% tab title="Python" %}


```python
access_method = seam.access_methods.get(
    access_method_id=access_grant.requested_access_methods[0].created_access_method_ids[0]
)

print(access_method.client_session_id)
print(access_method.instant_key_url)
```
{% endtab %}

{% tab title="Ruby" %}


```ruby
access_method = seam.access_methods.get(
  access_method_id: access_grant.requested_access_methods[0].created_access_method_ids[0]
)

puts access_method.client_session_id
puts access_method.instant_key_url
```
{% endtab %}

{% tab title="PHP" %}


```php
$accessMethod = $seam->access_methods->get(
  access_method_id: $accessGrant->requested_access_methods[0]->created_access_method_ids[0]
);

echo $accessMethod->client_session_id;
echo $accessMethod->instant_key_url;
```
{% endtab %}

{% tab title="C#" %}


```csharp
var accessMethod = seam.AccessMethods.Get(
  accessMethodId: accessGrant.RequestedAccessMethods[0].CreatedAccessMethodIds[0]
);

Console.WriteLine(accessMethod.ClientSessionId);
Console.WriteLine(accessMethod.InstantKeyUrl);
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
  "access_method_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "display_name": "Mobile Key",
  "mode": "mobile_key",
  "is_issued": true,
  "issued_at": "2025-06-16T16:55:03.924353Z",
  "client_session_id": "3f2504e0-4f89-11d3-9a0c-0305e82c3301",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  ...
}
```

Use the `client_session_id` to look up the client session token, then pass it to the Seam mobile SDK to initialize your user's mobile app. For the complete mobile SDK integration guide, see [Mobile Access](../../capability-guides/mobile-access/).

{% hint style="info" %}
Every mobile key also includes an `instant_key_url`. You can share this URL with your user as an alternative or backup access method — no app download required. See [Using Instant Keys](using-instant-keys.md).
{% endhint %}

## Next Steps

- [Mobile Access](../../capability-guides/mobile-access/) — Complete guide to building a mobile app with the Seam mobile SDKs.
- [Using Instant Keys](using-instant-keys.md) — Share the Instant Key URL included with every mobile key.
- [Delivering Access Methods](delivering-access-methods.md) — Learn how to deliver all access method types to your users.
- [Access Methods API Reference](https://docs.seam.co/latest/api/access_methods/) — See all access method properties and endpoints.
