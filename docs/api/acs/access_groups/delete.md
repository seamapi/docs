# Delete an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_access_group_id`** *String* (Required)

ID of the access group that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

