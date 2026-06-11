# Assign a Card Credential to an Access Method

- [Request Parameters](#request-parameters)
- [Response](#response)

Assigns a pre-registered card credential, identified by `card_number`, to a card-mode access method. Use this endpoint for access systems that use pre-registered cards, where a physical card must be associated with an access method before it can be used for access. Assigning a card credential also triggers issuance of the access method.


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

