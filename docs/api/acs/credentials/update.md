# Update a Credential

```
PATCH /acs/credentials/update ⇒ void
```

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.credentials.update({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
  code: "7890",
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
seam.acs.credentials.update(
    acs_credential_id="66666666-6666-6666-6666-666666666666", code="7890"
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
seam.acs.credentials.update(acs_credential_id: "66666666-6666-6666-6666-666666666666", code: "7890")
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
$seam->acs->credentials->update(
    acs_credential_id: "66666666-6666-6666-6666-666666666666",
    code: "7890"
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
seam acs credentials update --acs_credential_id "66666666-6666-6666-6666-666666666666" --code "7890"
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
	client.Acs.Credentials.Update(
		context.Background(),
		credentials.CredentialsUpdateRequest{
			AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
			Code:            api.String("7890"),
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
  Must also include the `seam-workspace` header in the request.

## Request Parameters

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the desired credential.

***

### `code`

Type: `string`
Required: No

Replacement access (PIN) code for the credential.

***

### `ends_at`

Type: `string`
Required: No

Replacement date and time at which the validity of the credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after the `starts_at` value that you set when creating the credential.

***

## Return Type

void
