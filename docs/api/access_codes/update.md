# Update an Access Code

```
PUT /access_codes/update ⇒ void
```

Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

See also [Modifying Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/modifying-access-codes).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `access_code_id`

Format: `UUID`
Required: Yes

ID of the access code that you want to update.

***

### `allow_external_modification`

Format: `Boolean`
Required: No

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

***

### `attempt_for_offline_device`

Format: `Boolean`
Required: No

***

### `code`

Format: `String`
Required: No

Code to be used for access.

***

### `device_id`

Format: `UUID`
Required: No

ID of the device containing the access code that you want to update.

***

### `ends_at`

Format: `String`
Required: No

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

***

### `is_external_modification_allowed`

Format: `Boolean`
Required: No

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

***

### `is_managed`

Format: `Boolean`
Required: No

Indicates whether the access code is managed through Seam. Note that to convert an unmanaged access code into a managed access code, use `/access_codes/unmanaged/convert_to_managed`.

***

### `is_offline_access_code`

Format: `Boolean`
Required: No

Indicates whether the access code is an [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes).

***

### `is_one_time_use`

Format: `Boolean`
Required: No

Indicates whether the [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) is a single-use access code.

***

### `max_time_rounding`

Format: `Enum`
Required: No

Maximum rounding adjustment. To create a daily-bound [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) for devices that support this feature, set this parameter to `1d`.

Possible enum values:
- `1hour`
- `1day`
- `1h`
- `1d`

***

### `name`

Format: `String`
Required: No

Name of the new access code.

***

### `prefer_native_scheduling`

Format: `Boolean`
Required: No

Indicates whether [native scheduling](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) should be used for time-bound codes when supported by the provider. Default: `true`.

***

### `preferred_code_length`

Format: `Number`
Required: No

Preferred code length. Only applicable if you do not specify a `code`. If the affected device does not support the preferred code length, Seam reverts to using the shortest supported code length.

***

### `starts_at`

Format: `String`
Required: No

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

### `type`

Format: `Enum`
Required: No

Type to which you want to convert the access code. To convert a time-bound access code to an ongoing access code, set `type` to `ongoing`. See also [Changing a time-bound access code to permanent access](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/modifying-access-codes#special-case-2-changing-a-time-bound-access-code-to-permanent-access).

Possible enum values:
- `ongoing`
- `time_bound`

***

### `use_backup_access_code_pool`

Format: `Boolean`
Required: No

Indicates whether to use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. If `true`, you can use [`/access_codes/pull_backup_access_code`](../../api-clients/access_codes/pull_backup_access_code.md).

***

### `use_offline_access_code`

Format: `Boolean`
Required: No

***

## Return Type

void
