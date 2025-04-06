# Add an ACS User to a User Identity

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
PUT /user_identities/add_acs_user ⇒ void
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`acs_user_id`** *String* (Required)

ID of the desired ACS user.

---

**`user_identity_id`** *String* (Required)

ID of the desired user identity.

---


## Return Type

void
