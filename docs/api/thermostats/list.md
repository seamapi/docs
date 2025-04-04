# List Thermostats

```
POST /thermostats/list ⇒ { devices: [device, …] }
```

Returns a list of all [thermostats](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.list();
```

#### Response

```javascript
[
  {
    "device_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": "true,",
      "relative_humidity": 0.36,
      "temperature_farenheit": 70,
      "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
      "current_climate_setting": {
        "hvac_mode_setting": "heat_cool",
        "cooling_set_point_farenheit": 75,
        "heating_set_point_farenheit": 65,
        "manual_override_allowed": false
      },
      "location": null,
      "connected_account_id": "123e4567-e89b-12d3-a456-426614174000",
      "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-04-05T07:57:05.323Z"
    }
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.list()
```

#### Response

```python
[
    Device(
        device_id="123e4567-e89b-12d3-a456-426614174000",
        device_type="ecobee_thermostat",
        capabilities_supported=["thermostat"],
        properties={
            "name": "Entryway",
            "online": "true,",
            "relative_humidity": 0.36,
            "temperature_farenheit": 70,
            "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
            "current_climate_setting": {
                "hvac_mode_setting": "heat_cool",
                "cooling_set_point_farenheit": 75,
                "heating_set_point_farenheit": 65,
                "manual_override_allowed": false,
            },
            "location": null,
            "connected_account_id": "123e4567-e89b-12d3-a456-426614174000",
            "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
            "created_at": "2024-04-05T07:57:05.323Z",
        },
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.list()
```

#### Response

```ruby
[
  {
    "device_id" => "123e4567-e89b-12d3-a456-426614174000",
    "device_type" => "ecobee_thermostat",
    "capabilities_supported" => ["thermostat"],
    "properties" => {
      name: "Entryway",
      online: "true,",
      relative_humidity: 0.36,
      temperature_farenheit: 70,
      available_hvac_mode_settings: %w[cool heat heat_cool off],
      current_climate_setting: {
        hvac_mode_setting: "heat_cool",
        cooling_set_point_farenheit: 75,
        heating_set_point_farenheit: 65,
        manual_override_allowed: false,
      },
      location: null,
      connected_account_id: "123e4567-e89b-12d3-a456-426614174000",
      workspace_id: "123e4567-e89b-12d3-a456-426614174000",
      created_at: "2024-04-05T07:57:05.323Z",
    },
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->list();
```

#### Response

```php
<?php
[
    [
        "device_id" => "123e4567-e89b-12d3-a456-426614174000",
        "device_type" => "ecobee_thermostat",
        "capabilities_supported" => ["thermostat"],
        "properties" => [
            "name" => "Entryway",
            "online" => "true,",
            "relative_humidity" => 0.36,
            "temperature_farenheit" => 70,
            "available_hvac_mode_settings" => [
                "cool",
                "heat",
                "heat_cool",
                "off",
            ],
            "current_climate_setting" => [
                "hvac_mode_setting" => "heat_cool",
                "cooling_set_point_farenheit" => 75,
                "heating_set_point_farenheit" => 65,
                "manual_override_allowed" => false,
            ],
            "location" => null,
            "connected_account_id" => "123e4567-e89b-12d3-a456-426614174000",
            "workspace_id" => "123e4567-e89b-12d3-a456-426614174000",
            "created_at" => "2024-04-05T07:57:05.323Z",
        ],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats list
```

#### Response

```seam_cli
[
  {
    "device_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": "true,",
      "relative_humidity": 0.36,
      "temperature_farenheit": 70,
      "available_hvac_mode_settings": ["cool", "heat", "heat_cool", "off"],
      "current_climate_setting": {
        "hvac_mode_setting": "heat_cool",
        "cooling_set_point_farenheit": 75,
        "heating_set_point_farenheit": 65,
        "manual_override_allowed": false
      },
      "location": null,
      "connected_account_id": "123e4567-e89b-12d3-a456-426614174000",
      "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-04-05T07:57:05.323Z"
    }
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

func main() {
	client.Thermostats.List(context.Background())
}
```

#### Response

```go
[]api.Device{api.Device{DeviceId: "123e4567-e89b-12d3-a456-426614174000", DeviceType: "ecobee_thermostat", CapabilitiesSupported: []string{"thermostat"}, Properties: api.DeviceProperties{Name: "Entryway", Online: "true,", RelativeHumidity: 0.36, TemperatureFarenheit: 70, AvailableHvacModeSettings: []string{"cool", "heat", "heat_cool", "off"}, CurrentClimateSetting: api.DevicePropertiesCurrentClimateSetting{HvacModeSetting: "heat_cool", CoolingSetPointFarenheit: 75, HeatingSetPointFarenheit: 65, ManualOverrideAllowed: false}, Location: nil, ConnectedAccountId: "123e4567-e89b-12d3-a456-426614174000", WorkspaceId: "123e4567-e89b-12d3-a456-426614174000", CreatedAt: "2024-04-05T07:57:05.323Z"}}}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `connect_webview_id`

Format: `UUID`
Required: No

ID of the Connect Webview by which to filter devices.

***

### `connected_account_id`

Format: `UUID`
Required: No

ID of the connected account by which to filter.

***

### `connected_account_ids`

Format: `List`
Item format: `UUID`
Required: No

Array of IDs of the connected accounts by which to filter devices.

***

### `created_before`

Format: `Datetime`
Required: No

Date threshold for devices to return. If specified, returns only devices created before the specified date.

***

### `custom_metadata_has`

Format: `Record`
Required: No

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs by which you want to filter devices.

***

### `device_ids`

Format: `List`
Item format: `UUID`
Required: No

Array of device IDs by which to filter devices.

***

### `device_type`

Format: `Enum`
Required: No

Device type by which to filter devices.

Possible enum values:
- `akuvox_lock`
- `august_lock`
- `brivo_access_point`
- `butterflymx_panel`
- `avigilon_alta_entry`
- `doorking_lock`
- `genie_door`
- `igloo_lock`
- `linear_lock`
- `lockly_lock`
- `kwikset_lock`
- `nuki_lock`
- `salto_lock`
- `schlage_lock`
- `seam_relay`
- `smartthings_lock`
- `wyze_lock`
- `yale_lock`
- `two_n_intercom`
- `controlbyweb_device`
- `ttlock_lock`
- `igloohome_lock`
- `hubitat_lock`
- `four_suites_door`
- `dormakaba_oracode_door`
- `tedee_lock`
- `akiles_lock`
- `noiseaware_activity_zone`
- `minut_sensor`
- `ecobee_thermostat`
- `nest_thermostat`
- `honeywell_resideo_thermostat`
- `tado_thermostat`
- `ios_phone`
- `android_phone`

***

### `device_types`

Format: `List`
Item format: `Enum`
Required: No

Array of device types by which to filter devices.

Possible enum values:
- `akuvox_lock`
- `august_lock`
- `brivo_access_point`
- `butterflymx_panel`
- `avigilon_alta_entry`
- `doorking_lock`
- `genie_door`
- `igloo_lock`
- `linear_lock`
- `lockly_lock`
- `kwikset_lock`
- `nuki_lock`
- `salto_lock`
- `schlage_lock`
- `seam_relay`
- `smartthings_lock`
- `wyze_lock`
- `yale_lock`
- `two_n_intercom`
- `controlbyweb_device`
- `ttlock_lock`
- `igloohome_lock`
- `hubitat_lock`
- `four_suites_door`
- `dormakaba_oracode_door`
- `tedee_lock`
- `akiles_lock`
- `noiseaware_activity_zone`
- `minut_sensor`
- `ecobee_thermostat`
- `nest_thermostat`
- `honeywell_resideo_thermostat`
- `tado_thermostat`
- `ios_phone`
- `android_phone`

***

### `limit`

Format: `Number`
Required: No

Numerical limit on the number of devices to return.

***

### `manufacturer`

Format: `Enum`
Required: No

Manufacturer by which to filter devices.

Possible enum values:
- `akuvox`
- `august`
- `avigilon_alta`
- `brivo`
- `butterflymx`
- `doorking`
- `four_suites`
- `genie`
- `igloo`
- `keywe`
- `kwikset`
- `linear`
- `lockly`
- `nuki`
- `philia`
- `salto`
- `samsung`
- `schlage`
- `seam`
- `unknown`
- `wyze`
- `yale`
- `minut`
- `two_n`
- `ttlock`
- `nest`
- `igloohome`
- `ecobee`
- `hubitat`
- `controlbyweb`
- `smartthings`
- `dormakaba_oracode`
- `tedee`
- `honeywell_resideo`
- `akiles`
- `tado`

***

### `user_identifier_key`

Format: `String`
Required: No

Your own internal user ID for the user by which to filter devices.

***

## Return Type

Array<[device](./)>
