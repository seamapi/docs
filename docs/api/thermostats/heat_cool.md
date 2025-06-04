# Set to Heat-Cool (Auto) Mode

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).

{% tabs %}
{% tab title="Signature" %}
```
POST /thermostats/heat_cool ⇒ { action_attempt }
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

**`device_id`** *String* (Required)

ID of the thermostat device that you want to set to heat-cool mode.

---

**`cooling_set_point_celsius`** *Number*

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set one of the `cooling_set_point` parameters.

---

**`cooling_set_point_fahrenheit`** *Number*

Desired [cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set one of the `cooling_set_point` parameters.

---

**`heating_set_point_celsius`** *Number*

Desired [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set one of the `heating_set_point` parameters.

---

**`heating_set_point_fahrenheit`** *Number*

Desired [heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set one of the `heating_set_point` parameters.

---


## Response

[action\_attempt](./)


---

## Examples

### Set to heat-cool (auto) mode

Specify the desired heating set point in °C or °F.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.thermostats.heatCool({
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
});
```

#### Output

```javascript
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT_COOL"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.thermostats.heat_cool(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    cooling_set_point_celsius=25,
    heating_set_point_celsius=20,
)
```

#### Output

```python
ActionAttempt(
    action_attempt_id="123e4567-e89b-12d3-a456-426614174000",
    status="pending",
    action_type="SET_HEAT_COOL",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.thermostats.heat_cool(
  device_id: "123e4567-e89b-12d3-a456-426614174000",
  cooling_set_point_celsius: 25,
  heating_set_point_celsius: 20,
)
```

#### Output

```ruby
{
  "action_attempt_id" => "123e4567-e89b-12d3-a456-426614174000",
  "status" => "pending",
  "action_type" => "SET_HEAT_COOL",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->thermostats->heat_cool(
    device_id: "123e4567-e89b-12d3-a456-426614174000",
    cooling_set_point_celsius: 25,
    heating_set_point_celsius: 20
);
```

#### Output

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
#### Code

```seam_cli
seam thermostats heat-cool --device_id "123e4567-e89b-12d3-a456-426614174000" --cooling_set_point_celsius 25 --heating_set_point_celsius 20
```

#### Output

```seam_cli
{
  "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "pending",
  "action_type": "SET_HEAT_COOL"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

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

#### Output

```go
api.ActionAttempt{ActionAttemptId: "123e4567-e89b-12d3-a456-426614174000", Status: "pending", ActionType: "SET_HEAT_COOL"}
```
{% endtab %}

{% tab title="cURL" %}
#### Code

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/heat_cool" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000",
  "cooling_set_point_celsius": 25,
  "heating_set_point_celsius": 20
}
EOF
```

#### Output

```curl
{
  "action_attempt": {
    "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
    "status": "pending",
    "action_type": "SET_HEAT_COOL"
  }
}
```
{% endtab %}

{% endtabs %}


