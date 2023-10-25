# Get Climate Setting Schedule

{% swagger method="get" path="/thermostats/climate_setting_schedules/get" baseUrl="https://connect.getseam.com" summary="Get a Climate Setting Schedule" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="climate_setting_schedule_id" required="true" %}
ID of the Climate Setting Schedule
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
<pre class="language-javascript"><code class="lang-javascript">{
  "climate_setting_schedule": {
    "climate_setting_schedule_id": "26d6138c-6524-4f3c-ac96-43cc3bea0a8d",
<strong>    "device_id": "123e4567-e89b-12d3-a456-426614174001",
</strong>    "name": "Guest Stay #1234",
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
  },
  "ok": true
}
</code></pre>
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
  "error": {
    "type": "invalid_input",
    "message": "'climate_setting_schedule_id' is required",
    "validation_errors": {
      "_errors": [
        "'climate_setting_schedule_id' or 'name' is required"
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
    "type": "climate_setting_schedule_not_found",
    "message": "Climate Setting Schedule not found",
    "request_id": "bf6643a3-a102-4f3b-b4c3-bd8cd1119ba2"
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
seam.climate_setting_schedules.get("123e4567-e89b-12d3-a456-426614174000")

# ClimateSettingSchedule:
#    climate_setting_schedule_id: 123e4567-e89b-12d3-a456-426614174000
#    device_id: 123e4567-e89b-12d3-a456-426614174001
#    name: Guest Stay #1234  
#    schedule_starts_at: 2022-07-01T10:40:00Z    
#    schedule_ends_at: 2022-07-10T10:40:00Z     
#    created_at: 2022-07-06T23:26:42.223Z      
#    is_set_on_device: False
#    automatic_heating_enabled: True
#    automatic_cooling_enabled: True  
#    hvac_mode_setting: heat_cool
#    cooling_set_point_fahrenheit: 75 
#    heating_set_point_fahrenheit: 65
#    manual_override_allowed: True
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
seam.climateSettingSchedules.get({
  climate_setting_schedule_id: "123e4567-e89b-12d3-a456-426614174000"
})

// {
//   "climate_setting_schedule_id": "123e4567-e89b-12d3-a456-426614174000",
//   "device_id": "123e4567-e89b-12d3-a456-426614174001",
//   "name": "Guest Stay #1234",
//   "schedule_starts_at": "2022-07-01T10:40:00Z",
//   "schedule_ends_at": "2022-07-10T10:40:00Z",
//   "created_at": "2022-07-06T23:26:42.223Z",
//   "is_set_on_device": false,
//   "automatic_heating_enabled": true,
//   "automatic_cooling_enabled": true,
//   "hvac_mode_setting": "heat_cool",
//   "cooling_set_point_fahrenheit": 75,
//   "heating_set_point_fahrenheit": 65,
//   "manual_override_allowed": false
// }
```
{% endtab %}
{% endtabs %}

### Parameters

| `climate_setting_schedule_id` | type: string | ID of the Climate Setting Schedule |
| ----------------------------- | ------------ | ---------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "climate_setting_schedule": {
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
    "manual_override_allowed": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
