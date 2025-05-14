# Access Codes

## `access_code`

Represents a smart lock [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

An access code is a code used for a keypad or pinpad device. Unlike physical keys, which can easily be lost or duplicated, PIN codes can be customized, tracked, and altered on the fly. Using the Seam Access Code API, you can easily generate access codes on the hundreds of door lock models with which we integrate.

Seam supports programming two types of access codes: [ongoing](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#ongoing-access-codes) and [time-bound](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#time-bound-access-codes). To differentiate between the two, refer to the `type` property of the access code. Ongoing codes display as `ongoing`, whereas time-bound codes are labeled `time_bound`.

In addition, for certain devices, Seam also supports [offline access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#offline-access-codes). Offline access (PIN) codes are designed for door locks that might not always maintain an internet connection. For this type of access code, the device manufacturer uses encryption keys (tokens) to create server-based registries of algorithmically-generated offline PIN codes. Because the tokens remain synchronized with the managed devices, the locks do not require an active internet connection—and you do not need to be near the locks—to create an offline access code. Then, owners or managers can share these offline codes with users through a variety of mechanisms, such as messaging applications. That is, lock users do not need to install a smartphone application to receive an offline access code.

### `access_code_id`

Format: `UUID`

Unique identifier for the access code.

---

### `code`

Format: `String`

Code used for access. Typically, a numeric or alphanumeric string.

---

### `common_code_key`

Format: `String`

Unique identifier for a group of access codes that share the same code.

---

### `created_at`

Format: `Datetime`

Date and time at which the access code was created.

---

### `device_id`

Format: `UUID`

Unique identifier for the device associated with the access code.

---

### `ends_at`

Format: `Datetime`

Date and time after which the time-bound access code becomes inactive.

---

### [`errors`](./#errors-1)

Format: `List`

Item format: `Object`

Errors associated with the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>smartthings_failed_to_set_access_code</code></summary>

Failed to set code on SmartThings device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `smartthings_failed_to_set_access_code`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>smartthings_failed_to_set_after_multiple_retries</code></summary>

Failed to set code after multiple retries.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `smartthings_failed_to_set_after_multiple_retries`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>smartthings_no_free_slots_available</code></summary>

No free slots available on the device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `smartthings_no_free_slots_available`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>failed_to_set_on_device</code></summary>

Failed to set code on device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `failed_to_set_on_device`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>failed_to_remove_from_device</code></summary>

Failed to remove code from device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `failed_to_remove_from_device`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>duplicate_code_on_device</code></summary>

Duplicate access code detected on device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `duplicate_code_on_device`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>duplicate_code_attempt_prevented</code></summary>

An attempt to modify this access code was prevented.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `duplicate_code_attempt_prevented`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>no_space_for_access_code_on_device</code></summary>

No space for access code on device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `no_space_for_access_code_on_device`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>igloohome_bridge_too_many_pending_jobs</code></summary>

Igloohome bridge has too many pending jobs in the queue.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `igloohome_bridge_too_many_pending_jobs`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>igloohome_bridge_offline</code></summary>

Igloohome bridge is offline.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `igloohome_bridge_offline`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>igloohome_offline_access_code_no_variance_available</code></summary>

Lock has reached maximum amount of codes.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `igloohome_offline_access_code_no_variance_available`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>kwikset_unable_to_confirm_code</code></summary>

Unable to confirm that the access code is set on Kwikset device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `kwikset_unable_to_confirm_code`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>kwikset_unable_to_confirm_deletion</code></summary>

Unable to confirm the deletion of the access code on Kwikset device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `kwikset_unable_to_confirm_deletion`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>code_modified_external_to_seam</code></summary>

Code was modified or removed externally after Seam successfully set it on the device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `code_modified_external_to_seam`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>august_lock_invalid_code_length</code></summary>

Invalid code length for August lock.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_invalid_code_length`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>august_device_programming_delay</code></summary>

Access code has not yet been fully moved to the device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_device_programming_delay`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>august_device_slots_full</code></summary>

All access code slots on the device are full.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_device_slots_full`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>august_lock_missing_keypad</code></summary>

August lock is missing a keypad.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_missing_keypad`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>august_lock_temporarily_offline</code></summary>

August lock is temporarily offline.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_temporarily_offline`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>salto_ks_user_not_subscribed</code></summary>

Salto site user is not subscribed.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_user_not_subscribed`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>hubitat_device_programming_delay</code></summary>

Access code has not yet been fully moved to the device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `hubitat_device_programming_delay`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>hubitat_no_free_positions_available</code></summary>

No free positions available on the device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `hubitat_no_free_positions_available`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>wyze_duplicate_code_name</code></summary>

Duplicate access code name detected.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `wyze_duplicate_code_name`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>wyze_potential_duplicate_code</code></summary>

Potential duplicate access code detected.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `wyze_potential_duplicate_code`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>dormakaba_oracode_no_valid_user_level</code></summary>

No valid user level for Oracode.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `dormakaba_oracode_no_valid_user_level`

---

**`is_access_code_error`**
Format: `Boolean`


Indicates that this is an access code error.

---

**`message`**
Format: `String`


Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>
<details>
<summary><code>account_disconnected</code></summary>

Account is disconnected

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `account_disconnected`

---

**`is_connected_account_error`**
Format: `Boolean`


---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Salto site user limit reached.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `salto_ks_subscription_limit_exceeded`

---

**`is_connected_account_error`**
Format: `Boolean`


---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>device_offline</code></summary>

Device is offline

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_offline`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>device_removed</code></summary>

Device has been removed

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_removed`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>hub_disconnected</code></summary>

Hub is disconnected

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `hub_disconnected`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>device_disconnected</code></summary>

Device is disconnected

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `device_disconnected`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>empty_backup_access_code_pool</code></summary>

The backup access code pool is empty.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `empty_backup_access_code_pool`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>august_lock_not_authorized</code></summary>

User is not authorized to use the August Lock.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_not_authorized`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>august_lock_missing_bridge</code></summary>

Lock is not connected to the Seam Bridge.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_missing_bridge`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>ttlock_lock_not_paired_to_gateway</code></summary>

Lock is not paired with a Gateway.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `ttlock_lock_not_paired_to_gateway`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>missing_device_credentials</code></summary>

Missing device credentials.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `missing_device_credentials`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>auxiliary_heat_running</code></summary>

The auxiliary heat is running.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `auxiliary_heat_running`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>subscription_required</code></summary>

Subscription required to connect.

**`created_at`**
Format: `Datetime`


---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `subscription_required`

---

**`is_device_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>invalid_credentials</code></summary>

Credentials provided were invalid.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `invalid_credentials`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the error.

---

**`error_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `bridge_disconnected`

---

**`is_bridge_error`**
Format: `Boolean`


---

**`is_connected_account_error`**
Format: `Boolean`


---

**`message`**
Format: `String`


</details>

---

### `is_backup`

Format: `Boolean`

Indicates whether the access code is a backup code.

---

### `is_backup_access_code_available`

Format: `Boolean`

Indicates whether a backup access code is available for use if the primary access code is lost or compromised.

---

### `is_external_modification_allowed`

Format: `Boolean`

Indicates whether changes to the access code from external sources are permitted.

---

### `is_managed`

Format: `Boolean`

Indicates whether Seam manages the access code.

---

### `is_offline_access_code`

Format: `Boolean`

Indicates whether the access code is intended for use in offline scenarios. If `true`, this code can be created on a device without a network connection.

---

### `is_one_time_use`

Format: `Boolean`

Indicates whether the access code can only be used once. If `true`, the code becomes invalid after the first use.

---

### `is_scheduled_on_device`

Format: `Boolean`

Indicates whether the code is set on the device according to a preconfigured schedule.

---

### `is_waiting_for_code_assignment`

Format: `Boolean`

Indicates whether the access code is waiting for a code assignment.

---

### `name`

Format: `String`

Name of the access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.

---

### `pulled_backup_access_code_id`

Format: `UUID`

Identifier of the pulled backup access code. Used to associate the pulled backup access code with the original access code.

---

### `starts_at`

Format: `Datetime`

Date and time at which the time-bound access code becomes active.

---

### `status`

Format: `Enum`

Current status of the access code within the operational lifecycle. Values are `setting`, a transitional phase that indicates that the code is being configured or activated; `set`, which indicates that the code is active and operational; `unset`, which indicates a deactivated or unused state, either before activation or after deliberate deactivation; `removing`, which indicates a transitional period in which the code is being deleted or made inactive; and `unknown`, which indicates an indeterminate state, due to reasons such as system errors or incomplete data, that highlights a potential need for system review or troubleshooting.

Possible enum values:
- `setting`
- `set`
- `unset`
- `removing`
- `unknown`

---

### `type`

Format: `Enum`

Nature of the access code. Values are `ongoing` for access codes that are active continuously until deactivated manually or `time_bound` for access codes that have a specific duration.

Possible enum values:
- `time_bound`
- `ongoing`

---

### [`warnings`](./#warnings-1)

Format: `List`

Item format: `Object`

Warnings associated with the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>smartthings_failed_to_set_access_code</code></summary>

Failed to set code on SmartThings device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `smartthings_failed_to_set_access_code`

</details>
<details>
<summary><code>schlage_detected_duplicate</code></summary>

Duplicate access code detected.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `schlage_detected_duplicate`

</details>
<details>
<summary><code>schlage_creation_outage</code></summary>

Received an error when attempting to create this code.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `schlage_creation_outage`

</details>
<details>
<summary><code>code_modified_external_to_seam</code></summary>

Code was modified or removed externally after Seam successfully set it on the device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `code_modified_external_to_seam`

</details>
<details>
<summary><code>delay_in_setting_on_device</code></summary>

Delay in setting code on device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `delay_in_setting_on_device`

</details>
<details>
<summary><code>delay_in_removing_from_device</code></summary>

Delay in removing code from device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `delay_in_removing_from_device`

</details>
<details>
<summary><code>third_party_integration_detected</code></summary>

Third-party integration detected that may cause access codes to fail.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `third_party_integration_detected`

</details>
<details>
<summary><code>august_device_programming_delay</code></summary>

Access code has not yet been fully moved to the device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_device_programming_delay`

</details>
<details>
<summary><code>august_lock_temporarily_offline</code></summary>

August lock is temporarily offline.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Possible enum values:
- `august_lock_temporarily_offline`

</details>
<details>
<summary><code>igloo_algopin_must_be_used_within_24_hours</code></summary>

Algopins must be used within 24 hours.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `igloo_algopin_must_be_used_within_24_hours`

</details>
<details>
<summary><code>management_transferred</code></summary>

Management was transferred to another workspace.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `management_transferred`

</details>
<details>
<summary><code>kwikset_unable_to_confirm_code</code></summary>

Unable to confirm that the access code is set on Kwikset device.

**`created_at`**
Format: `Datetime`


Date and time at which Seam created the warning.

---

**`message`**
Format: `String`


Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

---

**`warning_code`**
Format: `Enum`


Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Possible enum values:
- `kwikset_unable_to_confirm_code`

</details>

---

## Errors

### `smartthings_failed_to_set_access_code`

Failed to set code on SmartThings device.

---

### `smartthings_failed_to_set_after_multiple_retries`

Failed to set code after multiple retries.

---

### `smartthings_no_free_slots_available`

No free slots available on the device.

---

### `failed_to_set_on_device`

Failed to set code on device.

---

### `failed_to_remove_from_device`

Failed to remove code from device.

---

### `duplicate_code_on_device`

Duplicate access code detected on device.

---

### `duplicate_code_attempt_prevented`

An attempt to modify this access code was prevented.

---

### `no_space_for_access_code_on_device`

No space for access code on device.

---

### `igloohome_bridge_too_many_pending_jobs`

Igloohome bridge has too many pending jobs in the queue.

---

### `igloohome_bridge_offline`

Igloohome bridge is offline.

---

### `igloohome_offline_access_code_no_variance_available`

Lock has reached maximum amount of codes.

---

### `kwikset_unable_to_confirm_code`

Unable to confirm that the access code is set on Kwikset device.

---

### `kwikset_unable_to_confirm_deletion`

Unable to confirm the deletion of the access code on Kwikset device.

---

### `code_modified_external_to_seam`

Code was modified or removed externally after Seam successfully set it on the device.

---

### `august_lock_invalid_code_length`

Invalid code length for August lock.

---

### `august_device_programming_delay`

Access code has not yet been fully moved to the device.

---

### `august_device_slots_full`

All access code slots on the device are full.

---

### `august_lock_missing_keypad`

August lock is missing a keypad.

---

### `august_lock_temporarily_offline`

August lock is temporarily offline.

---

### `salto_ks_user_not_subscribed`

Salto site user is not subscribed.

---

### `hubitat_device_programming_delay`

Access code has not yet been fully moved to the device.

---

### `hubitat_no_free_positions_available`

No free positions available on the device.

---

### `wyze_duplicate_code_name`

Duplicate access code name detected.

---

### `wyze_potential_duplicate_code`

Potential duplicate access code detected.

---

### `dormakaba_oracode_no_valid_user_level`

No valid user level for Oracode.

---

### `account_disconnected`

Account is disconnected

---

### `salto_ks_subscription_limit_exceeded`

Salto site user limit reached.

---

### `device_offline`

Device is offline

---

### `device_removed`

Device has been removed

---

### `hub_disconnected`

Hub is disconnected

---

### `device_disconnected`

Device is disconnected

---

### `empty_backup_access_code_pool`

The backup access code pool is empty.

---

### `august_lock_not_authorized`

User is not authorized to use the August Lock.

---

### `august_lock_missing_bridge`

Lock is not connected to the Seam Bridge.

---

### `ttlock_lock_not_paired_to_gateway`

Lock is not paired with a Gateway.

---

### `missing_device_credentials`

Missing device credentials.

---

### `auxiliary_heat_running`

The auxiliary heat is running.

---

### `subscription_required`

Subscription required to connect.

---

### `invalid_credentials`

Credentials provided were invalid.

---

### `bridge_disconnected`

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

## Warnings

### `smartthings_failed_to_set_access_code`

Failed to set code on SmartThings device.

---

### `schlage_detected_duplicate`

Duplicate access code detected.

---

### `schlage_creation_outage`

Received an error when attempting to create this code.

---

### `code_modified_external_to_seam`

Code was modified or removed externally after Seam successfully set it on the device.

---

### `delay_in_setting_on_device`

Delay in setting code on device.

---

### `delay_in_removing_from_device`

Delay in removing code from device.

---

### `third_party_integration_detected`

Third-party integration detected that may cause access codes to fail.

---

### `august_device_programming_delay`

Access code has not yet been fully moved to the device.

---

### `august_lock_temporarily_offline`

August lock is temporarily offline.

---

### `igloo_algopin_must_be_used_within_24_hours`

Algopins must be used within 24 hours.

---

### `management_transferred`

Management was transferred to another workspace.

---

### `kwikset_unable_to_confirm_code`

Unable to confirm that the access code is set on Kwikset device.

---

## Endpoints

### [`/access_codes/create`](./create.md)

Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
### [`/access_codes/create_multiple`](./create_multiple.md)

Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.
### [`/access_codes/delete`](./delete.md)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
### [`/access_codes/get`](./get.md)

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
### [`/access_codes/list`](./list.md)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
### [`/access_codes/pull_backup_access_code`](./pull_backup_access_code.md)

Retrieves a backup access code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes). See also [Managing Backup Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).
### [`/access_codes/report_device_constraints`](./report_device_constraints.md)

Enables you to report access code-related constraints for a device. Currently, supports reporting supported code length constraints for SmartThings devices.
### [`/access_codes/update`](./update.md)

Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
### [`/access_codes/update_multiple`](./update_multiple.md)

Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.

---

## Events

### `access_code.created`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was created.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.created`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.changed`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was changed.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.changed`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.scheduled_on_device`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was [scheduled natively](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) on a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>code</code> Format: <code>String</code></summary>

Code for the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.scheduled_on_device`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.set_on_device`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was set on a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>code</code> Format: <code>String</code></summary>

Code for the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.set_on_device`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.removed_from_device`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was removed from a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.removed_from_device`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.delay_in_setting_on_device`

There was an unusually long delay in setting an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) on a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.delay_in_setting_on_device`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.failed_to_set_on_device`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be set on a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.failed_to_set_on_device`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.deleted`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>code</code> Format: <code>String</code></summary>

Code for the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.deleted`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.delay_in_removing_from_device`

There was an unusually long delay in removing an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) from a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.delay_in_removing_from_device`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.failed_to_remove_from_device`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be removed from a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.failed_to_remove_from_device`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.modified_external_to_seam`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was modified outside of Seam.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.modified_external_to_seam`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.deleted_external_to_seam`

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted outside of Seam.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.deleted_external_to_seam`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.backup_access_code_pulled`

A [backup access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) was pulled from the backup access code pool and set on a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>backup_access_code_id</code> Format: <code>String</code></summary>
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.backup_access_code_pulled`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.unmanaged.converted_to_managed`

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was converted successfully to a managed access code.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.unmanaged.converted_to_managed`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.unmanaged.failed_to_convert_to_managed`

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) failed to be converted to a managed access code.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.unmanaged.failed_to_convert_to_managed`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.unmanaged.created`

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was created on a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.unmanaged.created`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

### `access_code.unmanaged.removed`

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was removed from a device.

<details>

<summary><code>access_code_id</code> Format: <code>UUID</code></summary>

ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).
</details>
<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../core-concepts/connected-accounts/README.md).
</details>
<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.
</details>
<details>

<summary><code>device_id</code> Format: <code>UUID</code></summary>

ID of the [device](../../core-concepts/devices/README.md).
</details>
<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.
</details>
<details>

<summary><code>event_type</code> Format: <code>Enum</code></summary>

Value: `access_code.unmanaged.removed`
</details>
<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.
</details>
<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../core-concepts/workspaces/README.md).
</details>
---

