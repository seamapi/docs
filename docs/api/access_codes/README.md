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
<tr><th width="25%">Property</th><th>Description</th></tr>
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

<table>
<tr><th width="25%">Error</th><th>Description</th></tr>
<tr><td><strong><code>smartthings_failed_to_set_access_code</code></strong></td>

<td>Failed to set code on SmartThings device.</td>
</tr>
<tr><td><strong><code>smartthings_failed_to_set_after_multiple_retries</code></strong></td>

<td>Failed to set code after multiple retries.</td>
</tr>
<tr><td><strong><code>smartthings_no_free_slots_available</code></strong></td>

<td>No free slots available on the device.</td>
</tr>
<tr><td><strong><code>failed_to_set_on_device</code></strong></td>

<td>Failed to set code on device.</td>
</tr>
<tr><td><strong><code>failed_to_remove_from_device</code></strong></td>

<td>Failed to remove code from device.</td>
</tr>
<tr><td><strong><code>duplicate_code_on_device</code></strong></td>

<td>Duplicate access code detected on device.</td>
</tr>
<tr><td><strong><code>duplicate_code_attempt_prevented</code></strong></td>

<td>An attempt to modify this access code was prevented.</td>
</tr>
<tr><td><strong><code>igloohome_bridge_too_many_pending_jobs</code></strong></td>

<td>Igloohome bridge has too many pending jobs in the queue.</td>
</tr>
<tr><td><strong><code>igloohome_bridge_offline</code></strong></td>

<td>Igloohome bridge is offline.</td>
</tr>
<tr><td><strong><code>igloohome_offline_access_code_no_variance_available</code></strong></td>

<td>Lock has reached maximum amount of codes.</td>
</tr>
<tr><td><strong><code>kwikset_unable_to_confirm_code</code></strong></td>

<td>Unable to confirm that the access code is set on Kwikset device.</td>
</tr>
<tr><td><strong><code>kwikset_unable_to_confirm_deletion</code></strong></td>

<td>Unable to confirm the deletion of the access code on Kwikset device.</td>
</tr>
<tr><td><strong><code>code_modified_external_to_seam</code></strong></td>

<td>Code was modified or removed externally after Seam successfully set it on the device.</td>
</tr>
<tr><td><strong><code>august_lock_invalid_code_length</code></strong></td>

<td>Invalid code length for August lock.</td>
</tr>
<tr><td><strong><code>august_device_programming_delay</code></strong></td>

<td>Access code has not yet been fully moved to the device.</td>
</tr>
<tr><td><strong><code>august_device_slots_full</code></strong></td>

<td>All access code slots on the device are full.</td>
</tr>
<tr><td><strong><code>august_lock_missing_keypad</code></strong></td>

<td>August lock is missing a keypad.</td>
</tr>
<tr><td><strong><code>august_lock_temporarily_offline</code></strong></td>

<td>August lock is temporarily offline.</td>
</tr>
<tr><td><strong><code>salto_ks_user_not_subscribed</code></strong></td>

<td>Salto site user is not subscribed.</td>
</tr>
<tr><td><strong><code>hubitat_device_programming_delay</code></strong></td>

<td>Access code has not yet been fully moved to the device.</td>
</tr>
<tr><td><strong><code>hubitat_no_free_positions_available</code></strong></td>

<td>No free positions available on the device.</td>
</tr>
<tr><td><strong><code>wyze_duplicate_code_name</code></strong></td>

<td>Duplicate access code name detected.</td>
</tr>
<tr><td><strong><code>wyze_potential_duplicate_code</code></strong></td>

<td>Potential duplicate access code detected.</td>
</tr>
<tr><td><strong><code>dormakaba_oracode_no_valid_user_level</code></strong></td>

<td>No valid user level for Oracode.</td>
</tr>
<tr><td><strong><code>account_disconnected</code></strong></td>

<td>Account is disconnected</td>
</tr>
<tr><td><strong><code>salto_ks_subscription_limit_exceeded</code></strong></td>

<td>Salto site user limit reached.</td>
</tr>
<tr><td><strong><code>device_offline</code></strong></td>

<td>Device is offline</td>
</tr>
<tr><td><strong><code>device_removed</code></strong></td>

<td>Device has been removed</td>
</tr>
<tr><td><strong><code>hub_disconnected</code></strong></td>

<td>Hub is disconnected</td>
</tr>
<tr><td><strong><code>device_disconnected</code></strong></td>

<td>Device is disconnected</td>
</tr>
<tr><td><strong><code>empty_backup_access_code_pool</code></strong></td>

<td>The backup access code pool is empty.</td>
</tr>
<tr><td><strong><code>august_lock_not_authorized</code></strong></td>

<td>User is not authorized to use the August Lock.</td>
</tr>
<tr><td><strong><code>august_lock_missing_bridge</code></strong></td>

<td>Lock is not connected to the Seam Bridge.</td>
</tr>
<tr><td><strong><code>ttlock_lock_not_paired_to_gateway</code></strong></td>

<td>Lock is not paired with a Gateway.</td>
</tr>
<tr><td><strong><code>missing_device_credentials</code></strong></td>

<td>Missing device credentials.</td>
</tr>
<tr><td><strong><code>auxiliary_heat_running</code></strong></td>

<td>The auxiliary heat is running.</td>
</tr>
<tr><td><strong><code>subscription_required</code></strong></td>

<td>Subscription required to connect.</td>
</tr>
<tr><td><strong><code>invalid_credentials</code></strong></td>

<td>Credentials provided were invalid.</td>
</tr>
<tr><td><strong><code>bridge_disconnected</code></strong></td>

<td>Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).</td>
</tr>
</table>

## Warnings

<table>
<tr><th width="25%">Warning</th><th>Description</th></tr>
<tr><td><strong><code>smartthings_failed_to_set_access_code</code></strong></td>

<td>Failed to set code on SmartThings device.</td>
</tr>
<tr><td><strong><code>schlage_detected_duplicate</code></strong></td>

<td>Duplicate access code detected.</td>
</tr>
<tr><td><strong><code>schlage_creation_outage</code></strong></td>

<td>Received an error when attempting to create this code.</td>
</tr>
<tr><td><strong><code>code_modified_external_to_seam</code></strong></td>

<td>Code was modified or removed externally after Seam successfully set it on the device.</td>
</tr>
<tr><td><strong><code>delay_in_setting_on_device</code></strong></td>

<td>Delay in setting code on device.</td>
</tr>
<tr><td><strong><code>delay_in_removing_from_device</code></strong></td>

<td>Delay in removing code from device.</td>
</tr>
<tr><td><strong><code>third_party_integration_detected</code></strong></td>

<td>Third-party integration detected that may cause access codes to fail.</td>
</tr>
<tr><td><strong><code>august_device_programming_delay</code></strong></td>

<td>Access code has not yet been fully moved to the device.</td>
</tr>
<tr><td><strong><code>august_lock_temporarily_offline</code></strong></td>

<td>August lock is temporarily offline.</td>
</tr>
<tr><td><strong><code>igloo_algopin_must_be_used_within_24_hours</code></strong></td>

<td>Algopins must be used within 24 hours.</td>
</tr>
<tr><td><strong><code>management_transferred</code></strong></td>

<td>Management was transferred to another workspace.</td>
</tr>
<tr><td><strong><code>kwikset_unable_to_confirm_code</code></strong></td>

<td>Unable to confirm that the access code is set on Kwikset device.</td>
</tr>
</table>

## Events

<table>
<tr><th width="25%">Event</th><th>Description</th></tr>
<tr><td><strong><code>access_code.created</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.changed</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.scheduled_on_device</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.set_on_device</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.removed_from_device</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.delay_in_setting_on_device</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.failed_to_set_on_device</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.deleted</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.delay_in_removing_from_device</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.failed_to_remove_from_device</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.modified_external_to_seam</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.deleted_external_to_seam</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.backup_access_code_pulled</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.unmanaged.converted_to_managed</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.unmanaged.failed_to_convert_to_managed</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.unmanaged.created</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>access_code.unmanaged.removed</code></strong></td>
<td>
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

</td></tr>
</table>

## Endpoints

<table>
<tr><th width="25%">Endpoint</th><th>Description</th></tr>

<tr><td><a href="./create.md"><strong><code>/access_codes/create</code></strong></a></td>

<td>Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).</td></tr>


<tr><td><a href="./create_multiple.md"><strong><code>/access_codes/create_multiple</code></strong></a></td>

<td>Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.</td></tr>


<tr><td><a href="./delete.md"><strong><code>/access_codes/delete</code></strong></a></td>

<td>Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).</td></tr>


<tr><td><a href="./get.md"><strong><code>/access_codes/get</code></strong></a></td>

<td>Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).</td></tr>


<tr><td><a href="./list.md"><strong><code>/access_codes/list</code></strong></a></td>

<td>Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).</td></tr>


<tr><td><a href="./pull_backup_access_code.md"><strong><code>/access_codes/pull_backup_access_code</code></strong></a></td>

<td>Retrieves a backup access code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes). See also [Managing Backup Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).</td></tr>


<tr><td><a href="./update.md"><strong><code>/access_codes/update</code></strong></a></td>

<td>Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).</td></tr>


<tr><td><a href="./update_multiple.md"><strong><code>/access_codes/update_multiple</code></strong></a></td>

<td>Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.</td></tr>

</table>
