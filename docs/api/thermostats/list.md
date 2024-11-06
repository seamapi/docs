# List Thermostats

```
POST /thermostats/list ⇒ { devices: [device, …] }
```

Returns a list of thermostats connected to your workspace. If no thermostats are connected, the list will be empty.

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
[["device_id" => "123e4567-e89b-12d3-a456-426614174000","device_type" => "ecobee_thermostat","capabilities_supported" => ["thermostat"],"properties" => ["name" => "Entryway", "online" => "true,", "relative_humidity" => 0.36, "temperature_farenheit" => 70, "available_hvac_mode_settings" => ["cool", "heat", "heat_cool", "off"], "current_climate_setting" => ["hvac_mode_setting" => "heat_cool", "cooling_set_point_farenheit" => 75, "heating_set_point_farenheit" => 65, "manual_override_allowed" => false], "location" => null, "connected_account_id" => "123e4567-e89b-12d3-a456-426614174000", "workspace_id" => "123e4567-e89b-12d3-a456-426614174000", "created_at" => "2024-04-05T07:57:05.323Z"]]]
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



***

### `connected_account_id`

Type: `string`
Required: No

List all devices owned by this connected account

***

### `connected_account_ids`

Type: `array`
Required: No



***

### `created_before`

Type: `string`
Required: No



***

### `custom_metadata_has`

Type: `object`
Required: No



***

### `device_ids`

Type: `array`
Required: No



***

### `device_types`

Type: `array`
Required: No



***

### `exclude_if`

Type: `array`
Required: No



***

### `include_if`

Type: `array`
Required: No



***

### `limit`

Type: `number`
Required: No



***

### `manufacturer`

Type: `string`
Required: No



***

### `user_identifier_key`

Type: `string`
Required: No



***

## Return Type

Array<[device](./)>
