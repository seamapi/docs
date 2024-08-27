---
description: >-
  Learn how to list entrances associated with a credential and credentials
  associated with an entrance.
---

# Listing Credentials and Associated Entrances

Once you have [created credentials](../managing-credentials.md), you can retrieve the set of entrances associated with a credential. You can also use an `acs_entrance` endpoint to retrieve the credentials that grant access to a specific entrance.

## List Entrances Associated with a Credential

To [list the entrances to which a specific credential grants access](../../../api-clients/access-control-systems/credentials/list-accessible-entrances.md), use `list_accessible_entrances` and provide the `acs_credential_id`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.list_accessible_entrances(
  acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```
[
  AcsEntrance(
    acs_entrance_id='55555555-5555-5555-5555-555555555555',
    acs_system_id='11111111-1111-1111-1111-111111111111',
    display_name='Guest Lock 2',
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
  'https://connect.getseam.com/acs/credentials/list_accessible_entrances' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}'
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "display_name": "Guest Lock 2",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.acs.credentials.listAccessibleEntrances({
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
});
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
[
  {
    acs_entrance_id: '55555555-5555-5555-5555-555555555555',
    acs_system_id: '11111111-1111-1111-1111-111111111111',
    display_name: 'Guest Lock 2',
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
$seam->acs->credentials->list_accessible_entrances(
  acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "display_name": "Guest Lock 2",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.CredentialsAcs.ListAccessibleEntrances(
  acsCredentialId: "66666666-6666-6666-6666-666666666666"
);
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
{
  "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "display_name": "Guest Lock 2",
  ...
}
...
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
acs_entrances, uErr := client.Acs.Credentials.ListAccessibleEntrances(
  context.Background(), &acs.CredentialsListAccessibleEntrancesRequest{
    AcsCredentialId: "66666666-6666-6666-6666-666666666666",
  },
)
```

**Response:**

{% hint style="info" %}
This response contains manufacturer-specific metadata that may vary by [manufacturer](../../../device-and-system-integration-guides/overview.md#access-control-systems).
{% endhint %}

```json
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "display_name": "Guest Lock 2",
    ...
  },
  ...
]
```
{% endtab %}
{% endtabs %}

***

## List Credentials Associated with an Entrance

To list the credentials that grant access to a specific entrance, use `list_credentials_with_access` method for the `acs_entrance` object and provide the `acs_entrance_id`. For details, see [Retrieving Entrance Details](../retrieving-entrance-details.md#list-credentials-associated-with-an-entrance).
