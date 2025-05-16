# Get an Access Code

```
POST /access_codes/get ⇒ { access_code }
```

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

You must specify either `access_code_id` or both `device_id` and `code`.

## Authentication Methods

- API key
- Client session token

## Request Parameters

### `access_code_id`

Format: `UUID`
Required: No

ID of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

***

### `code`

Format: `String`
Required: No

Code of the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

***

### `device_id`

Format: `UUID`
Required: No

ID of the device containing the access code that you want to get. You must specify either `access_code_id` or both `device_id` and `code`.

***

## Return Type

[access\_code](./)
