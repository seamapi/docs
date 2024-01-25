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
# Use GET or POST.
curl -X 'GET' \
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

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>ID of the access control system</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the access control system type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the access control system type</td></tr><tr><td><code>name</code></td><td>Name of the access control system</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the access control system was created</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access control system</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of <a href="../../connected-accounts/">connected account</a> IDs associated with the access control system</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_systems": [
    {
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
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
