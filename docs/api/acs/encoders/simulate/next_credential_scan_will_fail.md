# Simulate that the Next Credential Scan Will Fail

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates that the next attempt to scan a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will fail. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/simulate/next_credential_scan_will_fail ⇒ void
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
<tr><td><strong><code>acs_encoder_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the `acs_encoder` that will fail to scan the `acs_credential` in the next request.

---
</td></tr>
<tr><td><strong><code>acs_credential_id_on_seam</code></strong> <i>String</i></td>
<td>

---
</td></tr>
<tr><td><strong><code>error_code</code></strong> <i>String</i></td>
<td>

---
</td></tr>
</table>

## Response

void
