# List Unmanaged Access Codes

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [unmanaged access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/unmanaged/list ⇒ { access_codes: [unmanaged_access_code, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication]{https://docs.seam.co/latest/api/authentication}.
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the device for which you want to list unmanaged access codes.

---

**`user_identifier_key`** *String*

Your user ID for the user by which to filter unmanaged access codes.

---


## Response

Array of [unmanaged\_access\_codes](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of unmanaged_access_code
}
```
{% endtab %}
{% endtabs %}
