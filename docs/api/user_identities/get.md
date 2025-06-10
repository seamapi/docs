# Get a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the `user_identity_id` of the user identity that you want to retrieve.

```javascript
await seam.userIdentities.get({
  user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
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

{% tab title="cURL" %}
#### Code

Specify the `user_identity_id` of the user identity that you want to retrieve.

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
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

{% tab title="Python" %}
#### Code

Specify the `user_identity_id` of the user identity that you want to retrieve.

```python
seam.user_identities.get(user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a")
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

Specify the `user_identity_id` of the user identity that you want to retrieve.

```ruby
seam.user_identities.get(user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a")
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

Specify the `user_identity_id` of the user identity that you want to retrieve.

```php
<?php
$seam->user_identities->get(
    user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
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

{% tab title="Go" %}
#### Code

Specify the `user_identity_id` of the user identity that you want to retrieve.

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

#### Output

```go
api.UserIdentity{UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", UserIdentityKey: "jean_doe", EmailAddress: "jean@example.com", PhoneNumber: "+15555550110", DisplayName: "Jean Doe", FullName: "Jean Doe", CreatedAt: "2024-01-11T05:37:50.264Z", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be"}
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

Specify the `user_identity_id` of the user identity that you want to retrieve.

```seam_cli
seam user-identities get --user_identity_id "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"
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

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String*

ID of the desired user identity.

---

**`user_identity_key`** *String*

---


## Response

[user\_identity](./)


---

## Examples

