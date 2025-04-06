# List ACS Users in an Access Group

Returns a list of all [ACS users](https://docs.seam.co/latest/capability-guides/access-systems/user-management) in an [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% hint style="success" %}
```
POST /acs/access_groups/list_users ⇒ { acs_users: [acs_user, …] }
```
{% endhint %}

## Parameters

**`acs_access_group_id`** *String* (Required)

ID of the access group for which you want to retrieve all users.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

Array<[acs\_user](./)>
