# Set to Cool Mode

```
POST /thermostats/cool ⇒ { action_attempt }
```

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [cool mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.cool({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  cooling_set_point_celsius: 25,
});
```

#### Response

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_COOL"
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.cool(
    device_id="123e4567-e89b-12d3-a456-426614174000", cooling_set_point_celsius=25
)
```

#### Response

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_COOL",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.cool(device_id: "123e4567-e89b-12d3-a456-426614174000", cooling_set_point_celsius: 25)
```

#### Response

```ruby
{"action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000", "status" => "pending", "action_type" => "SET_COOL"}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->cool(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    cooling_set_point_celsius: 25
);
```

#### Response

```php
["action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000","status" => "pending","action_type" => "SET_COOL"]
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam thermostats cool --device_id "123e4567-e89b-12d3-a456-426614174000" --cooling_set_point_celsius 25
```

#### Response

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_COOL"
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.Cool(
		context.Background(),
		api.ThermostatsCoolRequest{
			DeviceId:               api.String("123e4567-e89b-12d3-a456-426614174000"),
			CoolingSetPointCelsius: api.Float64(25),
		},
	)
}
```

#### Response

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_COOL"}
```
{% endtab %}

{% endtabs %}

## Request Parameters

### `cooling_set_point_celsius`

Type: `number`
Required: No

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set one of the `cooling_set_point` parameters.

***

### `cooling_set_point_fahrenheit`

Type: `number`
Required: No

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set one of the `cooling_set_point` parameters.

***

### `device_id`

Type: `string`
Required: Yes

ID of the desired thermostat device.

***

## Return Type

[action\_attempt](./)