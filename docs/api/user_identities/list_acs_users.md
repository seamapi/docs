# List ACS Users Associated with a User Identity

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) assigned to a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/list_acs_users ⇒ { acs_users: [acs_user, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`user_identity_id`** *string*
Required: Yes

ID of the user identity for which you want to retrieve all ACS users.

---


## Return Type

Array<[acs\_user](./)>
