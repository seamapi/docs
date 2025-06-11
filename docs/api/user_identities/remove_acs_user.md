# Remove an ACS User from a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Removes a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `acs_user_id` and `user_identity_id`.

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

{% tab title="cURL" %}

Specify the desired `acs_user_id` and `user_identity_id`.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/remove_acs_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "acs_user_id": "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `acs_user_id` and `user_identity_id`.

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

Specify the desired `acs_user_id` and `user_identity_id`.

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

Specify the desired `acs_user_id` and `user_identity_id`.

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

{% tab title="Go" %}

Specify the desired `acs_user_id` and `user_identity_id`.

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

{% tab title="Seam CLI" %}

Specify the desired `acs_user_id` and `user_identity_id`.

#### Code

```seam_cli
seam user-identities remove-acs-user --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f" --acs_user_id "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
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

**`acs_user_id`** *String* (Required)

ID of the access system user that you want to remove from the user identity..

---

**`user_identity_id`** *String* (Required)

ID of the user identity from which you want to remove an access system user.

---


## Response

void


---

## Examples

