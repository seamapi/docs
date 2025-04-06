# Add an ACS User to an Access Group

Adds a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% hint style="success" %}
```
PUT /acs/access_groups/add_user ⇒ void
```
{% endhint %}

## Parameters

**`acs_access_group_id`** ** (Required)

ID of the desired access group.

---

**`acs_user_id`** ** (Required)

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
