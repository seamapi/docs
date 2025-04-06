# Delete a Credential

Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% hint style="success" %}
```
POST /acs/credentials/delete ⇒ void
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`acs_credential_id`** *String* (Required)

ID of the desired credential.

---


## Return Type

void

---

## Examples
  
### Delete a credential

Specify the desired `acs_credential_id` to delete the specified credential.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.credentials.delete({
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
seam.acs.credentials.delete(acs_credential_id="66666666-6666-6666-6666-666666666666")
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.credentials.delete(acs_credential_id: "66666666-6666-6666-6666-666666666666")
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
$seam->acs->credentials->delete(
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
seam acs credentials delete --acs_credential_id "66666666-6666-6666-6666-666666666666"
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
	client.Acs.Credentials.Delete(
		context.Background(),
		credentials.CredentialsDeleteRequest{
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


