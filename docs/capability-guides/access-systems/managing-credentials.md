---
description: Learn how to manage credentials and assign them to users.
---

# Managing Credentials

An ACS generally uses digital means of access to authorize an [ACS user](../../products/access-systems/user-management.md) trying to get through a specific entrance. Examples of credentials include plastic key cards, mobile keys, biometric identifiers, and PIN codes. The electronic nature of these credentials, as well as the fact that access is centralized, enables both the rapid provisioning and rescinding of access and the ability to compile access audit logs.

<figure><img src="../../.gitbook/assets/acs-credential-types.png" alt="Examples of ACS user credentials"><figcaption><p>Examples of ACS user credentials</p></figcaption></figure>

This guide provides instructions for creating and deleting various types of credentials.

{% hint style="info" %}
You can assign a credential to an ACS user when you create the credential. You can also [assign an existing credential to an ACS user](assigning-credentials-to-users.md#assign-a-credential-to-a-user). Further, you can [unassign a credential from an ACS user](assigning-credentials-to-users.md#unassign-a-credential-from-a-user) without deleting the credential.
{% endhint %}

***

## Create a Credential for an ACS User

To [create a credential for an ACS user](../../api/acs/credentials/create.md), provide the `acs_user_id` and the desired `access_method`. Seam supports the following access methods:

* `code` for a PIN code-based credential
* `card` for a plastic key card-based credential
* `mobile_key` for a [Seam mobile key](../mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials).

Depending on the ACS and the type of credential you are issuing, you can also specify the following properties for the new credential:

* PIN code.
* Start and end time frame for the validity of the credential.
* Whether the credential is a multi-phone sync credential.\
  When creating a Seam mobile key, make sure to issue a multi-phone sync credential by setting `is_multi_phone_sync_credential` to `true`.
* Manufacturer-specific data.

{% hint style="info" %}
Make sure to note any manufacturer-specific metadata and restrictions. For details, see the applicable [device or system integration guide](../../device-and-system-integration-guides/overview.md).
{% endhint %}

The response includes the `acs_credential_id` of the newly-created credential, the `acs_user_id` associated with the credential, and additional attributes of the credential.

{% hint style="info" %}
If you are creating card-based credentials, and your ACS requires card encoding, see also [Creating and Encoding Card-based Credentials](working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md).
{% endhint %}

***

### Create a PIN Code-based Credential

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  access_method="code",
  code="824759"
)
```

**Response:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  code='824759',
  access_method='code',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "code",
  "code": "824759"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "code": "824759",
    "access_method": "code",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "code",
  code: "824759"
});
```

**Response:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  code: '824759',
  access_method: 'code',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "code",
  code: "824759"
);
```

**Response:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "code": "824759",
  "access_method": "code",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  accessMethod: "code",
  code: "824759"
);
```

**Response:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "code": "824759",
  "access_method": "code",
  ...
}
```
{% endtab %}



{% endtabs %}

***

### Create a Card-based Credential

To create a plastic key card-based credential, set the `access_method` to `card`. Once you've created a credential, some access control systems require you to encode the card with the credential. To learn whether your ACS requires card encoding, see the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS. For card encoding instructions, see [Creating and Encoding Card-based Credentials](working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  access_method="card",
  code="123456"
)
```

**Response:**

```
AcsCredential(
  acs_credential_id='77777777-7777-7777-7777-777777777777',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='card',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "code": "123456"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "77777777-7777-7777-7777-777777777777",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "card",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "card",
  code: "123456"
});
```

**Response:**

```json
{
  acs_credential_id: '77777777-7777-7777-7777-777777777777',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'card',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "card",
  code: "123456"
);
```

**Response:**

```json
{
  "acs_credential_id": "77777777-7777-7777-7777-777777777777",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  accessMethod: "card",
  code: "123456"
);
```

**Response:**

```
{
  "acs_credential_id": "77777777-7777-7777-7777-777777777777",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  ...
}
```
{% endtab %}



{% endtabs %}

***

### Create a Seam Mobile Key

Depending on the ACS for which you want to create a credential, you may also need to include system-specific metadata. See the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS. For more information about mobile access and issuing mobile credentials, see [Mobile Access](../mobile-access/) and [Issuing Mobile Credentials from an Access Control System](../mobile-access/issuing-mobile-credentials-from-an-access-control-system.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

{% hint style="info" %}
This request contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```python
seam.acs.credentials.create(
  acs_user_id="33333333-3333-3333-3333-333333333333",
  allowed_acs_entrance_ids=[
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  credential_manager_acs_system_id="88888888-8888-8888-8888-888888888888",
  access_method="mobile_key",
  is_multi_phone_sync_credential=True,
  starts_at="2024-03-01T10:40:00Z",
  ends_at="2024-03-04T10:40:00Z",
  ...
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```
AcsCredential(
  acs_credential_id='99999999-9999-9999-9999-999999999999',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='mobile_key',
  is_multi_phone_sync_credential=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

{% hint style="info" %}
This request contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "allowed_acs_entrance_ids": [
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  "credential_manager_acs_system_id": "88888888-8888-8888-8888-888888888888",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  "starts_at": "2024-03-01T10:40:00Z",
  "ends_at": "2024-03-04T10:40:00Z",
  ...
}'
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credential": {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "mobile_key",
    "is_multi_phone_sync_credential": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

{% hint style="info" %}
This request contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```javascript
await seam.acs.credentials.create({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  allowed_acs_entrance_ids: [
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  access_method: "mobile_key",
  is_multi_phone_sync_credential: true,
  starts_at: "2024-03-01T10:40:00Z",
  ends_at: "2024-03-04T10:40:00Z",
  ...
});
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  acs_credential_id: '99999999-9999-9999-9999-999999999999',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'mobile_key',
  is_multi_phone_sync_credential: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

{% hint style="info" %}
This request contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```php
$seam->acs->credentials->create(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  allowed_acs_entrance_ids: [
    "55555555-5555-5555-5555-555555555555",
    "55555555-5555-5555-5555-000000000000"
  ],
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  access_method: "mobile_key",
  is_multi_phone_sync_credential: true,
  starts_at: "2024-03-01T10:40:00Z",
  ends_at: "2024-03-04T10:40:00Z",
  ...
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

{% hint style="info" %}
This request contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```csharp
seam.CredentialsAcs.Create(
  acsUserId: "33333333-3333-3333-3333-333333333333",
  allowedAcsEntranceIds: new List<string>
    {
      "55555555-5555-5555-5555-555555555555",
      "55555555-5555-5555-5555-000000000000"
    },
  credentialManagerAcsSystemId: "88888888-8888-8888-8888-888888888888",
  accessMethod: "mobile_key",
  isMultiPhoneSyncCredential: true,
  startsAt: "2024-03-01T10:40:00Z",
  endsAt: "2024-03-04T10:40:00Z",
  ...
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  ...
}
```
{% endtab %}



{% endtabs %}

***

## List Credentials

You can [list all ACS credentials](../../api/acs/credentials/list.md) for a specific [ACS user](../../products/access-systems/user-management.md) or [user identity](../mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity). You can also [list all credentials for an ACS system](../../api/acs/credentials/list.md).

### List Credentials by ACS User

To [list all ACS credentials](../../api/acs/credentials/list.md) for a specific [ACS user](../../products/access-systems/user-management.md), provide the `acs_user_id`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.list(
  acs_user_id="33333333-3333-3333-3333-333333333333"
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```
[
  AcsCredential(
    acs_credential_id='99999999-9999-9999-9999-999999999999',
    acs_user_id='33333333-3333-3333-3333-333333333333',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/credentials/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "33333333-3333-3333-3333-333333333333"
}'
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credentials": [
    {
      "acs_credential_id": "99999999-9999-9999-9999-999999999999",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      ...
    }
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.list({
  acs_user_id: "33333333-3333-3333-3333-333333333333"
});
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
[
  {
    acs_credential_id: '99999999-9999-9999-9999-999999999999',
    acs_user_id: '33333333-3333-3333-3333-333333333333',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->list(
  acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
[
  {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.List(
  acsUserId: "33333333-3333-3333-3333-333333333333"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  ...
}
...
```
{% endtab %}



{% endtabs %}

### List Credentials by User Identity

To [list all ACS credentials](../../api/acs/credentials/list.md) for a specific [user identity](../mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity), provide the `user_identity_id`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.list(
  user_identity_id="22222222-2222-2222-2222-222222222222"
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```
[
  AcsCredential(
    acs_credential_id='99999999-9999-9999-9999-999999999999',
    acs_user_id='33333333-3333-3333-3333-333333333333',
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/credentials/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "22222222-2222-2222-2222-222222222222"
}'
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credentials": [
    {
      "acs_credential_id": "99999999-9999-9999-9999-999999999999",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      ...
    }
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.list({
  user_identity_id: "22222222-2222-2222-2222-222222222222"
});
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
[
  {
    acs_credential_id: '99999999-9999-9999-9999-999999999999',
    acs_user_id: '33333333-3333-3333-3333-333333333333',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->list(
  user_identity_id: "22222222-2222-2222-2222-222222222222"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
[
  {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.List(
  userIdentityId: "22222222-2222-2222-2222-222222222222"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  ...
}
...
```
{% endtab %}



{% endtabs %}

***

## Get a Credential

To [get a credential](../../api/acs/credentials/get.md), provide the `acs_credential_id` of the credential that you want to retrieve. These details include the user associated with the credential, the access method, the schedule for the credential, if applicable, and so on.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.get(
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```
AcsCredential(
  acs_credential_id='99999999-9999-9999-9999-999999999999',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  acs_system_id='11111111-1111-1111-1111-111111111111',
  access_method='mobile_key',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/get' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_credential": {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "access_method": "mobile_key",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.get({
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
});
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  acs_credential_id: '99999999-9999-9999-9999-999999999999',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  acs_system_id: '11111111-1111-1111-1111-111111111111',
  access_method: 'mobile_key',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->get(
  acs_credential_id: "66666666-6666-6666-6666-66666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method": "mobile_key",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.Get(
  acsCredentialId: "66666666-6666-6666-6666-66666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method": "mobile_key",
  ...
}
```
{% endtab %}



{% endtabs %}

***

## Delete a Credential

To [delete a credential](../../api/acs/credentials/delete.md), provide the `acs_credential_id`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.delete(
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/delete' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.delete({
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
});
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->acs->credentials->delete(
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

```
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.Delete(
  acsCredentialId: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

```
void
```
{% endtab %}



{% endtabs %}
