# List Accessible Devices for a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [devices](../../core-concepts/devices/README.md) associated with a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all devices associated with a specified user identity.

#### Code:

```javascript
await seam.userIdentities.listAccessibleDevices({
  user_identity_id: "f25d14c2-ea01-4e42-80f8-61a6f719be9d",
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

Returns a list of all devices associated with a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/list_accessible_devices" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "f25d14c2-ea01-4e42-80f8-61a6f719be9d"
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

Returns a list of all devices associated with a specified user identity.

#### Code:

```python
seam.user_identities.list_accessible_devices(
    user_identity_id="f25d14c2-ea01-4e42-80f8-61a6f719be9d"
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

Returns a list of all devices associated with a specified user identity.

#### Code:

```ruby
seam.user_identities.list_accessible_devices(
  user_identity_id: "f25d14c2-ea01-4e42-80f8-61a6f719be9d",
)
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

Returns a list of all devices associated with a specified user identity.

#### Code:

```php
$seam->user_identities->list_accessible_devices(
    user_identity_id: "f25d14c2-ea01-4e42-80f8-61a6f719be9d"
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

Returns a list of all devices associated with a specified user identity.

#### Code:

```seam_cli
seam user-identities list-accessible-devices --user_identity_id "f25d14c2-ea01-4e42-80f8-61a6f719be9d"
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to retrieve all accessible devices.

---


## Response

Array of [devices](./../devices)

