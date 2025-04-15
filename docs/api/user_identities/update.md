# Update a User Identity



{% hint style="success" %}
```
PATCH /user_identities/update ⇒ void
```
{% endhint %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
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
