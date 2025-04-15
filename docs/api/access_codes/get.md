# Get an Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/get ⇒ { access_code }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

<table>
<tr><th width="250">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>access_code_id</code></strong> <i>String</i></td>
<td>

ID of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.
</td></tr>
<tr><td><strong><code>code</code></strong> <i>String</i></td>
<td>

Code of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.
</td></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i></td>
<td>

ID of the device containing the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.
</td></tr>
</table>

## Response

[access\_code](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of access_code
}
```
{% endtab %}
{% endtabs %}
