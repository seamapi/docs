---
description: >-
  Devices  are the top-level resource in Seam and encapsulate all other
  resources, such as devices, events, or connected third-party accounts.
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

# Devices

Devices are objects like locks, thermostats, sensors, cameras...etc. They have capabilities that inform on what functions they can perform, as well as online status, and managed vs unmanaged state. 


# Supported Capabilities

Seam decomposes the ensemble of features offered by a device into one or more capabilities. For example, most smart locks in Seam support two capabilities, `locks` & `access codes`. 

A single device capability can further be decomposed into 3 sets of affordances:

* **Actions** — commands you can issue the device.
* **Properties** — the current state of the device.
* **Events** — notifications related to changes in the state of the device.

For example, the `lock` capability decomposes in the following manner:

* **Actions:** `UNLOCK` and `LOCK`
* **Properties:**  a `locked` status to determine the lock's current status
* **Events:** a list of lock/unlock events logging all of the lock's transitions.

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
echo $device->capabilities_supported;
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->