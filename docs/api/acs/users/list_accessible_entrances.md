# List ACS User-Accessible Entrances

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.

{% hint style="success" %}
```
POST /acs/users/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```
{% endhint %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_user_id`** *String* (Required)

ID of the desired `acs_user`.

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
