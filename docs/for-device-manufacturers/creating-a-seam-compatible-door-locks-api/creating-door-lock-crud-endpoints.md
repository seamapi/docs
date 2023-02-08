# Creating Door Lock CRUD Endpoints

## Overview

Door Lock CRUD endpoints Seam to list door locks owned by a Door Lock Owner and trigger the door lock to open a door.

### Listing Door Locks

After a Door Lock Owner logs in, Seam lists all the door locks they own and allows them to enable delivery on them. Your API should return a JSON list of door locks.

{% swagger method="get" path="/locks" baseUrl="https://devicecloud.example.com" summary="List all locks owned by Lock Owner" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="List of Locks in JSON" %}
```javascript
{
    "locks": [
        {
            "lock_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            // Optional, but recommended
            "name": "Office Front Door",
            "model": "example_model",
            "address": "123 Amy Lane, CA, 94110, United States"
        },
        {
            "lock_id": "1c33d4cf-e178-4c06-8a9a-aadd6dc5a804",
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

### Getting a Lock

Seam may request door lock information to display information about the lock to the connecting user.

{% swagger method="get" path="/locks/<LOCK_ID>" baseUrl="https://devicecloud.example.com" summary="Get information about a single lock" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="LOCK_ID" required="true" %}
Identifier for Lock
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="A single lock JSON object" %}
```javascript
{
  "lock_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
  // Optional, but recommended
  "name": "Office Front Door",
  "model": "example_model",
  "address": "123 Amy Lane, CA, 94110, United States"
}
```
{% endswagger-response %}
{% endswagger %}

### Unlocking a Door Lock

Seam unlocks doors to let in delivery people. If a door is disconnected or you're unable to unlock the door, return HTTP status code `500` with some details (see example below)

{% swagger method="post" path="/locks/<LOCK_ID>/unlock" baseUrl="https://devicecloud.example.com" summary="Temporary unlock the door for a delivery person" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Content-Type" required="true" %}
application/json
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

### Other Door Lock Features

You may want to include additional features for your lock, such as configuring settings that are useful for delivery or apartment management. If you add additional endpoints, you should keep a similar URL format `/locks/<LOCK_ID>/<SOME_PROPERTY_OR_FUNCTION>`
