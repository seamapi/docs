# 

```
PUT /acs/access_groups/add_user ⇒ void
```

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.accessGroups.addUser({
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
  acs_user_id: "33333333-3333-3333-3333-333333333333",
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
seam.acs.access_groups.add_user(
    acs_access_group_id="44444444-4444-4444-4444-444444444444",
    acs_user_id="33333333-3333-3333-3333-333333333333",
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
seam.acs.access_groups.add_user(acs_access_group_id: "44444444-4444-4444-4444-444444444444", acs_user_id: "33333333-3333-3333-3333-333333333333")
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
$seam->acs->access_groups->add_user(
    acs_access_group_id: "44444444-4444-4444-4444-444444444444",
    acs_user_id: "33333333-3333-3333-3333-333333333333"
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
seam acs access-groups add-user --acs_access_group_id "44444444-4444-4444-4444-444444444444" --acs_user_id "33333333-3333-3333-3333-333333333333"
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

#### Response

```go
nil
```
{% endtab %}

{% endtabs %}

## Request Parameters

### `acs_access_group_id`

Type: `string`\
Required: Yes

ID of the desired access group.

***

### `acs_user_id`

Type: `string`\
Required: Yes

ID of the desired user.

***

## Return Type

void