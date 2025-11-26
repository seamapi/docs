# Get or Create a Client Session

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a [client session](../../core-concepts/authentication/client-session-tokens/README.md) with specific characteristics or creates a new client session with these characteristics if it does not yet exist.


{% tabs %}
{% tab title="JavaScript" %}

Returns a client session with specific characteristics or creates a new client session with these characteristics if it does not yet exist.

#### Code:

```javascript
await seam.clientSessions.getOrCreate({
  user_identifier_key: "jane_doe",
  connect_webview_ids: ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
  connected_account_ids: ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
  user_identity_id: "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
  expires_at: "2025-06-18T06:10:42.000Z",
});
```

#### Output:

```javascript
{
  "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
  "connect_webview_ids": ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
  "connected_account_ids": ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
  "created_at": "2025-06-15T16:54:17.946309Z",
  "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
  "device_count": 1,
  "expires_at": "2025-06-18T06:10:42.000Z",
  "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
  "user_identifier_key": "jane_doe",
  "user_identity_id": "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
  "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a client session with specific characteristics or creates a new client session with these characteristics if it does not yet exist.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/get_or_create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identifier_key": "jane_doe",
  "connect_webview_ids": [
    "5e297cfe-23df-4638-bb87-08c4f0f8233b"
  ],
  "connected_account_ids": [
    "f87f0ab7-b8d7-44aa-9e59-3239b209570e"
  ],
  "user_identity_id": "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
  "expires_at": "2025-06-18T06:10:42.000Z"
}
EOF
```

#### Output:

```curl
{
  "client_session": {
    "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
    "connect_webview_ids": ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
    "connected_account_ids": ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a client session with specific characteristics or creates a new client session with these characteristics if it does not yet exist.

#### Code:

```python
seam.client_sessions.get_or_create(
    user_identifier_key="jane_doe",
    connect_webview_ids=["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
    connected_account_ids=["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
    user_identity_id="71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
    expires_at="2025-06-18T06:10:42.000Z",
)
```

#### Output:

```python
ClientSession(
    client_session_id="c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
    connect_webview_ids=["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
    connected_account_ids=["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
    created_at="2025-06-15T16:54:17.946309Z",
    customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
    device_count=1,
    expires_at="2025-06-18T06:10:42.000Z",
    token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    user_identifier_key="jane_doe",
    user_identity_id="71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
    workspace_id="b887bf84-9849-4454-a562-cf84293d9781",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a client session with specific characteristics or creates a new client session with these characteristics if it does not yet exist.

#### Code:

```ruby
seam.client_sessions.get_or_create(
  user_identifier_key: "jane_doe",
  connect_webview_ids: ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
  connected_account_ids: ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
  user_identity_id: "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
  expires_at: "2025-06-18T06:10:42.000Z",
)
```

#### Output:

```ruby
{
  "client_session_id" => "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
  "connect_webview_ids" => ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
  "connected_account_ids" => ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
  "created_at" => "2025-06-15T16:54:17.946309Z",
  "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
  "device_count" => 1,
  "expires_at" => "2025-06-18T06:10:42.000Z",
  "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
  "user_identifier_key" => "jane_doe",
  "user_identity_id" => "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
  "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a client session with specific characteristics or creates a new client session with these characteristics if it does not yet exist.

#### Code:

```php
$seam->client_sessions->get_or_create(
    user_identifier_key: "jane_doe",
    connect_webview_ids: ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
    connected_account_ids: ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
    user_identity_id: "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
    expires_at: "2025-06-18T06:10:42.000Z",
);
```

#### Output:

```php
[
    "client_session_id" => "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
    "connect_webview_ids" => ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
    "connected_account_ids" => ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
    "created_at" => "2025-06-15T16:54:17.946309Z",
    "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count" => 1,
    "expires_at" => "2025-06-18T06:10:42.000Z",
    "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key" => "jane_doe",
    "user_identity_id" => "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
    "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a client session with specific characteristics or creates a new client session with these characteristics if it does not yet exist.

#### Code:

```seam_cli
seam client-sessions get-or-create --user_identifier_key "jane_doe" --connect_webview_ids ["5e297cfe-23df-4638-bb87-08c4f0f8233b"] --connected_account_ids ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"] --user_identity_id "71ff7f71-2cf4-458a-8db4-6ad539c8b66a" --expires_at "2025-06-18T06:10:42.000Z"
```

#### Output:

```seam_cli
{
  "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
  "connect_webview_ids": ["5e297cfe-23df-4638-bb87-08c4f0f8233b"],
  "connected_account_ids": ["f87f0ab7-b8d7-44aa-9e59-3239b209570e"],
  "created_at": "2025-06-15T16:54:17.946309Z",
  "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
  "device_count": 1,
  "expires_at": "2025-06-18T06:10:42.000Z",
  "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
  "user_identifier_key": "jane_doe",
  "user_identity_id": "71ff7f71-2cf4-458a-8db4-6ad539c8b66a",
  "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
- Publishable key

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`connect_webview_ids`** *Array* *of Strings*

IDs of the [Connect Webviews](../../core-concepts/connect-webviews/README.md) that you want to associate with the client session (or that are already associated with the existing client session).

---

**`connected_account_ids`** *Array* *of Strings*

IDs of the [connected accounts](https://docs.seam.co/latest/api/connected_accounts) that you want to associate with the client session (or that are already associated with the existing client session).

---

**`expires_at`** *String*

Date and time at which the client session should expire in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. If the client session already exists, this will update the expiration before returning it.

---

**`user_identifier_key`** *String*

Your user ID for the user that you want to associate with the client session (or that is already associated with the existing client session).

---

**`user_identity_id`** *String*

ID of the [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that you want to associate with the client session (or that are already associated with the existing client session).

---

**`user_identity_ids`** *Array* *of UUIDs*

IDs of the [user identities](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that you want to associate with the client session.

{% hint style="warning" %}
**Deprecated**. Use `user_identity_id`.
{% endhint %}

---


## Response

{% hint style="success" %}
Returns:
[client\_session](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



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
