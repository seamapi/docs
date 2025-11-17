# Documentation Report

## Undocumented

These items are intentionally undocumented.

### Routes

- `/acs/access_groups/unmanaged`: No undocumented message provided
- `/acs/credential_pools`: No undocumented message provided
- `/acs/credential_provisioning_automations`: No undocumented message provided
- `/acs/credentials/unmanaged`: No undocumented message provided
- `/acs/users/unmanaged`: No undocumented message provided
- `/bridges`: No undocumented message provided
- `/seam/bridge/v1/bridge_client_sessions`: No undocumented message provided
- `/seam/bridge/v1/bridge_connected_systems`: No undocumented message provided
- `/seam/console/v1`: No undocumented message provided
- `/seam/console/v1/timelines`: No undocumented message provided
- `/seam/customer/v1/access_grants`: No undocumented message provided
- `/seam/customer/v1/automation_runs`: No undocumented message provided
- `/seam/customer/v1/automations`: No undocumented message provided
- `/seam/customer/v1/connectors`: No undocumented message provided
- `/seam/customer/v1/events`: No undocumented message provided
- `/seam/customer/v1/portals`: No undocumented message provided
- `/seam/customer/v1/reservations`: No undocumented message provided
- `/seam/customer/v1/settings`: No undocumented message provided
- `/seam/customer/v1/spaces`: No undocumented message provided
- `/seam/customer/v1/staff_members`: No undocumented message provided
- `/seam/instant_key/v1/client_sessions`: No undocumented message provided
- `/seam/instant_key/v1/preview`: No undocumented message provided
- `/seam/mobile_sdk/v1/acs/credentials`: No undocumented message provided
- `/seam/mobile_sdk/v1/phone_sessions`: No undocumented message provided
- `/seam/mobile_sdk/v1`: No undocumented message provided
- `/seam/partner/v1/building_blocks/spaces`: No undocumented message provided
- `/unstable_partner/building_blocks`: No undocumented message provided
- `/user_identities/enrollment_automations`: No undocumented message provided
- `/workspaces/customization_profiles`: No undocumented message provided

### Resources

- `acs_credential_pool`: Deprecated. Will be removed.
- `acs_credential_provisioning_automation`: Deprecated. Will be removed.
- `bridge_client_session`: Seam Bridge client only.
- `bridge_connected_systems`: Seam Bridge client only.
- `customization_profile`: Unreleased.
- `enrollment_automation`: Will be removed.
- `magic_link`: Unreleased.
- `phone_session`: Seam Mobile SDK only.
- `unmanaged_acs_access_group`: Unreleased.
- `unmanaged_acs_credential`: Unreleased.
- `unmanaged_acs_user`: Unreleased.

### Resource properties

- `acs_user.last_successful_sync_at`: Only used internally.
- `connect_webview.accepted_devices`: Unused. Will be removed.
- `connect_webview.any_device_allowed`: Unused. Will be removed.
- `space.parent_space_id`: Only used internally.
- `space.parent_space_key`: Only used internally.
- `unmanaged_acs_user.last_successful_sync_at`: Only used internally.

### Namespaces

- `/seam/bridge/v1`: No undocumented message provided
- `/seam/console`: No undocumented message provided
- `/seam/customer/v1`: No undocumented message provided
- `/seam/instant_key/v1`: No undocumented message provided
- `/seam/mobile_sdk`: No undocumented message provided
- `/seam/partner/v1/building_blocks`: No undocumented message provided
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
- `/seam/bridge/v1/bridge_client_sessions/create`: Seam Bridge client only.
- `/seam/bridge/v1/bridge_client_sessions/get`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_client_sessions/refresh_telemetry_token`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_client_sessions/regenerate_pairing_code`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_client_sessions/report_status`: Seam Bridge Client only.
- `/seam/bridge/v1/bridge_connected_systems/list`: Seam Bridge Client only.
- `/seam/console/v1/get_resource_locator`: Internal endpoint for Console
- `/seam/console/v1/timelines/get`: Internal endpoint for Console
- `/seam/customer/v1/access_grants/list`: Internal endpoint for customer portals.
- `/seam/customer/v1/automation_runs/list`: Internal endpoint for customer portals.
- `/seam/customer/v1/automations/delete`: Internal endpoint for customer portals.
- `/seam/customer/v1/automations/get`: Internal endpoint for customer portals.
- `/seam/customer/v1/automations/update`: Internal endpoint for customer portals.
- `/seam/customer/v1/connectors/authorize`: Internal endpoint for OAuth authorization.
- `/seam/customer/v1/connectors/connector_types`: Internal endpoint for Console.
- `/seam/customer/v1/connectors/create`: Internal endpoint for Console.
- `/seam/customer/v1/connectors/delete`: Internal endpoint for Console.
- `/seam/customer/v1/connectors/list`: Internal endpoint for Console.
- `/seam/customer/v1/connectors/sync`: Only used internally.
- `/seam/customer/v1/connectors/update`: Internal endpoint for Console.
- `/seam/customer/v1/events/list`: Internal endpoint for customer portals.
- `/seam/customer/v1/portals/get`: Internal endpoint for customer portals.
- `/seam/customer/v1/reservations/get`: Internal endpoint for customer portals.
- `/seam/customer/v1/reservations/list`: Internal endpoint for customer portals.
- `/seam/customer/v1/settings/get`: Internal endpoint for customer portals.
- `/seam/customer/v1/settings/update`: Internal endpoint for customer portals.
- `/seam/customer/v1/spaces/create`: Only used internally.
- `/seam/customer/v1/spaces/list`: Only used internally.
- `/seam/customer/v1/spaces/list_reservations`: Internal endpoint for customer portals.
- `/seam/customer/v1/staff_members/get`: Internal endpoint for customer portals.
- `/seam/customer/v1/staff_members/list`: Internal endpoint for customer portals.
- `/seam/instant_key/v1/client_sessions/exchange_short_code`: Seam Instant Key only.
- `/seam/instant_key/v1/preview/get`: Seam Instant Key only.
- `/seam/mobile_sdk/v1/acs/credentials/list`: Mobile SDK only.
- `/seam/mobile_sdk/v1/phone_sessions/get_or_create`: Mobile SDK only.
- `/seam/mobile_sdk/v1/report_salto_space_audit_trail`: Mobile SDK only.
- `/seam/partner/v1/building_blocks/spaces/auto_map`: Partner building blocks/UI only.
- `/thermostats/get`: Will be removed.
- `/unstable_partner/building_blocks/connect_accounts`: Experimental partner building blocks.
- `/unstable_partner/building_blocks/generate_magic_link`: Experimental partner building blocks.
- `/unstable_partner/building_blocks/manage_devices`: Experimental partner building blocks.
- `/unstable_partner/building_blocks/organize_spaces`: Experimental partner building blocks.
- `/user_identities/enrollment_automations/delete`: Will be removed.
- `/user_identities/enrollment_automations/get`: Will be removed.
- `/user_identities/enrollment_automations/launch`: Will be removed.
- `/user_identities/enrollment_automations/list`: Will be removed.
- `/workspaces/find_anything`: Unreleased.
- `/workspaces/customization_profiles/create`: Unreleased.
- `/workspaces/customization_profiles/get`: Unreleased.
- `/workspaces/customization_profiles/list`: Unreleased.
- `/workspaces/customization_profiles/update`: Unreleased.
- `/workspaces/customization_profiles/upload_images`: Internal form-data endpoint for Console and Customer Portal.

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
- `/acs/credentials/create`
    - `hotek_metadata`: in development
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
- `/seam/customer/v1/spaces/list`
    - `connected_account_id`: Only used internally.
- `/spaces/list`
    - `connected_account_id`: Only used internally.
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
- `device_provider`
- `event`
- `unmanaged_acs_access_group`

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
- `connect_webview.accepted_devices`
- `connect_webview.any_device_allowed`
- `connect_webview.device_selection_mode`
- `customization_profile.created_at`
- `customization_profile.customer_portal_theme`
- `customization_profile.customization_profile_id`
- `customization_profile.logo_url`
- `customization_profile.name`
- `customization_profile.primary_color`
- `customization_profile.secondary_color`
- `customization_profile.workspace_id`
- `device.can_hvac_cool`
- `device.can_hvac_heat`
- `device.can_hvac_heat_cool`
- `device.can_program_offline_access_codes`
- `device.can_program_online_access_codes`
- `device.can_program_thermostat_programs_as_different_each_day`
- `device.can_program_thermostat_programs_as_same_each_day`
- `device.can_program_thermostat_programs_as_weekday_weekend`
- `device.can_remotely_lock`
- `device.can_remotely_unlock`
- `device.can_run_thermostat_programs`
- `device.can_simulate_connection`
- `device.can_simulate_disconnection`
- `device.can_simulate_hub_connection`
- `device.can_simulate_hub_disconnection`
- `device.can_simulate_paid_subscription`
- `device.can_simulate_removal`
- `device.can_turn_off_hvac`
- `device.can_unlock_with_code`
- `device_provider.can_hvac_cool`
- `device_provider.can_hvac_heat`
- `device_provider.can_hvac_heat_cool`
- `device_provider.can_program_offline_access_codes`
- `device_provider.can_program_online_access_codes`
- `device_provider.can_program_thermostat_programs_as_different_each_day`
- `device_provider.can_program_thermostat_programs_as_same_each_day`
- `device_provider.can_program_thermostat_programs_as_weekday_weekend`
- `device_provider.can_remotely_lock`
- `device_provider.can_remotely_unlock`
- `device_provider.can_run_thermostat_programs`
- `device_provider.can_simulate_connection`
- `device_provider.can_simulate_disconnection`
- `device_provider.can_simulate_hub_connection`
- `device_provider.can_simulate_hub_disconnection`
- `device_provider.can_simulate_paid_subscription`
- `device_provider.can_simulate_removal`
- `device_provider.can_turn_off_hvac`
- `device_provider.can_unlock_with_code`
- `device_provider.device_provider_name`
- `device_provider.display_name`
- `device_provider.image_url`
- `device_provider.provider_categories`
- `event.event_type`
- `space.parent_space_id`
- `space.parent_space_key`
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
- `unmanaged_device.can_program_thermostat_programs_as_different_each_day`
- `unmanaged_device.can_program_thermostat_programs_as_same_each_day`
- `unmanaged_device.can_program_thermostat_programs_as_weekday_weekend`
- `unmanaged_device.can_remotely_lock`
- `unmanaged_device.can_remotely_unlock`
- `unmanaged_device.can_run_thermostat_programs`
- `unmanaged_device.can_simulate_connection`
- `unmanaged_device.can_simulate_disconnection`
- `unmanaged_device.can_simulate_hub_connection`
- `unmanaged_device.can_simulate_hub_disconnection`
- `unmanaged_device.can_simulate_paid_subscription`
- `unmanaged_device.can_simulate_removal`
- `unmanaged_device.can_turn_off_hvac`
- `unmanaged_device.can_unlock_with_code`
- `unmanaged_device.is_managed`
- `user_identity.display_name`
- `user_identity.full_name`
- `workspace.connect_partner_name`
- `workspace.connect_webview_customization`

### Endpoints

- `/seam/instant_key/v1/preview/get`

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
- `/access_grants/get_related`
    - `exclude`
    - `include`
- `/access_grants/list`
    - `location_id`
- `/access_methods/get_related`
    - `exclude`
    - `include`
- `/acs/credentials/create`
    - `hotek_metadata`
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
- `/connect_webviews/create`
    - `device_selection_mode`
- `/connected_accounts/delete`
    - `sync`
- `/customers/create_portal`
    - `features`
    - `customer_data`
- `/devices/list`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/devices/update`
    - `properties`
- `/devices/simulate/paid_subscription`
    - `device_id`
    - `is_expired`
- `/devices/unmanaged/list`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/locks/list`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/locks/lock_door`
    - `sync`
- `/locks/unlock_door`
    - `sync`
- `/noise_sensors/list`
    - `exclude_if`
    - `include_if`
    - `unstable_location_id`
- `/noise_sensors/noise_thresholds/create`
    - `sync`
- `/noise_sensors/noise_thresholds/delete`
    - `sync`
- `/noise_sensors/noise_thresholds/update`
    - `sync`
- `/seam/mobile_sdk/v1/report_salto_space_audit_trail`
    - `acs_system_id`
    - `salto_space_metadata`
- `/spaces/get_related`
    - `exclude`
    - `include`
- `/thermostats/cool`
    - `sync`
- `/thermostats/heat`
    - `sync`
- `/thermostats/heat_cool`
    - `sync`
- `/thermostats/list`
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
- `/user_identities/generate_instant_key`
    - `customization_profile_id`
- `/user_identities/get`
    - `user_identity_key`
- `/workspaces/create`
    - `webview_logo_shape`
    - `webview_primary_button_color`
    - `webview_primary_button_text_color`
    - `webview_success_message`
- `/workspaces/find_anything`
    - `search`
- `/workspaces/customization_profiles/create`
    - `customer_portal_theme`
    - `name`
    - `primary_color`
    - `secondary_color`
- `/workspaces/customization_profiles/get`
    - `customization_profile_id`
- `/workspaces/customization_profiles/update`
    - `customer_portal_theme`
    - `customization_profile_id`
    - `name`
    - `primary_color`
    - `secondary_color`

## Draft

These items have been marked as draft.

### Routes

- `/access_grants`: No draft message provided
- `/access_grants/unmanaged`: No draft message provided
- `/access_methods/unmanaged`: No draft message provided
- `/spaces`: No draft message provided

### Endpoints

- `/access_grants/create`: Early access.
- `/access_grants/delete`: Early access.
- `/access_grants/get`: Early access.
- `/access_grants/get_related`: Early access.
- `/access_grants/list`: Early access.
- `/access_grants/request_access_methods`: Early access.
- `/access_grants/update`: Early access.
- `/access_grants/unmanaged/get`: Early access.
- `/access_grants/unmanaged/list`: Early access.
- `/access_grants/unmanaged/update`: Early access.
- `/access_methods/delete`: Early access.
- `/access_methods/get`: Early access.
- `/access_methods/get_related`: Early access.
- `/access_methods/list`: Early access.
- `/access_methods/unmanaged/get`: Early access.
- `/access_methods/unmanaged/list`: Early access.
- `/seam/customer/v1/spaces/create`: Early access.
- `/seam/customer/v1/spaces/list`: Early access.
- `/spaces/add_acs_entrances`: Early access.
- `/spaces/add_devices`: Early access.
- `/spaces/create`: Early access.
- `/spaces/delete`: Early access.
- `/spaces/get`: Early access.
- `/spaces/get_related`: Early access.
- `/spaces/list`: Early access.
- `/spaces/remove_acs_entrances`: Early access.
- `/spaces/remove_devices`: Early access.
- `/spaces/update`: Early access.

### Endpoint parameters

- `/seam/customer/v1/spaces/list`
    - `connected_account_id`: Needs review.
- `/spaces/list`
    - `connected_account_id`: Needs review.

## Deprecated

These items are deprecated.

### Routes

- `/acs/credential_pools`: No deprecated message provided
- `/acs/credential_provisioning_automations`: No deprecated message provided

### Resources

- `acs_credential_pool`: Not used.
- `acs_credential_provisioning_automation`: Not used.

### Resource properties

- `access_grant.location_ids`: Use `space_ids`.
- `acs_access_group.access_group_type`: Use `external_type`.
- `acs_access_group.access_group_type_display_name`: Use `external_type_display_name`.
- `acs_system.connected_account_ids`: Use `connected_account_id`.
- `acs_system.system_type`: Use `external_type`.
- `acs_system.system_type_display_name`: Use `external_type_display_name`.
- `acs_user.email`: use email_address.
- `client_session.user_identity_ids`: Use `user_identity_id` instead.
- `connect_webview.accepted_devices`: Unused. Will be removed.
- `connect_webview.any_device_allowed`: Unused. Will be removed.
- `unmanaged_acs_access_group.access_group_type`: Use `external_type`.
- `unmanaged_acs_access_group.access_group_type_display_name`: Use `external_type_display_name`.
- `unmanaged_acs_user.email`: use email_address.
- `workspace.connect_partner_name`: Use `company_name` instead.

### Endpoints

- `/acs/credential_pools/list`: Use `/user_identities/enrollment_automations/list` instead.
- `/acs/credential_provisioning_automations/launch`: Use `/user_identities/enrollment_automations/launch` instead.
- `/devices/delete`: Deleting a device is no longer supported and will be removed.
- `/locks/get`: Use `/devices/get` instead.
- `/thermostats/get`: Use `/devices/get` instead.

### Endpoint parameters

- `/access_codes/create`
    - `use_offline_access_code`: Use `is_offline_access_code` instead.
- `/access_codes/create_multiple`
    - `use_offline_access_code`: Use `is_offline_access_code` instead.
- `/access_codes/update`
    - `use_offline_access_code`: Use `is_offline_access_code` instead.
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
    - `user_identity_ids`: Use `user_identity_id` instead.
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
- `/workspaces/create`
    - `connect_partner_name`: Use `company_name` instead.
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
- `/seam/customer/v1/staff_members/get`
    - `access_grant`
    - `spaces`
- `/thermostats/list`
    - `thermostats`
- `/user_identities/list_accessible_devices`
    - `accessible_devices`
### Missing resources

- `/access_grants/get_related`: `batch`
- `/access_grants/unmanaged/get`: `access_grant`
- `/access_grants/unmanaged/list`: `access_grants`
- `/access_methods/get_related`: `batch`
- `/access_methods/unmanaged/get`: `access_method`
- `/access_methods/unmanaged/list`: `access_methods`
- `/bridges/get`: `bridge`
- `/bridges/list`: `bridges`
- `/seam/console/v1/get_resource_locator`: `resource_locator`
- `/seam/console/v1/timelines/get`: `timeline`
- `/seam/customer/v1/automation_runs/list`: `automation_runs`
- `/seam/customer/v1/connectors/authorize`: `connector_authorize`
- `/seam/customer/v1/connectors/connector_types`: `connector_types`
- `/seam/customer/v1/connectors/create`: `connector`
- `/seam/customer/v1/connectors/delete`: `connector`
- `/seam/customer/v1/connectors/list`: `connectors`
- `/seam/customer/v1/connectors/sync`: `connector_sync`
- `/seam/customer/v1/connectors/update`: `connector`
- `/seam/customer/v1/portals/get`: `customer_portal`
- `/seam/customer/v1/reservations/get`: `reservation`
- `/seam/customer/v1/reservations/list`: `reservations`
- `/seam/customer/v1/settings/get`: `business_vertical`
- `/seam/customer/v1/spaces/list_reservations`: `reservations`
- `/seam/customer/v1/staff_members/get`: `staff_member`
- `/seam/customer/v1/staff_members/list`: `staff_members`
- `/seam/instant_key/v1/preview/get`: `instant_key_preview`
- `/seam/partner/v1/building_blocks/spaces/auto_map`: `spaces`
- `/spaces/get_related`: `batch`
- `/user_identities/unmanaged/get`: `user_identity`
- `/user_identities/unmanaged/list`: `user_identities`
- `/workspaces/find_anything`: `batch`
### Unused Resources

- `staff_member`

### Endpoints without code samples

- `/access_grants/get_related`
- `/access_grants/request_access_methods`
- `/access_grants/unmanaged/get`
- `/access_grants/unmanaged/list`
- `/access_grants/unmanaged/update`
- `/access_methods/encode`
- `/access_methods/get_related`
- `/access_methods/unmanaged/get`
- `/access_methods/unmanaged/list`
- `/connected_accounts/simulate/disconnect`
- `/customers/create_portal`
- `/customers/delete_data`
- `/customers/push_data`
- `/devices/simulate/paid_subscription`
- `/instant_keys/delete`
- `/instant_keys/get`
- `/instant_keys/list`
- `/locks/get`
- `/spaces/get_related`
- `/user_identities/unmanaged/get`
- `/user_identities/unmanaged/list`
- `/user_identities/unmanaged/update`

### Resources without resource samples

- `staff_member`
- `event: access_code.created`
- `event: access_code.changed`
- `event: access_code.scheduled_on_device`
- `event: access_code.set_on_device`
- `event: access_code.removed_from_device`
- `event: access_code.delay_in_setting_on_device`
- `event: access_code.failed_to_set_on_device`
- `event: access_code.deleted`
- `event: access_code.delay_in_removing_from_device`
- `event: access_code.failed_to_remove_from_device`
- `event: access_code.modified_external_to_seam`
- `event: access_code.deleted_external_to_seam`
- `event: access_code.backup_access_code_pulled`
- `event: access_code.unmanaged.converted_to_managed`
- `event: access_code.unmanaged.failed_to_convert_to_managed`
- `event: access_code.unmanaged.created`
- `event: access_code.unmanaged.removed`
- `event: access_grant.created`
- `event: access_grant.deleted`
- `event: access_grant.access_granted_to_all_doors`
- `event: access_grant.access_granted_to_door`
- `event: access_grant.access_to_door_lost`
- `event: access_grant.access_times_changed`
- `event: access_method.issued`
- `event: access_method.revoked`
- `event: access_method.card_encoding_required`
- `event: access_method.deleted`
- `event: access_method.reissued`
- `event: acs_system.connected`
- `event: acs_system.added`
- `event: acs_system.disconnected`
- `event: acs_credential.deleted`
- `event: acs_credential.issued`
- `event: acs_credential.reissued`
- `event: acs_credential.invalidated`
- `event: acs_user.created`
- `event: acs_user.deleted`
- `event: acs_encoder.added`
- `event: acs_encoder.removed`
- `event: acs_access_group.deleted`
- `event: acs_entrance.added`
- `event: acs_entrance.removed`
- `event: client_session.deleted`
- `event: connected_account.connected`
- `event: connected_account.created`
- `event: connected_account.successful_login`
- `event: connected_account.disconnected`
- `event: connected_account.completed_first_sync`
- `event: connected_account.deleted`
- `event: connected_account.completed_first_sync_after_reconnection`
- `event: connected_account.reauthorization_requested`
- `event: action_attempt.lock_door.succeeded`
- `event: action_attempt.lock_door.failed`
- `event: action_attempt.unlock_door.succeeded`
- `event: action_attempt.unlock_door.failed`
- `event: connect_webview.login_succeeded`
- `event: connect_webview.login_failed`
- `event: device.added`
- `event: device.converted_to_unmanaged`
- `event: device.unmanaged.converted_to_managed`
- `event: device.unmanaged.connected`
- `event: device.disconnected`
- `event: device.unmanaged.disconnected`
- `event: device.tampered`
- `event: device.low_battery`
- `event: device.battery_status_changed`
- `event: device.removed`
- `event: device.deleted`
- `event: device.third_party_integration_detected`
- `event: device.third_party_integration_no_longer_detected`
- `event: device.salto.privacy_mode_activated`
- `event: device.salto.privacy_mode_deactivated`
- `event: device.connection_became_flaky`
- `event: device.connection_stabilized`
- `event: device.error.subscription_required`
- `event: device.error.subscription_required.resolved`
- `event: device.accessory_keypad_connected`
- `event: device.accessory_keypad_disconnected`
- `event: noise_sensor.noise_threshold_triggered`
- `event: lock.locked`
- `event: lock.unlocked`
- `event: lock.access_denied`
- `event: thermostat.climate_preset_activated`
- `event: thermostat.manually_adjusted`
- `event: thermostat.temperature_threshold_exceeded`
- `event: thermostat.temperature_threshold_no_longer_exceeded`
- `event: thermostat.temperature_reached_set_point`
- `event: thermostat.temperature_changed`
- `event: device.name_changed`
- `event: enrollment_automation.deleted`
- `event: phone.deactivated`
- `event: space.device_membership_changed`
- `action_attempt: SYNC_ACCESS_CODES`
- `action_attempt: CREATE_ACCESS_CODE`
- `action_attempt: DELETE_ACCESS_CODE`
- `action_attempt: UPDATE_ACCESS_CODE`
- `action_attempt: CREATE_NOISE_THRESHOLD`
- `action_attempt: DELETE_NOISE_THRESHOLD`
- `action_attempt: UPDATE_NOISE_THRESHOLD`
