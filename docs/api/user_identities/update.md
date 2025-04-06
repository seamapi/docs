# Update a User Identity



{% hint style="success" %}
```
PATCH /user_identities/update ⇒ void
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`user_identity_id`** ** (Required)

ID of the user identity.

---

**`email_address`** **

Unique email address for the user identity.

---

**`full_name`** **

---

**`phone_number`** **

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).

---

**`user_identity_key`** **

Unique key for the user identity.

---


## Return Type

void
