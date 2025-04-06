# Unsuspend an ACS User

[Unsuspends](https://docs.seam.co/latest/capability-guides/access-systems/user-management/suspending-and-unsuspending-users#unsuspend-an-acs-user) a specified suspended [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management). While [suspending an ACS user](https://docs.seam.co/latest/api/acs/users/suspend) revokes their access temporarily, unsuspending the ACS user restores their access.

{% hint style="success" %}
```
POST /acs/users/unsuspend ⇒ void
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
