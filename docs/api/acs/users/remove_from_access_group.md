# Remove an ACS User from an Access Group

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/users/remove_from_access_group ⇒ void
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

**`acs_access_group_id`**  (Required)

ID of the access group from which you want to remove an access system user.

---

**`acs_user_id`**  (Required)

ID of the access system user that you want to remove from an access group.

---


## Response

void

---

## Examples

### Remove an ACS user from an access group

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.users.removeFromAccessGroup({
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000",
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
seam.acs.users.remove_from_access_group(
    acs_user_id="8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    acs_access_group_id="123e4567-e89b-12d3-a456-426614174000",
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.users.remove_from_access_group(
  acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000",
)
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
$seam->acs->users->remove_from_access_group(
    acs_user_id: "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
    acs_access_group_id: "123e4567-e89b-12d3-a456-426614174000"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs users remove-from-access-group --acs_user_id "8d7e0b3a-b889-49a7-9164-4b71a0506a33" --acs_access_group_id "123e4567-e89b-12d3-a456-426614174000"
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
	client.Acs.Users.RemoveFromAccessGroup(
		context.Background(),
		users.UsersRemoveFromAccessGroupRequest{
			AcsUserId:        api.String("8d7e0b3a-b889-49a7-9164-4b71a0506a33"),
			AcsAccessGroupId: api.String("123e4567-e89b-12d3-a456-426614174000"),
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
curl --include --request POST "https://connect.getseam.com/acs/users/remove_from_access_group" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "8d7e0b3a-b889-49a7-9164-4b71a0506a33",
  "acs_access_group_id": "123e4567-e89b-12d3-a456-426614174000"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% endtabs %}


