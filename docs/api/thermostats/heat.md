# Set to Heat Mode

```
POST /thermostats/heat ⇒ { action_attempt }
```

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.thermostats.heat({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  heating_set_point_celsius: 20,
});
```

#### Response

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT"
}
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.thermostats.heat(
    device_id="123e4567-e89b-12d3-a456-426614174000", heating_set_point_celsius=20
)
```

#### Response

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_HEAT",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.thermostats.heat(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  heating_set_point_celsius: 20,
)
```

#### Response

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "pending",
  "action_type" => "SET_HEAT",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->thermostats->heat(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    heating_set_point_celsius: 20
);
```

#### Response

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
#### Request

```seam_cli
seam thermostats heat --device_id "123e4567-e89b-12d3-a456-426614174000" --heating_set_point_celsius 20
```

#### Response

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT"
}
```
{% endtab %}

{% tab title="Go" %}
#### Request

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

#### Response

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

## Request Parameters

### `device_id`

Format: `UUID`
Required: Yes

ID of the desired thermostat device.

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

Format: `Enum`

Value: `SET_HVAC_MODE`

---

#### `error`

Format: `Object`

<details>

<summary><code>message</code> Format: <code>String</code></summary>
</details>

<details>

<summary><code>type</code> Format: <code>String</code></summary>
</details>

---

#### `result`

Format: `Object`

This object has no properties.

---

#### `status`

Format: `Enum`

Possible enum values:
- `success`
- `pending`
- `error`

---

