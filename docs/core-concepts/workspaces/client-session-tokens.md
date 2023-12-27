---
description: >-
  Use a client session token to restrict access to the devices owned by a specific user user.
---

# Client Session Tokens

If you want to restrict your users' access to their own devices, use a Client Session Token.

Use Client Session Tokens with the Seam JavaScript SDK to authenticate and authorize users of you web application directly with Seam.
This eliminates the need for your user's browser to communicate with your back-end server.
Instead, requests are made directly from the client to the Seam API.

{% hint style="info" %}
If you are just getting started with Seam, check out Seam Components.
In only a few minutes and with just a few lines of code, you can start controlling devices from your web app without touching your backend.
{% endhint %}

<figure><img src="../../.gitbook/assets/client-session-diagram.png" alt="Use client session tokens to restrict users&#x27; access to only the devices that they own."><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/client-session-flow.png" alt="Client session tokens increase efficiency by enabling your user&#x27;s browser to communicate directly with the Seam back-end server."><figcaption></figcaption></figure>

{% hint style="warning" %}
A Client Session Token may only be used in a browser context via the Seam JavaScript SDK.
Do not use a Client Session Token to make requests from your backend, instead use an [API key](api-keys.md).
An API Key has unlimited permission to manage all devices and other Seam API resources within a workspace.
Never use an API Key in the browser or expose it to your users.
{% endhint %}

A Client Session Token can either be issued from your backend to the client, or managed entirely from the client using [Seam Components with a Publishable Key](../../seam-components/overview/get-started-with-client-side-components.md).

To generate a client session token, from your backend, use the Seam API to create a client session that includes [your own internal user ID for the user](../../seam-components/overview/get-started-with-client-side-components.md#3-select-a-user-identifier-key), along with the [connected accounts](../../api-clients/connected-accounts/) associated with this user. The new client session contains a token that you can pass to the Seam JavaScript SDK running in the browser.

***

## Create a Client Session for an Existing User and Retrieve the Session Token

To [create a client session](../../api-clients/client-sessions/create-a-client-session.md) for an existing user with connected accounts in your workspace, include the IDs of the user's connected accounts (`connected_account_ids`) and [provide your own unique internal user ID (`user_identifier_key`)](../../seam-components/overview/get-started-with-client-side-components.md#3-select-a-user-identifier-key).
Then, use the generated client session token to retrieve and manage the resources authorized via the connected accounts associated with this client session.

{% tabs %}
{% tab title="JavaScript" %}
**Request:**

```javascript
const client_session = await seam.clientSessions.create({
  user_identifier_key: "internal-user-id-1",
  connected_account_ids: [
    "3ea0b67f-649f-4131-bfe3-f2035e77a3f9",
    "6e1cad57-b244-40ca-b4f3-30a46c8000d4",
  ]
})

console.log(`Client session token: ${client_session.token}`)
```

**Response:**

```
Client session token: seam_cst1891oqCmE_6dBwV8PJ2Ffoe9dWYVyMfVHq
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
await seam.clientSessions.list()
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
const clientSession = await seam.clientSessions.get({
  client_session_id: "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168",
}))
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
await seam.clientSessions.delete({
  client_session_id: "639eb8af-19a9-4ae5-817c-6ad08fd078e7",
})
```
{% endtab %}
{% endtabs %}

***

## Next Steps

- Learn about using [Client Session Tokens with Seam Components](../../seam-components/overview).
- Learn more about [Connect Webviews](../connect-webviews/).
