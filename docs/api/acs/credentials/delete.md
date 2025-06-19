# Delete a Credential

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `acs_credential_id` to delete the specified credential.

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

{% tab title="cURL" %}

Specify the desired `acs_credential_id` to delete the specified credential.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `acs_credential_id` to delete the specified credential.

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

Specify the desired `acs_credential_id` to delete the specified credential.

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

Specify the desired `acs_credential_id` to delete the specified credential.

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

{% tab title="Go" %}

Specify the desired `acs_credential_id` to delete the specified credential.

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

{% tab title="Seam CLI" %}

Specify the desired `acs_credential_id` to delete the specified credential.

#### Code

```seam_cli
seam acs credentials delete --acs_credential_id "66666666-6666-6666-6666-666666666666"
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

**`acs_credential_id`** *String* (Required)

````
ID of the credential that you want to delete.
````

---


## Response

void


---

## Examples

