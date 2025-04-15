# Unmanaged Access Code

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

{% tabs %}
{% tab title="JSON" %}
```json
{
  access_code_id: [example value],
  code: [example value],
  created_at: [example value],
  device_id: [example value],
  ends_at: [example value],
  errors: [example value],
  is_managed: [example value],
  name: [example value],
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
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>access_code_id</code></strong> <i>UUID</i></td>
<td>
Unique identifier for the access code.


</td></tr>

<tr><td><strong><code>code</code></strong> <i>String</i></td>
<td>
Code used for access. Typically, a numeric or alphanumeric string.


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

<tr><td><strong><code>is_managed</code></strong> <i>Boolean</i></td>
<td>
Indicates that Seam does not manage the access code.


</td></tr>

<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>
Name of the access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.


</td></tr>

<tr><td><strong><code>starts_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the time-bound access code becomes active.


</td></tr>

<tr><td><strong><code>status</code></strong> <i>String</i></td>
<td>
Current status of the access code within the operational lifecycle. `set` indicates that the code is active and operational.


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

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

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


