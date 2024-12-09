# Create a User Identity

{% hint style="info" %}
**Authentication Methods:** `api_key`, `personal_access_token`, `console_session_token`
{% endhint %}

```
POST /user_identities/create ⇒ { user_identity }
```

Creates a new [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.create({
  user_identity_key: "jean_doe",
  email_address: "jean@example.com",
  phone_number: "+15555550110",
  full_name: "Jean Doe",
});
```

#### Response

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
#### Request

```python
seam.user_identities.create(
    user_identity_key="jean_doe",
    email_address="jean@example.com",
    phone_number="+15555550110",
    full_name="Jean Doe",
)
```

#### Response

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
#### Request

```ruby
seam.user_identities.create(user_identity_key: "jean_doe", email_address: "jean@example.com", phone_number: "+15555550110", full_name: "Jean Doe")
```

#### Response

```ruby
{"user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", "user_identity_key" => "jean_doe", "email_address" => "jean@example.com", "phone_number" => "+15555550110", "display_name" => "Jean Doe", "full_name" => "Jean Doe", "created_at" => "2024-01-11T05:37:50.264Z", "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be"}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->user_identities->create(
    user_identity_key: "jean_doe",
    email_address: "jean@example.com",
    phone_number: "+15555550110",
    full_name: "Jean Doe"
);
```

#### Response

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
#### Request

```seam_cli
seam user-identities create --user_identity_key "jean_doe" --email_address "jean@example.com" --phone_number "+15555550110" --full_name "Jean Doe"
```

#### Response

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
#### Request

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

#### Response

```go
api.UserIdentity{UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", UserIdentityKey: "jean_doe", EmailAddress: "jean@example.com", PhoneNumber: "+15555550110", DisplayName: "Jean Doe", FullName: "Jean Doe", CreatedAt: "2024-01-11T05:37:50.264Z", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be"}
```
{% endtab %}

{% endtabs %}

## Request Parameters

### `email_address`

Type: `string`
Required: No

Unique email address for the user identity.

***

### `full_name`

Type: `string`
Required: No

Full name of the user associated with the user identity.

***

### `phone_number`

Type: `string`
Required: No

Unique phone number for the user identity in E.164 format (for example, +15555550100).

***

### `user_identity_key`

Type: `string`
Required: No

Unique key for the user identity.

***

## Return Type

[user\_identity](./)
