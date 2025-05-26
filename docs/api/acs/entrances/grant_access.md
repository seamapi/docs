# Grant an ACS User Access to an Entrance

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Grants a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) access to a specified [access system entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/entrances/grant_access ⇒ void
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

**`acs_entrance_id`** *String* (Required)

ID of the entrance to which you want to grant an access system user access.

---

**`acs_user_id`** *String* (Required)

ID of the access system user to whom you want to grant access to an entrance.

---


## Response

void
