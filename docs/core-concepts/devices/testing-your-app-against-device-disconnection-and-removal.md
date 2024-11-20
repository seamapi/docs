---
description: >-
  Learn how to use the Seam suite of simulate endpoints to test your app against
  events that are difficult to orchestrate in your quality assurance
  environment.
---

# Testing Your App Against Device Disconnection and Removal

When developing an app to control IoT devices—before moving to production—it is imperative to test your app against events like device disconnection and removal. However, it can be difficult to orchestrate these events in your quality assurance (QA) environment using real devices. To help you test your app more easily and effectively, Seam provides the following suite of `simulate` endpoints that you can use in a [sandbox workspace](../workspaces/#sandbox-workspaces):

* [`devices/simulate/disconnect`](testing-your-app-against-device-disconnection-and-removal.md#simulate-disconnecting-a-device)
* [`devices/simulate/connect`](testing-your-app-against-device-disconnection-and-removal.md#simulate-connecting-a-device)
* [`devices/simulate/remove`](testing-your-app-against-device-disconnection-and-removal.md#simulate-removing-a-device)

{% hint style="info" %}
Currently, Seam supports these endpoints for [August](../../device-guides/sandbox-and-sample-data/august-locks-sample-data.md) and [Yale](../../device-guides/sandbox-and-sample-data/yale-sample-data.md) sandbox devices.
{% endhint %}

***

## Simulation Capability Flags

The Seam API provides the following sandbox-only [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags) that show you which simulate endpoints you can currently use on a device:

* `device.can_simulate_disconnection`
* `device.can_simulate_connection`
* `device.can_simulate_removal`

***

## Simulate Disconnecting a Device

To simulate a device disconnection:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the device.
device = seam.devices.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that Seam supports simulated disconnection for the device.
if device.can_simulate_disconnection:
  # Perform the simulated disconnection.
  seam.devices.simulate.disconnect(device_id=device.device_id)
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
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that Seam supports simulated disconnection for the device.
if  $(jq -r '.device.can_simulate_disconnection' <<< ${device}); then \
  # Perform the simulated disconnection.
  curl -X 'POST' \
    'https://connect.getseam.com/devices/simulate/disconnect' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\"
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
const device = await seam.devices.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that Seam supports simulated disconnection for the device.
if (device.can_simulate_disconnection) {
  // Perform the simulated disconnection.
  await seam.devices.simulate.disconnect({
    device_id: device.device_id
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
device = client.devices.get(device_id: "11111111-1111-1111-1111-444444444444")

# Confirm that Seam supports simulated disconnection for the device.
if (device.can_simulate_disconnection)
  # Perform the simulated disconnection.
  client.devices.simulate.disconnect(device_id: device.device_id)
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
$device = $seam->devices->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that Seam supports simulated disconnection for the device.
if ($device->can_simulate_disconnection) {
  // Perform the simulated disconnection.
  $seam->devices->simulate->disconnect(device_id: $device->device_id);
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
Device device = seam.Devices.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that Seam supports simulated disconnection for the device.
if (device.CanSimulateDisconnection == true) {
  // Perform the simulated disconnection.
  seam.Devices.Simulate.Disconnect(deviceId: device.DeviceId);
}
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Java" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```java
// Get the device.
Device device = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());

// Confirm that Seam supports simulated disconnection for the device.
if (device.getCanSimulateDisconnection())
{
  // Perform the simulated disconnection.
  seam.devices().simulate()
    .disconnect(DevicesSimulateDisconnectRequest.builder()
      .deviceId(device.getDeviceId())
      .build());
}
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Go" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```go
// Get the device.
device, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("11111111-1111-1111-1111-444444444444"),
  })

// Confirm that Seam supports simulated disconnection for the device.
if *device.CanSimulateDisconnection {
  // Perform the simulated disconnection.
  client.Devices.Simulate.Disconnect(
      context.Background(),
      &api.DevicesSimulateDisconnectRequest{
        DeviceId: device.DeviceId,
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Output:**

```json
void
```
{% endtab %}
{% endtabs %}

***

## Simulate Connecting a Device

To simulate a device connection:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the device.
device = seam.devices.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that Seam supports simulated connection for the device.
if device.can_simulate_connection:
  # Perform the simulated connection.
  seam.devices.simulate.connect(device_id=device.device_id)
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
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that Seam supports simulated connection for the device.
if  $(jq -r '.device.can_simulate_connection' <<< ${device}); then \
  # Perform the simulated connection.
  curl -X 'POST' \
    'https://connect.getseam.com/devices/simulate/connect' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\"
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
const device = await seam.devices.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that Seam supports simulated connection for the device.
if (device.can_simulate_connection) {
  // Perform the simulated connection.
  await seam.devices.simulate.connect({
    device_id: device.device_id
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
device = client.devices.get(device_id: "11111111-1111-1111-1111-444444444444")

# Confirm that Seam supports simulated connection for the device.
if (device.can_simulate_connection)
  # Perform the simulated connection.
  client.devices.simulate.connect(device_id: device.device_id)
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
$device = $seam->devices->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that Seam supports simulated connection for the device.
if ($device->can_simulate_connection) {
  // Perform the simulated connection.
  $seam->devices->simulate->connect(device_id: $device->device_id);
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
Device device = seam.Devices.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that Seam supports simulated connection for the device.
if (device.CanSimulateConnection == true) {
  // Perform the simulated connection.
  seam.Devices.Simulate.Connect(deviceId: device.DeviceId);
}
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Java" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```java
// Get the device.
Device device = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());

// Confirm that Seam supports simulated connection for the device.
if (device.getCanSimulateConnection())
{
  // Perform the simulated connection.
  seam.devices().simulate()
    .connect(DevicesSimulateConnectRequest.builder()
      .deviceId(device.getDeviceId())
      .build());
}
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Go" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```go
// Get the device.
device, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("11111111-1111-1111-1111-444444444444"),
  })

// Confirm that Seam supports simulated connection for the device.
if *device.CanSimulateConnection {
  // Perform the simulated connection.
  client.Devices.Simulate.Connect(
      context.Background(),
      &api.DevicesSimulateConnectRequest{
        DeviceId: device.DeviceId,
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Output:**

```json
void
```
{% endtab %}
{% endtabs %}

***

## Simulate Removing a Device

To simulate a device removal:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the device.
device = seam.devices.get(
  device_id="11111111-1111-1111-1111-444444444444"
)

# Confirm that Seam supports simulated removal for the device.
if device.can_simulate_removal:
  # Perform the simulated removal.
  seam.devices.simulate.remove(device_id=device.device_id)
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
device=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
      "device_id": "11111111-1111-1111-1111-444444444444"
  }')

# Confirm that Seam supports simulated removal for the device.
if  $(jq -r '.device.can_simulate_removal' <<< ${device}); then \
  # Perform the simulated removal.
  curl -X 'POST' \
    'https://connect.getseam.com/devices/simulate/remove' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${device})\"
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
const device = await seam.devices.get({
  device_id: "11111111-1111-1111-1111-444444444444"
});

// Confirm that Seam supports simulated removal for the device.
if (device.can_simulate_removal) {
  // Perform the simulated removal.
  await seam.devices.simulate.remove({
    device_id: device.device_id
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
device = client.devices.get(device_id: "11111111-1111-1111-1111-444444444444")

# Confirm that Seam supports simulated removal for the device.
if (device.can_simulate_removal)
  # Perform the simulated removal.
  client.devices.simulate.remove(device_id: device.device_id)
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
$device = $seam->devices->get(device_id: "11111111-1111-1111-1111-444444444444");

// Confirm that Seam supports simulated removal for the device.
if ($device->can_simulate_removal) {
  // Perform the simulated removal.
  $seam->devices->simulate->remove(device_id: $device->device_id);
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
Device device = seam.Devices.Get(deviceId: "11111111-1111-1111-1111-444444444444");

// Confirm that Seam supports simulated removal for the device.
if (device.CanSimulateRemoval == true) {
  // Perform the simulated removal.
  seam.Devices.Simulate.Remove(deviceId: device.DeviceId);
}
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Java" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```java
// Get the device.
Device device = seam.devices()
  .get(DevicesGetRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .build());

// Confirm that Seam supports simulated removal for the device.
if (device.getCanSimulateRemoval())
{
  // Perform the simulated removal.
  seam.devices().simulate()
    .remove(DevicesSimulateRemoveRequest.builder()
      .deviceId(device.getDeviceId())
      .build());
}
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Go" %}
{% hint style="info" %}
Coming soon!
{% endhint %}

**Code:**

```go
// Get the device.
device, uErr := client.Devices.Get(
  context.Background(),
  &api.DevicesGetRequest{
    DeviceId: api.String("11111111-1111-1111-1111-444444444444"),
  })

// Confirm that Seam supports simulated removal for the device.
if *device.CanSimulateRemoval {
  // Perform the simulated removal.
  client.Devices.Simulate.Remove(
      context.Background(),
      &api.DevicesSimulateRemoveRequest{
        DeviceId: device.DeviceId,
      },
    )
  }

if uErr != nil {
    return uErr
}

return nil
```

**Output:**

```json
void
```
{% endtab %}
{% endtabs %}

***

## Simulate Device Disconnection, Connection, and Removal in the Seam Console

You can also use the [Seam Console](https://console.seam.co/) to simulate disconnecting, connecting, and removing a device.

{% hint style="info" %}
Currently, Seam supports these actions for [August](../../device-guides/sandbox-and-sample-data/august-locks-sample-data.md) and [Yale](../../device-guides/sandbox-and-sample-data/yale-sample-data.md) sandbox devices.
{% endhint %}

1. In the upper-right corner of the Seam Console, click the down arrow to display the workspace list and select a sandbox workspace.
2. In the left navigation pane of the Seam Console, click **Connected Accounts**.
3. Click the account that contains the device that you want to simulate disconnecting, connecting, or removing.
4. At the right of the row for the desired device, click **...** and select **Simulate Removal**, **Simulate Connection**, or **Simulate Disconnection**.\
   The Seam Console only displays the actions that you can perform based on the current state of the device. For example, if the device is already disconnected, you cannot simulate disconnection.
5. Click **Simulate Removal**, **Simulate Connection**, or **Simulate Disconnection** to confirm the action.
