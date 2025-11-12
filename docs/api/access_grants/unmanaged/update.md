# Update an Unmanaged Access Grant

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates an unmanaged Access Grant to make it managed.

This endpoint can only be used to convert unmanaged access grants to managed ones by setting `is_managed` to `true`. It cannot be used to convert managed access grants back to unmanaged.

When converting an unmanaged access grant to managed, all associated access methods will also be converted to managed.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_grant_id`** *String* (Required)

ID of the unmanaged Access Grant to update.

---

**`is_managed`** *Boolean* (Required)

Must be set to true to convert the unmanaged access grant to managed.

---

**`access_grant_key`** *String*

Unique key for the access grant. If not provided, the existing key will be preserved.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

