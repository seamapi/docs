# Grant an ACS User Access to an Entrance


- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Grants a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access to a specified [access system entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_entrance_id`** *String* (Required)

ID of the entrance to which you want to grant an access system user access.

---

**`acs_user_id`** *String*

ID of the access system user to whom you want to grant access to an entrance. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity to whom you want to grant access to an entrance. You can only provide one of acs_user_id or user_identity_id. If the ACS system contains an ACS user with the same `email_address` or `phone_number` as the user identity that you specify, they are linked, and the access group membership belongs to the ACS user. If the ACS system does not have a corresponding ACS user, one is created.

---


## Response

void

