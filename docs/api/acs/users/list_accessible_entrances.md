# List ACS User-Accessible Entrances

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/users/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_user_id`**  (Required)

ID of the access system user for whom you want to list accessible entrances.

---


## Response

Array of [acs\_entrances](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_entrance
}
```
{% endtab %}
{% endtabs %}
