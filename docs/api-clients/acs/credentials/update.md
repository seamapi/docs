---
description: Update the code for a specified credential
---

# Update a Credential

Updates the code for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% hint style="info" %}
You can only update a credential for [Latch](../../../device-and-system-integration-guides/latch-access-control-system/) or [PTI Storlogix Cloud](../../../device-guides/pti-storlogix-cloud.md).
{% endhint %}

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/credentials/update" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired credential and updated code by including the corresponding `acs_credential_id` and `code` parameters, respectively, in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>String (UUID)<br><em>Required</em></td><td>ID of the desired credential.</td></tr><tr><td><code>code</code></td><td>String<br><em>Optional</em></td><td>Replacement access (PIN) code for the credential.</td></tr><tr><td><code>ends_at</code></td><td>Datetime<br><em>Optional</em></td><td>Replacement date and time at which the validity of the credential ends, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format.<br>Must be a time in the future and after the <code>starts_at</code> value that you set when creating the credential.</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.acs.credentials.update(
  acs_credential_id="66666666-6666-6666-6666-666666666666",
  code="7890"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  "https://connect.getseam.com/acs/credentials/update" \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "code": "7890"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.acs.credentials.update({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
  code: "7890"
});
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->acs->credentials->update(
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
  code: "7890"
);
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.CredentialsAcs.Update(
  acsCredentialId: "66666666-6666-6666-6666-666666666666",
  code: "7890"
);
```
{% endtab %}

{% tab title="Java" %}
```java
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
```go
acs_credential, uErr := client.Acs.Credentials.Update(
  context.Background(), &acs.CredentialsUpdateRequest{
    AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
    Code: "7890",
  },
)
```
{% endtab %}
{% endtabs %}

## Response

Returns a Boolean `ok` status indicator or void.

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
void
```
{% endtab %}

{% tab title="Ruby" %}
```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
```
void
```
{% endtab %}

{% tab title="C#" %}
```
void
```
{% endtab %}

{% tab title="Java" %}
```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
```
void
```
{% endtab %}
{% endtabs %}
