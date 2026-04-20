# Creating Intercom CRUD Endpoints

## Overview

Intercom CRUD endpoints Seam to list intercoms owned by an Intercom Owner and trigger the intercom to open a door.

### Listing Intercoms

After an Intercom Owner logs in, Seam lists all the intercoms they own and allows them to enable delivery on them. Your Intercom system should return a JSON list of intercoms.

{% swagger method="get" path="/door_locks" baseUrl="https://devicecloud.example.com" summary="List all intercoms owned by Intercom Owner" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="List of Intercoms in JSON" %}
```javascript
{
    "intercoms": [
        {
            "intercom_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            // Optional, but recommended
            "name": "Office Front Door",
            "model": "example_model",
            "address": "123 Amy Lane, CA, 94110, United States"
        },
        {
            "intercom_id": "1c33d4cf-e178-4c06-8a9a-aadd6dc5a804",
            // Optional, but recommended
            "name": "Back Door",
            "model": "example_model",
            "address": "999 Louis Lane, CA, 94110, United States"
        }
    ]
}
```
{% endswagger-response %}
{% endswagger %}

### Getting an Intercom

Seam may request intercom information to display information about the intercom to the connecting user.

{% swagger method="get" path="/intercoms/<INTERCOM_ID>" baseUrl="https://devicecloud.example.com" summary="Get information about a single intercom" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="INTERCOM_ID" required="true" %}
Identifier for Intercom
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="A single intercom JSON object" %}
```javascript
{
  "intercom_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
  // Optional, but recommended
  "name": "Office Front Door",
  "model": "example_model",
  "address": "123 Amy Lane, CA, 94110, United States"
}
```
{% endswagger-response %}
{% endswagger %}

### Unlocking an Intercom Door

Seam unlocks doors to let in delivery people. If a door is disconnected or you're unable to unlock the door, return HTTP status code `500` with some details (see example below)

{% swagger method="post" path="/intercoms/<DOOR_LOCK_ID>/unlock" baseUrl="https://devicecloud.example.com" summary="Temporary unlock the door for a delivery person" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Content-Type" required="true" %}
application/json
{% endswagger-parameter %}

{% swagger-parameter in="body" required="true" name="unlock_time" %}
Time in milliseconds the door should stay unlocked for
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Door successfully unlocked" %}
```javascript
{
    "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="Something went wrong unlocking the door." %}
```javascript
{
    "error_id": "INTERCOM_DISCONNECTED",
    "error_message": "Intercom is disconnected"
}
```
{% endswagger-response %}
{% endswagger %}

### Other Intercom Features

You may want to include additional features for your intercom, such as configuring settings that are useful for delivery or apartment management. If you add additional endpoints, you should keep a similar URL format `/intercoms/<INTERCOM_ID>/<SOME_PROPERTY_OR_FUNCTION>`
