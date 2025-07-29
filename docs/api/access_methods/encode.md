# Encode an Access Method
{% hint style="info" %}
**Early Access Preview.** The access methods API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Encodes an existing access method onto a plastic card placed on the specified [encoder](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_id`** *String* (Required)

ID of the `access_method` to encode onto a card.

---

**`acs_encoder_id`** *String* (Required)

ID of the `acs_encoder` to use to encode the `access_method`.

---


## Response

[action\_attempt](./)

