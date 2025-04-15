# Delete an Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

{% hint style="success" %}
```
POST /access_codes/delete ⇒ void
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

**`access_code_id`** *String* (Required)

ID of the access code to delete.

---

**`device_id`** *String*

ID of the device for which to delete the access code.

---


## Response

void
