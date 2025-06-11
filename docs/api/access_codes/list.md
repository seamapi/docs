# List Access Codes

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

Specify either `device_id` or `access_code_ids`.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_code_ids`** *Array* *of UUIDs*

IDs of the access codes that you want to retrieve. Specify either `device_id` or `access_code_ids`.

---

**`customer_ids`** *Array* *of UUIDs*

---

**`device_id`** *String*

ID of the device for which you want to list access codes. Specify either `device_id` or `access_code_ids`.

---

**`limit`** *Number*

Numerical limit on the number of access codes to return.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`user_identifier_key`** *String*

Your user ID for the user by which to filter access codes.

---


## Response

Array of [access\_codes](./)

