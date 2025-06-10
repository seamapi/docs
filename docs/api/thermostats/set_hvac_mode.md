# Set the HVAC Mode

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets the [HVAC mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings) for a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats).


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the desired heating and cooling set points in °C or °F.

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

{% tab title="cURL" %}
#### Code

Specify the desired heating and cooling set points in °C or °F.

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/set_hvac_mode" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "123e4567-e89b-12d3-a456-426614174000",
  "hvac_mode_setting": "heat_cool",
  "heating_set_point_celsius": 20,
  "cooling_set_point_celsius": 25
}
EOF
```

#### Output

```curl
{
  "action_attempt": {
    "action_attempt_id": "123e4567-e89b-12d3-a456-426614174000",
    "status": "success",
    "action_type": "SET_HVAC_MODE"
  }
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

Specify the desired heating and cooling set points in °C or °F.

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

Specify the desired heating and cooling set points in °C or °F.

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

Specify the desired heating and cooling set points in °C or °F.

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

{% tab title="Go" %}
#### Code

Specify the desired heating and cooling set points in °C or °F.

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

{% tab title="Seam CLI" %}
#### Code

Specify the desired heating and cooling set points in °C or °F.

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

ID of the thermostat device for which you want to set the HVAC mode.

---

**`hvac_mode_setting`** *String* (Required)

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

