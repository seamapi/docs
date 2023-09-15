# List Access Groups

{% swagger method="get" path="/acs/access_groups/list" baseUrl="https://connect.getseam.com" summary="Retrieves details of a thermostat" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="acs_system_id" required="true" %}
Id of System
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="acs_user_id" required="false" %}
Id of User to filter to access groups user is a member of
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```json
{
  "acs_systems": [
    {
      "acs_system_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "system_type": "pti_site",
      "system_type_display_name": "string",
      "name": "string",
      "created_at": "2023-09-15T21:10:51.280Z"
    }
  ],
  "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
```
{% endswagger-response %}
{% endswagger %}
