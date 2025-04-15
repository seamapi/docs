# List Access Codes

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

Specify either `device_id` or `access_code_ids`.

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/list ⇒ { access_codes: [access_code, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

<table>
<tr><th style="width:25%">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>access_code_ids</code></strong> <i>Array</i> <i>of UUIDs</i></td>
<td>

IDs of the access codes that you want to retrieve. Specify either `device_id` or `access_code_ids`.
</td></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i></td>
<td>

ID of the device for which you want to list access codes. Specify either `device_id` or `access_code_ids`.
</td></tr>
<tr><td><strong><code>user_identifier_key</code></strong> <i>String</i></td>
<td>

Your user ID for the user by which to filter access codes.
</td></tr>
</table>

## Response

Array of [access\_codes](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of access_code
}
```
{% endtab %}
{% endtabs %}
