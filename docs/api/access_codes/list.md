# List Access Codes

```
POST /access_codes/list ⇒ { access_codes: [access_code, …] }
```

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

Specify either `device_id` or `access_code_ids`.

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_code_ids`

Format: `List`
Item format: `UUID`
Required: No

IDs of the access codes that you want to retrieve. Specify either `device_id` or `access_code_ids`.

***

### `device_id`

Format: `UUID`
Required: No

ID of the device for which you want to list access codes. Specify either `device_id` or `access_code_ids`.

***

### `limit`

Format: `Number`
Required: No

Numerical limit on the number of access codes to return.

***

### `page_cursor`

Format: `String`
Required: No

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

***

### `user_identifier_key`

Format: `String`
Required: No

Your user ID for the user by which to filter access codes.

***

## Return Type

Array<[access\_code](./)>
