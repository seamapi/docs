# Create a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /user_identities/create ⇒ { user_identity }
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

**`acs_system_ids`**  *of UUIDs*

List of ACS system IDs to associate with the user identity through ACS users. If there's no user with the same email address or phone number in the specified ACS systems, a new ACS user is created. If there is an existing user with the same email or phone number in the specified ACS systems, the user is linked to the user identity.

---

**`email_address`** 

Unique email address for the user identity.

---

**`full_name`** 

Full name of the user associated with the user identity.

---

**`phone_number`** 

Unique phone number for the user identity in E.164 format (for example, +15555550100).

---

**`user_identity_key`** 

Unique key for the user identity.

---


## Response

[user\_identity](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of user_identity
}
```
{% endtab %}
{% endtabs %}

---

## Examples

### Create a user identity

Specify one or more of the unique `user_identity_key`, `email_address`, or `phone_number`. You can also specify the `full_name` of the user associated with the `user_identity`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.create({
  user_identity_key: "jean_doe",
  email_address: "jean@example.com",
  phone_number: "+15555550110",
  full_name: "Jean Doe",
});
```

#### Output

```javascript
{
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "display_name": "Jean Doe",
  "full_name": "Jean Doe",
  "created_at": "2024-01-11T05:37:50.264Z",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.user_identities.create(
    user_identity_key="jean_doe",
    email_address="jean@example.com",
    phone_number="+15555550110",
    full_name="Jean Doe",
)
```

#### Output

```python
UserIdentity(
    user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    user_identity_key="jean_doe",
    email_address="jean@example.com",
    phone_number="+15555550110",
    display_name="Jean Doe",
    full_name="Jean Doe",
    created_at="2024-01-11T05:37:50.264Z",
    workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.user_identities.create(
  user_identity_key: "jean_doe",
  email_address: "jean@example.com",
  phone_number: "+15555550110",
  full_name: "Jean Doe",
)
```

#### Output

```ruby
{
  "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "user_identity_key" => "jean_doe",
  "email_address" => "jean@example.com",
  "phone_number" => "+15555550110",
  "display_name" => "Jean Doe",
  "full_name" => "Jean Doe",
  "created_at" => "2024-01-11T05:37:50.264Z",
  "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->user_identities->create(
    user_identity_key: "jean_doe",
    email_address: "jean@example.com",
    phone_number: "+15555550110",
    full_name: "Jean Doe"
);
```

#### Output

```php
<?php
[
    "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key" => "jean_doe",
    "email_address" => "jean@example.com",
    "phone_number" => "+15555550110",
    "display_name" => "Jean Doe",
    "full_name" => "Jean Doe",
    "created_at" => "2024-01-11T05:37:50.264Z",
    "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam user-identities create --user_identity_key "jean_doe" --email_address "jean@example.com" --phone_number "+15555550110" --full_name "Jean Doe"
```

#### Output

```seam_cli
{
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "display_name": "Jean Doe",
  "full_name": "Jean Doe",
  "created_at": "2024-01-11T05:37:50.264Z",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.Create(
		context.Background(),
		api.UserIdentitiesCreateRequest{
			UserIdentityKey: api.String("jean_doe"),
			EmailAddress:    api.String("jean@example.com"),
			PhoneNumber:     api.String("+15555550110"),
			FullName:        api.String("Jean Doe"),
		},
	)
}
```

#### Output

```go
api.UserIdentity{UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", UserIdentityKey: "jean_doe", EmailAddress: "jean@example.com", PhoneNumber: "+15555550110", DisplayName: "Jean Doe", FullName: "Jean Doe", CreatedAt: "2024-01-11T05:37:50.264Z", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be"}
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "full_name": "Jean Doe"
}
EOF
```

#### Output

```curl
{
  "user_identity": {
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  }
}
```
{% endtab %}

{% endtabs %}


