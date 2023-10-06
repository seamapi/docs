---
description: Get a specified user
---

# Get a User

Returns a specified [user](../../../products/access-systems/#what-is-a-user) (`acs_user` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the desired user by including the corresponding `acs_user_id` in the request body.

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'GET' \
  'https://connect.getseam.com/acs/users/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "efaeae64-e471-4e1f-a621-f518c624d99c"
}'
```
{% endtab %}
{% endtabs %}

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>String<br><em>Required</em></td><td>ID of the desired user</td></tr></tbody></table>

## Response

Returns an `acs_user` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>ID of the user</td></tr><tr><td><code>display_name</code></td><td>Display name for the user</td></tr><tr><td><code>full_name</code></td><td>Full name of the user</td></tr><tr><td><code>email</code></td><td>Email address of the user</td></tr><tr><td><code>phone</code></td><td>Phone number of the user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the user type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the user type</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces.md">workspace</a> that contains the user</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the <a href="../../../products/access-systems/">access control system</a> that contains the user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the user was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_user": {
    "acs_user_id": "efaeae64-e471-4e1f-a621-f518c624d99c",
    "display_name": "Jenny Gergenson",
    "full_name": "Jenny Gergenson",
    "email": "jenny@example.com",
    "phone": "+5555550101",
    "external_type": "pti_user",
    "external_type_display_name": "PTI user",
    "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-09-28T01:40:51.475Z",
    "is_suspended": false
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
