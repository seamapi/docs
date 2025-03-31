# Update an ACS User

```
PATCH /acs/users/update ⇒ void
```

Updates the properties of a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.users.update({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  phone_number: "+15555550222",
});
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.acs.users.update(
    acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33", phone_number="+15555550222"
)
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.users.update(
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  phone_number: "+15555550222",
)
```

#### Response

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->acs->users->update(
    acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    phone_number: "+15555550222"
);
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam acs users update --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33" --phone_number "+15555550222"
```

#### Response

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import users "github.com/seamapi/go/users"

func main() {
	client.Acs.Users.Update(
		context.Background(),
		users.UsersUpdateRequest{
			AcsUserId:   api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
			PhoneNumber: api.String("+15555550222"),
		},
	)
}
```

#### Response

```go
nil
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_user_id`

Type: `string`
Required: Yes

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

***

### `access_schedule`

Type: `object`
Required: No

`starts_at` and `ends_at` timestamps for the `acs_user`'s access. If you specify an `access_schedule`, you must include both `starts_at` and `ends_at`. `ends_at` must be a time in the future and after `starts_at`.

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

### `full_name`

Type: `string`
Required: No

Full name of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

***

### `hid_acs_system_id`

Type: `string`
Required: No

***

### `phone_number`

Type: `string`
Required: No

Phone number of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in E.164 format (for example, `+15555550100`).

***

## Return Type

void
