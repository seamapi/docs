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

Production workspaces are for connecting real devices such as August smart locks or Nest thermostats. Use the device credentials to connect these devices (e.g. the Schlage app login).&#x20;

If your applications needs to control its users' devices, use [**Connect Webviews**](connect-webviews.md) for device owners to authorized your app against their device. Once authorized, their devices will be linked with your Production workspace.

Once real devices are connected to a Production workspace, create an API key to control them via the Seam API. Furthermore, when an individual interact with those devices in the real world (e.g. unlocking a smart lock), the Seam API will reflect the current state of those devices and emit events that can be received by webhooks.&#x20;



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

Certain virtual devices allow for test events to be triggers. This is useful to test code that depends on receiving event notifications from the Seam API. For example, virtual noise sensor devices such as Minut offer the ability to trigger a "high noise" event, which immediately emits an event and webhook. To do so, navigate to the device inside the console and click on the **"Action"** tab (see steps below).&#x20;

{% @supademo/embed demoId="NuhwAWiC1CaeGPRZzDENn" url="https://app.supademo.com/demo/NuhwAWiC1CaeGPRZzDENn" %}

### Resetting Sandboxes

Sandbox workspace are unique in that they can be reset to an original starting state. For example, if an application needs to run complex CI testing, the Sandbox workspace can be reset after each individual test run.&#x20;

You can reset a Sandbox workspace either manually via the Developer Console or programmatically using the Seam SDK. See our [**Reset Workspace API**](../api-clients/workspaces/reset-workspace.md) reference for detailed documentation.

{% tabs %}
{% tab title="Manual Reset" %}
Sandbox workspaces can be reset by clicking on the Workspace toggle in the Developer Console's top right corner, and then clicking on the **"Reset"** button.

<img src="../.gitbook/assets/Screenshot 2023-08-20 at 8.56.02 AM.png" alt="" data-size="original"> &#x20;


{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.workspaces.resetSandbox()
```
{% endtab %}

{% tab title="Python" %}
```python
seam.workspaces.reset_sandbox()
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
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

## Create an API Keys

API keys are used to control devices and other resources within a workspace. Create an API key in the Developer Console and test it using the Seam SDKs. Note that API keys are scoped to a single workspace. If you need to access multiple workspaces, please refer to the [**Personal Access Token**](workspaces.md#advanced-topic-personal-access-token-pat) section further down.&#x20;

To create an API key, navigate to the API Key section of the dashboard and click the "+ Add API Key" button in the top right. Name the API key and save it somewhere safe. Seam treats API keys as passwords and is not able to decrypt it once stored. If you lose your API key, you can delete it and recreate a new one.

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
# Workspace(workspace_id='ab804f5a-7dd2-42c8-8d09-0beff4f795eb', 
#   name='Sanbox', is_sandbox=True)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "MY_API_KEY")

workspace = seam.workspaces.get

puts workspace
# <Seam::Workspace:0x0070328                                          
#   workspace_id="123e4567-e89b-12d3-a456-426614174000"               
#   name="MySandbox"                                           
#   connect_partner_name="Partner Sandbox"                           
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

Navigate to the webhook menu to configure webhook to receive events related to devices and other resources inside the workspace. Seam's webhook configuration lets you define as many endpoint as needed. Webhooks can also be configured to only send specific events, providing you maximum flexibility on where to send events.&#x20;

{% @supademo/embed demoId="o9OPTdLxdQi_jt2d5htNw" url="https://app.supademo.com/demo/o9OPTdLxdQi_jt2d5htNw" %}

***

## Sharing Workspaces

Collaborators can easily be added to a workspace by navigating to the Team menu.&#x20;

{% @supademo/embed demoId="YLZEbSgX5shkgOyFb4LE9" url="https://app.supademo.com/demo/YLZEbSgX5shkgOyFb4LE9" %}

***

## Personal Access Token (PAT)

In some instances, it may become necessary to access multiple workspaces with a single Seam credential. Since API Keys are scoped to a single workspace, Seam provides Personal Access Tokens ("PAT") to provide multi-workspace authorization.&#x20;

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption><p>Unlike API keys, PATs allow for multi-workspace authorization.</p></figcaption></figure>

### Creating a Personal Access Token

Go to the user settings drop-down menu, click on "Settings", and navigate to the "Personal Access Tokens" menu. You can then create a PAT there.&#x20;

{% @supademo/embed demoId="ZY2oBrHFSx2Tmuwq8vzd_" url="https://app.supademo.com/demo/ZY2oBrHFSx2Tmuwq8vzd_" %}

