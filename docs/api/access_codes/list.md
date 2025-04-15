# List Access Codes

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

Specify either `device_id` or `access_code_ids`.

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/list ⇒ { access_codes: [access_code, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`access_code_ids`** *Array* *of UUIDs*

IDs of the access codes that you want to retrieve. Specify either `device_id` or `access_code_ids`.

---

**`device_id`** *String*

ID of the device for which you want to list access codes. Specify either `device_id` or `access_code_ids`.

---

**`user_identifier_key`** *String*

Your user ID for the user by which to filter access codes.

---


## Response

Array of [access\_codes](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of access_code
}
```
{% endtab %}
{% endtabs %}
