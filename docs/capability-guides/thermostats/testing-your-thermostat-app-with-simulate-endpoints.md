---
description: >-
  Learn how to use the Seam suite of simulate endpoints to test your thermostat
  app.
---

# Testing Your Thermostat App with Simulate Endpoints

Seam's suite of `simulate` endpoints help you to test your thermostat app against events that can be difficult to orchestrate in your quality assurance (QA) environment using real devices. Seam provides the following thermostat-related `simulate` endpoints that you can use in a [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces):

* [`/thermostats/simulate/hvac_mode_adjusted`](testing-your-thermostat-app-with-simulate-endpoints.md#simulate-adjusting-the-hvac-mode)
* [`/thermostats/simulate/temperature_reached`](testing-your-thermostat-app-with-simulate-endpoints.md#simulate-reaching-a-desired-temperature)

Seam supports these endpoints for all thermostat [sandbox devices](../../device-guides/sandbox-and-sample-data/).

{% hint style="info" %}
Seam provides additional `simulate` endpoints to help you [test your app against device disconnection and removal](../../core-concepts/devices/testing-your-app-against-device-disconnection-and-removal.md).
{% endhint %}

***

## Checking Capability Flags

Before using the `simulate` endpoints, check the relevant capabilities of the sandbox thermostat that you want to test. For example, if you want to use `/thermostats/simulate/hvac_mode_adjusted` to simulate having set the [HVAC mode](understanding-thermostat-concepts/hvac-mode.md) on a thermostat to `heat`, you must first make sure that the thermostat supports heat mode.

The following device properties show the relevant capabilities of a thermostat:

* `device.can_hvac_heat`
* `device.can_hvac_cool`
* `device.can_hvac_heat_cool`
* `device.can_turn_off_hvac`

For more information, see [Thermostat Capabilities](../../products/thermostats/#thermostat-capabilities).

***

## Simulate Adjusting the HVAC Mode

The `/thermostats/simulate/hvac_mode_adjusted` endpoint enables you to simulate having adjusted the [HVAC mode](understanding-thermostat-concepts/hvac-mode.md) for a thermostat. This simulation is helpful for testing that your app is receiving [thermostat events](../../api-clients/events/) correctly, such as `thermostat.manually_adjusted`.

You can simulate having set the HVAC mode to any of the following settings:

* `heat`
* `cool`
* `heat_cool`
* `off`

When you set the HVAC mode to `heat`, `cool`, or `heat_cool`, you must also set the following applicable [set points](understanding-thermostat-concepts/set-points.md) to the desired degrees Fahrenheit or Celsius:

| HVAC Mode Setting | Required Set Points                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heat`            | <ul><li><code>heating_set_point_fahrenheit</code> or <code>heating_set_point_celsius</code></li></ul>                                                                                             |
| `cool`            | <ul><li><code>cooling_set_point_fahrenheit</code> or <code>cooling_set_point_celsius</code></li></ul>                                                                                             |
| `heat_cool`       | <ul><li><code>heating_set_point_fahrenheit</code> or <code>heating_set_point_celsius</code></li><li><code>cooling_set_point_fahrenheit</code> or <code>cooling_set_point_celsius</code></li></ul> |
| `off`             | <ul><li>None</li></ul>                                                                                                                                                                            |

To simulate having adjusted the HVAC mode for a thermostat:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the device.
thermostat = seam.devices.get(
  device_id="11111111-1111-1111-2222-444444444444"
)

# Confirm that Seam supports the desired HVAC mode for the thermostat.
# In this example, we're simulating having set the thermostat to heat mode.
if thermostat.can_hvac_heat:
  # Perform the simulated HVAC mode adjustment.
  seam.thermostats.simulate.hvac_mode_adjusted(
    device_id = thermostat.device_id,
    hvac_mode = "heat",
    heating_set_point_fahrenheit = 68
  )
```

**Output:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Get the device.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-2222-444444444444"
  }')

# Confirm that Seam supports the desired HVAC mode for the thermostat.
# In this example, we're simulating having set the thermostat to heat mode.
if  $(jq -r '.device.can_hvac_heat' <<< ${thermostat}); then \
  # Perform the simulated HVAC mode adjustment.
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/simulate/hvac_mode_adjusted' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
      \"hvac_mode\": \"heat\",
      \"heating_set_point_fahrenheit\": 68
  }";
fi
```

**Output:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Get the device.
const thermostat = await seam.devices.get({
  device_id: "11111111-1111-1111-2222-444444444444"
});

// Confirm that Seam supports the desired HVAC mode for the thermostat.
// In this example, we're simulating having set the thermostat to heat mode.
if (thermostat.can_hvac_heat) {
  // Perform the simulated HVAC mode adjustment.
  await seam.thermostats.simulate.hvacModeAdjusted({
    device_id: thermostat.device_id,
    hvac_mode: "heat",
    heating_set_point_fahrenheit: 68
  })
};
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```ruby
# Get the device.
thermostat = client.devices.get(device_id: "11111111-1111-1111-2222-444444444444")

# Confirm that Seam supports the desired HVAC mode for the thermostat.
# In this example, we're simulating having set the thermostat to heat mode.
if (thermostat.can_hvac_heat)
  # Perform the simulated HVAC mode adjustment.
  client.thermostats.simulate.hvac_mode_adjusted(
    device_id: thermostat.device_id,
    hvac_mode: "heat",
    heating_set_point_fahrenheit: 68
  )
end
```

**Output:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Get the device.
$thermostat = $seam->devices->get(device_id: "11111111-1111-1111-2222-444444444444");

// Confirm that Seam supports the desired HVAC mode for the thermostat.
// In this example, we're simulating having set the thermostat to heat mode.
if ($thermostat->can_hvac_heat) {
  // Perform the simulated HVAC mode adjustment.
  $seam->thermostats->simulate->hvac_mode_adjusted(
    device_id: $thermostat->device_id,
    hvac_mode: "heat",
    heating_set_point_fahrenheit: 68
  );
}
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```csharp
// Get the device.
Device thermostat = seam.Devices.Get(deviceId: "11111111-1111-1111-2222-444444444444");

// Confirm that Seam supports the desired HVAC mode for the thermostat.
// In this example, we're simulating having set the thermostat to heat mode.
if (thermostat.CanHvacHeat == true) {
  // Perform the simulated HVAC mode adjustment.
  seam.Thermostats.Simulate.HvacModeAdjusted(
    deviceId: thermostat.DeviceId,
    hvacMode: "heat",
    heatingSetPointFahrenheit: 68
  );
}
```

**Output:**

```json
void
```
{% endtab %}



{% endtabs %}

***

## Simulate Reaching a Desired Temperature

The `/thermostats/simulate/temperature_reached` endpoint enables you to simulate the thermostat reaching a specified temperature. This simulation is helpful for testing that your app is receiving [thermostat events](../../api-clients/events/) correctly, such as `thermostat.temperature_changed` and `thermostat.temperature_reached_set_point`.

Specify the desired temperature that you want to simulate the thermostat reaching using either of the following parameters:

* `temperature_celsius`
* `temperature_fahrenheit`

To simulate reaching a desired temperature:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the device.
thermostat = seam.devices.get(
  device_id="11111111-1111-1111-2222-444444444444"
)

# Simulate reaching the specified temperature.
seam.thermostats.simulate.temperature_reached(
  device_id = thermostat.device_id,
  temperature_celsius = 25
)
```

**Output:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Get the device.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-2222-444444444444"
  }')

# Simulate reaching the specified temperature.
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/simulate/temperature_reached' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
    \"temperature_celsius\": 25
}"
```

**Output:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Get the device.
const thermostat = await seam.devices.get({
  device_id: "11111111-1111-1111-2222-444444444444"
});

// Simulate reaching the specified temperature.
await seam.thermostats.simulate.temperatureReached({
  device_id: thermostat.device_id,
  temperature_celsius: 25
});
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```ruby
# Get the device.
thermostat = client.devices.get(device_id: "11111111-1111-1111-2222-444444444444")

# Simulate reaching the specified temperature.
client.thermostats.simulate.temperature_reached(
  device_id: thermostat.device_id,
  temperature_celsius: 25
)
```

**Output:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Get the device.
$thermostat = $seam->devices->get(device_id: "11111111-1111-1111-2222-444444444444");

// Simulate reaching the specified temperature.
$seam->thermostats->simulate->temperature_reached(
  device_id: $thermostat->device_id,
  temperature_celsius: 25
);
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```csharp
// Get the device.
Device thermostat = seam.Devices.Get(deviceId: "11111111-1111-1111-2222-444444444444");

// Simulate reaching the specified temperature.
seam.Thermostats.Simulate.TemperatureReached(
  deviceId: thermostat.DeviceId,
  temperatureCelsius: 25
);
```

**Output:**

```json
void
```
{% endtab %}



{% endtabs %}
