# Creating the Health Endpoint

## Overview

Health endpoint for checking that the Service is up and running.

### Checking System Health

{% swagger method="get" path="/health" baseUrl="https://devicecloud.example.com" summary="Check System Health" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "ok": true
}
```
{% endswagger-response %}
{% endswagger %}
