# Revoke ACS User Access to All Entrances

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/users/revoke_access_to_all_entrances ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_id`** *String*

ID of the access system for which you want to revoke access. You can only provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user for whom you want to revoke access. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity for whom you want to revoke access. You can only provide acs_user_id or user_identity_id.

---


## Response

void

