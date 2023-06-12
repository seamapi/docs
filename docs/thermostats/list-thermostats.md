---
description: List all the thermostats
---

# List Thermostats

{% swagger method="get" path="/thermostats/list" baseUrl="https://connect.getseam.com" summary="List all Thermostats" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="connected_account_id" %}
ID of the Connected Account the thermostats belongs to
{% endswagger-parameter %}

{% swagger-parameter in="query" name="connected_account_ids" type="Array<String>" %}
IDs of the Connected Accounts the thermostats belongs to
{% endswagger-parameter %}

{% swagger-parameter in="query" name="connect_webview_id" %}
ID of the Connect Webview that was used to connect the thermostats
{% endswagger-parameter %}

{% swagger-parameter in="query" name="device_type" %}
Filter the thermostats by their device account type
{% endswagger-parameter %}

{% swagger-parameter in="query" name="manufacturer" %}
Filter the thermostats by their manufacturer
{% endswagger-parameter %}

{% swagger-parameter in="query" name="device_ids" %}
The Device IDs of the thermostats
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
  "thermostats": [
    {
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
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
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
  ]
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.thermostats.list()

# [
#     {
#       "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
#       "device_type": "ecobee_thermostat",
#       "capabilities_supported": ["thermostat"],
#       "properties": {
#         "name": "Entryway",
#         "online": true,
#         "relative_humidity": 0.36,
#         "temperature_fahrenheit": 70,
#         "can_enable_automatic_cooling": true,
#         "can_enable_automatic_heating": true,
#         "available_hvac_mode_settings": [
#           "cool",
#           "heat",
#           "heatcool",
#           "off"
#         ],
#         "current_climate_setting": {
#           "automatic_heating_enabled": true,
#           "automatic_cooling_enabled": true,
#           "hvac_mode_setting": "heatcool",
#           "cooling_set_point_fahrenheit": 75,
#           "heating_set_point_fahrenheit": 65,
#           "manual_override_allowed": false 
#         }
#       },
#       "location": null,
#       "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
#       "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
#       "created_at": "2023-06-01T11:14:37.116Z",
#       "errors": []
#     },
#     {
#       "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
#       "device_type": "ecobee_thermostat",
#       "capabilities_supported": ["thermostat"],
#       "properties": {
#         "name": "Entryway",
#         "online": true,
#         "relative_humidity": 0.36,
#         "temperature_fahrenheit": 70,
#         "can_enable_automatic_cooling": true,
#         "can_enable_automatic_heating": true,
#         "available_hvac_mode_settings": [
#           "cool",
#           "heat",
#           "heatcool",
#           "off"
#         ],
#         "current_climate_setting": {
#           "automatic_heating_enabled": true,
#           "automatic_cooling_enabled": true,
#           "hvac_mode_setting": "heatcool",
#           "cooling_set_point_fahrenheit": 75,
#           "heating_set_point_fahrenheit": 65,
#           "manual_override_allowed": false 
#         }
#       },
#       "location": null,
#       "connected_account_id": "b0be0837-29c2-4cb1-8560-42dfd07fb877",
#       "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
#       "created_at": "2023-06-01T11:14:37.116Z",
#       "errors": []
#     }
#   ]

```
{% endtab %}

{% tab title="Javascript" %}
<pre class="language-typescript"><code class="lang-typescript">await seam.thermostats.list()

/*
[
<strong>  {
</strong>    "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
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
  {
    "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
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
]
*/
</code></pre>
{% endtab %}
{% endtabs %}



### Parameters

| `connected_account_id`  | <p>type: string<br>Optional</p>             | ID of the Connected Account the thermostats belong to   |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------- |
| `connected_account_ids` | <p>type: Array&#x3C;string><br>Optional</p> | IDs of the Connected Accounts the thermostats belong to |
| `connect_webview_id`    | <p>type: string<br>Optional</p>             | ID of Connect Webview                                   |
| `device_type`           | <p>type: string<br>Optional</p>             | The account type of the thermostats we want to retrieve |
| `manufacturer`          | <p>type: String<br>Optional</p>             | ID of Workspace                                         |
| `device_ids`            | <p>type: Array&#x3C;string><br>Optional</p> | Device IDs of the thermostats we want to retrieve       |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "thermostats": [
    {
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
    {
      "device_id": "a3f30bd2-f6d7-4bad-ba89-1bad3bf1bce4",
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
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
