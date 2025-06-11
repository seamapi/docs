# Add an ACS User to a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `acs_user_id` and `user_identity_id`.

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

{% tab title="cURL" %}

Specify the desired `acs_user_id` and `user_identity_id`.

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

{% tab title="Python" %}

Specify the desired `acs_user_id` and `user_identity_id`.

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

Specify the desired `acs_user_id` and `user_identity_id`.

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

Specify the desired `acs_user_id` and `user_identity_id`.

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

{% tab title="Go" %}

Specify the desired `acs_user_id` and `user_identity_id`.

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

{% tab title="Seam CLI" %}

Specify the desired `acs_user_id` and `user_identity_id`.

#### Code

```seam_cli
seam user-identities add-acs-user --user_identity_id "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a" --acs_user_id "4d223973-0874-4831-8630-bfcb29e6bce0"
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

ID of the access system user that you want to add to the user identity.

---

**`user_identity_id`** *String* (Required)

ID of the user identity to which you want to add an access system user.

---


## Response

void


---

## Examples

