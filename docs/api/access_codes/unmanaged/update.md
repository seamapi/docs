# Update an Unmanaged Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

{% tabs %}
{% tab title="Signature" %}
```
PATCH /access_codes/unmanaged/update ⇒ void
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
<tr><td><strong><code>access_code_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the unmanaged access code that you want to update.
</td></tr>
<tr><td><strong><code>is_managed</code></strong> <i>Boolean</i> (Required)</td>
<td>
</td></tr>
<tr><td><strong><code>allow_external_modification</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.
</td></tr>
<tr><td><strong><code>force</code></strong> <i>Boolean</i></td>
<td>

Indicates whether to force the unmanaged access code update.
</td></tr>
<tr><td><strong><code>is_external_modification_allowed</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.
</td></tr>
</table>

## Response

void
