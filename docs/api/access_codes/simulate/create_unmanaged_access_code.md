# Simulate Creating an Unmanaged Access Code

```
POST /access_codes/simulate/create_unmanaged_access_code ⇒ { access_code }
```

Simulates the creation of an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `code`

Format: `String`
Required: Yes

Code of the simulated unmanaged access code.

***

### `device_id`

Format: `UUID`
Required: Yes

ID of the device for which you want to simulate the creation of an unmanaged access code.

***

### `name`

Format: `String`
Required: Yes

Name of the simulated unmanaged access code.

***

## Return Type

[unmanaged\_access\_code](./)
