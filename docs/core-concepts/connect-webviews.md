---
description: Use Connect Webviews to connect to your users' devices with the Seam API
---

# Connect Webviews

![](<../.gitbook/assets/Seam Connect.png>)

## Introduction to Connect Webview

The Seam Connect Webview is a shareable webpage that your users will use to link their smart device accounts to Seam, and allow you to access their devices via the Seam API.

Seam Connect Webviews will handle credential validation, multi-factor authentication, and error handling for each brand that we support. Connect Webviews works across all modern browsers and platforms, including Chrome, Safari, and Firefox.

### Connect Webview flow overview

The **Connect Webview flow** begins when your user wants to connect their smart device account to your app.

1. Call [/connect\_webviews/create](../api-clients/connect-webviews/create-a-connect-webview.md) to create a connect\_webview.

<pre class="language-json"><code class="lang-json"><strong>{
</strong>  "connect_webview_id": "14db0efd-50ae-45ef-9042-7f95c09082c2",
  "custom_redirect_url": null,
  "custom_redirect_failure_url": null,
  "url": "https://connect.getseam.com/v1/connect_webviews/view?connect_webview_id=14db0efd-50ae-45ef-9042-7f95c09082c2&#x26;auth_token=N4ZJau88guo5adHyBAPLsYdiCdoQvxpDb",
  "workspace_id": "ab804f5a-7dd2-42c8-8d09-0beff4f795eb",
  "device_selection_mode": "none",
  "accepted_providers": [ "august", "yale", "schlage", "wyze", "nest", "kwikset" ],
  "accepted_devices": [],
  "any_provider_allowed": false,
  "any_device_allowed": null,
  "created_at": "2022-02-16T17":45":10.523Z",
  "login_successful": false,
  "status": "pending"
}
</code></pre>

2\. Open the Connect Webview for your user using the `url` provided by the previous response.

3\. The user will be guided through the following steps:

* Select their device brand.
* Enter their credentials.
* Complete 2-factor authorization (if enabled).
* Review request device permissions by your app.

4\. Once the user completes the Webview, the application will redirect to the `custom_redirect_url` (if provided). The status of the Connect Webview will also be updated to "Authorized". The devices in the smart device account that was connected will now show up on your Workspace.

{% hint style="info" %}
Note that if your user wishes to link additional devices from different brands, you will need to create a new Connect Webview for each device account you want to connect.
{% endhint %}

## Customizing Connect Webviews

You can customize your application name and logo that is displayed in the Connect Webview you share with your users. To do that, access the **Webviews** tab on the left side of the [Seam developer Dashboard](https://console.seam.co/).

<figure><img src="../.gitbook/assets/Screen Shot 2022-11-02 at 12.27.29 AM.png" alt=""><figcaption><p>Webview Customization section on the left side (see purple outline)</p></figcaption></figure>
