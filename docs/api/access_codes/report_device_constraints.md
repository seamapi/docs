# Report Device Access Code Constraints

- [Request Parameters](#request-parameters)
- [Response](#response)

Enables you to report access code-related constraints for a device. Currently, supports reporting supported code length constraints for SmartThings devices.

Specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the device for which you want to report constraints.

---

**`max_code_length`** *Number*

Maximum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

---

**`min_code_length`** *Number*

Minimum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

---

**`supported_code_lengths`** *Array* *of Numbers*

Array of supported code lengths as integers between 4 and 20, inclusive. You can specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.

---


## Response

void

