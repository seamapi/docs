---
description: >-
  Follow this guide to get your production API keys and customize your Connect
  Webviews.
---

# Go Live!

## Create a Production Workspace

When you first sign up for Seam, [Seam Console](core-concepts/seam-console/) automatically creates a [sandbox workspace](core-concepts/workspaces/#sandbox-workspaces) for you. Sandbox workspaces are great for testing with virtual devices, but once you are ready to connect a real device, you must first create a [production workspace](core-concepts/workspaces/#production-workspaces).

1. In the upper-left corner of [Seam Console](https://console.seam.co/), click the workspace switcher.![Use the Seam Console workspace switcher to switch between workspaces and create new workspaces.](.gitbook/assets/workspace-switcher.png)
2. Click **New Workspace**.
3. In the **Add a Workspace** dialog, type a name for your new workspace and your company name.
4. Disable **Sandbox mode**.
5. Click **Create Workspace**.

## Create a Production API Key

Once you have switched to your production (non-sandbox) workspace (for example, "My Production Workspace"), you must create a production API key.

1. In the top navigation pane of [Seam Console](https://console.seam.co/), click **Developer**.
2. In the left navigation pane, click **API Keys**.
3. In the upper-right corner of the **API Keys** page, click **Add API Key**.
4. In the **Add API Key** dialog, type a name for your new production API key and then click **Create API Key**.
5. Copy the newly-created API key and store it for future use.

{% hint style="info" %}
Production API keys do not include the `test` token, while API keys for sandbox workspaces do include this `test` token. In addition, if you accidentally commit your API key to a GitHub repo, the `seam_` prefix is detected, and you are notified.
{% endhint %}

## Customize Your Connect Webviews

You can customize your [Connect Webviews](core-concepts/connect-webviews/). Seam Connect Webviews are fully-embedded client-side components that you add to your app if you want to enable your users to import their own devices using your app. Your users interact with your Connect Webviews to link their device accounts with your app. That is, Connect Webviews walk your users through the process of logging in to their device accounts.

1. In the top navigation pane of [Seam Console](https://console.seam.co/), click **Developer**.
2. In the left navigation pane, click **Connect Webviews**.
3. On the **Webviews** page, click **Configure your webivew**.
4. In the **Customize your Webview** area, add a logo, choose a logo shape, update the primary button style, or change the inviter name that your Connect Webviews display to your users.
