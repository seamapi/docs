# Add an ACS User to an Access Group

{% hint style="info" %}
**Authentication Methods:** `personal_access_token`, `console_session_token`, `api_key`
{% endhint %}

```
PUT /acs/users/add_to_access_group ⇒ void
```

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.users.addToAccessGroup({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000",
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
seam.acs.users.add_to_access_group(
    acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    acs_access_group_id="123e4567-e89b-12d3-a456-426614174000",
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
seam.acs.users.add_to_access_group(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33", acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000")
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
$seam->acs->users->add_to_access_group(
    acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000"
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
seam acs users add-to-access-group --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33" --acs_access_group_id "123e4567-e89b-12d3-a456-426614174000"
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
	client.Acs.Users.AddToAccessGroup(
		context.Background(),
		users.UsersAddToAccessGroupRequest{
			AcsUserId:        api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
			AcsAccessGroupId: api.String("123e4567-e89b-12d3-a456-426614174000"),
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

## Request Parameters

### `acs_access_group_id`

Type: `string`
Required: Yes

ID of the desired access group.

***

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired `acs_user`.

***

## Return Type

void
