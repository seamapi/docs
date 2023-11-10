---
description: >-
  Learn about the specific requirements and constraints for setting access codes
  on door locks.
---

# Access Code Requirements for Door Locks

Some models of door locks have specific requirements and constraints when it comes to setting PIN codes. It's essential to be aware of these to ensure seamless functionality and security. The requirements can be fetched by making a [Get Device](../../../api-clients/devices/get-device.md) or [List Devices](../../../api-clients/devices/list-devices.md) (or [Get Lock](../../../api-clients/locks/get-lock.md) or [List Locks](../../../api-clients/locks/list-locks.md)) request.

Sample set of access code requirements:

```json
{
  "device": {
    "device_id": "00000000-0000-0000-0000-000000000000",
    "capabilities_supported": [
      "access_code",
      "lock"
    ],
    "properties": {
      "supported_code_lengths": [
        4,
        5,
        6,
        7,
        8
      ],
      "max_active_codes_supported": 250,
      "code_constraints": [
        {
          "constraint_type": "no_zeros"
        },
        {
          "constraint_type": "name_length",
          "min_length": 1,
          "max_length": 12
        }
      ],
      "supports_backup_access_code_pool": true
      ...
    },
    ...
  },
  ...
}
```

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.locks.get(device="ed4bb795-f29f-43e5-bc0f-35f69f9141b5"))
```

**Response:**

```
Device(device_id='ed4bb795-f29f-43e5-bc0f-35f69f9141b5',
       device_type='nuki_lock',
       location=None,
       properties={'battery': {'level': 0.86, 'status': 'full'},
                   'battery_level': 0.86,
                   'code_constraints': [{'constraint_type': 'cannot_start_with_12'},
                                        {'constraint_type': 'no_zeros'},
                                        {'constraint_type': 'name_length',
                                         'max_length': 20}],
                   'has_native_entry_events': True,
                   'image_alt_text': 'Nuki Smart Lock 3.0 Pro Black, Front',
                   'image_url': 'https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png',
                   'keypad_battery': {'level': 1},
                   'locked': False,
                   'manufacturer': 'nuki',
                   'model': {'display_name': 'Lock',
                             'manufacturer_display_name': 'Nuki'},
                   'name': 'Office Lock',
                   'nuki_metadata': {'device_id': '3',
                                     'device_name': 'Office Lock',
                                     'keypad_battery_critical': False},
                   'online': True,
                   'supported_code_lengths': [6],
                   'supports_backup_access_code_pool': True},
       capabilities_supported=['access_code', 'lock'],
       errors=[],
       warnings=[],
       connected_account_id='cac74c00-443b-440f-820e-e2907277fd9f',
       workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
       created_at='2023-10-19T04:43:40.852Z',
       is_managed=True)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "ed4bb795-f29f-43e5-bc0f-35f69f9141b5"
}'
```

**Response:**

```json
{
  "device": {
    "device_id": "ed4bb795-f29f-43e5-bc0f-35f69f9141b5",
    "device_type": "nuki_lock",
    "capabilities_supported": [
      "access_code",
      "lock"
    ],
    "properties": {
      "locked": false,
      "online": true,
      "manufacturer": "nuki",
      "battery_level": 0.86,
      "nuki_metadata": {
        "device_id": "3",
        "device_name": "Office Lock",
        "keypad_battery_critical": false
      },
      "keypad_battery": {
        "level": 1
      },
      "supported_code_lengths": [
        6
      ],
      "has_native_entry_events": true,
      "name": "Office Lock",
      "model": {
        "display_name": "Lock",
        "manufacturer_display_name": "Nuki"
      },
      "battery": {
        "level": 0.86,
        "status": "full"
      },
      "image_url": "https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png",
      "image_alt_text": "Nuki Smart Lock 3.0 Pro Black, Front",
      "code_constraints": [
        {
          "constraint_type": "cannot_start_with_12"
        },
        {
          "constraint_type": "no_zeros"
        },
        {
          "constraint_type": "name_length",
          "max_length": 20
        }
      ],
      "supports_backup_access_code_pool": true
    },
    "location": null,
    "connected_account_id": "cac74c00-443b-440f-820e-e2907277fd9f",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-10-19T04:43:40.852Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const device = await seam.devices.get({
    device_id: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5"
  })

console.log(device)
console.log(device.properties.code_constraints)
```

**Response:**

```json
{
  device_id: 'ed4bb795-f29f-43e5-bc0f-35f69f9141b5',
  device_type: 'nuki_lock',
  capabilities_supported: [ 'access_code', 'lock' ],
  properties: {
    locked: false,
    online: true,
    manufacturer: 'nuki',
    battery_level: 0.86,
    nuki_metadata: {
      device_id: '3',
      device_name: 'Office Lock',
      keypad_battery_critical: false
    },
    keypad_battery: { level: 1 },
    supported_code_lengths: [ 6 ],
    has_native_entry_events: true,
    name: 'Office Lock',
    model: { display_name: 'Lock', manufacturer_display_name: 'Nuki' },
    battery: { level: 0.86, status: 'full' },
    image_url: 'https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png',
    image_alt_text: 'Nuki Smart Lock 3.0 Pro Black, Front',
    code_constraints: [ [Object], [Object], [Object] ],
    supports_backup_access_code_pool: true
  },
  location: null,
  connected_account_id: 'cac74c00-443b-440f-820e-e2907277fd9f',
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  created_at: '2023-10-19T04:43:40.852Z',
  errors: [],
  warnings: [],
  is_managed: true
}
[
  { constraint_type: 'cannot_start_with_12' },
  { constraint_type: 'no_zeros' },
  { constraint_type: 'name_length', max_length: 20 }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.devices.get("ed4bb795-f29f-43e5-bc0f-35f69f9141b5").inspect
```

**Response:**

{% code overflow="wrap" %}
```
<Seam::Device:0x00438
  device_id="ed4bb795-f29f-43e5-bc0f-35f69f9141b5"
  device_type="nuki_lock"
  capabilities_supported=["access_code", "lock"]
  properties={"locked"=>false, "online"=>true, "manufacturer"=>"nuki", "battery_level"=>0.86, "nuki_metadata"=>{"device_id"=>"3", "device_name"=>"Office Lock", "keypad_battery_critical"=>false}, "keypad_battery"=>{"level"=>1}, "supported_code_lengths"=>[6], "has_native_entry_events"=>true, "name"=>"Office Lock", "model"=>{"display_name"=>"Lock", "manufacturer_display_name"=>"Nuki"}, "battery"=>{"level"=>0.86, "status"=>"full"}, "image_url"=>"https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png", "image_alt_text"=>"Nuki Smart Lock 3.0 Pro Black, Front", "code_constraints"=>[{"constraint_type"=>"cannot_start_with_12"}, {"constraint_type"=>"no_zeros"}, {"constraint_type"=>"name_length", "max_length"=>20}], "supports_backup_access_code_pool"=>true}
  connected_account_id="cac74c00-443b-440f-820e-e2907277fd9f"
  workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  created_at=2023-10-19 04:43:40.852 UTC
  errors=[]
  warnings=[]
  is_managed=true>
```
{% endcode %}
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$device = $seam->devices->get("0e2e6262-7f91-4970-a58d-47ef30b41e2e");

# Inspect this device to see which capabilities it supports
echo json_encode($device->properties, JSON_PRETTY_PRINT);

// {
//     "online": true,
//     "locked": false,
//     "name": "Office Lock",
//     "battery_level": 0.86,
//     "battery": {
//         "level": 0.86,
//         "status": "full"
//     },
//     "manufacturer": "nuki",
//     "supported_code_lengths": [
//         6
//     ],
//     "code_constraints": [
//         {
//             "constraint_type": "cannot_start_with_12"
//         },
//         {
//             "constraint_type": "no_zeros"
//         },
//         {
//             "constraint_type": "name_length",
//             "max_length": 20
//         }
//     ],
//     "model": {
//         "display_name": "Lock",
//         "manufacturer_display_name": "Nuki"
//     },
//     "image_url": "https:\/\/connect.getseam.com\/assets\/images\/devices\/nuki_smart_lock_3_pro_black.png",
//     "image_alt_text": "Nuki Smart Lock 3.0 Pro Black, Front",
//     "nuki_metadata": {
//         "device_id": "545636389",
//         "device_name": "Office Lock",
//         "keypad_battery_critical": false
//     }
// }
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var device = seam.Devices.Get(deviceId: "ed4bb795-f29f-43e5-bc0f-35f69f9141b5");
Console.WriteLine("Device ID: " + device.DeviceId);
Console.WriteLine("Type: " + device.DeviceType);
Console.WriteLine("Capabilities supported:");
foreach (var capability in device.CapabilitiesSupported)
{
  Console.WriteLine(capability);
}
Console.WriteLine("Supported code lengths:");
if (device.Properties.SupportedCodeLengths is not null)
{
  foreach (var supportedCodeLength in device.Properties.SupportedCodeLengths)
  {
    Console.WriteLine(supportedCodeLength);

  }
}
Console.WriteLine("Code constraints:");
if (device.Properties.CodeConstraints is not null)
{
  foreach (var codeConstraint in device.Properties.CodeConstraints)
  {
    Console.WriteLine(codeConstraint);
  }
}
Console.WriteLine("Supports backup access code pool: " + device.Properties.SupportsBackupAccessCodePool);
```

**Response:**

{% code overflow="wrap" %}
```
Device ID: ed4bb795-f29f-43e5-bc0f-35f69f9141b5
Type: NukiLock
Capabilities supported:
AccessCode
Lock
Supported code lengths:
6
Code constraints:
{
  "constraint_type": "cannot_start_with_12"
}
{
  "constraint_type": "no_zeros"
}
{
  "constraint_type": "name_length",
  "max_length": 20
}
Supports backup access code pool: True
```
{% endcode %}
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Device lock = seam.locks()
        .get(LocksGetRequest.builder()
                .deviceId("ed4bb795-f29f-43e5-bc0f-35f69f9141b5")
                .build());
System.out.println(lock);
```

**Response:**

```json
{
  "device_id" : "ed4bb795-f29f-43e5-bc0f-35f69f9141b5",
  "device_type" : "nuki_lock",
  "capabilities_supported" : [ "access_code", "lock" ],
  "properties" : {
    "online" : true,
    "name" : "Office Lock",
    "model" : {
      "display_name" : "Lock",
      "manufacturer_display_name" : "Nuki"
    },
    "battery_level" : 0.86,
    "image_url" : "https://connect.getseam.com/assets/images/devices/nuki_smart_lock_3_pro_black.png",
    "keypad_battery" : {
      "level" : 1
    },
    "battery" : {
      "level" : 0.86,
      "status" : "full"
    },
    "code_constraints" : [ {
      "constraint_type" : "cannot_start_with_12"
    }, {
      "constraint_type" : "no_zeros"
    }, {
      "constraint_type" : "name_length",
      "max_length" : 20
    } ],
    "has_native_entry_events" : true,
    "image_alt_text" : "Nuki Smart Lock 3.0 Pro Black, Front",
    "manufacturer" : "nuki",
    "nuki_metadata" : {
      "device_id" : "3",
      "device_name" : "Office Lock",
      "keypad_battery_critical" : false
    },
    "supported_code_lengths" : [ 6 ],
    "locked" : false,
    "supports_offline_access_codes" : false,
    "supports_backup_access_code_pool" : true
  },
  "connected_account_id" : "cac74c00-443b-440f-820e-e2907277fd9f",
  "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at" : "2023-10-19T04:43:40.852Z",
  "is_managed" : true
}
```
{% endtab %}
{% endtabs %}

***

## Supported Code Lengths

This property is denoted as `supported_code_lengths` and contains an array of numbers. These numbers represent the various lengths (in terms of digits) allowed for a PIN code. For example, if the array contains `[4, 6]`, it means the door lock can accept 4-digit or 6-digit PIN codes.

**Example Payload:**

```json
"supported_code_lengths": [
    4,
    5,
    6,
    7,
    8
]
```

***

## Maximum Set Codes

The property `max_active_codes_supported` indicates the total number of codes that can be simultaneously set on a door lock. For the door locks that accommodate [native scheduling](./#native-scheduling), this count will includes future scheduled codes that are set on the lock.

**Example Payload:**

```json
"max_active_codes_supported": 250
```

***

## PIN Code Constraints

The `code_constraints` property gives insight into various conditions or limitations that apply to PIN codes. Each constraint in the `code_constraints` array is an object with at least the `constraint_type` property.

**Example Payload:**

```json
"code_constraints": [
    {
        "constraint_type": "no_zeros"
    },
    {
        "constraint_type": "name_length",
        "min_length": 1,
        "max_length": 12
    }
]
```

The `constraint_type` property can be one of the following:

| Constraint Type                     | Description                                                                                                                                                                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`no_zeros`**                      | `0`s cannot be used as digits in the pin code.                                                                                                                                                                                        |
| **`cannot_start_with_12`**          | The pin code cannot start with the sequence of digits `12`.                                                                                                                                                                           |
| **`no_triple_consecutive_ints`**    | No more than 3 digits in a row can be consecutive or the same in the pin code.                                                                                                                                                        |
| **`cannot_specify_pin_code`**       | A pin code cannot be specified - it has to be left empty and one will be generated by the lock provider.                                                                                                                              |
| **`pin_code_matches_existing_set`** | If a pin code is specified, it must match an existing set of pin codes used in the account (for example, pin code matches the code assigned to a user in the system).                                                                 |
| **`start_date_in_future`**          | For time-bound codes, the start date has to be in the future.                                                                                                                                                                         |
| **`name_length`**                   | The name of the code has some restrictions on length. When the `constraint_type` is `name_length`, the constraint object has one or two additional properties called `min_length` and `max_length` to specify the length constraints. |
