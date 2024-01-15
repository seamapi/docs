---
description: Get a specified entrance
---

# Get an Entrance

Returns a specified [entrance](../../../products/access-systems/#access-system-components) (`acs_entrance` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/entrances/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired entrance by including the corresponding `acs_entrance_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_entrance_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired entrance</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/entrances/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586"
}'
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_entrance` containing the following properties:

<table><thead><tr><th width="309">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_entrance_id</code></td><td>ID of the entrance</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the entrance</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the user</td></tr><tr><td><code>display_name</code></td><td>Display name for the entrance</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the entrance was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_entrance": {
    "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586",
    "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "properties": {},
    "visionline_door_id": "734926a0-ddfe-4be1-8ffb-3391cf6ca93f",
    "display_name": "door 1",
    "created_at": "2024-01-05T07:20:10.163Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
