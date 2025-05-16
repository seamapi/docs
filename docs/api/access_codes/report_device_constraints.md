# Report Device Access Code Constraints

```
POST /access_codes/report_device_constraints ⇒ void
```

Enables you to report access code-related constraints for a device. Currently, supports reporting supported code length constraints for SmartThings devices.

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Format: `UUID`
Required: Yes

ID of the device for which to report constraints.

***

### `max_code_length`

Format: `Number`
Required: No

Maximum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

***

### `min_code_length`

Format: `Number`
Required: No

Minimum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

***

### `supported_code_lengths`

Format: `List`
Item format: `Number`
Required: No

Array of supported code lengths as integers between 4 and 20, inclusive. You can specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.

***

## Return Type

void
