---
description: >-
  Devices are objects like locks, thermostats, sensors, or cameras. In the Seam API, Devices have capabilities that describe the functions they can perform, as well as online and managed status.
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Supported Capabilities

Seam decomposes the ensemble of features offered by a device into one or more capabilities such as `access codes` or `thermostat`.

A single device capability can further be decomposed into 3 sets of affordances:

* **Actions** — commands you can issue the device, such as unlocking
* **Properties** — the current state of the device, such as its locked status
* **Events** — notifications related to changes in the state of the device, such as unlocking operation performed with an access code.

### Checking for Supported Capabilities
To check whether a device supports a specific capability, inspect the `capability_supported` property of the device.

<!-- CODE INJECT START
Get a device and print out the capability_supported property of this device

e.g. in python you could do:
```python
device = seam.devices.get("some_device_uuid")
print(device.capability_supported)
```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const device = await seam.devices.get({
  device_id: "device3"
});
console.log(device.capabilities_supported);
```
{% endtab %}
{% tab title="Python" %}
```python
device = seam.devices.get("device3")
print(device.capabilities_supported)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
device = seam.devices.get("device3")
puts(device.capabilities_supported)
```
{% endtab %}
{% tab title="PHP" %}
```php
$device = $seam->devices->get("device3");


echo json_encode($device->capabilities_supported);
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->




# Managed vs Unmanaged

To increase billing flexibility, Seam provides the ability to mark devices as managed or unmanaged:

- ***Managed devices*** can be fully controlled through the Seam API and are billed to your Seam account as a regular device.
- ***Unmanaged device*** on the other hand cannot be controlled through the Seam API and are thus not billed.

Seam makes it possible to toggle a device back and forth between `managed` and `unmanaged` state. 

### Convert Managed Device to Unmanaged
Converting a device to an `unmanaged` state pauses billing for the device and converts all the device resources managed by Seam (e.g. Access Codes) to unmanaged resources. As a result, Seam will no longer monitor the lifecycle of these resources. 

<!-- CODE INJECT START
Get a device and convert it to an unmanaged device, then use the unmanaged device get call to retrieve it

e.g. in python you could do:
```python
device = seam.devices.get("some_device_uuid")
seam.devices.update(
  device=some_device, 
  is_managed=False
  )
seam.devices.unmanaged.get("some_device_uuid")
```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const device = await seam.devices.get({ device_id: "device3" })
const updatedDevice = await seam.devices.update({
  device_id: device.device_id,
  is_managed: false
})
await seam.devices.unmanaged.get({ device_id: "device3" })
```
{% endtab %}
{% tab title="Python" %}
```python
device = seam.devices.get("device3")
seam.devices.update(
  device=device, 
  is_managed=False
)
seam.devices.unmanaged.get("device3")
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
device = seam.devices.get("device3")
seam.devices.update(device: device, is_managed: false)
seam.devices.unmanaged.get("device3")
```
{% endtab %}
{% tab title="PHP" %}
```php
$device = $seam->devices->get("device3");
$seam->devices->update("device3", ["is_managed" => false]);
$seam->devices->unmanaged->get("device3");
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->


### Convert Managed Device to Unmanaged
To convert an unmanaged device back to managed, retrieve it using the unmanaged device API and use the update function to change its managed state back to true.


<!-- CODE INJECT START
Get an unmanaged device and convert it to a managed device

e.g. in python you could do:
```python
unmanaged_device = seam.devices.unmanaged.get("some_device_uuid")
seam.devices.unmanaged.update(device=unmanaged_device, is_managed=True)
```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
let unmanaged_device = await seam.devices.unmanaged.get("device3")
await seam.devices.unmanaged.update({
  device_id: unmanaged_device.deviceId, 
  is_managed: true
})

```
{% endtab %}
{% tab title="Python" %}
```python
unmanaged_device = seam.devices.unmanaged.get("device3")
seam.devices.unmanaged.update(device=unmanaged_device, is_managed=True)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
unmanaged_device = seam.devices.unmanaged.get("device3")
seam.devices.unmanaged.update(device: unmanaged_device, is_managed: true)
```
{% endtab %}
{% tab title="PHP" %}
```php
$unmanaged_device = $seam->devices->unmanaged->get("device3");
$managed_device = $seam->access_codes->unmanaged->update(
  access_code_id: $unmanaged_device->access_code_id,
  is_managed: True
);
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->
