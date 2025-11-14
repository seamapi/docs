# Unmanaged Access Codes

## The unmanaged_access_code Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an [unmanaged smart lock access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

An access code is a code used for a keypad or pinpad device. Unlike physical keys, which can easily be lost or duplicated, PIN codes can be customized, tracked, and altered on the fly.

When you create an access code on a device in Seam, it is created as a managed access code. Access codes that exist on a device that were not created through Seam are considered unmanaged codes. We strictly limit the operations that can be performed on unmanaged codes.

Prior to using Seam to manage your devices, you may have used another lock management system to manage the access codes on your devices. Where possible, we help you keep any existing access codes on devices and transition those codes to ones managed by your Seam workspace.

Not all providers support unmanaged access codes. The following providers do not support unmanaged access codes:

- [Kwikset](https://docs.seam.co/latest/device-and-system-integration-guides/kwikset-locks)

{% tabs %}
{% tab title="Unmanaged Access Code" %}

An unmanaged access code resource.

```json
{
  "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "b3439f17-7273-46f3-9e20-9a283d9cb5b4",
  "ends_at": "2025-06-23T16:54:17.946261Z",
  "errors": [],
  "is_managed": false,
  "name": "My Unmanaged Access Code",
  "starts_at": "2025-06-21T16:54:17.946261Z",
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
<summary><code>igloohome_offline_access_code_no_variance_available</code></summary>

Lock has reached maximum amount of codes.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>igloohome_offline_access_code_no_variance_available</code>
  
  
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
<summary><code>dormakaba_oracode_no_valid_user_level</code></summary>

No valid user level for Oracode.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>dormakaba_oracode_no_valid_user_level</code>
  
  
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

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>bridge_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`is_managed`** *Boolean*

Indicates that Seam does not manage the access code.




---

**`name`** *String*

Name of the access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes. Note that the name provided on Seam is used to identify the code on Seam and is not necessarily the name that will appear in the lock provider's app or on the device. This is because lock providers may have constraints on names, such as length, uniqueness, or characters that can be used. In addition, some lock providers may break down names into components such as `first_name` and `last_name`. To provide a consistent experience, Seam identifies the code on Seam by its name but may modify the name that appears on the lock provider's app or on the device. For example, Seam may add additional characters or truncate the name to meet provider constraints. To help your users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app or on the device as a separate property called `appearance`. This is an object with a `name` property and, optionally, `first_name` and `last_name` properties (for providers that break down a name into components).




---

**`starts_at`** *Datetime*

Date and time at which the time-bound access code becomes active.




---

**`status`** *Enum*

Current status of the access code within the operational lifecycle. `set` indicates that the code is active and operational.


<details>
<summary>Enum values</summary>

- <code>set</code>
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

---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the access code.




---


## Errors

**`account_disconnected`**

Indicates that the account is disconnected.

---

**`august_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`august_lock_invalid_code_length`**

Invalid code length for August lock.

---

**`august_lock_missing_bridge`**

Indicates that the lock is not connected to a bridge.

---

**`august_lock_missing_keypad`**

August lock is missing a keypad.

---

**`august_lock_not_authorized`**

Indicates that the user is not authorized to use the August lock.

---

**`august_lock_temporarily_offline`**

August lock is temporarily offline.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`code_modified_external_to_seam`**

Code was modified or removed externally after Seam successfully set it on the device.

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

**`dormakaba_oracode_no_valid_user_level`**

No valid user level for Oracode.

---

**`duplicate_code_attempt_prevented`**

An attempt to modify this access code was prevented.

---

**`duplicate_code_on_device`**

Duplicate access code detected on device.

---

**`empty_backup_access_code_pool`**

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

---

**`failed_to_remove_from_device`**

Failed to remove code from device.

---

**`failed_to_set_on_device`**

Failed to set code on device.

---

**`hub_disconnected`**

Indicates that the hub is disconnected.

---

**`hubitat_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`hubitat_no_free_positions_available`**

No free positions available on the device.

---

**`igloohome_bridge_offline`**

Igloohome bridge is offline.

---

**`igloohome_bridge_too_many_pending_jobs`**

Igloohome bridge has too many pending jobs in the queue.

---

**`igloohome_offline_access_code_no_variance_available`**

Lock has reached maximum amount of codes.

---

**`keynest_unsupported_third_party_locker`**

KeyNest locker is not supported.

---

**`kwikset_insufficient_permissions`**

Admin role required—insufficient permissions to manage PINs on this Kwikset device. Please have a Home Admin update your role in the Kwikset app, or ask them to set the PIN.

---

**`kwikset_unable_to_confirm_code`**

Unable to confirm that the access code is set on Kwikset device.

---

**`kwikset_unable_to_confirm_deletion`**

Unable to confirm the deletion of the access code on Kwikset device.

---

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

---

**`missing_device_credentials`**

Indicates that device credentials are missing.

---

**`no_space_for_access_code_on_device`**

No space for access code on device.

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the Salto site user limit has been reached.

---

**`salto_ks_user_not_subscribed`**

Salto site user is not subscribed.

---

**`smartthings_failed_to_set_access_code`**

Failed to set code on SmartThings device.

---

**`smartthings_failed_to_set_after_multiple_retries`**

Failed to set code after multiple retries.

---

**`smartthings_no_free_slots_available`**

No free slots available on the device.

---

**`subscription_required`**

Indicates that a subscription is required to connect.

---

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

---

**`wyze_duplicate_code_name`**

Duplicate access code name detected.

---

**`wyze_potential_duplicate_code`**

Potential duplicate access code detected.

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


## Events

**`access_code.unmanaged.converted_to_managed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was converted successfully to a managed access code.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.converted_to_managed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.unmanaged.failed_to_convert_to_managed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) failed to be converted to a managed access code.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.failed_to_convert_to_managed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.unmanaged.created`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was created on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.created`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.unmanaged.removed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was removed from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.removed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/access_codes/unmanaged/convert_to_managed`**](./convert_to_managed.md)

Converts an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) to an [access code managed through Seam](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/unmanaged/delete`**](./delete.md)

Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


[**`/access_codes/unmanaged/get`**](./get.md)

Returns a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


[**`/access_codes/unmanaged/list`**](./list.md)

Returns a list of all [unmanaged access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


[**`/access_codes/unmanaged/update`**](./update.md)

Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


