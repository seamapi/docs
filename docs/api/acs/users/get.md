# Get an ACS User

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `acs_user_id` of the specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to retrieve.

#### Code

```javascript
await seam.acs.users.get({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
});
```

#### Output

```javascript
{
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
}
```
{% endtab %}

{% tab title="cURL" %}

Specify the `acs_user_id` of the specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to retrieve.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
}
EOF
```

#### Output

```curl
{
  "acs_user": {
    "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
    "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-04-05T07:57:05.323Z",
    "display_name": "Jane Doe",
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    "phone_number": "+15555550100"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `acs_user_id` of the specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to retrieve.

#### Code

```python
seam.acs.users.get(acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Output

```python
AcsUser(
    acs_user_id="123e4567-e89b-12d3-a456-426614174000",
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    workspace_id="123e4567-e89b-12d3-a456-426614174000",
    created_at="2024-04-05T07:57:05.323Z",
    display_name="Jane Doe",
    full_name="Jane Doe",
    email_address="jane@example.com",
    phone_number="+15555550100",
)
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `acs_user_id` of the specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to retrieve.

#### Code

```ruby
seam.acs.users.get(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Output

```ruby
{
  "acs_user_id" => "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
  "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
  "created_at" => "2024-04-05T07:57:05.323Z",
  "display_name" => "Jane Doe",
  "full_name" => "Jane Doe",
  "email_address" => "jane@example.com",
  "phone_number" => "+15555550100",
}
```
{% endtab %}

{% tab title="PHP" %}

Specify the `acs_user_id` of the specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to retrieve.

#### Code

```php
<?php
$seam->acs->users->get(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33");
```

#### Output

```php
<?php
[
    "acs_user_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
    "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
    "created_at" => "2024-04-05T07:57:05.323Z",
    "display_name" => "Jane Doe",
    "full_name" => "Jane Doe",
    "email_address" => "jane@example.com",
    "phone_number" => "+15555550100",
];
```
{% endtab %}

{% tab title="Go" %}

Specify the `acs_user_id` of the specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to retrieve.

#### Code

```go
package main

import api "github.com/seamapi/go"
import users "github.com/seamapi/go/users"

func main() {
	client.Acs.Users.Get(
		context.Background(),
		users.UsersGetRequest{
			AcsUserId: api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
		},
	)
}
```

#### Output

```go
api.AcsUser{AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "Jane Doe", FullName: "Jane Doe", EmailAddress: "jane@example.com", PhoneNumber: "+15555550100"}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `acs_user_id` of the specific [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to retrieve.

#### Code

```seam_cli
seam acs users get --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
```

#### Output

```seam_cli
{
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
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

**`acs_system_id`** *String*

ID of the access system that you want to get. You can only provide acs_user_id or user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to get. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to get. You can only provide acs_user_id or user_identity_id.

---


## Response

[acs\_user](./)


---

## Examples

