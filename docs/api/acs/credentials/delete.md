# Delete a Credential

Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).

{% hint style="success" %}
```
POST /acs/credentials/delete ⇒ void
```
{% endhint %}

## Parameters

**`acs_credential_id`** ** (Required)

ID of the desired credential.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

void
