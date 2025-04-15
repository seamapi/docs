# Simulate Creating an Unmanaged Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates the creation of an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces).

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/simulate/create_unmanaged_access_code ⇒ { access_code }
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
<tr><th width="250">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>code</code></strong> <i>String</i> (Required)</td>
<td>

Code of the simulated unmanaged access code.
</td></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the device for which you want to simulate the creation of an unmanaged access code.
</td></tr>
<tr><td><strong><code>name</code></strong> <i>String</i> (Required)</td>
<td>

Name of the simulated unmanaged access code.
</td></tr>
</table>

## Response

[unmanaged\_access\_code](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of unmanaged_access_code
}
```
{% endtab %}
{% endtabs %}
