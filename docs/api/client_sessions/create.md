# Create a Client Session

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new [client session](../../core-concepts/authentication/client-session-tokens/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new client session.

#### Code:

```javascript
await seam.clientSessions.create({
  customer_id: "e387e15f-be27-47ad-881f-4a6fc5460c57",
  customer_key: "My Company",
  user_identifier_key: "jane_doe",
  connect_webview_ids: ["dafe6400-7484-4fd1-8c17-1c901b444250"],
  connected_account_ids: ["8062d457-e28e-481f-aecc-509905627511"],
  user_identity_id: "89765fd3-6193-4d63-8605-e77f75356555",
  expires_at: "2025-06-19T15:22:40.000Z",
});
```

#### Output:

```javascript
{
  "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
  "connect_webview_ids": ["dafe6400-7484-4fd1-8c17-1c901b444250"],
  "connected_account_ids": ["8062d457-e28e-481f-aecc-509905627511"],
  "created_at": "2025-06-15T16:54:17.946309Z",
  "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
  "device_count": 1,
  "expires_at": "2025-06-19T15:22:40.000Z",
  "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
  "user_identifier_key": "jane_doe",
  "user_identity_id": "89765fd3-6193-4d63-8605-e77f75356555",
  "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new client session.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
  "customer_key": "My Company",
  "user_identifier_key": "jane_doe",
  "connect_webview_ids": [
    "dafe6400-7484-4fd1-8c17-1c901b444250"
  ],
  "connected_account_ids": [
    "8062d457-e28e-481f-aecc-509905627511"
  ],
  "user_identity_id": "89765fd3-6193-4d63-8605-e77f75356555",
  "expires_at": "2025-06-19T15:22:40.000Z"
}
EOF
```

#### Output:

```curl
{
  "client_session": {
    "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
    "connect_webview_ids": ["dafe6400-7484-4fd1-8c17-1c901b444250"],
    "connected_account_ids": ["8062d457-e28e-481f-aecc-509905627511"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-19T15:22:40.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "89765fd3-6193-4d63-8605-e77f75356555",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new client session.

#### Code:

```python
seam.client_sessions.create(
    customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
    customer_key="My Company",
    user_identifier_key="jane_doe",
    connect_webview_ids=["dafe6400-7484-4fd1-8c17-1c901b444250"],
    connected_account_ids=["8062d457-e28e-481f-aecc-509905627511"],
    user_identity_id="89765fd3-6193-4d63-8605-e77f75356555",
    expires_at="2025-06-19T15:22:40.000Z",
)
```

#### Output:

```python
ClientSession(
    client_session_id="c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
    connect_webview_ids=["dafe6400-7484-4fd1-8c17-1c901b444250"],
    connected_account_ids=["8062d457-e28e-481f-aecc-509905627511"],
    created_at="2025-06-15T16:54:17.946309Z",
    customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
    device_count=1,
    expires_at="2025-06-19T15:22:40.000Z",
    token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    user_identifier_key="jane_doe",
    user_identity_id="89765fd3-6193-4d63-8605-e77f75356555",
    workspace_id="b887bf84-9849-4454-a562-cf84293d9781",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new client session.

#### Code:

```ruby
seam.client_sessions.create(
  customer_id: "e387e15f-be27-47ad-881f-4a6fc5460c57",
  customer_key: "My Company",
  user_identifier_key: "jane_doe",
  connect_webview_ids: ["dafe6400-7484-4fd1-8c17-1c901b444250"],
  connected_account_ids: ["8062d457-e28e-481f-aecc-509905627511"],
  user_identity_id: "89765fd3-6193-4d63-8605-e77f75356555",
  expires_at: "2025-06-19T15:22:40.000Z",
)
```

#### Output:

```ruby
{
  "client_session_id" => "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
  "connect_webview_ids" => ["dafe6400-7484-4fd1-8c17-1c901b444250"],
  "connected_account_ids" => ["8062d457-e28e-481f-aecc-509905627511"],
  "created_at" => "2025-06-15T16:54:17.946309Z",
  "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
  "device_count" => 1,
  "expires_at" => "2025-06-19T15:22:40.000Z",
  "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
  "user_identifier_key" => "jane_doe",
  "user_identity_id" => "89765fd3-6193-4d63-8605-e77f75356555",
  "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new client session.

#### Code:

```php
$seam->client_sessions->create(
    customer_id: "e387e15f-be27-47ad-881f-4a6fc5460c57",
    customer_key: "My Company",
    user_identifier_key: "jane_doe",
    connect_webview_ids: ["dafe6400-7484-4fd1-8c17-1c901b444250"],
    connected_account_ids: ["8062d457-e28e-481f-aecc-509905627511"],
    user_identity_id: "89765fd3-6193-4d63-8605-e77f75356555",
    expires_at: "2025-06-19T15:22:40.000Z",
);
```

#### Output:

```php
[
    "client_session_id" => "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
    "connect_webview_ids" => ["dafe6400-7484-4fd1-8c17-1c901b444250"],
    "connected_account_ids" => ["8062d457-e28e-481f-aecc-509905627511"],
    "created_at" => "2025-06-15T16:54:17.946309Z",
    "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count" => 1,
    "expires_at" => "2025-06-19T15:22:40.000Z",
    "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key" => "jane_doe",
    "user_identity_id" => "89765fd3-6193-4d63-8605-e77f75356555",
    "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new client session.

#### Code:

```seam_cli
seam client-sessions create --customer_id "e387e15f-be27-47ad-881f-4a6fc5460c57" --customer_key "My Company" --user_identifier_key "jane_doe" --connect_webview_ids ["dafe6400-7484-4fd1-8c17-1c901b444250"] --connected_account_ids ["8062d457-e28e-481f-aecc-509905627511"] --user_identity_id "89765fd3-6193-4d63-8605-e77f75356555" --expires_at "2025-06-19T15:22:40.000Z"
```

#### Output:

```seam_cli
{
  "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
  "connect_webview_ids": ["dafe6400-7484-4fd1-8c17-1c901b444250"],
  "connected_account_ids": ["8062d457-e28e-481f-aecc-509905627511"],
  "created_at": "2025-06-15T16:54:17.946309Z",
  "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
  "device_count": 1,
  "expires_at": "2025-06-19T15:22:40.000Z",
  "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
  "user_identifier_key": "jane_doe",
  "user_identity_id": "89765fd3-6193-4d63-8605-e77f75356555",
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

IDs of the [Connect Webviews](../../core-concepts/connect-webviews/README.md) for which you want to create a client session.

---

**`connected_account_ids`** *Array* *of Strings*

IDs of the [connected accounts](../../core-concepts/connected-accounts/README.md) for which you want to create a client session.

---

**`customer_id`** *String*

Customer ID that you want to associate with the new client session.

---

**`customer_key`** *String*

Customer key that you want to associate with the new client session.

---

**`expires_at`** *String*

Date and time at which the client session should expire, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`user_identifier_key`** *String*

Your user ID for the user for whom you want to create a client session.

---

**`user_identity_id`** *String*

ID of the [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) for which you want to create a client session.

---

**`user_identity_ids`** *Array* *of UUIDs*

IDs of the [user identities](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that you want to associate with the client session.

{% hint style="warning" %}
**Deprecated**. Use `user_identity_id` instead.
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
