# Update Multiple Linked Access Codes

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.

Specify the `common_code_key` to identify the set of access codes that you want to update.

See also [Update Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md#update-linked-access-codes).

{% tabs %}
{% tab title="Signature" %}
```
PATCH /access_codes/update_multiple ⇒ void
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
<tr><td><strong><code>common_code_key</code></strong> <i>String</i> (Required)</td>
<td>

Key that links the group of access codes, assigned on creation by `/access_codes/create_multiple`.
</td></tr>
<tr><td><strong><code>ends_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.
</td></tr>
<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>

Name of the new access code.
</td></tr>
<tr><td><strong><code>starts_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
</td></tr>
</table>

## Response

void
