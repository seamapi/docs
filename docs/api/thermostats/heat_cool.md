# Set to Heat-Cool (Auto) Mode
{% hint style="info" %}
**Alpha**. This API is in Alpha, please give us feedback.
{% endhint %}

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired heating set point in °C or °F.

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

{% tab title="cURL" %}

Specify the desired heating set point in °C or °F.

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

{% tab title="Python" %}

Specify the desired heating set point in °C or °F.

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

Specify the desired heating set point in °C or °F.

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

Specify the desired heating set point in °C or °F.

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

{% tab title="Go" %}

Specify the desired heating set point in °C or °F.

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

{% tab title="Seam CLI" %}

Specify the desired heating set point in °C or °F.

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

[Cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C that you want to set for the thermostat. You must set one of the `cooling_set_point` parameters.

---

**`cooling_set_point_fahrenheit`** *Number*

[Cooling set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F that you want to set for the thermostat. You must set one of the `cooling_set_point` parameters.

---

**`heating_set_point_celsius`** *Number*

[Heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C that you want to set for the thermostat. You must set one of the `heating_set_point` parameters.

---

**`heating_set_point_fahrenheit`** *Number*

[Heating set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F that you want to set for the thermostat. You must set one of the `heating_set_point` parameters.

---


## Response

[action\_attempt](./)


---

## Examples

