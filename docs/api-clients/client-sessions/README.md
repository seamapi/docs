---
description: >-
  A client session produces a token that enables you to restrict a user's access
  to only the devices that they own.
---

# Client Sessions

If you want to restrict your users' access to their own devices, use Client Sessions.

The `client_session` object represents a client session.
Create a client session and then use the returned token with the Seam JavaScript SDK to make request from the client (browser) directly to the Seam API.
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
