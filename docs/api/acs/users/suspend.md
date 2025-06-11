# Suspend an ACS User


- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an access system user revokes their access temporarily. To restore an access system user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.


{% tabs %}
{% tab title="JavaScript" %}

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

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

{% tab title="cURL" %}

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

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

{% tab title="Python" %}

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

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

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

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

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

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

{% tab title="Go" %}

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

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

{% tab title="Seam CLI" %}

[Suspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#suspend-an-acs-user) a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). Suspending an ACS user revokes their access temporarily. To restore an ACS user's access, you can [unsuspend](https://docs.seam.co/latest/api/acs/users/unsuspend) them.

#### Code

```seam_cli
seam acs users suspend --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33"
```

#### Output

```seam_cli
{}
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

ID of the access system that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity that you want to suspend. You can only provide acs_user_id or the combination of acs_system_id and user_identity_id.

---


## Response

void


---

## Examples

