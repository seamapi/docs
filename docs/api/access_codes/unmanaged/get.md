# Get an Unmanaged Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_code_id`** *String*

ID of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`code`** *String*

Code of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`device_id`** *String*

ID of the device containing the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---


## Response

[unmanaged\_access\_code](./)

