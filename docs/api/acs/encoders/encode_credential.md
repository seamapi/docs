# Encode a Credential

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/encoders/encode_credential ⇒ { action_attempt }
```
{% endtab %}
{% endtabs %}

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `acs_credential_id`

Type: `string`
Required: Yes

ID of the `acs_credential` to encode onto a card.

---

### `acs_encoder_id`

Type: `string`
Required: Yes

ID of the `acs_encoder` to use to encode the `acs_credential`.

---


## Return Type

[action\_attempt](./)

### The `ENCODE_CREDENTIAL` Resource

Action attempt to track encoding credential data from the physical encoder onto a card.

### Properties

`action_attempt_id` *UUID*

ID of the action attempt.

---
`action_type` *String*

Type of action that the action attempt tracks.

---
`status` *Enum*

<details>
<summary>Possible enum values:</summary>
- `success`
- `pending`
- `error`
</details>

---
