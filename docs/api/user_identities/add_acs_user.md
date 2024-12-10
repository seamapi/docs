# Add an ACS User to a User Identity

```
PUT /user_identities/add_acs_user ⇒ void
```

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.addAcsUser({
  user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  acs_user_id: "4d223973-0874-4831-8630-bfcb29e6bce0",
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
seam.user_identities.add_acs_user(
    user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    acs_user_id="4d223973-0874-4831-8630-bfcb29e6bce0",
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
seam.user_identities.add_acs_user(user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", acs_user_id: "4d223973-0874-4831-8630-bfcb29e6bce0")
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
$seam->user_identities->add_acs_user(
    user_identity_id: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    acs_user_id: "4d223973-0874-4831-8630-bfcb29e6bce0"
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
seam user-identities add-acs-user --user_identity_id "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a" --acs_user_id "4d223973-0874-4831-8630-bfcb29e6bce0"
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
	client.UserIdentities.AddAcsUser(
		context.Background(),
		api.UserIdentitiesAddAcsUserRequest{
			UserIdentityId: api.String("48500a8e-5e7e-4bde-b7e5-0be97cae5d7a"),
			AcsUserId:      api.String("4d223973-0874-4831-8630-bfcb29e6bce0"),
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

## Authentication

This endpoint supports the following authentication methods:

<table>
  <tbody>
    <tr>
      <td>API Key</td>
    </tr>
    <tr>
      <td>Personal Access Token</td>
    </tr>
    <tr>
      <td>Console Session Token</td>
    </tr>
  </tbody>
</table>

## Request Parameters

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired ACS user.

***

### `user_identity_id`

Type: `string`
Required: Yes

ID of the desired user identity.

***

## Return Type

void
