# HVAC Mode Adjusted

```
POST /thermostats/simulate/hvac_mode_adjusted ⇒ void
```

Simulates having adjusted the [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) for a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats). Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).

## Authentication Methods

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

## Request Parameters

### `device_id`

Format: `UUID`
Required: Yes

ID of the desired thermostat device.

***

### `hvac_mode`

Format: `Enum`
Required: Yes

Desired [HVAC mode](../../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) to simulate.

Possible enum values:
- `off`
- `cool`
- `heat`
- `heat_cool`

***

### `cooling_set_point_celsius`

Format: `Number`
Required: No

Desired simulated cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set `cooling_set_point_celsius` or `cooling_set_point_fahrenheit`.

***

### `cooling_set_point_fahrenheit`

Format: `Number`
Required: No

Desired simulated cooling [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set `cooling_set_point_fahrenheit` or `cooling_set_point_celsius`.

***

### `heating_set_point_celsius`

Format: `Number`
Required: No

Desired simulated heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °C. You must set `heating_set_point_celsius` or `heating_set_point_fahrenheit`.

***

### `heating_set_point_fahrenheit`

Format: `Number`
Required: No

Desired simulated heating [set point](../../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in °F. You must set `heating_set_point_fahrenheit` or `heating_set_point_celsius`.

***

## Return Type

void
