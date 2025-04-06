# Get an ACS User

Returns a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
POST /acs/users/get ⇒ { acs_user }
```
{% endhint %}

## Parameters

**`acs_user_id`** *String* (Required)

ID of the desired `acs_user`.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

[acs\_user](./)
