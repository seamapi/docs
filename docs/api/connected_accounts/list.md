# List Connected Accounts

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [connected accounts](../../core-concepts/connected-accounts/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all connected accounts for a specified user identifier key.

#### Code:

```javascript
await seam.connectedAccounts.list({
  user_identifier_key: "2f393937-1405-4b1a-933f-34c97bfb3c56",
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all connected accounts for a specified user identifier key.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identifier_key": "2f393937-1405-4b1a-933f-34c97bfb3c56",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "connected_accounts": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all connected accounts for a specified user identifier key.

#### Code:

```python
seam.connected_accounts.list(
    user_identifier_key="2f393937-1405-4b1a-933f-34c97bfb3c56", limit=50
)
```

#### Output:

```python
[
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
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all connected accounts for a specified user identifier key.

#### Code:

```ruby
seam.connected_accounts.list(user_identifier_key: "2f393937-1405-4b1a-933f-34c97bfb3c56", limit: 50)
```

#### Output:

```ruby
[
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all connected accounts for a specified user identifier key.

#### Code:

```php
$seam->connected_accounts->list(
    user_identifier_key: "2f393937-1405-4b1a-933f-34c97bfb3c56",
    limit: 50
);
```

#### Output:

```php
[
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all connected accounts for a specified user identifier key.

#### Code:

```seam_cli
seam connected-accounts list --user_identifier_key "2f393937-1405-4b1a-933f-34c97bfb3c56" --limit 50
```

#### Output:

```seam_cli
[
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
]
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

**`custom_metadata_has`** *Object*

Custom metadata pairs by which you want to filter connected accounts. Returns connected accounts with `custom_metadata` that contains all of the provided key:value pairs.

---

**`customer_key`** *String*

Customer key by which you want to filter connected accounts.

---

**`limit`** *Number*

Maximum number of records to return per page.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *String*

String for which to search. Filters returned connected accounts to include all records that satisfy a partial match using `connected_account_id`, `account_type`, `customer_key`, `custom_metadata`, `user_identifier.username`, `user_identifier.email` or `user_identifier.phone`.

---

**`user_identifier_key`** *String*

Your user ID for the user by which you want to filter connected accounts.

---


## Response

{% hint style="success" %}
Returns:
**Array of [connected\_accounts](.)**

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


### List connected accounts for a customer

Returns a list of all connected accounts for a specified customer ID.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.connectedAccounts.list({
  customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "customer_ids": [
    "e387e15f-be27-47ad-881f-4a6fc5460c57"
  ],
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "connected_accounts": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.connected_accounts.list(
    customer_ids=["e387e15f-be27-47ad-881f-4a6fc5460c57"], limit=50
)
```

#### Output:

```python
[
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.connected_accounts.list(customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"], limit: 50)
```

#### Output:

```ruby
[
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->connected_accounts->list(
    customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
    limit: 50
);
```

#### Output:

```php
[
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam connected-accounts list --customer_ids ["e387e15f-be27-47ad-881f-4a6fc5460c57"] --limit 50
```

#### Output:

```seam_cli
[
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
]
```
{% endtab %}

{% endtabs %}

---


### List connected accounts with specific custom metadata

Returns a list of all connected accounts with specified custom metadata.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.connectedAccounts.list({
  custom_metadata_has: { id: "internalId1" },
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connected_accounts/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "custom_metadata_has": {
    "id": "internalId1"
  },
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "connected_accounts": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.connected_accounts.list(custom_metadata_has={"id": "internalId1"}, limit=50)
```

#### Output:

```python
[
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.connected_accounts.list(custom_metadata_has: { id: "internalId1" }, limit: 50)
```

#### Output:

```ruby
[
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->connected_accounts->list(
    custom_metadata_has: ["id" => "internalId1"],
    limit: 50
);
```

#### Output:

```php
[
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam connected-accounts list --custom_metadata_has {"id":"internalId1"} --limit 50
```

#### Output:

```seam_cli
[
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
]
```
{% endtab %}

{% endtabs %}
