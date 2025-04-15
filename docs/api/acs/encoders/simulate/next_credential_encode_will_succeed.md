# Simulate that the Next Credential Encoding Will Succeed

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates that the next attempt to encode a [credential](../../../../capability-guides/access-systems/managing-credentials.md) using the specified [encoder](../../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) will succeed. You can only perform this action within a [sandbox workspace](../../../../core-concepts/workspaces/README.md#sandbox-workspaces).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/simulate/next_credential_encode_will_succeed ⇒ void
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
<tr><th width="250">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>acs_encoder_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the `acs_encoder` that will be used in the next request to encode the `acs_credential`.
</td></tr>
<tr><td><strong><code>scenario</code></strong> <i>String</i></td>
<td>

Scenario to simulate.
</td></tr>
</table>

## Response

void
