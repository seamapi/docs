# Access Codes

## The access_code Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a smart lock [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

An access code is a code used for a keypad or pinpad device. Unlike physical keys, which can easily be lost or duplicated, PIN codes can be customized, tracked, and altered on the fly. Using the Seam Access Code API, you can easily generate access codes on the hundreds of door lock models with which we integrate.

Seam supports programming two types of access codes: [ongoing](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#ongoing-access-codes) and [time-bound](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#time-bound-access-codes). To differentiate between the two, refer to the `type` property of the access code. Ongoing codes display as `ongoing`, whereas time-bound codes are labeled `time_bound`.

In addition, for certain devices, Seam also supports [offline access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#offline-access-codes). Offline access (PIN) codes are designed for door locks that might not always maintain an internet connection. For this type of access code, the device manufacturer uses encryption keys (tokens) to create server-based registries of algorithmically-generated offline PIN codes. Because the tokens remain synchronized with the managed devices, the locks do not require an active internet connection—and you do not need to be near the locks—to create an offline access code. Then, owners or managers can share these offline codes with users through a variety of mechanisms, such as messaging applications. That is, lock users do not need to install a smartphone application to receive an offline access code.

{% tabs %}
{% tab title="JSON" %}
```json
{
  access_code_id: [example value],
  code: [example value],
  common_code_key: [example value],
  created_at: [example value],
  device_id: [example value],
  ends_at: [example value],
  errors: [example value],
  is_backup: [example value],
  is_backup_access_code_available: [example value],
  is_external_modification_allowed: [example value],
  is_managed: [example value],
  is_offline_access_code: [example value],
  is_one_time_use: [example value],
  is_scheduled_on_device: [example value],
  is_waiting_for_code_assignment: [example value],
  name: [example value],
  pulled_backup_access_code_id: [example value],
  starts_at: [example value],
  status: [example value],
  type: [example value],
  warnings: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Properties

<table>
<tr><th>Property</th><th>Description</th></tr>
<tr><td><strong><code>access_code_id</code></strong> <i>UUID</i></td>
<td>
Unique identifier for the access code.


</td></tr>

<tr><td><strong><code>code</code></strong> <i>String</i></td>
<td>
Code used for access. Typically, a numeric or alphanumeric string.


</td></tr>

<tr><td><strong><code>common_code_key</code></strong> <i>String</i></td>
<td>
Unique identifier for a group of access codes that share the same code.


</td></tr>

<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the access code was created.


</td></tr>

<tr><td><strong><code>device_id</code></strong> <i>UUID</i></td>
<td>
Unique identifier for the device associated with the access code.


</td></tr>

<tr><td><strong><code>ends_at</code></strong> <i>Datetime</i></td>
<td>
Date and time after which the time-bound access code becomes inactive.


</td></tr>

<tr><td><a href="./#errors"><strong><code>errors</code></strong></a> <i>List</i> <i>of Objects</i></td>
<td>
Errors associated with the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


</td></tr>

<tr><td><strong><code>is_backup</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the access code is a backup code.


</td></tr>

<tr><td><strong><code>is_backup_access_code_available</code></strong> <i>Boolean</i></td>
<td>
Indicates whether a backup access code is available for use if the primary access code is lost or compromised.


</td></tr>

<tr><td><strong><code>is_external_modification_allowed</code></strong> <i>Boolean</i></td>
<td>
Indicates whether changes to the access code from external sources are permitted.


</td></tr>

<tr><td><strong><code>is_managed</code></strong> <i>Boolean</i></td>
<td>
Indicates whether Seam manages the access code.


</td></tr>

<tr><td><strong><code>is_offline_access_code</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the access code is intended for use in offline scenarios. If `true`, this code can be created on a device without a network connection.


</td></tr>

<tr><td><strong><code>is_one_time_use</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the access code can only be used once. If `true`, the code becomes invalid after the first use.


</td></tr>

<tr><td><strong><code>is_scheduled_on_device</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the code is set on the device according to a preconfigured schedule.


</td></tr>

<tr><td><strong><code>is_waiting_for_code_assignment</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the access code is waiting for a code assignment.


</td></tr>

<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>
Name of the access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.


</td></tr>

<tr><td><strong><code>pulled_backup_access_code_id</code></strong> <i>UUID</i></td>
<td>
Identifier of the pulled backup access code. Used to associate the pulled backup access code with the original access code.


</td></tr>

<tr><td><strong><code>starts_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the time-bound access code becomes active.


</td></tr>

<tr><td><strong><code>status</code></strong> <i>Enum</i></td>
<td>
Current status of the access code within the operational lifecycle. Values are `setting`, a transitional phase that indicates that the code is being configured or activated; `set`, which indicates that the code is active and operational; `unset`, which indicates a deactivated or unused state, either before activation or after deliberate deactivation; `removing`, which indicates a transitional period in which the code is being deleted or made inactive; and `unknown`, which indicates an indeterminate state, due to reasons such as system errors or incomplete data, that highlights a potential need for system review or troubleshooting.

<details>

<summary>Enum values</summary>

- `setting`
- `set`
- `unset`
- `removing`
- `unknown`
</details>


</td></tr>

<tr><td><strong><code>type</code></strong> <i>Enum</i></td>
<td>
Nature of the access code. Values are `ongoing` for access codes that are active continuously until deactivated manually or `time_bound` for access codes that have a specific duration.

<details>

<summary>Enum values</summary>

- `time_bound`
- `ongoing`
</details>


</td></tr>

<tr><td><a href="./#warnings"><strong><code>warnings</code></strong></a> <i>List</i> <i>of Objects</i></td>
<td>
Warnings associated with the [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


</td></tr>

</table>

## Errors

**`smartthings_failed_to_set_access_code`**

Failed to set code on SmartThings device.

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

Lock has reached maximum amount of codes.

---

**`kwikset_unable_to_confirm_code`**

Unable to confirm that the access code is set on Kwikset device.

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

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---


## Warnings

**`smartthings_failed_to_set_access_code`**

Failed to set code on SmartThings device.

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

Third-party integration detected that may cause access codes to fail.

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

Unable to confirm that the access code is set on Kwikset device.

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


[**`/access_codes/create`**](./create.md)

Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/create_multiple`**](./create_multiple.md)

Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.


[**`/access_codes/delete`**](./delete.md)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/get`**](./get.md)

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/list`**](./list.md)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/pull_backup_access_code`**](./pull_backup_access_code.md)

Retrieves a backup access code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes). See also [Managing Backup Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).


[**`/access_codes/update`**](./update.md)

Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/update_multiple`**](./update_multiple.md)

Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.


