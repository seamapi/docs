# List Client Sessions

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [client sessions](../../core-concepts/authentication/client-session-tokens/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all client sessions for a specific client session ID.

#### Code:

```javascript
await seam.clientSessions.list({
  client_session_id: "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
});
```

#### Output:

```javascript
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all client sessions for a specific client session ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc"
}
EOF
```

#### Output:

```curl
{
  "client_sessions": [
    {
      "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
      "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
      "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
      "created_at": "2025-06-15T16:54:17.946309Z",
      "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
      "device_count": 1,
      "expires_at": "2025-06-18T06:10:42.000Z",
      "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
      "user_identifier_key": "jane_doe",
      "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
      "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all client sessions for a specific client session ID.

#### Code:

```python
seam.client_sessions.list(client_session_id="a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc")
```

#### Output:

```python
[
    ClientSession(
        client_session_id="a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        connect_webview_ids=["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        connected_account_ids=["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        created_at="2025-06-15T16:54:17.946309Z",
        customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
        device_count=1,
        expires_at="2025-06-18T06:10:42.000Z",
        token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        user_identifier_key="jane_doe",
        user_identity_id="b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        workspace_id="b887bf84-9849-4454-a562-cf84293d9781",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all client sessions for a specific client session ID.

#### Code:

```ruby
seam.client_sessions.list(client_session_id: "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc")
```

#### Output:

```ruby
[
  {
    "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at" => "2025-06-15T16:54:17.946309Z",
    "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count" => 1,
    "expires_at" => "2025-06-18T06:10:42.000Z",
    "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key" => "jane_doe",
    "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all client sessions for a specific client session ID.

#### Code:

```php
$seam->client_sessions->list(
    client_session_id: "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
);
```

#### Output:

```php
[
    [
        "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        "created_at" => "2025-06-15T16:54:17.946309Z",
        "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
        "device_count" => 1,
        "expires_at" => "2025-06-18T06:10:42.000Z",
        "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        "user_identifier_key" => "jane_doe",
        "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all client sessions for a specific client session ID.

#### Code:

```seam_cli
seam client-sessions list --client_session_id "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc"
```

#### Output:

```seam_cli
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`client_session_id`** *String*

ID of the client session that you want to retrieve.

---

**`connect_webview_id`** *String*

ID of the [Connect Webview](../../core-concepts/connect-webviews/README.md) for which you want to retrieve client sessions.

---

**`user_identifier_key`** *String*

Your user ID for the user by which you want to filter client sessions.

---

**`user_identity_id`** *String*

ID of the [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) for which you want to retrieve client sessions.

---

**`without_user_identifier_key`** *Boolean*

Indicates whether to retrieve only client sessions without associated user identifier keys.

---


## Response

{% hint style="success" %}
Returns:
**Array of [client\_sessions](.)

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


### List client sessions for a user identifier key

Returns a list of all client sessions for a specific user identifier key.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.clientSessions.list({ user_identifier_key: "jane_doe" });
```

#### Output:

```javascript
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identifier_key": "jane_doe"
}
EOF
```

#### Output:

```curl
{
  "client_sessions": [
    {
      "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
      "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
      "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
      "created_at": "2025-06-15T16:54:17.946309Z",
      "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
      "device_count": 1,
      "expires_at": "2025-06-18T06:10:42.000Z",
      "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
      "user_identifier_key": "jane_doe",
      "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
      "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.client_sessions.list(user_identifier_key="jane_doe")
```

#### Output:

```python
[
    ClientSession(
        client_session_id="a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        connect_webview_ids=["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        connected_account_ids=["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        created_at="2025-06-15T16:54:17.946309Z",
        customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
        device_count=1,
        expires_at="2025-06-18T06:10:42.000Z",
        token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        user_identifier_key="jane_doe",
        user_identity_id="b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        workspace_id="b887bf84-9849-4454-a562-cf84293d9781",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.client_sessions.list(user_identifier_key: "jane_doe")
```

#### Output:

```ruby
[
  {
    "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at" => "2025-06-15T16:54:17.946309Z",
    "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count" => 1,
    "expires_at" => "2025-06-18T06:10:42.000Z",
    "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key" => "jane_doe",
    "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->client_sessions->list(user_identifier_key: "jane_doe");
```

#### Output:

```php
[
    [
        "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        "created_at" => "2025-06-15T16:54:17.946309Z",
        "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
        "device_count" => 1,
        "expires_at" => "2025-06-18T06:10:42.000Z",
        "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        "user_identifier_key" => "jane_doe",
        "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam client-sessions list --user_identifier_key "jane_doe"
```

#### Output:

```seam_cli
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List client sessions for a Connect Webview ID

Returns a list of all client sessions for a specific Connect Webview ID.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.clientSessions.list({
  connect_webview_id: "e0f522d4-a7b6-4f65-ba90-11cde67a893a",
});
```

#### Output:

```javascript
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "connect_webview_id": "e0f522d4-a7b6-4f65-ba90-11cde67a893a"
}
EOF
```

#### Output:

```curl
{
  "client_sessions": [
    {
      "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
      "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
      "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
      "created_at": "2025-06-15T16:54:17.946309Z",
      "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
      "device_count": 1,
      "expires_at": "2025-06-18T06:10:42.000Z",
      "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
      "user_identifier_key": "jane_doe",
      "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
      "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.client_sessions.list(connect_webview_id="e0f522d4-a7b6-4f65-ba90-11cde67a893a")
```

#### Output:

```python
[
    ClientSession(
        client_session_id="a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        connect_webview_ids=["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        connected_account_ids=["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        created_at="2025-06-15T16:54:17.946309Z",
        customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
        device_count=1,
        expires_at="2025-06-18T06:10:42.000Z",
        token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        user_identifier_key="jane_doe",
        user_identity_id="b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        workspace_id="b887bf84-9849-4454-a562-cf84293d9781",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.client_sessions.list(connect_webview_id: "e0f522d4-a7b6-4f65-ba90-11cde67a893a")
```

#### Output:

```ruby
[
  {
    "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at" => "2025-06-15T16:54:17.946309Z",
    "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count" => 1,
    "expires_at" => "2025-06-18T06:10:42.000Z",
    "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key" => "jane_doe",
    "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->client_sessions->list(
    connect_webview_id: "e0f522d4-a7b6-4f65-ba90-11cde67a893a",
);
```

#### Output:

```php
[
    [
        "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        "created_at" => "2025-06-15T16:54:17.946309Z",
        "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
        "device_count" => 1,
        "expires_at" => "2025-06-18T06:10:42.000Z",
        "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        "user_identifier_key" => "jane_doe",
        "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam client-sessions list --connect_webview_id "e0f522d4-a7b6-4f65-ba90-11cde67a893a"
```

#### Output:

```seam_cli
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List client sessions for a user identity ID

Returns a list of all client sessions for a specific user identity ID.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.clientSessions.list({
  user_identity_id: "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
});
```

#### Output:

```javascript
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a"
}
EOF
```

#### Output:

```curl
{
  "client_sessions": [
    {
      "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
      "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
      "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
      "created_at": "2025-06-15T16:54:17.946309Z",
      "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
      "device_count": 1,
      "expires_at": "2025-06-18T06:10:42.000Z",
      "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
      "user_identifier_key": "jane_doe",
      "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
      "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.client_sessions.list(user_identity_id="b4ce8233-3b35-4d2d-82ec-d48513684f0a")
```

#### Output:

```python
[
    ClientSession(
        client_session_id="a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        connect_webview_ids=["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        connected_account_ids=["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        created_at="2025-06-15T16:54:17.946309Z",
        customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
        device_count=1,
        expires_at="2025-06-18T06:10:42.000Z",
        token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        user_identifier_key="jane_doe",
        user_identity_id="b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        workspace_id="b887bf84-9849-4454-a562-cf84293d9781",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.client_sessions.list(user_identity_id: "b4ce8233-3b35-4d2d-82ec-d48513684f0a")
```

#### Output:

```ruby
[
  {
    "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at" => "2025-06-15T16:54:17.946309Z",
    "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count" => 1,
    "expires_at" => "2025-06-18T06:10:42.000Z",
    "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key" => "jane_doe",
    "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->client_sessions->list(
    user_identity_id: "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
);
```

#### Output:

```php
[
    [
        "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        "created_at" => "2025-06-15T16:54:17.946309Z",
        "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
        "device_count" => 1,
        "expires_at" => "2025-06-18T06:10:42.000Z",
        "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        "user_identifier_key" => "jane_doe",
        "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam client-sessions list --user_identity_id "b4ce8233-3b35-4d2d-82ec-d48513684f0a"
```

#### Output:

```seam_cli
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": "jane_doe",
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% endtabs %}

---


### List client sessions without a user identifier key

Returns a list of all client sessions without a user identifier key.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.clientSessions.list({ without_user_identifier_key: true });
```

#### Output:

```javascript
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": null,
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "without_user_identifier_key": true
}
EOF
```

#### Output:

```curl
{
  "client_sessions": [
    {
      "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
      "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
      "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
      "created_at": "2025-06-15T16:54:17.946309Z",
      "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
      "device_count": 1,
      "expires_at": "2025-06-18T06:10:42.000Z",
      "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
      "user_identifier_key": null,
      "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
      "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.client_sessions.list(without_user_identifier_key=true)
```

#### Output:

```python
[
    ClientSession(
        client_session_id="a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        connect_webview_ids=["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        connected_account_ids=["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        created_at="2025-06-15T16:54:17.946309Z",
        customer_id="e387e15f-be27-47ad-881f-4a6fc5460c57",
        device_count=1,
        expires_at="2025-06-18T06:10:42.000Z",
        token="seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        user_identifier_key=None,
        user_identity_id="b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        workspace_id="b887bf84-9849-4454-a562-cf84293d9781",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.client_sessions.list(without_user_identifier_key: true)
```

#### Output:

```ruby
[
  {
    "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at" => "2025-06-15T16:54:17.946309Z",
    "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count" => 1,
    "expires_at" => "2025-06-18T06:10:42.000Z",
    "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key" => nil,
    "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->client_sessions->list(without_user_identifier_key: true);
```

#### Output:

```php
[
    [
        "client_session_id" => "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
        "connect_webview_ids" => ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
        "connected_account_ids" => ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
        "created_at" => "2025-06-15T16:54:17.946309Z",
        "customer_id" => "e387e15f-be27-47ad-881f-4a6fc5460c57",
        "device_count" => 1,
        "expires_at" => "2025-06-18T06:10:42.000Z",
        "token" => "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
        "user_identifier_key" => null,
        "user_identity_id" => "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
        "workspace_id" => "b887bf84-9849-4454-a562-cf84293d9781",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam client-sessions list --without_user_identifier_key true
```

#### Output:

```seam_cli
[
  {
    "client_session_id": "a083ce0f-8b03-4081-ac9a-1ad2ce6aaabc",
    "connect_webview_ids": ["e0f522d4-a7b6-4f65-ba90-11cde67a893a"],
    "connected_account_ids": ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    "created_at": "2025-06-15T16:54:17.946309Z",
    "customer_id": "e387e15f-be27-47ad-881f-4a6fc5460c57",
    "device_count": 1,
    "expires_at": "2025-06-18T06:10:42.000Z",
    "token": "seam_cst1891oqCmD_6dBwV8PJ2Fsoe9dWYVyMfVHq",
    "user_identifier_key": null,
    "user_identity_id": "b4ce8233-3b35-4d2d-82ec-d48513684f0a",
    "workspace_id": "b887bf84-9849-4454-a562-cf84293d9781"
  }
]
```
{% endtab %}

{% endtabs %}
