# Add a Connected Account to a Space

- [Request Parameters](#request-parameters)
- [Response](#response)

Adds a [connected account](https://docs.seam.co/latest/core-concepts/connected-accounts) to a specific space.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`connected_account_id`** *String* (Required)

ID of the connected account that you want to add to the space.

---

**`space_id`** *String* (Required)

ID of the space to which you want to add the connected account.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

