# Get a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified user identity, using a user identity ID.

#### Code:

```javascript
await seam.userIdentities.get({
  user_identity_id: "43947360-cdc8-4db6-8b22-e079416d1d8b",
});
```

#### Output:

```javascript
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
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified user identity, using a user identity ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b"
}
EOF
```

#### Output:

```curl
{
  "user_identity": {
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
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified user identity, using a user identity ID.

#### Code:

```python
seam.user_identities.get(user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b")
```

#### Output:

```python
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
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified user identity, using a user identity ID.

#### Code:

```ruby
seam.user_identities.get(user_identity_id: "43947360-cdc8-4db6-8b22-e079416d1d8b")
```

#### Output:

```ruby
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
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified user identity, using a user identity ID.

#### Code:

```php
$seam->user_identities->get(
    user_identity_id: "43947360-cdc8-4db6-8b22-e079416d1d8b",
);
```

#### Output:

```php
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
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified user identity, using a user identity ID.

#### Code:

```seam_cli
seam user-identities get --user_identity_id "43947360-cdc8-4db6-8b22-e079416d1d8b"
```

#### Output:

```seam_cli
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

**`user_identity_id`** *String*

ID of the user identity that you want to get.

---

**`user_identity_key`** *String*

---


## Response

{% hint style="success" %}
Returns:
[user\_identity](.)**

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


### Get a user identity by user identity key

Returns a specified user identity, using a user identity key.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.userIdentities.get({ user_identity_key: "jane_doe" });
```

#### Output:

```javascript
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
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_key": "jane_doe"
}
EOF
```

#### Output:

```curl
{
  "user_identity": {
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
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.user_identities.get(user_identity_key="jane_doe")
```

#### Output:

```python
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
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.user_identities.get(user_identity_key: "jane_doe")
```

#### Output:

```ruby
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
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->user_identities->get(user_identity_key: "jane_doe");
```

#### Output:

```php
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
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam user-identities get --user_identity_key "jane_doe"
```

#### Output:

```seam_cli
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
```
{% endtab %}

{% endtabs %}
