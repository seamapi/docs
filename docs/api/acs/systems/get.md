# Get an ACS System

```
POST /acs/systems/get ⇒ { acs_system }
```

Returns a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

## Request Parameters

### `acs_system_id`

Type: `string`\
Required: Yes

ID of the desired access control system.

---

## Return Type

[acs_system](./README.md)
