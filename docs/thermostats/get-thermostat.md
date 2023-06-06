---
description: Get a Thermostat on your account by its Device ID
---

# Get Thermostat

{% swagger method="get" path="/thermostats/get" baseUrl="https://connect.getseam.com" summary="Get a Thermostat" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="device_id" required="false" %}
ID of Device
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="name" %}
Name of the Device
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
  "thermostat": {
    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": true,
      "relative_humidity": 0.36,
      "temperature_fahrenheit": 70,
      "can_enable_automatic_cooling": true,
      "can_enable_automatic_heating": true,
      "available_hvac_mode_settings": [
        "cool",
        "heat",
        "heatcool",
        "off"
      ],
      "current_climate_setting": {
        "automatic_heating_enabled": true,
        "automatic_cooling_enabled": true,
        "hvac_mode_setting": "heatcool",
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 65,
        "manual_override_allowed": false 
      }
    },
    "location": null,
    "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2023-06-01T11:14:37.116Z",
    "errors": []
  }
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Either 'device_id' or 'name' is required",
    "validation_errors": {
      "_errors": [
        "Either 'device_id' or 'name' is required"
      ]
    },
    "request_id": "802ee381-b068-4b9d-a722-bae968de9174"
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
    "message": "Device not found",
    "data": {
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97"
    },
    "request_id": "8e730f9a-5b56-41aa-ad78-86a1a7b82e0a"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python">from seamapi import Seam

seam = Seam()
device_id = "123e4567-e89b-12d3-a456-426614174000"
thermostat = seam.thermostats.get(device_id)

print(thermostat)

# Thermostat(
#     device_id="123e4567-e89b-12d3-a456-426614174000",
<strong>#     device_type="ecobee_thermostat",
</strong>#     capabilities_supported=["thermostat"], 
#     properties={
#         "name": "Entryway",
#         "online": True,
#         "relative_humidity": 0.36,
#         "temperature_fahrenheit": 70,
#         "can_enable_automatic_cooling": True,
#         "can_enable_automatic_heating": True,
#         "available_hvac_mode_settings": [
#             "cool",
#             "heat",
<strong>#             "heatcool",
</strong>#             "off"
#         ],
#         "current_climate_setting": {
#             "automatic_heating_enabled": True,
<strong>#             "automatic_cooling_enabled": True,
</strong>#             "hvac_mode_setting": "heatcool",
#             "cooling_set_point_fahrenheit": 75,
#             "heating_set_point_fahrenheit": 65,
<strong>#             "manual_override_allowed": False  
</strong>#         }
#     },
#     location=None,
#     connected_account_id="123e4567-e89b-12d3-a456-426614174001",
#     workspace_id="123e4567-e89b-12d3-a456-426614174002",
#     created_at="2023-06-01T11:14:37.116Z",
#     errors=[]
# )
</code></pre>
{% endtab %}

{% tab title="Javascript" %}
```typescript
import Seam from "seamapi"

const seam = Seam()
const deviceId = "123e4567-e89b-12d3-a456-426614174000"
const device = await seam.thermostats.get({device_id: deviceId})

console.log(device)

/*
{
  "thermostat": {
    "device_id": "123e4567-e89b-12d3-a456-426614174000",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": true,
      "relative_humidity": 0.36,
      "temperature_fahrenheit": 70,
      "can_enable_automatic_cooling": true,
      "can_enable_automatic_heating": true,
      "available_hvac_mode_settings": [
        "cool",
        "heat",
        "heatcool",
        "off"
      ],
      "current_climate_setting": {
        "automatic_heating_enabled": true,
        "automatic_cooling_enabled": true,
        "hvac_mode_setting": "heatcool",
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 65,
        "manual_override_allowed": false 
      }
    },
    "location": null,
    "connected_account_id": "123e4567-e89b-12d3-a456-426614174001",
    "workspace_id": "123e4567-e89b-12d3-a456-426614174002",
    "created_at": "2023-06-01T11:14:37.116Z",
    "errors": []
  }
}
*/
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_id` | type: string | ID of the Device   |
| ----------- | ------------ | ------------------ |
| `name`      | type: string | Name of the Device |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "thermostat": {
    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
    "device_type": "ecobee_thermostat",
    "capabilities_supported": ["thermostat"],
    "properties": {
      "name": "Entryway",
      "online": true,
      "relative_humidity": 0.36,
      "temperature_fahrenheit": 70,
      "can_enable_automatic_cooling": true,
      "can_enable_automatic_heating": true,
      "available_hvac_mode_settings": [
        "cool",
        "heat",
        "heatcool",
        "off"
      ],
      "current_climate_setting": {
        "automatic_heating_enabled": true,
        "automatic_cooling_enabled": true,
        "hvac_mode_setting": "heatcool",
        "cooling_set_point_fahrenheit": 75,
        "heating_set_point_fahrenheit": 65,
        "manual_override_allowed": false 
      }
    },
    "location": null,
    "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "created_at": "2023-06-01T11:14:37.116Z",
    "errors": []
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
