# Delete an Unmanaged Access Code

Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

{% hint style="success" %}
```
POST /access_codes/unmanaged/delete ⇒ void
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

**`access_code_id`** *String* (Required)

ID of the unmanaged access code to delete.

---


## Return Type

void
