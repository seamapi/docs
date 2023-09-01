# List Climate Setting Schedules

{% swagger method="get" path="/climate_setting_schedules/list" baseUrl="https://connect.getseam.com" summary="Get list of Climate Setting Schedules" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="device_id" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
  "climate_setting_schedules": [
    {
      "climate_setting_schedule_id": "123e4567-e89b-12d3-a456-426614174000",
      "device_id": "123e4567-e89b-12d3-a456-426614174001",
      "name": "Guest Stay #1234",
      "schedule_starts_at": "2022-07-01T10:40:00Z",
      "schedule_ends_at": "2022-07-10T10:40:00Z",
      "created_at": "2022-07-06T23:26:42.223Z",
      "is_set_on_device": false,
      "automatic_heating_enabled": true,
      "automatic_cooling_enabled": true,
      "hvac_mode_setting": "heat_cool",
      "cooling_set_point_fahrenheit": 75,
      "heating_set_point_fahrenheit": 65,
      "manual_override_allowed": false
    }
  ],
  "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "Required for provided \"device_id\"",
    "validation_errors": {
      "_errors": [],
      "device_id": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "d7e371b4-b4d2-4373-93be-5e9e9e934aed"
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
    "request_id": "0cc082c2-d1fa-4fba-b8d5-80ae1e9a7839"
  },
  "ok": false
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python">device_id="123e4567-e89b-12d3-a456-426614174001"
seam.climate_setting_schedules.list(device_id)
<strong>
</strong># [
#   ClimateSettingSchedule:
#      climate_setting_schedule_id: 26d6138c-6524-4f3c-ac96-43cc3bea0a8d  
#      device_id: 123e4567-e89b-12d3-a456-426614174001
#      name: Guest Stay #1234        
#      ...
#   ClimateSettingSchedule:    
#      climate_setting_schedule_id: a83690b2-2b70-409a-9a94-426699b84c97
#      device_id: 123e4567-e89b-12d3-a456-426614174001    
#      name: Guest Stay #5678
#      ...
# ]
</code></pre>
{% endtab %}

{% tab title="Javascript" %}
<pre class="language-javascript"><code class="lang-javascript">await seam.climateSettingSchedules.list({
    device_id: "a83690b2-2b70-409a-9a94-426699b84c97",
});
<strong>
</strong><strong>/*
</strong>{
  "climate_setting_schedules": [
    {
      "climate_setting_schedule_id": "123e4567-e89b-12d3-a456-426614174000",
      "device_id": "123e4567-e89b-12d3-a456-426614174001",
      "name": "Guest Stay #1234",
      "schedule_starts_at": "2022-07-01T10:40:00Z",
      "schedule_ends_at": "2022-07-10T10:40:00Z",
      "created_at": "2022-07-06T23:26:42.223Z",
      "is_set_on_device": false,
      "automatic_heating_enabled": true,
      "automatic_cooling_enabled": true,
      "hvac_mode_setting": "heat_cool",
      "cooling_set_point_fahrenheit": 75,
      "heating_set_point_fahrenheit": 65,
      "manual_override_allowed": false
    }
  ],
  "ok": true
}
*/
</code></pre>
{% endtab %}
{% endtabs %}

### Parameters

| `device_id` | type: string | ID of Device connected to account |
| ----------- | ------------ | --------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "climate_setting_schedules": [
    {
      "climate_setting_schedule_id": "123e4567-e89b-12d3-a456-426614174000",
      "device_id": "123e4567-e89b-12d3-a456-426614174001",
      "name": "Guest Stay #1234",
      "schedule_starts_at": "2022-07-01T10:40:00Z",
      "schedule_ends_at": "2022-07-10T10:40:00Z",
      "created_at": "2022-07-06T23:26:42.223Z",
      "is_set_on_device": false,
      "automatic_heating_enabled": true,
      "automatic_cooling_enabled": true,
      "hvac_mode_setting": "heat_cool",
      "cooling_set_point_fahrenheit": 75,
      "heating_set_point_fahrenheit": 65,
      "manual_override_allowed": false
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
