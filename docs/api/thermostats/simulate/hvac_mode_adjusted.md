# HVAC Mode Adjusted

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Simulates having adjusted the [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) for a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats). Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

````
ID of the thermostat device for which you want to simulate having adjusted the HVAC mode.
````

---

**`hvac_mode`** *String* (Required)

````
HVAC mode that you want to simulate.
````

---

**`cooling_set_point_celsius`** *Number*

````
Cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C that you want to simulate. You must set `cooling_set_point_celsius` or `cooling_set_point_fahrenheit`.
````

---

**`cooling_set_point_fahrenheit`** *Number*

````
Cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F that you want to simulate. You must set `cooling_set_point_fahrenheit` or `cooling_set_point_celsius`.
````

---

**`heating_set_point_celsius`** *Number*

````
Heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C that you want to simulate. You must set `heating_set_point_celsius` or `heating_set_point_fahrenheit`.
````

---

**`heating_set_point_fahrenheit`** *Number*

````
Heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F that you want to simulate. You must set `heating_set_point_fahrenheit` or `heating_set_point_celsius`.
````

---


## Response

void

