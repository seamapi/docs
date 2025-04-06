# Remove an ACS User from an Access Group

Removes a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) from a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% hint style="success" %}
```
POST /acs/access_groups/remove_user ⇒ void
```
{% endhint %}

## Parameters

**`acs_access_group_id`** *String* (Required)

ID of the desired access group.

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
