# Delete a User Identity

```
POST /user_identities/delete ⇒ void
```

Deletes a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity). To delete a user identity, you must first delete any [ACS credentials](https://docs.seam.co/latest/api/access-control-systems/credentials) and [enrollment automations](https://docs.seam.co/latest/api/user_identities/enrollment_automations/delete) associated with the user identity. You must also deactivate any associated phones.

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.delete({
  user_identity_id: "44d48b20-0dbe-419d-91ca-ab8bceecd135",
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
seam.user_identities.delete(user_identity_id="44d48b20-0dbe-419d-91ca-ab8bceecd135")
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.user_identities.delete(user_identity_id: "44d48b20-0dbe-419d-91ca-ab8bceecd135")
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
$seam->user_identities->delete(
    user_identity_id: "44d48b20-0dbe-419d-91ca-ab8bceecd135"
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
seam user-identities delete --user_identity_id "44d48b20-0dbe-419d-91ca-ab8bceecd135"
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
	client.UserIdentities.Delete(
		context.Background(),
		api.UserIdentitiesDeleteRequest{
			UserIdentityId: api.String("44d48b20-0dbe-419d-91ca-ab8bceecd135"),
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

### `user_identity_id`

Type: `string`
Required: Yes

ID of the desired user identity.

***

## Return Type

void
