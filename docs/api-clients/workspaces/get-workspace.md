---
description: Retrieve the Workspace that is associated with an API Key
---

# Get Workspace

{% swagger method="get" path="/workspaces/get" baseUrl="https://connect.getseam.com" summary="Get one workspace connected to account" %}
{% swagger-description %}
Retrieve a Workspace using its ID.
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="true" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Workspace retrieved" %}
```javascript
{
  "workspace": {
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "name": "seam",
    "connect_partner_name": "partner_name",
    "is_sandbox": true
  },
  "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Python" %}
```python
seam.workspaces.get()

# Workspace(
#    workspace_id='123e4567-e89b-12d3-a456-426614174000',
#    name='Sandbox',
#    is_sandbox=True
# )\
```
{% endtab %}

{% tab title="Javascript" %}
```typescript
await seam.workspaces.get()

/*
{
    "workspace_id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Workspace 1",
    "is_sandbox": false
}
*/
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
seam.workspaces.get

# <Seam::Workspace:0x0070328                                          
#   workspace_id="123e4567-e89b-12d3-a456-426614174000"               
#   name="MySandbox"                                           
#   connect_partner_name="Partner Sandbox"                           
#   is_sandbox=true> 
```
{% endtab %}
{% endtabs %}

### Parameters

This method doesn't take any parameters.

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "workspace": {
    "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
    "name": "seam",
    "connect_partner_name": "partner_name",
    "is_sandbox": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
