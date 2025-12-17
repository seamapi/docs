# Get a Client Session

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a specified [client session](../../core-concepts/authentication/client-session-tokens/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified client session by ID.

#### Code:

```javascript
await seam.clientSessions.get({
  client_session_id: "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
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

Returns a specified client session by ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "client_session_id": "c2cbd177-1ace-414b-bb1e-9f129e4a05c1"
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

Returns a specified client session by ID.

#### Code:

```python
seam.client_sessions.get(client_session_id="c2cbd177-1ace-414b-bb1e-9f129e4a05c1")
```

#### Output:

```python
ClientSession(client_session_id="c2cbd177-1ace-414b-bb1e-9f129e4a05c1", connect_webview_ids=["dafe6400-7484-4fd1-8c17-1c901b444250"], connected_account_ids=["8062d457-e28e-481f-aecc-509905627511"], created_at="2025-06-15T16:54:17.946309Z", customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57", device_count=1, expires_at="2025-06-19T15:22:40.000Z", token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq", user_identifier_key="jane_doe", user_identity_id="89765fd3-6193-4d63-8605-e77f75356555", workspace_id="b887bf84-9849-4454-a562-cf84293d9781")
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified client session by ID.

#### Code:

```ruby
seam.client_sessions.get(client_session_id: "c2cbd177-1ace-414b-bb1e-9f129e4a05c1")
```

#### Output:

```ruby
{"client_session_id" => "c2cbd177-1ace-414b-bb1e-9f129e4a05c1","connect_webview_ids" => ["dafe6400-7484-4fd1-8c17-1c901b444250"],"connected_account_ids" => ["8062d457-e28e-481f-aecc-509905627511"],"created_at" => "2025-06-15T16:54:17.946309Z","customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57","device_count" => 1,"expires_at" => "2025-06-19T15:22:40.000Z","token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq","user_identifier_key" => "jane_doe","user_identity_id" => "89765fd3-6193-4d63-8605-e77f75356555","workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781"}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified client session by ID.

#### Code:

```php
$seam->client_sessions->get(
    client_session_id: "c2cbd177-1ace-414b-bb1e-9f129e4a05c1",
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

Returns a specified client session by ID.

#### Code:

```seam_cli
seam client-sessions get --client_session_id "c2cbd177-1ace-414b-bb1e-9f129e4a05c1"
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`client_session_id`** *String*

ID of the client session that you want to get.

---

**`user_identifier_key`** *String*

User identifier key associated with the client session that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[client\_session](.)

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

---

## Examples


### Get a client session for a user identifier key

Returns a specified client session, using a user identifier key.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.clientSessions.get({ user_identifier_key: "jane_doe" });
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identifier_key": "jane_doe"
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



#### Code:

```python
seam.client_sessions.get(user_identifier_key="jane_doe")
```

#### Output:

```python
ClientSession(client_session_id="c2cbd177-1ace-414b-bb1e-9f129e4a05c1", connect_webview_ids=["dafe6400-7484-4fd1-8c17-1c901b444250"], connected_account_ids=["8062d457-e28e-481f-aecc-509905627511"], created_at="2025-06-15T16:54:17.946309Z", customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57", device_count=1, expires_at="2025-06-19T15:22:40.000Z", token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq", user_identifier_key="jane_doe", user_identity_id="89765fd3-6193-4d63-8605-e77f75356555", workspace_id="b887bf84-9849-4454-a562-cf84293d9781")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.client_sessions.get(user_identifier_key: "jane_doe")
```

#### Output:

```ruby
{"client_session_id" => "c2cbd177-1ace-414b-bb1e-9f129e4a05c1","connect_webview_ids" => ["dafe6400-7484-4fd1-8c17-1c901b444250"],"connected_account_ids" => ["8062d457-e28e-481f-aecc-509905627511"],"created_at" => "2025-06-15T16:54:17.946309Z","customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57","device_count" => 1,"expires_at" => "2025-06-19T15:22:40.000Z","token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq","user_identifier_key" => "jane_doe","user_identity_id" => "89765fd3-6193-4d63-8605-e77f75356555","workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->client_sessions->get(user_identifier_key: "jane_doe");
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



#### Code:

```seam_cli
seam client-sessions get --user_identifier_key "jane_doe"
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
