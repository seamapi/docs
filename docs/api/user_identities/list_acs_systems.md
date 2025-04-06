# List ACS Systems Associated with a User Identity

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/list_acs_systems ⇒ { acs_systems: [acs_system, …] }
```
{% endhint %}

## Parameters

**`user_identity_id`** ** (Required)

ID of the user identity for which you want to retrieve all access control systems.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

Array<[acs\_system](./)>
