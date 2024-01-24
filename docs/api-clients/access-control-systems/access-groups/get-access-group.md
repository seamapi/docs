---
description: Get a specified access group
---

# Get an Access Group

Returns a specified [access group](../../../products/access-systems/#what-is-an-access-group) (`acs_access_group` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/access_groups/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired access group by including the corresponding `acs_access_group_id` in the request body.

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/access_groups/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_access_group_id": "cfcc0254-b577-41bd-a51e-4a1fe0023754"
}'
```
{% endtab %}
{% endtabs %}

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_access_group_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired access group</td></tr></tbody></table>

## Response

Returns an `acs_access_group` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_access_group_id</code></td><td>ID of the access group</td></tr><tr><td><code>name</code></td><td>Name of the access group</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the access group type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the access group type</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the access group</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the access group</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the access group was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_access_group": {
    "acs_access_group_id": "cfcc0254-b577-41bd-a51e-4a1fe0023754",
    "name": "Unit 2",
    "external_type": "pti_unit",
    "external_type_display_name": "PTI unit",
    "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-09-28T01:40:51.793Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
