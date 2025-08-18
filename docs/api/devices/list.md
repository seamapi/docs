# List Devices

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [devices](../../core-concepts/devices/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all devices for a specified connected account ID.

#### Code:

```javascript
await seam.devices.list({
  connected_account_id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all devices for a specified connected account ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "devices": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all devices for a specified connected account ID.

#### Code:

```python
seam.devices.list(connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d", limit=50)
```

#### Output:

```python
[
    Device(
        can_hvac_cool=true,
        can_hvac_heat=true,
        can_hvac_heat_cool=true,
        can_turn_off_hvac=true,
        capabilities_supported=["thermostat"],
        connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        created_at="2024-10-03T22:12:15.666Z",
        custom_metadata={"id": "internalId1"},
        device_id="a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance": {"name": "Living Room"},
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
                    "heating_set_point_fahrenheit": 64,
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
                    "heating_set_point_fahrenheit": 64,
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
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee",
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
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all devices for a specified connected account ID.

#### Code:

```ruby
seam.devices.list(connected_account_id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d", limit: 50)
```

#### Output:

```ruby
[
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
    "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        name: "Living Room",
      },
      available_climate_presets: [
        {
          climate_preset_key: "sleep",
          can_edit: true,
          can_delete: true,
          can_program: false,
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
          can_program: false,
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
          can_program: false,
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
      name: "Living Room",
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all devices for a specified connected account ID.

#### Code:

```php
$seam->devices->list(
    connected_account_id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    limit: 50
);
```

#### Output:

```php
[
    [
        "can_hvac_cool" => true,
        "can_hvac_heat" => true,
        "can_hvac_heat_cool" => true,
        "can_turn_off_hvac" => true,
        "capabilities_supported" => ["thermostat"],
        "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        "created_at" => "2024-10-03T22:12:15.666Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance" => ["name" => "Living Room"],
            "available_climate_presets" => [
                [
                    "climate_preset_key" => "sleep",
                    "can_edit" => true,
                    "can_delete" => true,
                    "can_program" => false,
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
                    "can_program" => false,
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
                    "can_program" => false,
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
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
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
            "name" => "Living Room",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all devices for a specified connected account ID.

#### Code:

```seam_cli
seam devices list --connected_account_id "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d" --limit 50
```

#### Output:

```seam_cli
[
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
]
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

**`connect_webview_id`** *String*

ID of the Connect Webview for which you want to list devices.

---

**`connected_account_id`** *String*

ID of the connected account for which you want to list devices.

---

**`connected_account_ids`** *Array* *of UUIDs*

Array of IDs of the connected accounts for which you want to list devices.

---

**`created_before`** *String*

Timestamp by which to limit returned devices. Returns devices created before this timestamp.

---

**`custom_metadata_has`** *Object*

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs for which you want to list devices.

---

**`customer_key`** *String*

Customer key for which you want to list devices.

---

**`device_ids`** *Array* *of UUIDs*

Array of device IDs for which you want to list devices.

---

**`device_type`** *String*

Device type for which you want to list devices.

---

**`device_types`** *Array* *of Enums*

Array of device types for which you want to list devices.
<details>

<summary>Enum values</summary>

Possible enum values:
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

**`limit`** *Number*

Numerical limit on the number of devices to return.

---

**`manufacturer`** *String*

Manufacturer for which you want to list devices.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *String*

String for which to search. Filters returned devices to include all records that satisfy a partial match using `device_id`, `display_name`, `custom_metadata` or `location.location_name`.

---

**`space_id`** *String*

ID of the space for which you want to list devices.

---

**`unstable_location_id`** *String*

---

**`user_identifier_key`** *String*

Your own internal user ID for the user for which you want to list devices.

---


## Response

Array of [devices](.)


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


### List devices for a Connect Webview

Returns a list of all devices that were connected using a specified Connect Webview.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.list({
  connect_webview_id: "0a310a44-6c0a-485d-99b7-9529058a6383",
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connect_webview_id": "0a310a44-6c0a-485d-99b7-9529058a6383",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "devices": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.list(connect_webview_id="0a310a44-6c0a-485d-99b7-9529058a6383", limit=50)
```

#### Output:

```python
[
    Device(
        can_hvac_cool=true,
        can_hvac_heat=true,
        can_hvac_heat_cool=true,
        can_turn_off_hvac=true,
        capabilities_supported=["thermostat"],
        connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        created_at="2024-10-03T22:12:15.666Z",
        custom_metadata={"id": "internalId1"},
        device_id="a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance": {"name": "Living Room"},
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
                    "heating_set_point_fahrenheit": 64,
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
                    "heating_set_point_fahrenheit": 64,
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
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee",
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.list(connect_webview_id: "0a310a44-6c0a-485d-99b7-9529058a6383", limit: 50)
```

#### Output:

```ruby
[
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
    "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        name: "Living Room",
      },
      available_climate_presets: [
        {
          climate_preset_key: "sleep",
          can_edit: true,
          can_delete: true,
          can_program: false,
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
          can_program: false,
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
          can_program: false,
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
      name: "Living Room",
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->list(
    connect_webview_id: "0a310a44-6c0a-485d-99b7-9529058a6383",
    limit: 50
);
```

#### Output:

```php
[
    [
        "can_hvac_cool" => true,
        "can_hvac_heat" => true,
        "can_hvac_heat_cool" => true,
        "can_turn_off_hvac" => true,
        "capabilities_supported" => ["thermostat"],
        "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        "created_at" => "2024-10-03T22:12:15.666Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance" => ["name" => "Living Room"],
            "available_climate_presets" => [
                [
                    "climate_preset_key" => "sleep",
                    "can_edit" => true,
                    "can_delete" => true,
                    "can_program" => false,
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
                    "can_program" => false,
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
                    "can_program" => false,
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
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
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
            "name" => "Living Room",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices list --connect_webview_id "0a310a44-6c0a-485d-99b7-9529058a6383" --limit 50
```

#### Output:

```seam_cli
[
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
]
```
{% endtab %}

{% endtabs %}

---


### List devices for a user identifier key

Returns a list of all devices for a specified user identifier key.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.list({
  user_identifier_key: "62c370ea-2c94-4856-8ee2-370429d84023",
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identifier_key": "62c370ea-2c94-4856-8ee2-370429d84023",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "devices": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.list(user_identifier_key="62c370ea-2c94-4856-8ee2-370429d84023", limit=50)
```

#### Output:

```python
[
    Device(
        can_hvac_cool=true,
        can_hvac_heat=true,
        can_hvac_heat_cool=true,
        can_turn_off_hvac=true,
        capabilities_supported=["thermostat"],
        connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        created_at="2024-10-03T22:12:15.666Z",
        custom_metadata={"id": "internalId1"},
        device_id="a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance": {"name": "Living Room"},
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
                    "heating_set_point_fahrenheit": 64,
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
                    "heating_set_point_fahrenheit": 64,
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
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee",
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.list(user_identifier_key: "62c370ea-2c94-4856-8ee2-370429d84023", limit: 50)
```

#### Output:

```ruby
[
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
    "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        name: "Living Room",
      },
      available_climate_presets: [
        {
          climate_preset_key: "sleep",
          can_edit: true,
          can_delete: true,
          can_program: false,
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
          can_program: false,
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
          can_program: false,
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
      name: "Living Room",
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->list(
    user_identifier_key: "62c370ea-2c94-4856-8ee2-370429d84023",
    limit: 50
);
```

#### Output:

```php
[
    [
        "can_hvac_cool" => true,
        "can_hvac_heat" => true,
        "can_hvac_heat_cool" => true,
        "can_turn_off_hvac" => true,
        "capabilities_supported" => ["thermostat"],
        "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        "created_at" => "2024-10-03T22:12:15.666Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance" => ["name" => "Living Room"],
            "available_climate_presets" => [
                [
                    "climate_preset_key" => "sleep",
                    "can_edit" => true,
                    "can_delete" => true,
                    "can_program" => false,
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
                    "can_program" => false,
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
                    "can_program" => false,
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
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
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
            "name" => "Living Room",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices list --user_identifier_key "62c370ea-2c94-4856-8ee2-370429d84023" --limit 50
```

#### Output:

```seam_cli
[
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
]
```
{% endtab %}

{% endtabs %}

---


### List devices for a space

Returns a list of all devices for a specified space ID.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.list({
  space_id: "96560123-9fd4-48ce-a300-b40d5d18a122",
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "space_id": "96560123-9fd4-48ce-a300-b40d5d18a122",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "devices": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.list(space_id="96560123-9fd4-48ce-a300-b40d5d18a122", limit=50)
```

#### Output:

```python
[
    Device(
        can_hvac_cool=true,
        can_hvac_heat=true,
        can_hvac_heat_cool=true,
        can_turn_off_hvac=true,
        capabilities_supported=["thermostat"],
        connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        created_at="2024-10-03T22:12:15.666Z",
        custom_metadata={"id": "internalId1"},
        device_id="a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance": {"name": "Living Room"},
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
                    "heating_set_point_fahrenheit": 64,
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
                    "heating_set_point_fahrenheit": 64,
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
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee",
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.list(space_id: "96560123-9fd4-48ce-a300-b40d5d18a122", limit: 50)
```

#### Output:

```ruby
[
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
    "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        name: "Living Room",
      },
      available_climate_presets: [
        {
          climate_preset_key: "sleep",
          can_edit: true,
          can_delete: true,
          can_program: false,
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
          can_program: false,
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
          can_program: false,
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
      name: "Living Room",
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->list(
    space_id: "96560123-9fd4-48ce-a300-b40d5d18a122",
    limit: 50
);
```

#### Output:

```php
[
    [
        "can_hvac_cool" => true,
        "can_hvac_heat" => true,
        "can_hvac_heat_cool" => true,
        "can_turn_off_hvac" => true,
        "capabilities_supported" => ["thermostat"],
        "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        "created_at" => "2024-10-03T22:12:15.666Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance" => ["name" => "Living Room"],
            "available_climate_presets" => [
                [
                    "climate_preset_key" => "sleep",
                    "can_edit" => true,
                    "can_delete" => true,
                    "can_program" => false,
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
                    "can_program" => false,
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
                    "can_program" => false,
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
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
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
            "name" => "Living Room",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices list --space_id "96560123-9fd4-48ce-a300-b40d5d18a122" --limit 50
```

#### Output:

```seam_cli
[
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
]
```
{% endtab %}

{% endtabs %}

---


### List devices with specific custom metadata

Returns a list of all devices containing specified custom metadata.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.list({
  custom_metadata_has: { id: "internalId1" },
  limit: 50,
});
```

#### Output:

```javascript
[
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "custom_metadata_has": {
    "id": "internalId1"
  },
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "devices": [
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.list(custom_metadata_has={"id": "internalId1"}, limit=50)
```

#### Output:

```python
[
    Device(
        can_hvac_cool=true,
        can_hvac_heat=true,
        can_hvac_heat_cool=true,
        can_turn_off_hvac=true,
        capabilities_supported=["thermostat"],
        connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        created_at="2024-10-03T22:12:15.666Z",
        custom_metadata={"id": "internalId1"},
        device_id="a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance": {"name": "Living Room"},
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
                    "heating_set_point_fahrenheit": 64,
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
                    "heating_set_point_fahrenheit": 64,
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
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee",
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.list(custom_metadata_has: { id: "internalId1" }, limit: 50)
```

#### Output:

```ruby
[
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
    "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        name: "Living Room",
      },
      available_climate_presets: [
        {
          climate_preset_key: "sleep",
          can_edit: true,
          can_delete: true,
          can_program: false,
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
          can_program: false,
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
          can_program: false,
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
      name: "Living Room",
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->list(custom_metadata_has: ["id" => "internalId1"], limit: 50);
```

#### Output:

```php
[
    [
        "can_hvac_cool" => true,
        "can_hvac_heat" => true,
        "can_hvac_heat_cool" => true,
        "can_turn_off_hvac" => true,
        "capabilities_supported" => ["thermostat"],
        "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        "created_at" => "2024-10-03T22:12:15.666Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance" => ["name" => "Living Room"],
            "available_climate_presets" => [
                [
                    "climate_preset_key" => "sleep",
                    "can_edit" => true,
                    "can_delete" => true,
                    "can_program" => false,
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
                    "can_program" => false,
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
                    "can_program" => false,
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
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
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
            "name" => "Living Room",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices list --custom_metadata_has {"id":"internalId1"} --limit 50
```

#### Output:

```seam_cli
[
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
]
```
{% endtab %}

{% endtabs %}

---


### List devices for a specific manufacturer, created before a specific date

Returns a list of all devices for a specific manufacturer, created (in Seam) before a specific date.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.list({
  manufacturer: "ecobee",
  created_before: "2025-05-20T00:00:00.000Z",
  limit: 50,
});
```

#### Output:

```javascript
[
  {
    "can_hvac_cool": true,
    "can_hvac_heat": true,
    "can_hvac_heat_cool": true,
    "can_turn_off_hvac": true,
    "capabilities_supported": ["thermostat"],
    "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    "created_at": "2025-05-10T22:12:15.656Z",
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "manufacturer": "ecobee",
  "created_before": "2025-05-20T00:00:00.000Z",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "devices": [
    {
      "can_hvac_cool": true,
      "can_hvac_heat": true,
      "can_hvac_heat_cool": true,
      "can_turn_off_hvac": true,
      "capabilities_supported": ["thermostat"],
      "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
      "created_at": "2025-05-10T22:12:15.656Z",
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.list(
    manufacturer="ecobee", created_before="2025-05-20T00:00:00.000Z", limit=50
)
```

#### Output:

```python
[
    Device(
        can_hvac_cool=true,
        can_hvac_heat=true,
        can_hvac_heat_cool=true,
        can_turn_off_hvac=true,
        capabilities_supported=["thermostat"],
        connected_account_id="a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        created_at="2025-05-10T22:12:15.656Z",
        custom_metadata={"id": "internalId1"},
        device_id="a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance": {"name": "Living Room"},
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
                    "heating_set_point_fahrenheit": 64,
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
                    "heating_set_point_fahrenheit": 64,
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
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Ecobee",
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.list(manufacturer: "ecobee", created_before: "2025-05-20T00:00:00.000Z", limit: 50)
```

#### Output:

```ruby
[
  {
    "can_hvac_cool" => true,
    "can_hvac_heat" => true,
    "can_hvac_heat_cool" => true,
    "can_turn_off_hvac" => true,
    "capabilities_supported" => ["thermostat"],
    "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    "created_at" => "2025-05-10T22:12:15.656Z",
    "custom_metadata" => {
      id: "internalId1",
    },
    "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
        name: "Living Room",
      },
      available_climate_presets: [
        {
          climate_preset_key: "sleep",
          can_edit: true,
          can_delete: true,
          can_program: false,
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
          can_program: false,
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
          can_program: false,
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
      name: "Living Room",
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
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->list(
    manufacturer: "ecobee",
    created_before: "2025-05-20T00:00:00.000Z",
    limit: 50
);
```

#### Output:

```php
[
    [
        "can_hvac_cool" => true,
        "can_hvac_heat" => true,
        "can_hvac_heat_cool" => true,
        "can_turn_off_hvac" => true,
        "capabilities_supported" => ["thermostat"],
        "connected_account_id" => "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
        "created_at" => "2025-05-10T22:12:15.656Z",
        "custom_metadata" => ["id" => "internalId1"],
        "device_id" => "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
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
            "appearance" => ["name" => "Living Room"],
            "available_climate_presets" => [
                [
                    "climate_preset_key" => "sleep",
                    "can_edit" => true,
                    "can_delete" => true,
                    "can_program" => false,
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
                    "can_program" => false,
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
                    "can_program" => false,
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
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
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
            "name" => "Living Room",
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
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices list --manufacturer "ecobee" --created_before "2025-05-20T00:00:00.000Z" --limit 50
```

#### Output:

```seam_cli
[
  {
    "can_hvac_cool": true,
    "can_hvac_heat": true,
    "can_hvac_heat_cool": true,
    "can_turn_off_hvac": true,
    "capabilities_supported": ["thermostat"],
    "connected_account_id": "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
    "created_at": "2025-05-10T22:12:15.656Z",
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
]
```
{% endtab %}

{% endtabs %}
