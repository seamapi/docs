# Thermostats

## The device Object for Thermostats

* [Properties](./#properties)
* [device.properties](./#device.properties)
* [Errors](./#errors)
* [Warnings](./#warnings)
* [Events](./#events)
* [Endpoints](./#endpoints)

Represents a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

You can use the Seam API to perform the following management and monitoring actions for thermostats:

* Monitor current thermostat settings and readings.
* Configure [temperature thresholds](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md). If the thermostat reports a temperature outside these thresholds, Seam automatically alerts you.
* Make immediate changes to [thermostat climate settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings), such as the HVAC mode and fan mode.
* [Create](../../capability-guides/thermostats/creating-and-managing-climate-presets/) and [schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) climate presets, including a fallback climate preset.
* Create daily and weekly [thermostat programs](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md).

The Seam API represents a thermostat as a `device` resource that includes both basic device properties and thermostat-specific properties.

***

{% tabs %}
{% tab title="Thermostat Device" %}
A thermostat device resource.

```json
{
  "can_hvac_cool": true,
  "can_hvac_heat": true,
  "can_hvac_heat_cool": true,
  "can_turn_off_hvac": true,
  "capabilities_supported": ["thermostat"],
  "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "created_at": "2024-10-03T22:12:15.666Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
  "device_type": "ecobee_thermostat",
  "display_name": "Living Room",
  "errors": [],
  "is_managed": true,
  "space_ids": [],
  "location": {
    "location_name": "2948 20th St, San Francisco, CA, 94110, US",
    "timezone": "America/Los_Angeles"
  },
  "nickname": "Living Room",
  "properties": {
    "active_climate_preset": {
      "can_delete": true,
      "can_edit": true,
      "climate_preset_key": "sleep",
      "cooling_set_point_celsius": 23.88888888888889,
      "display_name": "Sleep",
      "fan_mode_setting": "auto",
      "heating_set_point_celsius": 17.77777777777778,
      "hvac_mode_setting": "heat_cool",
      "manual_override_allowed": true
    },
    "appearance": { "name": "Living Room" },
    "available_climate_presets": [
      {
        "climate_preset_key": "sleep",
        "can_edit": true,
        "can_delete": true,
        "can_use_with_thermostat_daily_programs": false,
        "name": "Sleep",
        "display_name": "Sleep",
        "fan_mode_setting": "auto",
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": true,
        "cooling_set_point_celsius": 23.88888888888889,
        "heating_set_point_celsius": 17.77777777777778,
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 64
      },
      {
        "climate_preset_key": "home",
        "can_edit": true,
        "can_delete": true,
        "can_use_with_thermostat_daily_programs": false,
        "name": "Home",
        "display_name": "Home",
        "fan_mode_setting": "auto",
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": false,
        "cooling_set_point_celsius": 23.88888888888889,
        "heating_set_point_celsius": 17.77777777777778,
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 64
      },
      {
        "climate_preset_key": "work",
        "can_edit": true,
        "can_delete": true,
        "can_use_with_thermostat_daily_programs": false,
        "name": "Work",
        "display_name": "Work",
        "fan_mode_setting": "auto",
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": false,
        "cooling_set_point_celsius": 23.88888888888889,
        "heating_set_point_celsius": 17.77777777777778,
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 64
      }
    ],
    "available_fan_mode_settings": ["auto", "on"],
    "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
    "current_climate_setting": {
      "display_name": "Manual Setting",
      "fan_mode_setting": "auto",
      "heating_set_point_celsius": 25,
      "heating_set_point_fahrenheit": 77,
      "hvac_mode_setting": "heat",
      "manual_override_allowed": true
    },
    "ecobee_metadata": {
      "device_name": "Living Room",
      "ecobee_device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
    },
    "fallback_climate_preset_key": "eco",
    "fan_mode_setting": "auto",
    "has_direct_power": true,
    "image_alt_text": "Ecobee 3 Lite Thermostat",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png&q=75&w=128",
    "is_cooling": false,
    "is_fan_running": false,
    "is_heating": false,
    "is_temporary_manual_override_active": false,
    "manufacturer": "ecobee",
    "max_cooling_set_point_celsius": 33.333333333333336,
    "max_cooling_set_point_fahrenheit": 92,
    "max_heating_set_point_celsius": 26.11111111111111,
    "max_heating_set_point_fahrenheit": 79,
    "min_cooling_set_point_celsius": 18.333333333333336,
    "min_cooling_set_point_fahrenheit": 65,
    "min_heating_cooling_delta_celsius": 2.7777777777777777,
    "min_heating_cooling_delta_fahrenheit": 5,
    "min_heating_set_point_celsius": 7.222222222222222,
    "min_heating_set_point_fahrenheit": 45,
    "model": {
      "display_name": "Thermostat",
      "manufacturer_display_name": "Ecobee"
    },
    "name": "Living Room",
    "online": true,
    "relative_humidity": 0.36,
    "temperature_celsius": 21.11111111111111,
    "temperature_fahrenheit": 70,
    "temperature_threshold": {
      "lower_limit_celsius": 16.66666666666667,
      "lower_limit_fahrenheit": 62,
      "upper_limit_celsius": 26.66666666666667,
      "upper_limit_fahrenheit": 80
    },
    "thermostat_daily_programs": [
      {
        "thermostat_daily_program_id": "1a2b3c4d-5e6f-7890-1234-56789abcdef1",
        "device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
        "name": "Weekday Program",
        "periods": [
          { "starts_at_time": "00:00:00", "climate_preset_key": "sleep" },
          { "starts_at_time": "07:00:00", "climate_preset_key": "home" },
          { "starts_at_time": "09:00:00", "climate_preset_key": "work" },
          { "starts_at_time": "18:00:00", "climate_preset_key": "home" },
          { "starts_at_time": "22:00:00", "climate_preset_key": "sleep" }
        ],
        "workspace_id": "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
        "created_at": "2025-05-30T04:01:25.455Z"
      },
      {
        "thermostat_daily_program_id": "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f90",
        "device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
        "name": "Weekend Program",
        "periods": [
          { "starts_at_time": "00:00:00", "climate_preset_key": "sleep" },
          { "starts_at_time": "08:00:00", "climate_preset_key": "home" },
          { "starts_at_time": "23:00:00", "climate_preset_key": "sleep" }
        ],
        "workspace_id": "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
        "created_at": "2025-05-30T04:02:19.952Z"
      }
    ],
    "thermostat_weekly_program": null
  },
  "warnings": [],
  "workspace_id": "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab"
}
```
{% endtab %}
{% endtabs %}

***

## Properties

**`can_hvac_cool`** _Boolean_

***

**`can_hvac_heat`** _Boolean_

***

**`can_hvac_heat_cool`** _Boolean_

***

**`can_program_offline_access_codes`** _Boolean_

***

**`can_program_online_access_codes`** _Boolean_

***

**`can_program_thermostat_programs_as_different_each_day`** _Boolean_

***

**`can_program_thermostat_programs_as_same_each_day`** _Boolean_

***

**`can_program_thermostat_programs_as_weekday_weekend`** _Boolean_

***

**`can_remotely_lock`** _Boolean_

***

**`can_remotely_unlock`** _Boolean_

***

**`can_run_thermostat_programs`** _Boolean_

***

**`can_simulate_connection`** _Boolean_

***

**`can_simulate_disconnection`** _Boolean_

***

**`can_simulate_hub_connection`** _Boolean_

***

**`can_simulate_hub_disconnection`** _Boolean_

***

**`can_simulate_paid_subscription`** _Boolean_

***

**`can_simulate_removal`** _Boolean_

***

**`can_turn_off_hvac`** _Boolean_

***

**`can_unlock_with_code`** _Boolean_

***

**`capabilities_supported`** _List_ _of Enums_

Collection of capabilities that the device supports when connected to Seam. Values are `access_code`, which indicates that the device can manage and utilize digital PIN codes for secure access; `lock`, which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; `noise_detection`, which indicates that the device supports monitoring and responding to ambient noise levels; `thermostat`, which indicates that the device can regulate and adjust indoor temperatures; `battery`, which indicates that the device can manage battery life and health; and `phone`, which indicates that the device is a mobile device, such as a smartphone. **Important:** Superseded by [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags).

***

**`connected_account_id`** _UUID_

Unique identifier for the account associated with the device.

***

**`created_at`** _Datetime_

Date and time at which the device object was created.

***

**`custom_metadata`** _Record_

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.

***

**`device_id`** _UUID_

ID of the device.

***

**`device_type`** _Enum_

Type of the device.

<details>

<summary>Enum values</summary>

* `akuvox_lock`
* `august_lock`
* `brivo_access_point`
* `butterflymx_panel`
* `avigilon_alta_entry`
* `doorking_lock`
* `genie_door`
* `igloo_lock`
* `linear_lock`
* `lockly_lock`
* `kwikset_lock`
* `nuki_lock`
* `salto_lock`
* `schlage_lock`
* `seam_relay`
* `smartthings_lock`
* `wyze_lock`
* `yale_lock`
* `two_n_intercom`
* `controlbyweb_device`
* `ttlock_lock`
* `igloohome_lock`
* `hubitat_lock`
* `four_suites_door`
* `dormakaba_oracode_door`
* `tedee_lock`
* `akiles_lock`
* `ultraloq_lock`
* `keynest_key`
* `noiseaware_activity_zone`
* `minut_sensor`
* `ecobee_thermostat`
* `nest_thermostat`
* `honeywell_resideo_thermostat`
* `tado_thermostat`
* `sensi_thermostat`
* `smartthings_thermostat`
* `ios_phone`
* `android_phone`

</details>

***

**`display_name`** _String_

Display name of the device, defaults to nickname (if it is set) or `properties.appearance.name`, otherwise. Enables administrators and users to identify the device easily, especially when there are numerous devices.

***

[**`errors`**](./#errors) _List_ _of Objects_

Array of errors associated with the device. Each error object within the array contains two fields: `error_code` and `message`. `error_code` is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.

The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:

<details>

<summary><code>account_disconnected</code></summary>

Indicates that the account is disconnected.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `account_disconnected`

***

**`is_connected_account_error`** _Boolean_

Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.

***

**`is_device_error`** _Boolean_

Indicates that the error is not a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the Salto site user limit has been reached.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_subscription_limit_exceeded`

***

**`is_connected_account_error`** _Boolean_

Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.

***

**`is_device_error`** _Boolean_

Indicates that the error is not a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>device_offline</code></summary>

Indicates that the device is offline.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `device_offline`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>device_removed</code></summary>

Indicates that the device has been removed.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `device_removed`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>hub_disconnected</code></summary>

Indicates that the hub is disconnected.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `hub_disconnected`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>device_disconnected</code></summary>

Indicates that the device is disconnected.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `device_disconnected`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>empty_backup_access_code_pool</code></summary>

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `empty_backup_access_code_pool`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>august_lock_not_authorized</code></summary>

Indicates that the user is not authorized to use the August lock.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `august_lock_not_authorized`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>august_lock_missing_bridge</code></summary>

Indicates that the lock is not connected to a bridge.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `august_lock_missing_bridge`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>ttlock_lock_not_paired_to_gateway</code></summary>

Indicates that the lock is not paired with a gateway.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `ttlock_lock_not_paired_to_gateway`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>missing_device_credentials</code></summary>

Indicates that device credentials are missing.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `missing_device_credentials`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>auxiliary_heat_running</code></summary>

Indicates that the auxiliary heat is running.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `auxiliary_heat_running`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>subscription_required</code></summary>

Indicates that a subscription is required to connect.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `subscription_required`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>lockly_missing_wifi_bridge</code></summary>

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `lockly_missing_wifi_bridge`

***

**`is_device_error`** _Boolean_

Indicates that the error is a device error.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge/), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `bridge_disconnected`

***

**`is_bridge_error`** _Boolean_

Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge/).

***

**`is_connected_account_error`** _Boolean_

Indicates whether the error is related specifically to the connected account.

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

***

**`is_managed`** _Boolean_

Indicates whether Seam manages the device. See also [Managed and Unmanaged Devices](../../core-concepts/devices/managed-and-unmanaged-devices.md).

***

**`nickname`** _String_

Optional nickname to describe the device, settable through Seam.

***

**`space_ids`** _List_ _of UUIDs_

IDs of the spaces the device is in.

***

[**`warnings`**](./#warnings) _List_ _of Objects_

Array of warnings associated with the device. Each warning object within the array contains two fields: `warning_code` and `message`. `warning_code` is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.

The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:

<details>

<summary><code>partial_backup_access_code_pool</code></summary>

Indicates that the backup access code is unhealthy.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `partial_backup_access_code_pool`

</details>

<details>

<summary><code>many_active_backup_codes</code></summary>

Indicates that there are too many backup codes.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `many_active_backup_codes`

</details>

<details>

<summary><code>wyze_device_missing_gateway</code></summary>

Indicates that the Wyze Lock is not connected to a gateway.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `wyze_device_missing_gateway`

</details>

<details>

<summary><code>functional_offline_device</code></summary>

Indicates that the device is offline but has some functionality available.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `functional_offline_device`

</details>

<details>

<summary><code>third_party_integration_detected</code></summary>

Indicates that a third-party integration has been detected.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `third_party_integration_detected`

</details>

<details>

<summary><code>ttlock_lock_gateway_unlocking_not_enabled</code></summary>

Indicates that the Remote Unlock feature is not enabled in the settings."

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `ttlock_lock_gateway_unlocking_not_enabled`

</details>

<details>

<summary><code>ttlock_weak_gateway_signal</code></summary>

Indicates that the gateway signal is weak.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `ttlock_weak_gateway_signal`

</details>

<details>

<summary><code>power_saving_mode</code></summary>

Indicates that the device is in power saving mode and may have limited functionality.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `power_saving_mode`

</details>

<details>

<summary><code>temperature_threshold_exceeded</code></summary>

Indicates that the temperature threshold has been exceeded.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `temperature_threshold_exceeded`

</details>

<details>

<summary><code>device_communication_degraded</code></summary>

Indicates that the device appears to be unresponsive.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `device_communication_degraded`

</details>

<details>

<summary><code>scheduled_maintenance_window</code></summary>

Indicates that a scheduled maintenance window has been detected.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `scheduled_maintenance_window`

</details>

<details>

<summary><code>device_has_flaky_connection</code></summary>

Indicates that the device has a flaky connection.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `device_has_flaky_connection`

</details>

<details>

<summary><code>salto_ks_office_mode</code></summary>

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_office_mode`

</details>

<details>

<summary><code>salto_ks_privacy_mode</code></summary>

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_privacy_mode`

</details>

<details>

<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_subscription_limit_almost_reached`

</details>

<details>

<summary><code>unknown_issue_with_phone</code></summary>

Indicates that an unknown issue occurred while syncing the state of the phone with the provider. This issue may affect the proper functioning of the phone.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `unknown_issue_with_phone`

</details>

<details>

<summary><code>lockly_time_zone_not_configured</code></summary>

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `lockly_time_zone_not_configured`

</details>

<details>

<summary><code>hub_required_for_addtional_capabilities</code></summary>

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `hub_required_for_addtional_capabilities`

</details>

***

**`workspace_id`** _UUID_

Unique identifier for the Seam workspace associated with the device.

***

## device.properties

**`active_thermostat_schedule`** _Object_

Active [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

{% hint style="warning" %}
**Deprecated**. Use `active_thermostat_schedule_id` with `/thermostats/schedules/get` instead.
{% endhint %}

<details>

<summary>Child Properties</summary>

*   **`climate_preset_key`** _String_

    Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) to use for the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).
*   **`created_at`** _Datetime_

    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) was created.
*   **`device_id`** _UUID_

    ID of the desired [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) device.
*   **`ends_at`** _Datetime_

    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
*   **`errors`** _List_ _of Objects_

    Errors associated with the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).
*   **`error_code`** _String_

    Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
*   **`message`** _String_

    Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

    *   **`is_override_allowed`** _Boolean_

        Indicates whether a person at the thermostat can change the thermostat's settings after the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts.
    *   **`max_override_period_minutes`** _Number_

        Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/). See also [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).
    *   **`name`** _String_

        User-friendly name to identify the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).
    *   **`starts_at`** _Datetime_

        Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
    *   **`thermostat_schedule_id`** _UUID_

        ID of the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).
    *   **`workspace_id`** _UUID_

        ID of the [workspace](../../core-concepts/workspaces/) that contains the thermostat schedule.

</details>

***

**`active_thermostat_schedule_id`** _UUID_

ID of the active [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

***

**`akiles_metadata`** _Object_

Metadata for an Akiles device.

<details>

<summary>Child Properties</summary>

*   **`_member_group_id`** _String_

    Group ID to which to add users for an Akiles device.
*   **`gadget_id`** _String_

    Gadget ID for an Akiles device.
*   **`gadget_name`** _String_

    Gadget name for an Akiles device.
*   **`product_name`** _String_

    Product name for an Akiles device.

</details>

***

**`assa_abloy_credential_service_metadata`** _Object_

ASSA ABLOY Credential Service metadata for the phone.

<details>

<summary>Child Properties</summary>

*   **`endpoints`** _List_ _of Objects_

    Endpoints associated with the phone.
*   **`endpoint_id`** _String_

    ID of the associated endpoint.
*   **`is_active`** _Boolean_

    Indicated whether the endpoint is active.

    *   **`has_active_endpoint`** _Boolean_

        Indicates whether the credential service has active endpoints associated with the phone.

</details>

***

**`assa_abloy_vostio_metadata`** _Object_

Metadata for an ASSA ABLOY Vostio system.

<details>

<summary>Child Properties</summary>

*   **`encoder_name`** _String_

    Encoder name for an ASSA ABLOY Vostio system.

</details>

***

**`august_metadata`** _Object_

Metadata for an August device.

<details>

<summary>Child Properties</summary>

*   **`has_keypad`** _Boolean_

    Indicates whether an August device has a keypad.
*   **`house_id`** _String_

    House ID for an August device.
*   **`house_name`** _String_

    House name for an August device.
*   **`keypad_battery_level`** _String_

    Keypad battery level for an August device.
*   **`lock_id`** _String_

    Lock ID for an August device.
*   **`lock_name`** _String_

    Lock name for an August device.
*   **`model`** _String_

    Model for an August device.

</details>

***

**`available_climate_preset_modes`** _List_ _of Enums_

Climate preset modes that the thermostat supports, such as "home", "away", "wake", "sleep", "occupied", and "unoccupied".

***

**`available_climate_presets`** _List_ _of Objects_

Available [climate presets](../../capability-guides/thermostats/creating-and-managing-climate-presets/) for the thermostat.

<details>

<summary>Child Object Properties</summary>

**`can_delete`** _Boolean_

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be deleted.

**`can_edit`** _Boolean_

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be edited.

**`can_use_with_thermostat_daily_programs`** _Boolean_

Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be programmed in a thermostat daily program.

**`climate_preset_key`** _String_

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).

**`climate_preset_mode`** _Enum_

The climate preset mode for the thermostat, based on the available climate preset modes reported by the device.

**`cooling_set_point_celsius`** _Number_

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`cooling_set_point_fahrenheit`** _Number_

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`display_name`** _String_

Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).

**`ecobee_metadata`** _Object_

Metadata specific to the Ecobee climate, if applicable.

**`ecobee_metadata.climate_ref`** _String_

Reference to the Ecobee climate, if applicable.

**`ecobee_metadata.is_optimized`** _Boolean_

Indicates if the climate preset is optimized by Ecobee.

**`ecobee_metadata.owner`** _Enum_

Indicates whether the climate preset is owned by the user or the system.

**`fan_mode_setting`** _Enum_

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

**`heating_set_point_celsius`** _Number_

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`heating_set_point_fahrenheit`** _Number_

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`hvac_mode_setting`** _Enum_

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

**`manual_override_allowed`** _Boolean_

Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

{% hint style="warning" %}
**Deprecated**. Use 'thermostat\_schedule.is\_override\_allowed'
{% endhint %}

**`name`** _String_

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).

</details>

***

**`available_fan_mode_settings`** _List_ _of Enums_

Fan mode settings that the thermostat supports.

***

**`available_hvac_mode_settings`** _List_ _of Enums_

HVAC mode settings that the thermostat supports.

***

**`avigilon_alta_metadata`** _Object_

Metadata for an Avigilon Alta system.

<details>

<summary>Child Properties</summary>

*   **`entry_name`** _String_

    Entry name for an Avigilon Alta system.
*   **`entry_relays_total_count`** _Number_

    Total count of entry relays for an Avigilon Alta system.
*   **`org_name`** _String_

    Organization name for an Avigilon Alta system.
*   **`site_id`** _Number_

    Site ID for an Avigilon Alta system.
*   **`site_name`** _String_

    Site name for an Avigilon Alta system.
*   **`zone_id`** _Number_

    Zone ID for an Avigilon Alta system.
*   **`zone_name`** _String_

    Zone name for an Avigilon Alta system.

</details>

***

**`brivo_metadata`** _Object_

Metadata for a Brivo device.

<details>

<summary>Child Properties</summary>

*   **`activation_enabled`** _Boolean_

    Indicates whether the Brivo access point has activation (remote unlock) enabled.
*   **`device_name`** _String_

    Device name for a Brivo device.

</details>

***

**`controlbyweb_metadata`** _Object_

Metadata for a ControlByWeb device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a ControlByWeb device.
*   **`device_name`** _String_

    Device name for a ControlByWeb device.
*   **`relay_name`** _String_

    Relay name for a ControlByWeb device.

</details>

***

**`current_climate_setting`** _Object_

Current climate setting.

<details>

<summary>Child Properties</summary>

*   **`can_delete`** _Boolean_

    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be deleted.
*   **`can_edit`** _Boolean_

    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be edited.
*   **`can_use_with_thermostat_daily_programs`** _Boolean_

    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be programmed in a thermostat daily program.
*   **`climate_preset_key`** _String_

    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).
*   **`climate_preset_mode`** _Enum_

    The climate preset mode for the thermostat, based on the available climate preset modes reported by the device.
*   **`cooling_set_point_celsius`** _Number_

    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`cooling_set_point_fahrenheit`** _Number_

    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`display_name`** _String_

    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).
*   **`ecobee_metadata`** _Object_

    Metadata specific to the Ecobee climate, if applicable.
*   **`ecobee_metadata.climate_ref`** _String_

    Reference to the Ecobee climate, if applicable.
*   **`ecobee_metadata.is_optimized`** _Boolean_

    Indicates if the climate preset is optimized by Ecobee.
*   **`ecobee_metadata.owner`** _Enum_

    Indicates whether the climate preset is owned by the user or the system.
*   **`fan_mode_setting`** _Enum_

    Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
*   **`heating_set_point_celsius`** _Number_

    Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`heating_set_point_fahrenheit`** _Number_

    Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`hvac_mode_setting`** _Enum_

    Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
*   **`manual_override_allowed`** _Boolean_

    Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

{% hint style="warning" %}
**Deprecated**. Use 'thermostat\_schedule.is\_override\_allowed'
{% endhint %}

*   **`name`** _String_

    User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).

</details>

***

**`default_climate_setting`** _Object_

{% hint style="warning" %}
**Deprecated**. use fallback\_climate\_preset\_key to specify a fallback climate preset instead.
{% endhint %}

<details>

<summary>Child Properties</summary>

*   **`can_delete`** _Boolean_

    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be deleted.
*   **`can_edit`** _Boolean_

    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be edited.
*   **`can_use_with_thermostat_daily_programs`** _Boolean_

    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) key can be programmed in a thermostat daily program.
*   **`climate_preset_key`** _String_

    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).
*   **`climate_preset_mode`** _Enum_

    The climate preset mode for the thermostat, based on the available climate preset modes reported by the device.
*   **`cooling_set_point_celsius`** _Number_

    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`cooling_set_point_fahrenheit`** _Number_

    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`display_name`** _String_

    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).
*   **`ecobee_metadata`** _Object_

    Metadata specific to the Ecobee climate, if applicable.
*   **`ecobee_metadata.climate_ref`** _String_

    Reference to the Ecobee climate, if applicable.
*   **`ecobee_metadata.is_optimized`** _Boolean_

    Indicates if the climate preset is optimized by Ecobee.
*   **`ecobee_metadata.owner`** _Enum_

    Indicates whether the climate preset is owned by the user or the system.
*   **`fan_mode_setting`** _Enum_

    Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
*   **`heating_set_point_celsius`** _Number_

    Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`heating_set_point_fahrenheit`** _Number_

    Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).
*   **`hvac_mode_setting`** _Enum_

    Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
*   **`manual_override_allowed`** _Boolean_

    Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

{% hint style="warning" %}
**Deprecated**. Use 'thermostat\_schedule.is\_override\_allowed'
{% endhint %}

*   **`name`** _String_

    User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/).

</details>

***

**`dormakaba_oracode_metadata`** _Object_

Metadata for a dormakaba Oracode device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _Object_

    Device ID for a dormakaba Oracode device.
*   **`door_id`** _Number_

    Door ID for a dormakaba Oracode device.
*   **`door_is_wireless`** _Boolean_

    Indicates whether a door is wireless for a dormakaba Oracode device.
*   **`door_name`** _String_

    Door name for a dormakaba Oracode device.
*   **`iana_timezone`** _String_

    IANA time zone for a dormakaba Oracode device.
*   **`predefined_time_slots`** _List_ _of Objects_

    Predefined time slots for a dormakaba Oracode device.
*   **`check_in_time`** _String_

    Check in time for a time slot for a dormakaba Oracode device.
*   **`check_out_time`** _String_

    Checkout time for a time slot for a dormakaba Oracode device.
*   **`dormakaba_oracode_user_level_id`** _UUID_

    ID of a user level for a dormakaba Oracode device.
*   **`ext_dormakaba_oracode_user_level_prefix`** _Number_

    Prefix for a user level for a dormakaba Oracode device.
*   **`is_24_hour`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is a 24-hour time slot.
*   **`is_biweekly_mode`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is in biweekly mode.
*   **`is_master`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is a master time slot.
*   **`is_one_shot`** _Boolean_

    Indicates whether a time slot for a dormakaba Oracode device is a one-shot time slot.
*   **`name`** _String_

    Name of a time slot for a dormakaba Oracode device.
*   **`prefix`** _Number_

    Prefix for a time slot for a dormakaba Oracode device.

    *   **`site_id`** _Number_

        Site ID for a dormakaba Oracode device.

{% hint style="warning" %}
**Deprecated**. Previously marked as "@DEPRECATED."
{% endhint %}

*   **`site_name`** _String_

    Site name for a dormakaba Oracode device.

</details>

***

**`ecobee_metadata`** _Object_

Metadata for an ecobee device.

<details>

<summary>Child Properties</summary>

*   **`device_name`** _String_

    Device name for an ecobee device.
*   **`ecobee_device_id`** _String_

    Device ID for an ecobee device.

</details>

***

**`fallback_climate_preset_key`** _String_

Key of the [fallback climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) for the thermostat.

***

**`fan_mode_setting`** _Enum_

{% hint style="warning" %}
**Deprecated**. Use `current_climate_setting.fan_mode_setting` instead.
{% endhint %}

<details>

<summary>Enum values</summary>

* `auto`
* `on`
* `circulate`

</details>

***

**`four_suites_metadata`** _Object_

Metadata for a 4SUITES device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _Number_

    Device ID for a 4SUITES device.
*   **`device_name`** _String_

    Device name for a 4SUITES device.
*   **`reclose_delay_in_seconds`** _Number_

    Reclose delay, in seconds, for a 4SUITES device.

</details>

***

**`genie_metadata`** _Object_

Metadata for a Genie device.

<details>

<summary>Child Properties</summary>

*   **`device_name`** _String_

    Lock name for a Genie device.
*   **`door_name`** _String_

    Door name for a Genie device.

</details>

***

**`honeywell_resideo_metadata`** _Object_

Metadata for a Honeywell Resideo device.

<details>

<summary>Child Properties</summary>

*   **`device_name`** _String_

    Device name for a Honeywell Resideo device.
*   **`honeywell_resideo_device_id`** _String_

    Device ID for a Honeywell Resideo device.

</details>

***

**`hubitat_metadata`** _Object_

Metadata for a Hubitat device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Hubitat device.
*   **`device_label`** _String_

    Device label for a Hubitat device.
*   **`device_name`** _String_

    Device name for a Hubitat device.

</details>

***

**`igloo_metadata`** _Object_

Metadata for an igloo device.

<details>

<summary>Child Properties</summary>

*   **`bridge_id`** _String_

    Bridge ID for an igloo device.
*   **`device_id`** _String_

    Device ID for an igloo device.
*   **`model`** _String_

    Model for an igloo device.

</details>

***

**`igloohome_metadata`** _Object_

Metadata for an igloohome device.

<details>

<summary>Child Properties</summary>

*   **`bridge_id`** _String_

    Bridge ID for an igloohome device.
*   **`bridge_name`** _String_

    Bridge name for an igloohome device.
*   **`device_id`** _String_

    Device ID for an igloohome device.
*   **`device_name`** _String_

    Device name for an igloohome device.
*   **`is_keypad_linked_to_bridge`** _Boolean_

    Indicates whether a keypad is linked to a bridge for an igloohome device.
*   **`keypad_id`** _String_

    Keypad ID for an igloohome device.

</details>

***

**`is_cooling`** _Boolean_

Indicates whether the connected HVAC system is currently cooling, as reported by the thermostat.

***

**`is_fan_running`** _Boolean_

Indicates whether the fan in the connected HVAC system is currently running, as reported by the thermostat.

***

**`is_heating`** _Boolean_

Indicates whether the connected HVAC system is currently heating, as reported by the thermostat.

***

**`is_temporary_manual_override_active`** _Boolean_

Indicates whether the current thermostat settings differ from the most recent active program or schedule that Seam activated. For this condition to occur, `current_climate_setting.manual_override_allowed` must also be `true`.

***

**`keynest_metadata`** _Object_

Metadata for a KeyNest device.

<details>

<summary>Child Properties</summary>

*   **`address`** _String_

    Address for a KeyNest device.
*   **`current_or_last_store_id`** _Number_

    Current or last store ID for a KeyNest device.
*   **`current_status`** _String_

    Current status for a KeyNest device.
*   **`current_user_company`** _String_

    Current user company for a KeyNest device.
*   **`current_user_email`** _String_

    Current user email for a KeyNest device.
*   **`current_user_name`** _String_

    Current user name for a KeyNest device.
*   **`current_user_phone_number`** _String_

    Current user phone number for a KeyNest device.
*   **`default_office_id`** _Number_

    Default office ID for a KeyNest device.
*   **`device_name`** _String_

    Device name for a KeyNest device.
*   **`fob_id`** _Number_

    Fob ID for a KeyNest device.
*   **`handover_method`** _String_

    Handover method for a KeyNest device.
*   **`has_photo`** _Boolean_

    Whether the KeyNest device has a photo.
*   **`key_id`** _String_

    Key ID for a KeyNest device.
*   **`key_notes`** _String_

    Key notes for a KeyNest device.
*   **`keynest_app_user`** _String_

    KeyNest app user for a KeyNest device.
*   **`last_movement`** _String_

    Last movement timestamp for a KeyNest device.
*   **`property_id`** _String_

    Property ID for a KeyNest device.
*   **`property_postcode`** _String_

    Property postcode for a KeyNest device.
*   **`status_type`** _String_

    Status type for a KeyNest device.
*   **`subscription_plan`** _String_

    Subscription plan for a KeyNest device.

</details>

***

**`kwikset_metadata`** _Object_

Metadata for a Kwikset device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Kwikset device.
*   **`device_name`** _String_

    Device name for a Kwikset device.
*   **`model_number`** _String_

    Model number for a Kwikset device.

</details>

***

**`lockly_metadata`** _Object_

Metadata for a Lockly device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Lockly device.
*   **`device_name`** _String_

    Device name for a Lockly device.
*   **`model`** _String_

    Model for a Lockly device.

</details>

***

**`max_cooling_set_point_celsius`** _Number_

Maximum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °C.

***

**`max_cooling_set_point_fahrenheit`** _Number_

Maximum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °F.

***

**`max_heating_set_point_celsius`** _Number_

Maximum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °C.

***

**`max_heating_set_point_fahrenheit`** _Number_

Maximum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °F.

***

**`max_thermostat_daily_program_periods_per_day`** _Number_

Maximum number of periods that the thermostat can support per day. For example, if the thermostat supports 4 periods per day, this value is 4.

***

**`max_unique_climate_presets_per_thermostat_weekly_program`** _Number_

Maximum number of climate presets that the thermostat can support for weekly programming.

***

**`min_cooling_set_point_celsius`** _Number_

Minimum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °C.

***

**`min_cooling_set_point_fahrenheit`** _Number_

Minimum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °F.

***

**`min_heating_cooling_delta_celsius`** _Number_

Minimum [temperature difference](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#minimum-heating-cooling-temperature-delta) in °C between the cooling and heating set points when in heat-cool (auto) mode.

***

**`min_heating_cooling_delta_fahrenheit`** _Number_

Minimum [temperature difference](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#minimum-heating-cooling-temperature-delta) in °F between the cooling and heating set points when in heat-cool (auto) mode.

***

**`min_heating_set_point_celsius`** _Number_

Minimum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °C.

***

**`min_heating_set_point_fahrenheit`** _Number_

Minimum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °F.

***

**`minut_metadata`** _Object_

Metadata for a Minut device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Minut device.
*   **`device_name`** _String_

    Device name for a Minut device.
*   **`latest_sensor_values`** _Object_

    Latest sensor values for a Minut device.
*   **`latest_sensor_values.accelerometer_z`** _Object_

    Latest accelerometer Z-axis reading for a Minut device.
*   **`latest_sensor_values.accelerometer_z.time`** _String_

    Time of latest accelerometer Z-axis reading for a Minut device.
*   **`latest_sensor_values.accelerometer_z.value`** _Number_

    Value of latest accelerometer Z-axis reading for a Minut device.
*   **`latest_sensor_values.humidity`** _Object_

    Latest humidity reading for a Minut device.
*   **`latest_sensor_values.humidity.time`** _String_

    Time of latest humidity reading for a Minut device.
*   **`latest_sensor_values.humidity.value`** _Number_

    Value of latest humidity reading for a Minut device.
*   **`latest_sensor_values.pressure`** _Object_

    Latest pressure reading for a Minut device.
*   **`latest_sensor_values.pressure.time`** _String_

    Time of latest pressure reading for a Minut device.
*   **`latest_sensor_values.pressure.value`** _Number_

    Value of latest pressure reading for a Minut device.
*   **`latest_sensor_values.sound`** _Object_

    Latest sound reading for a Minut device.
*   **`latest_sensor_values.sound.time`** _String_

    Time of latest sound reading for a Minut device.
*   **`latest_sensor_values.sound.value`** _Number_

    Value of latest sound reading for a Minut device.
*   **`latest_sensor_values.temperature`** _Object_

    Latest temperature reading for a Minut device.
*   **`latest_sensor_values.temperature.time`** _String_

    Time of latest temperature reading for a Minut device.
*   **`latest_sensor_values.temperature.value`** _Number_

    Value of latest temperature reading for a Minut device.

</details>

***

**`model`** _Object_

Device model-related properties.

<details>

<summary>Child Properties</summary>

* **`accessory_keypad_supported`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use device.properties.model.can\_connect\_accessory\_keypad
{% endhint %}

*   **`can_connect_accessory_keypad`** _Boolean_

    Indicates whether the device can connect a accessory keypad.
*   **`display_name`** _String_

    Display name of the device model.
*   **`has_built_in_keypad`** _Boolean_

    Indicates whether the device has a built in accessory keypad.
*   **`manufacturer_display_name`** _String_

    Display name that corresponds to the manufacturer-specific terminology for the device.
* **`offline_access_codes_supported`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_offline\_access\_codes.
{% endhint %}

* **`online_access_codes_supported`** _Boolean_

{% hint style="warning" %}
**Deprecated**. use device.can\_program\_online\_access\_codes.
{% endhint %}

</details>

***

**`name`** _String_

Name of the device.

{% hint style="warning" %}
**Deprecated**. use device.display\_name instead
{% endhint %}

***

**`nest_metadata`** _Object_

Metadata for a Google Nest device.

<details>

<summary>Child Properties</summary>

*   **`device_custom_name`** _String_

    Custom device name for a Google Nest device. The device owner sets this value.
*   **`device_name`** _String_

    Device name for a Google Nest device. Google sets this value.
*   **`display_name`** _String_

    Display name for a Google Nest device.
*   **`nest_device_id`** _String_

    Device ID for a Google Nest device.

</details>

***

**`noiseaware_metadata`** _Object_

Metadata for a NoiseAware device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a NoiseAware device.
*   **`device_model`** _Enum_

    Device model for a NoiseAware device.
*   **`device_name`** _String_

    Device name for a NoiseAware device.
*   **`noise_level_decibel`** _Number_

    Noise level, in decibels, for a NoiseAware device.
*   **`noise_level_nrs`** _Number_

    Noise level, expressed as a Noise Risk Score (NRS), for a NoiseAware device.

</details>

***

**`nuki_metadata`** _Object_

Metadata for a Nuki device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Nuki device.
*   **`device_name`** _String_

    Device name for a Nuki device.
*   **`keypad_2_paired`** _Boolean_

    Indicates whether keypad 2 is paired for a Nuki device.
*   **`keypad_battery_critical`** _Boolean_

    Indicates whether the keypad battery is in a critical state for a Nuki device.
*   **`keypad_paired`** _Boolean_

    Indicates whether the keypad is paired for a Nuki device.

</details>

***

**`online`** _Boolean_

Indicates whether the device is online.

***

**`relative_humidity`** _Number_

Reported relative humidity, as a value between 0 and 1, inclusive.

***

**`salto_ks_metadata`** _Object_

Metadata for a Salto KS device.

<details>

<summary>Child Properties</summary>

*   **`battery_level`** _String_

    Battery level for a Salto KS device.
*   **`customer_reference`** _String_

    Customer reference for a Salto KS device.
*   **`lock_id`** _String_

    Lock ID for a Salto KS device.
*   **`lock_type`** _String_

    Lock type for a Salto KS device.
*   **`locked_state`** _String_

    Locked state for a Salto KS device.
*   **`model`** _String_

    Model for a Salto KS device.

</details>

***

**`salto_metadata`** _Object_

Metada for a Salto device.

{% hint style="warning" %}
**Deprecated**. Use `salto_ks_metadata` instead.
{% endhint %}

<details>

<summary>Child Properties</summary>

*   **`battery_level`** _String_

    Battery level for a Salto device.
*   **`customer_reference`** _String_

    Customer reference for a Salto device.
*   **`lock_id`** _String_

    Lock ID for a Salto device.
*   **`lock_type`** _String_

    Lock type for a Salto device.
*   **`locked_state`** _String_

    Locked state for a Salto device.
*   **`model`** _String_

    Model for a Salto device.

</details>

***

**`salto_space_credential_service_metadata`** _Object_

Salto Space credential service metadata for the phone.

<details>

<summary>Child Properties</summary>

*   **`has_active_phone`** _Boolean_

    Indicates whether the credential service has an active associated phone.

</details>

***

**`schlage_metadata`** _Object_

Metadata for a Schlage device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Schlage device.
*   **`device_name`** _String_

    Device name for a Schlage device.
*   **`model`** _String_

    Model for a Schlage device.

</details>

***

**`seam_bridge_metadata`** _Object_

Metadata for Seam Bridge.

<details>

<summary>Child Properties</summary>

*   **`device_num`** _Number_

    Device number for Seam Bridge.
*   **`name`** _String_

    Name for Seam Bridge.
*   **`unlock_method`** _Enum_

    Unlock method for Seam Bridge.

</details>

***

**`sensi_metadata`** _Object_

Metadata for a Sensi device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Sensi device.
*   **`device_name`** _String_

    Device name for a Sensi device.
*   **`product_type`** _String_

    Product type for a Sensi device.

</details>

***

**`smartthings_metadata`** _Object_

Metadata for a SmartThings device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a SmartThings device.
*   **`device_name`** _String_

    Device name for a SmartThings device.
*   **`location_id`** _String_

    Location ID for a SmartThings device.
*   **`model`** _String_

    Model for a SmartThings device.

</details>

***

**`tado_metadata`** _Object_

Metadata for a tado° device.

<details>

<summary>Child Properties</summary>

*   **`device_type`** _String_

    Device type for a tado° device.
*   **`serial_no`** _String_

    Serial number for a tado° device.

</details>

***

**`tedee_metadata`** _Object_

Metadata for a Tedee device.

<details>

<summary>Child Properties</summary>

*   **`bridge_id`** _Number_

    Bridge ID for a Tedee device.
*   **`bridge_name`** _String_

    Bridge name for a Tedee device.
*   **`device_id`** _Number_

    Device ID for a Tedee device.
*   **`device_model`** _String_

    Device model for a Tedee device.
*   **`device_name`** _String_

    Device name for a Tedee device.
*   **`keypad_id`** _Number_

    Keypad ID for a Tedee device.
*   **`serial_number`** _String_

    Serial number for a Tedee device.

</details>

***

**`temperature_celsius`** _Number_

Reported temperature in °C.

***

**`temperature_fahrenheit`** _Number_

Reported temperature in °F.

***

**`temperature_threshold`** _Object_

Current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

<details>

<summary>Child Properties</summary>

*   **`lower_limit_celsius`** _Number_

    Lower limit in °C within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.
*   **`lower_limit_fahrenheit`** _Number_

    Lower limit in °F within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.
*   **`upper_limit_celsius`** _Number_

    Upper limit in °C within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.
*   **`upper_limit_fahrenheit`** _Number_

    Upper limit in °F within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

</details>

***

**`thermostat_daily_program_period_precision_minutes`** _Number_

Precision of the thermostat's period in minutes. For example, if the thermostat supports 15-minute periods, this value is 15. All values are relative to the top of the hour, so for 15 minutes, the periods would be 0, 15, 30, and 45 minutes past the hour.

***

**`thermostat_daily_programs`** _List_ _of Objects_

Configured [daily programs](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md) for the thermostat.

<details>

<summary>Child Object Properties</summary>

**`created_at`** _Datetime_

Date and time at which the thermostat daily program was created.

**`device_id`** _UUID_

ID of the thermostat device on which the thermostat daily program is configured.

**`name`** _String_

User-friendly name to identify the thermostat daily program.

**`periods`** _List_ _of Objects_

Array of thermostat daily program periods.

*   **`climate_preset_key`** _String_

    Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) to activate at the `starts_at_time`.
*   **`starts_at_time`** _String_

    Time at which the thermostat daily program period starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

**`thermostat_daily_program_id`** _UUID_

ID of the thermostat daily program.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) that contains the thermostat daily program.

</details>

***

**`thermostat_weekly_program`** _Object_

Current [weekly program](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md) for the thermostat.

<details>

<summary>Child Properties</summary>

*   **`created_at`** _Datetime_

    Date and time at which the thermostat weekly program was created.
*   **`friday_program_id`** _UUID_

    ID of the thermostat daily program to run on Fridays.
*   **`monday_program_id`** _UUID_

    ID of the thermostat daily program to run on Mondays.
*   **`saturday_program_id`** _UUID_

    ID of the thermostat daily program to run on Saturdays.
*   **`sunday_program_id`** _UUID_

    ID of the thermostat daily program to run on Sundays.
*   **`thursday_program_id`** _UUID_

    ID of the thermostat daily program to run on Thursdays.
*   **`tuesday_program_id`** _UUID_

    ID of the thermostat daily program to run on Tuesdays.
*   **`wednesday_program_id`** _UUID_

    ID of the thermostat daily program to run on Wednesdays.

</details>

***

**`ttlock_metadata`** _Object_

Metadata for a TTLock device.

<details>

<summary>Child Properties</summary>

*   **`feature_value`** _String_

    Feature value for a TTLock device.
*   **`features`** _Object_

    Features for a TTLock device.
*   **`features.incomplete_keyboard_passcode`** _Boolean_

    Indicates whether a TTLock device supports an incomplete keyboard passcode.
*   **`features.lock_command`** _Boolean_

    Indicates whether a TTLock device supports the lock command.
*   **`features.passcode`** _Boolean_

    Indicates whether a TTLock device supports a passcode.
*   **`features.passcode_management`** _Boolean_

    Indicates whether a TTLock device supports passcode management.
*   **`features.unlock_via_gateway`** _Boolean_

    Indicates whether a TTLock device supports unlock via gateway.
*   **`features.wifi`** _Boolean_

    Indicates whether a TTLock device supports Wi-Fi.
*   **`has_gateway`** _Boolean_

    Indicates whether a TTLock device has a gateway.
*   **`lock_alias`** _String_

    Lock alias for a TTLock device.
*   **`lock_id`** _Number_

    Lock ID for a TTLock device.
*   **`wireless_keypads`** _List_ _of Objects_

    Wireless keypads for a TTLock device.
*   **`wireless_keypad_id`** _Number_

    ID for a wireless keypad for a TTLock device.
*   **`wireless_keypad_name`** _String_

    Name for a wireless keypad for a TTLock device.

</details>

***

**`two_n_metadata`** _Object_

Metadata for a 2N device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _Number_

    Device ID for a 2N device.
*   **`device_name`** _String_

    Device name for a 2N device.

</details>

***

**`ultraloq_metadata`** _Object_

Metadata for an Ultraloq device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for an Ultraloq device.
*   **`device_name`** _String_

    Device name for an Ultraloq device.
*   **`device_type`** _String_

    Device type for an Ultraloq device.

</details>

***

**`visionline_metadata`** _Object_

Metadata for an ASSA ABLOY Visionline system.

<details>

<summary>Child Properties</summary>

*   **`encoder_id`** _String_

    Encoder ID for an ASSA ABLOY Visionline system.

</details>

***

**`wyze_metadata`** _Object_

Metadata for a Wyze device.

<details>

<summary>Child Properties</summary>

*   **`device_id`** _String_

    Device ID for a Wyze device.
*   **`device_info_model`** _String_

    Device information model for a Wyze device.
*   **`device_name`** _String_

    Device name for a Wyze device.
*   **`keypad_uuid`** _String_

    Keypad UUID for a Wyze device.
*   **`locker_status_hardlock`** _Number_

    Locker status (hardlock) for a Wyze device.
*   **`product_model`** _String_

    Product model for a Wyze device.
*   **`product_name`** _String_

    Product name for a Wyze device.
*   **`product_type`** _String_

    Product type for a Wyze device.

</details>

***

## Errors

**`auxiliary_heat_running`**

Indicates that the auxiliary heat is running.

***

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

***

**`subscription_required`**

Indicates that a subscription is required to connect.

***

**`missing_device_credentials`**

Indicates that device credentials are missing.

***

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

***

**`hub_disconnected`**

Indicates that the hub is disconnected.

***

**`device_removed`**

Indicates that the device has been removed.

***

**`device_offline`**

Indicates that the device is offline.

***

**`device_disconnected`**

Indicates that the device is disconnected.

***

**`account_disconnected`**

Indicates that the account is disconnected.

***

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge/), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

***

## Warnings

**`device_communication_degraded`**

Indicates that the device appears to be unresponsive.

***

**`device_has_flaky_connection`**

Indicates that the device has a flaky connection.

***

**`functional_offline_device`**

Indicates that the device is offline but has some functionality available.

***

**`lockly_time_zone_not_configured`**

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

***

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

***

**`scheduled_maintenance_window`**

Indicates that a scheduled maintenance window has been detected.

***

**`temperature_threshold_exceeded`**

Indicates that the temperature threshold has been exceeded.

***

**`third_party_integration_detected`**

Indicates that a third-party integration has been detected.

***

**`ttlock_weak_gateway_signal`**

Indicates that the gateway signal is weak.

***

**`wyze_device_missing_gateway`**

Indicates that the Wyze Lock is not connected to a gateway.

***

## Events

**`thermostat.climate_preset_activated`**

A thermostat [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) was activated.

<details>

<summary>Properties</summary>

**`climate_preset_key`** _String_

Key of the climate preset that was activated.

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `thermostat.climate_preset_activated`

**`is_fallback_climate_preset`** _Boolean_

Indicates whether the climate preset that was activated is the fallback climate preset for the thermostat.

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`thermostat_schedule_id`** _UUID_

ID of the thermostat schedule that prompted the affected climate preset to be activated.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

**`thermostat.manually_adjusted`**

A [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) was adjusted manually.

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`cooling_set_point_celsius`** _Number_

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`cooling_set_point_fahrenheit`** _Number_

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `thermostat.manually_adjusted`

**`fan_mode_setting`** _Enum_

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

**`heating_set_point_celsius`** _Number_

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`heating_set_point_fahrenheit`** _Number_

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

**`hvac_mode_setting`** _Enum_

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

**`method`** _Enum_

Method used to adjust the affected thermostat manually. `seam` indicates that the Seam API, Seam CLI, or Seam Console was used to adjust the thermostat.

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

**`thermostat.temperature_threshold_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading exceeded the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `thermostat.temperature_threshold_exceeded`

**`lower_limit_celsius`** _Number_

Lower temperature limit, in °C, defined by the set threshold.

**`lower_limit_fahrenheit`** _Number_

Lower temperature limit, in °F, defined by the set threshold.

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`temperature_celsius`** _Number_

Temperature, in °C, reported by the affected thermostat.

**`temperature_fahrenheit`** _Number_

Temperature, in °F, reported by the affected thermostat.

**`upper_limit_celsius`** _Number_

Upper temperature limit, in °C, defined by the set threshold.

**`upper_limit_fahrenheit`** _Number_

Upper temperature limit, in °F, defined by the set threshold.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

**`thermostat.temperature_threshold_no_longer_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading no longer exceeds the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `thermostat.temperature_threshold_no_longer_exceeded`

**`lower_limit_celsius`** _Number_

Lower temperature limit, in °C, defined by the set threshold.

**`lower_limit_fahrenheit`** _Number_

Lower temperature limit, in °F, defined by the set threshold.

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`temperature_celsius`** _Number_

Temperature, in °C, reported by the affected thermostat.

**`temperature_fahrenheit`** _Number_

Temperature, in °F, reported by the affected thermostat.

**`upper_limit_celsius`** _Number_

Upper temperature limit, in °C, defined by the set threshold.

**`upper_limit_fahrenheit`** _Number_

Upper temperature limit, in °F, defined by the set threshold.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

**`thermostat.temperature_reached_set_point`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading is within 1 °C of the configured cooling or heating [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`desired_temperature_celsius`** _Number_

Desired temperature, in °C, defined by the affected thermostat's cooling or heating set point.

**`desired_temperature_fahrenheit`** _Number_

Desired temperature, in °F, defined by the affected thermostat's cooling or heating set point.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `thermostat.temperature_reached_set_point`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`temperature_celsius`** _Number_

Temperature, in °C, reported by the affected thermostat.

**`temperature_fahrenheit`** _Number_

Temperature, in °F, reported by the affected thermostat.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

**`thermostat.temperature_changed`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) reported temperature changed by at least 1 °C.

<details>

<summary>Properties</summary>

**`connected_account_custom_metadata`** _Record_

Custom metadata of the connected account, present when connected\_account\_id is provided.

**`connected_account_id`** _UUID_

ID of the [connected account](../../core-concepts/connected-accounts/) associated with the event.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`device_custom_metadata`** _Record_

Custom metadata of the device, present when device\_id is provided.

**`device_id`** _UUID_

ID of the affected device.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `thermostat.temperature_changed`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`temperature_celsius`** _Number_

Temperature, in °C, reported by the affected thermostat.

**`temperature_fahrenheit`** _Number_

Temperature, in °F, reported by the affected thermostat.

**`workspace_id`** _UUID_

ID of the [workspace](../../core-concepts/workspaces/) associated with the event.

</details>

***

## Endpoints

[**`/thermostats/activate_climate_preset`**](activate_climate_preset.md)

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/cool`**](cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [cool mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

[**`/thermostats/create_climate_preset`**](create_climate_preset.md)

Creates a [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/delete_climate_preset`**](delete_climate_preset.md)

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/heat`**](heat.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

[**`/thermostats/heat_cool`**](heat_cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

[**`/thermostats/list`**](list.md)

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/off`**](off.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

[**`/thermostats/set_fallback_climate_preset`**](set_fallback_climate_preset.md)

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/set_fan_mode`**](set_fan_mode.md)

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/set_hvac_mode`**](set_hvac_mode.md)

Sets the [HVAC mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/set_temperature_threshold`**](set_temperature_threshold.md)

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.

[**`/thermostats/update_climate_preset`**](update_climate_preset.md)

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

[**`/thermostats/update_weekly_program`**](update_weekly_program.md)

Updates the thermostat weekly program for a thermostat device. To configure a weekly program, specify the ID of the daily program that you want to use for each day of the week. When you update a weekly program, the set of programs that you specify overwrites any previous weekly program for the thermostat.
