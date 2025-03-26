# Suspend an ACS User

```
POST /acs/users/suspend ⇒ void
```

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.acs.users.suspend({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
});
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python TEST" %}
#### Request

```python
seam.acs.users.suspend(acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.acs.users.suspend(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Response

```ruby
nil
```
{% endtab %}

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->acs->users->suspend(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33");
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam acs users suspend --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
```

#### Response

```seam_cli
{}
```
{% endtab %}

{% tab title="Go TEST" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import users "github.com/seamapi/go/users"

func main() {
	client.Acs.Users.Suspend(
		context.Background(),
		users.UsersSuspendRequest{
			AcsUserId: api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
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

ID of the desired `acs_user`.

***

## Return Type

void
