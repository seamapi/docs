# Creating Access Code CRUD Endpoints

## Overview

Access Codes CRUD endpoints Seam to list access codes created on a door lock.

### Listing Access Codes

After a Door Lock Owner logs in, Seam lists all the access codes programmed and shows them what's been programmed on the door lock. Your Door Locks system should return a JSON list of the access codes on a door lock.

{% swagger method="get" path="/access_codes?lock_id=<LOCK_ID>" baseUrl="https://devicecloud.example.com" summary="List all access codes for a lock" %}
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
            "lock_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            "owner_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
            "code": "1234",
            // Optional, but recommended
             "name": "Resident 001 Code"
        },
        {
            "access_code_id": "3043fde0-3c6d-4913-981f-2607f05fe743",
            "lock_id": "3043fde0-3c6d-4913-981f-2607f05fe74e",
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

Seam may request access code information to display information about an access code to the connecting user.

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

Seam needs to disable access codes. We need an endpoint to be able to remove an access code.

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
