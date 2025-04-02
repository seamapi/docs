# Create a Climate Preset

```
POST /thermostats/create_climate_preset ⇒ void
```

Creates a [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.createClimatePreset({"device_id":"123e4567-e89b-12d3-a456-426614174000","climate_preset_key":"occupied","name":"Occupied","fan_mode_setting":"auto","hvac_mode_setting":"heat_cool","cooling_set_point_celsius":25,"heating_set_point_celsius":20,"manual_override_allowed":true})
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.create_climate_preset(device_id="123e4567-e89b-12d3-a456-426614174000", climate_preset_key="occupied", name="Occupied", fan_mode_setting="auto", hvac_mode_setting="heat_cool", cooling_set_point_celsius=25, heating_set_point_celsius=20, manual_override_allowed=true)
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.create_climate_preset(device_id: "123e4567-e89b-12d3-a456-426614174000", climate_preset_key: "occupied", name: "Occupied", fan_mode_setting: "auto", hvac_mode_setting: "heat_cool", cooling_set_point_celsius: 25, heating_set_point_celsius: 20, manual_override_allowed: true)
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
$seam->thermostats->create_climate_preset(device_id: "123e4567-e89b-12d3-a456-426614174000",climate_preset_key: "occupied",name: "Occupied",fan_mode_setting: "auto",hvac_mode_setting: "heat_cool",cooling_set_point_celsius: 25,heating_set_point_celsius: 20,manual_override_allowed: true)
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats create-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied" --name "Occupied" --fan_mode_setting "auto" --hvac_mode_setting "heat_cool" --cooling_set_point_celsius 25 --heating_set_point_celsius 20 --manual_override_allowed true
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
  client.Thermostats.CreateClimatePreset(
context.Background(),
api.ThermostatsCreateClimatePresetRequest{
DeviceId: api.String("123e4567-e89b-12d3-a456-426614174000"),
ClimatePresetKey: api.String("occupied"),
Name: api.String("Occupied"),
FanModeSetting: api.String("auto"),
HvacModeSetting: api.String("heat_cool"),
CoolingSetPointCelsius: api.Float64(25),
HeatingSetPointCelsius: api.Float64(20),
ManualOverrideAllowed: api.Bool(true),
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `climate_preset_key`

Format: `String`
Required: Yes

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

***

### `device_id`

Format: `UUID`
Required: Yes

ID of the desired thermostat device.

***

### `cooling_set_point_celsius`

Format: `Number`
Required: No

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

***

### `cooling_set_point_fahrenheit`

Format: `Number`
Required: No

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

***

### `fan_mode_setting`

Format: `Enum`
Required: No

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

Possible enum values:
- `auto`
- `on`
- `circulate`

***

### `heating_set_point_celsius`

Format: `Number`
Required: No

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

***

### `heating_set_point_fahrenheit`

Format: `Number`
Required: No

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

***

### `hvac_mode_setting`

Format: `Enum`
Required: No

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

Possible enum values:
- `off`
- `heat`
- `cool`
- `heat_cool`

***

### `manual_override_allowed`

Format: `Boolean`
Required: No

Indicates whether a person at the thermostat or using the API can change the thermostat's settings.

{% hint style="warning" %}
**Deprecated**. Use 'thermostat_schedule.is_override_allowed'
{% endhint %}

***

### `name`

Format: `String`
Required: No

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

***

## Return Type

void
