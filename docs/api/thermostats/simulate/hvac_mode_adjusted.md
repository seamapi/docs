# HVAC Mode Adjusted

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates having adjusted the [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) for a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats). Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).


{% tabs %}
{% tab title="JavaScript" %}

Simulates having adjusted the HVAC mode for a thermostat.

#### Code:

```javascript
await seam.thermostats.simulate.hvacModeAdjusted({
  device_id: "278a72ba-7deb-45e3-a0c0-573fd360ee7b",
  hvac_mode: "heat",
  heating_set_point_fahrenheit: 68,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates having adjusted the HVAC mode for a thermostat.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/thermostats/simulate/hvac_mode_adjusted" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "278a72ba-7deb-45e3-a0c0-573fd360ee7b",
  "hvac_mode": "heat",
  "heating_set_point_fahrenheit": 68
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates having adjusted the HVAC mode for a thermostat.

#### Code:

```python
seam.thermostats.simulate.hvac_mode_adjusted(
    device_id="278a72ba-7deb-45e3-a0c0-573fd360ee7b",
    hvac_mode="heat",
    heating_set_point_fahrenheit=68,
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates having adjusted the HVAC mode for a thermostat.

#### Code:

```ruby
seam.thermostats.simulate.hvac_mode_adjusted(
  device_id: "278a72ba-7deb-45e3-a0c0-573fd360ee7b",
  hvac_mode: "heat",
  heating_set_point_fahrenheit: 68,
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates having adjusted the HVAC mode for a thermostat.

#### Code:

```php
$seam->thermostats->simulate->hvac_mode_adjusted(
    device_id: "278a72ba-7deb-45e3-a0c0-573fd360ee7b",
    hvac_mode: "heat",
    heating_set_point_fahrenheit: 68,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates having adjusted the HVAC mode for a thermostat.

#### Code:

```seam_cli
seam thermostats simulate hvac-mode-adjusted --device_id "278a72ba-7deb-45e3-a0c0-573fd360ee7b" --hvac_mode "heat" --heating_set_point_fahrenheit 68
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the thermostat device for which you want to simulate having adjusted the HVAC mode.

---

**`hvac_mode`** *String* (Required)

HVAC mode that you want to simulate.

---

**`cooling_set_point_celsius`** *Number*

Cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C that you want to simulate. You must set `cooling_set_point_celsius` or `cooling_set_point_fahrenheit`.

---

**`cooling_set_point_fahrenheit`** *Number*

Cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F that you want to simulate. You must set `cooling_set_point_fahrenheit` or `cooling_set_point_celsius`.

---

**`heating_set_point_celsius`** *Number*

Heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C that you want to simulate. You must set `heating_set_point_celsius` or `heating_set_point_fahrenheit`.

---

**`heating_set_point_fahrenheit`** *Number*

Heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F that you want to simulate. You must set `heating_set_point_fahrenheit` or `heating_set_point_celsius`.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

