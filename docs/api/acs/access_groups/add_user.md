# Add an ACS User to an Access Group

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

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

{% tab title="cURL" %}
#### Code

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/add_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
  "acs_user_id": "33333333-3333-3333-3333-333333333333"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}
#### Code

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

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

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

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

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

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

{% tab title="Go" %}
#### Code

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

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

{% tab title="Seam CLI" %}
#### Code

Specify the `acs_access_group_id` and `acs_user_id` to add an ACS user to an access group.

```seam_cli
seam acs access-groups add-user --acs_access_group_id "44444444-4444-4444-4444-444444444444" --acs_user_id "33333333-3333-3333-3333-333333333333"
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

**`acs_access_group_id`** *String* (Required)

ID of the access group to which you want to add an access system user.

---

**`acs_user_id`** *String*

ID of the access system user that you want to add to an access group. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the desired user identity that you want to add to an access group. You can only provide one of acs_user_id or user_identity_id. If the ACS system contains an ACS user with the same `email_address` or `phone_number` as the user identity that you specify, they are linked, and the access group membership belongs to the ACS user. If the ACS system does not have a corresponding ACS user, one is created.

---


## Response

void


---

## Examples

