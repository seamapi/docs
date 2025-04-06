# Get a User Identity

Returns a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/get ⇒ { user_identity }
```
{% endhint %}

## Parameters

**`user_identity_id`** **


ID of the desired user identity.

---

**`user_identity_key`** **


---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

[user\_identity](./)
