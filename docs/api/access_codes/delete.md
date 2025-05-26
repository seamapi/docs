# Delete an Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/delete ⇒ void
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

**`access_code_id`** *String* (Required)

ID of the access code that you want to delete.

---

**`device_id`** *String*

ID of the device for which you want to delete the access code.

---


## Response

void
