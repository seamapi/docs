---
description: >-
  Learn how to deliver Instant Keys — shareable unlock links that work without
  an app download — through Access Grants.
---

# Using Instant Keys

Instant Keys are the fastest way to give someone mobile access. When you create an Access Grant with a `mobile_key` access method, Seam automatically generates an Instant Key URL. Share this URL with your user through text, email, or your app. When they tap the link, they can unlock the door immediately — no app download required.

Instant Keys use iOS App Clips and Android Instant Apps to provide a native unlock experience without requiring your user to install anything.

Instant Keys are ideal for:

- **Guest access** — Send a link to a short-term guest (hotel, vacation rental, coworking space).
- **Backup access** — Provide a fallback unlock method alongside a native mobile key in your app.
- **Quick onboarding** — Let users unlock immediately while they set up your full mobile app.

## Before You Begin

To use Instant Keys, you need:

- A [Seam API key](https://console.seam.co)
- A connected ACS with BLE-capable lock hardware that supports mobile keys
- Mobile key licenses activated for your ACS (see [Setting Up Your Site for Instant Keys](../../capability-guides/instant-keys/setting-up-your-site-for-instant-keys.md))
- A [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md) representing the person who will receive the Instant Key
- An entrance that supports mobile keys (`can_unlock_with_mobile_key` is `true`)

{% hint style="info" %}
Instant Keys are generated automatically when you create a mobile key access method. You do not need to request them separately.
{% endhint %}

## Step 1: Create an Access Grant with a Mobile Key

Create an [Access Grant](./) specifying `mobile_key` as the requested access method mode. The response includes an `instant_key_url` on the Access Grant itself — you can share it immediately without waiting for the access method to be issued.

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

console.log(accessGrant.instant_key_url)
// => "https://ik.seam.co/ABCXYZ"
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

print(access_grant.instant_key_url)
# => "https://ik.seam.co/ABCXYZ"
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

puts access_grant.instant_key_url
# => "https://ik.seam.co/ABCXYZ"
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

echo $accessGrant->instant_key_url;
// => "https://ik.seam.co/ABCXYZ"
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

Console.WriteLine(accessGrant.InstantKeyUrl);
// => "https://ik.seam.co/ABCXYZ"
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

**Output:**

```json
{
  "access_grant_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "requested_access_methods": [
    {
      "mode": "mobile_key",
      "created_access_method_ids": ["6ba7b810-9dad-11d1-80b4-00c04fd430c8"]
    }
  ],
  ...
}
```

## Step 2: Share the Instant Key URL

Deliver the `instant_key_url` to your user. Common delivery methods include:

- **Text message (SMS)** — Send the URL directly to your user's phone.
- **Email** — Include the URL in a welcome or check-in email.
- **In-app link** — Embed the URL in your web or mobile app.
- **QR code** — Generate a QR code from the URL for physical signage.

When your user taps the link on their phone, the Instant Key opens as an iOS App Clip or Android Instant App. They can unlock the door immediately — no app store download needed.

{% hint style="info" %}
The Instant Key URL is also available on the access method itself as `instant_key_url`. Both the Access Grant and the access method return the same URL.
{% endhint %}

## Next Steps

- [Instant Keys](../../capability-guides/instant-keys/) — Deep dive into how Instant Keys work, site setup, and advanced delivery options.
- [Delivering Instant Keys](../../capability-guides/instant-keys/delivering-instant-keys.md) — Detailed guide for sharing Instant Keys with your users.
- [Using Mobile Keys](using-mobile-keys.md) — Build a native mobile app experience with the Seam mobile SDKs.
- [Delivering Access Methods](delivering-access-methods.md) — Learn how to deliver all access method types to your users.
