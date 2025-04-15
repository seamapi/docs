# Unassign a Credential from an ACS User

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="Signature" %}
```
PATCH /acs/credentials/unassign ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_credential_id`** *String* (Required)

ID of the desired credential.

---

**`acs_user_id`** *String* (Required)

ID of the desired user.

---


## Response

void

---

## Examples
  
### Unassign a credential from an ACS user

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.credentials.unassign({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
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
seam.acs.credentials.unassign(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    acs_credential_id="66666666-6666-6666-6666-666666666666",
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
seam.acs.credentials.unassign(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
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
$seam->acs->credentials->unassign(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
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
seam acs credentials unassign --acs_user_id "33333333-3333-3333-3333-333333333333" --acs_credential_id "66666666-6666-6666-6666-666666666666"
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
import credentials "github.com/seamapi/go/credentials"

func main() {
	client.Acs.Credentials.Unassign(
		context.Background(),
		credentials.CredentialsUnassignRequest{
			AcsUserId:       api.String("33333333-3333-3333-3333-333333333333"),
			AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
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


