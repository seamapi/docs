# Temperature Reached

```
POST /thermostats/simulate/temperature_reached ⇒ void
```

Simulates a [thermostat](https://docs.seam.co/latest/capability-guides/thermostats) reaching a specified temperature. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your Thermostat App with Simulate Endpoints](../../../capability-guides/thermostats/testing-your-thermostat-app-with-simulate-endpoints.md).

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

### `temperature_celsius`

Format: `Number`
Required: No

Desired simulated temperature in °C. You must set `temperature_celsius` or `temperature_fahrenheit`.

***

### `temperature_fahrenheit`

Format: `Number`
Required: No

Desired simulated temperature in °F. You must set `temperature_fahrenheit` or `temperature_celsius`.

***

## Return Type

void
