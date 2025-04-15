# List Encoders

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/list ⇒ { acs_encoders: [acs_encoder, …] }
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
<tr><th style="width:25%">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>acs_encoder_ids</code></strong> <i>Array</i> <i>of UUIDs</i></td>
<td>

IDs of the `acs_encoder`s that you want to retrieve.
</td></tr>
<tr><td><strong><code>acs_system_id</code></strong> <i>String</i></td>
<td>

ID of the `acs_system` for which you want to retrieve all `acs_encoder`s.
</td></tr>
<tr><td><strong><code>acs_system_ids</code></strong> <i>Array</i> <i>of UUIDs</i></td>
<td>

IDs of the `acs_system`s for which you want to retrieve all `acs_encoder`s.
</td></tr>
<tr><td><strong><code>limit</code></strong> <i>Number</i></td>
<td>

Number of `acs_encoders` to return.
</td></tr>
</table>

## Response

Array of [acs\_encoders](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_encoder
}
```
{% endtab %}
{% endtabs %}
