---
description: Get all entrances in a specified access control system
---

# List Entrances

Returns a list of all [entrances](../../../products/access-systems/#access-system-components) (`acs_entrance` objects).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/entrances/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the [access control system](../../../products/access-systems/) for which you want to retrieve all entrances by including the corresponding `acs_system_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String<br><em>Required</em></td><td>ID of the access control system for which you want to retrieve all entrances</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/entrances/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4"
}'
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_entrances` array, in which each returned entrance (`acs_entrance`) contains the following properties:

<table><thead><tr><th width="309">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_entrance_id</code></td><td>ID of the entrance</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the entrance</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the user</td></tr><tr><td><code>display_name</code></td><td>Display name for the entrance</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the entrance was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "302a9eae-c6d5-4377-88d9-a284e0383df3",
      "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "properties": {},
      "visionline_door_id": "4f3408e7-6c53-4d65-87e1-bbc3eb323606",
      "display_name": "door 3",
      "created_at": "2024-01-05T07:20:10.554Z"
    },
    {
      "acs_entrance_id": "3c7c2288-d7ca-45ab-9928-eb8c8975f1dc",
      "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "properties": {},
      "visionline_door_id": "01e6b59a-c058-4837-b83f-5ab7da309305",
      "display_name": "door 2",
      "created_at": "2024-01-05T07:20:10.388Z"
    },
    {
      "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586",
      "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "properties": {},
      "visionline_door_id": "734926a0-ddfe-4be1-8ffb-3391cf6ca93f",
      "display_name": "door 1",
      "created_at": "2024-01-05T07:20:10.163Z"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
