---
description: Create a new user
---

# Create a User

Creates a new [user](../../../products/access-systems/#what-is-a-user) (`acs_user` object).

{% swagger src="https://connect.getseam.com/openapi.json" path="/acs/users/create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

Specify the characteristics of the new user by including the corresponding parameters in the request body. In addition, in the request body, include the `acs_system_id` of the [access control system](../../../products/access-systems/) to which you want to add the new user. You can also specify the `acs_access_group_ids` of the [access groups](../../../products/access-systems/#what-is-an-access-group) to which you want to add the new user.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_system_id</code></td><td>String<br><em>Required</em></td><td>ID of the access control system to which to add the new user</td></tr><tr><td><code>acs_access_group_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of access group IDs to indicate the access groups to which to add the new user</td></tr><tr><td><code>full_name</code></td><td>String<br><em>Optional</em></td><td>Full name of the new user</td></tr><tr><td><code>email</code></td><td>String<br><em>Optional</em></td><td>Email address of the new user</td></tr><tr><td><code>phone_number</code></td><td>String<br><em>Optional</em></td><td>Phone number of the new user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
  "acs_access_group_ids": ["3adfb716-ba84-431e-ab30-ab521f2aa8e8"],
  "full_name": "Jim Doe",
  "email": "jim@example.com",
  "phone_number": "+15555550107"
}'
```
{% endtab %}
{% endtabs %}

## Response

Returns an `acs_user` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_user_id</code></td><td>ID of the user</td></tr><tr><td><code>display_name</code></td><td>Display name for the user</td></tr><tr><td><code>full_name</code></td><td>Full name of the user</td></tr><tr><td><code>email</code></td><td>Email address of the user</td></tr><tr><td><code>phone_number</code></td><td>Phone number of the user in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>external_type</code></td><td>Brand-specific terminology for the user type</td></tr><tr><td><code>external_type_display_name</code></td><td>Display name that corresponds to the brand-specific terminology for the user type</td></tr><tr><td><code>acs_system_id</code></td><td>ID of the access control system that contains the user</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../../core-concepts/workspaces.md">workspace</a> that contains the user</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the user was created</td></tr><tr><td><code>is_suspended</code></td><td>Boolean value to indicate whether the user is currently <a href="../../../products/access-systems/suspending-and-unsuspending-users.md">suspended</a></td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "acs_user": {
    "acs_user_id": "4763daf5-e831-4076-82e5-3e59d36da8e3",
    "display_name": "Jim Doe",
    "full_name": "Jim Doe",
    "email": "jim@example.com",
    "external_type": "pti_user",
    "external_type_display_name": "PTI user",
    "acs_system_id": "fc793d86-dcfd-4cfe-859f-0b9c1a5c1360",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2023-09-29T04:55:53.297Z",
    "is_suspended": false
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
