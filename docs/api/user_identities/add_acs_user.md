# Add an ACS User to a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
PUT /user_identities/add_acs_user ⇒ void
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

ID of the desired ACS user.

---

**`user_identity_id`**  (Required)

ID of the desired user identity.

---


## Response

void

---

## Examples

### Add an ACS user to a user identity

Specify the desired `acs_user_id` and `user_identity_id`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.addAcsUser({
  user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  acs_user_id: "4d223973-0874-4831-8630-bfcb29e6bce0",
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
seam.user_identities.add_acs_user(
    user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    acs_user_id="4d223973-0874-4831-8630-bfcb29e6bce0",
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
seam.user_identities.add_acs_user(
  user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  acs_user_id: "4d223973-0874-4831-8630-bfcb29e6bce0",
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
$seam->user_identities->add_acs_user(
    user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    acs_user_id: "4d223973-0874-4831-8630-bfcb29e6bce0"
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
seam user-identities add-acs-user --user_identity_id "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a" --acs_user_id "4d223973-0874-4831-8630-bfcb29e6bce0"
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
	client.UserIdentities.AddAcsUser(
		context.Background(),
		api.UserIdentitiesAddAcsUserRequest{
			UserIdentityId: api.String("48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"),
			AcsUserId:      api.String("4d223973-0874-4831-8630-bfcb29e6bce0"),
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
curl --include --request POST "https://connect.getseam.com/user_identities/add_acs_user" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% endtabs %}


