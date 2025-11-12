# Grant Access to a Client Session

- [Request Parameters](#request-parameters)
- [Response](#response)

Grants a [client session](../../core-concepts/authentication/client-session-tokens/README.md) access to one or more resources, such as [Connect Webviews](../../core-concepts/connect-webviews/README.md), [user identities](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity), and so on.


{% tabs %}
{% tab title="JavaScript" %}

Grants a client session access to one or more resources, such as Connect Webviews, user identities, and so on.

#### Code:

```javascript
await seam.clientSessions.grantAccess({
  client_session_id: "3ada79d3-2848-4320-b2ef-a82e1e6dafac",
  user_identifier_key: "jane_doe",
  connected_account_ids: ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
  connect_webview_ids: ["dad03fb2-f801-449c-ab88-0529728c7c38"],
  user_identity_id: "bde98963-3615-4e92-943e-17de3017232b",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Grants a client session access to one or more resources, such as Connect Webviews, user identities, and so on.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/client_sessions/grant_access" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "client_session_id": "3ada79d3-2848-4320-b2ef-a82e1e6dafac",
  "user_identifier_key": "jane_doe",
  "connected_account_ids": [
    "c35ecf64-474a-466a-95a6-7b35cb4c8bb4"
  ],
  "connect_webview_ids": [
    "dad03fb2-f801-449c-ab88-0529728c7c38"
  ],
  "user_identity_id": "bde98963-3615-4e92-943e-17de3017232b"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Grants a client session access to one or more resources, such as Connect Webviews, user identities, and so on.

#### Code:

```python
seam.client_sessions.grant_access(
    client_session_id="3ada79d3-2848-4320-b2ef-a82e1e6dafac",
    user_identifier_key="jane_doe",
    connected_account_ids=["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    connect_webview_ids=["dad03fb2-f801-449c-ab88-0529728c7c38"],
    user_identity_id="bde98963-3615-4e92-943e-17de3017232b",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Grants a client session access to one or more resources, such as Connect Webviews, user identities, and so on.

#### Code:

```ruby
seam.client_sessions.grant_access(
  client_session_id: "3ada79d3-2848-4320-b2ef-a82e1e6dafac",
  user_identifier_key: "jane_doe",
  connected_account_ids: ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
  connect_webview_ids: ["dad03fb2-f801-449c-ab88-0529728c7c38"],
  user_identity_id: "bde98963-3615-4e92-943e-17de3017232b",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Grants a client session access to one or more resources, such as Connect Webviews, user identities, and so on.

#### Code:

```php
$seam->client_sessions->grant_access(
    client_session_id: "3ada79d3-2848-4320-b2ef-a82e1e6dafac",
    user_identifier_key: "jane_doe",
    connected_account_ids: ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"],
    connect_webview_ids: ["dad03fb2-f801-449c-ab88-0529728c7c38"],
    user_identity_id: "bde98963-3615-4e92-943e-17de3017232b"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Grants a client session access to one or more resources, such as Connect Webviews, user identities, and so on.

#### Code:

```seam_cli
seam client-sessions grant-access --client_session_id "3ada79d3-2848-4320-b2ef-a82e1e6dafac" --user_identifier_key "jane_doe" --connected_account_ids ["c35ecf64-474a-466a-95a6-7b35cb4c8bb4"] --connect_webview_ids ["dad03fb2-f801-449c-ab88-0529728c7c38"] --user_identity_id "bde98963-3615-4e92-943e-17de3017232b"
```

#### Output:

```seam_cli
{}
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

ID of the client session to which you want to grant access to resources.

---

**`connect_webview_ids`** *Array* *of Strings*

IDs of the [Connect Webviews](../../core-concepts/connect-webviews/README.md) that you want to associate with the client session.

---

**`connected_account_ids`** *Array* *of Strings*

IDs of the [connected accounts](../../core-concepts/connected-accounts/README.md) that you want to associate with the client session.

---

**`user_identifier_key`** *String*

Your user ID for the user that you want to associate with the client session.

---

**`user_identity_id`** *String*

ID of the [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that you want to associate with the client session.

---

**`user_identity_ids`** *Array* *of Strings*

IDs of the [user identities](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that you want to associate with the client session.

{% hint style="warning" %}
**Deprecated**. Use `user_identity_id`.
{% endhint %}

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

