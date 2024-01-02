---
description: >-
  A client session produces a token that enables you to restrict a user's access
  to only the devices that they own.
---

# Client Sessions

If you want to restrict your users' access to their own devices, use Client Sessions.

The `client_session` object represents a client session.

Each client session is created with a custom `user_identifier_key`.
Normally, this would be a user id provided by your application.

When calling the Seam API from your backend using an API key,
the `user_identifier_key` may be passed as a parameter to limit results to the associated client session.
For example, `/devices/list?user_identifier_key=123` would only return devices owned by
the client session created with the `user_identifier_key` 123.

A client session has a token that may be used with the Seam JavaScript SDK to make requests
from the client (browser) directly to the Seam API.
The token restricts the user's access to only the devices that they own.

For more information about client sessions and client session tokens, see the following topics:

* [Client Session Tokens](../../core-concepts/workspaces/client-session-tokens.md)
* [Get Started with React](../../seam-components/overview/get-started-with-react-components-and-client-session-tokens.md)

## `client_session` Properties

The `client_session` object has the following properties:

<table><thead><tr><th width="272">Property</th><th width="132">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>client_session_id</code></td><td>String<br><em>Required</em></td><td>ID of the client session</td></tr><tr><td><code>user_identifier_key</code></td><td>String<br><em>Required</em></td><td>Your own internal user ID for the user</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the client session was created</td></tr><tr><td><code>token</code></td><td>String<br><em>Required</em></td><td>Token that enables you to call <a href="broken-reference">Seam components</a> while restricting a user's access to only devices that they own</td></tr><tr><td><code>device_count</code></td><td>Number<br><em>Required</em></td><td>Number of <a href="../../core-concepts/devices.md">devices</a> to which this client session grants access</td></tr><tr><td><code>connected_account_ids</code></td><td>Array of strings<br><em>Required</em></td><td>Array of IDs of the <a href="../connected-accounts/">connected accounts</a> associated with this client session</td></tr><tr><td><code>connect_webview_ids</code></td><td>Array of strings<br><em>Required</em></td><td>IDs of the <a href="../../core-concepts/connect-webviews/">Connect Webviews</a> associated with this client session</td></tr><tr><td><code>workspace_id</code></td><td>String<br><em>Required</em></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> associated with this client session</td></tr></tbody></table>

## `client_session` Methods

You can perform the following actions on `client_session` objects:

* [Create a client session](create-a-client-session.md)
* [List client sessions](list-client-sessions.md)
* [Get a client session](get-a-client-session.md)
* [Delete a client session](delete-a-client-session.md)


## Example: Use Client Sessions on the backend to limit your users to their own devices

1. Create a client session for a new user using your internal user id (`user_identifier_key`).
2. [Create a Connect Webview](../../api-clients/connect-webviews/create-a-connect-webview.md).
3. Link the connect webview to the client session.
4. Redirect the user to the connect webview url so they may login and connect their account.
5. Use the `user_identifier_key` parameter to manage the users own devices.

{% tabs %}
{% tab title="JavaScript" %}

```javascript
const seam = new Seam("YOUR_API_KEY")

// Create a client session using your own user id as the user_identifier_key.
const user_identifier_key = "user-123"

// Create the client session.
const client_session = await seam.clientSessions.create({
  user_identifier_key
})

// Create a Connect Webview.
const connect_webview = await seam.connectWebviews.create()

// Link the connect webview to the client session

// Redirect the user to the connect webview.
res.redirect(connect_webview.url)

// In one of your application views, return a list of devices to your user
const devices = await seam.devices.list({
  user_identifier_key,
  name: "Front Door",
})

res.send(renderDevicePageHtml(res, { devices }))

// Handle application request to unlock a door
const device_id = req.body.device_id

const devices = await seam.devices.list({
  user_identifier_key,
  device_ids: [device_id]
})

if (devices.length === 0) return res.send(401).end()

await seam.devices.unlock_door({ device_id })

res.send(200)
```
{% endtab %}
{% endtabs %}

***

## List Client Sessions

You can [list all client sessions](../../api-clients/client-sessions/list-client-sessions.md) within your workspace.

{% tabs %}
{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.clientSessions.list())
```

**Response:**

```json
[
  {
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    token: 'seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp',
    user_identifier_key: 'internal user ID 1',
    created_at: '2023-12-26T04:23:46.829Z',
    client_session_id: 'c75d4330-ae01-4dfd-b6c5-f3e94e0d8168',
    user_identity_ids: [],
    third_party_account_ids: [
      '3ea0b67f-649f-4131-bfe3-f2035e77a3f9',
      '6e1cad57-b244-40ca-b4f3-30a46c8000d4'
    ],
    connect_webview_ids: [],
    device_count: 4,
    connected_account_ids: [
      '3ea0b67f-649f-4131-bfe3-f2035e77a3f9',
      '6e1cad57-b244-40ca-b4f3-30a46c8000d4'
    ]
  },
  {
    workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    token: 'seam_cst1891oqCmE_6dBwV8PJ2Ffoe9dWYVyMfVHq',
    user_identifier_key: 'internal user ID 2',
    created_at: '2023-12-26T04:25:50.041Z',
    client_session_id: 'e1006128-19a8-4e4d-9a91-536d80cf9c21',
    user_identity_ids: [],
    third_party_account_ids: [
      '2e884e71-b2c1-41a0-bb2c-ec94a7b4c6a4',
      'b0ccf472-cb63-400c-bf21-5b809f5e1afd'
    ],
    connect_webview_ids: [],
    device_count: 4,
    connected_account_ids: [
      '2e884e71-b2c1-41a0-bb2c-ec94a7b4c6a4',
      'b0ccf472-cb63-400c-bf21-5b809f5e1afd'
    ]
  },
  ...
]
```
{% endtab %}
{% endtabs %}

***

## Get a Client Session

To [get a specific client session](../../api-clients/client-sessions/get-a-client-session.md), provide the client session ID (`client_session_id`).

{% tabs %}
{% tab title="JavaScript" %}
**Request:**

```javascript
const client_session_id = "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168"
console.log(await seam.clientSessions.get(client_session_id))
```

**Response:**

```json
{
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  token: 'seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp',
  user_identifier_key: 'internal user ID 1',
  created_at: '2023-12-26T04:23:46.829Z',
  client_session_id: 'c75d4330-ae01-4dfd-b6c5-f3e94e0d8168',
  device_count: 4,
  connected_account_ids: [
    '3ea0b67f-649f-4131-bfe3-f2035e77a3f9',
    '6e1cad57-b244-40ca-b4f3-30a46c8000d4'
  ],
  connect_webview_ids: [],
  user_identity_ids: []
}
```
{% endtab %}
{% endtabs %}

***

## Delete a Client Session

To [delete a client session](../../api-clients/client-sessions/delete-a-client-session.md), provide the client session ID (`client_session_id`).

{% tabs %}
{% tab title="JavaScript" %}
**Request:**

```javascript
const client_session_id = "639eb8af-19a9-4ae5-817c-6ad08fd078e7"
console.log(await seam.clientSessions.delete({
  client_session_id: client_session_id
}))
```

**Response:**

```json
{ ok: true }
```
{% endtab %}
{% endtabs %}

***
