# Creating Access Code CRUD Endpoints

## Overview

Access Codes CRUD endpoints Seam to list access codes created on an intercom.

### Listing Access Codes

After an Intercom Owner logs in and , Seam lists all the access codes that have been programmed  and allows them to enable delivery on them. Your Intercom system should return a JSON list of intercoms.

{% swagger method="get" path="/access_codes?intercom_id=<INTERCOM_ID>" baseUrl="https://devicecloud.example.com" summary="List all access codes for an intercom" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="List of Access Codes in JSON" %}
```javascript
{
    "access_codes": [
        {
            "access_code_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            "intercom_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            "owner_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            "code": "1234",
            // Optional, but recommended
             "name": "Resident 001 Code"
        },
        {
            "access_code_id": "3043fde0-3c6d-4913-981f-2607f05fe743",
            "intercom_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            "owner_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            "code": "2345",
            // Optional, but recommended
             "name": "Resident 002 Code"
        },
    ]
}
```
{% endswagger-response %}
{% endswagger %}

### Getting an Access Code

Seam may request intercom information to display information about the intercom to the connecting user.

{% swagger method="get" path="/access_codes/<ACCESS_CODE_ID>" baseUrl="https://devicecloud.example.com" summary="Get information about a single access code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-parameter in="query" name="ACCESS_CODE_ID" required="true" %}
Identifier for Access Code
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="A single access code JSON object" %}
```javascript
{
  "access_code_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
  "intercom_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
  "owner_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
  "code": "1234",
  // Optional, but recommended
  "name": "Resident 001 Code"
}
```
{% endswagger-response %}
{% endswagger %}

### Removing an Access Code

Seam unlocks doors to let in delivery people. If a door is disconnected or you're unable to unlock the door, return HTTP status code `500` with some details (see example below)

{% swagger method="delete" path="/access_codes/<ACCESS_CODE_ID>" baseUrl="https://devicecloud.example.com" summary="Remove an access code" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <access_token>
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Content-Type" required="true" %}
application/json
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Access Code successfully removed." %}
```javascript
{
    "ok": true
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="Something went wrong removing the access code." %}
```javascript
{
    "error_id": "ACCESS_CODE_REMOVAL_FAILED",
    "error_message": "Unexpected Server Error"
}
```
{% endswagger-response %}
{% endswagger %}
