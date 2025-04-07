# Encode a Credential

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

{% hint style="success" %}
```
POST /acs/encoders/encode_credential ⇒ { action_attempt }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`acs_credential_id`** *String* (Required)

ID of the `acs_credential` to encode onto a card.

---

**`acs_encoder_id`** *String* (Required)

ID of the `acs_encoder` to use to encode the `acs_credential`.

---


## Return Type

[action\_attempt](./)

**Action attempt type: ENCODE_CREDENTIAL**
{% tabs %}
{% tab title="JSON" %}
```json
{
  action_attempt_id: [example value],
  action_type: [example value],
  status: [example value]
}
```
{% endtab %}
{% endtabs %}
