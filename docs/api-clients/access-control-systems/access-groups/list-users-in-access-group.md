---
description: Get all users for a specified access group
---

# List Users in an Access Group

Returns a list of all [users](../../../products/access-systems/#what-is-a-user) (`acs_user` objects) in an [access group](../../../products/access-systems/#what-is-an-access-group) (`acs_access_group` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/access_groups/list_users" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the access group for which you want to retrieve all users by including the corresponding `acs_access_group_id` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_access_group_id</code></td><td>String<br><em>Required</em></td><td>ID of the access group for which you want to retrieve all users</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/access_groups/list_users' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_access_group_id": "cfcc0254-b577-41bd-a51e-4a1fe0023754"
}'
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_users` array, in which each returned user (`acs_user`) contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>ID of the user</td></tr><tr><td><code>display_name</code></td><td>Display name for the user</td></tr><tr><td><code>full_name</code></td><td>Full name of the user</td></tr><tr><td><code>email_address</code></td><td>Email address of the user</td></tr><tr><td><code>phone_number</code></td><td>Phone number of the user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the user type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the user type</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the user</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the user was created</td></tr><tr><td><code>is_suspended</code></td><td>Boolean value to indicate whether the user is currently <a href="../../../products/access-systems/suspending-and-unsuspending-users.md">suspended</a></td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_users": [
    {
      "acs_user_id": "12a28234-56c8-4721-951f-b507707522b4",
      "display_name": "Gary Smith",
      "full_name": "Gary Smith",
      "email_address": "gary@example.com",
      "phone_number": "+15555550103",
      "external_type": "pti_user",
      "external_type_display_name": "PTI user",
      "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-09-28T01:40:51.331Z",
      "is_suspended": false
    },
    {
      "acs_user_id": "4763daf5-e831-4076-82e5-3e59d36da8e3",
      "display_name": "Jim Doe",
      "full_name": "Jim Doe",
      "email_address": "jim@example.com",
      "phone_number": "+15555550104",
      "external_type": "pti_user",
      "external_type_display_name": "PTI user",
      "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-09-29T04:55:53.297Z",
      "is_suspended": false
    },
    {
      "acs_user_id": "7a933f5b-f505-46b4-8828-b56ee8309ae6",
      "display_name": "Jane Zoe",
      "full_name": "Jane Zoe",
      "email_address": "jane@example.com",
      "phone_number": "+15555550105",
      "external_type": "pti_user",
      "external_type_display_name": "PTI user",
      "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-09-29T04:18:11.297Z",
      "is_suspended": false
    },
    {
      "acs_user_id": "efaeae64-e471-4e1f-a621-f518c624d99c",
      "display_name": "Jenny Gergenson",
      "full_name": "Jenny Gergenson",
      "email_address": "jenny@example.com",
      "phone_number": "+15555550101",
      "external_type": "pti_user",
      "external_type_display_name": "PTI user",
      "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2023-09-28T01:40:51.475Z",
      "is_suspended": false
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
