# Events

## The event Object

- [Properties](./#properties)


Represents an event that occurred in your workspace.

---
## Properties

**`event_id`** *UUID*

ID of the event.




---

**`event_type`** *Enum*

Type of event.


<details>
<summary>Enum values</summary>

- <code>access_code.created</code>
- <code>access_code.changed</code>
- <code>access_code.scheduled_on_device</code>
- <code>access_code.set_on_device</code>
- <code>access_code.removed_from_device</code>
- <code>access_code.delay_in_setting_on_device</code>
- <code>access_code.failed_to_set_on_device</code>
- <code>access_code.deleted</code>
- <code>access_code.delay_in_removing_from_device</code>
- <code>access_code.failed_to_remove_from_device</code>
- <code>access_code.modified_external_to_seam</code>
- <code>access_code.deleted_external_to_seam</code>
- <code>access_code.backup_access_code_pulled</code>
- <code>access_code.unmanaged.converted_to_managed</code>
- <code>access_code.unmanaged.failed_to_convert_to_managed</code>
- <code>access_code.unmanaged.created</code>
- <code>access_code.unmanaged.removed</code>
- <code>access_grant.created</code>
- <code>access_grant.deleted</code>
- <code>access_grant.access_granted_to_all_doors</code>
- <code>access_grant.access_granted_to_door</code>
- <code>access_grant.access_to_door_lost</code>
- <code>access_grant.access_times_changed</code>
- <code>access_grant.could_not_create_requested_access_methods</code>
- <code>access_method.issued</code>
- <code>access_method.revoked</code>
- <code>access_method.card_encoding_required</code>
- <code>access_method.deleted</code>
- <code>access_method.reissued</code>
- <code>acs_system.connected</code>
- <code>acs_system.added</code>
- <code>acs_system.disconnected</code>
- <code>acs_credential.deleted</code>
- <code>acs_credential.issued</code>
- <code>acs_credential.reissued</code>
- <code>acs_credential.invalidated</code>
- <code>acs_user.created</code>
- <code>acs_user.deleted</code>
- <code>acs_encoder.added</code>
- <code>acs_encoder.removed</code>
- <code>acs_access_group.deleted</code>
- <code>acs_entrance.added</code>
- <code>acs_entrance.removed</code>
- <code>client_session.deleted</code>
- <code>connected_account.connected</code>
- <code>connected_account.created</code>
- <code>connected_account.disconnected</code>
- <code>connected_account.completed_first_sync</code>
- <code>connected_account.deleted</code>
- <code>connected_account.completed_first_sync_after_reconnection</code>
- <code>connected_account.reauthorization_requested</code>
- <code>action_attempt.lock_door.succeeded</code>
- <code>action_attempt.lock_door.failed</code>
- <code>action_attempt.unlock_door.succeeded</code>
- <code>action_attempt.unlock_door.failed</code>
- <code>connect_webview.login_succeeded</code>
- <code>connect_webview.login_failed</code>
- <code>device.connected</code>
- <code>device.added</code>
- <code>device.converted_to_unmanaged</code>
- <code>device.unmanaged.converted_to_managed</code>
- <code>device.unmanaged.connected</code>
- <code>device.disconnected</code>
- <code>device.unmanaged.disconnected</code>
- <code>device.tampered</code>
- <code>device.low_battery</code>
- <code>device.battery_status_changed</code>
- <code>device.removed</code>
- <code>device.deleted</code>
- <code>device.third_party_integration_detected</code>
- <code>device.third_party_integration_no_longer_detected</code>
- <code>device.salto.privacy_mode_activated</code>
- <code>device.salto.privacy_mode_deactivated</code>
- <code>device.connection_became_flaky</code>
- <code>device.connection_stabilized</code>
- <code>device.error.subscription_required</code>
- <code>device.error.subscription_required.resolved</code>
- <code>device.accessory_keypad_connected</code>
- <code>device.accessory_keypad_disconnected</code>
- <code>noise_sensor.noise_threshold_triggered</code>
- <code>lock.locked</code>
- <code>lock.unlocked</code>
- <code>lock.access_denied</code>
- <code>thermostat.climate_preset_activated</code>
- <code>thermostat.manually_adjusted</code>
- <code>thermostat.temperature_threshold_exceeded</code>
- <code>thermostat.temperature_threshold_no_longer_exceeded</code>
- <code>thermostat.temperature_reached_set_point</code>
- <code>thermostat.temperature_changed</code>
- <code>device.name_changed</code>
- <code>enrollment_automation.deleted</code>
- <code>phone.deactivated</code>
- <code>space.device_membership_changed</code>
- <code>space.created</code>
- <code>space.deleted</code>
</details>


---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.




---

**`created_at`** *DateTime*

Date and time at which the event was created.




---

**`occurred_at`** *DateTime*

Date and time at which the event occurred.




---

## Endpoints


[**`/events/get`**](./get.md)

Returns a specified event. This endpoint returns the same event that would be sent to a [webhook](https://docs.seam.co/latest/developer-tools/webhooks), but it enables you to retrieve an event that already took place.


[**`/events/list`**](./list.md)

Returns a list of all events. This endpoint returns the same events that would be sent to a [webhook](https://docs.seam.co/latest/developer-tools/webhooks), but it enables you to filter or see events that already took place.


