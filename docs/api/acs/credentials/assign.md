# Assign a Credential to an ACS User

```
PATCH /acs/credentials/assign ⇒ void
```

Assigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) to a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="JavaScript TEST" %}
#### Request

```javascript
await seam.acs.credentials.assign({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python TEST" %}
#### Request

```python
seam.acs.credentials.assign(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    acs_credential_id="66666666-6666-6666-6666-666666666666",
)
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby TEST" %}
#### Request

```ruby
seam.acs.credentials.assign(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
)
```

#### Response

```ruby
nil
```
{% endtab %}

{% tab title="PHP TEST" %}
#### Request

```php
<?php
$seam->acs->credentials->assign(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI TEST" %}
#### Request

```seam_cli
seam acs credentials assign --acs_user_id "33333333-3333-3333-3333-333333333333" --acs_credential_id "66666666-6666-6666-6666-666666666666"
```

#### Response

```seam_cli
{}
```
{% endtab %}

{% tab title="Go TEST" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import credentials "github.com/seamapi/go/credentials"

func main() {
	client.Acs.Credentials.Assign(
		context.Background(),
		credentials.CredentialsAssignRequest{
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
