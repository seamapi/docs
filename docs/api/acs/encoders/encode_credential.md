# Encode a Credential

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/encode_credential ⇒ { action_attempt }
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

**`acs_credential_id`**  (Required)

ID of the `acs_credential` to encode onto a card.

---

**`acs_encoder_id`**  (Required)

ID of the `acs_encoder` to use to encode the `acs_credential`.

---


## Response

[action\_attempt](./)

**`ENCODE_CREDENTIAL`**
{% tabs %}
{% tab title="JSON" %}
```json
{
  action_attempt_id: [example value],
  action_type: [example value],
  error: [example value],
  result: [example value],
  status: [example value]
}
```
{% endtab %}
{% endtabs %}
