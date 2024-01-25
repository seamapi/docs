---
description: >-
  Devices are objects like locks, thermostats, sensors, or cameras. In the Seam
  API, devices have capabilities that describe the functions that they can
  perform, as well as online and managed status.
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

## Supported Capabilities

Seam decomposes the ensemble of features that a device provides into one or more capabilities, such as `access_codes` or `thermostat`. Seam exposes each capability as a set of APIs that are standardized across brands for ease of integration. For example, an unlock action on a door lock always requires the same API call irrespective of the device brand.

![](<../../.gitbook/assets/image (10) (1).png>)

In addition, Seam decomposes a single device capability further into the following three sets of affordances:

* **Actions:** Commands that you can issue to the device, such as unlock
* **Properties:** The current state of the device, such as the locked status
* **Events:** Notifications related to changes in the state of the device, such as an unlocking operation performed with an access code

To retrieve the list of supported capabilities for a specific device, use the `capability_supported` attribute on the `Device` object, as follows:

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const device = await seam.devices.get({
  device_id: "77208078-6dd7-44e5-a3e4-a2ed3a34efc9"
})
console.log(device.capabilities_supported)
// ['access_code', 'lock']
```
{% endtab %}

{% tab title="Python" %}
```python
device = seam.devices.get("0e2e6262-7f91-4970-a58d-47ef30b41e2e")
print(device.capabilities_supported)
# ['access_code', 'lock']
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam = Seam::Client.new()
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"
some_lock = seam.locks.get(device_id)
puts some_lock.capabilities_supported
# [access_code, lock]
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device = $seam->devices->get("0e2e6262-7f91-4970-a58d-47ef30b41e2e");

# Inspect this device to see which capabilities it supports.
echo json_encode($device->capabilities_supported, JSON_PRETTY_PRINT);

# [
#     "access_code",
#     "lock"
# ]

```
{% endtab %}
{% endtabs %}
