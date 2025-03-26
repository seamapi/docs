# Create an ACS User

```
POST /acs/users/create ⇒ { acs_user }
```

Creates a new [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.acs.users.create({
  acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
});
```

#### Response

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

{% tab title="Python TEST" %}
#### Request

```python
seam.acs.users.create(
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    full_name="Jane Doe",
    email_address="jane@example.com",
    phone_number="+15555550100",
)
```

#### Response

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

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.acs.users.create(
  acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
)
```

#### Response

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

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->acs->users->create(
    acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
    full_name: "Jane Doe",
    email_address: "jane@example.com",
    phone_number: "+15555550100"
);
```

#### Response

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

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam acs users create --acs_system_id "123e4567-e89b-12d3-a456-426614174000" --full_name "Jane Doe" --email_address "jane@example.com" --phone_number "+15555550100"
```

#### Response

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

{% tab title="Go TEST" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import users "github.com/seamapi/go/users"

func main() {
	client.Acs.Users.Create(
		context.Background(),
		users.UsersCreateRequest{
			AcsSystemId:  api.String("123e4567-e89b-12d3-a456-426614174000"),
			FullName:     api.String("Jane Doe"),
			EmailAddress: api.String("jane@example.com"),
			PhoneNumber:  api.String("+15555550100"),
		},
	)
}
```

#### Response

```go
api.AcsUser{AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "Jane Doe", FullName: "Jane Doe", EmailAddress: "jane@example.com", PhoneNumber: "+15555550100"}
```
{% endtab %}

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.acs.users.create({
  acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
  access_schedule: {
    starts_at: "2024-11-01T15:00:00.000Z",
    ends_at: "2024-11-04T11:00:00.000Z",
  },
});
```

#### Response

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

{% tab title="Python TEST" %}
#### Request

```python
seam.acs.users.create(
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    full_name="Jane Doe",
    email_address="jane@example.com",
    phone_number="+15555550100",
    access_schedule={
        "starts_at": "2024-11-01T15:00:00.000Z",
        "ends_at": "2024-11-04T11:00:00.000Z",
    },
)
```

#### Response

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

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.acs.users.create(
  acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
  access_schedule: {
    starts_at: "2024-11-01T15:00:00.000Z",
    ends_at: "2024-11-04T11:00:00.000Z",
  },
)
```

#### Response

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

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->acs->users->create(
    acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
    full_name: "Jane Doe",
    email_address: "jane@example.com",
    phone_number: "+15555550100",
    access_schedule: [
        "starts_at" => "2024-11-01T15:00:00.000Z",
        "ends_at" => "2024-11-04T11:00:00.000Z",
    ]
);
```

#### Response

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

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam acs users create --acs_system_id "123e4567-e89b-12d3-a456-426614174000" --full_name "Jane Doe" --email_address "jane@example.com" --phone_number "+15555550100" --access_schedule {"starts_at":"2024-11-01T15:00:00.000Z","ends_at":"2024-11-04T11:00:00.000Z"}
```

#### Response

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

{% tab title="Go TEST" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import users "github.com/seamapi/go/users"

func main() {
	client.Acs.Users.Create(
		context.Background(),
		users.UsersCreateRequest{
			AcsSystemId:    api.String("123e4567-e89b-12d3-a456-426614174000"),
			FullName:       api.String("Jane Doe"),
			EmailAddress:   api.String("jane@example.com"),
			PhoneNumber:    api.String("+15555550100"),
			AccessSchedule: users.UsersCreateRequestAccessSchedule{StartsAt: api.String("2024-11-01T15:00:00.000Z"), EndsAt: api.String("2024-11-04T11:00:00.000Z")},
		},
	)
}
```

#### Response

```go
api.AcsUser{AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "Jane Doe", FullName: "Jane Doe", EmailAddress: "jane@example.com", PhoneNumber: "+15555550100"}
```
{% endtab %}

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.acs.users.create({
  acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
  acs_access_group_ids: ["123e4567-e89b-12d3-a456-426614174000"],
});
```

#### Response

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

{% tab title="Python TEST" %}
#### Request

```python
seam.acs.users.create(
    acs_system_id="123e4567-e89b-12d3-a456-426614174000",
    full_name="Jane Doe",
    email_address="jane@example.com",
    phone_number="+15555550100",
    acs_access_group_ids=["123e4567-e89b-12d3-a456-426614174000"],
)
```

#### Response

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

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.acs.users.create(
  acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  phone_number: "+15555550100",
  acs_access_group_ids: ["123e4567-e89b-12d3-a456-426614174000"],
)
```

#### Response

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

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->acs->users->create(
    acs_system_id: "123e4567-e89b-12d3-a456-426614174000",
    full_name: "Jane Doe",
    email_address: "jane@example.com",
    phone_number: "+15555550100",
    acs_access_group_ids: ["123e4567-e89b-12d3-a456-426614174000"]
);
```

#### Response

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

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam acs users create --acs_system_id "123e4567-e89b-12d3-a456-426614174000" --full_name "Jane Doe" --email_address "jane@example.com" --phone_number "+15555550100" --acs_access_group_ids ["123e4567-e89b-12d3-a456-426614174000"]
```

#### Response

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

{% tab title="Go TEST" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import users "github.com/seamapi/go/users"

func main() {
	client.Acs.Users.Create(
		context.Background(),
		users.UsersCreateRequest{
			AcsSystemId:       api.String("123e4567-e89b-12d3-a456-426614174000"),
			FullName:          api.String("Jane Doe"),
			EmailAddress:      api.String("jane@example.com"),
			PhoneNumber:       api.String("+15555550100"),
			AcsAccessGroupIds: [1]string{api.String("123e4567-e89b-12d3-a456-426614174000")},
		},
	)
}
```

#### Response

```go
api.AcsUser{AcsUserId: "123e4567-e89b-12d3-a456-426614174000", AcsSystemId: "123e4567-e89b-12d3-a456-426614174000", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z", DisplayName: "Jane Doe", FullName: "Jane Doe", EmailAddress: "jane@example.com", PhoneNumber: "+15555550100"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_system_id`

Type: `string`
Required: Yes

ID of the `acs_system` to which to add the new `acs_user`.

***

### `full_name`

Type: `string`
Required: Yes

Full name of the new `acs_user`.

***

### `access_schedule`

Type: `object`
Required: No

`starts_at` and `ends_at` timestamps for the new `acs_user`'s access. If you specify an `access_schedule`, you may include both `starts_at` and `ends_at`. `starts_at` defaults to the current time if not provided. `ends_at` is optional and must be a time in the future and after `starts_at`.

***

### `acs_access_group_ids`

Type: `array`
Required: No

Array of `access_group_id`s to indicate the access groups to which to add the new `acs_user`.

***

### `email`

Type: `string`
Required: No



***

### `email_address`

Type: `string`
Required: No

Email address of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

***

### `phone_number`

Type: `string`
Required: No

Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).

***

### `user_identity_id`

Type: `string`
Required: No

ID of the user identity with which to associate the new `acs_user`.

***

## Return Type

[acs\_user](./)
