# Create Multiple Linked Access Codes

```
PUT /access_codes/create_multiple ⇒ { access_codes: [access_code, …] }
```

Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.

Users with more than one door lock in a property may want to create groups of linked access codes, all of which have the same code (PIN). For example, a short-term rental host may want to provide guests the same PIN for both a front door lock and a back door lock.

If you specify a custom code, Seam assigns this custom code to each of the resulting access codes. However, in this case, Seam does not link these access codes together with a `common_code_key`. That is, `common_code_key` remains null for these access codes.

If you want to change these access codes that are not linked by a `common_code_key`, you cannot use `/access_codes/update_multiple`. However, you can update each of these access codes individually, using `/access_codes/update`.

See also [Creating and Updating Multiple Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_ids`

Format: `List`
Item format: `UUID`
Required: Yes

IDs of the devices for which to create the new access codes.

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

### `behavior_when_code_cannot_be_shared`

Format: `Enum`
Required: No

Desired behavior if any device cannot share a code. If `throw` (default), no access codes will be created if any device cannot share a code. If `create_random_code`, a random code will be created on devices that cannot share a code.

Possible enum values:
- `throw`
- `create_random_code`

***

### `code`

Format: `String`
Required: No

Code to be used for access.

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

Array<[access\_code](./)>
