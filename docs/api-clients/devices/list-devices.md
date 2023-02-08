# List Devices

## List Devices

{% swagger method="get" path="/devices/list" baseUrl="https://connect.getseam.com" summary="Get a list of devices" %}
{% swagger-description %}
Retrieve a list of devices, optionally filtered
{% endswagger-description %}

{% swagger-parameter in="body" name="connected_account_id" %}
ID of Connected Account you'd like to filter by
{% endswagger-parameter %}

{% swagger-parameter in="body" name="connect_webview_id" %}
ID of Connect Webview you'd like to filter by
{% endswagger-parameter %}

{% swagger-parameter in="body" name="workspace_id" %}
ID of Workspace you'd like to filter with
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "devices": [
    {
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
    {
      "device_id": "2aa2c8e6-a255-4548-96fd-8eac38ca031d",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-1",
          "device_name": "FRONT DOOR"
        },
        "name": "FRONT DOOR"
      },
      "location": null,
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.476Z",
      "errors": []
    },
    {
      "device_id": "70ad4408-78dd-4e29-b0c0-c8f9eb4478d1",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-2",
          "device_name": "BACK DOOR"
        },
        "name": "BACK DOOR"
      },
      "location": null,
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.618Z",
      "errors": []
    }
  ],
  "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.devices.list()

# [
#     {
#         "device_id": "123e4567-e89b-12d3-a456-426614174000",
#         "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
#         "properties": {},
#         "location": {},
#         "manufacturer": "schlage",
#         "device_type": "SCHLAGE_LOCK",
#         "third_party_account_id": "123e4567-e89b-12d3-a456-426614174000",
#         "name": "Workspace 1",
#         "is_sandbox": false
#     }
# ]
```
{% endtab %}

{% tab title="Javascript" %}
```typescript
await seam.devices.list()

/*
[
    {
        "device_id": "123e4567-e89b-12d3-a456-426614174000",
        "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
        "properties": {},
        "location": {},
        "device_type": "SCHLAGE_LOCK",
        "third_party_account_id": "123e4567-e89b-12d3-a456-426614174000",
        "name": "Workspace 1",
        "is_sandbox": false
    }
]
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.devices.list

# [<Seam::Device:0x00764f8                                             
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
#     "name"=>"Yale Door Lock"}>]
```
{% endtab %}
{% endtabs %}

### Parameters

| `connected_account_id` | <p>type: string<br>Optional</p>   | <p><br>ID of the Connected Account</p> |
| ---------------------- | --------------------------------- | -------------------------------------- |
| `connect_webview_id`   | <p>type: string<br>Optional</p>   | ID of Connect Webview                  |
| `workspace_id`         | <p>type: String<br>Optional</p>   | ID of Workspace                        |
| `manufacturer`         | <p>type: String<br>Optional</p>   | Device manufacturer                    |
| `device_ids`           | <p>type: string[]<br>Optional</p> | IDs of the Devices to include          |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "devices": [
    {
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
        "name": "GARAGE"
      },
      "location": null,
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.759Z",
      "errors": []
    },
    {
      "device_id": "2aa2c8e6-a255-4548-96fd-8eac38ca031d",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "manufacturer": "schlage",
        "schlage_metadata": {
          "device_id": "device-1",
          "device_name": "FRONT DOOR"
        },
        "name": "FRONT DOOR"
      },
      "location": null,
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.476Z",
      "errors": []
    },
    {
      "device_id": "70ad4408-78dd-4e29-b0c0-c8f9eb4478d1",
      "device_type": "schlage_lock",
      "capabilities_supported": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "manufacturer": "schlage",
        "schlage_metadata": {
          "device_id": "device-2",
          "device_name": "BACK DOOR"
        },
        "name": "BACK DOOR"
      },
      "location": null,
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.618Z",
      "errors": []
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
