---
description: Get all locks
---

# List Locks

Returns a list of all [locks](../../products/smart-locks/).

{% openapi src="https://connect.getseam.com/openapi.json" path="/locks/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endopenapi %}

***

## Request

List all locks or filter the list of locks by including the corresponding filter parameter in the request body.

### Request Body Parameters

<table><thead><tr><th width="264">Parameter</th><th width="133.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>connected_account_id</code></td><td>String<br><em>Optional</em></td><td>ID of the connected account.</td></tr><tr><td><code>connected_account_ids</code></td><td>String[]<br><em>Optional</em></td><td>IDs of the connected accounts.</td></tr><tr><td><code>connect_webview_id</code></td><td>String<br><em>Optional</em></td><td>ID of <a href="../../core-concepts/connect-webviews/">Connect Webview</a>.</td></tr><tr><td><code>device_type</code></td><td>String<br><em>Optional</em></td><td>Type of lock.</td></tr><tr><td><code>device_types</code></td><td>String[]<br><em>Optional</em></td><td>Types of locks.</td></tr><tr><td><code>manufacturer</code></td><td>String<br><em>Optional</em></td><td>Lock manufacturer.</td></tr><tr><td><code>device_ids</code></td><td>String[]<br><em>Optional</em></td><td>IDs of the locks to include.</td></tr><tr><td><code>limit</code></td><td>Number<br><em>Optional</em></td><td>Numerical limit on the number of locks to return.</td></tr><tr><td><code>created_before</code></td><td>String<br><em>Optional</em></td><td>Date threshold for locks to return. If specified, returns only locks created before the specified date.</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Optional</em></td><td>Your own internal user ID for the user by which to filter locks.</td></tr><tr><td><code>custom_metadata_has</code></td><td>JSON object<br><em>Optional</em></td><td>Set of key:value <a href="../../core-concepts/devices/adding-custom-metadata-to-a-device.md">custom metadata</a> pairs by which you want to filter locks.</td></tr></tbody></table>

***

## Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.locks.list()
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/locks/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{}'
```
{% endtab %}

{% tab title="JavaScript" %}
```typescript
await seam.locks.list()
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
client.locks.list()
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.Locks.List();
```
{% endtab %}

{% tab title="Java" %}
```java
seam.locks().list();
```
{% endtab %}
{% endtabs %}

## Response

Returns a `locks` array, in which each returned `lock` contains the set of applicable lock properties. For details, see [Locks](./).

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
[
  Lock(
    device_id='30fd243b-3054-4384-a713-5487076a3826',
    device_type='august_lock',
    location={
      'location_name': 'My House',
      'timezone': 'America/Los_Angeles'
    },
    properties={
      'august_metadata': {
        'has_keypad': True,
        'house_id': 'house-1',
        'house_name': 'My House',
        'keypad_battery_level': 'Not Available',
        'lock_id': 'lock-2',
        'lock_name': 'BACK DOOR'
      },
      'battery':{
        'level': 0.9999532347993827,
        'status': 'full'
      },
      'battery_level': 0.9999532347993827,
      'code_constraints': [],
      'door_open': False,
      'has_native_entry_events': True,
      'image_alt_text': 'August Wifi Smart Lock 3rd Gen, Silver, Front',
      'image_url': 'https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png',
      'locked': True,
      'manufacturer': 'august',
      'model':{
        'accessory_keypad_supported': True,
        'display_name': 'Lock',
        'manufacturer_display_name': 'August',
        'offline_access_codes_supported': False,
        'online_access_codes_supported': True
      },
      'name': 'BACK DOOR',
      'offline_access_codes_enabled': False,
      'online': True,
      'online_access_codes_enabled': True,
      'serial_number': '00000004-992d-45a0-bea1-9128fdcd8d12',
      'supported_code_lengths': [
        4,
        5,
        6,
        7,
        8
      ],
      'supports_accessory_keypad': True,
      'supports_backup_access_code_pool': True,
      'supports_offline_access_codes': False
    },
    capabilities_supported=[
      'access_code',
      'lock'
    ],
    errors=[],
    warnings=[],
    custom_metadata={
      'internal_account_id': 'user-1'
    },
    connected_account_id='f72442d2-2c16-4e3f-9882-6bff21828b1b',
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at='2023-10-28T09:13:08.465Z',
    is_managed=True
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "locks": [
    {
      "device_id": "30fd243b-3054-4384-a713-5487076a3826",
      "device_type": "august_lock",
      "capabilities_supported": [
        "access_code",
        "lock"
      ],
      "properties": {
        "locked": true,
        "online": true,
        "door_open": false,
        "manufacturer": "august",
        "battery_level": 0.9999532347993827,
        "serial_number": "00000004-992d-45a0-bea1-9128fdcd8d12",
        "august_metadata": {
          "lock_id": "lock-2",
          "house_id": "house-1",
          "lock_name": "BACK DOOR",
          "has_keypad": true,
          "house_name": "My House",
          "keypad_battery_level": "Not Available"
        },
        "supported_code_lengths": [
          4,
          5,
          6,
          7,
          8
        ],
        "has_native_entry_events": true,
        "supports_accessory_keypad": true,
        "online_access_codes_enabled": true,
        "offline_access_codes_enabled": false,
        "supports_offline_access_codes": false,
        "name": "BACK DOOR",
        "model": {
          "display_name": "Lock",
          "manufacturer_display_name": "August",
          "accessory_keypad_supported": true,
          "offline_access_codes_supported": false,
          "online_access_codes_supported": true
        },
        "battery": {
          "level": 0.9999532347993827,
          "status": "full"
        },
        "image_url": "https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png",
        "image_alt_text": "August Wifi Smart Lock 3rd Gen, Silver, Front",
        "code_constraints": [],
        "supports_backup_access_code_pool": true
      },
      "location": {
        "timezone": "America/Los_Angeles",
        "location_name": "My House"
      },
      "connected_account_id": "f72442d2-2c16-4e3f-9882-6bff21828b1b",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-10-28T09:13:08.465Z",
      "errors": [],
      "warnings": [],
      "custom_metadata": {
          "internal_account_id": "user-1"
      },
      "is_managed": true
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
[
  {
    device_id: '30fd243b-3054-4384-a713-5487076a3826',
    device_type: 'august_lock',
    capabilities_supported:[
      'access_code',
      'lock'
    ],
    properties: {
      locked: true,
      online: true,
      door_open: false,
      manufacturer: 'august',
      battery_level: 0.9999532347993827,
      serial_number: '00000004-992d-45a0-bea1-9128fdcd8d12',
      august_metadata: [Object],
      supported_code_lengths: [Array],
      has_native_entry_events: true,
      supports_accessory_keypad: true,
      online_access_codes_enabled: true,
      offline_access_codes_enabled: false,
      supports_offline_access_codes: false,
      name: 'BACK DOOR',
      model: [Object],
      battery: [Object],
      image_url: 'https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png',
      image_alt_text: 'August Wifi Smart Lock 3rd Gen, Silver, Front',
      code_constraints: [],
      supports_backup_access_code_pool: true
    },
    location:{
      timezone: 'America/Los_Angeles',
      location_name: 'My House'
    },
    connected_account_id: 'f72442d2-2c16-4e3f-9882-6bff21828b1b',
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at: '2023-10-28T09:13:08.465Z',
    errors: [],
    warnings: [],
    custom_metadata:{
      'internal_account_id': 'user-1'
    },
    is_managed: true
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
{% code overflow="wrap" %}
```
[
  <Seam::Lock:0x006b8
    device_id="30fd243b-3054-4384-a713-5487076a3826"
    device_type="august_lock"
    capabilities_supported=[
      "access_code",
      "lock"
    ]
    properties={
      "locked"=>true,
      "online"=>true,
      "door_open"=>false,
      "manufacturer"=>"august",
      "battery_level"=>0.9999532347993827,
      "serial_number"=>"00000004-992d-45a0-bea1-9128fdcd8d12",
      "august_metadata"=>{
        "lock_id"=>"lock-2",
        "house_id"=>"house-1",
        "lock_name"=>"BACK DOOR",
        "has_keypad"=>true,
        "house_name"=>"My House",
        "keypad_battery_level"=>"Not Available"
      },
      "supported_code_lengths"=>[
        4,
        5,
        6,
        7,
        8
      ],
      "has_native_entry_events"=>true,
      "supports_accessory_keypad"=>true,
      "online_access_codes_enabled"=>true,
      "offline_access_codes_enabled"=>false,
      "supports_offline_access_codes"=>false,
      "name"=>"BACK DOOR",
      "model"=>{
        "display_name"=>"Lock",
        "manufacturer_display_name"=>"August",
        "accessory_keypad_supported"=>true,
        "offline_access_codes_supported"=>false,
        "online_access_codes_supported"=>true
      },
      "battery"=>{
        "level"=>0.9999532347993827,
        "status"=>"full"
      },
      "image_url"=> "https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png",
      "image_alt_text"=>"August Wifi Smart Lock 3rd Gen, Silver, Front",
      "code_constraints"=>[],
      "supports_backup_access_code_pool"=>true
    }
    connected_account_id="f72442d2-2c16-4e3f-9882-6bff21828b1b"
    workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
    created_at=2023-10-28 09:13:08.465 UTC
    errors=[]
    warnings=[]
    custom_metadata={
      "internal_account_id"=>"user-1"
    }
    is_managed=true
  >,
  ...
]
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
```json
{
  "device_id": "30fd243b-3054-4384-a713-5487076a3826",
  "device_type": "august_lock",
  "capabilities_supported": [
    "access_code",
    "lock"
  ],
  "properties": {
    "online": true,
    "name": "BACK DOOR",
    "model": {
      "display_name": "Lock",
      "manufacturer_display_name": "August",
      "offline_access_codes_supported": false,
      "accessory_keypad_supported": true
    },
    "battery_level": 0.9999532,
    "battery": {
      "level": 0.9999532,
      "status": "full"
    },
    "manufacturer": "august",
    "image_url": "https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png",
    "image_alt_text": "August Wifi Smart Lock 3rd Gen, Silver, Front",
    "serial_number": "00000004-992d-45a0-bea1-9128fdcd8d12",
    "online_access_codes_enabled": true,
    "offline_access_codes_enabled": false,
    "supports_accessory_keypad": true,
    "supports_offline_access_codes": false,
    "august_metadata": {
      "lock_id": "lock-2",
      "lock_name": "BACK DOOR",
      "house_name": "My House",
      "has_keypad": true,
      "keypad_battery_level": "Not Available",
      "house_id": "house-1"
    },
    "code_constraints": [],
    "supported_code_lengths": [
      4.0,
      5.0,
      6.0,
      7.0,
      8.0
    ],
    "supports_backup_access_code_pool": true,
    "has_native_entry_events": true,
    "locked": true,
    "door_open": false
  },
  "location": {
    "location_name": "My House",
    "timezone": "America/Los_Angeles"
  },
  "connected_account_id": "f72442d2-2c16-4e3f-9882-6bff21828b1b",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "errors": [],
  "warnings": [],
  "custom_metadata": {
    "internal_account_id": "user-1"
  },
  "created_at": "2023-10-28T09:13:08.465Z",
  "is_managed": true
}
...
```
{% endtab %}

{% tab title="Java" %}
```json
[
  {
    "device_id" : "30fd243b-3054-4384-a713-5487076a3826",
    "device_type" : "august_lock",
    "capabilities_supported" : [
      "access_code",
      "lock"
    ],
    "properties" : {
      "online" : true,
      "name" : "BACK DOOR",
      "model" : {
        "display_name" : "Lock",
        "online_access_codes_supported" : true,
        "accessory_keypad_supported" : true,
        "offline_access_codes_supported" : false,
        "manufacturer_display_name" : "August"
      },
      "august_metadata" : {
        "lock_id" : "lock-2",
        "lock_name" : "BACK DOOR",
        "house_name" : "My House",
        "house_id" : "house-1",
        "has_keypad" : true,
        "keypad_battery_level" : "Not Available"
      },
      "offline_access_codes_enabled" : false,
      "battery_level" : 0.9999532347993827,
      "image_url" : "https://connect.getseam.com/assets/images/devices/august_wifi-smart-lock-3rd-gen_silver_front.png",
      "supports_accessory_keypad" : true,
      "serial_number" : "00000004-992d-45a0-bea1-9128fdcd8d12",
      "battery" : {
        "level" : 0.9999532347993827,
        "status" : "full"
      },
      "code_constraints" : [ ],
      "has_native_entry_events" : true,
      "image_alt_text" : "August Wifi Smart Lock 3rd Gen, Silver, Front",
      "manufacturer" : "august",
      "door_open" : false,
      "online_access_codes_enabled" : true,
      "supported_code_lengths" : [
        4,
        5,
        6,
        7,
        8
      ],
      "locked" : true,
      "supports_offline_access_codes" : false,
      "supports_backup_access_code_pool" : true
    },
    "location" : {
      "timezone" : "America/Los_Angeles",
      "location_name" : "My House"
    },
    "connected_account_id" : "f72442d2-2c16-4e3f-9882-6bff21828b1b",
    "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "custom_metadata": {
      "internal_account_id": "user-1"
    },
    "created_at" : "2023-10-28T09:13:08.465Z",
    "is_managed" : true
  },
  ...
]
```
{% endtab %}
{% endtabs %}
