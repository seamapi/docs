# Documentation Report

## Undocumented

These items are intentionally undocumented.

### Routes

- `/acs/access_groups/unmanaged`: No undocumented message provided
- `/acs/credential_pools`: No undocumented message provided
- `/acs/credential_provisioning_automations`: No undocumented message provided
- `/acs/credentials/unmanaged`: No undocumented message provided
- `/acs/encoders`: No undocumented message provided
- `/acs/users/unmanaged`: No undocumented message provided

### Resource properties

- `acs_user.is_latest_desired_state_synced_with_provider`: Only used internally.
- `acs_user.latest_desired_state_synced_with_provider_at`: Only used internally.
- `thermostat_schedule.unstable_is_override_allowed`: Unstable

### Endpoints

- `/acs/access_groups/unmanaged/get`: No unmanaged access groups are currently implemented.
- `/acs/access_groups/unmanaged/list`: No unmanaged access groups are currently implemented.
- `/acs/credential_pools/list`: Replaced by enrollment automations.
- `/acs/credential_provisioning_automations/launch`: Replaced by enrollment automations.
- `/acs/credentials/unmanaged/get`: No unmanaged credentials are currently implemented.
- `/acs/credentials/unmanaged/list`: No unmanaged credentials are currently implemented.
- `/acs/encoders/encode_credential`: Encoding a card is currently unimplemented.
- `/acs/encoders/list`: Encoders are in alpha.
- `/acs/encoders/scan_credential`: Reading a card is currently unimplemented.
- `/acs/users/unmanaged/get`: No unmanaged users are currently implemented.
- `/acs/users/unmanaged/list`: No unmanaged users are currently implemented.
- `/thermostats/get`: Will be removed.

### Endpoint parameters

- `/thermostats/cool`
    - `sync`: Only used internally.
- `/thermostats/heat`
    - `sync`: Only used internally.
- `/thermostats/heat_cool`
    - `sync`: Only used internally.
- `/thermostats/list`
    - `exclude_if`: Only used internally.
    - `include_if`: Only used internally.
- `/thermostats/off`
    - `sync`: Only used internally.
- `/thermostats/set_fan_mode`
    - `sync`: Only used internally.

## No Description

These items have an empty description.
Items that are intentionally undocumented are not included in this section.

### Resources

- `acs_credential_pool`
- `acs_credential_provisioning_automation`
- `acs_user`
- `event`

### Resource properties

- `acs_access_group.access_group_type`
- `acs_access_group.access_group_type_display_name`
- `acs_access_group.display_name`
- `acs_access_group.is_managed`
- `acs_credential.acs_credential_pool_id`
- `acs_credential.card_number`
- `acs_credential.errors`
- `acs_credential.is_issued`
- `acs_credential.is_managed`
- `acs_credential.issued_at`
- `acs_credential.warnings`
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
- `acs_entrance.assa_abloy_vostio_metadata`
- `acs_entrance.dormakaba_community_metadata`
- `acs_entrance.errors`
- `acs_entrance.latch_metadata`
- `acs_entrance.salto_ks_metadata`
- `acs_entrance.visionline_metadata`
- `acs_system.location`
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
- `event.method`
- `event.occurred_at`
- `event.thermostat_schedule_id`
- `event.workspace_id`

### Endpoints

- `/acs/credential_pools/list`
- `/acs/credential_provisioning_automations/launch`
- `/acs/encoders/encode_credential`
- `/acs/encoders/list`
- `/acs/encoders/scan_credential`
- `/acs/entrances/grant_access`
- `/acs/users/unmanaged/get`
- `/acs/users/unmanaged/list`
- `/events/get`
- `/events/list`

### Endpoint parameters

- `/acs/credential_pools/list`
    - `acs_system_id`
- `/acs/credential_provisioning_automations/launch`
    - `acs_credential_pool_id`
    - `create_credential_manager_user`
    - `credential_manager_acs_system_id`
    - `credential_manager_acs_user_id`
    - `user_identity_id`
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
    - `acs_system_id`
    - `acs_system_ids`
    - `between`
    - `connect_webview_id`
    - `connected_account_id`
    - `device_id`
    - `device_ids`
    - `event_type`
    - `event_types`
    - `limit`
    - `since`
    - `unstable_offset`
- `/thermostats/cool`
    - `sync`
- `/thermostats/create_climate_preset`
    - `manual_override_allowed`
- `/thermostats/heat`
    - `sync`
- `/thermostats/heat_cool`
    - `sync`
- `/thermostats/list`
    - `exclude_if`
    - `include_if`
- `/thermostats/off`
    - `sync`
- `/thermostats/set_fan_mode`
    - `device_id`
    - `fan_mode`
    - `sync`
- `/thermostats/schedules/create`
    - `is_override_allowed`
- `/thermostats/schedules/update`
    - `is_override_allowed`

## Draft

These items have been marked as draft.

### Resource properties

- `acs_system.default_credential_manager_acs_system_id`: Needs review

## Deprecated

These items are deprecated.

### Resource properties

- `acs_access_group.access_group_type`: Use `external_type`.
- `acs_access_group.access_group_type_display_name`: Use `external_type_display_name`.
- `acs_system.system_type`: Use `external_type`.
- `acs_system.system_type_display_name`: Use `external_type_display_name`.
- `acs_user.email`: use email_address.

### Endpoint parameters

- `/acs/users/create`
    - `email`: use email_address.
- `/acs/users/update`
    - `email`: use email_address.
- `/thermostats/set_fan_mode`
    - `fan_mode`: Use `fan_mode_setting` instead.
- `/thermostats/update_climate_preset`
    - `manual_override_allowed`: Use 'thermostat_schedule.is_override_allowed'

### Extra response keys

- `/events/get`
    - `message`
- `/thermostats/list`
    - `thermostats`

### Endpoints without code samples

- `/acs/credential_pools/list`
- `/acs/credential_provisioning_automations/launch`
- `/acs/credentials/unmanaged/get`
- `/acs/credentials/unmanaged/list`
- `/acs/encoders/encode_credential`
- `/acs/encoders/list`
- `/acs/encoders/scan_credential`
- `/acs/entrances/grant_access`
- `/acs/users/list_accessible_entrances`
- `/acs/users/revoke_access_to_all_entrances`
- `/acs/users/unmanaged/get`
- `/acs/users/unmanaged/list`
- `/events/get`
- `/events/list`
- `/thermostats/get`
