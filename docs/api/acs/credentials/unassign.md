# Unassign a Credential from an ACS User

```
PATCH /acs/credentials/unassign ⇒ void
```

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.credentials.unassign({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
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
seam.acs.credentials.unassign(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    acs_credential_id="66666666-6666-6666-6666-666666666666",
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
seam.acs.credentials.unassign(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
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
$seam->acs->credentials->unassign(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
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
seam acs credentials unassign --acs_user_id "33333333-3333-3333-3333-333333333333" --acs_credential_id "66666666-6666-6666-6666-666666666666"
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

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the desired credential.

***

### `acs_user_id`

Type: `string`
Required: Yes

ID of the desired user.

***

## Return Type

void

***

## Code Samples
### Unassign a credential from an ACS user

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.credentials.unassign({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
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
seam.acs.credentials.unassign(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    acs_credential_id="66666666-6666-6666-6666-666666666666",
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
seam.acs.credentials.unassign(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
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
$seam->acs->credentials->unassign(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
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
seam acs credentials unassign --acs_user_id "33333333-3333-3333-3333-333333333333" --acs_credential_id "66666666-6666-6666-6666-666666666666"
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

#### Response

```go
nil
```
{% endtab %}

{% endtabs %}


