# Update a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Updates a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity that you want to update.

---

**`email_address`** *String*

Unique email address for the user identity.

---

**`full_name`** *String*

Full name of the user associated with the user identity.

---

**`phone_number`** *String*

Unique phone number for the user identity.

---

**`user_identity_key`** *String*

Unique key for the user identity.

---


## Response

void

