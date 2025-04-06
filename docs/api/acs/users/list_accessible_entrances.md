# List ACS User-Accessible Entrances

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.

{% hint style="success" %}
```
POST /acs/users/list_accessible_entrances ⇒ { acs_entrances: [acs_entrance, …] }
```
{% endhint %}

## Parameters

**`acs_user_id`** ** (Required)

ID of the desired `acs_user`.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Return Type

Array<[acs\_entrance](./)>
