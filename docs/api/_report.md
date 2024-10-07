# Reference Documentation Report

## Undocumented

These items are intentionally undocumented.

### Resource properties

- `acs_user.is_latest_desired_state_synced_with_provider`: Intentionally undocumented
- `acs_user.latest_desired_state_synced_with_provider_at`: Intentionally undocumented

### Endpoints

- `/acs/encoders/encode_card`: Intentionally undocumented
- `/acs/encoders/read_card`: Intentionally undocumented
- `/acs/users/unmanaged`: Intentionally undocumented
- `/acs/users/unmanaged/get`: Intentionally undocumented
- `/acs/users/unmanaged/list`: Intentionally undocumented

### Endpoint parameters


## No Description

These items have an empty description.
Items that are intentionally undocumented are not included in this section.

### Resources

- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``

### Resource properties


### Endpoints

- `/acs/access_groups/add_user`
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
- `/acs/credentials/assign`
- `/acs/credentials/create`
- `/acs/credentials/delete`
- `/acs/credentials/get`
- `/acs/credentials/list`
- `/acs/credentials/list_accessible_entrances`
- `/acs/credentials/unassign`
- `/acs/credentials/unassign`
- `/acs/credentials/update`
- `/acs/credentials/update`
- `/acs/credentials/unmanaged/get`
- `/acs/credentials/unmanaged/list`
- `/acs/encoders/encode_card`
- `/acs/encoders/list`
- `/acs/encoders/read_card`
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
- `/thermostats/update_climate_preset`
- `/thermostats/schedules/create`
- `/thermostats/schedules/delete`
- `/thermostats/schedules/get`
- `/thermostats/schedules/list`
- `/thermostats/schedules/update`
- `/thermostats/schedules/update`

### Endpoint parameters

- `/acs/access_groups/add_user`
    - `acs_access_group_id`
    - `acs_user_id`
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
- `/acs/credentials/unassign`
    - `acs_credential_id`
    - `acs_user_id`
- `/acs/credentials/update`
    - `acs_credential_id`
    - `code`
    - `ends_at`
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
- `/thermostats/schedules/update`
    - `climate_preset_key`
    - `ends_at`
    - `max_override_period_minutes`
    - `name`
    - `starts_at`
    - `thermostat_schedule_id`

## Draft

These items have been marked as draft.

### Resources


### Resource properties


### Endpoints


### Endpoint parameters


## Deprecated

These items are deprecated.

### Resource properties

- `acs_access_group.access_group_type`: use external_type
- `acs_access_group.access_group_type_display_name`: use external_type_display_name
- `acs_system.system_type`: Use `external_type`.
- `acs_system.system_type_display_name`: Use `external_type_display_name`.
- `acs_user.email`: use email_address.

### Endpoints


### Endpoint parameters

- `/acs/users/create`
    - `email`: use email_address.
- `/acs/users/update`
    - `email`: use email_address.
- `/acs/users/update`
    - `email`: use email_address.
- `/thermostats/set_fan_mode`
    - `fan_mode`: use fan_mode_setting instead.
