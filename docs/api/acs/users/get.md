# Get an ACS User

Returns a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
POST /acs/users/get ⇒ { acs_user }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`acs_user_id`** ** (Required)

ID of the desired `acs_user`.

---


## Return Type

[acs\_user](./)
