# HVAC Mode Adjusted

Simulates having adjusted the [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) for a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats). Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).

{% hint style="success" %}
```
POST /thermostats/simulate/hvac_mode_adjusted ⇒ void
```
{% endhint %}

## Parameters

**`device_id`** ** (Required)

ID of the desired thermostat device.

---

**`hvac_mode`** ** (Required)

Desired [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) to simulate.

---

**`cooling_set_point_celsius`** **

Desired simulated cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set `cooling_set_point_celsius` or `cooling_set_point_fahrenheit`.

---

**`cooling_set_point_fahrenheit`** **

Desired simulated cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set `cooling_set_point_fahrenheit` or `cooling_set_point_celsius`.

---

**`heating_set_point_celsius`** **

Desired simulated heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set `heating_set_point_celsius` or `heating_set_point_fahrenheit`.

---

**`heating_set_point_fahrenheit`** **

Desired simulated heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set `heating_set_point_fahrenheit` or `heating_set_point_celsius`.

---


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
## Return Type

void
