---
description: Get all Unmanaged Devices
---

An unmanaged device has a limited set of visible properties, a subset of supported events, and may not be controlled. 
Convert it to a managed device to control it with Seam.

# List Unmanaged Devices

{% swagger method="get" path="/devices/unmanaged/list" baseUrl="https://connect.getseam.com" summary="Get a list of unmanaged devices" %}
{% swagger-description %}
Retrieve a list of unmanaged devices, optionally filtered
{% endswagger-description %}

{% swagger-parameter in="body" name="connected_account_id" %}
ID of Connected Account you'd like to filter by
{% endswagger-parameter %}

{% swagger-parameter in="body" name="connect_webview_id" %}
ID of Connect Webview you'd like to filter by
{% endswagger-parameter %}

{% swagger-parameter in="body" name="device_type" %}
Type of Device you'd like to filter with
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
  "devices": [
    {
      "device_id": "6b0afc38-7883-4efd-a31d-fccf6c04d809",
      "device_type": "schlage_lock",
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.759Z",
      "errors": [],
      "warnings": []
    },
    {
      "device_id": "2aa2c8e6-a255-4548-96fd-8eac38ca031d",
      "device_type": "schlage_lock",
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.476Z",
      "errors": [],
      "warnings": []
    },
    {
      "device_id": "70ad4408-78dd-4e29-b0c0-c8f9eb4478d1",
      "device_type": "schlage_lock",
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.618Z",
      "errors": [],
      "warnings": []
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
seam.devices.unmanaged.list()

# [
#     {
#         "device_id": "123e4567-e89b-12d3-a456-426614174000",
#         "device_type": "SCHLAGE_LOCK",
#         "errors": [],
#     }
# ]
```
{% endtab %}

{% tab title="Javascript" %}
```typescript
await seam.devices.unmanaged.list()

/*
[
  {
    device_id: "70ad4408-78dd-4e29-b0c0-c8f9eb4478d1",
    device_type: "schlage_lock",
    connected_account_id: "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
    workspace_id: "f97073eb-c003-467a-965b-e6dba3a0131d",
    created_at: "2022-08-24T10:38:05.618Z",
    errors: [],
    warnings: []
  }
]
*/
```
{% endtab %}
{% endtabs %}

### Parameters

| `connected_account_id` | <p>type: string<br>Optional</p>   | <p><br>ID of the Connected Account</p> |
| ---------------------- | --------------------------------- | -------------------------------------- |
| `connected_account_ids` | <p>type: string[]<br>Optional</p>   | <p><br>IDs of the Connected Accounts</p> |
| `connect_webview_id`   | <p>type: string<br>Optional</p>   | ID of Connect Webview                  |
| `device_type`         | <p>type: String<br>Optional</p>   | Device type                        |
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
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.759Z",
      "errors": [],
      "warnings": []
    },
    {
      "device_id": "2aa2c8e6-a255-4548-96fd-8eac38ca031d",
      "device_type": "schlage_lock",
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.476Z",
      "errors": [],
      "warnings": []
    },
    {
      "device_id": "70ad4408-78dd-4e29-b0c0-c8f9eb4478d1",
      "device_type": "schlage_lock",
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "created_at": "2022-08-24T10:38:05.618Z",
      "errors": [],
      "warnings": []
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
