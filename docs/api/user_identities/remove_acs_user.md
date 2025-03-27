# Remove an ACS User from a User Identity

```
POST /user_identities/remove_acs_user ⇒ void
```

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.removeAcsUser({
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  acs_user_id: "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe",
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
seam.user_identities.remove_acs_user(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    acs_user_id="c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe",
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
seam.user_identities.remove_acs_user(
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  acs_user_id: "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe",
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
$seam->user_identities->remove_acs_user(
    user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    acs_user_id: "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
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
seam user-identities remove-acs-user --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f" --acs_user_id "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
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

func main() {
	client.UserIdentities.RemoveAcsUser(
		context.Background(),
		api.UserIdentitiesRemoveAcsUserRequest{
			UserIdentityId: api.String("5c945ab5-c75e-4bcb-8e5f-9410061c401f"),
			AcsUserId:      api.String("c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"),
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

ID of the ACS user.

***

### `user_identity_id`

Type: `string`
Required: Yes

ID of the desired user identity.

***

## Return Type

void
