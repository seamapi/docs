# Get an Encoder

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/get ⇒ { acs_encoder }
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

**`acs_encoder_id`**  (Required)

ID of the desired encoder.

---


## Response

[acs\_encoder](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_encoder
}
```
{% endtab %}
{% endtabs %}
