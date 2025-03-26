# Get a User Identity

```
POST /user_identities/get ⇒ { user_identity }
```

Returns a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.userIdentities.get({
  user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
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

{% tab title="Python TEST" %}
#### Request

```python
seam.user_identities.get(user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a")
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

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.user_identities.get(user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a")
```

#### Response

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

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->user_identities->get(
    user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
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

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam user-identities get --user_identity_id "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
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

{% tab title="Go TEST" %}
#### Request

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.Get(
		context.Background(),
		api.UserIdentitiesGetRequest{
			UserIdentityId: api.String("48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"),
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

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `user_identity_id`

Type: `string`
Required: No

ID of the desired user identity.

***

### `user_identity_key`

Type: `string`
Required: No



***

## Return Type

[user\_identity](./)
