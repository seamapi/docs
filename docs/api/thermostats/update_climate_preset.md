# Update a Climate Preset

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a specified [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="Signature" %}
```
PATCH /thermostats/update_climate_preset ⇒ void
```
{% endtab %}
{% endtabs %}

<details>

<summary>[Authentication Methods]{https://docs.seam.co/latest/api/authentication}</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Request Parameters

**`climate_preset_key`** *String* (Required)

Unique key to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---

**`device_id`** *String* (Required)

ID of the desired thermostat device.

---

**`manual_override_allowed`** *Boolean* (Required)

Indicates whether a person at the thermostat can change the thermostat's settings. See [Specifying Manual Override Permissions](../../capability-guides/thermostats/creating-and-managing-thermostat-schedules.md#specifying-manual-override-permissions).

---

**`cooling_set_point_celsius`** *Number*

Temperature to which the thermostat should cool (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`cooling_set_point_fahrenheit`** *Number*

Temperature to which the thermostat should cool (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`fan_mode_setting`** *String*

Desired [fan mode setting](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings#fan-mode-settings), such as `on`, `auto`, or `circulate`.

---

**`heating_set_point_celsius`** *Number*

Temperature to which the thermostat should heat (in °C). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`heating_set_point_fahrenheit`** *Number*

Temperature to which the thermostat should heat (in °F). See also [Set Points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md).

---

**`hvac_mode_setting`** *String*

Desired [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) setting, such as `heat`, `cool`, `heat_cool`, or `off`.

---

**`name`** *String*

User-friendly name to identify the [climate preset](../../capability-guides/thermostats/creating-and-managing-climate-presets/README.md).

---


## Response

void

---

## Examples
  
### Update a climate preset

Specify the `device_id` of the desired thermostat and the `climate_preset_key` of the desired climate preset, along with the desired updated settings for the climate preset, including `manual_override_allowed`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.updateClimatePreset({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
  cooling_set_point_celsius: 24,
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
seam.thermostats.update_climate_preset(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key="occupied",
    cooling_set_point_celsius=24,
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
seam.thermostats.update_climate_preset(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  climate_preset_key: "occupied",
  cooling_set_point_celsius: 24,
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
$seam->thermostats->update_climate_preset(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    climate_preset_key: "occupied",
    cooling_set_point_celsius: 24,
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
seam thermostats update-climate-preset --device_id "123e4567-e89b-12d3-a456-426614174000" --climate_preset_key "occupied" --cooling_set_point_celsius 24 --manual_override_allowed true
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

#### Output

```go
nil
```
{% endtab %}

{% endtabs %}


