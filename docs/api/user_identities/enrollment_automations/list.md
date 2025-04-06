# List Enrollment Automations

Returns a list of all [enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% hint style="success" %}
```
POST /user_identities/enrollment_automations/list ⇒ { enrollment_automations: [enrollment_automation, …] }
```
{% endhint %}

## Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to retrieve all enrollment automations.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

Array<[enrollment\_automation](./)>
