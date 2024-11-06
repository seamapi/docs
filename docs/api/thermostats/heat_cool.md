# Set to Heat-Cool (Auto) Mode

```
POST /thermostats/heat_cool ⇒ { action_attempt }
```

Set a thermostat to heat-cool mode, also known as "auto" mode. To do so, you must include both cooling and heating set points in the payload, either in Celsius or Fahrenheit. For information about verifying the heating and cooling availability of the thermostat and validating the correct set points, see [HVAC Mode Constraints](https://docs.seam.co/latest/capability-guides/thermostats/hvac-mode#hvac-mode-constraints) and [Set Point Constraints](https://docs.seam.co/latest/capability-guides/thermostats/set-points#set-point-constraints).

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
seam.thermostats.heat_cool(device_id: "123e4567-e89b-12d3-a456-426614174000", cooling_set_point_celsius: 25, heating_set_point_celsius: 20)
```

#### Response

```ruby
{"action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000", "status" => "pending", "action_type" => "SET_HEAT_COOL"}
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
["action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000","status" => "pending","action_type" => "SET_HEAT_COOL"]
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

## Request Parameters

### `cooling_set_point_celsius`

Type: `number`
Required: No

Temperature to which the HVAC system connected to the thermostat should cool (in °C). You must set one of the `cooling_set_point` parameters.

***

### `cooling_set_point_fahrenheit`

Type: `number`
Required: No

Temperature the thermostat should cool to (in °F). You must set one of the cooling_set_point parameters.

***

### `device_id`

Type: `string`
Required: Yes

ID of the thermostat device.

***

### `heating_set_point_celsius`

Type: `number`
Required: No

Temperature to which the HVAC system connected to the thermostat should heat (in °C). You must set one of the `heating_set_point` parameters.

***

### `heating_set_point_fahrenheit`

Type: `number`
Required: No

Temperature the thermostat should heat to (in °F). You must set one of the heating_set_point parameters.

***

### `sync`

Type: `boolean`
Required: No



***

## Return Type

[action\_attempt](./)
