# List User Identities

Returns a list of all [user identities](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/list ⇒ { user_identities: [user_identity, …] }
```
{% endhint %}

## Parameters

**`credential_manager_acs_system_id`** **

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

Array<[user\_identity](./)>
