---
description: Learn how to configure the current climate settings on a thermostat.
---

# Setting the Current HVAC and Fan Mode Settings

Seam enables you to adjust the [current heating and cooling settings](configure-current-climate-settings.md#current-climate-setting) on a smart thermostat, including the [HVAC mode](hvac-mode.md) and its corresponding [set points](set-points.md). It also enables you to configure the [fan mode](configure-current-climate-settings.md#fan-mode). This guide explains how to use the Seam API to perform these actions.

When you send a command to change a setting on a thermostat, it might take a while for Seam to confirm the success of the action. To handle this potential delay, Seam provides an[ action attempt ](../../core-concepts/action-attempts.md)object that tracks the status of the action, indicating whether the action was successful.

To ensure that the action has executed successfully, poll the status of the action attempt object using the [Get Action Attempt](../../api-clients/action\_attempts/get.md) request. Once Seam has successfully adjusted the thermostat setting, the `status` of the action attempt indicates `success`.

***

## Current Climate Setting

The set of current heating, ventilation, and air conditioning (HVAC) settings on a thermostat includes the following:

* The [HVAC mode](hvac-mode.md)
* The corresponding [set points](set-points.md) in Fahrenheit or Celsius

To set the HVAC mode and set points, issue a thermostat [`heat`](configure-current-climate-settings.md#set-a-thermostat-to-heat-mode), [`cool`](configure-current-climate-settings.md#set-a-thermostat-to-cool-mode), [`heat_cool`](configure-current-climate-settings.md#set-a-thermostat-to-heat-cool-mode), or [`off`](configure-current-climate-settings.md#turn-off-heating-and-cooling) request and include the desired set points in the body of the request. When you issue one of these commands, Seam sets the `hvac_mode_setting` accordingly.

***

## Fan Mode

The fan mode includes the following options:

* **`on`:** The fan continuously operates, ensuring air circulation, regardless of the heating or cooling demand.
* **`auto`:** The fan activates only when heating or cooling is on, making this setting a more energy-efficient choice.

Seam supports a single ongoing fan mode setting.

***

## Before You Begin: Confirm Capabilities

To confirm that Seam supports thermostat programming for your device, use [Get Device](../../api-clients/devices/get.md) or [Get Thermostat](../../thermostats/get-thermostat.md) to query the device and check its `capabilities_supported` property. Ensure that the `capabilities_supported` list includes `thermostat`. For more information, see [Retrieving Individual Thermostats](retrieving-thermostats.md#retrieving-individual-thermostats).

Before you attempt to set the current HVAC or fan mode settings for a thermostat, be sure to confirm that your thermostat has the capability to perform these operations. You can inspect the capabilities of a thermostat by checking the following [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags) for the device:

* `device.can_hvac_heat`
* `device.can_hvac_cool`
* `device.can_hvac_heat_cool`
* `device.can_turn_off_hvac`

Use [Get Device](../../api-clients/devices/get.md) for a specific device to return these capability flags. Then, use an `if` statement or similar check to confirm that the relevant flag is both present and `true` before attempting to set the corresponding HVAC mode or fan setting.

If any of these capability flags is `false` or not present, you can view the [properties](../../api-clients/devices/#device-properties) of the device, [errors](../../api-clients/devices/#device-error-types) or [warnings](../../api-clients/devices/#device-warning-types) for the device, and [events](../../api-clients/events/#event-types) related to the device to learn more about the cause of these issues. For example, you could examine `device.properties.online`. In addition, you could look for a `device.disconnected` event.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.devices.get(device_id="11111111-1111-1111-1111-444444444444")
```

**Response:**

```
Device(
  device_id='11111111-1111-1111-1111-444444444444',
  can_hvac_heat=True,      // You can use seam.thermostats.heat() on this device.
  can_hvac_cool=True,      // You can use seam.thermostats.cool() on this device.
  can_hvac_heat_cool=True, // You can use seam.thermostats.heat_cool() on this device.
  can_turn_off_hvac=True,  // You can use seam.thermostats.off() on this device.
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "11111111-1111-1111-1111-444444444444"
}'
```

**Response:**

```json
{
  "lock": {
    "device_id": "11111111-1111-1111-1111-444444444444",
    "can_hvac_heat": true,      // You can use /thermostats/heat on this device.
    "can_hvac_cool": true,      // You can use /thermostats/cool on this device.
    "can_hvac_heat_cool": true, // You can use /thermostats/heat_cool on this device.
    "can_turn_off_hvac": true,  // You can use /thermostats/off on this device.
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.devices.get("11111111-1111-1111-1111-444444444444")
```

**Response:**

```json
{
  device_id: '11111111-1111-1111-1111-444444444444',
  can_hvac_heat: true,      // You can use seam.thermostats.heat() on this device.
  can_hvac_cool: true,      // You can use seam.thermostats.cool() on this device.
  can_hvac_heat_cool: true, // You can use seam.thermostats.heatCool() on this device.
  can_turn_off_hvac: true,  // You can use seam.thermostats.off() on this device.
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
client.devices.get("11111111-1111-1111-1111-444444444444")
```

**Response:**

```
<
  Seam::Device:0x00438
    device_id="11111111-1111-1111-1111-444444444444"
    can_hvac_heat=true,      // You can use client.thermostats.heat() on this device.
    can_hvac_cool=true,      // You can use client.thermostats.cool() on this device.
    can_hvac_heat_cool=true, // You can use client.thermostats.heat_cool() on this device.
    can_turn_off_hvac=true,  // You can use client.thermostats.off() on this device.
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->devices->get("11111111-1111-1111-1111-444444444444");
```

**Response:**

```json
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_hvac_heat": true,      // You can use $seam->thermostats->heat() on this device.
  "can_hvac_cool": true,      // You can use $seam->thermostats->cool() on this device.
  "can_hvac_heat_cool": true, // You can use $seam->thermostats->heat_cool() on this device.
  "can_turn_off_hvac": true,  // You can use $seam->thermostats->off() on this device.
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.Devices.Get(deviceId: "11111111-1111-1111-1111-444444444444");
```

**Response:**

```
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_hvac_heat": true,      // You can use seam.Thermostats.Heat() on this device.
  "can_hvac_cool": true,      // You can use seam.Thermostats.Cool() on this device.
  "can_hvac_heat_cool": true, // You can use seam.Thermostats.HeatCool() on this device.
  "can_turn_off_hvac": true,  // You can use seam.Thermostats.Off() on this device.
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());
```

**Response:**

```json
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_hvac_heat": true,      // You can use seam.thermostats.heat() on this device.
  "can_hvac_cool": true,      // You can use seam.thermostats.cool() on this device.
  "can_hvac_heat_cool": true, // You can use seam.thermostats.heatCool() on this device.
  "can_turn_off_hvac": true,  // You can use seam.thermostats.off() on this device.
  ...
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
thermostat, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: "11111111-1111-1111-1111-444444444444",
  })
```

**Response:**

```json
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "can_hvac_heat": true,      // You can use client.Thermostats.Heat() on this device.
  "can_hvac_cool": true,      // You can use client.Thermostats.Cool() on this device.
  "can_hvac_heat_cool": true, // You can use client.Thermostats.HeatCool() on this device.
  "can_turn_off_hvac": true,  // You can use client.Thermostats.Off() on this device.
  ...
}
```
{% endtab %}
{% endtabs %}





***

## Process Overview

To configure and then verify a climate setting on a thermostat, perform the following steps:

### 1. Execute the Climate Setting Request

Issue one of the following requests:

<table><thead><tr><th width="250">Climate Setting Request</th><th>Description</th></tr></thead><tbody><tr><td><a href="configure-current-climate-settings.md#set-a-thermostat-to-heat-mode">Heat</a></td><td>Set the thermostat to heat mode.</td></tr><tr><td><a href="configure-current-climate-settings.md#set-a-thermostat-to-cool-mode">Cool</a></td><td>Set the thermostat to cool mode.</td></tr><tr><td><a href="configure-current-climate-settings.md#set-a-thermostat-to-heat-cool-mode">Heat-Cool</a></td><td>Set the thermostat to dual heat-cool (auto) mode.</td></tr><tr><td><a href="configure-current-climate-settings.md#turn-off-heating-and-cooling">Off</a></td><td>Turn off the thermostat.</td></tr><tr><td><a href="configure-current-climate-settings.md#set-the-fan-mode">Fan Mode</a></td><td>Set the fan mode to <code>on</code> or <code>off</code>.</td></tr></tbody></table>

The Seam API returns an action attempt ([`action_attempt`](../../api-clients/action-attempt/) object) that monitors the status of the action.

The following example issues a request to set a specific thermostat to heat mode with a heating set point of 20° C:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id="518f692b-f865-4590-8c3e-3849e9984c75"
)

# Confirm that the thermostat supports heat mode.
if thermostat.can_hvac_heat:
  # Perform the heat request.
  seam.thermostats.heat(
    device_id = "518f692b-f865-4590-8c3e-3849e9984c75",
    heating_set_point_celsius = 20
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='97125745-15d9-4970-b5be-c34ec3ce1c81',
  action_type='SET_HEAT',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the thermostat.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
  }')

# Confirm that the thermostat supports heat mode.
if  $(jq -r '.device.can_hvac_heat' <<< ${thermostat}); then \
  # Perform the heat request.
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/heat' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"heating_set_point_celsius\": 20
  }';
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "7f7f6e18-2c50-46bb-9ace-f52d05069db4",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
# Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
});

// Confirm that the thermostat supports heat mode.
if (thermostat.can_hvac_heat) {
  // Perform the heat request.
  await seam.thermostats.heat({
    device_id: thermostat.device_id,
    heating_set_point_celsius: 20
  })
};
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '38c06dba-99b1-4c10-b542-f98e2963cb52',
    action_type: 'SET_HEAT',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
);

// Confirm that the thermostat supports heat mode.
if ($thermostat->can_hvac_heat) {
  // Perform the heat request.
  $seam->thermostats->heat(
    device_id: $thermostat->device_id,
    heating_set_point_celsius: 20
  );
}
```

**Response:**

```json
None
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the thermostat.
Device thermostat = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("518f692b-f865-4590-8c3e-3849e9984c75")
    .build());

// Confirm that the thermostat supports heat mode.
if (thermostat.getCanHvacHeat())
{
  // Perform the heat request.
  seam.thermostats().heat(ThermostatsHeatRequest.builder()
    .deviceId(thermostat.getDeviceId())
    .heatingSetPointCelsius(20.0)
    .build());
}
```

**Response:**

```
{
  "status": "pending",
  "action_type": "SET_HEAT",
  "action_attempt_id": "241e79cd-4bda-499f-8e2e-d7ae01d273cf",
  "result": null,
  "error": null
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the thermostat.
thermostat, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("518f692b-f865-4590-8c3e-3849e9984c75"),
  })

// Confirm that the thermostat supports heat mode.
if *thermostat.CanHvacHeat {
  // Perform the heat request.
  client.Thermostats.Heat(
      context.Background(),
      &api.ThermostatsHeatRequest{
        DeviceId: thermostat.DeviceId,
        HeatingSetPointCelsius: api.Float64(20),
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "241e79cd-4bda-499f-8e2e-d7ae01d273cf",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

### 2. Poll the Action Attempt to Verify the Setting Change

Use the `action_attempt_id` from the previous response to poll the associated action attempt using the [Get Action Attempt](../../api-clients/action\_attempts/get.md) request. When the setting modification completes successfully, the `status` of the action attempt changes to `success`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.action_attempts.get(
  action_attempt_id="4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"
)
```

**Response:**

```
ActionAttempt(
  action_attempt_id='4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90',
  action_type='SET_HEAT',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/action_attempts/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${SEAM_API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "action_attempt_id": "4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"
}'
```

**Response:**

```
{
  "action_attempt": {
    "status": "success",
    "action_attempt_id": "4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90",
    "action_type": "SET_HEAT",
    "result": {},
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.actionAttempts.get(
  action_attempt_id: "4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90"
);
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90',
  action_type: 'SET_HEAT',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.actionAttempts().get(ActionAttemptsGetRequest.builder()
  .actionAttemptId("4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90")
  .build());
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '4df7eb09-e17d-4d3a-a9c9-cfe718d3ce90',
  action_type: 'SET_HEAT',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
_, uErr := client.ActionAttempts.Get(context.Background(), &api.ActionAttemptsGetRequest{
  ActionAttemptId: "40dc817d-9ae0-4037-9d4a-736700ee467b",
})

if uErr != nil {
return uErr
}

return nil
```

**Response:**

```json
&{success {
  "status": "success",
  "action_attempt_id": "40dc817d-9ae0-4037-9d4a-736700ee467b",
  "action_type": "SET_HEAT",
  "result": {},
  "error": null
} <nil> <nil>}
```
{% endtab %}
{% endtabs %}

***

## Set the Current HVAC and Fan Mode Settings

The following sections describe how to se the current climate settings on a thermostat:

### Set a Thermostat to Heat Mode

You can [set a thermostat to operate in heating mode](../../api/thermostats/heat.md) and specify a desired heating set point temperature. By establishing the set point, the thermostat activates the associated heating system to maintain the specified temperature.

Set the HVAC mode to `heat` by providing the `device_id` of the thermostat and the heating set point in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id="518f692b-f865-4590-8c3e-3849e9984c75"
)

# Confirm that the thermostat supports heat mode.
if thermostat.can_hvac_heat:
  # Perform the heat request.
  seam.thermostats.heat(
    device_id = "518f692b-f865-4590-8c3e-3849e9984c75",
    heating_set_point_celsius = 20
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='97125745-15d9-4970-b5be-c34ec3ce1c81',
  action_type='SET_HEAT',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the thermostat.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
  }')

# Confirm that the thermostat supports heat mode.
if  $(jq -r '.device.can_hvac_heat' <<< ${thermostat}); then \
  # Perform the heat request.
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/heat' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"heating_set_point_celsius\": 20
  }';
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "7f7f6e18-2c50-46bb-9ace-f52d05069db4",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
# Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
});

// Confirm that the thermostat supports heat mode.
if (thermostat.can_hvac_heat) {
  // Perform the heat request.
  await seam.thermostats.heat({
    device_id: thermostat.device_id,
    heating_set_point_celsius: 20
  })
};
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '38c06dba-99b1-4c10-b542-f98e2963cb52',
    action_type: 'SET_HEAT',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
);

// Confirm that the thermostat supports heat mode.
if ($thermostat->can_hvac_heat) {
  // Perform the heat request.
  $seam->thermostats->heat(
    device_id: $thermostat->device_id,
    heating_set_point_celsius: 20
  );
}
```

**Response:**

```json
None
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the thermostat.
Device thermostat = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("518f692b-f865-4590-8c3e-3849e9984c75")
    .build());

// Confirm that the thermostat supports heat mode.
if (thermostat.getCanHvacHeat())
{
  // Perform the heat request.
  seam.thermostats().heat(ThermostatsHeatRequest.builder()
    .deviceId(thermostat.getDeviceId())
    .heatingSetPointCelsius(20.0)
    .build());
}
```

**Response:**

```
{
  "status": "pending",
  "action_type": "SET_HEAT",
  "action_attempt_id": "241e79cd-4bda-499f-8e2e-d7ae01d273cf",
  "result": null,
  "error": null
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the thermostat.
thermostat, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("518f692b-f865-4590-8c3e-3849e9984c75"),
  })

// Confirm that the thermostat supports heat mode.
if *thermostat.CanHvacHeat {
  // Perform the heat request.
  client.Thermostats.Heat(
      context.Background(),
      &api.ThermostatsHeatRequest{
        DeviceId: thermostat.DeviceId,
        HeatingSetPointCelsius: api.Float64(20),
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT",
    "action_attempt_id": "241e79cd-4bda-499f-8e2e-d7ae01d273cf",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Set a Thermostat to Cool Mode

You can [set a thermostat to operate in cooling mode](../../api/thermostats/cool.md) and specify a desired cooling set point temperature. By establishing the set point, the thermostat activates the associated cooling system to maintain the specified temperature.

Set the HVAC mode to `cool` by providing the `device_id` of the thermostat and the cooling set point in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id="518f692b-f865-4590-8c3e-3849e9984c75"
)

# Confirm that the thermostat supports cool mode.
if thermostat.can_hvac_cool:
  # Perform the cool request.
  seam.thermostats.cool(
    device_id = "518f692b-f865-4590-8c3e-3849e9984c75",
    cooling_set_point_celsius = 25
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='87478724-0e30-4fed-9f2a-456971b7b04f',
  action_type='SET_COOL',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the thermostat.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
  }')

# Confirm that the thermostat supports cool mode.
if  $(jq -r '.device.can_hvac_cool' <<< ${thermostat}); then \
  # Perform the cool request.
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/cool' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"cooling_set_point_celsius\": 25
  }';
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_COOL",
    "action_attempt_id": "87478724-0e30-4fed-9f2a-456971b7b04f",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
# Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
});

// Confirm that the thermostat supports cool mode.
if (thermostat.can_hvac_cool) {
  // Perform the cool request.
  await seam.thermostats.cool({
    device_id: thermostat.device_id,
    cooling_set_point_celsius: 25
  })
};
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '518f692b-f865-4590-8c3e-3849e9984c75',
    action_type: 'SET_COOL',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
);

// Confirm that the thermostat supports cool mode.
if ($thermostat->can_hvac_cool) {
  // Perform the cool request.
  $seam->thermostats->cool(
    device_id: $thermostat->device_id,
    cooling_set_point_celsius: 25
  );
}
```

**Response:**

```json
None
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the thermostat.
Device thermostat = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("518f692b-f865-4590-8c3e-3849e9984c75")
    .build());

// Confirm that the thermostat supports cool mode.
if (thermostat.getCanHvacCool())
{
  // Perform the cool request.
  seam.thermostats().cool(ThermostatsHeatRequest.builder()
    .deviceId(thermostat.getDeviceId())
    .coolingSetPointCelsius(25.0)
    .build());
}
```

**Response:**

```
{
  "status": "pending",
  "action_type": "SET_COOL",
  "action_attempt_id": "87478724-0e30-4fed-9f2a-456971b7b04f",
  "result": null,
  "error": null
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the thermostat.
thermostat, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("518f692b-f865-4590-8c3e-3849e9984c75"),
  })

// Confirm that the thermostat supports cool mode.
if *thermostat.CanHvacCool {
  // Perform the cool request.
  client.Thermostats.Cool(
      context.Background(),
      &api.ThermostatsCoolRequest{
        DeviceId: thermostat.DeviceId,
        CoolingSetPointCelsius: api.Float64(25),
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_COOL",
    "action_attempt_id": "87478724-0e30-4fed-9f2a-456971b7b04f",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Set a Thermostat to Heat-Cool Mode

You can [set a thermostat to operate in heat-cool (also known as "auto") mode](../../api/thermostats/heat\_cool.md) and specify desired set point temperatures for both heating and cooling. By establishing the set points, the thermostat activates the associated heating and cooling systems as needed to maintain the specified temperature range.

Set the HVAC mode to `heat_cool` by providing the `device_id` of the thermostat and both the heating set point and the cooling set point in Celsius or Fahrenheit.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id="518f692b-f865-4590-8c3e-3849e9984c75"
)

# Confirm that the thermostat supports heat-cool mode.
if thermostat.can_hvac_heat_cool:
  # Perform the heat_cool request.
  seam.thermostats.heat_cool(
    device_id = "518f692b-f865-4590-8c3e-3849e9984c75",
    heating_set_point_celsius = 20,
    cooling_set_point_celsius = 25
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='8050ec59-7f29-4d0d-9842-dedaf304740d',
  action_type='SET_HEAT_COOL',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the thermostat.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
  }')

# Confirm that the thermostat supports heat-cool mode.
if  $(jq -r '.device.can_hvac_heat_cool' <<< ${thermostat}); then \
  # Perform the heat_cool request.
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/heat_cool' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\",
      \"heating_set_point_celsius\": 20,
      \"cooling_set_point_celsius\": 25
  }';
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT_COOL",
    "action_attempt_id": "8050ec59-7f29-4d0d-9842-dedaf304740d",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
# Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
});

// Confirm that the thermostat supports heat-cool mode.
if (thermostat.can_hvac_heat_cool) {
  // Perform the heatCool request.
  await seam.thermostats.heatCool({
    device_id: thermostat.device_id,
    heating_set_point_celsius: 20,
    cooling_set_point_celsius: 25
  })
};
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '8050ec59-7f29-4d0d-9842-dedaf304740d',
    action_type: 'SET_HEAT_COOL',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
);

// Confirm that the thermostat supports heat-cool mode.
if ($thermostat->can_hvac_heat_cool) {
  // Perform the heat_cool request.
  $seam->thermostats->heat_cool(
    device_id: $thermostat->device_id,
    heating_set_point_celsius: 20,
    cooling_set_point_celsius: 25
  );
}
```

**Response:**

```json
None
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the thermostat.
Device thermostat = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("518f692b-f865-4590-8c3e-3849e9984c75")
    .build());

// Confirm that the thermostat supports heat-cool mode.
if (thermostat.getCanHvacHeatCool())
{
  // Perform the heatCool request.
  seam.thermostats().heatCool(ThermostatsHeatRequest.builder()
    .deviceId(thermostat.getDeviceId())
    .heatingSetPointCelsius(20.0)
    .coolingSetPointCelsius(25.0)
    .build());
}
```

**Response:**

```
{
  "status": "pending",
  "action_type": "SET_HEAT_COOL",
  "action_attempt_id": "8050ec59-7f29-4d0d-9842-dedaf304740d",
  "result": null,
  "error": null
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the thermostat.
thermostat, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("518f692b-f865-4590-8c3e-3849e9984c75"),
  })

// Confirm that the thermostat supports heat-cool mode.
if *thermostat.CanHvacHeatCool {
  // Perform the HeatCool request.
  client.Thermostats.HeatCool(
      context.Background(),
      &api.ThermostatsHeatCoolRequest{
        DeviceId: thermostat.DeviceId,
        HeatingSetPointCelsius: api.Float64(20),
        CoolingSetPointCelsius: api.Float64(25),
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HEAT_COOL",
    "action_attempt_id": "8050ec59-7f29-4d0d-9842-dedaf304740d",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Turn off Heating and Cooling

You can [set a thermostat to operate in "off" mode](../../api/thermostats/off.md), which deactivates the associated heating and cooling systems. In this state, the thermostat does not regulate indoor temperatures.

Set the HVAC mode to `off` by providing the `device_id` of the thermostat.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id="518f692b-f865-4590-8c3e-3849e9984c75"
)

# Confirm that the thermostat supports off mode.
if thermostat.can_turn_off_hvac:
  # Perform the off request.
  seam.thermostats.off(
    device_id = "518f692b-f865-4590-8c3e-3849e9984c75"
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd',
  action_type='SET_THERMOSTAT_OFF',
  status='success',
  result={},
  error=None
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Get the thermostat.
thermostat=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "518f692b-f865-4590-8c3e-3849e9984c75"
  }')

# Confirm that the thermostat supports off mode.
if  $(jq -r '.device.can_turn_off_hvac' <<< ${thermostat}); then \
  # Perform the off request.
  curl -X 'POST' \
    'https://connect.getseam.com/thermostats/off' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\"
  }';
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_THERMOSTAT_OFF",
    "action_attempt_id": "ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
# Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75"
});

// Confirm that the thermostat supports off mode.
if (thermostat.can_turn_off_hvac) {
  // Perform the off request.
  await seam.thermostats.off({
    device_id: thermostat.device_id
  })
};
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: 'ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd',
    action_type: 'SET_THERMOSTAT_OFF',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "5ce2cd35-09b1-458c-bb08-51ee83c35be7"
);

// Confirm that the thermostat supports off mode.
if ($thermostat->can_turn_off_hvac) {
  // Perform the off request.
  $seam->thermostats->off(
    device_id: $thermostat->device_id
  );
}
```

**Response:**

```json
None
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Get the thermostat.
Device thermostat = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("518f692b-f865-4590-8c3e-3849e9984c75")
    .build());

// Confirm that the thermostat supports off mode.
if (thermostat.getCanTurnOffHvac())
{
  // Perform the off request.
  seam.thermostats().off(ThermostatsOffRequest.builder()
    .deviceId(thermostat.getDeviceId())
    .build());
}
```

**Response:**

```
{
  "status": "pending",
  "action_type": "SET_THERMOSTAT_OFF",
  "action_attempt_id": "ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd",
  "result": null,
  "error": null
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Get the thermostat.
thermostat, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("518f692b-f865-4590-8c3e-3849e9984c75"),
  })

// Confirm that the thermostat supports off mode.
if *thermostat.CanTurnOffHvac {
  // Perform the off request.
  client.Thermostats.Off(
      context.Background(),
      &api.ThermostatsOffRequest{
        DeviceId: thermostat.DeviceId,
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_THERMOSTAT_OFF",
    "action_attempt_id": "ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Set the Fan Mode

You can [configure the fan associated with a thermostat](../../api/thermostats/set\_fan\_mode.md) to operate in either `on` or `auto` mode. In the `on` setting, the fan runs continuously, while in the `auto` setting, the fan operates based on temperature needs and system demands.

Set the fan mode by providing the `device_id` of the thermostat and specifying the desired fan mode setting.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
fan_on_request = seam.thermostats.set_fan_mode(
  device = "518f692b-f865-4590-8c3e-3849e9984c75",
  fan_mode = "on"
)

pprint(fan_on_request)
```

**Response:**

```
ActionAttempt(action_attempt_id='9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
              action_type='SET_FAN_MODE',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/thermostats/set_fan_mode' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "518f692b-f865-4590-8c3e-3849e9984c75",
  "fan_mode": "on"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_FAN_MODE",
    "action_attempt_id": "fb621149-ddcb-4672-84f5-55562dbfdb0b",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const fan_on_request = await seam.thermostats.setFanMode({
  device_id: "518f692b-f865-4590-8c3e-3849e9984c75",
  fan_mode_setting: "on"
})

console.log(fan_on_request)
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: 'fca8cb4f-6e0c-4c37-878b-ebe17df46456',
    action_type: 'SET_FAN_MODE',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$fan_on_request = $seam->thermostats->set_fan_mode(
  device_id: "06a561b6-09d2-401c-a25f-ddb1e1efd59e",
  fan_mode_setting: "on"
);
```

**Response:**

```json
None
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
fan_on_request, uErr := client.Thermostats.SetFanMode(context.Background(), &api.ThermostatsSetFanModeRequest{
  DeviceId: "5ce2cd35-09b1-458c-bb08-51ee83c35be7",
  FanMode: api.FanModeOn.Ptr(),
})

if uErr != nil {
return uErr
}

fmt.Println(fan_on_request)
return nil
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_FAN_MODE",
    "action_attempt_id": "1a6993af-4b00-4ca5-bacf-074164959878",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
