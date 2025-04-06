# Get an Access Group

Returns a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% hint style="success" %}
```
POST /acs/access_groups/get ⇒ { acs_access_group }
```
{% endhint %}

## Parameters

**`acs_access_group_id`** *String* (Required)

ID of the desired access group.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

[acs\_access\_group](./)
