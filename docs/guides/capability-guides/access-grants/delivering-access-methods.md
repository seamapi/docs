---
description: >-
  Learn how to deliver key cards, PIN codes, mobile keys, and Instant Keys to
  your users.
---

# Delivering Access Methods

The `access_method.is_issued` property and event let you know when an access method is ready to deliver to your user. Once an access method is ready to deliver, retrieve the access method by ID. Remember, the returned Access Grant includes the IDs of all the requested access methods. Then, deliver the access method to your user. The delivery mechanism varies for different access method modes.

{% hint style="info" %}
If you've created an Access Grant that includes a mobile key, the Access Grant also contains the corresponding Instant Key URL, for added efficiency. In this case, you do not need to retrieve the access method. Instead, you can identify the Instant Key URL directly from the returned Access Grant.
{% endhint %}

This topic describes how to deliver the various access method modes.

***

## PIN Codes

You can retrieve the access method by ID. The returned access method resource includes the `code` that you can share with your user.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_methods.get(
  access_method_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"
)
```

**Output:**

```
AccessMethod(
  access_method_id="f47ac10b-58cc-4372-a567-0e02b2c3d479",
  display_name="PIN Code",
  mode="code",
  created_at="2025-06-16T16:54:19.946606Z",
  is_issued=true,
  issued_at="2025-06-16T16:55:03.924353Z",
  code="1234",
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_method_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479"
}'
```

**Output:**

```json
{
  "access_method": {
    "access_method_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "display_name": "PIN Code",
    "mode": "code",
    "created_at": "2025-06-16T16:54:19.946606Z",
    "is_issued": true,
    "issued_at": "2025-06-16T16:55:03.924353Z",
    "code": "1234",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessMethods.get({
  access_method_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
});
```

**Output:**

```json
{
  "access_method_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "display_name": "PIN Code",
  "mode": "code",
  "created_at": "2025-06-16T16:54:19.946606Z",
  "is_issued": true,
  "issued_at": "2025-06-16T16:55:03.924353Z",
  "code": "1234",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_methods.get(
  access_method_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
)
```

**Output:**

```
{
  "access_method_id" => "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "display_name" => "PIN Code",
  "mode" => "code",
  "created_at" => "2025-06-16T16:54:19.946606Z",
  "is_issued" => true,
  "issued_at" => "2025-06-16T16:55:03.924353Z",
  "code" => "1234",
  ...
}
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_methods->get(
  access_method_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
);
```

**Output:**

```json
[
  "access_method_id" => "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "display_name" => "PIN Code",
  "mode" => "code",
  "created_at" => "2025-06-16T16:54:19.946606Z",
  "is_issued" => true,
  "issued_at" => "2025-06-16T16:55:03.924353Z",
  "code" => "1234",
  ...
];
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

## Plastic Key Cards

Some access systems require you to encode plastic key cards. In this case, the access method's `is_encoding_required` property is `true`. You can use the Seam API or Seam Console to encode and scan the cards. For details, see [Working with Card Encoders and Scanners](../access-systems/working-with-card-encoders-and-scanners/).

Once you've encoded the card, the access method's `is_encoding_required` property changes to `false`, and its `is_issued` property changes to `true`. The card is ready to be delivered to your user.

***

## Mobile Keys

You deliver a mobile key to your user within your own mobile app that you develop using the Seam mobile SDKs. For mobile keys, the access method includes a `client_session_id` property that you can use to identify the client session and client session token that you need to initialize the Seam client on your user's mobile device. Then, your user simply taps a button in your app to unlock the door. For details, see [Mobile Access](../mobile-access/).

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_methods.get(
  access_method_id = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
)
```

**Output:**

```
AccessMethod(
  access_method_id="6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  display_name="Mobile Key",
  mode="mobile_key",
  created_at="2025-06-16T16:54:19.946606Z",
  is_issued=true,
  issued_at="2025-06-16T16:55:03.924353Z",
  client_session_id="3f2504e0-4f89-11d3-9a0c-0305e82c3301",
  instant_key_url="https://ik.seam.co/ABCXYZ",
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_method_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
}'
```

**Output:**

```json
{
  "access_method": {
    "access_method_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    "display_name": "Mobile Key",
    "mode": "mobile_key",
    "created_at": "2025-06-16T16:54:19.946606Z",
    "is_issued": true,
    "issued_at": "2025-06-16T16:55:03.924353Z",
    "client_session_id": "3f2504e0-4f89-11d3-9a0c-0305e82c3301",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessMethods.get({
  access_method_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
});
```

**Output:**

```json
{
  "access_method_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "display_name": "Mobile Key",
  "mode": "mobile_key",
  "created_at": "2025-06-16T16:54:19.946606Z",
  "is_issued": true,
  "issued_at": "2025-06-16T16:55:03.924353Z",
  "client_session_id": "3f2504e0-4f89-11d3-9a0c-0305e82c3301",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_methods.get(
  access_method_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
)
```

**Output:**

```
{
  "access_method_id" => "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "display_name" => "Mobile Key",
  "mode" => "mobile_key",
  "created_at" => "2025-06-16T16:54:19.946606Z",
  "is_issued" => true,
  "issued_at" => "2025-06-16T16:55:03.924353Z",
  "client_session_id" => "3f2504e0-4f89-11d3-9a0c-0305e82c3301",
  "instant_key_url" => "https://ik.seam.co/ABCXYZ",
  ...
}
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_methods->get(
  access_method_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
);
```

**Output:**

```json
[
  "access_method_id" => "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "display_name" => "Mobile Key",
  "mode" => "mobile_key",
  "created_at" => "2025-06-16T16:54:19.946606Z",
  "is_issued" => true,
  "issued_at" => "2025-06-16T16:55:03.924353Z",
  "client_session_id" => "3f2504e0-4f89-11d3-9a0c-0305e82c3301",
  "instant_key_url" => "https://ik.seam.co/ABCXYZ",
  ...
];
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

## Instant Keys

Each mobile key that you create also includes an Instant Key. Seam Instant Keys are the most streamlined mobile access experience available today. Both the Access Grant and the mobile key access method include the `instant_key_url` property. You deliver this URL to your user by sending it through text or email. No app download is required. You can also embed an Instant Key in your own app. For details, see [Instant Keys](../instant-keys/) and [Delivering Instant Keys](../instant-keys/delivering-instant-keys.md).
