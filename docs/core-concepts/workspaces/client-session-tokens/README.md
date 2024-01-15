---
description: >-
  Use client sessions and client session tokens to streamline your architecture
  and control user access to devices.
---

# Client Sessions and Client Session Tokens

A client session enables a client, such as a web browser or mobile phone, to access the Seam API directly. You can use client sessions to simplify your architecture. That is, when you use client sessions and client session tokens with the Seam JavaScript SDK, you can authenticate and authorize users of your web application directly with Seam.

Once you create a client session on the back end, you can pass the resulting generated client session token from the back end to the front end (that is, to the client). Using client session tokens on the front end eliminates the need for your user's browser to communicate with your back-end server. Instead, the client makes requests directly to the Seam API.

Client sessions make it easy to control your users' access to devices. When you create a client session, you can specify [your own internal user ID for a desired user](../../../seam-components/overview/get-started-with-client-side-components.md#3-select-a-user-identifier-key), along with the [connected accounts](../../../api-clients/connected-accounts/) associated with this user. Then, you can [use client sessions on the back end to limit your users to only the devices that they own](implementing-client-sessions-for-device-management-in-the-back-end.md).

{% hint style="info" %}
If you are just getting started with Seam, see [Seam Components](../../../seam-components/overview/). In only a few minutes and with just a few lines of code, you can start controlling devices from your web application without interacting with the back end.
{% endhint %}

<figure><img src="../../../.gitbook/assets/client-session-flow.png" alt="Client sessions and client session tokens increase efficiency by enabling your user&#x27;s browser to communicate directly with the Seam back-end server."><figcaption></figcaption></figure>

{% hint style="warning" %}
You can only use a client session token in a browser context through the Seam JavaScript SDK. Do not use a client session token to make requests from the back end. Instead, use an [API key](../api-keys.md). An API key has unlimited permission to manage all devices and other Seam API resources within a [workspace](../). Never use an API key in the browser or expose it to your users.
{% endhint %}

You can use client sessions in the following two ways:

* Create a client session on the back end and pass the resulting generated client session token to your front end. You use this client session token in the front end with the Seam JavaScript SDK or Seam Components.
* Manage client sessions entirely on the front end by using a [publishable key with the JavaScript SDK or Seam Components](../../../seam-components/overview/get-started-with-client-side-components.md).

***

## Create a Client Session for an Existing User and Retrieve the Session Token

To [create a client session](../../../api-clients/client-sessions/create-a-client-session.md) for an existing user with connected accounts in your workspace, include the IDs of the user's connected accounts (`connected_account_ids`) and [provide your own unique internal user ID (`user_identifier_key`)](../../../seam-components/overview/get-started-with-client-side-components.md#3-select-a-user-identifier-key). Then, use the generated client session token to retrieve and manage the resources authorized through the connected accounts associated with this client session.

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

You can [list all client sessions](../../../api-clients/client-sessions/list-client-sessions.md) within your workspace.

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

To [get a specific client session](../../../api-clients/client-sessions/get-a-client-session.md), provide the client session ID (`client_session_id`).

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

To [delete a client session](../../../api-clients/client-sessions/delete-a-client-session.md), provide the client session ID (`client_session_id`).

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

* Learn about using [client session tokens with Seam Components](../../../seam-components/overview/).
* Learn more about [Connect Webviews](../../connect-webviews/).
