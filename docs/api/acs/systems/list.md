# List ACS Systems

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).

To filter the list of returned access control systems by a specific connected account ID, include the `connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the response includes all access control systems connected to your workspace.

{% hint style="success" %}
```
POST /acs/systems/list ⇒ { acs_systems: [acs_system, …] }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`connected_account_id`** **

ID of the connected account by which to filter the list of returned access control systems.

---


## Return Type

Array<[acs\_system](./)>
