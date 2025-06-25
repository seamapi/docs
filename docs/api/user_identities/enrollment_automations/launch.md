# Launch an Enrollment Automation

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets up a new [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) with a specified [credential manager](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`credential_manager_acs_system_id`** *String* (Required)

ID of the desired access system that serves as the credential manager for the enrollment automation.

---

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to launch an enrollment automation.

---

**`acs_credential_pool_id`** *String*

ID of the credential pool from which to obtain credentials for the user identity.

---

**`create_credential_manager_user`** *Boolean*

Indicates whether to create an associated credential manager user. If you set `create_credential_manager_user` to `true`, you cannot specify a `credential_manager_acs_user_id`.

---

**`credential_manager_acs_user_id`** *String*

ID of the associated access system user within the credential manager. If you specify a `credential_manager_acs_user_id`, you cannot set `create_credential_manager_user` to `true`.

---


## Response

[enrollment\_automation](./)

