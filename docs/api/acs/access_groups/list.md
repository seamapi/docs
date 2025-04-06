# List Access Groups

Returns a list of all [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% hint style="success" %}
```
POST /acs/access_groups/list ⇒ { acs_access_groups: [acs_access_group, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_system_id`** *string*
Required: No

ID of the access control system for which you want to retrieve all access groups.

---

**`acs_user_id`** *string*
Required: No

ID of the user for which you want to retrieve all access groups.

---


## Return Type

Array<[acs\_access\_group](./)>
