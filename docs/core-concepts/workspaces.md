---
description: >-
  Workspaces are the top-level resource in Seam and encapsulate all other
  resources, such as devices, events, or connected third-party accounts.
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Workspaces

## What is a Workspace?

A workspace can be thought of as a project or environment. It encapsulate all other Seam resources such as devices or connected third-party accounts. Resources within a workspace are accessed via an API key and events from a workspace can be received via webhooks.

There is no limit to how many workspaces a Seam customer can create, though most Seam customers only have two workspaces:&#x20;

* one **Sandbox** workspace where they can connect virtual devices to test their apps
* one **Production** workspace where they connect real devices.

<figure><img src="../.gitbook/assets/workspace-illustration.png" alt=""><figcaption><p>Workspaces encapsulate resources such as Devices and Connect Accounts. An API key for the Workspace is required to interact with those resources. Webhook endpoints can be configured to receive notifications from Devices inside a Workspace.</p></figcaption></figure>



***

## Production Workspaces

Production workspaces let you connect and control real devices from brands such as August, Schlage, Brivo, Nest, and more.&#x20;

### Create a Production Workspace

To create a Production workspace, follow the steps below:

1. Click on the workspace dropdown on the top right corner of the page.
2. Click on the **"+ Add Workspace"** button.
3. Enter a name for the workspace and leave the **"Sandbox mode"** toggle off.
4. Click **"Create Workspace"**.

{% @supademo/embed demoId="nXyjx_lwg6VxyiIU4DJkE" url="https://app.supademo.com/demo/nXyjx_lwg6VxyiIU4DJkE" %}

### Connecting Devices

There are two ways to connect devices with a Production Workspace. First, you can use the [**"+ Add Devices"** button in the Developer Console](#user-content-fn-1)[^1] and follow the instructions on screen:

1. Navigate to the **"Devices"** link in the left navigation bar.
2. From the Devices table, click on the **"Add Device"** button.
3. Select the brand of the device(s) to connect and follow the login instructions.
4. All devices associated with the account just linked will then appear in the Devices table.

Alternatively, if an application needs to control [its users'](#user-content-fn-2)[^2] devices, use [**Connect Webviews**](connect-webviews.md). Connect Webviews are programmatically created and presented to app users to select their device brands, enter their credentials, and authorize your application to control their devices. Once authorized, their devices will be linked with your Production workspace.

{% @supademo/embed demoId="h1y5QMki-7vzlghMzobuf" url="https://app.supademo.com/demo/h1y5QMki-7vzlghMzobuf" %}

### Common Workspace Setup

Most Seam customers use a single Production workspace to connect all their devices. This is irrespective of whether they own these devices or are controlling thousands of end customers' devices. For example, a property management application with thousands of customers will still use a single Production workspace to connect all of its customers' devices.&#x20;

<figure><img src="../.gitbook/assets/common-workspace-setup (2).png" alt=""><figcaption></figcaption></figure>

### Per-Customer Workspace Setup (Less Common)

Some Seam customers may be developing multiple applications that each need to interact with devices. In such scenarios, it is common to setup a different Production workspace for each application.&#x20;

For example, an IT firm who builds custom applications for its customers will most likely want to create a separate workspace for each customers. This can simplify security, support, and billing.

Occasionally, an application may also be using multiple Seam Workspaces. For example, a restaurant chain providing a management dashboard for its franchisee may want to use a different Seam workspace for each franchisee to simplify billing and support (example App 3 in the diagram below).&#x20;

<figure><img src="../.gitbook/assets/less-common-workspace-setup.png" alt=""><figcaption></figcaption></figure>



***

## Sandbox Workspaces

Sandbox workspaces are a special type of workspace designed for testing code. Sandbox workspaces offer test device accounts and virtual devices that can be connected and controlled.

This is quite handy as it removes the need to own physical devices from multiple brands.&#x20;

Importantly, **virtual devices behave identically to their real device counter-parts**. This means that if your application works with a virtual device in a Sandbox workspace, it will also work with a real device in a Production workspace.

{% hint style="info" %}
You can only connect virtual devices in a sandbox environment. To connect a real device, switch to a production workspace.
{% endhint %}

### Connecting a Virtual Device

To connect a virtual device, please refer to the [**Sandbox Test Account**](../device-guides/sandbox-and-sample-data/) section. All manufacturers and devices supported by Seam have one or more sandbox test account with pre-seeded devices.&#x20;

### Interacting with a Virtual Device

Certain virtual devices allow for test events to be triggered. This is useful to test code that depends on receiving event notifications from the Seam API. For example, virtual noise sensor devices such as Minut offer the ability to trigger a "noise event", which will emit [an event ](#user-content-fn-3)[^3]to your webhook endpoint.&#x20;

To interact with a device:

1. Navigate to the **"Devices"** link in the left navigation bar.
2. From the Devices table, click on the device you wish to interact with.
3. Click on the **"Actions"** tab.
4. Click on the desired action.

{% @supademo/embed demoId="NuhwAWiC1CaeGPRZzDENn" url="https://app.supademo.com/demo/NuhwAWiC1CaeGPRZzDENn" %}

### Resetting Sandboxes

Sandbox workspace are unique in that they can be reset to an original starting state. For example, if an application needs to run complex CI testing, the Sandbox workspace can be reset after each individual test run.&#x20;

You can reset a Sandbox workspace either manually via the Developer Console or programmatically using the Seam SDK. See our [**Reset Workspace API**](../api-clients/workspaces/reset-workspace.md) reference for detailed documentation.

{% tabs %}
{% tab title="Manual Reset" %}
To reset a Sandbox workspaces from the Seam Console: \
\
1\. Click the Workspace dropdown in the top right corner.\
2\. Select the name of the Sandbox workspace that needs to be reset.\
3\. Click on the **"Reset"** button.

<img src="../.gitbook/assets/Screenshot 2023-08-20 at 8.56.02 AM.png" alt="" data-size="original"> &#x20;
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.workspaces.resetSandbox()
```
{% endtab %}

{% tab title="Python" %}
```python
from seamapi import Seam

seam = Seam()
seam.workspaces.reset_sandbox() # resets the sandbox tied to your API key

```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new()
seam.workspaces.reset_sandbox
```
{% endtab %}

{% tab title="PHP" %}
```php
$seam->workspaces->reset_sandbox();
```
{% endtab %}
{% endtabs %}



***

## Create an API Key

API keys are used to control devices and other resources within a workspace. Note that API keys are scoped to a single workspace. If you need to access multiple workspaces, please refer to the [**Personal Access Token**](workspaces.md#advanced-topic-personal-access-token-pat) section below.&#x20;

To create an API key:

1. Navigate to the **"API Keys"** link in the left navigation bar.
2. Click the "**+ Add API Key"** button in the top right.
3. Name the API key, and click **"Create API Key"**.
4. Copy the API Key by clicking on the copy icon. Make sure to store this API Key somewhere safe! You'll be using this to authenticate your API calls.

{% @supademo/embed demoId="vLRzYM2Nwoi4j_cH9WCNQ" url="https://app.supademo.com/demo/vLRzYM2Nwoi4j_cH9WCNQ" %}

### Test an API Key

Test an API key by first exporting the key as `SEAM_API_KEY` as an environment variable and running the code sample below. If the key is valid, the workspace information will be visible.

```sh
$ export SEAM_API_KEY=seam_test2ZTo_0mEYQW2TvNDCxG5Atpj85Ffw
```

{% tabs %}
{% tab title="Javascript" %}
```java
import Seam from "seamapi";

// Seam will automatically use the SEAM_API_KEY environment variable if you
// don't provide an apiKey to `new Seam()`
const seam = new Seam();

const { workspace } = await seam.workspaces.get();
console.log(workspace);

/*
{
  workspace_id: 'ab804f5a-7dd2-42c8-8d09-0beff4f795eb',
  name: 'Sanbox',
  connect_partner_name: 'Acme',
  is_sandbox: true
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
from seamapi import Seam

# Seam will automatically use the SEAM_API_KEY environment variable if you
# don't provide an api_key to `Seam()`
seam = Seam()

workspace = seam.workspaces.get()
print(workspace)
# Workspace(workspace_id='1d2826eb-4a26-4f46-bddb-ef5898baa859', name="Anna's Sandbox", is_sandbox=True)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new()

workspace = seam.workspaces.get

puts workspace
# <Seam::Workspace:0x00438
#   workspace_id="1d2826eb-4a26-4f46-bddb-ef5898baa859"
#   name="Anna's Sandbox"
#   connect_partner_name="Anna Smith"
#   is_sandbox=true>

```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$workspace = $seam->workspaces->get();

echo json_encode($workspace);
/*
{
  workspace_id: 'ab804f5a-7dd2-42c8-8d09-0beff4f795eb',
  name: 'Sanbox',
  connect_partner_name: 'Acme',
  is_sandbox: true
}
*/
```
{% endtab %}
{% endtabs %}



***

## Configuring Webhooks

Endpoints can be configured in each workspace in order for an application to receive webhook notifications for resources such as Devices and Connected Accounts.

To configure webhook endpoints:

1. Navigate to the webhook menu.
2. Click the **"+ Add Webhook"** button.
3. Enter your Webhook URL, and select the event types you want to receive events for.
4. Click **"Create"**.
5. Copy your Webhook Secret and store it somewhere secure. You'll be using this to validate the payloads you receive on your Webhook.

{% @supademo/embed demoId="o9OPTdLxdQi_jt2d5htNw" url="https://app.supademo.com/demo/o9OPTdLxdQi_jt2d5htNw" %}

***

## Sharing Workspaces

Collaborators can be added to a workspace by navigating to the Team menu:

1. Go to the Team menu.
2. Click the **"+ Add Member"** button
3. Enter the email address of the new team member.
4. Click "**Add to Team**".

Your teammate will receive an email invitation to be added to your Workspace.

{% @supademo/embed demoId="YLZEbSgX5shkgOyFb4LE9" url="https://app.supademo.com/demo/YLZEbSgX5shkgOyFb4LE9" %}

***

## Personal Access Token (PAT)

In some instances, it may become necessary to access multiple workspaces with a single Seam credential. Since API Keys are scoped to a single workspace, Seam provides Personal Access Tokens ("PAT") to provide multi-workspace authorization.&#x20;

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption><p>Unlike API keys, PATs allow for multi-workspace authorization.</p></figcaption></figure>

### Creating a Personal Access Token

To create a Personal Access Token:

1. Click on the user settings drop-down in the top right of the Console.
2. Click on "**Settings**" which redirects to the user settings.
3. Navigate to the "Personal Access Tokens" menu.
4. Click the "**+Add Personal Access Token**" button and give the PAT token a name.

{% @supademo/embed demoId="ZY2oBrHFSx2Tmuwq8vzd_" url="https://app.supademo.com/demo/ZY2oBrHFSx2Tmuwq8vzd_" %}



[^1]: 

[^2]: your end users' devices?

[^3]: 
