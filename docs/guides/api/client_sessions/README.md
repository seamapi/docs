# Client Sessions

## The client_session Object

- [Properties](./#properties)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [client session](../../core-concepts/authentication/client-session-tokens/README.md). If you want to restrict your users' access to their own devices, use client sessions.

You create each client session with a custom `user_identifier_key`. Normally, the `user_identifier_key` is a user ID that your application provides.

When calling the Seam API from your backend using an API key, you can pass the `user_identifier_key` as a parameter to limit results to the associated client session. For example, `/devices/list?user_identifier_key=123` only returns devices associated with the client session created with the `user_identifier_key` `123`.

A client session has a token that you can use with the Seam JavaScript SDK to make requests from the client (browser) directly to the Seam API. The token restricts the user's access to only the devices that they own.

See also [Get Started with React](https://docs.seam.co/latest/ui-components/overview/getting-started-with-seam-components/get-started-with-react-components-and-client-session-tokens).

{% tabs %}
{% tab title="Client Session" %}

A client session resource.

```json
{
  "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
  "connect_webview_ids": ["550e8400-e29b-41d4-a716-446655440000"],
  "connected_account_ids": ["f47ac10b-58cc-4372-a567-0e02b2c3d479"],
  "created_at": "2025-06-15T16:54:17.946309Z",
  "customer_id": "77eccc4e-c8bc-4c7d-b83c-cb853ed3bade",
  "device_count": 1,
  "expires_at": "2025-06-17T16:54:17.946309Z",
  "token": "seam_cst1891oqCmB_6dBwV8PJ2Fsoe9dWYVyMfVHq",
  "user_identifier_key": "user_id_1",
  "user_identity_id": "a6e93f84-565e-47d7-8908-1ca71ada373c",
  "user_identity_ids": ["a6e93f84-565e-47d7-8908-1ca71ada373c"],
  "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`client_session_id`** *UUID*

ID of the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---

**`connect_webview_ids`** *List* *of UUIDs*

IDs of the [Connect Webviews](../../core-concepts/connect-webviews/README.md) associated with the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---

**`connected_account_ids`** *List* *of UUIDs*

IDs of the [connected accounts](../../core-concepts/connected-accounts/README.md) associated with the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---

**`created_at`** *Datetime*

Date and time at which the [client session](../../core-concepts/authentication/client-session-tokens/README.md) was created.




---

**`customer_key`** *String*

Customer key associated with the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---

**`device_count`** *Number*

Number of devices associated with the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---

**`expires_at`** *Datetime*

Date and time at which the [client session](../../core-concepts/authentication/client-session-tokens/README.md) expires.




---

**`token`** *String*

Client session token associated with the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---

**`user_identifier_key`** *String*

Your user ID for the user associated with the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---

**`user_identity_id`** *UUID*

ID of the [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) associated with the client session.




---

**`user_identity_ids`** *List* *of UUIDs*

IDs of the [user identities](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) associated with the client session.

{% hint style="warning" %}
**Deprecated**. Use `user_identity_id` instead.
{% endhint %}



---

**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the [client session](../../core-concepts/authentication/client-session-tokens/README.md).




---


## Events

**`client_session.deleted`**

A [client session](../../core-concepts/authentication/client-session-tokens/README.md) was deleted.

<details>

<summary>Properties</summary>

<strong><code>client_session_id</code></strong> <i>UUID</i>

  ID of the affected client session.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `client_session.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/client_sessions/create`**](./create.md)

Creates a new [client session](../../core-concepts/authentication/client-session-tokens/README.md).


[**`/client_sessions/delete`**](./delete.md)

Deletes a [client session](../../core-concepts/authentication/client-session-tokens/README.md).


[**`/client_sessions/get`**](./get.md)

Returns a specified [client session](../../core-concepts/authentication/client-session-tokens/README.md).


[**`/client_sessions/get_or_create`**](./get_or_create.md)

Returns a [client session](../../core-concepts/authentication/client-session-tokens/README.md) with specific characteristics or creates a new client session with these characteristics if it does not yet exist.


[**`/client_sessions/grant_access`**](./grant_access.md)

Grants a [client session](../../core-concepts/authentication/client-session-tokens/README.md) access to one or more resources, such as [Connect Webviews](../../core-concepts/connect-webviews/README.md), [user identities](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity), and so on.


[**`/client_sessions/list`**](./list.md)

Returns a list of all [client sessions](../../core-concepts/authentication/client-session-tokens/README.md).


[**`/client_sessions/revoke`**](./revoke.md)

Revokes a [client session](../../core-concepts/authentication/client-session-tokens/README.md).


