# Update an Unmanaged Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

{% tabs %}
{% tab title="Signature" %}
```
PATCH /access_codes/unmanaged/update ⇒ void
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

**`access_code_id`** ** (Required)

ID of the unmanaged access code that you want to update.

---

**`is_managed`** ** (Required)

---

**`allow_external_modification`** **

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

---

**`force`** **

Indicates whether to force the unmanaged access code update.

---

**`is_external_modification_allowed`** **

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed.

---


## Response

void
