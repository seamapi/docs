---
description: Get all access control systems
---

# List Systems

Returns a list of all [access control systems](../../../products/access-systems/) (`acs_system` objects).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/systems/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To filter the list of returned access control systems by a specific [connected account](../../connected-accounts/) ID, include the `connected_account_id` in the request body. If you omit the `connected_account_id` parameter, the response includes all access control systems connected to your [workspace](../../../core-concepts/workspaces/).

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>connected_account_id</code></td><td>String<br><em>Optional</em></td><td>ID of the connected account</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "connected_account_id": "84797878-d25d-44dc-882a-890d6cfd6baa"
}'
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_systems` array, in which each returned access control system (`acs_system`) contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>ID of the access control system</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the access control system type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the access control system type</td></tr><tr><td><code>name</code></td><td>Name of the access control system</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the access control system was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_systems": [
    {
      "acs_system_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "external_type": "pti_site",
      "external_type_display_name": "PTI site",
      "name": "Example Inc",
      "created_at": "2023-09-28T02:28:11.073Z"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
