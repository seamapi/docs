# Remove an ACS User from a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /user_identities/remove_acs_user ⇒ void
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

ID of the ACS user.

---

**`user_identity_id`**  (Required)

ID of the desired user identity.

---


## Response

void

---

## Examples

### Remove an ACS user from a user identity

Specify the desired `acs_user_id` and `user_identity_id`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.removeAcsUser({
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  acs_user_id: "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe",
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
seam.user_identities.remove_acs_user(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    acs_user_id="c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe",
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
seam.user_identities.remove_acs_user(
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  acs_user_id: "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe",
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
$seam->user_identities->remove_acs_user(
    user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    acs_user_id: "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
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
seam user-identities remove-acs-user --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f" --acs_user_id "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
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

#### Output

```go
nil
```
{% endtab %}

{% endtabs %}


