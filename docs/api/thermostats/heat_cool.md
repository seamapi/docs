# Set to Heat-Cool (Auto) Mode

```
POST /thermostats/heat_cool ⇒ { action_attempt }
```

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.heatCool({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
});
```

#### Response

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT_COOL"
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.heat_cool(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    cooling_set_point_celsius=25,
    heating_set_point_celsius=20,
)
```

#### Response

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_HEAT_COOL",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.heat_cool(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
)
```

#### Response

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "pending",
  "action_type" => "SET_HEAT_COOL",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->heat_cool(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    cooling_set_point_celsius: 25,
    heating_set_point_celsius: 20
);
```

#### Response

```php
<?php
[
    "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
    "status" => "pending",
    "action_type" => "SET_HEAT_COOL",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats heat-cool --device_id "123e4567-e89b-12d3-a456-426614174000" --cooling_set_point_celsius 25 --heating_set_point_celsius 20
```

#### Response

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT_COOL"
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.HeatCool(
		context.Background(),
		api.ThermostatsHeatCoolRequest{
			DeviceId:               api.String("123e4567-e89b-12d3-a456-426614174000"),
			CoolingSetPointCelsius: api.Float64(25),
			HeatingSetPointCelsius: api.Float64(20),
		},
	)
}
```

#### Response

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_HEAT_COOL"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Format: `UUID`
Required: Yes

ID of the desired thermostat device.

***

### `cooling_set_point_celsius`

Format: `Number`
Required: No

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set one of the `cooling_set_point` parameters.

***

### `cooling_set_point_fahrenheit`

Format: `Number`
Required: No

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set one of the `cooling_set_point` parameters.

***

### `heating_set_point_celsius`

Format: `Number`
Required: No

Desired [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set one of the `heating_set_point` parameters.

***

### `heating_set_point_fahrenheit`

Format: `Number`
Required: No

Desired [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set one of the `heating_set_point` parameters.

***

## Return Type

[action\_attempt](./)

### `SET_HVAC_MODE`

Setting HVAC mode.

#### `action_attempt_id`

Format: `UUID`

ID of the action attempt.

---

#### `action_type`

Format: `String`

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

