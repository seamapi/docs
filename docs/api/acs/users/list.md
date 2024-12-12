# List ACS Users

```
POST /acs/users/list ⇒ { acs_users: [acs_user, …] }
```

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.users.list();
```

#### Response

```javascript
{
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_access_group_ids": ["123e4567-e89b-12d3-a456-426614174000"],
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.users.list()
```

#### Response

```python
AcsUser(
    acs_user_id="123e4567-e89b-12d3-a456-426614174000",
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    acs_access_group_ids=["123e4567-e89b-12d3-a456-426614174000"],
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
#### Request

```ruby
seam.acs.users.list
```

#### Response

```ruby
{"acs_user_id" => "123e4567-e89b-12d3-a456-426614174000", "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000", "acs_access_group_ids" => ["123e4567-e89b-12d3-a456-426614174000"], "workspace_id" => "123e4567-e89b-12d3-a456-426614174000", "created_at" => "2024-04-05T07:57:05.323Z", "display_name" => "Jane Doe", "full_name" => "Jane Doe", "email_address" => "jane@example.com", "phone_number" => "+15555550100"}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->users->list();
```

#### Response

```php
<?php
[
    "acs_user_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_system_id" => "123e4567-e89b-12d3-a456-426614174000",
    "acs_access_group_ids" => ["123e4567-e89b-12d3-a456-426614174000"],
    "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
    "created_at" => "2024-04-05T07:57:05.323Z",
    "display_name" => "Jane Doe",
    "full_name" => "Jane Doe",
    "email_address" => "jane@example.com",
    "phone_number" => "+15555550100",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs users list
```

#### Response

```seam_cli
{
  "acs_user_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_system_id": "123e4567-e89b-12d3-a456-426614174000",
  "acs_access_group_ids": ["123e4567-e89b-12d3-a456-426614174000"],
  "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-04-05T07:57:05.323Z",
  "display_name": "Jane Doe",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "phone_number": "+15555550100"
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

func main() {
	client.Acs.Users.List(context.Background())
}
```

#### Response

```go
api.AcsUser{AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", AcsAccessGroupIds: []string{"123e4567-e89b-12d3-a456-426614174000"}, WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "Jane Doe", FullName: "Jane Doe", EmailAddress: "jane@example.com", PhoneNumber: "+15555550100"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- Client session token
- Personal access token
- API key

## Request Parameters

### `acs_system_id`

Type: `string`
Required: No

ID of the `acs_system` for which you want to retrieve all `acs_user`s.

***

### `created_before`

Type: `string`
Required: No



***

### `limit`

Type: `number`
Required: No



***

### `user_identity_email_address`

Type: `string`
Required: No

Email address of the user identity for which you want to retrieve all `acs_user`s.

***

### `user_identity_id`

Type: `string`
Required: No

ID of the user identity for which you want to retrieve all `acs_user`s.

***

### `user_identity_phone_number`

Type: `string`
Required: No

Phone number of the user identity for which you want to retrieve all `acs_user`s, in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, `+15555550100`).

***

## Return Type

Array<[acs\_user](./)>
