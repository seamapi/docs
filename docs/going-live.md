---
description: >-
  Follow the guide below to get your production API keys and customize your
  login portal.
---

# 🚀 Going Live!

## Create Production Workspace

When you first sign-up for Seam, a sandbox workspace is automatically created for you. Sandbox workspaces are great for testing with virtual devices, but once you're ready to connect a real device, you will first need to create a production workspace.

To do so, click the chevron in the top right and the workspace selector will appear. Now click the "**+ Add Workspace**" button. A modal will come up for you to create a new workspace. Enter your new workspace name, your company name, and make to **leave the "Sandbox mode" switch off.**

{% @supademo/embed demoId="nXyjx_lwg6VxyiIU4DJkE" url="https://app.supademo.com/demo/nXyjx_lwg6VxyiIU4DJkE" %}





## Generate a Production API Key

Once you've switched to your non-sandbox production workspace (e.g. "My Production Workspace"), you will need to create an API key. Switch to the API Key menu on the left, and click the "**+ Add API Key**" to bring up the API key creation modal. Give it a name, and click create.&#x20;



{% hint style="info" %}
Note that the resulting API key will NOT include the token "test" as is the case with sandbox workspaces. If you accidentally commit your API key to a Github repo, the `seam_` prefix will be detected and you will be notified.
{% endhint %}



{% @supademo/embed demoId="DChwTLKoiqFNyJ3PezXaW" url="https://app.supademo.com/demo/DChwTLKoiqFNyJ3PezXaW" %}



## Customize Login Portal

If you would like to customize the Seam login portal (learn about [Connect Webviews here](core-concepts/connect-webviews.md)), go to the Webviews menu to add a logo, update the base color, or change the name displayed to your users.

{% @supademo/embed demoId="1yFG_z1w2nhjXw074goGF" url="https://app.supademo.com/demo/1yFG_z1w2nhjXw074goGF" %}

