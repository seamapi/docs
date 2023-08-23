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

Seam decomposes the ensemble of features offered by a device into one or more capabilities such as `access_codes` or `thermostat`. Seam exposes each capability as a set of APIs that are standardized across brands for ease of integration. For example, an unlock action on a door lock always requires the same API call irrespective of the device brand.


![](<../.gitbook/assets/image (10).png>)

Furthermore, a single device capability can further be decomposed into 3 sets of affordances:

* **Actions** — commands you can issue the device, such as unlocking
* **Properties** — the current state of the device, such as its locked status
* **Events** — notifications related to changes in the state of the device, such as an unlocking operation performed with an access code.

To retrieve the list of supported capabilities for a given device, use the `capability_supported` attribute on the Device object:

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
// ['access_code', 'lock']
```
{% endtab %}
{% tab title="Python" %}
```python
device = seam.devices.get("device3")
print(device.capabilities_supported)
# ['access_code', 'lock']
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
device = seam.devices.get("device3")
puts(device.capabilities_supported)
# ['access_code', 'lock']
```
{% endtab %}
{% tab title="PHP" %}
```php
$device = $seam->devices->get("device3");
echo json_encode($device->capabilities_supported);
// ['access_code', 'lock']
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->




# Managed Devices vs Unmanaged Devices

To increase billing flexibility, Seam provides the ability to mark devices as `managed` or `unmanaged`:

- ***Managed devices***: these devices can be fully controlled through the Seam API and are billed to your Seam account as a regular device.
- ***Unmanaged device*** these devices are not billed and consequently cannot be controlled through the Seam API.

Seam makes it possible to toggle a device back and forth between `managed` and `unmanaged` states.

## Convert Managed Device to Unmanaged
Converting a device to an `unmanaged` state pauses billing for the device and converts all the managed device resources (e.g. Access Codes) to unmanaged resources. As a result, Seam will no longer monitor the lifecycle of these resources. 

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


## Convert Unmanaged Device to Managed
To convert an unmanaged device back to managed, retrieve it using the unmanaged device API and use the update function to change its managed state back to true. Note that unmanaged device resources (e.g. Access Codes) will need to be converted back to managed as well.


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

## Automatically Set New Devices to Unmanaged
New devices added to a workspace via a Connect Webview can automatically be set to `unmanaged` by default. To do so, set the `automatically_manage_new_devices` to false when creating a Connect Webview. Any device added once the Connect Webview is authorized will be set to `unmanaged`.


<!-- CODE INJECT START
Create a Connect Webview and set automatically_manage_new_devices to false

e.g. in python you could do:
```python
seam.connect_webviews.create(accepted_providers=["schlage", "august"], automatically_manage_new_devices=False)
```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const connectWebview = await seam.connectWebviews.create({
  accepted_providers: ["schlage", "august"], 
  automatically_manage_new_devices: false
})
```
{% endtab %}
{% tab title="Python" %}
```python
seam.connect_webviews.create(
    accepted_providers=["schlage", "august"], 
    automatically_manage_new_devices=False)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
connect_webview = seam.connect_webviews.create(
  accepted_providers: ["schlage", "august"], 
  automatically_manage_new_devices: false
)
```
{% endtab %}
{% tab title="PHP" %}
```php
$connect_webview = $seam->connect_webviews->create(
  accepted_providers: ["schlage", "august"], 
  automatically_manage_new_devices: false
);
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->