# Update an Unmanaged Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

{% hint style="success" %}
```
PATCH /access_codes/unmanaged/update ⇒ void
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

ID of the unmanaged access code that you want to update.

---

**`is_managed`** *Boolean* (Required)

---

**`allow_external_modification`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

---

**`force`** *Boolean*

Indicates whether to force the unmanaged access code update.

---

**`is_external_modification_allowed`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

---


## Response

void
