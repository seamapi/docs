# Update a Climate Preset

```
PATCH /thermostats/update_climate_preset ⇒ void
```

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.updateClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
  cooling_set_point_celsius: 24,
  manual_override_allowed: true,
});
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.update_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key="occupied",
    cooling_set_point_celsius=24,
    manual_override_allowed=true,
)
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.update_climate_preset(device_id: "123e4567-e89b-12d3-a456-426614174000", climate_preset_key: "occupied", cooling_set_point_celsius: 24, manual_override_allowed: true)
```

#### Response

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->update_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "occupied",
    cooling_set_point_celsius: 24,
    manual_override_allowed: true
);
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats update-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied" --cooling_set_point_celsius 24 --manual_override_allowed true
```

#### Response

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.UpdateClimatePreset(
		context.Background(),
		api.ThermostatsUpdateClimatePresetRequest{
			DeviceId:               api.String("123e4567-e89b-12d3-a456-426614174000"),
			ClimatePresetKey:       api.String("occupied"),
			CoolingSetPointCelsius: api.Float64(24),
			ManualOverrideAllowed:  api.Bool(true),
		},
	)
}
```

#### Response

```go
nil
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token

## Request Parameters

### `climate_preset_key`

Type: `string`
Required: Yes

Unique key to identify the climate preset.

***

### `cooling_set_point_celsius`

Type: `number`
Required: No

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

***

### `cooling_set_point_fahrenheit`

Type: `number`
Required: No

Temperature to which the thermostat should cool (in °F).

***

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

### `fan_mode_setting`

Type: `string`
Required: No

Desired fan mode setting, such as `on`, `auto`, or `circulate`.

***

### `heating_set_point_celsius`

Type: `number`
Required: No

Temperature to which the thermostat should heat (in °C).

***

### `heating_set_point_fahrenheit`

Type: `number`
Required: No

Temperature to which the thermostat should heat (in °F).

***

### `hvac_mode_setting`

Type: `string`
Required: No

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

***

### `manual_override_allowed`

Type: `boolean`
Required: Yes

Indicates whether a person at the thermostat can change the thermostat's settings.

***

### `name`

Type: `string`
Required: No

User-friendly name to identify the climate preset.

***

## Return Type

void
