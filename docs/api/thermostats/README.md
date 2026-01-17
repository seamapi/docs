# Thermostats

## The device Object for Thermostats

- [Properties](./#properties)
- [device.properties](./#device.properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)

Represents a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

You can use the Seam API to perform the following management and monitoring actions for thermostats:

- Monitor current thermostat settings and readings.
- Configure [temperature thresholds](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md). If the thermostat reports a temperature outside these thresholds, Seam automatically alerts you.
- Make immediate changes to [thermostat climate settings](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings), such as the HVAC mode and fan mode.
- [Create](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) and [schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) climate presets, including a fallback climate preset.
- Create daily and weekly [thermostat programs](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md).

The Seam API represents a thermostat as a `device` resource that includes both basic device properties and thermostat-specific properties.

---


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

---
## Properties

**`can_hvac_cool`** *Boolean*





---

**`can_hvac_heat`** *Boolean*





---

**`can_hvac_heat_cool`** *Boolean*





---

**`can_program_offline_access_codes`** *Boolean*





---

**`can_program_online_access_codes`** *Boolean*





---

**`can_program_thermostat_programs_as_different_each_day`** *Boolean*





---

**`can_program_thermostat_programs_as_same_each_day`** *Boolean*





---

**`can_program_thermostat_programs_as_weekday_weekend`** *Boolean*





---

**`can_remotely_lock`** *Boolean*





---

**`can_remotely_unlock`** *Boolean*





---

**`can_run_thermostat_programs`** *Boolean*





---

**`can_simulate_connection`** *Boolean*





---

**`can_simulate_disconnection`** *Boolean*





---

**`can_simulate_hub_connection`** *Boolean*





---

**`can_simulate_hub_disconnection`** *Boolean*





---

**`can_simulate_paid_subscription`** *Boolean*





---

**`can_simulate_removal`** *Boolean*





---

**`can_turn_off_hvac`** *Boolean*





---

**`can_unlock_with_code`** *Boolean*





---

**`capabilities_supported`** *List* *of Enums*

Collection of capabilities that the device supports when connected to Seam. Values are `access_code`, which indicates that the device can manage and utilize digital PIN codes for secure access; `lock`, which indicates that the device controls a door locking mechanism, enabling the remote opening and closing of doors and other entry points; `noise_detection`, which indicates that the device supports monitoring and responding to ambient noise levels; `thermostat`, which indicates that the device can regulate and adjust indoor temperatures; `battery`, which indicates that the device can manage battery life and health; and `phone`, which indicates that the device is a mobile device, such as a smartphone. **Important:** Superseded by [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags).




---

**`connected_account_id`** *UUID*

Unique identifier for the account associated with the device.




---

**`created_at`** *Datetime*

Date and time at which the device object was created.




---

**`custom_metadata`** *Record*

Set of key:value pairs. Adding custom metadata to a resource, such as a [Connect Webview](../../core-concepts/connect-webviews/attaching-custom-data-to-the-connect-webview.md), [connected account](../../core-concepts/connected-accounts/adding-custom-metadata-to-a-connected-account.md), or [device](../../core-concepts/devices/adding-custom-metadata-to-a-device.md), enables you to store custom information, like customer details or internal IDs from your application.




---

**`device_id`** *UUID*

ID of the device.




---

**`device_type`** *Enum*

Type of the device.


<details>
<summary>Enum values</summary>

- <code>akuvox_lock</code>
- <code>august_lock</code>
- <code>brivo_access_point</code>
- <code>butterflymx_panel</code>
- <code>avigilon_alta_entry</code>
- <code>doorking_lock</code>
- <code>genie_door</code>
- <code>igloo_lock</code>
- <code>linear_lock</code>
- <code>lockly_lock</code>
- <code>kwikset_lock</code>
- <code>nuki_lock</code>
- <code>salto_lock</code>
- <code>schlage_lock</code>
- <code>seam_relay</code>
- <code>smartthings_lock</code>
- <code>wyze_lock</code>
- <code>yale_lock</code>
- <code>two_n_intercom</code>
- <code>controlbyweb_device</code>
- <code>ttlock_lock</code>
- <code>igloohome_lock</code>
- <code>hubitat_lock</code>
- <code>four_suites_door</code>
- <code>dormakaba_oracode_door</code>
- <code>tedee_lock</code>
- <code>akiles_lock</code>
- <code>ultraloq_lock</code>
- <code>korelock_lock</code>
- <code>keynest_key</code>
- <code>noiseaware_activity_zone</code>
- <code>minut_sensor</code>
- <code>ecobee_thermostat</code>
- <code>nest_thermostat</code>
- <code>honeywell_resideo_thermostat</code>
- <code>tado_thermostat</code>
- <code>sensi_thermostat</code>
- <code>smartthings_thermostat</code>
- <code>ios_phone</code>
- <code>android_phone</code>
</details>


---

**`display_name`** *String*

Display name of the device, defaults to nickname (if it is set) or `properties.appearance.name`, otherwise. Enables administrators and users to identify the device easily, especially when there are numerous devices.




---

[**`errors`**](./#errors) *List* *of Objects*

Array of errors associated with the device. Each error object within the array contains two fields: `error_code` and `message`. `error_code` is a string that uniquely identifies the type of error, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the error, offering insights into the issue and potentially how to rectify it.




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>account_disconnected</code></summary>

Indicates that the account is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>account_disconnected</code>
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is not a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the Salto site user limit has been reached.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_exceeded</code>
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates that the error is a [connected account](https://docs.seam.co/latest/api/connected_accounts) error.
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is not a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_offline</code></summary>

Indicates that the device is offline.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_offline</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_removed</code></summary>

Indicates that the device has been removed.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_removed</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>hub_disconnected</code></summary>

Indicates that the hub is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>hub_disconnected</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>device_disconnected</code></summary>

Indicates that the device is disconnected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_disconnected</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>empty_backup_access_code_pool</code></summary>

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>empty_backup_access_code_pool</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_not_authorized</code></summary>

Indicates that the user is not authorized to use the August lock.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_not_authorized</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>august_lock_missing_bridge</code></summary>

Indicates that the lock is not connected to a bridge.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>august_lock_missing_bridge</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>ttlock_lock_not_paired_to_gateway</code></summary>

Indicates that the lock is not paired with a gateway.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ttlock_lock_not_paired_to_gateway</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>missing_device_credentials</code></summary>

Indicates that device credentials are missing.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>missing_device_credentials</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>auxiliary_heat_running</code></summary>

Indicates that the auxiliary heat is running.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>auxiliary_heat_running</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>subscription_required</code></summary>

Indicates that a subscription is required to connect.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>subscription_required</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>lockly_missing_wifi_bridge</code></summary>

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>lockly_missing_wifi_bridge</code>
  
  
  ---

  **`is_device_error`** *Boolean*
  
  
  Indicates that the error is a device error.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>bridge_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  Indicates whether the error is related to [Seam Bridge](../../capability-guides/seam-bridge.md).
  
  
  ---

  **`is_connected_account_error`** *Boolean*
  
  
  Indicates whether the error is related specifically to the connected account.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`is_managed`** *Boolean*

Indicates whether Seam manages the device. See also [Managed and Unmanaged Devices](../../core-concepts/devices/managed-and-unmanaged-devices.md).




---

**`nickname`** *String*

Optional nickname to describe the device, settable through Seam.




---

**`space_ids`** *List* *of UUIDs*

IDs of the spaces the device is in.




---

[**`warnings`**](./#warnings) *List* *of Objects*

Array of warnings associated with the device. Each warning object within the array contains two fields: `warning_code` and `message`. `warning_code` is a string that uniquely identifies the type of warning, enabling quick recognition and categorization of the issue. `message` provides a more detailed description of the warning, offering insights into the issue and potentially how to rectify it.




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>partial_backup_access_code_pool</code></summary>

Indicates that the backup access code is unhealthy.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>partial_backup_access_code_pool</code>
  
  
</details>
<details>
<summary><code>many_active_backup_codes</code></summary>

Indicates that there are too many backup codes.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>many_active_backup_codes</code>
  
  
</details>
<details>
<summary><code>wyze_device_missing_gateway</code></summary>

Indicates that the Wyze Lock is not connected to a gateway.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>wyze_device_missing_gateway</code>
  
  
</details>
<details>
<summary><code>third_party_integration_detected</code></summary>

Indicates that a third-party integration has been detected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>third_party_integration_detected</code>
  
  
</details>
<details>
<summary><code>ttlock_lock_gateway_unlocking_not_enabled</code></summary>

Indicates that the Remote Unlock feature is not enabled in the settings."

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ttlock_lock_gateway_unlocking_not_enabled</code>
  
  
</details>
<details>
<summary><code>ttlock_weak_gateway_signal</code></summary>

Indicates that the gateway signal is weak.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ttlock_weak_gateway_signal</code>
  
  
</details>
<details>
<summary><code>power_saving_mode</code></summary>

Indicates that the device is in power saving mode and may have limited functionality.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>power_saving_mode</code>
  
  
</details>
<details>
<summary><code>temperature_threshold_exceeded</code></summary>

Indicates that the temperature threshold has been exceeded.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>temperature_threshold_exceeded</code>
  
  
</details>
<details>
<summary><code>device_communication_degraded</code></summary>

Indicates that the device appears to be unresponsive.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_communication_degraded</code>
  
  
</details>
<details>
<summary><code>scheduled_maintenance_window</code></summary>

Indicates that a scheduled maintenance window has been detected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>scheduled_maintenance_window</code>
  
  
</details>
<details>
<summary><code>device_has_flaky_connection</code></summary>

Indicates that the device has a flaky connection.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>device_has_flaky_connection</code>
  
  
</details>
<details>
<summary><code>salto_ks_office_mode</code></summary>

Indicates that the Salto KS lock is in Office Mode. Access Codes will not unlock doors.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_office_mode</code>
  
  
</details>
<details>
<summary><code>salto_ks_privacy_mode</code></summary>

Indicates that the Salto KS lock is in Privacy Mode. Access Codes will not unlock doors.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_privacy_mode</code>
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_almost_reached</code>
  
  
</details>
<details>
<summary><code>unknown_issue_with_phone</code></summary>

Indicates that an unknown issue occurred while syncing the state of the phone with the provider. This issue may affect the proper functioning of the phone.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>unknown_issue_with_phone</code>
  
  
</details>
<details>
<summary><code>lockly_time_zone_not_configured</code></summary>

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>lockly_time_zone_not_configured</code>
  
  
</details>
<details>
<summary><code>ultraloq_time_zone_unknown</code></summary>

Indicates that Seam does not know the time zone of the Ultraloq device. Set a time zone to enable time-bound access codes.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>ultraloq_time_zone_unknown</code>
  
  
</details>
<details>
<summary><code>hub_required_for_additional_capabilities</code></summary>

Indicates that a hub or relay must be connected to unlock additional capabilities such as remote unlock.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>hub_required_for_additional_capabilities</code>
  
  
</details>
<details>
<summary><code>keynest_unsupported_locker</code></summary>

Indicates that the key is in a locker that does not support the access codes API.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>keynest_unsupported_locker</code>
  
  
</details>
<details>
<summary><code>accessory_keypad_setup_required</code></summary>

Indicates that the accessory keypad exists, but is not linked to the Igloohome Bridge. Online access code programming will fail until the keypad is linked to the Igloohome Bridge in the Igloohome app.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>accessory_keypad_setup_required</code>
  
  
</details>

---

**`workspace_id`** *UUID*

Unique identifier for the Seam workspace associated with the device.




---


## device.properties

**`active_thermostat_schedule`** *Object*

Active [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

{% hint style="warning" %}
**Deprecated**. Use `active_thermostat_schedule_id` with `/thermostats/schedules/get` instead.
{% endhint %}


<details>
  <summary>Child Properties</summary>

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to use for the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

  - <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) was created.

  - <strong><code>device_id</code></strong> <i>UUID</i>
  
    ID of the desired [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) device.

  - <strong><code>ends_at</code></strong> <i>Datetime</i>
  
    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

  - <strong><code>errors</code></strong> <i>List</i> <i>of Objects</i>
  
    Errors associated with the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

- <strong><code>error_code</code></strong> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.


- <strong><code>message</code></strong> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


  - <strong><code>is_override_allowed</code></strong> <i>Boolean</i>
  
    Indicates whether a person at the thermostat can change the thermostat's settings after the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts.

  - <strong><code>max_override_period_minutes</code></strong> <i>Number</i>
  
    Number of minutes for which a person at the thermostat can change the thermostat's settings after the activation of the scheduled [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md). See also [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

  - <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

  - <strong><code>starts_at</code></strong> <i>Datetime</i>
  
    Date and time at which the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md) starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

  - <strong><code>thermostat_schedule_id</code></strong> <i>UUID</i>
  
    ID of the [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).

  - <strong><code>workspace_id</code></strong> <i>UUID</i>
  
    ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the thermostat schedule.

</details>

---

**`active_thermostat_schedule_id`** *UUID*

ID of the active [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).




---

**`akiles_metadata`** *Object*

Metadata for an Akiles device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>_member_group_id</code></strong> <i>String</i>
  
    Group ID to which to add users for an Akiles device.

  - <strong><code>gadget_id</code></strong> <i>String</i>
  
    Gadget ID for an Akiles device.

  - <strong><code>gadget_name</code></strong> <i>String</i>
  
    Gadget name for an Akiles device.

  - <strong><code>product_name</code></strong> <i>String</i>
  
    Product name for an Akiles device.

</details>

---

**`assa_abloy_credential_service_metadata`** *Object*

ASSA ABLOY Credential Service metadata for the phone.



<details>
  <summary>Child Properties</summary>

  - <strong><code>endpoints</code></strong> <i>List</i> <i>of Objects</i>
  
    Endpoints associated with the phone.

- <strong><code>endpoint_id</code></strong> <i>String</i>

  ID of the associated endpoint.


- <strong><code>is_active</code></strong> <i>Boolean</i>

  Indicated whether the endpoint is active.


  - <strong><code>has_active_endpoint</code></strong> <i>Boolean</i>
  
    Indicates whether the credential service has active endpoints associated with the phone.

</details>

---

**`assa_abloy_vostio_metadata`** *Object*

Metadata for an ASSA ABLOY Vostio system.



<details>
  <summary>Child Properties</summary>

  - <strong><code>encoder_name</code></strong> <i>String</i>
  
    Encoder name for an ASSA ABLOY Vostio system.

</details>

---

**`august_metadata`** *Object*

Metadata for an August device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>has_keypad</code></strong> <i>Boolean</i>
  
    Indicates whether an August device has a keypad.

  - <strong><code>house_id</code></strong> <i>String</i>
  
    House ID for an August device.

  - <strong><code>house_name</code></strong> <i>String</i>
  
    House name for an August device.

  - <strong><code>keypad_battery_level</code></strong> <i>String</i>
  
    Keypad battery level for an August device.

  - <strong><code>lock_id</code></strong> <i>String</i>
  
    Lock ID for an August device.

  - <strong><code>lock_name</code></strong> <i>String</i>
  
    Lock name for an August device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for an August device.

</details>

---

**`available_climate_preset_modes`** *List* *of Enums*

Climate preset modes that the thermostat supports, such as "home", "away", "wake", "sleep", "occupied", and "unoccupied".




---

**`available_climate_presets`** *List* *of Objects*

Available [climate presets](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for the thermostat.



<details>
  <summary>Child Object Properties</summary>
<strong><code>can_delete</code></strong> <i>Boolean</i>

  Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

<strong><code>can_edit</code></strong> <i>Boolean</i>

  Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

<strong><code>can_use_with_thermostat_daily_programs</code></strong> <i>Boolean</i>

  Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

<strong><code>climate_preset_key</code></strong> <i>String</i>

  Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

<strong><code>climate_preset_mode</code></strong> <i>Enum</i>

  The climate preset mode for the thermostat, based on the available climate preset modes reported by the device.
<details>
    <summary>Enum values:</summary>

    - <code>home</code>
    - <code>away</code>
    - <code>wake</code>
    - <code>sleep</code>
    - <code>occupied</code>
    - <code>unoccupied</code>
</details>

<strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>display_name</code></strong> <i>String</i>

  Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

<strong><code>ecobee_metadata</code></strong> <i>Object</i>

  Metadata specific to the Ecobee climate, if applicable.

<strong><code>ecobee_metadata.climate_ref</code></strong> <i>String</i>

  Reference to the Ecobee climate, if applicable.

<strong><code>ecobee_metadata.is_optimized</code></strong> <i>Boolean</i>

  Indicates if the climate preset is optimized by Ecobee.

<strong><code>ecobee_metadata.owner</code></strong> <i>Enum</i>

  Indicates whether the climate preset is owned by the user or the system.
<details>
    <summary>Enum values:</summary>

    - <code>user</code>
    - <code>system</code>
</details>

<strong><code>fan_mode_setting</code></strong> <i>Enum</i>

  Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
<details>
    <summary>Enum values:</summary>

    - <code>auto</code>
    - <code>on</code>
    - <code>circulate</code>
</details>

<strong><code>heating_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>hvac_mode_setting</code></strong> <i>Enum</i>

  Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
<details>
    <summary>Enum values:</summary>

    - <code>off</code>
    - <code>heat</code>
    - <code>cool</code>
    - <code>heat_cool</code>
    - <code>eco</code>
</details>

<strong><code>manual_override_allowed</code></strong> <i>Boolean</i>

  Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

{% hint style="warning" %}
**Deprecated**. Use 'thermostat_schedule.is_override_allowed'
{% endhint %}

<strong><code>name</code></strong> <i>String</i>

  User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

---

**`available_fan_mode_settings`** *List* *of Enums*

Fan mode settings that the thermostat supports.




---

**`available_hvac_mode_settings`** *List* *of Enums*

HVAC mode settings that the thermostat supports.




---

**`avigilon_alta_metadata`** *Object*

Metadata for an Avigilon Alta system.



<details>
  <summary>Child Properties</summary>

  - <strong><code>entry_name</code></strong> <i>String</i>
  
    Entry name for an Avigilon Alta system.

  - <strong><code>entry_relays_total_count</code></strong> <i>Number</i>
  
    Total count of entry relays for an Avigilon Alta system.

  - <strong><code>org_name</code></strong> <i>String</i>
  
    Organization name for an Avigilon Alta system.

  - <strong><code>site_id</code></strong> <i>Number</i>
  
    Site ID for an Avigilon Alta system.

  - <strong><code>site_name</code></strong> <i>String</i>
  
    Site name for an Avigilon Alta system.

  - <strong><code>zone_id</code></strong> <i>Number</i>
  
    Zone ID for an Avigilon Alta system.

  - <strong><code>zone_name</code></strong> <i>String</i>
  
    Zone name for an Avigilon Alta system.

</details>

---

**`brivo_metadata`** *Object*

Metadata for a Brivo device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>activation_enabled</code></strong> <i>Boolean</i>
  
    Indicates whether the Brivo access point has activation (remote unlock) enabled.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Brivo device.

</details>

---

**`controlbyweb_metadata`** *Object*

Metadata for a ControlByWeb device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a ControlByWeb device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a ControlByWeb device.

  - <strong><code>relay_name</code></strong> <i>String</i>
  
    Relay name for a ControlByWeb device.

</details>

---

**`current_climate_setting`** *Object*

Current climate setting.



<details>
  <summary>Child Properties</summary>

  - <strong><code>can_delete</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

  - <strong><code>can_edit</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

  - <strong><code>can_use_with_thermostat_daily_programs</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>climate_preset_mode</code></strong> <i>Enum</i>
  
    The climate preset mode for the thermostat, based on the available climate preset modes reported by the device.
  <details>
      <summary>Enum values:</summary>
  
      - <code>home</code>
      - <code>away</code>
      - <code>wake</code>
      - <code>sleep</code>
      - <code>occupied</code>
      - <code>unoccupied</code>
  </details>

  - <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>ecobee_metadata</code></strong> <i>Object</i>
  
    Metadata specific to the Ecobee climate, if applicable.

  - <strong><code>ecobee_metadata.climate_ref</code></strong> <i>String</i>
  
    Reference to the Ecobee climate, if applicable.

  - <strong><code>ecobee_metadata.is_optimized</code></strong> <i>Boolean</i>
  
    Indicates if the climate preset is optimized by Ecobee.

  - <strong><code>ecobee_metadata.owner</code></strong> <i>Enum</i>
  
    Indicates whether the climate preset is owned by the user or the system.
  <details>
      <summary>Enum values:</summary>
  
      - <code>user</code>
      - <code>system</code>
  </details>

  - <strong><code>fan_mode_setting</code></strong> <i>Enum</i>
  
    Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>auto</code>
      - <code>on</code>
      - <code>circulate</code>
  </details>

  - <strong><code>heating_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>hvac_mode_setting</code></strong> <i>Enum</i>
  
    Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>off</code>
      - <code>heat</code>
      - <code>cool</code>
      - <code>heat_cool</code>
      - <code>eco</code>
  </details>

  - <strong><code>manual_override_allowed</code></strong> <i>Boolean</i>
  
    Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).
  
  {% hint style="warning" %}
  **Deprecated**. Use 'thermostat_schedule.is_override_allowed'
  {% endhint %}

  - <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

---

**`default_climate_setting`** *Object*


{% hint style="warning" %}
**Deprecated**. use fallback_climate_preset_key to specify a fallback climate preset instead.
{% endhint %}


<details>
  <summary>Child Properties</summary>

  - <strong><code>can_delete</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

  - <strong><code>can_edit</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

  - <strong><code>can_use_with_thermostat_daily_programs</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>climate_preset_mode</code></strong> <i>Enum</i>
  
    The climate preset mode for the thermostat, based on the available climate preset modes reported by the device.
  <details>
      <summary>Enum values:</summary>
  
      - <code>home</code>
      - <code>away</code>
      - <code>wake</code>
      - <code>sleep</code>
      - <code>occupied</code>
      - <code>unoccupied</code>
  </details>

  - <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>ecobee_metadata</code></strong> <i>Object</i>
  
    Metadata specific to the Ecobee climate, if applicable.

  - <strong><code>ecobee_metadata.climate_ref</code></strong> <i>String</i>
  
    Reference to the Ecobee climate, if applicable.

  - <strong><code>ecobee_metadata.is_optimized</code></strong> <i>Boolean</i>
  
    Indicates if the climate preset is optimized by Ecobee.

  - <strong><code>ecobee_metadata.owner</code></strong> <i>Enum</i>
  
    Indicates whether the climate preset is owned by the user or the system.
  <details>
      <summary>Enum values:</summary>
  
      - <code>user</code>
      - <code>system</code>
  </details>

  - <strong><code>fan_mode_setting</code></strong> <i>Enum</i>
  
    Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>auto</code>
      - <code>on</code>
      - <code>circulate</code>
  </details>

  - <strong><code>heating_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>hvac_mode_setting</code></strong> <i>Enum</i>
  
    Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
  <details>
      <summary>Enum values:</summary>
  
      - <code>off</code>
      - <code>heat</code>
      - <code>cool</code>
      - <code>heat_cool</code>
      - <code>eco</code>
  </details>

  - <strong><code>manual_override_allowed</code></strong> <i>Boolean</i>
  
    Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).
  
  {% hint style="warning" %}
  **Deprecated**. Use 'thermostat_schedule.is_override_allowed'
  {% endhint %}

  - <strong><code>name</code></strong> <i>String</i>
  
    User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

</details>

---

**`dormakaba_oracode_metadata`** *Object*

Metadata for a dormakaba Oracode device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>Object</i>
  
    Device ID for a dormakaba Oracode device.

  - <strong><code>door_id</code></strong> <i>Number</i>
  
    Door ID for a dormakaba Oracode device.

  - <strong><code>door_is_wireless</code></strong> <i>Boolean</i>
  
    Indicates whether a door is wireless for a dormakaba Oracode device.

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Door name for a dormakaba Oracode device.

  - <strong><code>iana_timezone</code></strong> <i>String</i>
  
    IANA time zone for a dormakaba Oracode device.

  - <strong><code>predefined_time_slots</code></strong> <i>List</i> <i>of Objects</i>
  
    Predefined time slots for a dormakaba Oracode device.

- <strong><code>check_in_time</code></strong> <i>String</i>

  Check in time for a time slot for a dormakaba Oracode device.


- <strong><code>check_out_time</code></strong> <i>String</i>

  Checkout time for a time slot for a dormakaba Oracode device.


- <strong><code>dormakaba_oracode_user_level_id</code></strong> <i>UUID</i>

  ID of a user level for a dormakaba Oracode device.


- <strong><code>ext_dormakaba_oracode_user_level_prefix</code></strong> <i>Number</i>

  Prefix for a user level for a dormakaba Oracode device.


- <strong><code>is_24_hour</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is a 24-hour time slot.


- <strong><code>is_biweekly_mode</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is in biweekly mode.


- <strong><code>is_master</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is a master time slot.


- <strong><code>is_one_shot</code></strong> <i>Boolean</i>

  Indicates whether a time slot for a dormakaba Oracode device is a one-shot time slot.


- <strong><code>name</code></strong> <i>String</i>

  Name of a time slot for a dormakaba Oracode device.


- <strong><code>prefix</code></strong> <i>Number</i>

  Prefix for a time slot for a dormakaba Oracode device.


  - <strong><code>site_id</code></strong> <i>Number</i>
  
    Site ID for a dormakaba Oracode device.
  
  {% hint style="warning" %}
  **Deprecated**. Previously marked as "@DEPRECATED."
  {% endhint %}

  - <strong><code>site_name</code></strong> <i>String</i>
  
    Site name for a dormakaba Oracode device.

</details>

---

**`ecobee_metadata`** *Object*

Metadata for an ecobee device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for an ecobee device.

  - <strong><code>ecobee_device_id</code></strong> <i>String</i>
  
    Device ID for an ecobee device.

</details>

---

**`fallback_climate_preset_key`** *String*

Key of the [fallback climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) for the thermostat.




---

**`fan_mode_setting`** *Enum*


{% hint style="warning" %}
**Deprecated**. Use `current_climate_setting.fan_mode_setting` instead.
{% endhint %}

<details>
<summary>Enum values</summary>

- <code>auto</code>
- <code>on</code>
- <code>circulate</code>
</details>


---

**`four_suites_metadata`** *Object*

Metadata for a 4SUITES device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>Number</i>
  
    Device ID for a 4SUITES device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a 4SUITES device.

  - <strong><code>reclose_delay_in_seconds</code></strong> <i>Number</i>
  
    Reclose delay, in seconds, for a 4SUITES device.

</details>

---

**`genie_metadata`** *Object*

Metadata for a Genie device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Lock name for a Genie device.

  - <strong><code>door_name</code></strong> <i>String</i>
  
    Door name for a Genie device.

</details>

---

**`honeywell_resideo_metadata`** *Object*

Metadata for a Honeywell Resideo device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Honeywell Resideo device.

  - <strong><code>honeywell_resideo_device_id</code></strong> <i>String</i>
  
    Device ID for a Honeywell Resideo device.

</details>

---

**`hubitat_metadata`** *Object*

Metadata for a Hubitat device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Hubitat device.

  - <strong><code>device_label</code></strong> <i>String</i>
  
    Device label for a Hubitat device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Hubitat device.

</details>

---

**`igloo_metadata`** *Object*

Metadata for an igloo device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>bridge_id</code></strong> <i>String</i>
  
    Bridge ID for an igloo device.

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for an igloo device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for an igloo device.

</details>

---

**`igloohome_metadata`** *Object*

Metadata for an igloohome device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>bridge_id</code></strong> <i>String</i>
  
    Bridge ID for an igloohome device.

  - <strong><code>bridge_name</code></strong> <i>String</i>
  
    Bridge name for an igloohome device.

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for an igloohome device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for an igloohome device.

  - <strong><code>is_keypad_linked_to_bridge</code></strong> <i>Boolean</i>
  
    Indicates whether a keypad is linked to a bridge for an igloohome device.

  - <strong><code>keypad_id</code></strong> <i>String</i>
  
    Keypad ID for an igloohome device.

</details>

---

**`is_cooling`** *Boolean*

Indicates whether the connected HVAC system is currently cooling, as reported by the thermostat.




---

**`is_fan_running`** *Boolean*

Indicates whether the fan in the connected HVAC system is currently running, as reported by the thermostat.




---

**`is_heating`** *Boolean*

Indicates whether the connected HVAC system is currently heating, as reported by the thermostat.




---

**`is_temporary_manual_override_active`** *Boolean*

Indicates whether the current thermostat settings differ from the most recent active program or schedule that Seam activated. For this condition to occur, `current_climate_setting.manual_override_allowed` must also be `true`.




---

**`keynest_metadata`** *Object*

Metadata for a KeyNest device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>address</code></strong> <i>String</i>
  
    Address for a KeyNest device.

  - <strong><code>current_or_last_store_id</code></strong> <i>Number</i>
  
    Current or last store ID for a KeyNest device.

  - <strong><code>current_status</code></strong> <i>String</i>
  
    Current status for a KeyNest device.

  - <strong><code>current_user_company</code></strong> <i>String</i>
  
    Current user company for a KeyNest device.

  - <strong><code>current_user_email</code></strong> <i>String</i>
  
    Current user email for a KeyNest device.

  - <strong><code>current_user_name</code></strong> <i>String</i>
  
    Current user name for a KeyNest device.

  - <strong><code>current_user_phone_number</code></strong> <i>String</i>
  
    Current user phone number for a KeyNest device.

  - <strong><code>default_office_id</code></strong> <i>Number</i>
  
    Default office ID for a KeyNest device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a KeyNest device.

  - <strong><code>fob_id</code></strong> <i>Number</i>
  
    Fob ID for a KeyNest device.

  - <strong><code>handover_method</code></strong> <i>String</i>
  
    Handover method for a KeyNest device.

  - <strong><code>has_photo</code></strong> <i>Boolean</i>
  
    Whether the KeyNest device has a photo.

  - <strong><code>is_quadient_locker</code></strong> <i>Boolean</i>
  
    Whether the key is in a locker that does not support the access codes API.

  - <strong><code>key_id</code></strong> <i>String</i>
  
    Key ID for a KeyNest device.

  - <strong><code>key_notes</code></strong> <i>String</i>
  
    Key notes for a KeyNest device.

  - <strong><code>keynest_app_user</code></strong> <i>String</i>
  
    KeyNest app user for a KeyNest device.

  - <strong><code>last_movement</code></strong> <i>String</i>
  
    Last movement timestamp for a KeyNest device.

  - <strong><code>property_id</code></strong> <i>String</i>
  
    Property ID for a KeyNest device.

  - <strong><code>property_postcode</code></strong> <i>String</i>
  
    Property postcode for a KeyNest device.

  - <strong><code>status_type</code></strong> <i>String</i>
  
    Status type for a KeyNest device.

  - <strong><code>subscription_plan</code></strong> <i>String</i>
  
    Subscription plan for a KeyNest device.

</details>

---

**`korelock_metadata`** *Object*

Metadata for a Korelock device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Korelock device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Korelock device.

  - <strong><code>firmware_version</code></strong> <i>String</i>
  
    Firmware version for a Korelock device.

  - <strong><code>model_code</code></strong> <i>String</i>
  
    Model code for a Korelock device.

  - <strong><code>serial_number</code></strong> <i>String</i>
  
    Serial number for a Korelock device.

  - <strong><code>wifi_signal_strength</code></strong> <i>Number</i>
  
    WiFi signal strength (0-1) for a Korelock device.

</details>

---

**`kwikset_metadata`** *Object*

Metadata for a Kwikset device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Kwikset device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Kwikset device.

  - <strong><code>model_number</code></strong> <i>String</i>
  
    Model number for a Kwikset device.

</details>

---

**`lockly_metadata`** *Object*

Metadata for a Lockly device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Lockly device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Lockly device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Lockly device.

</details>

---

**`max_cooling_set_point_celsius`** *Number*

Maximum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °C.




---

**`max_cooling_set_point_fahrenheit`** *Number*

Maximum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °F.




---

**`max_heating_set_point_celsius`** *Number*

Maximum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °C.




---

**`max_heating_set_point_fahrenheit`** *Number*

Maximum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °F.




---

**`max_thermostat_daily_program_periods_per_day`** *Number*

Maximum number of periods that the thermostat can support per day. For example, if the thermostat supports 4 periods per day, this value is 4.




---

**`max_unique_climate_presets_per_thermostat_weekly_program`** *Number*

Maximum number of climate presets that the thermostat can support for weekly programming.




---

**`min_cooling_set_point_celsius`** *Number*

Minimum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °C.




---

**`min_cooling_set_point_fahrenheit`** *Number*

Minimum [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#cooling-set-point) in °F.




---

**`min_heating_cooling_delta_celsius`** *Number*

Minimum [temperature difference](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#minimum-heating-cooling-temperature-delta) in °C between the cooling and heating set points when in heat-cool (auto) mode.




---

**`min_heating_cooling_delta_fahrenheit`** *Number*

Minimum [temperature difference](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#minimum-heating-cooling-temperature-delta) in °F between the cooling and heating set points when in heat-cool (auto) mode.




---

**`min_heating_set_point_celsius`** *Number*

Minimum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °C.




---

**`min_heating_set_point_fahrenheit`** *Number*

Minimum [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md#heating-set-point) in °F.




---

**`minut_metadata`** *Object*

Metadata for a Minut device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Minut device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Minut device.

  - <strong><code>latest_sensor_values</code></strong> <i>Object</i>
  
    Latest sensor values for a Minut device.

  - <strong><code>latest_sensor_values.accelerometer_z</code></strong> <i>Object</i>
  
    Latest accelerometer Z-axis reading for a Minut device.

  - <strong><code>latest_sensor_values.accelerometer_z.time</code></strong> <i>String</i>
  
    Time of latest accelerometer Z-axis reading for a Minut device.

  - <strong><code>latest_sensor_values.accelerometer_z.value</code></strong> <i>Number</i>
  
    Value of latest accelerometer Z-axis reading for a Minut device.

  - <strong><code>latest_sensor_values.humidity</code></strong> <i>Object</i>
  
    Latest humidity reading for a Minut device.

  - <strong><code>latest_sensor_values.humidity.time</code></strong> <i>String</i>
  
    Time of latest humidity reading for a Minut device.

  - <strong><code>latest_sensor_values.humidity.value</code></strong> <i>Number</i>
  
    Value of latest humidity reading for a Minut device.

  - <strong><code>latest_sensor_values.pressure</code></strong> <i>Object</i>
  
    Latest pressure reading for a Minut device.

  - <strong><code>latest_sensor_values.pressure.time</code></strong> <i>String</i>
  
    Time of latest pressure reading for a Minut device.

  - <strong><code>latest_sensor_values.pressure.value</code></strong> <i>Number</i>
  
    Value of latest pressure reading for a Minut device.

  - <strong><code>latest_sensor_values.sound</code></strong> <i>Object</i>
  
    Latest sound reading for a Minut device.

  - <strong><code>latest_sensor_values.sound.time</code></strong> <i>String</i>
  
    Time of latest sound reading for a Minut device.

  - <strong><code>latest_sensor_values.sound.value</code></strong> <i>Number</i>
  
    Value of latest sound reading for a Minut device.

  - <strong><code>latest_sensor_values.temperature</code></strong> <i>Object</i>
  
    Latest temperature reading for a Minut device.

  - <strong><code>latest_sensor_values.temperature.time</code></strong> <i>String</i>
  
    Time of latest temperature reading for a Minut device.

  - <strong><code>latest_sensor_values.temperature.value</code></strong> <i>Number</i>
  
    Value of latest temperature reading for a Minut device.

</details>

---

**`model`** *Object*

Device model-related properties.



<details>
  <summary>Child Properties</summary>

  - <strong><code>accessory_keypad_supported</code></strong> <i>Boolean</i>
  
  {% hint style="warning" %}
  **Deprecated**. use device.properties.model.can_connect_accessory_keypad
  {% endhint %}

  - <strong><code>can_connect_accessory_keypad</code></strong> <i>Boolean</i>
  
    Indicates whether the device can connect a accessory keypad.

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name of the device model.

  - <strong><code>has_built_in_keypad</code></strong> <i>Boolean</i>
  
    Indicates whether the device has a built in accessory keypad.

  - <strong><code>manufacturer_display_name</code></strong> <i>String</i>
  
    Display name that corresponds to the manufacturer-specific terminology for the device.

  - <strong><code>offline_access_codes_supported</code></strong> <i>Boolean</i>
  
  {% hint style="warning" %}
  **Deprecated**. use device.can_program_offline_access_codes.
  {% endhint %}

  - <strong><code>online_access_codes_supported</code></strong> <i>Boolean</i>
  
  {% hint style="warning" %}
  **Deprecated**. use device.can_program_online_access_codes.
  {% endhint %}

</details>

---

**`name`** *String*

Name of the device.

{% hint style="warning" %}
**Deprecated**. use device.display_name instead
{% endhint %}



---

**`nest_metadata`** *Object*

Metadata for a Google Nest device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_custom_name</code></strong> <i>String</i>
  
    Custom device name for a Google Nest device. The device owner sets this value.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Google Nest device. Google sets this value.

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for a Google Nest device.

  - <strong><code>nest_device_id</code></strong> <i>String</i>
  
    Device ID for a Google Nest device.

</details>

---

**`noiseaware_metadata`** *Object*

Metadata for a NoiseAware device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a NoiseAware device.

  - <strong><code>device_model</code></strong> <i>Enum</i>
  
    Device model for a NoiseAware device.
  <details>
      <summary>Enum values:</summary>
  
      - <code>indoor</code>
      - <code>outdoor</code>
  </details>

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a NoiseAware device.

  - <strong><code>noise_level_decibel</code></strong> <i>Number</i>
  
    Noise level, in decibels, for a NoiseAware device.

  - <strong><code>noise_level_nrs</code></strong> <i>Number</i>
  
    Noise level, expressed as a Noise Risk Score (NRS), for a NoiseAware device.

</details>

---

**`nuki_metadata`** *Object*

Metadata for a Nuki device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Nuki device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Nuki device.

  - <strong><code>keypad_2_paired</code></strong> <i>Boolean</i>
  
    Indicates whether keypad 2 is paired for a Nuki device.

  - <strong><code>keypad_battery_critical</code></strong> <i>Boolean</i>
  
    Indicates whether the keypad battery is in a critical state for a Nuki device.

  - <strong><code>keypad_paired</code></strong> <i>Boolean</i>
  
    Indicates whether the keypad is paired for a Nuki device.

</details>

---

**`online`** *Boolean*

Indicates whether the device is online.




---

**`relative_humidity`** *Number*

Reported relative humidity, as a value between 0 and 1, inclusive.




---

**`salto_ks_metadata`** *Object*

Metadata for a Salto KS device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>battery_level</code></strong> <i>String</i>
  
    Battery level for a Salto KS device.

  - <strong><code>customer_reference</code></strong> <i>String</i>
  
    Customer reference for a Salto KS device.

  - <strong><code>has_custom_pin_subscription</code></strong> <i>Boolean</i>
  
    Indicates whether the site has a Salto KS subscription that supports custom PINs.

  - <strong><code>lock_id</code></strong> <i>String</i>
  
    Lock ID for a Salto KS device.

  - <strong><code>lock_type</code></strong> <i>String</i>
  
    Lock type for a Salto KS device.

  - <strong><code>locked_state</code></strong> <i>String</i>
  
    Locked state for a Salto KS device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Salto KS device.

</details>

---

**`salto_metadata`** *Object*

Metada for a Salto device.

{% hint style="warning" %}
**Deprecated**. Use `salto_ks_metadata ` instead.
{% endhint %}


<details>
  <summary>Child Properties</summary>

  - <strong><code>battery_level</code></strong> <i>String</i>
  
    Battery level for a Salto device.

  - <strong><code>customer_reference</code></strong> <i>String</i>
  
    Customer reference for a Salto device.

  - <strong><code>lock_id</code></strong> <i>String</i>
  
    Lock ID for a Salto device.

  - <strong><code>lock_type</code></strong> <i>String</i>
  
    Lock type for a Salto device.

  - <strong><code>locked_state</code></strong> <i>String</i>
  
    Locked state for a Salto device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Salto device.

</details>

---

**`salto_space_credential_service_metadata`** *Object*

Salto Space credential service metadata for the phone.



<details>
  <summary>Child Properties</summary>

  - <strong><code>has_active_phone</code></strong> <i>Boolean</i>
  
    Indicates whether the credential service has an active associated phone.

</details>

---

**`schlage_metadata`** *Object*

Metadata for a Schlage device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Schlage device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Schlage device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a Schlage device.

</details>

---

**`seam_bridge_metadata`** *Object*

Metadata for Seam Bridge.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_num</code></strong> <i>Number</i>
  
    Device number for Seam Bridge.

  - <strong><code>name</code></strong> <i>String</i>
  
    Name for Seam Bridge.

  - <strong><code>unlock_method</code></strong> <i>Enum</i>
  
    Unlock method for Seam Bridge.
  <details>
      <summary>Enum values:</summary>
  
      - <code>bridge</code>
      - <code>doorking</code>
  </details>

</details>

---

**`sensi_metadata`** *Object*

Metadata for a Sensi device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Sensi device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Sensi device.

  - <strong><code>product_type</code></strong> <i>String</i>
  
    Product type for a Sensi device.

</details>

---

**`smartthings_metadata`** *Object*

Metadata for a SmartThings device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a SmartThings device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a SmartThings device.

  - <strong><code>location_id</code></strong> <i>String</i>
  
    Location ID for a SmartThings device.

  - <strong><code>model</code></strong> <i>String</i>
  
    Model for a SmartThings device.

</details>

---

**`tado_metadata`** *Object*

Metadata for a tado° device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_type</code></strong> <i>String</i>
  
    Device type for a tado° device.

  - <strong><code>serial_no</code></strong> <i>String</i>
  
    Serial number for a tado° device.

</details>

---

**`tedee_metadata`** *Object*

Metadata for a Tedee device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>bridge_id</code></strong> <i>Number</i>
  
    Bridge ID for a Tedee device.

  - <strong><code>bridge_name</code></strong> <i>String</i>
  
    Bridge name for a Tedee device.

  - <strong><code>device_id</code></strong> <i>Number</i>
  
    Device ID for a Tedee device.

  - <strong><code>device_model</code></strong> <i>String</i>
  
    Device model for a Tedee device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Tedee device.

  - <strong><code>keypad_id</code></strong> <i>Number</i>
  
    Keypad ID for a Tedee device.

  - <strong><code>serial_number</code></strong> <i>String</i>
  
    Serial number for a Tedee device.

</details>

---

**`temperature_celsius`** *Number*

Reported temperature in °C.




---

**`temperature_fahrenheit`** *Number*

Reported temperature in °F.




---

**`temperature_threshold`** *Object*

Current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.



<details>
  <summary>Child Properties</summary>

  - <strong><code>lower_limit_celsius</code></strong> <i>Number</i>
  
    Lower limit in °C within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

  - <strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>
  
    Lower limit in °F within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

  - <strong><code>upper_limit_celsius</code></strong> <i>Number</i>
  
    Upper limit in °C within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

  - <strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>
  
    Upper limit in °F within the current [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) set for the thermostat.

</details>

---

**`thermostat_daily_program_period_precision_minutes`** *Number*

Precision of the thermostat's period in minutes. For example, if the thermostat supports 15-minute periods, this value is 15. All values are relative to the top of the hour, so for 15 minutes, the periods would be 0, 15, 30, and 45 minutes past the hour.




---

**`thermostat_daily_programs`** *List* *of Objects*

Configured [daily programs](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md) for the thermostat.



<details>
  <summary>Child Object Properties</summary>
<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the thermostat daily program was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the thermostat device on which the thermostat daily program is configured.

<strong><code>name</code></strong> <i>String</i>

  User-friendly name to identify the thermostat daily program.

<strong><code>periods</code></strong> <i>List</i> <i>of Objects</i>

  Array of thermostat daily program periods.

- <strong><code>climate_preset_key</code></strong> <i>String</i>

  Key of the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) to activate at the `starts_at_time`.


- <strong><code>starts_at_time</code></strong> <i>String</i>

  Time at which the thermostat daily program period starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


<strong><code>thermostat_daily_program_id</code></strong> <i>UUID</i>

  ID of the thermostat daily program.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the thermostat daily program.

</details>

---

**`thermostat_weekly_program`** *Object*

Current [weekly program](../../capability-guides/thermostats/creating-and-managing-thermostat-programs.md) for the thermostat.



<details>
  <summary>Child Properties</summary>

  - <strong><code>created_at</code></strong> <i>Datetime</i>
  
    Date and time at which the thermostat weekly program was created.

  - <strong><code>friday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Fridays.

  - <strong><code>monday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Mondays.

  - <strong><code>saturday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Saturdays.

  - <strong><code>sunday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Sundays.

  - <strong><code>thursday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Thursdays.

  - <strong><code>tuesday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Tuesdays.

  - <strong><code>wednesday_program_id</code></strong> <i>UUID</i>
  
    ID of the thermostat daily program to run on Wednesdays.

</details>

---

**`ttlock_metadata`** *Object*

Metadata for a TTLock device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>feature_value</code></strong> <i>String</i>
  
    Feature value for a TTLock device.

  - <strong><code>features</code></strong> <i>Object</i>
  
    Features for a TTLock device.

  - <strong><code>features.incomplete_keyboard_passcode</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports an incomplete keyboard passcode.

  - <strong><code>features.lock_command</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports the lock command.

  - <strong><code>features.passcode</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports a passcode.

  - <strong><code>features.passcode_management</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports passcode management.

  - <strong><code>features.unlock_via_gateway</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports unlock via gateway.

  - <strong><code>features.wifi</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device supports Wi-Fi.

  - <strong><code>has_gateway</code></strong> <i>Boolean</i>
  
    Indicates whether a TTLock device has a gateway.

  - <strong><code>lock_alias</code></strong> <i>String</i>
  
    Lock alias for a TTLock device.

  - <strong><code>lock_id</code></strong> <i>Number</i>
  
    Lock ID for a TTLock device.

  - <strong><code>wireless_keypads</code></strong> <i>List</i> <i>of Objects</i>
  
    Wireless keypads for a TTLock device.

- <strong><code>wireless_keypad_id</code></strong> <i>Number</i>

  ID for a wireless keypad for a TTLock device.


- <strong><code>wireless_keypad_name</code></strong> <i>String</i>

  Name for a wireless keypad for a TTLock device.


</details>

---

**`two_n_metadata`** *Object*

Metadata for a 2N device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>Number</i>
  
    Device ID for a 2N device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a 2N device.

</details>

---

**`ultraloq_metadata`** *Object*

Metadata for an Ultraloq device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for an Ultraloq device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for an Ultraloq device.

  - <strong><code>device_type</code></strong> <i>String</i>
  
    Device type for an Ultraloq device.

  - <strong><code>time_zone</code></strong> <i>String</i>
  
    IANA timezone for the Ultraloq device.

</details>

---

**`visionline_metadata`** *Object*

Metadata for an ASSA ABLOY Visionline system.



<details>
  <summary>Child Properties</summary>

  - <strong><code>encoder_id</code></strong> <i>String</i>
  
    Encoder ID for an ASSA ABLOY Visionline system.

</details>

---

**`wyze_metadata`** *Object*

Metadata for a Wyze device.



<details>
  <summary>Child Properties</summary>

  - <strong><code>device_id</code></strong> <i>String</i>
  
    Device ID for a Wyze device.

  - <strong><code>device_info_model</code></strong> <i>String</i>
  
    Device information model for a Wyze device.

  - <strong><code>device_name</code></strong> <i>String</i>
  
    Device name for a Wyze device.

  - <strong><code>keypad_uuid</code></strong> <i>String</i>
  
    Keypad UUID for a Wyze device.

  - <strong><code>locker_status_hardlock</code></strong> <i>Number</i>
  
    Locker status (hardlock) for a Wyze device.

  - <strong><code>product_model</code></strong> <i>String</i>
  
    Product model for a Wyze device.

  - <strong><code>product_name</code></strong> <i>String</i>
  
    Product name for a Wyze device.

  - <strong><code>product_type</code></strong> <i>String</i>
  
    Product type for a Wyze device.

</details>

---


## Errors

**`auxiliary_heat_running`**

Indicates that the auxiliary heat is running.

---

**`ttlock_lock_not_paired_to_gateway`**

Indicates that the lock is not paired with a gateway.

---

**`subscription_required`**

Indicates that a subscription is required to connect.

---

**`missing_device_credentials`**

Indicates that device credentials are missing.

---

**`lockly_missing_wifi_bridge`**

Indicates that the Lockly lock is not connected to a Wi-Fi bridge.

---

**`hub_disconnected`**

Indicates that the hub is disconnected.

---

**`device_removed`**

Indicates that the device has been removed.

---

**`device_offline`**

Indicates that the device is offline.

---

**`device_disconnected`**

Indicates that the device is disconnected.

---

**`account_disconnected`**

Indicates that the account is disconnected.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../capability-guides/seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---


## Warnings

**`device_communication_degraded`**

Indicates that the device appears to be unresponsive.

---

**`device_has_flaky_connection`**

Indicates that the device has a flaky connection.

---

**`lockly_time_zone_not_configured`**

Indicates that Seam detected that the Lockly device does not have a time zone configured. Time-bound codes may not work as expected.

---

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site.

---

**`scheduled_maintenance_window`**

Indicates that a scheduled maintenance window has been detected.

---

**`temperature_threshold_exceeded`**

Indicates that the temperature threshold has been exceeded.

---

**`third_party_integration_detected`**

Indicates that a third-party integration has been detected.

---

**`ttlock_weak_gateway_signal`**

Indicates that the gateway signal is weak.

---

**`ultraloq_time_zone_unknown`**

Indicates that Seam does not know the time zone of the Ultraloq device. Set a time zone to enable time-bound access codes.

---

**`wyze_device_missing_gateway`**

Indicates that the Wyze Lock is not connected to a gateway.

---


## Events

**`thermostat.climate_preset_activated`**

A thermostat [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) was activated.

<details>

<summary>Properties</summary>

<strong><code>climate_preset_key</code></strong> <i>String</i>

  Key of the climate preset that was activated.

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.climate_preset_activated`

<strong><code>is_fallback_climate_preset</code></strong> <i>Boolean</i>

  Indicates whether the climate preset that was activated is the fallback climate preset for the thermostat.

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>thermostat_schedule_id</code></strong> <i>UUID</i>

  ID of the thermostat schedule that prompted the affected climate preset to be activated.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`thermostat.manually_adjusted`**

A [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) was adjusted manually.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.manually_adjusted`

<strong><code>fan_mode_setting</code></strong> <i>Enum</i>

  Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.
<details>
    <summary>Enum values:</summary>

    - <code>auto</code>
    - <code>on</code>
    - <code>circulate</code>
</details>

<strong><code>heating_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>heating_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>hvac_mode_setting</code></strong> <i>Enum</i>

  Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.
<details>
    <summary>Enum values:</summary>

    - <code>off</code>
    - <code>heat</code>
    - <code>cool</code>
    - <code>heat_cool</code>
    - <code>eco</code>
</details>

<strong><code>method</code></strong> <i>Enum</i>

  Method used to adjust the affected thermostat manually. `seam` indicates that the Seam API, Seam CLI, or Seam Console was used to adjust the thermostat.
<details>
    <summary>Enum values:</summary>

    - <code>seam</code>
    - <code>external</code>
</details>

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`thermostat.temperature_threshold_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading exceeded the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_threshold_exceeded`

<strong><code>lower_limit_celsius</code></strong> <i>Number</i>

  Lower temperature limit, in °C, defined by the set threshold.

<strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>

  Lower temperature limit, in °F, defined by the set threshold.

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>upper_limit_celsius</code></strong> <i>Number</i>

  Upper temperature limit, in °C, defined by the set threshold.

<strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>

  Upper temperature limit, in °F, defined by the set threshold.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`thermostat.temperature_threshold_no_longer_exceeded`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading no longer exceeds the set [threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md).

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_threshold_no_longer_exceeded`

<strong><code>lower_limit_celsius</code></strong> <i>Number</i>

  Lower temperature limit, in °C, defined by the set threshold.

<strong><code>lower_limit_fahrenheit</code></strong> <i>Number</i>

  Lower temperature limit, in °F, defined by the set threshold.

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>upper_limit_celsius</code></strong> <i>Number</i>

  Upper temperature limit, in °C, defined by the set threshold.

<strong><code>upper_limit_fahrenheit</code></strong> <i>Number</i>

  Upper temperature limit, in °F, defined by the set threshold.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`thermostat.temperature_reached_set_point`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) temperature reading is within 1 °C of the configured cooling or heating [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>desired_temperature_celsius</code></strong> <i>Number</i>

  Desired temperature, in °C, defined by the affected thermostat's cooling or heating set point.

<strong><code>desired_temperature_fahrenheit</code></strong> <i>Number</i>

  Desired temperature, in °F, defined by the affected thermostat's cooling or heating set point.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_reached_set_point`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`thermostat.temperature_changed`**

A [thermostat's](https://docs.seam.co/latest/capability-guides/thermostats) reported temperature changed by at least 1 °C.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `thermostat.temperature_changed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>temperature_celsius</code></strong> <i>Number</i>

  Temperature, in °C, reported by the affected thermostat.

<strong><code>temperature_fahrenheit</code></strong> <i>Number</i>

  Temperature, in °F, reported by the affected thermostat.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/thermostats/activate_climate_preset`**](./activate_climate_preset.md)

Activates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/cool`**](./cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [cool mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/create_climate_preset`**](./create_climate_preset.md)

Creates a [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/delete_climate_preset`**](./delete_climate_preset.md)

Deletes a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/heat`**](./heat.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/heat_cool`**](./heat_cool.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/list`**](./list.md)

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/off`**](./off.md)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to ["off" mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


[**`/thermostats/set_fallback_climate_preset`**](./set_fallback_climate_preset.md)

Sets a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) as the ["fallback"](../../capability-guides/thermostats/creating-and-managing-climate-presets/setting-the-fallback-climate-preset.md) preset for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/set_fan_mode`**](./set_fan_mode.md)

Sets the [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/set_hvac_mode`**](./set_hvac_mode.md)

Sets the [HVAC mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/set_temperature_threshold`**](./set_temperature_threshold.md)

Sets a [temperature threshold](../../capability-guides/thermostats/setting-and-monitoring-temperature-thresholds.md) for a specified thermostat. Seam emits a `thermostat.temperature_threshold_exceeded` event and adds a warning on a thermostat if it reports a temperature outside the threshold range.


[**`/thermostats/update_climate_preset`**](./update_climate_preset.md)

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


[**`/thermostats/update_weekly_program`**](./update_weekly_program.md)

Updates the thermostat weekly program for a thermostat device. To configure a weekly program, specify the ID of the daily program that you want to use for each day of the week. When you update a weekly program, the set of programs that you specify overwrites any previous weekly program for the thermostat.


