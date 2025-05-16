# Get an Unmanaged Access Code

```
POST /access_codes/unmanaged/get ⇒ { access_code }
```

Returns a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_code_id`

Format: `UUID`
Required: No

ID of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

***

### `code`

Format: `String`
Required: No

Code of the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

***

### `device_id`

Format: `UUID`
Required: No

ID of the device containing the unmanaged access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

***

## Return Type

[unmanaged\_access\_code](./)
