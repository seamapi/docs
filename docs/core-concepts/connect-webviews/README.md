---
description: >-
  Use Connect Webviews to connect your users' devices or access control system
  to Seam. Your users authorize your app to control these devices or ACS with
  the Seam API.
---

# 🔌 Connect Webviews

<figure><img src="../../.gitbook/assets/connect-webview-cover.png" alt="The Connect Webview flow walks your users through the process of authorizing your app to control their devices or ACS with the Seam API."><figcaption><p>The Connect Webview flow walks your users through the process of authorizing your app to control their devices or ACS with the Seam API.</p></figcaption></figure>

## What are Connect Webviews?

Seam Connect Webviews are fully-embedded, [customizable](customizing-connect-webviews.md) client-side components that you [add to your app](embedding-a-connect-webview-in-your-app.md) if you want to enable your users to import their own devices or ACS using your app. The Connect Webview flow walks your users through the process of authorizing your app to control their devices or ACS with the Seam API. Using this flow, your app users log in to their device or ACS accounts.

Seam handles all the authentication steps, and—once your user has completed the authorization through your app—you can access and control their devices or ACS using the Seam API. Connect Webviews perform credential validation, multifactor authentication (when applicable), and error handling for each brand that Seam supports. Further, Connect Webviews work across all modern browsers and platforms, including Chrome, Safari, and Firefox.

***

## Connect Webview Process

This section describes the basic Connect Webview process.

### 1. Create a Connect Webview

The Connect Webview flow begins when your user wants to connect their device or ACS account to Seam through your app.

In your app, [create a Connect Webview](../../api-clients/connect-webviews/create-a-connect-webview.md). The Seam API represents Connect Webviews as `connect_webview` objects.

The created `connect_webview` object includes a `url` property.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
created_connect_webview = seam.connect_webviews.create(
  custom_redirect_url = "https://example.com/redirect",
  custom_redirect_failure_url = "https://example.com/failure-redirect",
  provider_category = "stable",
  wait_for_device_creation = True
)
```

**Output:**

```
ConnectWebview(
  connect_webview_id='12345678-1234-1234-1234-123456789012',
  url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=z7Wu2Lc85gYUbNUhdvCWaEhmQv61FziA',
  status='pending',
  login_successful=False,
  custom_redirect_url='https://example.com/redirect',
  custom_redirect_failure_url='https://example.com/failure-redirect',
  accepted_providers=[
    ...
  ],
  wait_for_device_creation=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "provider_category": "stable",
  "wait_for_device_creation": true
}'
```

**Output:**

```json
{
  "connect_webview": {
    "connect_webview_id": "12345678-1234-1234-1234-123456789012",
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=CvPDERYGGMvqgo6N1gsT7XRBieBtPqtUG",
    "status": "pending",
    "login_successful": false,
    "custom_redirect_url": "https://example.com/redirect",
    "custom_redirect_failure_url": "https://example.com/failure-redirect",
    "accepted_providers": [
      ...
    ],
    "wait_for_device_creation": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const createdConnectWebview = await seam.connectWebviews.create({
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  provider_category: "stable",
  wait_for_device_creation: true
})
```

**Output:**

```json
{
  connect_webview_id: '12345678-1234-1234-1234-123456789012',
  url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=2r2Rn8V5QUtxE79gNhTmTK58KkuqrwU8d',
  status: 'pending',
  login_successful: false,
  custom_redirect_url: 'https://example.com/redirect',
  custom_redirect_failure_url: 'https://example.com/failure-redirect',
  accepted_providers: [
    ...
  ],
  wait_for_device_creation: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
created_connect_webview = client.connect_webviews.create(
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  provider_category: "stable",
  wait_for_device_creation: true
)
```

**Output:**

```
<
  Seam::ConnectWebview:0x00438
    connect_webview_id="12345678-1234-1234-1234-123456789012"
    url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=6zrib4wrGZMDxvJxPQQFiB6snmx7UAU6E"
    status="pending"
    login_successful=false
    custom_redirect_url="https://example.com/redirect"
    custom_redirect_failure_url="https://example.com/failure-redirect"
    accepted_providers=[
      ...
    ]
    wait_for_device_creation=true
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$created_connect_webview = $seam->connect_webviews->create(
  custom_redirect_url: "https://example.com/redirect",
  custom_redirect_failure_url: "https://example.com/failure-redirect",
  provider_category: "stable",
  wait_for_device_creation: true
);
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "url": "https:\/\/connect.getseam.com\/connect_webviews\/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=CvXRmaLfBghshH5rUNKcGivC6BVbjD6JG",
  "status": "pending",
  "login_successful": false,
  "custom_redirect_url": "https:\/\/example.com\/redirect",
  "custom_redirect_failure_url": "https:\/\/example.com\/failure-redirect",
  "accepted_providers": [
    ...
  ],
  "wait_for_device_creation": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
var createdConnectWebview = seam.ConnectWebviews.Create(
  customRedirectUrl: "https://example.com/redirect",
  customRedirectFailureUrl: "https://example.com/failure-redirect",
  providerCategory: Seam.Api.ConnectWebviews.CreateRequest.ProviderCategoryEnum.Stable,
  waitForDeviceCreation: true
);
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=9eBKNtzB6ZKkSPPD33MZFshYSbmBcSMz7",
  "status": "pending",
  "login_successful": false,
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "accepted_providers": [
    ...
  ],
  "wait_for_device_creation": true,
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
  .customRedirectUrl("https://example.com/redirect")
  .customRedirectFailureUrl("https://example.com/failure-redirect")
  .providerCategory(ProviderCategory.STABLE)
  .waitForDeviceCreation(true)
  .build());
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=9eBKNtzB6ZKkSPPD33MZFshYSbmBcSMz7",
  "status": "pending",
  "login_successful": false,
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "accepted_providers": [
    ...
  ],
  "wait_for_device_creation": true,
  ...
}
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
createdConnectWebview, err := client.ConnectWebviews.Create(
    context.Background(),
    &api.ConnectWebviewsCreateRequest{
      CustomRedirectUrl: api.String("https://example.com/redirect"),
      CustomRedirectFailureUrl: api.String("https://example.com/failure-redirect"),
      ProviderCategory: api.ProviderCategoryStable.Ptr(),
      WaitForDeviceCreation: api.Bool(true),
    },
  )

if err != nil {
  return err
}

return nil
```

**Output:**

```json
{
  "connect_webview_id": "12345678-1234-1234-1234-123456789012",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=9eBKNtzB6ZKkSPPD33MZFshYSbmBcSMz7",
  "status": "pending",
  "login_successful": false,
  "custom_redirect_url": "https://example.com/redirect",
  "custom_redirect_failure_url": "https://example.com/failure-redirect",
  "accepted_providers": [
    ...
  ],
  "wait_for_device_creation": true,
  ...
}
```
{% endtab %}
{% endtabs %}

### 2. Display the Connect Webview

In your app, [open the Connect Webview for your user](embedding-a-connect-webview-in-your-app.md#opening-a-connect-webview), using the Connect Webview `url`.

You can [redirect to the Connect Webview URL](embedding-a-connect-webview-in-your-app.md#redirect-to-the-connect-webview-url) or [embed the Connect Webview in an iframe](embedding-a-connect-webview-in-your-app.md#embed-the-connect-webview-in-an-iframe).

For instructions, see [Embedding a Connect Webview in Your App](embedding-a-connect-webview-in-your-app.md).

### 3. Your User Completes the Connect Webview

The Connect Webview guides your app user through the following authorization steps:

1. In the introduction page of the Connect Webview, the user clicks **Continue**.

<figure><img src="../../.gitbook/assets/connect-webview-intro-screen.png" alt="Connect Webview introduction page" width="563"><figcaption></figcaption></figure>

2. The user selects their device or ACS brand.

<figure><img src="../../.gitbook/assets/connect-webview-brand-selection.png" alt="In the Connect Webview, the user selects their device or ACS brand." width="563"><figcaption></figcaption></figure>

3.  The user follows the displayed instructions to authorize their account.\
    Seam handles all the necessary authorization steps.&#x20;

    For most brands, this authorization flow consists of a simple device account login. Some brands also require multifactor authentication or other information.\
    For example, brands like Yale offer multiple backend services, depending on the user's global region. Seam prompts the user to identify the correct service and then proceeds with the appropriate authorization request.

<figure><img src="../../.gitbook/assets/connect-webview-brand-authorization.png" alt="In the Connect Webview, the user follows the displayed instructions to authorize the connection to Seam." width="563"><figcaption></figcaption></figure>

4.  The Connect Webview displays a page to indicate the successful device or ACS account connection.

    If an error occurs, the Connect Webview displays the error type, for example, an incorrect password.

    For more complicated errors, the Connect Webview displays a simple **Contact support** link that raises the issue to our support team.&#x20;

<figure><img src="../../.gitbook/assets/connect-webview-success.png" alt="The Connect Webview displays a page to indicate the successful device or ACS account connection." width="563"><figcaption></figcaption></figure>

### 4. Verify Successful Account Connection

Use one of the following methods to learn when the account connection has completed successfully:

* [Polling](../../ui-components/connect-webviews/verifying-successful-account-connection.md#polling)
* [Webhook](../../ui-components/connect-webviews/verifying-successful-account-connection.md#webhook)
* [Event listening](../../ui-components/connect-webviews/verifying-successful-account-connection.md#event-listening) (for iframes)

For instructions, see [Verifying Successful Account Connection](../../ui-components/connect-webviews/verifying-successful-account-connection.md).

{% hint style="info" %}
You do not need to delete a Connect Webview once a user completes it. Instead, you can simply ignore completed Connect Webviews.
{% endhint %}

### 5. Retrieve Connected Devices or ACS

Use the `connected_account_id` from the `connected_account.connected` event or the completed Connect Webview to retrieve the devices or ACS that your user has just connected to Seam.

Once you have retrieved the newly-connected set of devices or ACS, you can start controlling them with the Seam API. For example, for a set of devices, you may first want to prompt your user to group devices by property. For an ACS, you may first want your user to configure the access permissions to grant to new visitors or tenants.

For instructions, see [Retrieving Devices or Access Control Systems Connected Through a Connect Webview](../../ui-components/connect-webviews/retrieving-devices-or-access-control-systems-connected-through-a-connect-webview.md).

{% hint style="info" %}
If your user wants to connect additional devices or ACS from different brands to Seam, your app must create and present a new Connect Webview for each different account that your user wants to connect.
{% endhint %}

### 6. Use the Seam API to Control Your Users' Connected Devices or ACS

Continue using the Seam API to control your users' connected devices or ACS. For example, if you app user has connected a lock that support remote unlock operations, your app can now unlock the lock.

To learn about the actions that you can perform using the Seam API, see the Seam [capability guides](broken-reference). These guides provide helpful tutorials and code samples, categorized by capability types.

* [Smart locks](../../products/smart-locks/), including [locking/unlocking](../../products/smart-locks/lock-and-unlock.md) and [managing access codes](../../products/smart-locks/access-codes/)
* [Access control systems](../../products/access-systems/)
* [Thermostats](../../products/thermostats/)
* [Noise sensors](../../products/noise-sensors/)
* [Mobile access](../../products/mobile-access-in-development/)
