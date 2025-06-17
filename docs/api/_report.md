# Documentation Report

## Untitled

### Routes

- `/action_attempts`
- `/client_sessions`
- `/connect_webviews`
- `/devices`
- `/devices/simulate`
- `/devices/unmanaged`
- `/events`
- `/locks`
- `/noise_sensors/noise_thresholds`
- `/noise_sensors/simulate`
- `/thermostats/daily_programs`
- `/webhooks`
- `/workspaces`

## Undocumented

These items are intentionally undocumented.

### Routes

- `/acs/access_groups/unmanaged`: No undocumented message provided
- `/acs/credential_pools`: No undocumented message provided
- `/acs/credential_provisioning_automations`: No undocumented message provided
- `/acs/credentials/unmanaged`: No undocumented message provided
- `/acs/users/unmanaged`: No undocumented message provided
- `/bridges`: No undocumented message provided
- `/locks/simulate`: No undocumented message provided
- `/networks`: No undocumented message provided
- `/seam/bridge/v1/bridge_client_sessions`: No undocumented message provided
- `/seam/bridge/v1/bridge_connected_systems`: No undocumented message provided
- `/seam/instant_key/v1/client_sessions`: No undocumented message provided
- `/seam/mobile_sdk/v1/acs/credentials`: No undocumented message provided
- `/seam/mobile_sdk/v1/phone_sessions`: No undocumented message provided
- `/seam/partner/v1/building_blocks/spaces`: No undocumented message provided
- `/seam/partner/v1/resources`: No undocumented message provided
- `/unstable_access_grants`: No undocumented message provided
- `/unstable_access_methods`: No undocumented message provided
- `/unstable_locations`: No undocumented message provided
- `/unstable_partner/building_blocks`: No undocumented message provided
- `/unstable_partner/resources`: No undocumented message provided

### Resources

- `acs_credential_pool`: Will be removed.
- `acs_credential_provisioning_automation`: Will be removed.
- `bridge_client_session`: Seam Bridge Client only.
- `bridge_connected_systems`: Seam Bridge Client only.
- `instant_key`: Unreleased.
- `location`: Will be removed.
- `magic_link`: Unreleased.
- `partner_resource`: Unreleased.
- `phone_session`: Seam Mobile SDK only.
- `unmanaged_acs_access_group`: Unreleased.
- `unmanaged_acs_credential`: Unreleased.
- `unmanaged_acs_user`: Unreleased.

### Resource properties

- `acs_user.last_successful_sync_at`: Only used internally.
- `connect_webview.accepted_devices`: Unused. Will be removed.
- `connect_webview.any_device_allowed`: Unused. Will be removed.
- `unmanaged_acs_user.last_successful_sync_at`: Only used internally.

### Namespaces

- `/seam/bridge/v1`: No undocumented message provided
- `/seam/instant_key/v1`: No undocumented message provided
- `/seam/mobile_sdk/v1/acs`: No undocumented message provided
- `/seam/mobile_sdk/v1`: No undocumented message provided
- `/seam/partner/v1/building_blocks`: No undocumented message provided
- `/seam/partner/v1`: No undocumented message provided
- `/unstable_partner`: No undocumented message provided

### Endpoints

- `/acs/access_groups/unmanaged/get`: No unmanaged access groups are currently implemented.
- `/acs/access_groups/unmanaged/list`: No unmanaged access groups are currently implemented.
- `/acs/credential_pools/list`: Replaced by enrollment automations.
- `/acs/credential_provisioning_automations/launch`: Replaced by enrollment automations.
- `/acs/credentials/create_offline_code`: Unreleased.
- `/acs/credentials/unmanaged/get`: No unmanaged credentials are currently implemented.
- `/acs/credentials/unmanaged/list`: No unmanaged credentials are currently implemented.
- `/acs/users/unmanaged/get`: No unmanaged users are currently implemented.
- `/acs/users/unmanaged/list`: No unmanaged users are currently implemented.
- `/bridges/get`: Not yet for customer use.
- `/bridges/list`: Not yet for customer use.
- `/devices/delete`: Deleting a device is no longer supported and will be removed.
- `/locks/simulate/keypad_code_entry`: Unreleased.
- `/locks/simulate/manual_lock_via_keypad`: Unreleased.
- `/networks/get`: Deprecated.
- `/networks/list`: Deprecated.
- `/seam/bridge/v1/bridge_client_sessions/create`: Seam Bridge client only.
- `/seam/bridge/v1/bridge_client_sessions/get`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_client_sessions/refresh_telemetry_token`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_client_sessions/regenerate_pairing_code`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_client_sessions/report_status`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_connected_systems/list`: Seam Bridge Client only.
- `/seam/instant_key/v1/client_sessions/exchange_short_code`: Seam Instant Key only.
- `/seam/mobile_sdk/v1/acs/credentials/list`: Mobile SDK only.
- `/seam/mobile_sdk/v1/phone_sessions/get_or_create`: Mobile SDK only.
- `/seam/partner/v1/building_blocks/spaces/auto_map`: Partner building blocks/UI only.
- `/seam/partner/v1/resources/list`: Partner building blocks/UI only.
- `/thermostats/get`: Will be removed.
- `/unstable_access_grants/create`: Unreleased.
- `/unstable_access_grants/delete`: Unreleased.
- `/unstable_access_grants/get`: Unreleased.
- `/unstable_access_grants/list`: Unreleased.
- `/unstable_access_methods/delete`: Unreleased.
- `/unstable_access_methods/get`: Unreleased.
- `/unstable_access_methods/list`: Unreleased.
- `/unstable_locations/add_acs_entrances`: Experimental locations.
- `/unstable_locations/add_devices`: Experimental locations.
- `/unstable_locations/create`: Experimental locations.
- `/unstable_locations/delete`: Experimental locations.
- `/unstable_locations/get`: Experimental locations.
- `/unstable_locations/list`: Experimental locations.
- `/unstable_locations/remove_acs_entrances`: Experimental locations.
- `/unstable_locations/remove_devices`: Experimental locations.
- `/unstable_locations/update`: Experimental locations.
- `/unstable_partner/building_blocks/connect_accounts`: Experimental partner building blocks.
- `/unstable_partner/building_blocks/generate_magic_link`: Experimental partner building blocks.
- `/unstable_partner/building_blocks/manage_devices`: Experimental partner building blocks.
- `/unstable_partner/building_blocks/organize_spaces`: Experimental partner building blocks.
- `/unstable_partner/resources/push`: Experimental partner resources.

### Endpoint parameters

- `/access_codes/create`
    - `sync`: Only used internally.
- `/access_codes/delete`
    - `sync`: Only used internally.
- `/access_codes/update`
    - `sync`: Only used internally.
- `/access_codes/unmanaged/convert_to_managed`
    - `sync`: Only used internally.
- `/access_codes/unmanaged/delete`
    - `sync`: Only used internally.
- `/connect_webviews/create`
    - `device_selection_mode`: Not supported.
- `/connected_accounts/delete`
    - `sync`: Only used internally.
- `/devices/list`
    - `exclude_if`: Only used internally.
    - `include_if`: Only used internally.
- `/devices/unmanaged/list`
    - `exclude_if`: Only used internally.
    - `include_if`: Only used internally.
- `/locks/list`
    - `exclude_if`: Only used internally.
    - `include_if`: Only used internally.
- `/locks/lock_door`
    - `sync`: Only used internally.
- `/locks/unlock_door`
    - `sync`: Only used internally.
- `/noise_sensors/list`
    - `exclude_if`: Only used internally.
    - `include_if`: Only used internally.
- `/noise_sensors/noise_thresholds/create`
    - `sync`: Only used internally.
- `/noise_sensors/noise_thresholds/delete`
    - `sync`: Only used internally.
- `/noise_sensors/noise_thresholds/list`
    - `is_programmed`: Not sure if this parameter is supported or what it does.
- `/noise_sensors/noise_thresholds/update`
    - `sync`: Only used internally.
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

- `access_grant`
- `access_method`
- `acs_credential_pool`
- `acs_credential_provisioning_automation`
- `bridge_client_session`
- `bridge_connected_systems`
- `device_provider`
- `event`
- `instant_key`
- `location`
- `magic_link`
- `partner_resource`
- `phone_session`
- `space`
- `unmanaged_acs_access_group`
- `webhook`

### Resource properties

- `access_grant.location_ids`
- `acs_access_group.access_group_type`
- `acs_access_group.access_group_type_display_name`
- `acs_access_group.display_name`
- `acs_access_group.is_managed`
- `acs_credential.acs_credential_pool_id`
- `acs_credential.is_managed`
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
- `acs_system.acs_access_group_count`
- `acs_system.acs_user_count`
- `acs_system.location`
- `acs_system.system_type`
- `acs_system.system_type_display_name`
- `acs_system.visionline_metadata`
- `acs_user.email`
- `acs_user.hid_acs_system_id`
- `acs_user.is_managed`
- `bridge_client_session.bridge_client_machine_identifier_key`
- `bridge_client_session.bridge_client_name`
- `bridge_client_session.bridge_client_session_id`
- `bridge_client_session.bridge_client_session_token`
- `bridge_client_session.bridge_client_time_zone`
- `bridge_client_session.created_at`
- `bridge_client_session.errors`
- `bridge_client_session.pairing_code`
- `bridge_client_session.pairing_code_expires_at`
- `bridge_client_session.tailscale_auth_key`
- `bridge_client_session.tailscale_hostname`
- `bridge_client_session.telemetry_token`
- `bridge_client_session.telemetry_token_expires_at`
- `bridge_client_session.telemetry_url`
- `bridge_connected_systems.acs_system_display_name`
- `bridge_connected_systems.acs_system_id`
- `bridge_connected_systems.bridge_created_at`
- `bridge_connected_systems.bridge_id`
- `bridge_connected_systems.connected_account_created_at`
- `bridge_connected_systems.connected_account_id`
- `bridge_connected_systems.workspace_display_name`
- `bridge_connected_systems.workspace_id`
- `client_session.client_session_id`
- `client_session.connect_webview_ids`
- `client_session.connected_account_ids`
- `client_session.created_at`
- `client_session.customer_id`
- `client_session.device_count`
- `client_session.expires_at`
- `client_session.token`
- `client_session.user_identifier_key`
- `client_session.user_identity_id`
- `client_session.workspace_id`
- `connect_webview.accepted_devices`
- `connect_webview.any_device_allowed`
- `connect_webview.device_selection_mode`
- `device.can_hvac_cool`
- `device.can_hvac_heat`
- `device.can_hvac_heat_cool`
- `device.can_program_offline_access_codes`
- `device.can_program_online_access_codes`
- `device.can_remotely_lock`
- `device.can_remotely_unlock`
- `device.can_simulate_connection`
- `device.can_simulate_disconnection`
- `device.can_simulate_removal`
- `device.can_turn_off_hvac`
- `device_provider.can_hvac_cool`
- `device_provider.can_hvac_heat`
- `device_provider.can_hvac_heat_cool`
- `device_provider.can_program_offline_access_codes`
- `device_provider.can_program_online_access_codes`
- `device_provider.can_remotely_lock`
- `device_provider.can_remotely_unlock`
- `device_provider.can_simulate_connection`
- `device_provider.can_simulate_disconnection`
- `device_provider.can_simulate_removal`
- `device_provider.can_turn_off_hvac`
- `device_provider.device_provider_name`
- `device_provider.display_name`
- `device_provider.image_url`
- `device_provider.provider_categories`
- `event.event_type`
- `instant_key.client_session_id`
- `instant_key.created_at`
- `instant_key.expires_at`
- `instant_key.instant_key_id`
- `instant_key.instant_key_url`
- `instant_key.user_identity_id`
- `instant_key.workspace_id`
- `magic_link.building_block_type`
- `magic_link.created_at`
- `magic_link.customer_key`
- `magic_link.expires_at`
- `magic_link.url`
- `magic_link.workspace_id`
- `partner_resource.custom_metadata`
- `partner_resource.customer_key`
- `partner_resource.description`
- `partner_resource.email_address`
- `partner_resource.ends_at`
- `partner_resource.location_keys`
- `partner_resource.name`
- `partner_resource.partner_resource_key`
- `partner_resource.partner_resource_type`
- `partner_resource.phone_number`
- `partner_resource.starts_at`
- `partner_resource.user_identity_key`
- `phone_session.provider_sessions`
- `unmanaged_acs_access_group.access_group_type`
- `unmanaged_acs_access_group.access_group_type_display_name`
- `unmanaged_acs_access_group.display_name`
- `unmanaged_acs_access_group.is_managed`
- `unmanaged_acs_credential.acs_credential_pool_id`
- `unmanaged_acs_credential.is_managed`
- `unmanaged_acs_user.email`
- `unmanaged_acs_user.hid_acs_system_id`
- `unmanaged_acs_user.is_managed`
- `unmanaged_device.can_hvac_cool`
- `unmanaged_device.can_hvac_heat`
- `unmanaged_device.can_hvac_heat_cool`
- `unmanaged_device.can_program_offline_access_codes`
- `unmanaged_device.can_program_online_access_codes`
- `unmanaged_device.can_remotely_lock`
- `unmanaged_device.can_remotely_unlock`
- `unmanaged_device.can_simulate_connection`
- `unmanaged_device.can_simulate_disconnection`
- `unmanaged_device.can_simulate_removal`
- `unmanaged_device.can_turn_off_hvac`
- `unmanaged_device.is_managed`
- `user_identity.display_name`
- `user_identity.full_name`
- `webhook.event_types`
- `webhook.secret`
- `webhook.url`
- `webhook.webhook_id`
- `workspace.company_name`
- `workspace.connect_partner_name`
- `workspace.connect_webview_customization`
- `workspace.is_sandbox`
- `workspace.name`
- `workspace.workspace_id`

### Endpoints

- `/networks/get`
- `/networks/list`

### Endpoint parameters

- `/access_codes/create`
    - `attempt_for_offline_device`
    - `sync`
    - `use_offline_access_code`
- `/access_codes/create_multiple`
    - `attempt_for_offline_device`
    - `use_offline_access_code`
- `/access_codes/delete`
    - `sync`
- `/access_codes/list`
    - `customer_ids`
- `/access_codes/update`
    - `attempt_for_offline_device`
    - `sync`
    - `use_offline_access_code`
- `/access_codes/unmanaged/convert_to_managed`
    - `sync`
- `/access_codes/unmanaged/delete`
    - `sync`
- `/access_codes/unmanaged/update`
    - `is_managed`
- `/access_grants/create`
    - `location_ids`
    - `requested_access_methods`
- `/access_grants/list`
    - `location_id`
- `/acs/encoders/simulate/next_credential_scan_will_fail`
    - `error_code`
    - `acs_credential_id_on_seam`
- `/acs/entrances/list`
    - `location_id`
- `/acs/users/create`
    - `email`
- `/acs/users/update`
    - `email`
    - `hid_acs_system_id`
- `/client_sessions/create`
    - `customer_id`
    - `customer_key`
- `/connect_webviews/create`
    - `customer_id`
    - `device_selection_mode`
- `/connect_webviews/list`
    - `customer_ids`
- `/connected_accounts/delete`
    - `sync`
- `/connected_accounts/list`
    - `customer_ids`
- `/devices/list`
    - `customer_ids`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/devices/update`
    - `properties`
- `/devices/unmanaged/list`
    - `customer_ids`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/locks/list`
    - `customer_ids`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/locks/lock_door`
    - `sync`
- `/locks/unlock_door`
    - `sync`
- `/networks/get`
    - `network_id`
- `/noise_sensors/list`
    - `customer_ids`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/noise_sensors/noise_thresholds/create`
    - `sync`
- `/noise_sensors/noise_thresholds/delete`
    - `sync`
- `/noise_sensors/noise_thresholds/update`
    - `sync`
- `/thermostats/cool`
    - `sync`
- `/thermostats/heat`
    - `sync`
- `/thermostats/heat_cool`
    - `sync`
- `/thermostats/list`
    - `customer_ids`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/thermostats/off`
    - `sync`
- `/thermostats/set_fan_mode`
    - `fan_mode`
    - `sync`
- `/thermostats/set_hvac_mode`
    - `hvac_mode_setting`
- `/unstable_access_grants/create`
    - `location_ids`
    - `requested_access_methods`
- `/unstable_access_grants/list`
    - `location_id`
- `/unstable_partner/resources/push`
    - `custom_metadata`
    - `description`
    - `email_address`
    - `ends_at`
    - `location_keys`
    - `name`
    - `phone_number`
    - `starts_at`
    - `user_identity_key`
- `/user_identities/get`
    - `user_identity_key`
- `/workspaces/create`
    - `webview_logo_shape`
    - `webview_primary_button_color`
    - `webview_primary_button_text_color`
    - `webview_success_message`

## Draft

These items have been marked as draft.

### Routes

- `/access_grants`: No draft message provided
- `/access_methods`: No draft message provided
- `/spaces`: No draft message provided

### Endpoints

- `/access_grants/create`: Early access.
- `/access_grants/delete`: Early access.
- `/access_grants/get`: Early access.
- `/access_grants/list`: Early access.
- `/access_methods/delete`: Early access.
- `/access_methods/get`: Early access.
- `/access_methods/list`: Early access.
- `/spaces/add_acs_entrances`: Early access.
- `/spaces/add_devices`: Early access.
- `/spaces/create`: Early access.
- `/spaces/delete`: Early access.
- `/spaces/get`: Early access.
- `/spaces/list`: Early access.
- `/spaces/remove_acs_entrances`: Early access.
- `/spaces/remove_devices`: Early access.
- `/spaces/update`: Early access.

## Deprecated

These items are deprecated.

### Resource properties

- `access_grant.location_ids`: Use `space_ids`.
- `acs_access_group.access_group_type`: Use `external_type`.
- `acs_access_group.access_group_type_display_name`: Use `external_type_display_name`.
- `acs_system.connected_account_ids`: Use `connected_account_id`.
- `acs_system.system_type`: Use `external_type`.
- `acs_system.system_type_display_name`: Use `external_type_display_name`.
- `acs_user.email`: use email_address.
- `connect_webview.accepted_devices`: Unused. Will be removed.
- `connect_webview.any_device_allowed`: Unused. Will be removed.
- `unmanaged_acs_access_group.access_group_type`: Use `external_type`.
- `unmanaged_acs_access_group.access_group_type_display_name`: Use `external_type_display_name`.
- `unmanaged_acs_user.email`: use email_address.
- `workspace.connect_partner_name`: use company_name

### Endpoint parameters

- `/access_grants/create`
    - `location_ids`: Use `space_ids`.
- `/access_grants/list`
    - `location_id`: Use `space_id`.
- `/acs/entrances/list`
    - `location_id`: Use `space_id`.
- `/acs/users/create`
    - `email`: use email_address.
- `/acs/users/update`
    - `email`: use email_address.
- `/client_sessions/create`
    - `user_identity_ids`: Use `user_identity_id`.
- `/client_sessions/get_or_create`
    - `user_identity_ids`: Use `user_identity_id`.
- `/client_sessions/grant_access`
    - `user_identity_ids`: Use `user_identity_id`.
- `/devices/list`
    - `unstable_location_id`: Use `space_id`.
- `/devices/unmanaged/list`
    - `unstable_location_id`: Use `space_id`.
- `/locks/list`
    - `unstable_location_id`: Use `space_id`.
- `/noise_sensors/list`
    - `unstable_location_id`: Use `space_id`.
- `/thermostats/create_climate_preset`
    - `manual_override_allowed`: Use 'thermostat_schedule.is_override_allowed'
- `/thermostats/list`
    - `unstable_location_id`: Use `space_id`.
- `/thermostats/set_fan_mode`
    - `fan_mode`: Use `fan_mode_setting` instead.
- `/thermostats/update_climate_preset`
    - `manual_override_allowed`: Use 'thermostat_schedule.is_override_allowed'
- `/unstable_access_grants/create`
    - `location_ids`: Use `space_ids`.
- `/unstable_access_grants/list`
    - `location_id`: Use `space_id`.
- `/workspaces/create`
    - `connect_partner_name`: use company_name
    - `webview_logo_shape`: Use `connect_webview_customization.webview_logo_shape` instead.
    - `webview_primary_button_color`: Use `connect_webview_customization.webview_primary_button_color` instead.
    - `webview_primary_button_text_color`: Use `connect_webview_customization.webview_primary_button_text_color` instead.
    - `webview_success_message`: Use `connect_webview_customization.webview_success_message` instead.

### Extra response keys

- `/access_codes/create`
    - `action_attempt`
- `/access_codes/pull_backup_access_code`
    - `backup_access_code`
- `/events/get`
    - `message`
- `/locks/get`
    - `lock`
- `/locks/list`
    - `locks`
- `/noise_sensors/list`
    - `noise_sensors`
- `/noise_sensors/noise_thresholds/create`
    - `action_attempt`
- `/thermostats/list`
    - `thermostats`
- `/user_identities/list_accessible_devices`
    - `accessible_devices`
### Missing resources

- `/bridges/get`: `bridge`
- `/bridges/list`: `bridges`
- `/networks/get`: `network`
- `/networks/list`: `networks`
- `/seam/partner/v1/building_blocks/spaces/auto_map`: `spaces`

### Endpoints without code samples

- `/access_codes/create`
- `/access_codes/create_multiple`
- `/access_codes/delete`
- `/access_codes/generate_code`
- `/access_codes/get`
- `/access_codes/list`
- `/access_codes/pull_backup_access_code`
- `/access_codes/report_device_constraints`
- `/access_codes/update`
- `/access_codes/update_multiple`
- `/access_codes/simulate/create_unmanaged_access_code`
- `/access_codes/unmanaged/convert_to_managed`
- `/access_codes/unmanaged/delete`
- `/access_codes/unmanaged/get`
- `/access_codes/unmanaged/list`
- `/access_codes/unmanaged/update`
- `/access_grants/create`
- `/access_grants/delete`
- `/access_grants/get`
- `/access_grants/list`
- `/access_methods/delete`
- `/access_methods/get`
- `/access_methods/list`
- `/acs/encoders/encode_access_method`
- `/acs/encoders/encode_credential`
- `/acs/encoders/get`
- `/acs/encoders/list`
- `/acs/encoders/scan_credential`
- `/acs/encoders/simulate/next_credential_encode_will_fail`
- `/acs/encoders/simulate/next_credential_encode_will_succeed`
- `/acs/encoders/simulate/next_credential_scan_will_fail`
- `/acs/encoders/simulate/next_credential_scan_will_succeed`
- `/acs/entrances/grant_access`
- `/acs/users/list_accessible_entrances`
- `/acs/users/revoke_access_to_all_entrances`
- `/action_attempts/get`
- `/action_attempts/list`
- `/client_sessions/create`
- `/client_sessions/delete`
- `/client_sessions/get`
- `/client_sessions/get_or_create`
- `/client_sessions/grant_access`
- `/client_sessions/list`
- `/client_sessions/revoke`
- `/connect_webviews/create`
- `/connect_webviews/delete`
- `/connect_webviews/get`
- `/connect_webviews/list`
- `/devices/get`
- `/devices/list`
- `/devices/list_device_providers`
- `/devices/update`
- `/devices/simulate/connect`
- `/devices/simulate/disconnect`
- `/devices/simulate/remove`
- `/devices/unmanaged/get`
- `/devices/unmanaged/list`
- `/devices/unmanaged/update`
- `/events/get`
- `/events/list`
- `/locks/get`
- `/locks/list`
- `/locks/lock_door`
- `/locks/unlock_door`
- `/noise_sensors/list`
- `/noise_sensors/noise_thresholds/create`
- `/noise_sensors/noise_thresholds/delete`
- `/noise_sensors/noise_thresholds/get`
- `/noise_sensors/noise_thresholds/list`
- `/noise_sensors/noise_thresholds/update`
- `/noise_sensors/simulate/trigger_noise_threshold`
- `/phones/deactivate`
- `/phones/get`
- `/phones/list`
- `/phones/simulate/create_sandbox_phone`
- `/spaces/add_acs_entrances`
- `/spaces/add_devices`
- `/spaces/create`
- `/spaces/delete`
- `/spaces/get`
- `/spaces/list`
- `/spaces/remove_acs_entrances`
- `/spaces/remove_devices`
- `/spaces/update`
- `/thermostats/update_weekly_program`
- `/thermostats/daily_programs/create`
- `/thermostats/daily_programs/delete`
- `/thermostats/daily_programs/update`
- `/thermostats/simulate/hvac_mode_adjusted`
- `/thermostats/simulate/temperature_reached`
- `/user_identities/update`
- `/webhooks/create`
- `/webhooks/delete`
- `/webhooks/get`
- `/webhooks/list`
- `/webhooks/update`
- `/workspaces/create`
- `/workspaces/get`
- `/workspaces/list`
- `/workspaces/reset_sandbox`
- `/workspaces/update`

### Resources without resource samples

- `access_code`
- `access_grant`
- `access_method`
- `acs_access_group`
- `acs_credential`
- `acs_encoder`
- `acs_entrance`
- `acs_user`
- `client_session`
- `connect_webview`
- `connected_account`
- `device`
- `device_provider`
- `enrollment_automation`
- `event`
- `noise_threshold`
- `phone`
- `space`
- `thermostat_daily_program`
- `thermostat_schedule`
- `unmanaged_access_code`
- `unmanaged_device`
- `user_identity`
- `webhook`
- `workspace`
