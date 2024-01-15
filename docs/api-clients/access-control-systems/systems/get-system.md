---
description: Get a specified access control system
---

# Get a System

Returns a specified [access control system](../../../products/access-systems/) (`acs_system` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/systems/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired access control system by including the corresponding `acs_system_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired access control system</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360"
}'
```
{% endtab %}
{% endtabs %}



## Response

Returns an `acs_system` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>ID of the access control system</td></tr><tr><td><code>name</code></td><td>Name of the access control system</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access control system</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the access control system was created</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the access control system type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the access control system type</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access control system</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of <a href="../../connected-accounts/">connected account</a> IDs associated with the access control system</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_system": {
    "acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "name": "Assa Abloy Credential Service",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-05T07:16:51.971Z",
    "system_type": "assa_abloy_credential_service",
    "system_type_display_name": "Assa Abloy Credential Service",
    "external_type": "assa_abloy_credential_service",
    "external_type_display_name": "Assa Abloy Credential Service",
    "connected_account_ids": [
      "dc08066f-d9b8-42f0-9c4b-c781cd900153"
    ]
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
