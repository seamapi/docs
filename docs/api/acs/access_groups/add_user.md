# Add an ACS User to an Access Group

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="Signature" %}
```
PUT /acs/access_groups/add_user ⇒ void
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

ID of the desired access group.

---

**`acs_user_id`**  (Required)

ID of the desired user.

---


## Response

void

---

## Examples

### Add an ACS user to an access group

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.accessGroups.addUser({
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333",
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
seam.acs.access_groups.add_user(
    acs_access_group_id="44444444-4444-4444-4444-444444444444",
    acs_user_id="33333333-3333-3333-3333-333333333333",
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
seam.acs.access_groups.add_user(
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333",
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
$seam->acs->access_groups->add_user(
    acs_access_group_id: "44444444-4444-4444-4444-444444444444",
    acs_user_id: "33333333-3333-3333-3333-333333333333"
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
seam acs access-groups add-user --acs_access_group_id "44444444-4444-4444-4444-444444444444" --acs_user_id "33333333-3333-3333-3333-333333333333"
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
import accessgroups "github.com/seamapi/go/accessgroups"

func main() {
	client.Acs.AccessGroups.AddUser(
		context.Background(),
		accessgroups.AccessGroupsAddUserRequest{
			AcsAccessGroupId: api.String("44444444-4444-4444-4444-444444444444"),
			AcsUserId:        api.String("33333333-3333-3333-3333-333333333333"),
		},
	)
}
```

#### Output

```go
nil
```
{% endtab %}

{% endtabs %}


