---
description: Get a Device by its ID
---

# Get Device

## Get a Device

{% swagger method="get" path="/devices/get" baseUrl="https://connect.getseam.com" summary="Get a device" %}
{% swagger-description %}
Retrieve a single device from your workspace using a device_id or a filter
{% endswagger-description %}

{% swagger-parameter in="query" name="device_id" required="true" %}
Device id
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "device": {
    "device_id": "6b0afc38-7883-4efd-a31d-fccf6c04d809",
    "device_type": "schlage_lock",
    "capabilities_supported": [],
    "properties": {
      "locked": false,
      "online": true,
      "battery_level": 0.48,
      "schlage_metadata": {
        "device_id": "device-3",
        "device_name": "GARAGE"
      },
      "name": "GARAGE"
    },
    "location": null,
    "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2022-08-24T10:38:05.759Z",
    "errors": []
  },
  "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Invalid uuid for provided \"device_id\"",
    "validation_errors": {
      "_errors": [],
      "device_id": {
        "_errors": [
          "Invalid uuid"
        ]
      }
    },
    "request_id": "73b3bd10-365c-4bb9-927f-0202d6b06023"
  },
  "ok": false
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
  "error": {
    "type": "device_not_found",
    "message": "device not found",
    "data": {
      "device_id": "a53690b2-2b70-409a-9a94-426699b84c97"
    },
    "request_id": "e57b4b09-90f0-487a-8d50-3bec8af8792e"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.devices.get("123e4567-e89b-12d3-a456-426614174000")

# Device(
#   device_id='a83690b2-2b70-409a-9a94-426699b84c97', 
#   device_type='schlage_lock', 
#   location=None, 
#   properties={
#     'locked': False, 
#     'online': True, 
#     'battery_level': 0.48, 
#     'manufacturer': 'schlage',
#     'schlage_metadata': {
#       'device_id': 'device-3', 
#       'device_name': 'GARAGE'
#       }, 
#     'name': 'GARAGE'
#     }, 
#   capabilities_supported=[], 
#   errors=[]
#   )


```
{% endtab %}

{% tab title="Javascript" %}
```typescript
await seam.devices.get({device_id:"123e4567-e89b-12d3-a456-426614174000"})

/*
{
  device_id: 'a83690b2-2b70-409a-9a94-426699b84c97',
  device_type: 'schlage_lock',
  capabilities_supported: [],
  properties: {
    locked: false,
    online: true,
    battery_level: 0.48,
    manufacturer: 'schlage',
    schlage_metadata: { device_id: 'device-3', device_name: 'GARAGE' },
    name: 'GARAGE'
  },
  location: null,
  connected_account_id: 'b0be0837-29c2-4cb1-8560-42dfd07fb877',
  workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
  created_at: '2022-08-24T11:14:37.116Z',
  errors: []
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.devices.get("123e4567-e89b-12d3-a456-426614174000")

# <Seam::Device:0x00764f8                                             
#   device_id="e002825a-27ee-4d74-9be3-45564b14c931"                  
#   device_type="smartthings_lock"                                    
#   properties={
#     "locked"=>true,
#     "online"=>true,
#     "battery_level"=>1,
#     "manufacturer"=>"yale",
#     "smartthings_metadata"=>{
#       "device_id"=>"83b32603-e36a-416b-a06e-78215223df98",
#       "device_name"=>"Yale Door Lock"}, 
#     "supported_code_lengths": [
#       6
#     ],
#     "name"=>"Yale Door Lock"}>
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id` | type: string | <p>Device ID</p> |
| ----------- | ------------ | -------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "device": {
    "device_id": "6b0afc38-7883-4efd-a31d-fccf6c04d809",
    "device_type": "schlage_lock",
    "capabilities_supported": [],
    "properties": {
      "locked": false,
      "online": true,
      "battery_level": 0.48,
      "manufacturer": "schlage",
      "schlage_metadata": {
        "device_id": "device-3",
        "device_name": "GARAGE"
      },
      "supported_code_lengths": [
        6
      ],      
      "name": "GARAGE"
    },
    "location": null,
    "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2022-08-24T10:38:05.759Z",
    "errors": []
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
