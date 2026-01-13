# Access Codes

## The access_code Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a smart lock [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

An access code is a code used for a keypad or pinpad device. Unlike physical keys, which can easily be lost or duplicated, PIN codes can be customized, tracked, and altered on the fly. Using the Seam Access Code API, you can easily generate access codes on the hundreds of door lock models with which we integrate.

Seam supports programming two types of access codes: [ongoing](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#ongoing-access-codes) and [time-bound](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#time-bound-access-codes). To differentiate between the two, refer to the `type` property of the access code. Ongoing codes display as `ongoing`, whereas time-bound codes are labeled `time_bound`. An ongoing access code is active, until it has been removed from the device. To specify an ongoing access code, leave both `starts_at` and `ends_at` empty. A time-bound access code will be programmed at the `starts_at` time and removed at the `ends_at` time.

In addition, for certain devices, Seam also supports [offline access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#offline-access-codes). Offline access (PIN) codes are designed for door locks that might not always maintain an internet connection. For this type of access code, the device manufacturer uses encryption keys (tokens) to create server-based registries of algorithmically-generated offline PIN codes. Because the tokens remain synchronized with the managed devices, the locks do not require an active internet connection—and you do not need to be near the locks—to create an offline access code. Then, owners or managers can share these offline codes with users through a variety of mechanisms, such as messaging applications. That is, lock users do not need to install a smartphone application to receive an offline access code.

{% tabs %}
{% tab title="One-Time-Use Offline Access Code" %}

A one-time-use offline access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": true,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% tab title="Ongoing Online Access Code" %}

An ongoing online access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": null,
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": true,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": null,
  "status": "set",
  "type": "ongoing",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% tab title="Time-bound Online Access Code" %}

A time-bound online access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": true,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% tab title="Time-bound Offline Access Code" %}

A time-bound offline access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`access_code_id`** *UUID*

Unique identifier for the access code.




---

**`code`** *String*

Code used for access. Typically, a numeric or alphanumeric string.




---

**`common_code_key`** *String*

Unique identifier for a group of access codes that share the same code.




---

**`created_at`** *Datetime*

Date and time at which the access code was created.




---

**`device_id`** *UUID*

Unique identifier for the device associated with the access code.




---

**`ends_at`** *Datetime*

Date and time after which the time-bound access code becomes inactive.




---

[**`errors`**](./#errors) *List* *of Objects*

Errors associated with the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>smartthings_failed_to_set_access_code</code></summary>

Failed to set code on SmartThings device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>smartthings_failed_to_set_access_code</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>smartthings_failed_to_set_after_multiple_retries</code></summary>

Failed to set code after multiple retries.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>smartthings_failed_to_set_after_multiple_retries</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>smartthings_no_free_slots_available</code></summary>

No free slots available on the device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>smartthings_no_free_slots_available</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>failed_to_set_on_device</code></summary>

Failed to set code on device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>failed_to_set_on_device</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>failed_to_remove_from_device</code></summary>

Failed to remove code from device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>failed_to_remove_from_device</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>duplicate_code_on_device</code></summary>

Duplicate access code detected on device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>duplicate_code_on_device</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>duplicate_code_attempt_prevented</code></summary>

An attempt to modify this access code was prevented.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>duplicate_code_attempt_prevented</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>no_space_for_access_code_on_device</code></summary>

No space for access code on device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>no_space_for_access_code_on_device</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>igloohome_bridge_too_many_pending_jobs</code></summary>

Igloohome bridge has too many pending jobs in the queue.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>igloohome_bridge_too_many_pending_jobs</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>igloohome_bridge_offline</code></summary>

Igloohome bridge is offline.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>igloohome_bridge_offline</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>kwikset_unable_to_confirm_code</code></summary>

Unable to confirm that the access code is set on Kwikset device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>kwikset_unable_to_confirm_code</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>kwikset_unable_to_confirm_deletion</code></summary>

Unable to confirm the deletion of the access code on Kwikset device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>kwikset_unable_to_confirm_deletion</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>code_modified_external_to_seam</code></summary>

Code was modified or removed externally after Seam successfully set it on the device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>code_modified_external_to_seam</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_invalid_code_length</code></summary>

Invalid code length for August lock.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_invalid_code_length</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_device_programming_delay</code></summary>

Access code has not yet been fully moved to the device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_device_programming_delay</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_missing_keypad</code></summary>

August lock is missing a keypad.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_missing_keypad</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_temporarily_offline</code></summary>

August lock is temporarily offline.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_temporarily_offline</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_user_not_subscribed</code></summary>

Salto site user is not subscribed.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_user_not_subscribed</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>hubitat_device_programming_delay</code></summary>

Access code has not yet been fully moved to the device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>hubitat_device_programming_delay</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>hubitat_no_free_positions_available</code></summary>

No free positions available on the device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>hubitat_no_free_positions_available</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>wyze_duplicate_code_name</code></summary>

Duplicate access code name detected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>wyze_duplicate_code_name</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>wyze_potential_duplicate_code</code></summary>

Potential duplicate access code detected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>wyze_potential_duplicate_code</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>dormakaba_oracode_invalid_time_range</code></summary>

No Dormakaba Oracode user levels configured for the requested time range.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>dormakaba_oracode_invalid_time_range</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>kwikset_insufficient_permissions</code></summary>

Admin role required—insufficient permissions to manage PINs on this Kwikset device. Please have a Home Admin update your role in the Kwikset app, or ask them to set the PIN.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>kwikset_insufficient_permissions</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>keynest_unsupported_third_party_locker</code></summary>

KeyNest locker is not supported.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>keynest_unsupported_third_party_locker</code>
  
  
  ---

  **`is_access_code_error`** *Boolean*
  
  
  Indicates that this is an access code error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>account_disconnected</code></summary>

Indicates that the account is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>account_disconnected</code>
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is not a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the Salto site user limit has been reached.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_exceeded</code>
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is not a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_offline</code></summary>

Indicates that the device is offline.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_offline</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_removed</code></summary>

Indicates that the device has been removed.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_removed</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>hub_disconnected</code></summary>

Indicates that the hub is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>hub_disconnected</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_disconnected</code></summary>

Indicates that the device is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_disconnected</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>empty_backup_access_code_pool</code></summary>

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>empty_backup_access_code_pool</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_not_authorized</code></summary>

Indicates that the user is not authorized to use the August lock.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_not_authorized</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_missing_bridge</code></summary>

Indicates that the lock is not connected to a bridge.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_missing_bridge</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>ttlock_lock_not_paired_to_gateway</code></summary>

Indicates that the lock is not paired with a gateway.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ttlock_lock_not_paired_to_gateway</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>missing_device_credentials</code></summary>

Indicates that device credentials are missing.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>missing_device_credentials</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>auxiliary_heat_running</code></summary>

Indicates that the auxiliary heat is running.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>auxiliary_heat_running</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>subscription_required</code></summary>

Indicates that a subscription is required to connect.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>subscription_required</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>lockly_missing_wifi_bridge</code></summary>

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>lockly_missing_wifi_bridge</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>bridge_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`is_backup`** *Boolean*

Indicates whether the access code is a backup code.




---

**`is_backup_access_code_available`** *Boolean*

Indicates whether a backup access code is available for use if the primary access code is lost or compromised.




---

**`is_external_modification_allowed`** *Boolean*

Indicates whether changes to the access code from external sources are permitted.




---

**`is_managed`** *Boolean*

Indicates whether Seam manages the access code.




---

**`is_offline_access_code`** *Boolean*

Indicates whether the access code is intended for use in offline scenarios. If `true`, this code can be created on a device without a network connection.




---

**`is_one_time_use`** *Boolean*

Indicates whether the access code can only be used once. If `true`, the code becomes invalid after the first use.




---

**`is_scheduled_on_device`** *Boolean*

Indicates whether the code is set on the device according to a preconfigured schedule.




---

**`is_waiting_for_code_assignment`** *Boolean*

Indicates whether the access code is waiting for a code assignment.




---

**`name`** *String*

Name of the access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes. Note that the name provided on Seam is used to identify the code on Seam and is not necessarily the name that will appear in the lock provider's app or on the device. This is because lock providers may have constraints on names, such as length, uniqueness, or characters that can be used. In addition, some lock providers may break down names into components such as `first_name` and `last_name`. To provide a consistent experience, Seam identifies the code on Seam by its name but may modify the name that appears on the lock provider's app or on the device. For example, Seam may add additional characters or truncate the name to meet provider constraints. To help your users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app or on the device as a separate property called `appearance`. This is an object with a `name` property and, optionally, `first_name` and `last_name` properties (for providers that break down a name into components).




---

**`pulled_backup_access_code_id`** *UUID*

Identifier of the pulled backup access code. Used to associate the pulled backup access code with the original access code.




---

**`starts_at`** *Datetime*

Date and time at which the time-bound access code becomes active.




---

**`status`** *Enum*

Current status of the access code within the operational lifecycle. Values are `setting`, a transitional phase that indicates that the code is being configured or activated; `set`, which indicates that the code is active and operational; `unset`, which indicates a deactivated or unused state, either before activation or after deliberate deactivation; `removing`, which indicates a transitional period in which the code is being deleted or made inactive; and `unknown`, which indicates an indeterminate state, due to reasons such as system errors or incomplete data, that highlights a potential need for system review or troubleshooting. See also [Lifecycle of Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/lifecycle-of-access-codes).


<details>
<summary>Enum values</summary>

- <code>setting</code>
- <code>set</code>
- <code>unset</code>
- <code>removing</code>
- <code>unknown</code>
</details>


---

**`type`** *Enum*

Type of the access code. `ongoing` access codes are active continuously until deactivated manually. `time_bound` access codes have a specific duration.


<details>
<summary>Enum values</summary>

- <code>time_bound</code>
- <code>ongoing</code>
</details>


---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>smartthings_failed_to_set_access_code</code></summary>

Failed to set code on SmartThings device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>smartthings_failed_to_set_access_code</code>
  
  
</details>
<details>
<summary><code>schlage_detected_duplicate</code></summary>

Duplicate access code detected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>schlage_detected_duplicate</code>
  
  
</details>
<details>
<summary><code>schlage_creation_outage</code></summary>

Received an error when attempting to create this code.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>schlage_creation_outage</code>
  
  
</details>
<details>
<summary><code>code_modified_external_to_seam</code></summary>

Code was modified or removed externally after Seam successfully set it on the device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>code_modified_external_to_seam</code>
  
  
</details>
<details>
<summary><code>delay_in_setting_on_device</code></summary>

Delay in setting code on device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>delay_in_setting_on_device</code>
  
  
</details>
<details>
<summary><code>delay_in_removing_from_device</code></summary>

Delay in removing code from device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>delay_in_removing_from_device</code>
  
  
</details>
<details>
<summary><code>third_party_integration_detected</code></summary>

Third-party integration detected that may cause access codes to fail.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>third_party_integration_detected</code>
  
  
</details>
<details>
<summary><code>august_device_programming_delay</code></summary>

Access code has not yet been fully moved to the device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_device_programming_delay</code>
  
  
</details>
<details>
<summary><code>august_lock_temporarily_offline</code></summary>

August lock is temporarily offline.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_temporarily_offline</code>
  
  
</details>
<details>
<summary><code>igloo_algopin_must_be_used_within_24_hours</code></summary>

Algopins must be used within 24 hours.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>igloo_algopin_must_be_used_within_24_hours</code>
  
  
</details>
<details>
<summary><code>management_transferred</code></summary>

Management was transferred to another workspace.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>management_transferred</code>
  
  
</details>
<details>
<summary><code>kwikset_unable_to_confirm_code</code></summary>

Unable to confirm that the access code is set on Kwikset device.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>kwikset_unable_to_confirm_code</code>
  
  
</details>
<details>
<summary><code>ultraloq_access_code_disabled</code></summary>

Access code is disabled on Ultraloq device. Re-enable through the Ultraloq mobile app.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ultraloq_access_code_disabled</code>
  
  
</details>

---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the access code.




---


## Errors

**`wyze_potential_duplicate_code`**

Potential duplicate access code detected.

---

**`wyze_duplicate_code_name`**

Duplicate access code name detected.

---

**`smartthings_no_free_slots_available`**

No free slots available on the device.

---

**`smartthings_failed_to_set_after_multiple_retries`**

Failed to set code after multiple retries.

---

**`smartthings_failed_to_set_access_code`**

Failed to set code on SmartThings device.

---

**`salto_ks_user_not_subscribed`**

Salto site user is not subscribed.

---

**`no_space_for_access_code_on_device`**

No space for access code on device.

---

**`kwikset_unable_to_confirm_deletion`**

Unable to confirm the deletion of the access code on Kwikset device.

---

**`kwikset_unable_to_confirm_code`**

Unable to confirm that the access code is set on Kwikset device.

---

**`kwikset_insufficient_permissions`**

Admin role required—insufficient permissions to manage PINs on this Kwikset device. Please have a Home Admin update your role in the Kwikset app, or ask them to set the PIN.

---

**`keynest_unsupported_third_party_locker`**

KeyNest locker is not supported.

---

**`igloohome_bridge_too_many_pending_jobs`**

Igloohome bridge has too many pending jobs in the queue.

---

**`igloohome_bridge_offline`**

Igloohome bridge is offline.

---

**`hubitat_no_free_positions_available`**

No free positions available on the device.

---

**`hubitat_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`failed_to_set_on_device`**

Failed to set code on device.

---

**`failed_to_remove_from_device`**

Failed to remove code from device.

---

**`duplicate_code_on_device`**

Duplicate access code detected on device.

---

**`duplicate_code_attempt_prevented`**

An attempt to modify this access code was prevented.

---

**`dormakaba_oracode_invalid_time_range`**

No Dormakaba Oracode user levels configured for the requested time range.

---

**`code_modified_external_to_seam`**

Code was modified or removed externally after Seam successfully set it on the device.

---

**`august_lock_temporarily_offline`**

August lock is temporarily offline.

---

**`august_lock_missing_keypad`**

August lock is missing a keypad.

---

**`august_lock_invalid_code_length`**

Invalid code length for August lock.

---

**`august_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`account_disconnected`**

Indicates that the account is disconnected.

---

**`august_lock_missing_bridge`**

Indicates that the lock is not connected to a bridge.

---

**`august_lock_not_authorized`**

Indicates that the user is not authorized to use the August lock.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`device_disconnected`**

Indicates that the device is disconnected.

---

**`device_offline`**

Indicates that the device is offline.

---

**`device_removed`**

Indicates that the device has been removed.

---

**`empty_backup_access_code_pool`**

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

---

**`hub_disconnected`**

Indicates that the hub is disconnected.

---

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

---

**`missing_device_credentials`**

Indicates that device credentials are missing.

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the Salto site user limit has been reached.

---

**`subscription_required`**

Indicates that a subscription is required to connect.

---

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

---


## Warnings

**`august_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`august_lock_temporarily_offline`**

August lock is temporarily offline.

---

**`code_modified_external_to_seam`**

Code was modified or removed externally after Seam successfully set it on the device.

---

**`delay_in_removing_from_device`**

Delay in removing code from device.

---

**`delay_in_setting_on_device`**

Delay in setting code on device.

---

**`igloo_algopin_must_be_used_within_24_hours`**

Algopins must be used within 24 hours.

---

**`kwikset_unable_to_confirm_code`**

Unable to confirm that the access code is set on Kwikset device.

---

**`management_transferred`**

Management was transferred to another workspace.

---

**`schlage_creation_outage`**

Received an error when attempting to create this code.

---

**`schlage_detected_duplicate`**

Duplicate access code detected.

---

**`smartthings_failed_to_set_access_code`**

Failed to set code on SmartThings device.

---

**`third_party_integration_detected`**

Third-party integration detected that may cause access codes to fail.

---

**`ultraloq_access_code_disabled`**

Access code is disabled on Ultraloq device. Re-enable through the Ultraloq mobile app.

---


## Events

**`access_code.created`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was created.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.created`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.changed`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was changed.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.changed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.scheduled_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was [scheduled natively](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>code</code></strong> <i>String</i>

  Code for the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.scheduled_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.set_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was set on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>code</code></strong> <i>String</i>

  Code for the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.set_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.removed_from_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was removed from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.removed_from_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.delay_in_setting_on_device`**

There was an unusually long delay in setting an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.delay_in_setting_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.failed_to_set_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be set on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.failed_to_set_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.deleted`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>code</code></strong> <i>String</i>

  Code for the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.delay_in_removing_from_device`**

There was an unusually long delay in removing an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.delay_in_removing_from_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.failed_to_remove_from_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be removed from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.failed_to_remove_from_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.modified_external_to_seam`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was modified outside of Seam.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.modified_external_to_seam`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.deleted_external_to_seam`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted outside of Seam.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.deleted_external_to_seam`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.backup_access_code_pulled`**

A [backup access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) was pulled from the backup access code pool and set on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>backup_access_code_id</code></strong> <i>String</i>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.backup_access_code_pulled`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/access_codes/create`**](./create.md)

Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/create_multiple`**](./create_multiple.md)

Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.


[**`/access_codes/delete`**](./delete.md)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/generate_code`**](./generate_code.md)

Generates a code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes), given a device ID.


[**`/access_codes/get`**](./get.md)

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/list`**](./list.md)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/pull_backup_access_code`**](./pull_backup_access_code.md)

Retrieves a backup access code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes). See also [Managing Backup Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).


[**`/access_codes/report_device_constraints`**](./report_device_constraints.md)

Enables you to report access code-related constraints for a device. Currently, supports reporting supported code length constraints for SmartThings devices.


[**`/access_codes/update`**](./update.md)

Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/update_multiple`**](./update_multiple.md)

Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.


