# List Thermostats

```
POST /thermostats/list ⇒ { devices: [device, …] }
```

{% hint style="info" %}
**Authentication Methods:** `API Key`, `Personal Access Token`, `Console Session Token`, `Client Session Token`
{% endhint %}

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
seam.thermostats.list
```

#### Response

```ruby
[{"device_id" => "123e4567-e89b-12d3-a456-426614174000", "device_type" => "ecobee_thermostat", "capabilities_supported" => ["thermostat"], "properties" => {name: "Entryway", online: "true,", relative_humidity: 0.36, temperature_farenheit: 70, available_hvac_mode_settings: ["cool", "heat", "heat_cool", "off"], current_climate_setting: {hvac_mode_setting: "heat_cool", cooling_set_point_farenheit: 75, heating_set_point_farenheit: 65, manual_override_allowed: false}, location: null, connected_account_id: "123e4567-e89b-12d3-a456-426614174000", workspace_id: "123e4567-e89b-12d3-a456-426614174000", created_at: "2024-04-05T07:57:05.323Z"}}]
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

## Request Parameters

### `connect_webview_id`

Type: `string`
Required: No

ID of the Connect Webview by which to filter devices.

***

### `connected_account_id`

Type: `string`
Required: No

ID of the connected account by which to filter.

***

### `connected_account_ids`

Type: `array`
Required: No

Array of IDs of the connected accounts by which to filter devices.

***

### `created_before`

Type: `string`
Required: No

Date threshold for devices to return. If specified, returns only devices created before the specified date.

***

### `custom_metadata_has`

Type: `object`
Required: No

Set of key:value [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) pairs by which you want to filter devices.

***

### `device_ids`

Type: `array`
Required: No

Array of device IDs by which to filter devices.

***

### `device_types`

Type: `array`
Required: No

Array of device types by which to filter devices.

***

### `limit`

Type: `number`
Required: No

Numerical limit on the number of devices to return.

***

### `manufacturer`

Type: `string`
Required: No

Manufacturer by which to filter devices.

***

### `user_identifier_key`

Type: `string`
Required: No

Your own internal user ID for the user by which to filter devices.

***

## Return Type

Array<[device](./)>
