# List Accessible Devices for a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [devices](../../core-concepts/devices/README.md) associated with a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="Signature" %}
```
POST /user_identities/list_accessible_devices ⇒ { devices: [device, …] }
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

<table>
<tr><th width="25%">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>user_identity_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the user identity for which you want to retrieve all accessible devices.
</td></tr>
</table>

## Response

Array of [devices](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of device
}
```
{% endtab %}
{% endtabs %}

---

## Examples
  
### List accessible devices for a user identity

Specify the desired `user_identity_id`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.listAccessibleDevices({
  user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
});
```

#### Output

```javascript
[
  {
    "device_id": "054765c8-a2fc-4599-b486-14c19f462c45",
    "nickname": "",
    "display_name": "Seam Thermostat",
    "device_type": "nest_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "online": true,
      "is_cooling": false,
      "is_heating": false,
      "manufacturer": "nest",
      "nest_metadata": {
        "custom_name": "",
        "device_name": "enterprises/nest_project_id/devices/AVPHwEvjFcX-wRmGdXApyxON24SAI0S9oU13a2GSVFLPVehUKH1ATqlASyKi2N2dbJCVW-B6-VxgbhdjUyyjA-K3Vo5C9g",
        "nest_device_id": "bcca8c5f-1854-4906-9911-c877d513e00a"
      },
      "is_fan_running": false,
      "has_direct_power": true,
      "relative_humidity": 0.46,
      "temperature_celsius": 24.64,
      "temperature_fahrenheit": 76.352,
      "current_climate_setting": {
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": true,
        "cooling_set_point_celsius": 21.5,
        "heating_set_point_celsius": 20,
        "cooling_set_point_fahrenheit": 70.7,
        "heating_set_point_fahrenheit": 68
      },
      "available_hvac_mode_settings": ["heat", "cool", "heat_cool", "off"],
      "is_temporary_manual_override_active": false,
      "name": "",
      "appearance": { "name": "" },
      "model": {
        "display_name": "Thermostat",
        "manufacturer_display_name": "Nest",
        "accessory_keypad_supported": false
      },
      "image_url": "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
      "image_alt_text": "Placeholder Lock Image",
      "is_climate_setting_schedule_active": false
    },
    "location": null,
    "connected_account_id": "44284499-a50b-4947-86c1-58264f014be5",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-29T21:57:33.397Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "custom_metadata": {}
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.user_identities.list_accessible_devices(
    user_identity_id="f3a328b4-dd04-4370-9000-d52b7a01b0bf"
)
```

#### Output

```python
[
    Device(
        device_id="054765c8-a2fc-4599-b486-14c19f462c45",
        nickname="",
        display_name="Seam Thermostat",
        device_type="nest_thermostat",
        capabilities_supported=["thermostat"],
        properties={
            "online": true,
            "is_cooling": false,
            "is_heating": false,
            "manufacturer": "nest",
            "nest_metadata": {
                "custom_name": "",
                "device_name": "enterprises/nest_project_id/devices/AVPHwEvjFcX-wRmGdXApyxON24SAI0S9oU13a2GSVFLPVehUKH1ATqlASyKi2N2dbJCVW-B6-VxgbhdjUyyjA-K3Vo5C9g",
                "nest_device_id": "bcca8c5f-1854-4906-9911-c877d513e00a",
            },
            "is_fan_running": false,
            "has_direct_power": true,
            "relative_humidity": 0.46,
            "temperature_celsius": 24.64,
            "temperature_fahrenheit": 76.352,
            "current_climate_setting": {
                "hvac_mode_setting": "heat_cool",
                "manual_override_allowed": true,
                "cooling_set_point_celsius": 21.5,
                "heating_set_point_celsius": 20,
                "cooling_set_point_fahrenheit": 70.7,
                "heating_set_point_fahrenheit": 68,
            },
            "available_hvac_mode_settings": ["heat", "cool", "heat_cool", "off"],
            "is_temporary_manual_override_active": false,
            "name": "",
            "appearance": {"name": ""},
            "model": {
                "display_name": "Thermostat",
                "manufacturer_display_name": "Nest",
                "accessory_keypad_supported": false,
            },
            "image_url": "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
            "image_alt_text": "Placeholder Lock Image",
            "is_climate_setting_schedule_active": false,
        },
        location=None,
        connected_account_id="44284499-a50b-4947-86c1-58264f014be5",
        workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        created_at="2024-02-29T21:57:33.397Z",
        errors=[],
        warnings=[],
        is_managed=true,
        custom_metadata={},
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.user_identities.list_accessible_devices(
  user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf",
)
```

#### Output

```ruby
[
  {
    "device_id" => "054765c8-a2fc-4599-b486-14c19f462c45",
    "nickname" => "",
    "display_name" => "Seam Thermostat",
    "device_type" => "nest_thermostat",
    "capabilities_supported" => ["thermostat"],
    "properties" => {
      online: true,
      is_cooling: false,
      is_heating: false,
      manufacturer: "nest",
      nest_metadata: {
        custom_name: "",
        device_name:
          "enterprises/nest_project_id/devices/AVPHwEvjFcX-wRmGdXApyxON24SAI0S9oU13a2GSVFLPVehUKH1ATqlASyKi2N2dbJCVW-B6-VxgbhdjUyyjA-K3Vo5C9g",
        nest_device_id: "bcca8c5f-1854-4906-9911-c877d513e00a",
      },
      is_fan_running: false,
      has_direct_power: true,
      relative_humidity: 0.46,
      temperature_celsius: 24.64,
      temperature_fahrenheit: 76.352,
      current_climate_setting: {
        hvac_mode_setting: "heat_cool",
        manual_override_allowed: true,
        cooling_set_point_celsius: 21.5,
        heating_set_point_celsius: 20,
        cooling_set_point_fahrenheit: 70.7,
        heating_set_point_fahrenheit: 68,
      },
      available_hvac_mode_settings: %w[heat cool heat_cool off],
      is_temporary_manual_override_active: false,
      name: "",
      appearance: {
        name: "",
      },
      model: {
        display_name: "Thermostat",
        manufacturer_display_name: "Nest",
        accessory_keypad_supported: false,
      },
      image_url: "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
      image_alt_text: "Placeholder Lock Image",
      is_climate_setting_schedule_active: false,
    },
    "location" => nil,
    "connected_account_id" => "44284499-a50b-4947-86c1-58264f014be5",
    "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at" => "2024-02-29T21:57:33.397Z",
    "errors" => [],
    "warnings" => [],
    "is_managed" => true,
    "custom_metadata" => {
    },
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->user_identities->list_accessible_devices(
    user_identity_id: "f3a328b4-dd04-4370-9000-d52b7a01b0bf"
);
```

#### Output

```php
<?php
[
    [
        "device_id" => "054765c8-a2fc-4599-b486-14c19f462c45",
        "nickname" => "",
        "display_name" => "Seam Thermostat",
        "device_type" => "nest_thermostat",
        "capabilities_supported" => ["thermostat"],
        "properties" => [
            "online" => true,
            "is_cooling" => false,
            "is_heating" => false,
            "manufacturer" => "nest",
            "nest_metadata" => [
                "custom_name" => "",
                "device_name" =>
                    "enterprises/nest_project_id/devices/AVPHwEvjFcX-wRmGdXApyxON24SAI0S9oU13a2GSVFLPVehUKH1ATqlASyKi2N2dbJCVW-B6-VxgbhdjUyyjA-K3Vo5C9g",
                "nest_device_id" => "bcca8c5f-1854-4906-9911-c877d513e00a",
            ],
            "is_fan_running" => false,
            "has_direct_power" => true,
            "relative_humidity" => 0.46,
            "temperature_celsius" => 24.64,
            "temperature_fahrenheit" => 76.352,
            "current_climate_setting" => [
                "hvac_mode_setting" => "heat_cool",
                "manual_override_allowed" => true,
                "cooling_set_point_celsius" => 21.5,
                "heating_set_point_celsius" => 20,
                "cooling_set_point_fahrenheit" => 70.7,
                "heating_set_point_fahrenheit" => 68,
            ],
            "available_hvac_mode_settings" => [
                "heat",
                "cool",
                "heat_cool",
                "off",
            ],
            "is_temporary_manual_override_active" => false,
            "name" => "",
            "appearance" => ["name" => ""],
            "model" => [
                "display_name" => "Thermostat",
                "manufacturer_display_name" => "Nest",
                "accessory_keypad_supported" => false,
            ],
            "image_url" =>
                "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
            "image_alt_text" => "Placeholder Lock Image",
            "is_climate_setting_schedule_active" => false,
        ],
        "location" => null,
        "connected_account_id" => "44284499-a50b-4947-86c1-58264f014be5",
        "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        "created_at" => "2024-02-29T21:57:33.397Z",
        "errors" => [],
        "warnings" => [],
        "is_managed" => true,
        "custom_metadata" => [],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam user-identities list-accessible-devices --user_identity_id "f3a328b4-dd04-4370-9000-d52b7a01b0bf"
```

#### Output

```seam_cli
[
  {
    "device_id": "054765c8-a2fc-4599-b486-14c19f462c45",
    "nickname": "",
    "display_name": "Seam Thermostat",
    "device_type": "nest_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "online": true,
      "is_cooling": false,
      "is_heating": false,
      "manufacturer": "nest",
      "nest_metadata": {
        "custom_name": "",
        "device_name": "enterprises/nest_project_id/devices/AVPHwEvjFcX-wRmGdXApyxON24SAI0S9oU13a2GSVFLPVehUKH1ATqlASyKi2N2dbJCVW-B6-VxgbhdjUyyjA-K3Vo5C9g",
        "nest_device_id": "bcca8c5f-1854-4906-9911-c877d513e00a"
      },
      "is_fan_running": false,
      "has_direct_power": true,
      "relative_humidity": 0.46,
      "temperature_celsius": 24.64,
      "temperature_fahrenheit": 76.352,
      "current_climate_setting": {
        "hvac_mode_setting": "heat_cool",
        "manual_override_allowed": true,
        "cooling_set_point_celsius": 21.5,
        "heating_set_point_celsius": 20,
        "cooling_set_point_fahrenheit": 70.7,
        "heating_set_point_fahrenheit": 68
      },
      "available_hvac_mode_settings": ["heat", "cool", "heat_cool", "off"],
      "is_temporary_manual_override_active": false,
      "name": "",
      "appearance": { "name": "" },
      "model": {
        "display_name": "Thermostat",
        "manufacturer_display_name": "Nest",
        "accessory_keypad_supported": false
      },
      "image_url": "https://connect.getseam.com/assets/images/devices/unknown-lock.png",
      "image_alt_text": "Placeholder Lock Image",
      "is_climate_setting_schedule_active": false
    },
    "location": null,
    "connected_account_id": "44284499-a50b-4947-86c1-58264f014be5",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-29T21:57:33.397Z",
    "errors": [],
    "warnings": [],
    "is_managed": true,
    "custom_metadata": {}
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.ListAccessibleDevices(
		context.Background(),
		api.UserIdentitiesListAccessibleDevicesRequest{
			UserIdentityId: api.String("f3a328b4-dd04-4370-9000-d52b7a01b0bf"),
		},
	)
}
```

#### Output

```go
[]api.Device{api.Device{DeviceId: "054765c8-a2fc-4599-b486-14c19f462c45", Nickname: "", DisplayName: "Seam Thermostat", DeviceType: "nest_thermostat", CapabilitiesSupported: []string{"thermostat"}, Properties: api.DeviceProperties{Online: true, IsCooling: false, IsHeating: false, Manufacturer: "nest", NestMetadata: api.DevicePropertiesNestMetadata{CustomName: "", DeviceName: "enterprises/nest_project_id/devices/AVPHwEvjFcX-wRmGdXApyxON24SAI0S9oU13a2GSVFLPVehUKH1ATqlASyKi2N2dbJCVW-B6-VxgbhdjUyyjA-K3Vo5C9g", NestDeviceId: "bcca8c5f-1854-4906-9911-c877d513e00a"}, IsFanRunning: false, HasDirectPower: true, RelativeHumidity: 0.46, TemperatureCelsius: 24.64, TemperatureFahrenheit: 76.352, CurrentClimateSetting: api.DevicePropertiesCurrentClimateSetting{HvacModeSetting: "heat_cool", ManualOverrideAllowed: true, CoolingSetPointCelsius: 21.5, HeatingSetPointCelsius: 20, CoolingSetPointFahrenheit: 70.7, HeatingSetPointFahrenheit: 68}, AvailableHvacModeSettings: []string{"heat", "cool", "heat_cool", "off"}, IsTemporaryManualOverrideActive: false, Name: "", Appearance: api.DevicePropertiesAppearance{Name: ""}, Model: api.DevicePropertiesModel{DisplayName: "Thermostat", ManufacturerDisplayName: "Nest", AccessoryKeypadSupported: false}, ImageUrl: "https://connect.getseam.com/assets/images/devices/unknown-lock.png", ImageAltText: "Placeholder Lock Image", IsClimateSettingScheduleActive: false}, Location: nil, ConnectedAccountId: "44284499-a50b-4947-86c1-58264f014be5", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-02-29T21:57:33.397Z", Errors: nil, Warnings: nil, IsManaged: true, CustomMetadata: struct{}{}}}
```
{% endtab %}

{% endtabs %}


