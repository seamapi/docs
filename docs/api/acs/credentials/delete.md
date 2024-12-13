# Delete a Credential

```
POST /acs/credentials/delete ⇒ void
```

Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.acs.credentials.delete({
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
seam.acs.credentials.delete(acs_credential_id="66666666-6666-6666-6666-666666666666")
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.acs.credentials.delete(acs_credential_id: "66666666-6666-6666-6666-666666666666")
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
$seam->acs->credentials->delete(
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
seam acs credentials delete --acs_credential_id "66666666-6666-6666-6666-666666666666"
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
	client.Acs.Credentials.Delete(
		context.Background(),
		credentials.CredentialsDeleteRequest{
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

## Request Parameters

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the desired credential.

***

## Return Type

void
