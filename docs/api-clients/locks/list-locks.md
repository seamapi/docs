---
description: Get all Locks on your Account
---

# List Locks

{% swagger method="get" path="/locks/list" baseUrl="https://connect.getseam.com" summary="List Locks for Device" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "locks": [
    {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-3",
          "device_name": "GARAGE"
        },
        "name": "Front Door"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:37.116Z",
      "errors": []
    },
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.978Z",
      "errors": []
    },
    {
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.792Z",
      "errors": []
    }
  ],
  "devices": [
    {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-3",
          "device_name": "GARAGE"
        },
        "name": "Front Door"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:37.116Z",
      "errors": []
    },
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.978Z",
      "errors": []
    },
    {
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.792Z",
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
seam.locks.list()

# [
#     {
#         "device_id": "123e4567-e89b-12d3-a456-426614174000",
#         "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
#         "properties": {},
#         "location": {},
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
await seam.locks.list()

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
seam.locks.list

# [<Seam::Device:0x00764f8                                             
#   device_id="e002825a-27ee-4d74-9be3-45564b14c931"                  
#   device_type="smartthings_lock"                                    
#   properties={
#     "locked"=>true,
#     "online"=>true,
#     "battery_level"=>1,
#     "smartthings_metadata"=>{
#       "device_id"=>"83b32603-e36a-416b-a06e-78215223df98",
#       "device_name"=>"Yale Door Lock"}, 
#     "name"=>"Yale Door Lock"}>]
```
{% endtab %}
{% endtabs %}



### Parameters

| `connected_account_id` | <p>type: string<br>Optional</p> | <p><br>ID of the Connected Account</p> |
| ---------------------- | ------------------------------- | -------------------------------------- |
| `connect_webview_id`   | <p>type: string<br>Optional</p> | ID of Connect Webview                  |
| `workspace_id`         | <p>type: String<br>Optional</p> | ID of Workspace                        |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "locks": [
    {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-3",
          "device_name": "GARAGE"
        },
        "name": "Front Door"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:37.116Z",
      "errors": []
    },
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.978Z",
      "errors": []
    },
    {
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.792Z",
      "errors": []
    }
  ],
  "devices": [
    {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
      "properties": {
        "locked": false,
        "online": true,
        "battery_level": 0.48,
        "schlage_metadata": {
          "device_id": "device-3",
          "device_name": "GARAGE"
        },
        "name": "Front Door"
      },
      "location": null,
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:37.116Z",
      "errors": []
    },
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.978Z",
      "errors": []
    },
    {
      "device_id": "65803a1c-866b-45ed-94d5-496b40e4cc4d",
      "device_type": "schlage_lock",
      "enabled_capabilities": [],
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
      "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T11:14:36.792Z",
      "errors": []
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
