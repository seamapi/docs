# Delete an Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/delete ⇒ void
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
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>access_code_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the access code to delete.

---
</td></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i></td>
<td>

ID of the device for which to delete the access code.

---
</td></tr>
</table>

## Response

void
