# Update a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)



{% tabs %}
{% tab title="Signature" %}
```
PATCH /user_identities/update ⇒ void
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
<tr><th width="25%">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>user_identity_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the user identity.
</td></tr>
<tr><td><strong><code>email_address</code></strong> <i>String</i></td>
<td>

Unique email address for the user identity.
</td></tr>
<tr><td><strong><code>full_name</code></strong> <i>String</i></td>
<td>
</td></tr>
<tr><td><strong><code>phone_number</code></strong> <i>String</i></td>
<td>

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).
</td></tr>
<tr><td><strong><code>user_identity_key</code></strong> <i>String</i></td>
<td>

Unique key for the user identity.
</td></tr>
</table>

## Response

void
