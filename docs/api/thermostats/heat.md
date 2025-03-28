# Set to Heat Mode

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/heat ⇒ { action_attempt }
```
{% endtab %}
{% endtabs %}

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.heat({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  heating_set_point_celsius: 20,
});
```

#### Output

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.heat(
    device_id="123e4567-e89b-12d3-a456-426614174000", heating_set_point_celsius=20
)
```

#### Output

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_HEAT",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.heat(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  heating_set_point_celsius: 20,
)
```

#### Output

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "pending",
  "action_type" => "SET_HEAT",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->heat(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    heating_set_point_celsius: 20
);
```

#### Output

```php
<?php
[
    "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
    "status" => "pending",
    "action_type" => "SET_HEAT",
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam thermostats heat --device_id "123e4567-e89b-12d3-a456-426614174000" --heating_set_point_celsius 20
```

#### Output

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.Thermostats.Heat(
		context.Background(),
		api.ThermostatsHeatRequest{
			DeviceId:               api.String("123e4567-e89b-12d3-a456-426614174000"),
			HeatingSetPointCelsius: api.Float64(20),
		},
	)
}
```

#### Output

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_HEAT"}
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

`action_attempt_id` *UUID`*
ID of the action attempt.

---

`action_type` *String`*

---

`status` *Enum`*

Possible enum values:
- `success`
- `pending`
- `error`

---

