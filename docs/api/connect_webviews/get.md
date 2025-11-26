# Get a Connect Webview

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [Connect Webview](../../core-concepts/connect-webviews/README.md).

Unless you're using a `custom_redirect_url`, you should poll a newly-created `connect_webview` to find out if the user has signed in or to get details about what devices they've connected.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified Connect Webview.

#### Code:

```javascript
await seam.connectWebviews.get({
  connect_webview_id: "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
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

Returns a specified Connect Webview.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connect_webviews/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "connect_webview_id": "c4c30885-ec87-4b31-8d7b-9bc0678fa028"
}
EOF
```

#### Output:

```curl
{
  "connect_webview": {
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

Returns a specified Connect Webview.

#### Code:

```python
seam.connect_webviews.get(connect_webview_id="c4c30885-ec87-4b31-8d7b-9bc0678fa028")
```

#### Output:

```python
ConnectWebview(accepted_capabilities=["lock","thermostat"], accepted_devices=[], accepted_providers=["kwikset","schlage","smartthings","yale"], any_device_allowed=true, any_provider_allowed=false, authorized_at=None, automatically_manage_new_devices=true, connect_webview_id="c4c30885-ec87-4b31-8d7b-9bc0678fa028", connected_account_id=None, created_at="2025-06-14T16:54:17.946323Z", custom_metadata={"id":"internalId1"}, custom_redirect_failure_url="https://example.com/failure-redirect", custom_redirect_url="https://example.com/redirect", device_selection_mode="none", login_successful=false, selected_provider=None, status="pending", url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d", wait_for_device_creation=true, workspace_id="9db95105-e77d-4577-b1b7-0a20b360d5e0")
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified Connect Webview.

#### Code:

```ruby
seam.connect_webviews.get(connect_webview_id: "c4c30885-ec87-4b31-8d7b-9bc0678fa028")
```

#### Output:

```ruby
{"accepted_capabilities" => ["lock","thermostat"],"accepted_devices" => [],"accepted_providers" => ["kwikset","schlage","smartthings","yale"],"any_device_allowed" => true,"any_provider_allowed" => false,"authorized_at" => nil,"automatically_manage_new_devices" => true,"connect_webview_id" => "c4c30885-ec87-4b31-8d7b-9bc0678fa028","connected_account_id" => nil,"created_at" => "2025-06-14T16:54:17.946323Z","custom_metadata" => {"id":"internalId1"},"custom_redirect_failure_url" => "https://example.com/failure-redirect","custom_redirect_url" => "https://example.com/redirect","device_selection_mode" => "none","login_successful" => false,"selected_provider" => nil,"status" => "pending","url" => "https://connect.getseam.com/connect_webviews/view?connect_webview_id=c4c30885-ec87-4b31-8d7b-9bc0678fa028&auth_token=2r2Rn8V5QUtxE79gMsTmLK58KkuqrwU8d","wait_for_device_creation" => true,"workspace_id" => "9db95105-e77d-4577-b1b7-0a20b360d5e0"}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified Connect Webview.

#### Code:

```php
$seam->connect_webviews->get(
    connect_webview_id: "c4c30885-ec87-4b31-8d7b-9bc0678fa028",
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

Returns a specified Connect Webview.

#### Code:

```seam_cli
seam connect-webviews get --connect_webview_id "c4c30885-ec87-4b31-8d7b-9bc0678fa028"
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

**`connect_webview_id`** *String* (Required)

ID of the Connect Webview that you want to get.

---


## Response

{% hint style="success" %}
Returns:
[connect\_webview](.)**

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
