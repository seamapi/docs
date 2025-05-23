# Suspend an ACS User

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an access system user revokes their access temporarily. To restore an access system user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/users/suspend ⇒ void
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

**`acs_user_id`**  (Required)

ID of the access system user that you want to suspend.

---


## Response

void

---

## Examples

### Suspend an ACS user

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.users.suspend({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.users.suspend(acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.users.suspend(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->users->suspend(acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33");
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs users suspend --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Code

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

#### Output

```go
nil
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/suspend" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% endtabs %}


