# Update an Unmanaged User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates an unmanaged [user identity](../../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) to make it managed.

This endpoint can only be used to convert unmanaged user identities to managed ones by setting `is_managed` to `true`. It cannot be used to convert managed user identities back to unmanaged.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`is_managed`** *Boolean* (Required)

Must be set to true to convert the unmanaged user identity to managed.

---

**`user_identity_id`** *String* (Required)

ID of the unmanaged user identity that you want to update.

---

**`user_identity_key`** *String*

Unique key for the user identity. If not provided, the existing key will be preserved.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

