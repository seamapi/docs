# List Compatible Credential Manager ACS Systems

```
POST /acs/systems/list_compatible_credential_manager_acs_systems ⇒ { acs_systems }
```

Returns a list of all credential manager ACS systems that are compatible with a specified 
[access control system](../../../capability-guides/access-systems.md).

Specify the ACS system for which you want to retrieve all compatible credential manager ACS 
systems by including the corresponding `acs_system_id` in the request body.

*Return Type: [acs_system](../README.md)*

## Request Parameters

### `acs_system_id`

*Type:* ``
*Required:* Yes

ID of the ACS system for which you want to retrieve all compatible credential manager ACS systems.

---

