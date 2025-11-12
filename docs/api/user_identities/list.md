# List User Identities

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [user identities](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all user identities.

#### Code:

```javascript
await seam.userIdentities.list();
```

#### Output:

```javascript
[
  {
    "created_at": "2025-06-16T16:54:17.946546Z",
    "display_name": "Jane Doe",
    "email_address": "jane@example.com",
    "errors": [],
    "full_name": "Jane Doe",
    "phone_number": "+1555551002",
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key": "jane_doe",
    "warnings": [],
    "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all user identities.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output:

```curl
{
  "user_identities": [
    {
      "created_at": "2025-06-16T16:54:17.946546Z",
      "display_name": "Jane Doe",
      "email_address": "jane@example.com",
      "errors": [],
      "full_name": "Jane Doe",
      "phone_number": "+1555551002",
      "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
      "user_identity_key": "jane_doe",
      "warnings": [],
      "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all user identities.

#### Code:

```python
seam.user_identities.list()
```

#### Output:

```python
[
    UserIdentity(
        created_at="2025-06-16T16:54:17.946546Z",
        display_name="Jane Doe",
        email_address="jane@example.com",
        errors=[],
        full_name="Jane Doe",
        phone_number="+1555551002",
        user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
        user_identity_key="jane_doe",
        warnings=[],
        workspace_id="b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all user identities.

#### Code:

```ruby
seam.user_identities.list()
```

#### Output:

```ruby
[
  {
    "created_at" => "2025-06-16T16:54:17.946546Z",
    "display_name" => "Jane Doe",
    "email_address" => "jane@example.com",
    "errors" => [],
    "full_name" => "Jane Doe",
    "phone_number" => "+1555551002",
    "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key" => "jane_doe",
    "warnings" => [],
    "workspace_id" => "b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all user identities.

#### Code:

```php
$seam->user_identities->list();
```

#### Output:

```php
[
    [
        "created_at" => "2025-06-16T16:54:17.946546Z",
        "display_name" => "Jane Doe",
        "email_address" => "jane@example.com",
        "errors" => [],
        "full_name" => "Jane Doe",
        "phone_number" => "+1555551002",
        "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
        "user_identity_key" => "jane_doe",
        "warnings" => [],
        "workspace_id" => "b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all user identities.

#### Code:

```seam_cli
seam user-identities list
```

#### Output:

```seam_cli
[
  {
    "created_at": "2025-06-16T16:54:17.946546Z",
    "display_name": "Jane Doe",
    "email_address": "jane@example.com",
    "errors": [],
    "full_name": "Jane Doe",
    "phone_number": "+1555551002",
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key": "jane_doe",
    "warnings": [],
    "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
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

**`created_before`** *String*

Timestamp by which to limit returned user identities. Returns user identities created before this timestamp.

---

**`credential_manager_acs_system_id`** *String*

`acs_system_id` of the credential manager by which you want to filter the list of user identities.

---

**`limit`** *Number*

Maximum number of records to return per page.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *String*

String for which to search. Filters returned user identities to include all records that satisfy a partial match using `full_name`, `phone_number`, `email_address` or `user_identity_id`.

---


## Response

{% hint style="success" %}
**Returns:**
Array of [user\_identitys](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "created_at": "2025-06-16T16:54:17.946546Z",
  "display_name": "Jane Doe",
  "email_address": "jane@example.com",
  "errors": [],
  "full_name": "Jane Doe",
  "phone_number": "+1555551002",
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "user_identity_key": "jane_doe",
  "acs_user_ids": ["0fc82df4-391b-4d00-a234-86378f1c3952"],
  "warnings": [],
  "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### List user identities for a credential manager

Returns a list of all user identities for a specified credential manager.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.userIdentities.list({
  credential_manager_acs_system_id: "10698917-8527-4137-92ff-f1ce291bc287",
});
```

#### Output:

```javascript
[
  {
    "created_at": "2025-06-16T16:54:17.946546Z",
    "display_name": "Jane Doe",
    "email_address": "jane@example.com",
    "errors": [],
    "full_name": "Jane Doe",
    "phone_number": "+1555551002",
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key": "jane_doe",
    "warnings": [],
    "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "credential_manager_acs_system_id": "10698917-8527-4137-92ff-f1ce291bc287"
}
EOF
```

#### Output:

```curl
{
  "user_identities": [
    {
      "created_at": "2025-06-16T16:54:17.946546Z",
      "display_name": "Jane Doe",
      "email_address": "jane@example.com",
      "errors": [],
      "full_name": "Jane Doe",
      "phone_number": "+1555551002",
      "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
      "user_identity_key": "jane_doe",
      "warnings": [],
      "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.user_identities.list(
    credential_manager_acs_system_id="10698917-8527-4137-92ff-f1ce291bc287"
)
```

#### Output:

```python
[
    UserIdentity(
        created_at="2025-06-16T16:54:17.946546Z",
        display_name="Jane Doe",
        email_address="jane@example.com",
        errors=[],
        full_name="Jane Doe",
        phone_number="+1555551002",
        user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
        user_identity_key="jane_doe",
        warnings=[],
        workspace_id="b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.user_identities.list(credential_manager_acs_system_id: "10698917-8527-4137-92ff-f1ce291bc287")
```

#### Output:

```ruby
[
  {
    "created_at" => "2025-06-16T16:54:17.946546Z",
    "display_name" => "Jane Doe",
    "email_address" => "jane@example.com",
    "errors" => [],
    "full_name" => "Jane Doe",
    "phone_number" => "+1555551002",
    "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key" => "jane_doe",
    "warnings" => [],
    "workspace_id" => "b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->user_identities->list(
    credential_manager_acs_system_id: "10698917-8527-4137-92ff-f1ce291bc287"
);
```

#### Output:

```php
[
    [
        "created_at" => "2025-06-16T16:54:17.946546Z",
        "display_name" => "Jane Doe",
        "email_address" => "jane@example.com",
        "errors" => [],
        "full_name" => "Jane Doe",
        "phone_number" => "+1555551002",
        "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
        "user_identity_key" => "jane_doe",
        "warnings" => [],
        "workspace_id" => "b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam user-identities list --credential_manager_acs_system_id "10698917-8527-4137-92ff-f1ce291bc287"
```

#### Output:

```seam_cli
[
  {
    "created_at": "2025-06-16T16:54:17.946546Z",
    "display_name": "Jane Doe",
    "email_address": "jane@example.com",
    "errors": [],
    "full_name": "Jane Doe",
    "phone_number": "+1555551002",
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key": "jane_doe",
    "warnings": [],
    "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
  }
]
```
{% endtab %}

{% endtabs %}
