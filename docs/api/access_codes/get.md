# Get an Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_code_id`** *String*

ID of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`code`** *String*

Code of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`device_id`** *String*

ID of the device containing the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---


## Response

[access\_code](./)

