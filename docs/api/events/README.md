# Events

## `event`

### `created_at`

Format: `Datetime`

Date and time at which the event was created.

---

### `event_id`

Format: `UUID`

ID of the event.

---

### `event_type`

Format: `Enum`

Possible enum values:
- `access_code.created`
- `access_code.changed`
- `access_code.scheduled_on_device`
- `access_code.set_on_device`
- `access_code.removed_from_device`
- `access_code.delay_in_setting_on_device`
- `access_code.failed_to_set_on_device`
- `access_code.deleted`
- `access_code.delay_in_removing_from_device`
- `access_code.failed_to_remove_from_device`
- `access_code.modified_external_to_seam`
- `access_code.deleted_external_to_seam`
- `access_code.backup_access_code_pulled`
- `access_code.unmanaged.converted_to_managed`
- `access_code.unmanaged.failed_to_convert_to_managed`
- `access_code.unmanaged.created`
- `access_code.unmanaged.removed`
- `access_grant.created`
- `access_grant.deleted`
- `access_grant.access_granted_to_all_doors`
- `access_grant.access_granted_to_door`
- `access_grant.access_to_door_lost`
- `access_method.issued`
- `access_method.revoked`
- `access_method.card_encoding_required`
- `acs_system.connected`
- `acs_system.added`
- `acs_system.disconnected`
- `acs_credential.deleted`
- `acs_credential.issued`
- `acs_credential.reissued`
- `acs_credential.invalidated`
- `acs_user.created`
- `acs_user.deleted`
- `acs_encoder.added`
- `acs_encoder.removed`
- `acs_access_group.deleted`
- `acs_entrance.added`
- `acs_entrance.removed`
- `client_session.deleted`
- `connected_account.connected`
- `connected_account.created`
- `connected_account.successful_login`
- `connected_account.disconnected`
- `connected_account.completed_first_sync`
- `connected_account.deleted`
- `connected_account.completed_first_sync_after_reconnection`
- `action_attempt.lock_door.succeeded`
- `action_attempt.lock_door.failed`
- `action_attempt.unlock_door.succeeded`
- `action_attempt.unlock_door.failed`
- `connect_webview.login_succeeded`
- `connect_webview.login_failed`
- `device.connected`
- `device.added`
- `device.converted_to_unmanaged`
- `device.unmanaged.converted_to_managed`
- `device.unmanaged.connected`
- `device.disconnected`
- `device.unmanaged.disconnected`
- `device.tampered`
- `device.low_battery`
- `device.battery_status_changed`
- `device.removed`
- `device.deleted`
- `device.third_party_integration_detected`
- `device.third_party_integration_no_longer_detected`
- `device.salto.privacy_mode_activated`
- `device.salto.privacy_mode_deactivated`
- `device.connection_became_flaky`
- `device.connection_stabilized`
- `device.error.subscription_required`
- `device.error.subscription_required.resolved`
- `device.accessory_keypad_connected`
- `device.accessory_keypad_disconnected`
- `noise_sensor.noise_threshold_triggered`
- `lock.locked`
- `lock.unlocked`
- `lock.access_denied`
- `thermostat.climate_preset_activated`
- `thermostat.manually_adjusted`
- `thermostat.temperature_threshold_exceeded`
- `thermostat.temperature_threshold_no_longer_exceeded`
- `thermostat.temperature_reached_set_point`
- `thermostat.temperature_changed`
- `device.name_changed`
- `enrollment_automation.deleted`
- `phone.deactivated`

---

### `occurred_at`

Format: `Datetime`

Date and time at which the event occurred.

---

### `workspace_id`

Format: `UUID`

ID of the [workspace](../../core-concepts/workspaces/README.md).

---

## Endpoints

