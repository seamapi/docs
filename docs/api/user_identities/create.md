# Create a User Identity

Creates a new [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/create ⇒ { user_identity }
```
{% endhint %}

## Parameters

**`email_address`** **

Unique email address for the user identity.

---

**`full_name`** **

Full name of the user associated with the user identity.

---

**`phone_number`** **

Unique phone number for the user identity in E.164 format (for example, +15555550100).

---

**`user_identity_key`** **

Unique key for the user identity.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

[user\_identity](./)
