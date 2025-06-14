---
description: Create a new client session
---

# Create a Client Session

Creates a new [client session](../../core-concepts/authentication/client-session-tokens/).

{% openapi src="https://connect.getseam.com/openapi.json" path="/client_sessions/create" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endopenapi %}

## Request

Specify the user ID and, optionally, [connected accounts](../../api/connected_accounts/) associated with the user by including the corresponding parameters in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identifier_key</code></td><td>String<br><em>Required</em></td><td>Your own internal user ID for the user</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of strings<br><em>Optional</em></td><td>Array of IDs of the <a href="../../api/connected_accounts/">connected accounts</a> associated with this user</td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="JavaScript" %}
```javascript
await seam.clientSessions.create({
  user_identifier_key: "internal-user-id-1",
  connected_account_ids: [
    "3ea0b67f-649f-4131-bfe3-f2035e77a3f9",
    "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  ]
})
```
{% endtab %}
{% endtabs %}

## Response

Returns a `client_session` containing the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>token</code></td><td>Client session token associated with the client session</td></tr><tr><td><code>workspace_id</code></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the client session</td></tr><tr><td><code>user_identifier_key</code></td><td>Your own internal user ID for the user</td></tr><tr><td><code>client_session_id</code></td><td>ID of the client session</td></tr><tr><td><code>created_at</code></td><td>Date and time at which the client session was created</td></tr></tbody></table>

This response also includes a Boolean `ok` status indicator.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  token: 'seam_cst12GGG4LUp_AoHvcSx39aY4AoHQ7GdMDRTH',
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  user_identifier_key: 'internal user ID 1',
  client_session_id: '911b4a3f-e566-44a9-a8ac-267d9e586754',
  created_at: '2023-12-26T05:11:55.048Z'
}
```
{% endtab %}
{% endtabs %}
