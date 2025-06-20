# Thermostats

## The device Object for Thermostats

- [Properties](./#properties)
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

## The device Object

- [Properties](./#properties)
- [device.properties](./#device.properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [device](../../core-concepts/devices/README.md) that has been connected to Seam.

{% tabs %}
{% tab title="Lock Device" %}

A lock device resource.

```json
{
  "can_program_online_access_codes": true,
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "capabilities_supported": ["access_code", "lock"],
  "connected_account_id": "8e3a4f1b-2c7d-4a9e-8b5f-3d2c1a0b9e8f",
  "created_at": "2025-03-27T02:08:16.418Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a69569e1-133b-4a9d-b883-018641bfe543",
  "device_type": "schlage_lock",
  "display_name": "FRONT DOOR",
  "errors": [],
  "is_managed": true,
  "location": { "location_name": "Front Door", "timezone": "America/New_York" },
  "nickname": "Front Door",
  "properties": {
    "appearance": { "name": "FRONT DOOR" },
    "battery": { "level": 0.48, "status": "good" },
    "battery_level": 0.48,
    "code_constraints": [{ "constraint_type": "name_length", "max_length": 9 }],
    "has_native_entry_events": true,
    "image_alt_text": "Schlage Sense Smart Deadbolt with Camelot Trim, Front",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/schlage_sense-smart-deadbolt-with-camelot-trim_front.png&q=75&w=128",
    "locked": false,
    "manufacturer": "schlage",
    "model": {
      "accessory_keypad_supported": false,
      "can_connect_accessory_keypad": false,
      "display_name": "Encode",
      "has_built_in_keypad": true,
      "manufacturer_display_name": "Schlage",
      "offline_access_codes_supported": false,
      "online_access_codes_supported": true
    },
    "name": "FRONT DOOR",
    "offline_access_codes_enabled": false,
    "online": true,
    "online_access_codes_enabled": true,
    "schlage_metadata": {
      "device_id": "a69569e1-133b-4a9d-b883-018641bfe543",
      "device_name": "FRONT DOOR",
      "model": "Encode"
    },
    "serial_number": "34000000000531e0",
    "supported_code_lengths": [4, 5, 6, 7, 8],
    "supports_backup_access_code_pool": true,
    "supports_offline_access_codes": false
  },
  "warnings": [],
  "workspace_id": "5d7f2e1a-9c8b-4f3e-8d2c-1a0b9e8f7c6d"
}
```
{% endtab %}
{% tab title="Noise Sensor Device" %}

A noise sensor device resource.

```json
{
  "capabilities_supported": ["noise_detection"],
  "connected_account_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
  "created_at": "2025-05-16T16:54:17.946049Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "f1e2d3c4-b5a6-4d7c-8e9f-0a1b2c3d4e5f",
  "device_type": "minut_sensor",
  "display_name": "Living Room",
  "errors": [],
  "is_managed": true,
  "location": {
    "location_name": "Jane's Test Home",
    "timezone": "America/Los_Angeles"
  },
  "nickname": "Living Room",
  "properties": {
    "appearance": { "name": "Living Room" },
    "battery": { "level": 1, "status": "full" },
    "battery_level": 1,
    "currently_triggering_noise_threshold_ids": [],
    "image_alt_text": "Minut Sensor",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/minut_gen-3_front.png&q=75&w=128",
    "manufacturer": "minut",
    "minut_metadata": {
      "device_id": "770cd3153deca3dee0fe0614",
      "device_location": { "latitude": 0, "longitude": 0 },
      "device_name": "Living Room",
      "home_address": {
        "city": "San Francisco",
        "country": "US",
        "notes": "string",
        "post_code": "44210",
        "region": "San Francisco County",
        "street_name1": "2258 24th Street",
        "street_name2": ""
      },
      "home_id": "2978b6d5dba395ec08300e46",
      "home_location": { "latitude": 0, "longitude": 0 },
      "home_name": "Jane's Test Home",
      "latest_sensor_values": {
        "accelerometer_z": {
          "time": "2025-06-16T16:54:17.946049Z",
          "value": -1.00390625
        },
        "humidity": {
          "time": "2025-06-16T16:54:17.946049Z",
          "value": 31.110000610351562
        },
        "pressure": { "time": "2025-06-16T16:54:17.946049Z", "value": 101923 },
        "sound": {
          "time": "2025-06-16T16:54:17.946049Z",
          "value": 47.7117919921875
        },
        "temperature": {
          "time": "2025-06-16T16:54:17.946049Z",
          "value": 21.270000457763672
        }
      }
    },
    "model": {
      "display_name": "Noise Sensor",
      "manufacturer_display_name": "Minut"
    },
    "name": "Living Room",
    "noise_level_decibels": 47.7117919921875,
    "online": true
  },
  "warnings": [],
  "workspace_id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
}
```
{% endtab %}
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
        "can_program": false,
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
        "can_program": false,
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
        "can_program": false,
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


## device.properties

## Thermostats
**`active_thermostat_schedule`** *Object*

Active [thermostat schedule](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md).



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

**`available_climate_presets`** *List* *of Objects*

Available [climate presets](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for the thermostat.



<details>
  <summary>Child Object Properties</summary>

  <strong><code>can_delete</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

  <strong><code>can_edit</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

  <strong><code>can_program</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

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

**`current_climate_setting`** *Object*

Current climate setting.



<details>
  <summary>Child Properties</summary>

  - <strong><code>can_delete</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be deleted.

  - <strong><code>can_edit</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be edited.

  - <strong><code>can_program</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

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

  - <strong><code>can_program</code></strong> <i>Boolean</i>
  
    Indicates whether the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) key can be programmed in a thermostat daily program.

  - <strong><code>climate_preset_key</code></strong> <i>String</i>
  
    Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

  - <strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>
  
    Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

  - <strong><code>display_name</code></strong> <i>String</i>
  
    Display name for the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

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

**`relative_humidity`** *Number*

Reported relative humidity, as a value between 0 and 1, inclusive.




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


## Errors

### Thermostats
**`auxiliary_heat_running`**

Indicates that the auxiliary heat is running.

---


## Warnings

### Thermostats
**`nest_thermostat_in_manual_eco_mode`**

Indicates that the Nest thermostat is in manual eco mode.

---

**`temperature_threshold_exceeded`**

Indicates that the temperature threshold has been exceeded.

---


## Events

**`thermostat.climate_preset_activated`**

A thermostat [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) was activated.

<details>

<summary>Properties</summary>

<strong><code>climate_preset_key</code></strong> <i>String</i>

  Key of the climate preset that was activated.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

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

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>cooling_set_point_celsius</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>cooling_set_point_fahrenheit</code></strong> <i>Number</i>

  Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

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

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

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

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

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

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>desired_temperature_celsius</code></strong> <i>Number</i>

  Desired temperature, in °C, defined by the affected thermostat's cooling or heating set point.

<strong><code>desired_temperature_fahrenheit</code></strong> <i>Number</i>

  Desired temperature, in °F, defined by the affected thermostat's cooling or heating set point.

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

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

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


