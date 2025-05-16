# Create an Access Code

```
POST /access_codes/create ⇒ { access_code }
```

Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Format: `UUID`
Required: Yes

ID of the device for which to create the new access code.

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

### `common_code_key`

Format: `String`
Required: No

Key to identify access codes that should have the same code. Any two access codes with the same `common_code_key` are guaranteed to have the same `code`. See also [Creating and Updating Multiple Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md).

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

[access\_code](./)

### `CREATE_ACCESS_CODE`

#### `action_attempt_id`

Format: `UUID`

ID of the action attempt.

---

#### `action_type`

Format: `Enum`

Value: `CREATE_ACCESS_CODE`

---

#### `error`

Format: `Object`

<details>

<summary><code>message</code> Format: <code>String</code></summary>
</details>

<details>

<summary><code>type</code> Format: <code>String</code></summary>
</details>

---

#### `result`

Format: `Object`

This object has no properties.

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

