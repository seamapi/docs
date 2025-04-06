# List Compatible Credential Manager ACS Systems

Returns a list of all credential manager ACS systems that are compatible with a specified
[access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the ACS system for which you want to retrieve all compatible credential manager ACS
systems by including the corresponding `acs_system_id` in the request body.

{% hint style="success" %}
```
POST /acs/systems/list_compatible_credential_manager_acs_systems ⇒ { acs_systems: [acs_system, …] }
```
{% endhint %}

## Parameters

**`acs_system_id`** *String* (Required)

ID of the ACS system for which you want to retrieve all compatible credential manager ACS systems.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

Array<[acs\_system](./)>
