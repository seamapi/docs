# Create a Climate Preset

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/create_climate_preset ⇒ void
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

**`climate_preset_key`**  (Required)

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---

**`device_id`**  (Required)

ID of the thermostat device for which you want create a climate preset.

---

**`cooling_set_point_celsius`** 

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`cooling_set_point_fahrenheit`** 

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`fan_mode_setting`** 

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

---

**`heating_set_point_celsius`** 

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`heating_set_point_fahrenheit`** 

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`hvac_mode_setting`** 

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

---

**`manual_override_allowed`** 

Indicates whether a person at the thermostat or using the API can change the thermostat's settings.

---

**`name`** 

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---


## Response

void

---

## Examples

### Create a climate preset

Specify the `device_id` of the desired thermostat, along with the desired settings for the climate preset, including `manual_override_allowed`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.createClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
  name: "Occupied",
  fan_mode_setting: "auto",
  hvac_mode_setting: "heat_cool",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
  manual_override_allowed: true,
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.create_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key="occupied",
    name="Occupied",
    fan_mode_setting="auto",
    hvac_mode_setting="heat_cool",
    cooling_set_point_celsius=25,
    heating_set_point_celsius=20,
    manual_override_allowed=true,
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.create_climate_preset(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
  name: "Occupied",
  fan_mode_setting: "auto",
  hvac_mode_setting: "heat_cool",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
  manual_override_allowed: true,
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->create_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "occupied",
    name: "Occupied",
    fan_mode_setting: "auto",
    hvac_mode_setting: "heat_cool",
    cooling_set_point_celsius: 25,
    heating_set_point_celsius: 20,
    manual_override_allowed: true
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats create-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied" --name "Occupied" --fan_mode_setting "auto" --hvac_mode_setting "heat_cool" --cooling_set_point_celsius 25 --heating_set_point_celsius 20 --manual_override_allowed true
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.CreateClimatePreset(
		context.Background(),
		api.ThermostatsCreateClimatePresetRequest{
			DeviceId:               api.String("123e4567-e89b-12d3-a456-426614174000"),
			ClimatePresetKey:       api.String("occupied"),
			Name:                   api.String("Occupied"),
			FanModeSetting:         api.String("auto"),
			HvacModeSetting:        api.String("heat_cool"),
			CoolingSetPointCelsius: api.Float64(25),
			HeatingSetPointCelsius: api.Float64(20),
			ManualOverrideAllowed:  api.Bool(true),
		},
	)
}
```

#### Output

```go
nil
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/create_climate_preset" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000",
  "climate_preset_key": "occupied",
  "name": "Occupied",
  "fan_mode_setting": "auto",
  "hvac_mode_setting": "heat_cool",
  "cooling_set_point_celsius": 25,
  "heating_set_point_celsius": 20,
  "manual_override_allowed": true
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% endtabs %}


