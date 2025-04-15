# Delete an Unmanaged Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/unmanaged/delete ⇒ void
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

ID of the unmanaged access code to delete.

---


## Response

void
