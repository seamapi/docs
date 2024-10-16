# Documentation Report

## Undocumented

These items are intentionally undocumented.

### Routes

- `/acs/encoders`: No undocumented message provided
- `/acs/users/unmanaged`: No undocumented message provided

### Resource properties

- `acs_user.is_latest_desired_state_synced_with_provider`: Only used internally.
- `acs_user.latest_desired_state_synced_with_provider_at`: Only used internally.

### Endpoints

- `/acs/encoders/encode_card`: Encoding a card is currently unimplemented.
- `/acs/encoders/list`: Encoders are in alpha.
- `/acs/encoders/scan_card`: Reading a card is currently unimplemented.
- `/acs/users/unmanaged/get`: No unmanaged users are currently implemented.
- `/acs/users/unmanaged/list`: No unmanaged users are currently implemented.

## No Description

These items have an empty description.
Items that are intentionally undocumented are not included in this section.

### Resources

- `acs_access_group`
- `acs_credential`
- `acs_credential_pool`
- `acs_credential_provisioning_automation`
- `acs_entrance`
- `acs_user`
- `event`
- `thermostat_schedule`

### Resource properties

- `acs_access_group.access_group_type`
- `acs_access_group.access_group_type_display_name`
- `acs_access_group.acs_access_group_id`
- `acs_access_group.acs_system_id`
- `acs_access_group.created_at`
- `acs_access_group.display_name`
- `acs_access_group.external_type`
- `acs_access_group.external_type_display_name`
- `acs_access_group.is_managed`
- `acs_access_group.name`
- `acs_access_group.workspace_id`
- `acs_credential.access_method`
- `acs_credential.acs_credential_id`
- `acs_credential.acs_credential_pool_id`
- `acs_credential.acs_system_id`
- `acs_credential.acs_user_id`
- `acs_credential.card_number`
- `acs_credential.code`
- `acs_credential.created_at`
- `acs_credential.display_name`
- `acs_credential.ends_at`
- `acs_credential.errors`
- `acs_credential.external_type`
- `acs_credential.external_type_display_name`
- `acs_credential.is_issued`
- `acs_credential.is_latest_desired_state_synced_with_provider`
- `acs_credential.is_managed`
- `acs_credential.is_multi_phone_sync_credential`
- `acs_credential.issued_at`
- `acs_credential.latest_desired_state_synced_with_provider_at`
- `acs_credential.parent_acs_credential_id`
- `acs_credential.starts_at`
- `acs_credential.visionline_metadata`
- `acs_credential.warnings`
- `acs_credential.workspace_id`
- `acs_credential_pool.acs_credential_pool_id`
- `acs_credential_pool.acs_system_id`
- `acs_credential_pool.created_at`
- `acs_credential_pool.display_name`
- `acs_credential_pool.external_type`
- `acs_credential_pool.external_type_display_name`
- `acs_credential_pool.workspace_id`
- `acs_credential_provisioning_automation.acs_credential_provisioning_automation_id`
- `acs_credential_provisioning_automation.created_at`
- `acs_credential_provisioning_automation.credential_manager_acs_system_id`
- `acs_credential_provisioning_automation.user_identity_id`
- `acs_credential_provisioning_automation.workspace_id`
- `acs_entrance.errors`
- `acs_entrance.latch_metadata`
- `acs_entrance.salto_ks_metadata`
- `acs_entrance.visionline_metadata`
- `acs_system.system_type`
- `acs_system.system_type_display_name`
- `acs_system.visionline_metadata`
- `acs_user.email`
- `acs_user.hid_acs_system_id`
- `acs_user.is_latest_desired_state_synced_with_provider`
- `acs_user.is_managed`
- `acs_user.latest_desired_state_synced_with_provider_at`
- `event.acs_credential_id`
- `event.acs_system_id`
- `event.acs_user_id`
- `event.action_attempt_id`
- `event.client_session_id`
- `event.climate_preset_key`
- `event.cooling_set_point_celsius`
- `event.cooling_set_point_fahrenheit`
- `event.created_at`
- `event.device_id`
- `event.enrollment_automation_id`
- `event.event_description`
- `event.event_id`
- `event.event_type`
- `event.fan_mode_setting`
- `event.heating_set_point_celsius`
- `event.heating_set_point_fahrenheit`
- `event.hvac_mode_setting`
- `event.is_fallback_climate_preset`
- `event.occurred_at`
- `event.thermostat_schedule_id`
- `event.workspace_id`
- `thermostat_schedule.climate_preset_key`
- `thermostat_schedule.created_at`
- `thermostat_schedule.device_id`
- `thermostat_schedule.ends_at`
- `thermostat_schedule.max_override_period_minutes`
- `thermostat_schedule.name`
- `thermostat_schedule.starts_at`
- `thermostat_schedule.thermostat_schedule_id`

### Endpoints

- `/acs/access_groups/add_user`
- `/acs/access_groups/get`
- `/acs/access_groups/list`
- `/acs/access_groups/list_accessible_entrances`
- `/acs/access_groups/list_users`
- `/acs/access_groups/remove_user`
- `/acs/access_groups/unmanaged/get`
- `/acs/access_groups/unmanaged/list`
- `/acs/credential_pools/list`
- `/acs/credential_provisioning_automations/launch`
- `/acs/credentials/assign`
- `/acs/credentials/create`
- `/acs/credentials/delete`
- `/acs/credentials/get`
- `/acs/credentials/list`
- `/acs/credentials/list_accessible_entrances`
- `/acs/credentials/unassign`
- `/acs/credentials/update`
- `/acs/credentials/unmanaged/get`
- `/acs/credentials/unmanaged/list`
- `/acs/encoders/encode_card`
- `/acs/encoders/list`
- `/acs/encoders/scan_card`
- `/acs/entrances/get`
- `/acs/entrances/grant_access`
- `/acs/entrances/list`
- `/acs/entrances/list_credentials_with_access`
- `/acs/users/unmanaged/get`
- `/acs/users/unmanaged/list`
- `/events/get`
- `/events/list`
- `/thermostats/activate_climate_preset`
- `/thermostats/cool`
- `/thermostats/create_climate_preset`
- `/thermostats/delete_climate_preset`
- `/thermostats/get`
- `/thermostats/heat`
- `/thermostats/heat_cool`
- `/thermostats/list`
- `/thermostats/off`
- `/thermostats/set_fallback_climate_preset`
- `/thermostats/set_fan_mode`
- `/thermostats/update_climate_preset`
- `/thermostats/schedules/create`
- `/thermostats/schedules/delete`
- `/thermostats/schedules/get`
- `/thermostats/schedules/list`
- `/thermostats/schedules/update`

### Endpoint parameters

- `/acs/access_groups/add_user`
    - `acs_access_group_id`
    - `acs_user_id`
- `/acs/access_groups/get`
    - `acs_access_group_id`
- `/acs/access_groups/list`
    - `acs_system_id`
    - `acs_user_id`
- `/acs/access_groups/list_accessible_entrances`
    - `acs_access_group_id`
- `/acs/access_groups/list_users`
    - `acs_access_group_id`
- `/acs/access_groups/remove_user`
    - `acs_access_group_id`
    - `acs_user_id`
- `/acs/access_groups/unmanaged/get`
    - `acs_access_group_id`
- `/acs/access_groups/unmanaged/list`
    - `acs_system_id`
    - `acs_user_id`
- `/acs/credential_pools/list`
    - `acs_system_id`
- `/acs/credential_provisioning_automations/launch`
    - `acs_credential_pool_id`
    - `create_credential_manager_user`
    - `credential_manager_acs_system_id`
    - `credential_manager_acs_user_id`
    - `user_identity_id`
- `/acs/credentials/assign`
    - `acs_credential_id`
    - `acs_user_id`
- `/acs/credentials/create`
    - `access_method`
    - `acs_user_id`
    - `allowed_acs_entrance_ids`
    - `code`
    - `credential_manager_acs_system_id`
    - `ends_at`
    - `is_multi_phone_sync_credential`
    - `starts_at`
    - `visionline_metadata`
- `/acs/credentials/delete`
    - `acs_credential_id`
- `/acs/credentials/get`
    - `acs_credential_id`
- `/acs/credentials/list_accessible_entrances`
    - `acs_credential_id`
- `/acs/credentials/unassign`
    - `acs_credential_id`
    - `acs_user_id`
- `/acs/credentials/update`
    - `acs_credential_id`
    - `code`
    - `ends_at`
- `/acs/credentials/unmanaged/get`
    - `acs_credential_id`
- `/acs/entrances/get`
    - `acs_entrance_id`
- `/acs/entrances/grant_access`
    - `acs_entrance_id`
    - `acs_user_id`
- `/acs/entrances/list`
    - `acs_credential_id`
    - `acs_system_id`
- `/acs/entrances/list_credentials_with_access`
    - `acs_entrance_id`
    - `include_if`
- `/acs/users/create`
    - `email`
- `/acs/users/list`
    - `created_before`
    - `limit`
- `/acs/users/update`
    - `email`
    - `hid_acs_system_id`
- `/acs/users/unmanaged/get`
    - `acs_user_id`
- `/acs/users/unmanaged/list`
    - `acs_system_id`
    - `limit`
    - `user_identity_email_address`
    - `user_identity_id`
    - `user_identity_phone_number`
- `/events/get`
    - `device_id`
    - `event_id`
    - `event_type`
- `/events/list`
    - `access_code_id`
    - `access_code_ids`
    - `between`
    - `connect_webview_id`
    - `connected_account_id`
    - `device_id`
    - `device_ids`
    - `event_type`
    - `event_types`
    - `limit`
    - `since`
- `/thermostats/activate_climate_preset`
    - `climate_preset_key`
    - `device_id`
- `/thermostats/cool`
    - `cooling_set_point_celsius`
    - `cooling_set_point_fahrenheit`
    - `device_id`
    - `sync`
- `/thermostats/create_climate_preset`
    - `climate_preset_key`
    - `cooling_set_point_celsius`
    - `cooling_set_point_fahrenheit`
    - `device_id`
    - `fan_mode_setting`
    - `heating_set_point_celsius`
    - `heating_set_point_fahrenheit`
    - `hvac_mode_setting`
    - `manual_override_allowed`
    - `name`
- `/thermostats/delete_climate_preset`
    - `climate_preset_key`
    - `device_id`
- `/thermostats/get`
    - `device_id`
    - `name`
- `/thermostats/heat`
    - `device_id`
    - `heating_set_point_celsius`
    - `heating_set_point_fahrenheit`
    - `sync`
- `/thermostats/heat_cool`
    - `cooling_set_point_celsius`
    - `cooling_set_point_fahrenheit`
    - `device_id`
    - `heating_set_point_celsius`
    - `heating_set_point_fahrenheit`
    - `sync`
- `/thermostats/list`
    - `connect_webview_id`
    - `connected_account_ids`
    - `created_before`
    - `custom_metadata_has`
    - `device_ids`
    - `device_types`
    - `exclude_if`
    - `include_if`
    - `limit`
    - `manufacturer`
    - `user_identifier_key`
- `/thermostats/off`
    - `device_id`
    - `sync`
- `/thermostats/set_fallback_climate_preset`
    - `climate_preset_key`
    - `device_id`
- `/thermostats/set_fan_mode`
    - `device_id`
    - `fan_mode`
    - `fan_mode_setting`
    - `sync`
- `/thermostats/update_climate_preset`
    - `climate_preset_key`
    - `cooling_set_point_celsius`
    - `cooling_set_point_fahrenheit`
    - `device_id`
    - `fan_mode_setting`
    - `heating_set_point_celsius`
    - `heating_set_point_fahrenheit`
    - `hvac_mode_setting`
    - `manual_override_allowed`
    - `name`
- `/thermostats/schedules/create`
    - `climate_preset_key`
    - `device_id`
    - `ends_at`
    - `max_override_period_minutes`
    - `name`
    - `starts_at`
- `/thermostats/schedules/delete`
    - `thermostat_schedule_id`
- `/thermostats/schedules/get`
    - `thermostat_schedule_id`
- `/thermostats/schedules/list`
    - `device_id`
    - `user_identifier_key`
- `/thermostats/schedules/update`
    - `climate_preset_key`
    - `ends_at`
    - `max_override_period_minutes`
    - `name`
    - `starts_at`
    - `thermostat_schedule_id`

## Deprecated

These items are deprecated.

### Resource properties

- `acs_access_group.access_group_type`: use external_type
- `acs_access_group.access_group_type_display_name`: use external_type_display_name
- `acs_system.system_type`: Use `external_type`.
- `acs_system.system_type_display_name`: Use `external_type_display_name`.
- `acs_user.email`: use email_address.

### Endpoint parameters

- `/acs/users/create`
    - `email`: use email_address.
- `/acs/users/update`
    - `email`: use email_address.
- `/thermostats/set_fan_mode`
    - `fan_mode`: use fan_mode_setting instead.

### Extra response keys

- `/events/get`
    - `message`
- `/thermostats/list`
    - `thermostats`

### Endpoints without code samples

- `/acs/access_groups/add_user`
- `/acs/access_groups/get`
- `/acs/access_groups/list`
- `/acs/access_groups/list_accessible_entrances`
- `/acs/access_groups/list_users`
- `/acs/access_groups/remove_user`
- `/acs/access_groups/unmanaged/get`
- `/acs/access_groups/unmanaged/list`
- `/acs/credential_pools/list`
- `/acs/credential_provisioning_automations/launch`
- `/acs/credentials/assign`
- `/acs/credentials/create`
- `/acs/credentials/delete`
- `/acs/credentials/get`
- `/acs/credentials/list`
- `/acs/credentials/list_accessible_entrances`
- `/acs/credentials/unassign`
- `/acs/credentials/update`
- `/acs/credentials/unmanaged/get`
- `/acs/credentials/unmanaged/list`
- `/acs/encoders/encode_card`
- `/acs/encoders/list`
- `/acs/encoders/scan_card`
- `/acs/entrances/get`
- `/acs/entrances/grant_access`
- `/acs/entrances/list`
- `/acs/entrances/list_credentials_with_access`
- `/acs/users/list_accessible_entrances`
- `/acs/users/revoke_access_to_all_entrances`
- `/acs/users/unmanaged/get`
- `/acs/users/unmanaged/list`
- `/events/get`
- `/events/list`
- `/thermostats/activate_climate_preset`
- `/thermostats/cool`
- `/thermostats/create_climate_preset`
- `/thermostats/delete_climate_preset`
- `/thermostats/set_fallback_climate_preset`
- `/thermostats/update_climate_preset`
- `/thermostats/schedules/create`
- `/thermostats/schedules/delete`
- `/thermostats/schedules/get`
- `/thermostats/schedules/list`
- `/thermostats/schedules/update`
