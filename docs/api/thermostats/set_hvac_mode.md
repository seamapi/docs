# Set the HVAC Mode

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/set_hvac_mode ⇒ { action_attempt }
```
{% endtab %}
{% endtabs %}

Sets the [HVAC mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.setHvacMode({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  hvac_mode_setting: "heat_cool",
  heating_set_point_celsius: 20,
  cooling_set_point_celsius: 25,
});
```

#### Output

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "success",
  "action_type": "SET_HVAC_MODE"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.set_hvac_mode(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    hvac_mode_setting="heat_cool",
    heating_set_point_celsius=20,
    cooling_set_point_celsius=25,
)
```

#### Output

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="success",
    action_type="SET_HVAC_MODE",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.set_hvac_mode(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  hvac_mode_setting: "heat_cool",
  heating_set_point_celsius: 20,
  cooling_set_point_celsius: 25,
)
```

#### Output

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "success",
  "action_type" => "SET_HVAC_MODE",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->set_hvac_mode(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    hvac_mode_setting: "heat_cool",
    heating_set_point_celsius: 20,
    cooling_set_point_celsius: 25
);
```

#### Output

```php
<?php
[
    "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
    "status" => "success",
    "action_type" => "SET_HVAC_MODE",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats set-hvac-mode --device_id "123e4567-e89b-12d3-a456-426614174000" --hvac_mode_setting "heat_cool" --heating_set_point_celsius 20 --cooling_set_point_celsius 25
```

#### Output

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "success",
  "action_type": "SET_HVAC_MODE"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.SetHvacMode(
		context.Background(),
		api.ThermostatsSetHvacModeRequest{
			DeviceId:               api.String("123e4567-e89b-12d3-a456-426614174000"),
			HvacModeSetting:        api.String("heat_cool"),
			HeatingSetPointCelsius: api.Float64(20),
			CoolingSetPointCelsius: api.Float64(25),
		},
	)
}
```

#### Output

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "success", ActionType: "SET_HVAC_MODE"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

---

### `hvac_mode_setting`

Type: `string`
Required: Yes



---

### `cooling_set_point_celsius`

Type: `number`
Required: No

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set one of the `cooling_set_point` parameters.

---

### `cooling_set_point_fahrenheit`

Type: `number`
Required: No

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set one of the `cooling_set_point` parameters.

---

### `heating_set_point_celsius`

Type: `number`
Required: No

Desired [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set one of the `heating_set_point` parameters.

---

### `heating_set_point_fahrenheit`

Type: `number`
Required: No

Desired [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set one of the `heating_set_point` parameters.

---


## Return Type

[action\_attempt](./)

### The `SET_HVAC_MODE` Resource

Setting HVAC mode.

### Properties

**`action_attempt_id`** *UUID*

ID of the action attempt.


---
**`action_type`** *String*


---
**`status`** *Enum*

<details>

<summary>Enum values:</summary>

- `success`
- `pending`
- `error`
</details>


---
