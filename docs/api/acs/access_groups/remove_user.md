# Remove an ACS User from an Access Group

{% hint style="info" %}
**Authentication Methods:** `personal_access_token`, `console_session_token`, `api_key`
{% endhint %}

```
POST /acs/access_groups/remove_user ⇒ void
```

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.accessGroups.removeUser({
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
seam.acs.access_groups.remove_user(
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
seam.acs.access_groups.remove_user(acs_access_group_id: "44444444-4444-4444-4444-444444444444", acs_user_id: "33333333-3333-3333-3333-333333333333")
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
$seam->acs->access_groups->remove_user(
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
seam acs access-groups remove-user --acs_access_group_id "44444444-4444-4444-4444-444444444444" --acs_user_id "33333333-3333-3333-3333-333333333333"
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
	client.Acs.AccessGroups.RemoveUser(
		context.Background(),
		accessgroups.AccessGroupsRemoveUserRequest{
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

Type: `string`
Required: Yes

ID of the desired access group.

***

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired user.

***

## Return Type

void
