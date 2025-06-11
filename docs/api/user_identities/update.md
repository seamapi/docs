# Update a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)




<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity.

---

**`email_address`** *String*

Unique email address for the user identity.

---

**`full_name`** *String*

---

**`phone_number`** *String*

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).

---

**`user_identity_key`** *String*

Unique key for the user identity.

---


## Response

void

