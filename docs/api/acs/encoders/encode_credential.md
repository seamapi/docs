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

## Request Parameters

**`acs_credential_id`** ** (Required)

ID of the `acs_credential` to encode onto a card.

---

**`acs_encoder_id`** ** (Required)

ID of the `acs_encoder` to use to encode the `acs_credential`.

---


## Return Type

[action\_attempt](./)

### The `ENCODE_CREDENTIAL` Resource

Action attempt to track encoding credential data from the physical encoder onto a card.

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

---

### Properties

**`action_attempt_id`** *UUID*

ID of the action attempt.


---

**`action_type`** *String*

Type of action that the action attempt tracks.


---

**`status`** *Enum*

<details>

<summary>Enum values</summary>

- `success`
- `pending`
- `error`
</details>


---

