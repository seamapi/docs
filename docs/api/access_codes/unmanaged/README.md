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
<tr><th style="width:25%">Property</th><th>Description</th></tr>
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

<table>
<tr><th style="width:25%">Error</th><th>Description</th></tr>
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

<td>Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).</td>
</tr>
</table>

## Warnings

<table>
<tr><th style="width:25%">Warning</th><th>Description</th></tr>
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
</table>

## Endpoints

<table>
<tr><th style="width:25%">Endpoint</th><th>Description</th></tr>

<tr><td><a href="./convert_to_managed.md"><strong><code>/access_codes/unmanaged/convert_to_managed</code></strong></a></td>

<td>Converts an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) to an [access code managed through Seam](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).</td></tr>


<tr><td><a href="./delete.md"><strong><code>/access_codes/unmanaged/delete</code></strong></a></td>

<td>Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).</td></tr>


<tr><td><a href="./get.md"><strong><code>/access_codes/unmanaged/get</code></strong></a></td>

<td>Returns a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).</td></tr>


<tr><td><a href="./list.md"><strong><code>/access_codes/unmanaged/list</code></strong></a></td>

<td>Returns a list of all [unmanaged access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).</td></tr>


<tr><td><a href="./update.md"><strong><code>/access_codes/unmanaged/update</code></strong></a></td>

<td>Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).</td></tr>

</table>
