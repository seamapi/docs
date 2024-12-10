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
seam.user_identities.remove_acs_user(user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f", acs_user_id: "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe")
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

<style>
.auth-methods-container {
    margin: 1.5rem 0;
}

.auth-methods-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.auth-method-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eaeaea;
    font-family: system-ui, -apple-system, sans-serif;
}

.auth-method-item:last-child {
    border-bottom: none;
}

.auth-method-item::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #6366f1;
    margin-right: 1rem;
    flex-shrink: 0;
}

.auth-method-item span {
    font-size: 1rem;
    color: #374151;
}
</style>

<div class="auth-methods-container">
    <ul class="auth-methods-list">
            <li class="auth-method-item">
                <span>API Key</span>
            </li>
            <li class="auth-method-item">
                <span>Personal Access Token</span>
            </li>
            <li class="auth-method-item">
                <span>Console Session Token</span>
            </li>
    </ul>
</div>
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
