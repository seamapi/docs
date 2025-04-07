# Get an Unmanaged Access Code

Returns a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.

{% hint style="success" %}
```
POST /access_codes/unmanaged/get ⇒ { access_code }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`access_code_id`** *String*

ID of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`code`** *String*

Code of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---

**`device_id`** *String*

ID of the device containing the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

---


## Return Type

[unmanaged\_access\_code](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of unmanaged_access_code
}
```
{% endtab %}
{% endtabs %}
