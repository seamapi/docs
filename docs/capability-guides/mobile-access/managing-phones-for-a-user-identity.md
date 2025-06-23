---
description: Learn how to manage the phones associated with a user identity.
---

# Managing Phones for a User Identity

An app user may have several phones. When they sign into their account on your mobile application, it is important that additional phones also provide access. Seam facilitates this access by registering each phone within the [user identity](managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) and synchronizing [mobile credentials](./#managing-mobile-credentials) across these phones. Further, Seam provides a feature to deactivate a phone if an app user loses it.

***

## App User New Phone Process

When an app user signs in to a new phone, Seam can automatically set up the new phone, generate matching credentials, and issue these credentials. To facilitate this capability, you must [issue a multi-phone sync credential](issuing-mobile-credentials-from-an-access-control-system.md) when creating a mobile credential.

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt="When a user sign in to a new phone, Seam also issues matching credentials to the new phone."><figcaption></figcaption></figure>

***

## App User Lost Phone Process

If an app user loses their phone or wants to deactivate it, you can deactivate the phone. Seam then automatically invalidates the stored credentials on their deactivated phone.

<figure><img src="../../.gitbook/assets/image (3) (1).png" alt="When a phone is revoked, Seam revokes all the credentials issued to this phone."><figcaption></figcaption></figure>

To [deactivate](../../api/phones/deactivate.md) a phone, provide the ID of the phone. When a phone is deactivated, Seam also revokes all the credentials issued to the deactivated phone. Seam also removes the associated ACS credentials from the ACS.

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
seam.phones.deactivate(
  device_id = lost_phone_id
)
```

**Output:**

```
None    
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/phones/deactivate' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"device_id\": \"${lost_phone_id}\"
}"
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
await seam.phones.deactivate({
  device_id: lostPhoneId,
});
```

**Output:**

```
// void
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
seam.phones.deactivate(
  device_id: lost_phone_id
)
```

**Output:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$seam->phones->deactivate(
  device_id: $lost_phone_id,
);
```

**Output:**

```
null
```
{% endtab %}

{% tab title="C#" %}
**Command:**

```csharp
Coming soon!
```

**Output:**

```json
Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Retrieving Phones for a User Identity

To retrieve the list of phones that the mobile app user has used to sign in to their account, use the [List Phones](../../api/phones/list.md) endpoint and include the ID of the user identity.

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
seam.phones.list(
  owner_user_identity_id = user_identity.id
)
```

**Output:**

```
[
  Phone(
    device_id='22222222-2222-2222-2222-444444444444',
    device_type='android_phone',
    created_at='2025-01-01T10:40:00+00:00',
    ...
  )
  Phone(
    device_id='22222222-2222-2222-2222-555555555555',
    device_type='ios_phone',
    created_at='2025-01-02T10:40:00+00:00',
    ...
  )
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/phones/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"owner_user_identity_id\": \"${user_identity_id}\"
}"
```

**Response:**

```json
{
  "phones": [
    {
      "device_id": "22222222-2222-2222-2222-444444444444",
      "device_type": "android_phone",
      "created_at": "2025-01-01T10:40:00+00:00",
      ...
    },
    {
      "device_id": "22222222-2222-2222-2222-555555555555",
      "device_type": "ios_phone",
      "created_at": "2025-01-02T10:40:00+00:00",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
await seam.phones.list({
  owner_user_identity_id: user_identity.id,
});
```

**Output:**

```json
[
  {
    "device_id": "22222222-2222-2222-2222-444444444444",
    "device_type": "android_phone",
    "created_at": "2025-01-01T10:40:00+00:00",
    ...
  },
  {
    "device_id": "22222222-2222-2222-2222-555555555555",
    "device_type": "ios_phone",
    "created_at": "2025-01-02T10:40:00+00:00",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
seam.phones.list(
  owner_user_identity_id: user_identity.id,
)
```

**Output:**

```
[
  <Seam::Resources::Phone:0x005f0
    device_id="22222222-2222-2222-2222-444444444444"
    device_type="android_phone"
    created_at="2025-01-01T10:40:00+00:00"
    ...
  >,
  <Seam::Resources::Phone:0x005f0
    device_id="22222222-2222-2222-2222-555555555555"
    device_type="ios_phone"
    created_at="2025-01-02T10:40:00+00:00"
    ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$seam->phones->list(
  owner_user_identity_id: $user_identity->id
);
```

**Output:**

```json
[
  {
    "device_id": "22222222-2222-2222-2222-444444444444",
    "device_type": "android_phone",
    "created_at": "2025-01-01T10:40:00+00:00",
    ...
  },
  {
    "device_id": "22222222-2222-2222-2222-555555555555",
    "device_type": "ios_phone",
    "created_at": "2025-01-02T10:40:00+00:00",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Command:**

```csharp
Coming soon!
```

**Output:**

```json
Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Retrieving a Phone by ID

{% hint style="info" %}
Coming soon!
{% endhint %}

To retrieve a phone by its ID, use the [Get Phone](../../api/phones/get.md) endpoint and include the `device_id` of the phone.

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
seam.phones.get(
  device_id = "22222222-2222-2222-2222-444444444444"
)
```

**Output:**

```
Phone(
  device_id='22222222-2222-2222-2222-444444444444',
  device_type='android_phone',
  created_at='2025-01-01T10:40:00+00:00',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/phones/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "22222222-2222-2222-2222-444444444444"
}'
```

**Response:**

```json
{
  "phone": {
    "device_id": "22222222-2222-2222-2222-444444444444",
    "device_type": "android_phone",
    "created_at": "2025-01-01T10:40:00+00:00",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
await seam.phones.list({
  owner_user_identity_id: user_identity.id,
});
```

**Output:**

```json
[
  {
    "device_id": "22222222-2222-2222-2222-444444444444",
    "device_type": "android_phone",
    "created_at": "2025-01-01T10:40:00+00:00",
    ...
  },
  {
    "device_id": "22222222-2222-2222-2222-555555555555",
    "device_type": "ios_phone",
    "created_at": "2025-01-02T10:40:00+00:00",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
seam.phones.list(
  owner_user_identity_id: user_identity.id,
)
```

**Output:**

```
[
  <Seam::Resources::Phone:0x005f0
    device_id="22222222-2222-2222-2222-444444444444"
    device_type="android_phone"
    created_at="2025-01-01T10:40:00+00:00"
    ...
  >,
  <Seam::Resources::Phone:0x005f0
    device_id="22222222-2222-2222-2222-555555555555"
    device_type="ios_phone"
    created_at="2025-01-02T10:40:00+00:00"
    ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$seam->phones->list(
  owner_user_identity_id: $user_identity->id
);
```

**Output:**

```json
[
  {
    "device_id": "22222222-2222-2222-2222-444444444444",
    "device_type": "android_phone",
    "created_at": "2025-01-01T10:40:00+00:00",
    ...
  },
  {
    "device_id": "22222222-2222-2222-2222-555555555555",
    "device_type": "ios_phone",
    "created_at": "2025-01-02T10:40:00+00:00",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Command:**

```csharp
Coming soon!
```

**Output:**

```json
Coming soon!
```
{% endtab %}



{% endtabs %}
