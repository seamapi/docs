# Update a Credential

{% tabs %}
{% tab title="Signature" %}
```
PATCH /acs/credentials/update ⇒ void
```
{% endtab %}
{% endtabs %}

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.credentials.update({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
  code: "7890",
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
seam.acs.credentials.update(
    acs_credential_id="66666666-6666-6666-6666-666666666666", code="7890"
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
seam.acs.credentials.update(acs_credential_id: "66666666-6666-6666-6666-666666666666", code: "7890")
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
$seam->acs->credentials->update(
    acs_credential_id: "66666666-6666-6666-6666-666666666666",
    code: "7890"
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
seam acs credentials update --acs_credential_id "66666666-6666-6666-6666-666666666666" --code "7890"
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
	client.Acs.Credentials.Update(
		context.Background(),
		credentials.CredentialsUpdateRequest{
			AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
			Code:            api.String("7890"),
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

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the desired credential.

---

### `code`

Type: `string`
Required: No

Replacement access (PIN) code for the credential.

---

### `ends_at`

Type: `string`
Required: No

Replacement date and time at which the validity of the credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after the `starts_at` value that you set when creating the credential.

---


## Return Type

void
