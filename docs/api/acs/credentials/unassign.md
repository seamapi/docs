# Unassign a Credential from an ACS User

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
PATCH /acs/credentials/unassign ⇒ void
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_credential_id`** *string*
Required: Yes

ID of the desired credential.

---

**`acs_user_id`** *string*
Required: Yes

ID of the desired user.

---


## Return Type

void
