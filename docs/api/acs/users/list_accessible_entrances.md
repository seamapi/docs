# List ACS User-Accessible Entrances

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_id`** *String*

ID of the access system for which you want to list accessible entrances. You can only provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user for whom you want to list accessible entrances. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity for whom you want to list accessible entrances. You can only provide acs_user_id or user_identity_id.

---


## Response

Array of [acs\_entrances](./)

