# Access Codes

The Access Codes route contains the following resources:

## The `access_code` Resource

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

Collection of errors associated with the access code, structured in a dictionary format. A unique "error_code" keys each error. Each error entry is an object containing two fields: "message" and "created_at." "message" is a string that describes the error. "created_at" is a date that indicates when the error was generated. This structure enables detailed tracking and timely response to critical issues.


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

Indicates whether the access code is intended for use in offline scenarios. If "true," this code can be created on a device without a network connection.


---

**`is_one_time_use`** *Boolean*

Indicates whether the access code can only be used once. If "true," the code becomes invalid after the first use.


---

**`is_scheduled_on_device`** *Boolean*

Indicates whether the code is set on the device according to a preconfigured schedule.


---

**`is_waiting_for_code_assignment`** *Boolean*

Indicates whether the access code is waiting for a code assignment.


---

**`name`** *String*

Name of the access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.


---

**`pulled_backup_access_code_id`** *UUID*

Identifier of the pulled backup access code. Used to associate the pulled backup access code with the original access code.


---

**`starts_at`** *Datetime*

Date and time at which the time-bound access code becomes active.


---

**`status`** *Enum*


    Current status of the access code within the operational lifecycle. Values are "setting," a transitional phase that indicates that the code is being configured or activated; "set", which indicates that the code is active and operational; "unset," which indicates a deactivated or unused state, either before activation or after deliberate deactivation; "removing," which indicates a transitional period in which the code is being deleted or made inactive; and "unknown," which indicates an indeterminate state, due to reasons such as system errors or incomplete data, that highlights a potential need for system review or troubleshooting.
  

<details>

<summary>Enum values</summary>

- `setting`
- `set`
- `unset`
- `removing`
- `unknown`
</details>


---

**`type`** *Enum*

Nature of the access code. Values are "ongoing" for access codes that are active continuously until deactivated manually or "time_bound" for access codes that have a specific duration.

<details>

<summary>Enum values</summary>

- `time_bound`
- `ongoing`
</details>


---

[**`warnings`**](./#warnings) *List* *of Objects*

Collection of warnings associated with the access code, structured in a dictionary format. A unique "warning_code" keys each warning. Each warning entry is an object containing two fields: "message" and "created_at." "message" is a string that describes the warning. "created_at" is a date that indicates when the warning was generated. This structure enables detailed tracking and timely response to potential issues that are not critical but that may require attention.


---


## Errors

**`smartthings_failed_to_set_access_code`**

Failed to set code on Smart Things device.

---

**`smartthings_failed_to_set_after_multiple_retries`**

Failed to set code after multiple retries.

---

**`smartthings_no_free_slots_available`**

No free slots available on the device.

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

**`igloohome_bridge_too_many_pending_jobs`**

Igloohome bridge has too many pending jobs in the queue.

---

**`igloohome_bridge_offline`**

Igloohome bridge is offline.

---

**`igloohome_offline_access_code_no_variance_available`**

Lock as reached max amount of codes.

---

**`kwikset_unable_to_confirm_code`**

Unable to confirm the access code is set on Kwikset device.

---

**`kwikset_unable_to_confirm_deletion`**

Unable to confirm the deletion of the access code on Kwikset device.

---

**`code_modified_external_to_seam`**

Code was modified or removed externally after Seam successfully set it on the device.

---

**`august_lock_invalid_code_length`**

Invalid code length for August lock.

---

**`august_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`august_device_slots_full`**

All access code slots on the device are full.

---

**`august_lock_missing_keypad`**

August lock is missing a keypad.

---

**`august_lock_temporarily_offline`**

August lock is temporarily offline.

---

**`salto_ks_user_not_subscribed`**

Salto site user is not subscribed.

---

**`hubitat_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`hubitat_no_free_positions_available`**

No free positions available on the device.

---

**`wyze_duplicate_code_name`**

Duplicate access code name detected.

---

**`wyze_potential_duplicate_code`**

Potential duplicate access code detected.

---

**`dormakaba_oracode_no_valid_user_level`**

No valid user level for Oracode.

---

**`account_disconnected`**

Account is disconnected

---

**`salto_ks_subscription_limit_exceeded`**

Salto site user limit reached.

---

**`device_offline`**

Device is offline

---

**`device_removed`**

Device has been removed

---

**`hub_disconnected`**

Hub is disconnected

---

**`device_disconnected`**

Device is disconnected

---

**`empty_backup_access_code_pool`**

The backup access code pool is empty.

---

**`august_lock_not_authorized`**

User is not authorized to use the August Lock.

---

**`august_lock_missing_bridge`**

Lock is not connected to the Seam Bridge.

---

**`ttlock_lock_not_paired_to_gateway`**

Lock is not paired with a Gateway.

---

**`missing_device_credentials`**

Missing device credentials.

---

**`auxiliary_heat_running`**

The auxiliary heat is running.

---

**`subscription_required`**

Subscription required to connect.

---

**`invalid_credentials`**

Credentials provided were invalid.

---


## Warnings

**`smartthings_failed_to_set_access_code`**

Failed to set code on Smart Things device.

---

**`schlage_detected_duplicate`**

Duplicate access code detected.

---

**`schlage_creation_outage`**

Received an error when attempting to create this code.

---

**`code_modified_external_to_seam`**

Code was modified or removed externally after Seam successfully set it on the device.

---

**`delay_in_setting_on_device`**

Delay in setting code on device.

---

**`delay_in_removing_from_device`**

Delay in removing code from device.

---

**`third_party_integration_detected`**

Third party integration detected that may cause access codes to fail.

---

**`august_device_programming_delay`**

Access code has not yet been fully moved to the device.

---

**`august_lock_temporarily_offline`**

August lock is temporarily offline.

---

**`igloo_algopin_must_be_used_within_24_hours`**

Algopins must be used within 24 hours.

---

**`management_transferred`**

Management was transferred to another workspace.

---

**`kwikset_unable_to_confirm_code`**

Unable to confirm the access code is set on Kwikset device.

---


## Events

**`access_code.created`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was created.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.changed`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was changed.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.scheduled_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was [scheduled natively](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) on a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>code</code></strong> <i>String</i>

  Code for the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.set_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was set on a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>code</code></strong> <i>String</i>

  Code for the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.removed_from_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was removed from a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.delay_in_setting_on_device`**

There was an unusually long delay in setting an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) on a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.failed_to_set_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be set on a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.deleted`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>code</code></strong> <i>String</i>

  Code for the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.delay_in_removing_from_device`**

There was an unusually long delay in removing an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) from a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.failed_to_remove_from_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be removed from a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.modified_external_to_seam`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was modified outside of Seam.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.deleted_external_to_seam`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted outside of Seam.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.backup_access_code_pulled`**

A [backup access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) was pulled from the backup access code pool and set on a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>backup_access_code_id</code></strong> <i>String</i>



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.unmanaged.converted_to_managed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was converted successfully to a managed access code.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.unmanaged.failed_to_convert_to_managed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) failed to be converted to a managed access code.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.unmanaged.created`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was created on a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

**`access_code.unmanaged.removed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was removed from a device.

<details>

<summary>Properties</summary>

- <strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).



- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md).



- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

---

## Endpoints


