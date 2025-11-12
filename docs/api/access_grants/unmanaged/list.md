# List Unmanaged Access Grants

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets unmanaged Access Grants (where is_managed = false).


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_id`** *String*

ID of the entrance by which you want to filter the list of unmanaged Access Grants.

---

**`acs_system_id`** *String*

ID of the access system by which you want to filter the list of unmanaged Access Grants.

---

**`reservation_key`** *String*

Filter unmanaged Access Grants by reservation_key.

---

**`user_identity_id`** *String*

ID of user identity by which you want to filter the list of unmanaged Access Grants.

---


## Response

{% hint style="success" %}
Returns:
**Array of [unknowns](./)**

{% endhint %}

