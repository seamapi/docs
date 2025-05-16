# List Unmanaged Access Codes

```
POST /access_codes/unmanaged/list ⇒ { access_codes: [unmanaged_access_code, …] }
```

Returns a list of all [unmanaged access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Format: `UUID`
Required: Yes

ID of the device for which you want to list unmanaged access codes.

***

### `user_identifier_key`

Format: `String`
Required: No

Your user ID for the user by which to filter unmanaged access codes.

***

## Return Type

Array<[unmanaged\_access\_code](./)>
