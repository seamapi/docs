# Create a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new user identity. By specifying the desired acs_system_id, this operation also creates an access system user for the specified access system if this user does not already exist.

#### Code:

```javascript
await seam.userIdentities.create({
  user_identity_key: "61c6c8ec-21ac-4d1d-be02-688889c66d8c",
  email_address: "jane@example.com",
  phone_number: "+15551234567",
  full_name: "Jane Doe",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
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
  "phone_number": "+15551234567",
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "user_identity_key": "jane_doe",
  "warnings": [],
  "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new user identity. By specifying the desired acs_system_id, this operation also creates an access system user for the specified access system if this user does not already exist.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_key": "61c6c8ec-21ac-4d1d-be02-688889c66d8c",
  "email_address": "jane@example.com",
  "phone_number": "+15551234567",
  "full_name": "Jane Doe",
  "acs_system_ids": [
    "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
  ]
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
    "phone_number": "+15551234567",
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key": "jane_doe",
    "warnings": [],
    "workspace_id": "b7e0a4e0-1044-4319-9a0b-42b642b68c7f"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new user identity. By specifying the desired acs_system_id, this operation also creates an access system user for the specified access system if this user does not already exist.

#### Code:

```python
seam.user_identities.create(
    user_identity_key="61c6c8ec-21ac-4d1d-be02-688889c66d8c",
    email_address="jane@example.com",
    phone_number="+15551234567",
    full_name="Jane Doe",
    acs_system_ids=["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
)
```

#### Output:

```python
UserIdentity(
    created_at="2025-06-16T16:54:17.946546Z",
    display_name="Jane Doe",
    email_address="jane@example.com",
    errors=[],
    full_name="Jane Doe",
    phone_number="+15551234567",
    user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
    user_identity_key="jane_doe",
    warnings=[],
    workspace_id="b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new user identity. By specifying the desired acs_system_id, this operation also creates an access system user for the specified access system if this user does not already exist.

#### Code:

```ruby
seam.user_identities.create(
  user_identity_key: "61c6c8ec-21ac-4d1d-be02-688889c66d8c",
  email_address: "jane@example.com",
  phone_number: "+15551234567",
  full_name: "Jane Doe",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
)
```

#### Output:

```ruby
{
  "created_at" => "2025-06-16T16:54:17.946546Z",
  "display_name" => "Jane Doe",
  "email_address" => "jane@example.com",
  "errors" => [],
  "full_name" => "Jane Doe",
  "phone_number" => "+15551234567",
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "user_identity_key" => "jane_doe",
  "warnings" => [],
  "workspace_id" => "b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new user identity. By specifying the desired acs_system_id, this operation also creates an access system user for the specified access system if this user does not already exist.

#### Code:

```php
$seam->user_identities->create(
    user_identity_key: "61c6c8ec-21ac-4d1d-be02-688889c66d8c",
    email_address: "jane@example.com",
    phone_number: "+15551234567",
    full_name: "Jane Doe",
    acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
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
    "phone_number" => "+15551234567",
    "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "user_identity_key" => "jane_doe",
    "warnings" => [],
    "workspace_id" => "b7e0a4e0-1044-4319-9a0b-42b642b68c7f",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new user identity. By specifying the desired acs_system_id, this operation also creates an access system user for the specified access system if this user does not already exist.

#### Code:

```seam_cli
seam user-identities create --user_identity_key "61c6c8ec-21ac-4d1d-be02-688889c66d8c" --email_address "jane@example.com" --phone_number "+15551234567" --full_name "Jane Doe" --acs_system_ids ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"]
```

#### Output:

```seam_cli
{
  "created_at": "2025-06-16T16:54:17.946546Z",
  "display_name": "Jane Doe",
  "email_address": "jane@example.com",
  "errors": [],
  "full_name": "Jane Doe",
  "phone_number": "+15551234567",
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_ids`** *Array* *of UUIDs*

List of access system IDs to associate with the new user identity through access system users. If there's no user with the same email address or phone number in the specified access systems, a new access system user is created. If there is an existing user with the same email or phone number in the specified access systems, the user is linked to the user identity.

---

**`email_address`** *String*

Unique email address for the new user identity.

---

**`full_name`** *String*

Full name of the user associated with the new user identity.

---

**`phone_number`** *String*

Unique phone number for the new user identity in E.164 format (for example, +15555550100).

---

**`user_identity_key`** *String*

Unique key for the new user identity.

---


## Response

{% hint style="success" %}
Returns:
**[user\_identity](.)**

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
