# Assign a Credential to an ACS User

Assigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) to a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
PATCH /acs/credentials/assign ⇒ void
```
{% endhint %}

## Parameters

**`acs_credential_id`** *String* (Required)

ID of the desired credential.

---

**`acs_user_id`** *String* (Required)

ID of the desired user.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

void
