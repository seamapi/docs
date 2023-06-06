# Delete Climate Setting Schedule

{% swagger method="delete" path="/climate_setting_schedules/delete" baseUrl="https://connect.getseam.com" summary="Delete a Climate Setting Schedule" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="climate_setting_schedule_id" required="true" %}
ID of the Climate Setting Schedule to be deleted.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Returns an Action Attempt" %}
```javascript
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_CLIMATE_SETTING_SCHEDULE",
    "action_attempt_id": "6a5e05e3-fd92-4211-aecb-ac53f1382ea1",
    "result": null,
    "error": null
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
    "message": "Required for provided \"climate_setting_schedule_id\"",
    "validation_errors": {
      "_errors": [],
      "climate_setting_schedule_id": {
        "_errors": [
          "Required"
        ]
      }
    },
    "request_id": "33d23234-4d59-4321-b495-01dec55ee145"
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
    "message": "Could not find a climate setting schedule with climate_setting_schedule_id",
    "data": {
      "climate_setting_schedule_id": "a9f662a7-44fb-4b91-b7a8-22c0f996bfc1"
    },
    "request_id": "dc6427ed-b493-4cb3-b81b-b1c9a50f18fd"
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
seam.climate_setting_schedules.delete("123e4567-e89b-12d3-a456-426614174000")

# ActionAttempt(
#   action_attempt_id='9b9aa024-2502-42a3-96d1-aed9606fde1b', 
#   action_type='DELETE_CLIMATE_SETTING_SCHEDULE', 
#   status='success', 
#   result={}, 
#   error=None
# )
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.climateSettingSchedules.delete({
    climate_setting_schedule_id: "123e4567-e89b-12d3-a456-426614174000",
});

//{}
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
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_CLIMATE_SETTING_SCHEDULE",
    "action_attempt_id": "6a5e05e3-fd92-4211-aecb-ac53f1382ea1",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
