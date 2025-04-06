# Launch an Enrollment Automation

Sets up a new [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) with a specified [credential manager](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).

{% hint style="success" %}
```
POST /user_identities/enrollment_automations/launch ⇒ { enrollment_automation }
```
{% endhint %}

## Parameters

**`credential_manager_acs_system_id`** ** (Required)

ID of the desired ACS system that serves as the credential manager.

---

**`user_identity_id`** ** (Required)

ID of the desired user identity.

---

**`acs_credential_pool_id`** **

ID of the ACS credential pool from which to obtain credentials for the user identity.

---

**`create_credential_manager_user`** **

Indicates whether to create an associated credential manager user. If you set `create_credential_manager_user` to `true`, you cannot specify a `credential_manager_acs_user_id`.

---

**`credential_manager_acs_user_id`** **

ID of the associated ACS user within the credential manager. If you specify a `credential_manager_acs_user_id`, you cannot set `create_credential_manager_user` to `true`.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

[unknown](./)
