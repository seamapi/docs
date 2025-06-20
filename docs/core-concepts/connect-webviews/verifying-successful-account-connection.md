---
description: >-
  Learn how to find out when your user's device or ACS account has connected
  successfully to Seam.
---

# Verifying Successful Account Connection

Use one of the following methods to find out when your user's account has connected successfully to Seam through your app:

* If you've redirected your app to the Connect Webview, [poll](verifying-successful-account-connection.md#polling) or use a [webhook](verifying-successful-account-connection.md#webhook) to determine when the Connect Webview has completed successfully. You can then [retrieve the device or ACS](retrieving-devices-or-access-control-systems-connected-through-a-connect-webview.md) associated with the newly-connected account.
* If you've embedded the Connect Webview in an [iframe](https://www.w3schools.com/html/html_iframe.asp), use [event listening](verifying-successful-account-connection.md#event-listening) to determine when to close the iframe. You can then [retrieve the device or ACS](retrieving-devices-or-access-control-systems-connected-through-a-connect-webview.md) associated with the newly-connected account.

{% hint style="info" %}
You do not need to delete a Connect Webview once a user completes it. Instead, you can simply ignore completed Connect Webviews.
{% endhint %}

***

## Polling

Use the `connect_webview_id` to retrieve the Connect Webview instance. You can check the following properties:

| Property           | Value when connected successfully |
| ------------------ | --------------------------------- |
| `status`           | `authorized`                      |
| `login_successful` | `true`                            |

Also, once the connection is successful, the `connect_webview` object includes a `connected_account_id`.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
updated_connect_webview = seam.connect_webviews.get(created_connect_webview.connect_webview_id)
```

**Output:**

```
ConnectWebview(
  connect_webview_id='12345678-1234-1234-1234-123456789012',
  status='authorized',
  login_successful=True,
  connected_account_id='11111111-1111-1111-1111-222222222222',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'GET' \
  'https://connect.getseam.com/connect_webviews/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"connect_webview_id\": \"${connect_webview_id}\"
}"
```

**Output:**

```json
{
  "connect_webview": {
    "connect_webview_id": "12345678-1234-1234-1234-123456789012",
    "status": "authorized",
    "login_successful": true,
    "connected_account_id": "11111111-1111-1111-1111-222222222222",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const updatedConnectWebview = await seam.connectWebviews.get({
  connect_webview_id: connectWebview.connect_webview_id
});
```

**Output:**

```json
{
  connect_webview_id: '12345678-1234-1234-1234-123456789012',
  status: 'authorized',
  login_successful: true,
  connected_account_id: '11111111-1111-1111-1111-222222222222',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
updated_connect_webview = seam.connect_webviews.get(
  connect_webview_id: connect_webview.connect_webview_id
)
```

**Output:**

```
<
  Seam::ConnectWebview:0x00438
    connect_webview_id="12345678-1234-1234-1234-123456789012"
    status="authorized"
    login_successful=true
    connected_account_id="11111111-1111-1111-1111-222222222222"
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$updated_connect_webview = $seam->connect_webviews->get(
  connect_webview_id: $connect_webview->connect_webview_id
);
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "status": "authorized",
  "login_successful": true,
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
var updatedConnectWebview = seam.ConnectWebviews.Get(
  connectWebviewId: connectWebview.connectWebviewId
);
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "status": "authorized",
  "login_successful": true,
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
ConnectWebview updatedConnectWebview = seam.connectWebviews().get(ConnectWebviewsGetRequest.builder()
  .connectWebviewId(connectWebview.getConnectWebviewId())
  .build());
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "status": "authorized",
  "login_successful": true,
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  ...
}
```
{% endtab %}


{% endtabs %}

***

## **Webhook**

When Seam successfully establishes the connection to the user's device or ACS account, Seam emits a [`connected_account.connected` event](../../api-clients/events/#event-types). This event includes a `connect_webview_id` property.

To avoid polling, use a Seam webhook to monitor for a `connected_account.connected` event with a `connect_webview_id` that matches the `connect_webview_id` of the appropriate Connect Webview instance.

Note that the `connected_account.connected` event also includes a `connected_account_id` property.

For more information, see [Webhooks](../webhooks.md).

```json
{
  "event_id": "22222222-3333-4444-5555-666666666666",
  "event_type": "connected_account.connected",
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "occurred_at": "2024-07-17T05:01:53.157Z",
  ...
}
```

***

## **Event Listening**

When you [host a Connect Webview in an HTML iframe](embedding-a-connect-webview-in-your-app.md#embed-the-connect-webview-in-an-iframe), the [iframe](https://www.w3schools.com/html/html_iframe.asp) uses `window.parent.postMessage` to send messages to the parent window that is hosting the iframe. `window.parent.postMessage` is a cross-origin communication mechanism available in web browsers.

Register an event listener for the parent window containing the iframe to monitor for `message` events. Specifically, listen for a `connect_webview.login_succeeded` event. This event indicates that Seam has successfully established the connection to the user's device or ACS account. A `connect_webview.login_failed` event indicates that the account connection did not complete successfully.

For example:

```javascript
window.addEventListener(
  "message",
  (event) => {
    if (event.data?.event?.event_type === "connect_webview.login_succeeded") {
      // Do something.
    }
  },
  false
);
```

***

## Additional Connection-Related Events

Once you have received a `connect_webview.login_succeeded` event, you can use webhooks or listen for any of the following useful connection-related events:

| Event                                    | Description                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connected_account.created`              | A [connected account](../connected-accounts/) has been imported into your Seam workspace.                                                                                                                                                                                                                                |
| `connected_account.connected`            | Seam has established connection to or is reconnected to a [connected account](../connected-accounts/).                                                                                                                                                                                                                   |
| `connected_account.completed_first_sync` | Seam has finished the first sync of a connected account, and the corresponding devices or systems are now available.                                                                                                                                                                                                     |
| `device.added`                           | A device was added to Seam or was re-added to Seam after having been removed.                                                                                                                                                                                                                                            |
| `device.connected`                       | <p>The status of a device changed from offline to online. That is, the <code>device.properties.online</code> property changed from <code>false</code> to <code>true</code>.<br>Note that some devices operate entirely in offline mode, so Seam never emits a <code>device.connected</code> event for these devices.</p> |
