# Delete an ACS User

Deletes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) and invalidates the ACS user's [credentials](../../../capability-guides/access-systems/managing-credentials.md).

{% hint style="success" %}
```
POST /acs/users/delete ⇒ void
```
{% endhint %}

## Parameters

**`acs_user_id`** ** (Required)

ID of the desired `acs_user`.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

void
