# Remove a Connected Account from a Space

- [Request Parameters](#request-parameters)
- [Response](#response)

Removes a [connected account](https://docs.seam.co/latest/core-concepts/connected-accounts) from a specific space.


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

ID of the connected account that you want to remove from the space.

---

**`space_id`** *String* (Required)

ID of the space from which you want to remove the connected account.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

