# Simulate Connected Account Disconnection

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates a connected account becoming disconnected from Seam. Only applicable for [sandbox workspaces](../../../core-concepts/workspaces/README.md#sandbox-workspaces).


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

ID of the connected account you want to simulate as disconnected.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

