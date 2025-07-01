---
description: Learn how to configure the current climate settings on a thermostat.
---

# Setting the Current HVAC and Fan Mode Settings

You can use the following Seam API "imperative" endpoints to set the current HVAC and fan mode settings for a connected thermostat, individually:

* [`/thermostats/heat`](../../api/thermostats/heat.md)
* [`/thermostats/cool`](../../api/thermostats/cool.md)
* [`/thermostats/heat_cool`](../../api/thermostats/heat_cool.md)
* [`/thermostats/off`](../../api/thermostats/off.md)
* [`/thermostats/set_fan_mode`](../../api/thermostats/set_fan_mode.md)

Note that it's important to check the capabilities of a thermostat before attempting to use an imperative endpoint. For example, if a thermostat is attached to an HVAC system that does not have cooling capabilities, you cannot use `/thermostats/cool` or `/thermostats/heat_cool`. To check the capabilities of a thermostat, retrieve the thermostat and confirm the [relevant capability flags](./#thermostat-capabilities).

These imperative operations return an [action attempt](../../core-concepts/action-attempts.md) that enables you to track the progress of the action. Poll this action attempt, until the action completes.

Further, Seam emits a [`thermostat.temperature_reached_set_point` event](../../api-clients/events/#event-types) when the thermostat reports a temperature within 1° Celsius of the heating or cooling temperature that you requested.

***

## HVAC Settings

When you use an imperative endpoint to set the HVAC settings for a thermostat, you specify the [HVAC mode](../../capability-guides/thermostats/understanding-thermostat-concepts/hvac-mode.md) and the desired [set points](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) in Fahrenheit or Celsius.

To set the HVAC mode and set points, issue a thermostat [`heat`](configure-current-climate-settings.md#set-a-thermostat-to-heat-mode), [`cool`](configure-current-climate-settings.md#set-a-thermostat-to-cool-mode), [`heat_cool`](configure-current-climate-settings.md#set-a-thermostat-to-heat-cool-mode), or [`off`](configure-current-climate-settings.md#turn-off-heating-and-cooling) request and include the desired set points in the body of the request.

***

## Fan Mode Settings

Seam supports the following fan mode settings:

<table><thead><tr><th width="156">Fan mode</th><th>Description</th></tr></thead><tbody><tr><td><code>on</code></td><td>The fan runs all the time, regardless of whether the HVAC system is cooling or heating.</td></tr><tr><td><code>auto</code></td><td>The fan runs whenever the HVAC system is cooling or heating but does not run at other times.</td></tr><tr><td><code>circulate</code></td><td>The fan runs for a specific number of minutes each hour, regardless of whether the HVAC system is cooling or heating. This setting is only supported on certain Honeywell thermostats.</td></tr></tbody></table>

***

## Process Overview

To configure and then verify a climate setting on a thermostat, perform the following steps:

1.  Confirm the capabilities of the thermostat.

    See [Before You Begin: Confirm Capabilities](configure-current-climate-settings.md#before-you-begin-confirm-capabilities).
2. Execute the imperative climate setting request.\
   See the following instructions:
   * [Set a Thermostat to Heat Mode](configure-current-climate-settings.md#set-a-thermostat-to-heat-mode)
   * [Set a Thermostat to Cool Mode](configure-current-climate-settings.md#set-a-thermostat-to-cool-mode)
   * [Set a Thermostat to Heat-Cool Mode](configure-current-climate-settings.md#set-a-thermostat-to-heat-cool-mode)
   * [Turn off Heating and Cooling](configure-current-climate-settings.md#turn-off-heating-and-cooling)
   * [Set the Fan Mode Setting](configure-current-climate-settings.md#set-the-fan-mode-setting)
3. Poll the action attempt.\
   See [Poll the Action Attempt](configure-current-climate-settings.md#poll-the-action-attempt).
4. If desired, configure a webhook to watch for a `thermostat.temperature_reached_set_point` event that indicates that the thermostat has reported a temperature within 1° Celsius of the heating or cooling [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) that you requested.\
   See [Webhooks](../../core-concepts/webhooks.md).

***

## Before You Begin: Confirm Capabilities

Before you attempt to set the HVAC or fan mode settings for a thermostat, be sure to confirm that your device has the capability to perform these operations. You can inspect the capabilities of a device by checking the following [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags) for the device:

* `device.can_hvac_heat`
* `device.can_hvac_cool`
* `device.can_hvac_heat_cool`
* `device.can_turn_off_hvac`

Use the [`/devices/get`](../../api/devices/get.md) endpoint for a specific device to return these capability flags. Then, use an `if` statement or similar check to confirm that the relevant flag is both present and `true` before attempting to perform the imperative thermostat action.

If the relevant capability flag is `false` or not present, you can view the [properties](../../api/thermostats/#properties) of the device, [errors](../../api/devices/#errors) or [warnings](../../api/devices/#warnings) for the device, and [events](../../api-clients/events/#event-types) related to the device to learn more about the cause of these issues. For example, you could examine `device.properties.online`. In addition, you could look for a `device.disconnected` event.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.devices.get(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
)
```

**Response:**

```
Device(
  device_id='a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
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
  "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
}'
```

**Response:**

```json
{
  "device": {
    "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
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
await seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
});
```

**Response:**

```json
{
  device_id: 'a4b775e3-feb2-4c6b-8e78-a73ec2d70b61',
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
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->devices->get(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
);
```

**Response:**

```json
{
  "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
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
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Set a Thermostat to Heat Mode

You can [set a thermostat to heat mode](../../api/thermostats/heat.md) and specify a desired heating [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) temperature. By establishing the set point, the thermostat activates the associated heating system to maintain the specified temperature.

Issue the thermostat `heat` request, providing the `device_id` of the thermostat and the `heating_set_point_celsius` or `heating_set_point_fahrenheit`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
)

# Confirm that the thermostat supports heat mode.
if thermostat.can_hvac_heat:
  # Perform the heat request.
  seam.thermostats.heat(
    device_id = thermostat.device_id,
    heating_set_point_celsius = 20
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='97125745-15d9-4970-b5be-c34ec3ce1c81',
  action_type='SET_HVAC_MODE',
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
      "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
      \"heating_set_point_celsius\": 20
  }";
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HVAC_MODE",
    "action_attempt_id": "97125745-15d9-4970-b5be-c34ec3ce1c81",
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
// Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
  status: 'success',
  action_attempt_id: '97125745-15d9-4970-b5be-c34ec3ce1c81',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
// Get the thermostat.
thermostat = seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
});

# Confirm that the thermostat supports heat mode.
if (thermostat.can_hvac_heat)
  # Perform the heat request.
  seam.thermostats.heat(
    device_id: thermostat.device_id,
    heating_set_point_celsius: 20
  )
end
```

**Response:**

```
<Seam::Resources::ActionAttempt:0x005f0
  status="success"
  action_type="SET_HVAC_MODE"
  action_attempt_id="97125745-15d9-4970-b5be-c34ec3ce1c81"
  result={}
  error=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
{
  status: 'success',
  action_attempt_id: '97125745-15d9-4970-b5be-c34ec3ce1c81',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```java
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Set a Thermostat to Cool Mode

You can [set a thermostat to cool mode](../../api/thermostats/cool.md) and specify a desired cooling [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) temperature. By establishing the set point, the thermostat activates the associated cooling system to maintain the specified temperature.

Issue the thermostat `cool` request, providing the `device_id` of the thermostat and the `cooling_set_point_celsius` or `cooling_set_point_fahrenheit`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
)

# Confirm that the thermostat supports cool mode.
if thermostat.can_hvac_cool:
  # Perform the cool request.
  seam.thermostats.cool(
    device_id = thermostat.device_id,
    cooling_set_point_celsius = 25
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='87478724-0e30-4fed-9f2a-456971b7b04f',
  action_type='SET_HVAC_MODE',
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
      "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
      \"cooling_set_point_celsius\": 25
  }";
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HVAC_MODE",
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
// Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
  status: 'success',
  action_attempt_id: '87478724-0e30-4fed-9f2a-456971b7b04f',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
// Get the thermostat.
thermostat = seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
});

# Confirm that the thermostat supports cool mode.
if (thermostat.can_hvac_cool)
  # Perform the cool request.
  seam.thermostats.cool(
    device_id: thermostat.device_id,
    cooling_set_point_celsius: 25
  )
end
```

**Response:**

```
<Seam::Resources::ActionAttempt:0x005f0
  status="success"
  action_type="SET_HVAC_MODE"
  action_attempt_id="87478724-0e30-4fed-9f2a-456971b7b04f"
  result={}
  error=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
{
  status: 'success',
  action_attempt_id: '87478724-0e30-4fed-9f2a-456971b7b04f',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Set a Thermostat to Heat-Cool Mode

You can [set a thermostat to heat-cool (also known as "auto") mode](../../api/thermostats/heat_cool.md) and specify desired [set point](../../capability-guides/thermostats/understanding-thermostat-concepts/set-points.md) temperatures for both heating and cooling. By establishing the set points, the thermostat activates the associated heating and cooling systems as needed to maintain the specified temperature range.

Issue the thermostat `heat_cool` request, providing the `device_id` of the thermostat and the following set points:

* `heating_set_point_celsius` or `heating_set_point_fahrenheit`
* `cooling_set_point_celsius` or `cooling_set_point_fahrenheit`

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
)

# Confirm that the thermostat supports heat-cool mode.
if thermostat.can_hvac_heat_cool:
  # Perform the heat_cool request.
  seam.thermostats.heat_cool(
    device_id = thermostat.device_id,
    heating_set_point_celsius = 20,
    cooling_set_point_celsius = 25
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='8050ec59-7f29-4d0d-9842-dedaf304740d',
  action_type='SET_HVAC_MODE',
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
      "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\",
      \"heating_set_point_celsius\": 20,
      \"cooling_set_point_celsius\": 25
  }";
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HVAC_MODE",
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
// Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
  status: 'success',
  action_attempt_id: '8050ec59-7f29-4d0d-9842-dedaf304740d',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
// Get the thermostat.
thermostat = seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
});

# Confirm that the thermostat supports heat-cool mode.
if (thermostat.can_hvac_heat_cool)
  # Perform the heat_cool request.
  seam.thermostats.heat_cool(
    device_id: thermostat.device_id,
    heating_set_point_celsius: 20,
    cooling_set_point_celsius: 25
  )
end
```

**Response:**

```
<Seam::Resources::ActionAttempt:0x005f0
  status="success"
  action_type="SET_HVAC_MODE"
  action_attempt_id="8050ec59-7f29-4d0d-9842-dedaf304740d"
  result={}
  error=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
{
  status: 'success',
  action_attempt_id: '8050ec59-7f29-4d0d-9842-dedaf304740d',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Turn off Heating and Cooling

You can [set a thermostat to "off" mode](../../api/thermostats/off.md), which deactivates the associated heating and cooling systems. In this state, the thermostat does not regulate indoor temperatures.

Issue the thermostat `off` request, providing the `device_id` of the thermostat.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Get the thermostat.
thermostat = seam.devices.get(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
)

# Confirm that the thermostat supports off mode.
if thermostat.can_turn_off_hvac:
  # Perform the off request.
  seam.thermostats.off(
    device_id = thermostat.device_id
  )
```

**Response:**

```
ActionAttempt(
  action_attempt_id='ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd',
  action_type='SET_HVAC_MODE',
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
      "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${thermostat})\"
  }";
fi
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_HVAC_MODE",
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
// Get the thermostat.
const thermostat = await seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
  status: 'success',
  action_attempt_id: 'ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
// Get the thermostat.
thermostat = seam.devices.get({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
});

# Confirm that the thermostat supports off mode.
if (thermostat.can_turn_off_hvac)
  # Perform the off request.
  seam.thermostats.off(
    device_id: thermostat.device_id
  )
end
```

**Response:**

```
<Seam::Resources::ActionAttempt:0x005f0
  status="success"
  action_type="SET_HVAC_MODE"
  action_attempt_id="ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd"
  result={}
  error=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Get the thermostat.
$thermostat = $seam->devices->get(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
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
{
  status: 'success',
  action_attempt_id: 'ef94c8b2-3ff0-4e56-a97e-033ca07ba0fd',
  action_type: 'SET_HVAC_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Set the Fan Mode Setting

You can [configure the fan mode setting for a thermostat](../../api/thermostats/set_fan_mode.md). For details about the supported fan modes, see [Fan Mode Settings](configure-current-climate-settings.md#fan-mode-settings).

Set the fan mode setting by providing the `device_id` of the thermostat and specifying the desired `fan_mode_setting`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.thermostats.set_fan_mode(
  device_id = "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
  fan_mode_setting = "auto"
)
```

**Response:**

```
ActionAttempt(
  action_attempt_id='9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
  action_type='SET_FAN_MODE',
  status='success',
  result={},
  error=None
)
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
  "device_id": "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
  "fan_mode_setting": "auto"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "SET_FAN_MODE",
    "action_attempt_id": "9c9b584b-c645-4ce0-a9c2-79b6f1db2396",
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
await seam.thermostats.setFanMode({
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
  fan_mode_setting: "auto"
});
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
  action_type: 'SET_FAN_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->thermostats->set_fan_mode(
  device_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61",
  fan_mode_setting: "auto"
);
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
  action_type: 'SET_FAN_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}

***

## Poll the Action Attempt

The imperative HVAC or fan mode setting request returns an [action attempt](../../core-concepts/action-attempts.md). Use the `action_attempt_id` from this response to poll the associated action attempt using the [`/action_attempts/get`](../../api-clients/action_attempts/get.md) request. When the setting modification completes successfully, the `status` of the action attempt changes to `success`.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.action_attempts.get(
  action_attempt_id = "9c9b584b-c645-4ce0-a9c2-79b6f1db2396"
)
```

**Response:**

```
ActionAttempt(
  action_attempt_id='9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
  action_type='SET_FAN_MODE',
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
  "action_attempt_id": "9c9b584b-c645-4ce0-a9c2-79b6f1db2396"
}'
```

**Response:**

```
{
  "action_attempt": {
    "status": "success",
    "action_type": "SET_FAN_MODE",
    "action_attempt_id": "9c9b584b-c645-4ce0-a9c2-79b6f1db2396",
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
await seam.actionAttempts.get(
  action_attempt_id: "9c9b584b-c645-4ce0-a9c2-79b6f1db2396"
);
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
  action_type: 'SET_FAN_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Coming soon!
```

**Response:**

```
# Coming soon!
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->action_attempts->get(
  action_attempt_id: "a4b775e3-feb2-4c6b-8e78-a73ec2d70b61"
);
```

**Response:**

```json
{
  status: 'success',
  action_attempt_id: '9c9b584b-c645-4ce0-a9c2-79b6f1db2396',
  action_type: 'SET_FAN_MODE',
  result: {},
  error: null
}
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Coming soon!
```

**Response:**

```json
// Coming soon!
```
{% endtab %}



{% endtabs %}
