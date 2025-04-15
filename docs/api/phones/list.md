# List Phones

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all phones. To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.

{% tabs %}
{% tab title="Signature" %}
```
POST /phones/list ⇒ { phones: [phone, …] }
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

**`acs_credential_id`** *String*

ID of the [credential](../../capability-guides/access-systems/managing-credentials.md) by which to filter the list of returned phones.

---

**`owner_user_identity_id`** *String*

ID of the user identity that represents the owner by which to filter the list of returned phones.

---


## Response

Array of [phones](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of phone
}
```
{% endtab %}
{% endtabs %}
