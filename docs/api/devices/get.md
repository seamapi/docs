# Get a Device

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a specified [device](../../core-concepts/devices/README.md).

You must specify either `device_id` or `name`.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified device, using an ID.

#### Code:

```javascript
await seam.devices.get({ device_id: "a75bff05-29a3-4215-a09f-2156c52a4ac7" });
```

#### Output:

```javascript
{
  "can_hvac_cool": true,
  "can_hvac_heat": true,
  "can_hvac_heat_cool": true,
  "can_turn_off_hvac": true,
  "capabilities_supported": ["thermostat"],
  "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "created_at": "2024-10-03T22:12:15.666Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
    "appearance": { "name": "My Device" },
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
    "name": "My Device",
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
        "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
        "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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

{% tab title="cURL" %}

Returns a specified device, using an ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7"
}
EOF
```

#### Output:

```curl
{
  "device": {
    "can_hvac_cool": true,
    "can_hvac_heat": true,
    "can_hvac_heat_cool": true,
    "can_turn_off_hvac": true,
    "capabilities_supported": ["thermostat"],
    "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    "created_at": "2024-10-03T22:12:15.666Z",
    "custom_metadata": { "id": "internalId1" },
    "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
      "appearance": { "name": "My Device" },
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
      "name": "My Device",
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
          "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
          "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified device, using an ID.

#### Code:

```python
seam.devices.get(device_id="a75bff05-29a3-4215-a09f-2156c52a4ac7")
```

#### Output:

```python
Device(
    can_hvac_cool=true,
    can_hvac_heat=true,
    can_hvac_heat_cool=true,
    can_turn_off_hvac=true,
    capabilities_supported=["thermostat"],
    connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    created_at="2024-10-03T22:12:15.666Z",
    custom_metadata={"id": "internalId1"},
    device_id="a75bff05-29a3-4215-a09f-2156c52a4ac7",
    device_type="ecobee_thermostat",
    display_name="Living Room",
    errors=[],
    is_managed=true,
    location={
        "location_name": "2948 20th St, San Francisco, CA, 94110, US",
        "timezone": "America/Los_Angeles",
    },
    nickname="Living Room",
    properties={
        "active_climate_preset": {
            "can_delete": true,
            "can_edit": true,
            "climate_preset_key": "sleep",
            "cooling_set_point_celsius": 23.88888888888889,
            "display_name": "Sleep",
            "fan_mode_setting": "auto",
            "heating_set_point_celsius": 17.77777777777778,
            "hvac_mode_setting": "heat_cool",
            "manual_override_allowed": true,
        },
        "appearance": {"name": "My Device"},
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
                "heating_set_point_fahrenheit": 64,
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
                "heating_set_point_fahrenheit": 64,
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
                "heating_set_point_fahrenheit": 64,
            },
        ],
        "available_fan_mode_settings": ["auto", "on"],
        "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
        "current_climate_setting": {
            "display_name": "Manual Setting",
            "fan_mode_setting": "auto",
            "heating_set_point_celsius": 25,
            "heating_set_point_fahrenheit": 77,
            "hvac_mode_setting": "heat",
            "manual_override_allowed": true,
        },
        "ecobee_metadata": {
            "device_name": "Living Room",
            "ecobee_device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        "model": {"display_name": "Thermostat", "manufacturer_display_name": "Ecobee"},
        "name": "My Device",
        "online": true,
        "relative_humidity": 0.36,
        "temperature_celsius": 21.11111111111111,
        "temperature_fahrenheit": 70,
        "temperature_threshold": {
            "lower_limit_celsius": 16.66666666666667,
            "lower_limit_fahrenheit": 62,
            "upper_limit_celsius": 26.66666666666667,
            "upper_limit_fahrenheit": 80,
        },
        "thermostat_daily_programs": [
            {
                "thermostat_daily_program_id": "1a2b3c4d-5e6f-7890-1234-56789abcdef1",
                "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
                "name": "Weekday Program",
                "periods": [
                    {"starts_at_time": "00:00:00", "climate_preset_key": "sleep"},
                    {"starts_at_time": "07:00:00", "climate_preset_key": "home"},
                    {"starts_at_time": "09:00:00", "climate_preset_key": "work"},
                    {"starts_at_time": "18:00:00", "climate_preset_key": "home"},
                    {"starts_at_time": "22:00:00", "climate_preset_key": "sleep"},
                ],
                "workspace_id": "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at": "2025-05-30T04:01:25.455Z",
            },
            {
                "thermostat_daily_program_id": "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f90",
                "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
                "name": "Weekend Program",
                "periods": [
                    {"starts_at_time": "00:00:00", "climate_preset_key": "sleep"},
                    {"starts_at_time": "08:00:00", "climate_preset_key": "home"},
                    {"starts_at_time": "23:00:00", "climate_preset_key": "sleep"},
                ],
                "workspace_id": "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at": "2025-05-30T04:02:19.952Z",
            },
        ],
        "thermostat_weekly_program": null,
    },
    warnings=[],
    workspace_id="9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified device, using an ID.

#### Code:

```ruby
seam.devices.get(device_id: "a75bff05-29a3-4215-a09f-2156c52a4ac7")
```

#### Output:

```ruby
{
  "can_hvac_cool" => true,
  "can_hvac_heat" => true,
  "can_hvac_heat_cool" => true,
  "can_turn_off_hvac" => true,
  "capabilities_supported" => ["thermostat"],
  "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "created_at" => "2024-10-03T22:12:15.666Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "device_id" => "a75bff05-29a3-4215-a09f-2156c52a4ac7",
  "device_type" => "ecobee_thermostat",
  "display_name" => "Living Room",
  "errors" => [],
  "is_managed" => true,
  "location" => {
    location_name: "2948 20th St, San Francisco, CA, 94110, US",
    timezone: "America/Los_Angeles",
  },
  "nickname" => "Living Room",
  "properties" => {
    active_climate_preset: {
      can_delete: true,
      can_edit: true,
      climate_preset_key: "sleep",
      cooling_set_point_celsius: 23.88888888888889,
      display_name: "Sleep",
      fan_mode_setting: "auto",
      heating_set_point_celsius: 17.77777777777778,
      hvac_mode_setting: "heat_cool",
      manual_override_allowed: true,
    },
    appearance: {
      name: "My Device",
    },
    available_climate_presets: [
      {
        climate_preset_key: "sleep",
        can_edit: true,
        can_delete: true,
        can_use_with_thermostat_daily_programs: false,
        name: "Sleep",
        display_name: "Sleep",
        fan_mode_setting: "auto",
        hvac_mode_setting: "heat_cool",
        manual_override_allowed: true,
        cooling_set_point_celsius: 23.88888888888889,
        heating_set_point_celsius: 17.77777777777778,
        cooling_set_point_fahrenheit: 75,
        heating_set_point_fahrenheit: 64,
      },
      {
        climate_preset_key: "home",
        can_edit: true,
        can_delete: true,
        can_use_with_thermostat_daily_programs: false,
        name: "Home",
        display_name: "Home",
        fan_mode_setting: "auto",
        hvac_mode_setting: "heat_cool",
        manual_override_allowed: false,
        cooling_set_point_celsius: 23.88888888888889,
        heating_set_point_celsius: 17.77777777777778,
        cooling_set_point_fahrenheit: 75,
        heating_set_point_fahrenheit: 64,
      },
      {
        climate_preset_key: "work",
        can_edit: true,
        can_delete: true,
        can_use_with_thermostat_daily_programs: false,
        name: "Work",
        display_name: "Work",
        fan_mode_setting: "auto",
        hvac_mode_setting: "heat_cool",
        manual_override_allowed: false,
        cooling_set_point_celsius: 23.88888888888889,
        heating_set_point_celsius: 17.77777777777778,
        cooling_set_point_fahrenheit: 75,
        heating_set_point_fahrenheit: 64,
      },
    ],
    available_fan_mode_settings: %w[auto on],
    available_hvac_mode_settings: %w[cool heat heat_cool off],
    current_climate_setting: {
      display_name: "Manual Setting",
      fan_mode_setting: "auto",
      heating_set_point_celsius: 25,
      heating_set_point_fahrenheit: 77,
      hvac_mode_setting: "heat",
      manual_override_allowed: true,
    },
    ecobee_metadata: {
      device_name: "Living Room",
      ecobee_device_id: "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
    },
    fallback_climate_preset_key: "eco",
    fan_mode_setting: "auto",
    has_direct_power: true,
    image_alt_text: "Ecobee 3 Lite Thermostat",
    image_url:
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png&q=75&w=128",
    is_cooling: false,
    is_fan_running: false,
    is_heating: false,
    is_temporary_manual_override_active: false,
    manufacturer: "ecobee",
    max_cooling_set_point_celsius: 33.333333333333336,
    max_cooling_set_point_fahrenheit: 92,
    max_heating_set_point_celsius: 26.11111111111111,
    max_heating_set_point_fahrenheit: 79,
    min_cooling_set_point_celsius: 18.333333333333336,
    min_cooling_set_point_fahrenheit: 65,
    min_heating_cooling_delta_celsius: 2.7777777777777777,
    min_heating_cooling_delta_fahrenheit: 5,
    min_heating_set_point_celsius: 7.222222222222222,
    min_heating_set_point_fahrenheit: 45,
    model: {
      display_name: "Thermostat",
      manufacturer_display_name: "Ecobee",
    },
    name: "My Device",
    online: true,
    relative_humidity: 0.36,
    temperature_celsius: 21.11111111111111,
    temperature_fahrenheit: 70,
    temperature_threshold: {
      lower_limit_celsius: 16.66666666666667,
      lower_limit_fahrenheit: 62,
      upper_limit_celsius: 26.66666666666667,
      upper_limit_fahrenheit: 80,
    },
    thermostat_daily_programs: [
      {
        thermostat_daily_program_id: "1a2b3c4d-5e6f-7890-1234-56789abcdef1",
        device_id: "a75bff05-29a3-4215-a09f-2156c52a4ac7",
        name: "Weekday Program",
        periods: [
          { starts_at_time: "00:00:00", climate_preset_key: "sleep" },
          { starts_at_time: "07:00:00", climate_preset_key: "home" },
          { starts_at_time: "09:00:00", climate_preset_key: "work" },
          { starts_at_time: "18:00:00", climate_preset_key: "home" },
          { starts_at_time: "22:00:00", climate_preset_key: "sleep" },
        ],
        workspace_id: "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
        created_at: "2025-05-30T04:01:25.455Z",
      },
      {
        thermostat_daily_program_id: "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f90",
        device_id: "a75bff05-29a3-4215-a09f-2156c52a4ac7",
        name: "Weekend Program",
        periods: [
          { starts_at_time: "00:00:00", climate_preset_key: "sleep" },
          { starts_at_time: "08:00:00", climate_preset_key: "home" },
          { starts_at_time: "23:00:00", climate_preset_key: "sleep" },
        ],
        workspace_id: "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
        created_at: "2025-05-30T04:02:19.952Z",
      },
    ],
    thermostat_weekly_program: null,
  },
  "warnings" => [],
  "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified device, using an ID.

#### Code:

```php
$seam->devices->get(device_id: "a75bff05-29a3-4215-a09f-2156c52a4ac7");
```

#### Output:

```php
[
    "can_hvac_cool" => true,
    "can_hvac_heat" => true,
    "can_hvac_heat_cool" => true,
    "can_turn_off_hvac" => true,
    "capabilities_supported" => ["thermostat"],
    "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    "created_at" => "2024-10-03T22:12:15.666Z",
    "custom_metadata" => ["id" => "internalId1"],
    "device_id" => "a75bff05-29a3-4215-a09f-2156c52a4ac7",
    "device_type" => "ecobee_thermostat",
    "display_name" => "Living Room",
    "errors" => [],
    "is_managed" => true,
    "location" => [
        "location_name" => "2948 20th St, San Francisco, CA, 94110, US",
        "timezone" => "America/Los_Angeles",
    ],
    "nickname" => "Living Room",
    "properties" => [
        "active_climate_preset" => [
            "can_delete" => true,
            "can_edit" => true,
            "climate_preset_key" => "sleep",
            "cooling_set_point_celsius" => 23.88888888888889,
            "display_name" => "Sleep",
            "fan_mode_setting" => "auto",
            "heating_set_point_celsius" => 17.77777777777778,
            "hvac_mode_setting" => "heat_cool",
            "manual_override_allowed" => true,
        ],
        "appearance" => ["name" => "My Device"],
        "available_climate_presets" => [
            [
                "climate_preset_key" => "sleep",
                "can_edit" => true,
                "can_delete" => true,
                "can_use_with_thermostat_daily_programs" => false,
                "name" => "Sleep",
                "display_name" => "Sleep",
                "fan_mode_setting" => "auto",
                "hvac_mode_setting" => "heat_cool",
                "manual_override_allowed" => true,
                "cooling_set_point_celsius" => 23.88888888888889,
                "heating_set_point_celsius" => 17.77777777777778,
                "cooling_set_point_fahrenheit" => 75,
                "heating_set_point_fahrenheit" => 64,
            ],
            [
                "climate_preset_key" => "home",
                "can_edit" => true,
                "can_delete" => true,
                "can_use_with_thermostat_daily_programs" => false,
                "name" => "Home",
                "display_name" => "Home",
                "fan_mode_setting" => "auto",
                "hvac_mode_setting" => "heat_cool",
                "manual_override_allowed" => false,
                "cooling_set_point_celsius" => 23.88888888888889,
                "heating_set_point_celsius" => 17.77777777777778,
                "cooling_set_point_fahrenheit" => 75,
                "heating_set_point_fahrenheit" => 64,
            ],
            [
                "climate_preset_key" => "work",
                "can_edit" => true,
                "can_delete" => true,
                "can_use_with_thermostat_daily_programs" => false,
                "name" => "Work",
                "display_name" => "Work",
                "fan_mode_setting" => "auto",
                "hvac_mode_setting" => "heat_cool",
                "manual_override_allowed" => false,
                "cooling_set_point_celsius" => 23.88888888888889,
                "heating_set_point_celsius" => 17.77777777777778,
                "cooling_set_point_fahrenheit" => 75,
                "heating_set_point_fahrenheit" => 64,
            ],
        ],
        "available_fan_mode_settings" => ["auto", "on"],
        "available_hvac_mode_settings" => ["cool", "heat", "heat_cool", "off"],
        "current_climate_setting" => [
            "display_name" => "Manual Setting",
            "fan_mode_setting" => "auto",
            "heating_set_point_celsius" => 25,
            "heating_set_point_fahrenheit" => 77,
            "hvac_mode_setting" => "heat",
            "manual_override_allowed" => true,
        ],
        "ecobee_metadata" => [
            "device_name" => "Living Room",
            "ecobee_device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
        ],
        "fallback_climate_preset_key" => "eco",
        "fan_mode_setting" => "auto",
        "has_direct_power" => true,
        "image_alt_text" => "Ecobee 3 Lite Thermostat",
        "image_url" =>
            "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png&q=75&w=128",
        "is_cooling" => false,
        "is_fan_running" => false,
        "is_heating" => false,
        "is_temporary_manual_override_active" => false,
        "manufacturer" => "ecobee",
        "max_cooling_set_point_celsius" => 33.333333333333336,
        "max_cooling_set_point_fahrenheit" => 92,
        "max_heating_set_point_celsius" => 26.11111111111111,
        "max_heating_set_point_fahrenheit" => 79,
        "min_cooling_set_point_celsius" => 18.333333333333336,
        "min_cooling_set_point_fahrenheit" => 65,
        "min_heating_cooling_delta_celsius" => 2.7777777777777777,
        "min_heating_cooling_delta_fahrenheit" => 5,
        "min_heating_set_point_celsius" => 7.222222222222222,
        "min_heating_set_point_fahrenheit" => 45,
        "model" => [
            "display_name" => "Thermostat",
            "manufacturer_display_name" => "Ecobee",
        ],
        "name" => "My Device",
        "online" => true,
        "relative_humidity" => 0.36,
        "temperature_celsius" => 21.11111111111111,
        "temperature_fahrenheit" => 70,
        "temperature_threshold" => [
            "lower_limit_celsius" => 16.66666666666667,
            "lower_limit_fahrenheit" => 62,
            "upper_limit_celsius" => 26.66666666666667,
            "upper_limit_fahrenheit" => 80,
        ],
        "thermostat_daily_programs" => [
            [
                "thermostat_daily_program_id" =>
                    "1a2b3c4d-5e6f-7890-1234-56789abcdef1",
                "device_id" => "a75bff05-29a3-4215-a09f-2156c52a4ac7",
                "name" => "Weekday Program",
                "periods" => [
                    [
                        "starts_at_time" => "00:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                    [
                        "starts_at_time" => "07:00:00",
                        "climate_preset_key" => "home",
                    ],
                    [
                        "starts_at_time" => "09:00:00",
                        "climate_preset_key" => "work",
                    ],
                    [
                        "starts_at_time" => "18:00:00",
                        "climate_preset_key" => "home",
                    ],
                    [
                        "starts_at_time" => "22:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                ],
                "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at" => "2025-05-30T04:01:25.455Z",
            ],
            [
                "thermostat_daily_program_id" =>
                    "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f90",
                "device_id" => "a75bff05-29a3-4215-a09f-2156c52a4ac7",
                "name" => "Weekend Program",
                "periods" => [
                    [
                        "starts_at_time" => "00:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                    [
                        "starts_at_time" => "08:00:00",
                        "climate_preset_key" => "home",
                    ],
                    [
                        "starts_at_time" => "23:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                ],
                "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at" => "2025-05-30T04:02:19.952Z",
            ],
        ],
        "thermostat_weekly_program" => null,
    ],
    "warnings" => [],
    "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified device, using an ID.

#### Code:

```seam_cli
seam devices get --device_id "a75bff05-29a3-4215-a09f-2156c52a4ac7"
```

#### Output:

```seam_cli
{
  "can_hvac_cool": true,
  "can_hvac_heat": true,
  "can_hvac_heat_cool": true,
  "can_turn_off_hvac": true,
  "capabilities_supported": ["thermostat"],
  "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "created_at": "2024-10-03T22:12:15.666Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
    "appearance": { "name": "My Device" },
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
    "name": "My Device",
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
        "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
        "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String*

ID of the device that you want to get.

---

**`name`** *String*

Name of the device that you want to get.

---


## Response

{% hint style="success" %}
**Returns:**
[device](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "can_program_online_access_codes": true,
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "capabilities_supported": ["access_code", "lock"],
  "connected_account_id": "8e3a4f1b-2c7d-4a9e-8b5f-3d2c1a0b9e8f",
  "created_at": "2025-03-27T02:08:16.418Z",
  "space_ids": [],
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
{% endtabs %}

---

## Examples


### Get a device by name

Returns a specified device, using a name.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.get({ name: "My Device" });
```

#### Output:

```javascript
{
  "can_hvac_cool": true,
  "can_hvac_heat": true,
  "can_hvac_heat_cool": true,
  "can_turn_off_hvac": true,
  "capabilities_supported": ["thermostat"],
  "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "created_at": "2024-10-03T22:12:15.666Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
    "appearance": { "name": "My Device" },
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
    "name": "My Device",
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

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "name": "My Device"
}
EOF
```

#### Output:

```curl
{
  "device": {
    "can_hvac_cool": true,
    "can_hvac_heat": true,
    "can_hvac_heat_cool": true,
    "can_turn_off_hvac": true,
    "capabilities_supported": ["thermostat"],
    "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    "created_at": "2024-10-03T22:12:15.666Z",
    "custom_metadata": { "id": "internalId1" },
    "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
      "appearance": { "name": "My Device" },
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
      "name": "My Device",
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
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.get(name="My Device")
```

#### Output:

```python
Device(
    can_hvac_cool=true,
    can_hvac_heat=true,
    can_hvac_heat_cool=true,
    can_turn_off_hvac=true,
    capabilities_supported=["thermostat"],
    connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    created_at="2024-10-03T22:12:15.666Z",
    custom_metadata={"id": "internalId1"},
    device_id="a75bff05-29a3-4215-a09f-2156c52a4ac7",
    device_type="ecobee_thermostat",
    display_name="Living Room",
    errors=[],
    is_managed=true,
    location={
        "location_name": "2948 20th St, San Francisco, CA, 94110, US",
        "timezone": "America/Los_Angeles",
    },
    nickname="Living Room",
    properties={
        "active_climate_preset": {
            "can_delete": true,
            "can_edit": true,
            "climate_preset_key": "sleep",
            "cooling_set_point_celsius": 23.88888888888889,
            "display_name": "Sleep",
            "fan_mode_setting": "auto",
            "heating_set_point_celsius": 17.77777777777778,
            "hvac_mode_setting": "heat_cool",
            "manual_override_allowed": true,
        },
        "appearance": {"name": "My Device"},
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
                "heating_set_point_fahrenheit": 64,
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
                "heating_set_point_fahrenheit": 64,
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
                "heating_set_point_fahrenheit": 64,
            },
        ],
        "available_fan_mode_settings": ["auto", "on"],
        "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
        "current_climate_setting": {
            "display_name": "Manual Setting",
            "fan_mode_setting": "auto",
            "heating_set_point_celsius": 25,
            "heating_set_point_fahrenheit": 77,
            "hvac_mode_setting": "heat",
            "manual_override_allowed": true,
        },
        "ecobee_metadata": {
            "device_name": "Living Room",
            "ecobee_device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        "model": {"display_name": "Thermostat", "manufacturer_display_name": "Ecobee"},
        "name": "My Device",
        "online": true,
        "relative_humidity": 0.36,
        "temperature_celsius": 21.11111111111111,
        "temperature_fahrenheit": 70,
        "temperature_threshold": {
            "lower_limit_celsius": 16.66666666666667,
            "lower_limit_fahrenheit": 62,
            "upper_limit_celsius": 26.66666666666667,
            "upper_limit_fahrenheit": 80,
        },
        "thermostat_daily_programs": [
            {
                "thermostat_daily_program_id": "1a2b3c4d-5e6f-7890-1234-56789abcdef1",
                "device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
                "name": "Weekday Program",
                "periods": [
                    {"starts_at_time": "00:00:00", "climate_preset_key": "sleep"},
                    {"starts_at_time": "07:00:00", "climate_preset_key": "home"},
                    {"starts_at_time": "09:00:00", "climate_preset_key": "work"},
                    {"starts_at_time": "18:00:00", "climate_preset_key": "home"},
                    {"starts_at_time": "22:00:00", "climate_preset_key": "sleep"},
                ],
                "workspace_id": "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at": "2025-05-30T04:01:25.455Z",
            },
            {
                "thermostat_daily_program_id": "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f90",
                "device_id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
                "name": "Weekend Program",
                "periods": [
                    {"starts_at_time": "00:00:00", "climate_preset_key": "sleep"},
                    {"starts_at_time": "08:00:00", "climate_preset_key": "home"},
                    {"starts_at_time": "23:00:00", "climate_preset_key": "sleep"},
                ],
                "workspace_id": "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at": "2025-05-30T04:02:19.952Z",
            },
        ],
        "thermostat_weekly_program": null,
    },
    warnings=[],
    workspace_id="9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.get(name: "My Device")
```

#### Output:

```ruby
{
  "can_hvac_cool" => true,
  "can_hvac_heat" => true,
  "can_hvac_heat_cool" => true,
  "can_turn_off_hvac" => true,
  "capabilities_supported" => ["thermostat"],
  "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "created_at" => "2024-10-03T22:12:15.666Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "device_id" => "a75bff05-29a3-4215-a09f-2156c52a4ac7",
  "device_type" => "ecobee_thermostat",
  "display_name" => "Living Room",
  "errors" => [],
  "is_managed" => true,
  "location" => {
    location_name: "2948 20th St, San Francisco, CA, 94110, US",
    timezone: "America/Los_Angeles",
  },
  "nickname" => "Living Room",
  "properties" => {
    active_climate_preset: {
      can_delete: true,
      can_edit: true,
      climate_preset_key: "sleep",
      cooling_set_point_celsius: 23.88888888888889,
      display_name: "Sleep",
      fan_mode_setting: "auto",
      heating_set_point_celsius: 17.77777777777778,
      hvac_mode_setting: "heat_cool",
      manual_override_allowed: true,
    },
    appearance: {
      name: "My Device",
    },
    available_climate_presets: [
      {
        climate_preset_key: "sleep",
        can_edit: true,
        can_delete: true,
        can_use_with_thermostat_daily_programs: false,
        name: "Sleep",
        display_name: "Sleep",
        fan_mode_setting: "auto",
        hvac_mode_setting: "heat_cool",
        manual_override_allowed: true,
        cooling_set_point_celsius: 23.88888888888889,
        heating_set_point_celsius: 17.77777777777778,
        cooling_set_point_fahrenheit: 75,
        heating_set_point_fahrenheit: 64,
      },
      {
        climate_preset_key: "home",
        can_edit: true,
        can_delete: true,
        can_use_with_thermostat_daily_programs: false,
        name: "Home",
        display_name: "Home",
        fan_mode_setting: "auto",
        hvac_mode_setting: "heat_cool",
        manual_override_allowed: false,
        cooling_set_point_celsius: 23.88888888888889,
        heating_set_point_celsius: 17.77777777777778,
        cooling_set_point_fahrenheit: 75,
        heating_set_point_fahrenheit: 64,
      },
      {
        climate_preset_key: "work",
        can_edit: true,
        can_delete: true,
        can_use_with_thermostat_daily_programs: false,
        name: "Work",
        display_name: "Work",
        fan_mode_setting: "auto",
        hvac_mode_setting: "heat_cool",
        manual_override_allowed: false,
        cooling_set_point_celsius: 23.88888888888889,
        heating_set_point_celsius: 17.77777777777778,
        cooling_set_point_fahrenheit: 75,
        heating_set_point_fahrenheit: 64,
      },
    ],
    available_fan_mode_settings: %w[auto on],
    available_hvac_mode_settings: %w[cool heat heat_cool off],
    current_climate_setting: {
      display_name: "Manual Setting",
      fan_mode_setting: "auto",
      heating_set_point_celsius: 25,
      heating_set_point_fahrenheit: 77,
      hvac_mode_setting: "heat",
      manual_override_allowed: true,
    },
    ecobee_metadata: {
      device_name: "Living Room",
      ecobee_device_id: "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
    },
    fallback_climate_preset_key: "eco",
    fan_mode_setting: "auto",
    has_direct_power: true,
    image_alt_text: "Ecobee 3 Lite Thermostat",
    image_url:
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png&q=75&w=128",
    is_cooling: false,
    is_fan_running: false,
    is_heating: false,
    is_temporary_manual_override_active: false,
    manufacturer: "ecobee",
    max_cooling_set_point_celsius: 33.333333333333336,
    max_cooling_set_point_fahrenheit: 92,
    max_heating_set_point_celsius: 26.11111111111111,
    max_heating_set_point_fahrenheit: 79,
    min_cooling_set_point_celsius: 18.333333333333336,
    min_cooling_set_point_fahrenheit: 65,
    min_heating_cooling_delta_celsius: 2.7777777777777777,
    min_heating_cooling_delta_fahrenheit: 5,
    min_heating_set_point_celsius: 7.222222222222222,
    min_heating_set_point_fahrenheit: 45,
    model: {
      display_name: "Thermostat",
      manufacturer_display_name: "Ecobee",
    },
    name: "My Device",
    online: true,
    relative_humidity: 0.36,
    temperature_celsius: 21.11111111111111,
    temperature_fahrenheit: 70,
    temperature_threshold: {
      lower_limit_celsius: 16.66666666666667,
      lower_limit_fahrenheit: 62,
      upper_limit_celsius: 26.66666666666667,
      upper_limit_fahrenheit: 80,
    },
    thermostat_daily_programs: [
      {
        thermostat_daily_program_id: "1a2b3c4d-5e6f-7890-1234-56789abcdef1",
        device_id: "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
        name: "Weekday Program",
        periods: [
          { starts_at_time: "00:00:00", climate_preset_key: "sleep" },
          { starts_at_time: "07:00:00", climate_preset_key: "home" },
          { starts_at_time: "09:00:00", climate_preset_key: "work" },
          { starts_at_time: "18:00:00", climate_preset_key: "home" },
          { starts_at_time: "22:00:00", climate_preset_key: "sleep" },
        ],
        workspace_id: "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
        created_at: "2025-05-30T04:01:25.455Z",
      },
      {
        thermostat_daily_program_id: "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f90",
        device_id: "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
        name: "Weekend Program",
        periods: [
          { starts_at_time: "00:00:00", climate_preset_key: "sleep" },
          { starts_at_time: "08:00:00", climate_preset_key: "home" },
          { starts_at_time: "23:00:00", climate_preset_key: "sleep" },
        ],
        workspace_id: "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
        created_at: "2025-05-30T04:02:19.952Z",
      },
    ],
    thermostat_weekly_program: null,
  },
  "warnings" => [],
  "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->get(name: "My Device");
```

#### Output:

```php
[
    "can_hvac_cool" => true,
    "can_hvac_heat" => true,
    "can_hvac_heat_cool" => true,
    "can_turn_off_hvac" => true,
    "capabilities_supported" => ["thermostat"],
    "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    "created_at" => "2024-10-03T22:12:15.666Z",
    "custom_metadata" => ["id" => "internalId1"],
    "device_id" => "a75bff05-29a3-4215-a09f-2156c52a4ac7",
    "device_type" => "ecobee_thermostat",
    "display_name" => "Living Room",
    "errors" => [],
    "is_managed" => true,
    "location" => [
        "location_name" => "2948 20th St, San Francisco, CA, 94110, US",
        "timezone" => "America/Los_Angeles",
    ],
    "nickname" => "Living Room",
    "properties" => [
        "active_climate_preset" => [
            "can_delete" => true,
            "can_edit" => true,
            "climate_preset_key" => "sleep",
            "cooling_set_point_celsius" => 23.88888888888889,
            "display_name" => "Sleep",
            "fan_mode_setting" => "auto",
            "heating_set_point_celsius" => 17.77777777777778,
            "hvac_mode_setting" => "heat_cool",
            "manual_override_allowed" => true,
        ],
        "appearance" => ["name" => "My Device"],
        "available_climate_presets" => [
            [
                "climate_preset_key" => "sleep",
                "can_edit" => true,
                "can_delete" => true,
                "can_use_with_thermostat_daily_programs" => false,
                "name" => "Sleep",
                "display_name" => "Sleep",
                "fan_mode_setting" => "auto",
                "hvac_mode_setting" => "heat_cool",
                "manual_override_allowed" => true,
                "cooling_set_point_celsius" => 23.88888888888889,
                "heating_set_point_celsius" => 17.77777777777778,
                "cooling_set_point_fahrenheit" => 75,
                "heating_set_point_fahrenheit" => 64,
            ],
            [
                "climate_preset_key" => "home",
                "can_edit" => true,
                "can_delete" => true,
                "can_use_with_thermostat_daily_programs" => false,
                "name" => "Home",
                "display_name" => "Home",
                "fan_mode_setting" => "auto",
                "hvac_mode_setting" => "heat_cool",
                "manual_override_allowed" => false,
                "cooling_set_point_celsius" => 23.88888888888889,
                "heating_set_point_celsius" => 17.77777777777778,
                "cooling_set_point_fahrenheit" => 75,
                "heating_set_point_fahrenheit" => 64,
            ],
            [
                "climate_preset_key" => "work",
                "can_edit" => true,
                "can_delete" => true,
                "can_use_with_thermostat_daily_programs" => false,
                "name" => "Work",
                "display_name" => "Work",
                "fan_mode_setting" => "auto",
                "hvac_mode_setting" => "heat_cool",
                "manual_override_allowed" => false,
                "cooling_set_point_celsius" => 23.88888888888889,
                "heating_set_point_celsius" => 17.77777777777778,
                "cooling_set_point_fahrenheit" => 75,
                "heating_set_point_fahrenheit" => 64,
            ],
        ],
        "available_fan_mode_settings" => ["auto", "on"],
        "available_hvac_mode_settings" => ["cool", "heat", "heat_cool", "off"],
        "current_climate_setting" => [
            "display_name" => "Manual Setting",
            "fan_mode_setting" => "auto",
            "heating_set_point_celsius" => 25,
            "heating_set_point_fahrenheit" => 77,
            "hvac_mode_setting" => "heat",
            "manual_override_allowed" => true,
        ],
        "ecobee_metadata" => [
            "device_name" => "Living Room",
            "ecobee_device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
        ],
        "fallback_climate_preset_key" => "eco",
        "fan_mode_setting" => "auto",
        "has_direct_power" => true,
        "image_alt_text" => "Ecobee 3 Lite Thermostat",
        "image_url" =>
            "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/devices/ecobee_3-lite_front.png&q=75&w=128",
        "is_cooling" => false,
        "is_fan_running" => false,
        "is_heating" => false,
        "is_temporary_manual_override_active" => false,
        "manufacturer" => "ecobee",
        "max_cooling_set_point_celsius" => 33.333333333333336,
        "max_cooling_set_point_fahrenheit" => 92,
        "max_heating_set_point_celsius" => 26.11111111111111,
        "max_heating_set_point_fahrenheit" => 79,
        "min_cooling_set_point_celsius" => 18.333333333333336,
        "min_cooling_set_point_fahrenheit" => 65,
        "min_heating_cooling_delta_celsius" => 2.7777777777777777,
        "min_heating_cooling_delta_fahrenheit" => 5,
        "min_heating_set_point_celsius" => 7.222222222222222,
        "min_heating_set_point_fahrenheit" => 45,
        "model" => [
            "display_name" => "Thermostat",
            "manufacturer_display_name" => "Ecobee",
        ],
        "name" => "My Device",
        "online" => true,
        "relative_humidity" => 0.36,
        "temperature_celsius" => 21.11111111111111,
        "temperature_fahrenheit" => 70,
        "temperature_threshold" => [
            "lower_limit_celsius" => 16.66666666666667,
            "lower_limit_fahrenheit" => 62,
            "upper_limit_celsius" => 26.66666666666667,
            "upper_limit_fahrenheit" => 80,
        ],
        "thermostat_daily_programs" => [
            [
                "thermostat_daily_program_id" =>
                    "1a2b3c4d-5e6f-7890-1234-56789abcdef1",
                "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
                "name" => "Weekday Program",
                "periods" => [
                    [
                        "starts_at_time" => "00:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                    [
                        "starts_at_time" => "07:00:00",
                        "climate_preset_key" => "home",
                    ],
                    [
                        "starts_at_time" => "09:00:00",
                        "climate_preset_key" => "work",
                    ],
                    [
                        "starts_at_time" => "18:00:00",
                        "climate_preset_key" => "home",
                    ],
                    [
                        "starts_at_time" => "22:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                ],
                "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at" => "2025-05-30T04:01:25.455Z",
            ],
            [
                "thermostat_daily_program_id" =>
                    "d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f90",
                "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
                "name" => "Weekend Program",
                "periods" => [
                    [
                        "starts_at_time" => "00:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                    [
                        "starts_at_time" => "08:00:00",
                        "climate_preset_key" => "home",
                    ],
                    [
                        "starts_at_time" => "23:00:00",
                        "climate_preset_key" => "sleep",
                    ],
                ],
                "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
                "created_at" => "2025-05-30T04:02:19.952Z",
            ],
        ],
        "thermostat_weekly_program" => null,
    ],
    "warnings" => [],
    "workspace_id" => "9f8e7d6c-5b4a-3c2d-1e0f-9876543210ab",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices get --name "My Device"
```

#### Output:

```seam_cli
{
  "can_hvac_cool": true,
  "can_hvac_heat": true,
  "can_hvac_heat_cool": true,
  "can_turn_off_hvac": true,
  "capabilities_supported": ["thermostat"],
  "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "created_at": "2024-10-03T22:12:15.666Z",
  "custom_metadata": { "id": "internalId1" },
  "device_id": "a75bff05-29a3-4215-a09f-2156c52a4ac7",
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
    "appearance": { "name": "My Device" },
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
    "name": "My Device",
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
