# Get a Connected Account

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a specified [connected account](../../core-concepts/connected-accounts/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified connected account, using an ID.

#### Code:

```javascript
await seam.connectedAccounts.get({
  connected_account_id: "a289aa54-5488-4707-9a4b-eeea4edf311d",
});
```

#### Output:

```javascript
{
  "account_type": "salto_space",
  "account_type_display_name": "Salto Space",
  "automatically_manage_new_devices": true,
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at": "2025-06-15T16:54:17.946329Z",
  "custom_metadata": { "id": "internalId1" },
  "errors": [],
  "user_identifier": {
    "api_url": "https://example.com/api",
    "email": "jane_doe@example.com",
    "exclusive": true,
    "phone": "+1555551004",
    "username": "jane_doe"
  },
  "warnings": []
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified connected account, using an ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d"
}
EOF
```

#### Output:

```curl
{
  "connected_account": {
    "account_type": "salto_space",
    "account_type_display_name": "Salto Space",
    "automatically_manage_new_devices": true,
    "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
    "created_at": "2025-06-15T16:54:17.946329Z",
    "custom_metadata": { "id": "internalId1" },
    "errors": [],
    "user_identifier": {
      "api_url": "https://example.com/api",
      "email": "jane_doe@example.com",
      "exclusive": true,
      "phone": "+1555551004",
      "username": "jane_doe"
    },
    "warnings": []
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified connected account, using an ID.

#### Code:

```python
seam.connected_accounts.get(connected_account_id="a289aa54-5488-4707-9a4b-eeea4edf311d")
```

#### Output:

```python
ConnectedAccount(
    account_type="salto_space",
    account_type_display_name="Salto Space",
    automatically_manage_new_devices=true,
    connected_account_id="a289aa54-5488-4707-9a4b-eeea4edf311d",
    created_at="2025-06-15T16:54:17.946329Z",
    custom_metadata={"id": "internalId1"},
    errors=[],
    user_identifier={
        "api_url": "https://example.com/api",
        "email": "jane_doe@example.com",
        "exclusive": true,
        "phone": "+1555551004",
        "username": "jane_doe",
    },
    warnings=[],
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified connected account, using an ID.

#### Code:

```ruby
seam.connected_accounts.get(connected_account_id: "a289aa54-5488-4707-9a4b-eeea4edf311d")
```

#### Output:

```ruby
{
  "account_type" => "salto_space",
  "account_type_display_name" => "Salto Space",
  "automatically_manage_new_devices" => true,
  "connected_account_id" => "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at" => "2025-06-15T16:54:17.946329Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "errors" => [],
  "user_identifier" => {
    api_url: "https://example.com/api",
    email: "jane_doe@example.com",
    exclusive: true,
    phone: "+1555551004",
    username: "jane_doe",
  },
  "warnings" => [],
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified connected account, using an ID.

#### Code:

```php
$seam->connected_accounts->get(
    connected_account_id: "a289aa54-5488-4707-9a4b-eeea4edf311d",
);
```

#### Output:

```php
[
    "account_type" => "salto_space",
    "account_type_display_name" => "Salto Space",
    "automatically_manage_new_devices" => true,
    "connected_account_id" => "a289aa54-5488-4707-9a4b-eeea4edf311d",
    "created_at" => "2025-06-15T16:54:17.946329Z",
    "custom_metadata" => ["id" => "internalId1"],
    "errors" => [],
    "user_identifier" => [
        "api_url" => "https://example.com/api",
        "email" => "jane_doe@example.com",
        "exclusive" => true,
        "phone" => "+1555551004",
        "username" => "jane_doe",
    ],
    "warnings" => [],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified connected account, using an ID.

#### Code:

```seam_cli
seam connected-accounts get --connected_account_id "a289aa54-5488-4707-9a4b-eeea4edf311d"
```

#### Output:

```seam_cli
{
  "account_type": "salto_space",
  "account_type_display_name": "Salto Space",
  "automatically_manage_new_devices": true,
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at": "2025-06-15T16:54:17.946329Z",
  "custom_metadata": { "id": "internalId1" },
  "errors": [],
  "user_identifier": {
    "api_url": "https://example.com/api",
    "email": "jane_doe@example.com",
    "exclusive": true,
    "phone": "+1555551004",
    "username": "jane_doe"
  },
  "warnings": []
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`connected_account_id`** *String*

ID of the connected account that you want to get.

---

**`email`** *String*

Email address associated with the connected account that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[connected\_account](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "account_type": "salto_space",
  "account_type_display_name": "Salto Space",
  "automatically_manage_new_devices": true,
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at": "2025-06-15T16:54:17.946329Z",
  "custom_metadata": { "id": "internalId1" },
  "errors": [],
  "user_identifier": {
    "api_url": "https://example.com/api",
    "email": "jane_doe@example.com",
    "exclusive": true,
    "phone": "+1555551004",
    "username": "jane_doe"
  },
  "warnings": [],
  "accepted_capabilities": ["lock"]
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### Get a connected account for an email address

Returns a specified connected account, using an email address.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.connectedAccounts.get({ email: "jane_doe@example.com" });
```

#### Output:

```javascript
{
  "account_type": "salto_space",
  "account_type_display_name": "Salto Space",
  "automatically_manage_new_devices": true,
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at": "2025-06-15T16:54:17.946329Z",
  "custom_metadata": { "id": "internalId1" },
  "errors": [],
  "user_identifier": {
    "api_url": "https://example.com/api",
    "email": "jane_doe@example.com",
    "exclusive": true,
    "phone": "+1555551004",
    "username": "jane_doe"
  },
  "warnings": []
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "email": "jane_doe@example.com"
}
EOF
```

#### Output:

```curl
{
  "connected_account": {
    "account_type": "salto_space",
    "account_type_display_name": "Salto Space",
    "automatically_manage_new_devices": true,
    "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
    "created_at": "2025-06-15T16:54:17.946329Z",
    "custom_metadata": { "id": "internalId1" },
    "errors": [],
    "user_identifier": {
      "api_url": "https://example.com/api",
      "email": "jane_doe@example.com",
      "exclusive": true,
      "phone": "+1555551004",
      "username": "jane_doe"
    },
    "warnings": []
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.connected_accounts.get(email="jane_doe@example.com")
```

#### Output:

```python
ConnectedAccount(
    account_type="salto_space",
    account_type_display_name="Salto Space",
    automatically_manage_new_devices=true,
    connected_account_id="a289aa54-5488-4707-9a4b-eeea4edf311d",
    created_at="2025-06-15T16:54:17.946329Z",
    custom_metadata={"id": "internalId1"},
    errors=[],
    user_identifier={
        "api_url": "https://example.com/api",
        "email": "jane_doe@example.com",
        "exclusive": true,
        "phone": "+1555551004",
        "username": "jane_doe",
    },
    warnings=[],
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.connected_accounts.get(email: "jane_doe@example.com")
```

#### Output:

```ruby
{
  "account_type" => "salto_space",
  "account_type_display_name" => "Salto Space",
  "automatically_manage_new_devices" => true,
  "connected_account_id" => "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at" => "2025-06-15T16:54:17.946329Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "errors" => [],
  "user_identifier" => {
    api_url: "https://example.com/api",
    email: "jane_doe@example.com",
    exclusive: true,
    phone: "+1555551004",
    username: "jane_doe",
  },
  "warnings" => [],
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->connected_accounts->get(email: "jane_doe@example.com");
```

#### Output:

```php
[
    "account_type" => "salto_space",
    "account_type_display_name" => "Salto Space",
    "automatically_manage_new_devices" => true,
    "connected_account_id" => "a289aa54-5488-4707-9a4b-eeea4edf311d",
    "created_at" => "2025-06-15T16:54:17.946329Z",
    "custom_metadata" => ["id" => "internalId1"],
    "errors" => [],
    "user_identifier" => [
        "api_url" => "https://example.com/api",
        "email" => "jane_doe@example.com",
        "exclusive" => true,
        "phone" => "+1555551004",
        "username" => "jane_doe",
    ],
    "warnings" => [],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam connected-accounts get --email "jane_doe@example.com"
```

#### Output:

```seam_cli
{
  "account_type": "salto_space",
  "account_type_display_name": "Salto Space",
  "automatically_manage_new_devices": true,
  "connected_account_id": "a289aa54-5488-4707-9a4b-eeea4edf311d",
  "created_at": "2025-06-15T16:54:17.946329Z",
  "custom_metadata": { "id": "internalId1" },
  "errors": [],
  "user_identifier": {
    "api_url": "https://example.com/api",
    "email": "jane_doe@example.com",
    "exclusive": true,
    "phone": "+1555551004",
    "username": "jane_doe"
  },
  "warnings": []
}
```
{% endtab %}

{% endtabs %}
