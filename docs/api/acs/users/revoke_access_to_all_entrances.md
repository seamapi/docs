# Revoke ACS User Access to All Entrances

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Revokes access to all [entrances](https://docs.seam.co/latest/api/acs/entrances) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

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

**`acs_user_id`** *String* (Required)

ID of the desired `acs_user`.

---


## Response

void
