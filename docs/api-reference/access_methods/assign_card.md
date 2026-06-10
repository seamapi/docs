# Assign a Card to an Access Method

- [Request Parameters](#request-parameters)
- [Response](#response)

Assigns an existing card credential to a card-mode access method, identified by `card_number`.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_id`** *String* (Required)

ID of the card-mode `access_method` to assign the card to.

---

**`card_number`** *String* (Required)

Card number of the card credential to assign.

---


## Response

{% hint style="success" %}
Returns:
**[access\_method](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_method_id": "27d8ad77-55c2-4e20-b5b3-43555926f0e8",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Card",
  "is_card_encoding_required": true,
  "issued_at": "2025-06-14T16:54:17.946612Z",
  "mode": "card",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}
{% endtabs %}
