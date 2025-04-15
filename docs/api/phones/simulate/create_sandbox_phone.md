# Create a Sandbox Phone

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new simulated phone in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces). For more information, see [Creating a Simulated Phone for a User Identity](../../../capability-guides/mobile-access/developing-in-a-sandbox-workspace.md#creating-a-simulated-phone-for-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /phones/simulate/create_sandbox_phone ⇒ { phone }
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

<table>
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>user_identity_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the user identity to associate with the simulated phone.

---
</td></tr>
<tr><td><strong><code>assa_abloy_metadata</code></strong> <i>Object</i></td>
<td>

ASSA ABLOY metadata to associate with the simulated phone.

---
</td></tr>
<tr><td><strong><code>custom_sdk_installation_id</code></strong> <i>String</i></td>
<td>

ID of the custom SDK installation to use for the simulated phone.

---
</td></tr>
<tr><td><strong><code>phone_metadata</code></strong> <i>Object</i></td>
<td>

Metadata to associate with the simulated phone.

---
</td></tr>
</table>

## Response

[phone](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of phone
}
```
{% endtab %}
{% endtabs %}
