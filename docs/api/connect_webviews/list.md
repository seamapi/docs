# List Connect Webviews

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [Connect Webviews](../../core-concepts/connect-webviews/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all Connect Webviews for a specified customer ID.

#### Code:

```javascript
await seam.connectWebviews.list({
  customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
  limit: 50,
});
```

#### Output:

```javascript
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all Connect Webviews for a specified customer ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connect_webviews/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "customer_ids": [
    "e387e15f-be27-47ad-881f-4a6fc5460c57"
  ],
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "connect_webviews": {
    "accepted_capabilities": ["lock", "thermostat"],
    "accepted_devices": [],
    "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed": true,
    "any_provider_allowed": false,
    "authorized_at": null,
    "automatically_manage_new_devices": true,
    "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id": null,
    "created_at": "2025-06-14T16:54:17.946323Z",
    "custom_metadata": { "id": "internalId1" },
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "custom_redirect_url": "https://example.com/redirect",
    "device_selection_mode": "none",
    "login_successful": false,
    "selected_provider": null,
    "status": "pending",
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation": true,
    "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all Connect Webviews for a specified customer ID.

#### Code:

```python
seam.connect_webviews.list(
    customer_ids=["e387e15f-be27-47ad-881f-4a6fc5460c57"], limit=50
)
```

#### Output:

```python
ConnectWebview(
    accepted_capabilities=["lock", "thermostat"],
    accepted_devices=[],
    accepted_providers=["kwikset", "schlage", "smartthings", "yale"],
    any_device_allowed=true,
    any_provider_allowed=false,
    authorized_at=None,
    automatically_manage_new_devices=true,
    connect_webview_id="c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    connected_account_id=None,
    created_at="2025-06-14T16:54:17.946323Z",
    custom_metadata={"id": "internalId1"},
    custom_redirect_failure_url="https://example.com/failure-redirect",
    custom_redirect_url="https://example.com/redirect",
    device_selection_mode="none",
    login_successful=false,
    selected_provider=None,
    status="pending",
    url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    wait_for_device_creation=true,
    workspace_id="9db95105-e77d-4577-b1b7-0a20b360d5e0",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all Connect Webviews for a specified customer ID.

#### Code:

```ruby
seam.connect_webviews.list(customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"], limit: 50)
```

#### Output:

```ruby
{
  "accepted_capabilities" => %w[lock thermostat],
  "accepted_devices" => [],
  "accepted_providers" => %w[kwikset schlage smartthings yale],
  "any_device_allowed" => true,
  "any_provider_allowed" => false,
  "authorized_at" => nil,
  "automatically_manage_new_devices" => true,
  "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id" => nil,
  "created_at" => "2025-06-14T16:54:17.946323Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "custom_redirect_failure_url" => "https://example.com/failure-redirect",
  "custom_redirect_url" => "https://example.com/redirect",
  "device_selection_mode" => "none",
  "login_successful" => false,
  "selected_provider" => nil,
  "status" => "pending",
  "url" =>
    "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation" => true,
  "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all Connect Webviews for a specified customer ID.

#### Code:

```php
$seam->connect_webviews->list(
    customer_ids: ["e387e15f-be27-47ad-881f-4a6fc5460c57"],
    limit: 50
);
```

#### Output:

```php
[
    "accepted_capabilities" => ["lock", "thermostat"],
    "accepted_devices" => [],
    "accepted_providers" => ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed" => true,
    "any_provider_allowed" => false,
    "authorized_at" => null,
    "automatically_manage_new_devices" => true,
    "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id" => null,
    "created_at" => "2025-06-14T16:54:17.946323Z",
    "custom_metadata" => ["id" => "internalId1"],
    "custom_redirect_failure_url" => "https://example.com/failure-redirect",
    "custom_redirect_url" => "https://example.com/redirect",
    "device_selection_mode" => "none",
    "login_successful" => false,
    "selected_provider" => null,
    "status" => "pending",
    "url" =>
        "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation" => true,
    "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all Connect Webviews for a specified customer ID.

#### Code:

```seam_cli
seam connect-webviews list --customer_ids ["e387e15f-be27-47ad-881f-4a6fc5460c57"] --limit 50
```

#### Output:

```seam_cli
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
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

**`custom_metadata_has`** *Object*

Custom metadata pairs by which you want to [filter Connect Webviews](../../core-concepts/connect-webviews/filtering-connect-webviews-by-custom-metadata.md). Returns Connect Webviews with `custom_metadata` that contains all of the provided key:value pairs.

---

**`customer_key`** *String*

Customer key for which you want to list connect webviews.

---

**`limit`** *Number*

Maximum number of records to return per page.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`user_identifier_key`** *String*

Your user ID for the user by which you want to filter Connect Webviews.

---


## Response

{% hint style="success" %}
Returns:
**Array of [connect\_webviews](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["schlage", "kwikset", "yale", "smartthings"],
  "any_device_allowed": false,
  "any_provider_allowed": false,
  "authorized_at": "2025-06-14T16:54:17.946323Z",
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": "5d2fe05f-4f5b-4b91-909c-96e2601dccbe",
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "single",
  "login_successful": true,
  "selected_provider": "schlage",
  "status": "authorized",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=2r2Rn8V5QUtxE79gNsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### List Connect Webviews for a user identifier key

Returns a list of all Connect Webviews for a specified user identifier key.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.connectWebviews.list({
  user_identifier_key: "7bf74090-25cc-4235-a2f8-aea277b19597",
  limit: 50,
});
```

#### Output:

```javascript
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connect_webviews/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identifier_key": "7bf74090-25cc-4235-a2f8-aea277b19597",
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "connect_webviews": {
    "accepted_capabilities": ["lock", "thermostat"],
    "accepted_devices": [],
    "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed": true,
    "any_provider_allowed": false,
    "authorized_at": null,
    "automatically_manage_new_devices": true,
    "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id": null,
    "created_at": "2025-06-14T16:54:17.946323Z",
    "custom_metadata": { "id": "internalId1" },
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "custom_redirect_url": "https://example.com/redirect",
    "device_selection_mode": "none",
    "login_successful": false,
    "selected_provider": null,
    "status": "pending",
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation": true,
    "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.connect_webviews.list(
    user_identifier_key="7bf74090-25cc-4235-a2f8-aea277b19597", limit=50
)
```

#### Output:

```python
ConnectWebview(
    accepted_capabilities=["lock", "thermostat"],
    accepted_devices=[],
    accepted_providers=["kwikset", "schlage", "smartthings", "yale"],
    any_device_allowed=true,
    any_provider_allowed=false,
    authorized_at=None,
    automatically_manage_new_devices=true,
    connect_webview_id="c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    connected_account_id=None,
    created_at="2025-06-14T16:54:17.946323Z",
    custom_metadata={"id": "internalId1"},
    custom_redirect_failure_url="https://example.com/failure-redirect",
    custom_redirect_url="https://example.com/redirect",
    device_selection_mode="none",
    login_successful=false,
    selected_provider=None,
    status="pending",
    url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    wait_for_device_creation=true,
    workspace_id="9db95105-e77d-4577-b1b7-0a20b360d5e0",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.connect_webviews.list(user_identifier_key: "7bf74090-25cc-4235-a2f8-aea277b19597", limit: 50)
```

#### Output:

```ruby
{
  "accepted_capabilities" => %w[lock thermostat],
  "accepted_devices" => [],
  "accepted_providers" => %w[kwikset schlage smartthings yale],
  "any_device_allowed" => true,
  "any_provider_allowed" => false,
  "authorized_at" => nil,
  "automatically_manage_new_devices" => true,
  "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id" => nil,
  "created_at" => "2025-06-14T16:54:17.946323Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "custom_redirect_failure_url" => "https://example.com/failure-redirect",
  "custom_redirect_url" => "https://example.com/redirect",
  "device_selection_mode" => "none",
  "login_successful" => false,
  "selected_provider" => nil,
  "status" => "pending",
  "url" =>
    "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation" => true,
  "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->connect_webviews->list(
    user_identifier_key: "7bf74090-25cc-4235-a2f8-aea277b19597",
    limit: 50
);
```

#### Output:

```php
[
    "accepted_capabilities" => ["lock", "thermostat"],
    "accepted_devices" => [],
    "accepted_providers" => ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed" => true,
    "any_provider_allowed" => false,
    "authorized_at" => null,
    "automatically_manage_new_devices" => true,
    "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id" => null,
    "created_at" => "2025-06-14T16:54:17.946323Z",
    "custom_metadata" => ["id" => "internalId1"],
    "custom_redirect_failure_url" => "https://example.com/failure-redirect",
    "custom_redirect_url" => "https://example.com/redirect",
    "device_selection_mode" => "none",
    "login_successful" => false,
    "selected_provider" => null,
    "status" => "pending",
    "url" =>
        "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation" => true,
    "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam connect-webviews list --user_identifier_key "7bf74090-25cc-4235-a2f8-aea277b19597" --limit 50
```

#### Output:

```seam_cli
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% endtabs %}

---


### List Connect Webviews with specific custom metadata

Returns a list of all Connect Webviews containing specified custom metadata.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.connectWebviews.list({
  custom_metadata_has: { id: "internalId1" },
  limit: 50,
});
```

#### Output:

```javascript
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connect_webviews/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "custom_metadata_has": {
    "id": "internalId1"
  },
  "limit": 50
}
EOF
```

#### Output:

```curl
{
  "connect_webviews": {
    "accepted_capabilities": ["lock", "thermostat"],
    "accepted_devices": [],
    "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed": true,
    "any_provider_allowed": false,
    "authorized_at": null,
    "automatically_manage_new_devices": true,
    "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id": null,
    "created_at": "2025-06-14T16:54:17.946323Z",
    "custom_metadata": { "id": "internalId1" },
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "custom_redirect_url": "https://example.com/redirect",
    "device_selection_mode": "none",
    "login_successful": false,
    "selected_provider": null,
    "status": "pending",
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation": true,
    "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.connect_webviews.list(custom_metadata_has={"id": "internalId1"}, limit=50)
```

#### Output:

```python
ConnectWebview(
    accepted_capabilities=["lock", "thermostat"],
    accepted_devices=[],
    accepted_providers=["kwikset", "schlage", "smartthings", "yale"],
    any_device_allowed=true,
    any_provider_allowed=false,
    authorized_at=None,
    automatically_manage_new_devices=true,
    connect_webview_id="c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    connected_account_id=None,
    created_at="2025-06-14T16:54:17.946323Z",
    custom_metadata={"id": "internalId1"},
    custom_redirect_failure_url="https://example.com/failure-redirect",
    custom_redirect_url="https://example.com/redirect",
    device_selection_mode="none",
    login_successful=false,
    selected_provider=None,
    status="pending",
    url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    wait_for_device_creation=true,
    workspace_id="9db95105-e77d-4577-b1b7-0a20b360d5e0",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.connect_webviews.list(custom_metadata_has: { id: "internalId1" }, limit: 50)
```

#### Output:

```ruby
{
  "accepted_capabilities" => %w[lock thermostat],
  "accepted_devices" => [],
  "accepted_providers" => %w[kwikset schlage smartthings yale],
  "any_device_allowed" => true,
  "any_provider_allowed" => false,
  "authorized_at" => nil,
  "automatically_manage_new_devices" => true,
  "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id" => nil,
  "created_at" => "2025-06-14T16:54:17.946323Z",
  "custom_metadata" => {
    id: "internalId1",
  },
  "custom_redirect_failure_url" => "https://example.com/failure-redirect",
  "custom_redirect_url" => "https://example.com/redirect",
  "device_selection_mode" => "none",
  "login_successful" => false,
  "selected_provider" => nil,
  "status" => "pending",
  "url" =>
    "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation" => true,
  "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->connect_webviews->list(
    custom_metadata_has: ["id" => "internalId1"],
    limit: 50
);
```

#### Output:

```php
[
    "accepted_capabilities" => ["lock", "thermostat"],
    "accepted_devices" => [],
    "accepted_providers" => ["kwikset", "schlage", "smartthings", "yale"],
    "any_device_allowed" => true,
    "any_provider_allowed" => false,
    "authorized_at" => null,
    "automatically_manage_new_devices" => true,
    "connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
    "connected_account_id" => null,
    "created_at" => "2025-06-14T16:54:17.946323Z",
    "custom_metadata" => ["id" => "internalId1"],
    "custom_redirect_failure_url" => "https://example.com/failure-redirect",
    "custom_redirect_url" => "https://example.com/redirect",
    "device_selection_mode" => "none",
    "login_successful" => false,
    "selected_provider" => null,
    "status" => "pending",
    "url" =>
        "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
    "wait_for_device_creation" => true,
    "workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam connect-webviews list --custom_metadata_has {"id":"internalId1"} --limit 50
```

#### Output:

```seam_cli
{
  "accepted_capabilities": ["lock", "thermostat"],
  "accepted_devices": [],
  "accepted_providers": ["kwikset", "schlage", "smartthings", "yale"],
  "any_device_allowed": true,
  "any_provider_allowed": false,
  "authorized_at": null,
  "automatically_manage_new_devices": true,
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
  "connected_account_id": null,
  "created_at": "2025-06-14T16:54:17.946323Z",
  "custom_metadata": { "id": "internalId1" },
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "custom_redirect_url": "https://example.com/redirect",
  "device_selection_mode": "none",
  "login_successful": false,
  "selected_provider": null,
  "status": "pending",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d",
  "wait_for_device_creation": true,
  "workspace_id": "9db95105-e77d-4577-b1b7-0a20b360d5e0"
}
```
{% endtab %}

{% endtabs %}
