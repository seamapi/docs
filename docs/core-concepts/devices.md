---
description: >-
  Devices are objects like locks, thermostats, sensors, or cameras. In the Seam
  API, Devices have capabilities that describe the functions they can perform,
  as well as online and managed status.
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

Seam decomposes the ensemble of features offered by a device into one or more capabilities such as `access_codes` or `thermostat`. Seam exposes each capability as a set of APIs that are standardized across brands for ease of integration. For example, an unlock action on a door lock always requires the same API call irrespective of the device brand.

![](<../.gitbook/assets/image (10).png>)

Furthermore, a single device capability can further be decomposed into 3 sets of affordances:

* **Actions** — commands you can issue the device, such as unlocking
* **Properties** — the current state of the device, such as its locked status
* **Events** — notifications related to changes in the state of the device, such as an unlocking operation performed with an access code.

To retrieve the list of supported capabilities for a given device, use the `capability_supported` attribute on the Device object:

{% tabs %}
{% tab title="Javascript" %}
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
# NOT YET IMPLEMENTED capabilities_supported attribute 
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device = $seam->devices->get("0e2e6262-7f91-4970-a58d-47ef30b41e2e");

# Inspect this device to see which capabilities it supports
echo json_encode($device->capabilities_supported, JSON_PRETTY_PRINT);

# [
#     "access_code",
#     "lock"
# ]

```
{% endtab %}
{% endtabs %}

## Managed Devices vs Unmanaged Devices

To increase billing flexibility, Seam provides the ability to mark devices as `managed` or `unmanaged`:

* _**Managed devices**_: these devices can be fully controlled through the Seam API and are billed to your Seam account as a regular device.
* _**Unmanaged device**_ these devices are not billed and consequently cannot be controlled through the Seam API.

Seam makes it possible to toggle a device back and forth between `managed` and `unmanaged` states.

### Convert Managed Device to Unmanaged

Converting a device to an `unmanaged` state pauses billing for the device and converts all the managed device resources (e.g. Access Codes) to unmanaged resources. As a result, Seam will no longer monitor the lifecycle of these resources.

{% tabs %}
{% tab title="Javascript" %}
```javascript

const deviceId = "77208078-6dd7-44e5-a3e4-a2ed3a34efc9"

// take a managed device
const device = await seam.devices.get({
  device_id: deviceId
})

// set its managed status to false
const updatedDevice = await seam.devices.update({
  device_id: deviceId,
  is_managed: false
})

// retrieve the unmanaged device
const unmanagedDevice = await seam.devices.unmanaged.get({
  device_id: deviceId
})



console.log(unmanagedDevice)

/*
{
  is_managed: false,
  device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
  device_type: 'yale_lock',
  connected_account_id: '4e5acceb-2bda-4dc1-814e-39c998431683',
  capabilities_supported: [ 'access_code', 'lock' ],
  workspace_id: '1d2826eb-4a26-4f46-bddb-ef5898baa859',
  created_at: '2023-08-29T04:30:14.914Z',
  errors: [],
  warnings: [],
  properties: {
    name: 'FRONT DOOR',
    online: true,
    manufacturer: 'august',
    image_url: 'https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png',
    image_alt_text: 'Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front',
    model: { display_name: 'Lock', manufacturer_display_name: 'August' }
  }
}

*/
```
{% endtab %}

{% tab title="Python" %}
```python
device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e"

# update device to unmanaged
seam.devices.update(
  device=device_id, 
  is_managed=False
)

# retrieve unmanaged device and print it out
unmanaged_device = seam.devices.unmanaged.list(device_ids=[device_id])
print(unmanaged_device)
# [UnmanagedDevice(device_id='0e2e6262-7f91-4970-a58d-47ef30b41e2e',
#                  device_type='nuki_lock',
#                  properties={'image_alt_text': 'Nuki Smart Lock 3.0 Pro Black, '
#                                                'Front',
#                              'image_url': 'https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png',
#                              'manufacturer': 'nuki',
#                              'model': {'display_name': 'Lock',
#                                        'manufacturer_display_name': 'Nuki'},
#                              'name': 'Office Lock',
#                              'online': True},
#                  connected_account_id='5fe50f46-274f-4a03-ba95-3a517464fdc7',
#                  workspace_id='1d2826eb-4a26-4f46-bddb-ef5898baa859',
#                  created_at='2023-08-30T06:45:59.213Z',
#                  errors=[],
#                  warnings=[])]

```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"

# seam.devices.update(device_id: device_id, is_managed: false)
unmanaged_device = seam.unmanaged_devices.list([device_id])
puts unmanaged_device.inspect

# [<Seam::UnmanagedDevice:0x00438
#   device_id="aa3958c3-4236-4f71-bd77-3b60f85b3456"
#   device_type="yale_lock"
#   connected_account_id="d2ab9339-d0ad-4594-b9a2-6ce71e4d4521"
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   created_at=2023-08-30 05:33:58.45 UTC
#   errors=[]
#   warnings=[]
#   properties={"name"=>"FRONT DOOR", "online"=>true, "manufacturer"=>"august", "image_url"=>"https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png", "image_alt_text"=>"Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front", "model"=>{"display_name"=>"Lock", "manufacturer_display_name"=>"August"}}>, <Seam::UnmanagedDevice:0x00460
#   device_id="0e2e6262-7f91-4970-a58d-47ef30b41e2e"
#   device_type="nuki_lock"
#   connected_account_id="5fe50f46-274f-4a03-ba95-3a517464fdc7"
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   created_at=2023-08-30 06:45:59.213 UTC
#   errors=[]
#   warnings=[]
#   properties={"name"=>"Office Lock", "online"=>true, "manufacturer"=>"nuki", "image_url"=>"https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png", "image_alt_text"=>"Nuki Smart Lock 3.0 Pro Black, Front", "model"=>{"display_name"=>"Lock", "manufacturer_display_name"=>"Nuki"}}>]
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";
$device = $seam->devices->get($device_id);

$seam->devices->update(
    device_id: $device_id,
    is_managed: false);

$unmanaged_device = $seam->devices->unmanaged->list()[0];

# Inspect this device to confirm it's unmanaged
echo json_encode($unmanaged_device, JSON_PRETTY_PRINT);

// {
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "device_type": "nuki_lock",
//     "connected_account_id": "5fe50f46-274f-4a03-ba95-3a517464fdc7",
//     "workspace_id": "1d2826eb-4a26-4f46-bddb-ef5898baa859",
//     "created_at": "2023-08-30T06:45:59.213Z",
//     "properties": {
//         "name": "Office Lock",
//         "manufacturer": "nuki",
//         "image_url": "https:\/\/connect.getseam.com\/assets\/images\/devices\/nuki_smart_lock_3_pro_black.png",
//         "image_alt_text": "Nuki Smart Lock 3.0 Pro Black, Front",
//         "model": {
//             "display_name": "Lock",
//             "manufacturer_display_name": "Nuki"
//         }
//     },
//     "errors": [],
//     "warnings": []
// }
```
{% endtab %}
{% endtabs %}

### Convert Unmanaged Device to Managed

To convert an unmanaged device back to managed, retrieve it using the unmanaged device API and use the update function to change its managed state back to true. Note that unmanaged device resources (e.g. Access Codes) will need to be converted back to managed as well.

{% tabs %}
{% tab title="Javascript" %}
```javascript
const deviceId = "77208078-6dd7-44e5-a3e4-a2ed3a34efc9"

// retrieve the unmanaged device if needed
const unmanagedDevice = await seam.devices.unmanaged.get({
  device_id: deviceId
})

// update it
await seam.devices.unmanaged.update({
  device_id: deviceId, 
  is_managed: true
})

// retrieve it
const device = await seam.devices.get({
    device_id: deviceId
})

console.log(device)
/*
{
  device_id: '77208078-6dd7-44e5-a3e4-a2ed3a34efc9',
  device_type: 'yale_lock',
  capabilities_supported: [ 'access_code', 'lock' ],
  properties: {
    locked: true,
    online: true,
    door_open: false,
    manufacturer: 'august',
    battery_level: 0.9999532347993827,
    serial_number: '00000004-992d-45a0-bea1-9128fdcd8d12',
    august_metadata: {
      lock_id: 'lock-1',
      house_id: 'house-1',
      lock_name: 'FRONT DOOR',
      has_keypad: true,
      house_name: 'My House',
      keypad_battery_level: 'Not Available'
    },
    supported_code_lengths: [ 4, 5, 6, 7, 8 ],
    has_native_entry_events: true,
    name: 'FRONT DOOR',
    model: { display_name: 'Lock', manufacturer_display_name: 'August' },
    battery: { level: 0.9999532347993827, status: 'full' },
    image_url: 'https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png',
    image_alt_text: 'Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front',
    code_constraints: [],
    supports_backup_access_code_pool: true
  },
  location: { timezone: 'America/Los_Angeles', location_name: 'My House' },
  connected_account_id: '4e5acceb-2bda-4dc1-814e-39c998431683',
  workspace_id: '1d2826eb-4a26-4f46-bddb-ef5898baa859',
  created_at: '2023-08-29T04:30:14.914Z',
  errors: [],
  warnings: [],
  is_managed: true
}
*/

```
{% endtab %}

{% tab title="Python" %}
```python
device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e"

# Use the unmanaged update call to update the status
seam.devices.unmanaged.update(
  device=device_id, 
  is_managed=True
)

# Confirm that the device is now managed by retrieving it
device = seam.devices.get(device=device_id)
print(device)

# Device(device_id='0e2e6262-7f91-4970-a58d-47ef30b41e2e',
#        device_type='nuki_lock',
#        location=None,
#        properties={'battery': {'level': 0.86, 'status': 'full'},
#                    'battery_level': 0.86,
#                    'code_constraints': [{'constraint_type': 'cannot_start_with_12'},
#                                         {'constraint_type': 'no_zeros'},
#                                         {'constraint_type': 'name_length',
#                                          'max_length': 20}],
#                    'has_native_entry_events': True,
#                    'image_alt_text': 'Nuki Smart Lock 3.0 Pro Black, Front',
#                    'image_url': 'https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png',
#                    'keypad_battery': {'level': 1},
#                    'locked': False,
#                    'manufacturer': 'nuki',
#                    'model': {'display_name': 'Lock',
#                              'manufacturer_display_name': 'Nuki'},
#                    'name': 'Office Lock',
#                    'nuki_metadata': {'device_id': '545636389',
#                                      'device_name': 'Office Lock',
#                                      'keypad_battery_critical': False},
#                    'online': True,
#                    'supported_code_lengths': [6],
#                    'supports_backup_access_code_pool': True},
#        capabilities_supported=['access_code', 'lock'],
#        errors=[],
#        warnings=[],
#        connected_account_id='5fe50f46-274f-4a03-ba95-3a517464fdc7',
#        workspace_id='1d2826eb-4a26-4f46-bddb-ef5898baa859',
#        created_at='2023-08-30T06:45:59.213Z')
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
device_id = "aa3958c3-4236-4f71-bd77-3b60f85b3456"
seam.unmanaged_devices.update(device_id: device_id, is_managed: true)

device = seam.devices.get(device_id)

puts device.inspect
# <Seam::Device:0x00438
#   device_id="aa3958c3-4236-4f71-bd77-3b60f85b3456"
#   device_type="yale_lock"
#   properties={"locked"=>true, "online"=>true, "door_open"=>false, "manufacturer"=>"august", "battery_level"=>0.9999532347993827, "serial_number"=>"00000004-992d-45a0-bea1-9128fdcd8d12", "august_metadata"=>{"lock_id"=>"lock-1", "house_id"=>"house-1", "lock_name"=>"FRONT DOOR", "has_keypad"=>true, "house_name"=>"My House", "keypad_battery_level"=>"Not Available"}, "supported_code_lengths"=>[4, 5, 6, 7, 8], "has_native_entry_events"=>true, "name"=>"FRONT DOOR", "model"=>{"display_name"=>"Lock", "manufacturer_display_name"=>"August"}, "battery"=>{"level"=>0.9999532347993827, "status"=>"full"}, "image_url"=>"https://connect.getseam.com/assets/images/devices/yale_assure-lock-touchscreen-wifi-smart-lock_satin-nickel_front.png", "image_alt_text"=>"Yale Assure Touchscreen Wifi Smart Lock, Satin Nickel, Front", "code_constraints"=>[], "supports_backup_access_code_pool"=>true}
#   connected_account_id="d2ab9339-d0ad-4594-b9a2-6ce71e4d4521"
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   created_at=2023-08-30 05:33:58.45 UTC
#   errors=[]
#   warnings=[]>
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device_id = "0e2e6262-7f91-4970-a58d-47ef30b41e2e";

$seam->devices->unmanaged->update(
  device_id: $device_id,
  is_managed: true
);

$device = $seam->devices->get($device_id);

# Inspect this device to make sure it was correct converted
echo json_encode($device, JSON_PRETTY_PRINT);

// {
//     "device_id": "0e2e6262-7f91-4970-a58d-47ef30b41e2e",
//     "workspace_id": "1d2826eb-4a26-4f46-bddb-ef5898baa859",
//     "connected_account_id": "5fe50f46-274f-4a03-ba95-3a517464fdc7",
//     "device_type": "nuki_lock",
//     "properties": {
//         "online": true,
//         "locked": false,
//         "name": "Office Lock",
//         "battery_level": 0.86,
//         "battery": {
//             "level": 0.86,
//             "status": "full"
//         },
//         "manufacturer": "nuki",
//         "supported_code_lengths": [
//             6
//         ],
//         "code_constraints": [
//             {
//                 "constraint_type": "cannot_start_with_12"
//             },
//             {
//                 "constraint_type": "no_zeros"
//             },
//             {
//                 "constraint_type": "name_length",
//                 "max_length": 20
//             }
//         ],
//         "model": {
//             "display_name": "Lock",
//             "manufacturer_display_name": "Nuki"
//         },
//         "image_url": "https:\/\/connect.getseam.com\/assets\/images\/devices\/nuki_smart_lock_3_pro_black.png",
//         "image_alt_text": "Nuki Smart Lock 3.0 Pro Black, Front",
//         "nuki_metadata": {
//             "device_id": "545636389",
//             "device_name": "Office Lock",
//             "keypad_battery_critical": false
//         }
//     },
//     "location": null,
//     "created_at": "2023-08-30T06:45:59.213Z",
//     "capabilities_supported": [
//         "access_code",
//         "lock"
//     ],
//     "errors": [],
//     "warnings": []
// }
```
{% endtab %}
{% endtabs %}

### Automatically Set New Devices to Unmanaged

New devices added to a workspace via a Connect Webview can automatically be set to `unmanaged` by default. To do so, set the `automatically_manage_new_devices` to false when creating a Connect Webview. Any device added once the Connect Webview is authorized will be set to `unmanaged`.

{% tabs %}
{% tab title="Javascript" %}
```javascript
const connectWebview = await seam.connectWebviews.create({
    // accepted_providers: ["schlage", "august"...etc], <== use these for precise control of accepted providers
    provider_category: "stable",
    automatically_manage_new_devices: false
})

console.log(connectWebview)

/*
{
  url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=323b4ffa-ce24-4cff-a965-ff532563ec7a&auth_token=JrunXm29x7GCWFrVJsZHLFsD5YAioyaAu',
  status: 'pending',
  workspace_id: '1d2826eb-4a26-4f46-bddb-ef5898baa859',
  custom_metadata: {},
  accepted_devices: [],
  login_successful: false,
  accepted_providers: [
    'august',      'avigilon_alta',
    'schlage',     'smartthings',
    'yale',        'nuki',
    'salto',       'controlbyweb',
    'minut',       'my_2n',
    'kwikset',     'ttlock',
    'noiseaware',  'igloohome',
    'ecobee',      'hubitat',
    'four_suites'
  ],
  any_device_allowed: false,
  connect_webview_id: '323b4ffa-ce24-4cff-a965-ff532563ec7a',
  custom_redirect_url: null,
  any_provider_allowed: false,
  device_selection_mode: 'none',
  wait_for_device_creation: false,
  custom_redirect_failure_url: null,
  automatically_manage_new_devices: false,
  created_at: '2023-08-29T04:59:13.890Z'
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
# not yet implemented
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
connect_webview = seam.connect_webviews.create(
    provider_category: "stable",
    automatically_manage_new_devices: false,
)

puts connect_webview.inspect

# Connect Webview below; note that the automatically_manage_new_devices is not yet exposed
# <Seam::ConnectWebview:0x00438
#   url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=16c2ef1d-9ea9-43a1-9e24-ee59f5638d1e&auth_token=LToh3cCRhxBhhtdSnFM4qKw3Si6waNGc8"
#   status="pending"
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   accepted_devices=[]
#   login_successful=false
#   accepted_providers=["august", "avigilon_alta", "schlage", "smartthings", "yale", "nuki", "salto", "controlbyweb", "minut", "my_2n", "kwikset", "ttlock", "noiseaware", "igloohome", "ecobee", "hubitat", "four_suites"]
#   any_device_allowed=false
#   connect_webview_id="16c2ef1d-9ea9-43a1-9e24-ee59f5638d1e"
#   custom_redirect_url=nil
#   any_provider_allowed=false
#   device_selection_mode="none"
#   custom_redirect_failure_url=nil
#   created_at=2023-08-31 21:03:17.631 UTC>

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
