# Set to Heat-Cool (Auto) Mode

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat-cool ("auto") mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


{% tabs %}
{% tab title="JavaScript" %}

Sets a specified thermostat to heat-cool ("auto") mode.

#### Code:

```javascript
await seam.thermostats.heatCool({
  device_id: "32f974cc-e817-4bd7-b7f1-be92c80884a1",
  heating_set_point_celsius: 20,
  cooling_set_point_celsius: 25,
});
```

#### Output:

```javascript
{
  "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type": "SET_HVAC_MODE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}

{% tab title="cURL" %}

Sets a specified thermostat to heat-cool ("auto") mode.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/heat_cool" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "32f974cc-e817-4bd7-b7f1-be92c80884a1",
  "heating_set_point_celsius": 20,
  "cooling_set_point_celsius": 25
}
EOF
```

#### Output:

```curl
{
  "action_attempt": {
    "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
    "action_type": "SET_HVAC_MODE",
    "error": null,
    "result": {},
    "status": "success"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Sets a specified thermostat to heat-cool ("auto") mode.

#### Code:

```python
seam.thermostats.heat_cool(
    device_id="32f974cc-e817-4bd7-b7f1-be92c80884a1",
    heating_set_point_celsius=20,
    cooling_set_point_celsius=25,
)
```

#### Output:

```python
ActionAttempt(
    action_attempt_id="b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
    action_type="SET_HVAC_MODE",
    error=None,
    result={},
    status="success",
)
```
{% endtab %}

{% tab title="Ruby" %}

Sets a specified thermostat to heat-cool ("auto") mode.

#### Code:

```ruby
seam.thermostats.heat_cool(
  device_id: "32f974cc-e817-4bd7-b7f1-be92c80884a1",
  heating_set_point_celsius: 20,
  cooling_set_point_celsius: 25,
)
```

#### Output:

```ruby
{
  "action_attempt_id" => "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type" => "SET_HVAC_MODE",
  "error" => nil,
  "result" => {
  },
  "status" => "success",
}
```
{% endtab %}

{% tab title="PHP" %}

Sets a specified thermostat to heat-cool ("auto") mode.

#### Code:

```php
$seam->thermostats->heat_cool(
    device_id: "32f974cc-e817-4bd7-b7f1-be92c80884a1",
    heating_set_point_celsius: 20,
    cooling_set_point_celsius: 25
);
```

#### Output:

```php
[
    "action_attempt_id" => "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
    "action_type" => "SET_HVAC_MODE",
    "error" => null,
    "result" => [],
    "status" => "success",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Sets a specified thermostat to heat-cool ("auto") mode.

#### Code:

```seam_cli
seam thermostats heat-cool --device_id "32f974cc-e817-4bd7-b7f1-be92c80884a1" --heating_set_point_celsius 20 --cooling_set_point_celsius 25
```

#### Output:

```seam_cli
{
  "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type": "SET_HVAC_MODE",
  "error": null,
  "result": {},
  "status": "success"
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

{% hint style="success" %}
Returns:
**[action\_attempt](./)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "action_attempt_id": "b0e1d2c3-4f5e-6a7b-8c9d-0e1f2a3b4c5d",
  "action_type": "SET_HVAC_MODE",
  "error": null,
  "result": {},
  "status": "success"
}
```
{% endtab %}
{% endtabs %}
