# List Unmanaged Access Methods

- [Request Parameters](#request-parameters)
- [Response](#response)

Lists all unmanaged access methods (where is_managed = false), usually filtered by Access Grant.


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_grant_id`** *String* (Required)

ID of Access Grant to list unmanaged access methods for.

---

**`acs_entrance_id`** *String*

ID of the entrance for which you want to retrieve all unmanaged access methods.

---

**`device_id`** *String*

ID of the device for which you want to retrieve all unmanaged access methods.

---

**`space_id`** *String*

ID of the space for which you want to retrieve all unmanaged access methods.

---


## Response

{% hint style="success" %}
Returns:
**Array of [unknowns](./)**

{% endhint %}

