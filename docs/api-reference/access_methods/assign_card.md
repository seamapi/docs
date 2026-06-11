# Assign a Card Credential to an Access Method

- [Request Parameters](#request-parameters)
- [Response](#response)

Assigns a pre-registered card credential to a card-mode access method, identified by `card_number`. Use this endpoint for access systems that use pre-registered cards, where a physical card must be associated with an access method before it can be issued.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_id`** *String* (Required)

ID of the `access_method` to assign the credential to.

---

**`card_number`** *String* (Required)

Card number of the credential to assign.

---


## Response

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}

