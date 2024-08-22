# Get an ACS System

```
POST /acs/systems/get ⇒ { acs_system }
```

Returns a specified [access control system](../../../capability-guides/access-systems.md).

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

*Return Type: [acs_system](../README.md)*

## Request Parameters

### `acs_system_id`

*Type:* `string`
*Required:* Yes

ID of the desired access control system.

---

