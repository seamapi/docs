# Set to Heat Mode

- [Request Parameters](#request-parameters)
- [Response](#response)

Sets a specified [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) to [heat mode](https://docs.seam.co/latest/capability-guides/thermostats/configure-current-climate-settings).


{% tabs %}
{% tab title="JavaScript" %}

Sets a specified thermostat to heat mode.

#### Code:

```javascript
await seam.thermostats.heat({
  device_id: "e4b111b8-e2bd-4f49-a9c8-96ed5390e1d5",
  heating_set_point_fahrenheit: 65,
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

Sets a specified thermostat to heat mode.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/heat" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "e4b111b8-e2bd-4f49-a9c8-96ed5390e1d5",
  "heating_set_point_fahrenheit": 65
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

Sets a specified thermostat to heat mode.

#### Code:

```python
seam.thermostats.heat(
    device_id="e4b111b8-e2bd-4f49-a9c8-96ed5390e1d5", heating_set_point_fahrenheit=65
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

Sets a specified thermostat to heat mode.

#### Code:

```ruby
seam.thermostats.heat(
  device_id: "e4b111b8-e2bd-4f49-a9c8-96ed5390e1d5",
  heating_set_point_fahrenheit: 65,
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

Sets a specified thermostat to heat mode.

#### Code:

```php
$seam->thermostats->heat(
    device_id: "e4b111b8-e2bd-4f49-a9c8-96ed5390e1d5",
    heating_set_point_fahrenheit: 65,
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

Sets a specified thermostat to heat mode.

#### Code:

```seam_cli
seam thermostats heat --device_id "e4b111b8-e2bd-4f49-a9c8-96ed5390e1d5" --heating_set_point_fahrenheit 65
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

ID of the thermostat device that you want to set to heat mode.

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
