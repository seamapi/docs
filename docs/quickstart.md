---
description: >-
  Seam provides a unified API to connect and control IoT devices such as smart
  locks, thermostats, cameras, and sensors. This guide will walk you through
  issuing your first device API call.
---

# 🚲 Quickstart

## Step 1 — Connect Devices

Go to [**console.seam.co**](https://console.seam.co/) and create an account. Once logged in, you will be in the default Sandbox workspace. Click the **+Add Devices** button in the top right. You will be redirected to an Authorization flow to connect a device account.&#x20;

Select [**August**](https://august.com/) as the manufacturer and use the Sandbox test credentials below to login. Once authorized, the devices associated with this test account will appear in your workspace.

* **Email:** jane@example.com
* **Password:** 1234
* **2-Factor-Code:** 123456

{% @supademo/embed demoId="h1y5QMki-7vzlghMzobuf" url="https://app.supademo.com/demo/h1y5QMki-7vzlghMzobuf" %}

## Step 2 — Get API Key & SDK

#### Create an API Key

To control the devices you connected in [Step 1](quickstart.md#step-1-connect-devices), you will need an API key and the Seam SDK. Start by navigating to the API Keys section of the console and create an API key.&#x20;

{% @supademo/embed demoId="vLRzYM2Nwoi4j_cH9WCNQ" url="https://app.supademo.com/demo/vLRzYM2Nwoi4j_cH9WCNQ" %}

#### Install the Seam SDK

Next up, install one of the Seam client libraries in the language of your choice.

{% tabs %}
{% tab title="Javascript" %}
```sh
$ npm i seamapi
```
{% endtab %}

{% tab title="Python" %}
```sh
$ pip install seamapi
```
{% endtab %}

{% tab title="Ruby" %}
```sh
$ bundle add seamapi
```
{% endtab %}

{% tab title="PHP" %}
```sh
composer require seamapi/seam
```
{% endtab %}
{% endtabs %}



## Step 3 — Unlock a Door

It's time to unlock your first door! Open up a terminal and export your API key as an environment variable. Seam's client libraries will automatically pick it up.

```sh
$ export SEAM_API_KEY=seam_test2bMS_94SrGUXuNR2JmJkjtvBQDg5c
```

Next, use the code below to retrieve one of the devices you connected in [Step 1](quickstart.md#step-1-connect-devices). You can inspect the device's supported capabilities and use the Seam API to unlock the door.&#x20;

{% tabs %}
{% tab title="Javascript" %}
```javascript
import Seam from "seamapi";
const seam = new Seam(); // SEAM_API_KEY env var picked up here

const { devices: [someLock] } = await seam.locks.list();

// Inspect this device to see which capabilities it supports
console.log(someLock.capabilities_supported);
/*
  [ 'access_code', 'lock' ] 
*/

// As the device supports the 'lock' capability, we can use it to
// unlock the door if it's closed or lock it if it's open
if (someLock.properties.locked) {
  await seam.locks.unlockDoor(someLock.device_id);
} else {
  await seam.locks.lockDoor(someLock.device_id);
}
```
{% endtab %}

{% tab title="Python" %}
```python
from seamapi import Seam

seam = Seam() // SEAM_API_KEY env var picked up here
some_lock = seam.locks.list()[0]

# Inspect this device to see which capabilities it supports
print(some_lock.capabilities_supported)
# ['access_code', 'lock']

# As the device supports the 'lock' capability, we can use it to
# unlock the door if it's closed or lock it if it's open
if some_lock.properties["locked"]:
    seam.locks.unlock_door(some_lock)
else:
    seam.locks.lock_door(some_lock)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seamapi"

seam = Seam::Client.new(api_key: "YOUR_API_KEY")

some_lock = seam.locks.list().first

# Inspect this device to see which capabilities it supports
puts some_lock.capabilities_supported
# ['access_code', 'lock']

# As the device supports the 'lock' capability, we can use it to
# unlock the door if it's closed or lock it if it's open
if some_lock.properties["locked"]
    seam.locks.unlock_door(some_lock.device_id)
else
    seam.locks.lock_door(some_lock.device_id)
end
```
{% endtab %}

{% tab title="PHP" %}
```php
use Seam\SeamClient;

$seam = new SeamClient("YOUR_API_KEY");

$some_lock = $seam->locks->list()[0];

# Inspect this device to see which capabilities it supports
echo json_encode($some_lock->capabilities_supported)
# ["access_code", "lock"]

# As the device supports the 'lock' capability, we can use it to
# unlock the door if it's closed or lock it if it's open
if ($some_lock->properties->locked) {
  $seam->locks->unlock_door($lock->device_id);
} else {
  $seam->locks->lock_door($lock->device_id);
}
```
{% endtab %}
{% endtabs %}



## Congrats!! :tada:

Now that you have completed the Seam API Quickstart, you are well on your way to writing code that can \*actually\* control the physical world :sunglasses:

Below are some ideas on what you can do next.

#### Connecting a Real Device

If you have a real device, you can try to control it using the steps above. Note that you will first need to create a production workspace as Sandbox workspaces only let you connect test accounts and devices. You can learn about production workspaces in our [**Workspace**](core-concepts/workspaces.md) section.

#### Connecting Users' Devices

If you are creating an application that needs to control your user's devices, head over to our [Connect Webview](core-concepts/connect-webviews.md) section. Connect Webviews are fully embedded client-side components that **live in your application** and which your users interact with in order to link their device accounts with your app. Seam handles all the authentication steps and, once your user has authorized your application, you will be able to access and control their devices using the Seam API.

![](<.gitbook/assets/Seam Connect.png>)

#### Learn about Devices & Capabilities

Seam supports many device categories. Each device can be broken down into [device capabilities](core-concepts/device-capabilities.md). A capability lets you what the device can do, what properties it has, and what events it emits. To learn more about specific capabilities such as access codes or thermostats, check out the guides linked below.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-type="select"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Door Lock API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/smart-locks-16-9.png">smart-locks-16-9.png</a></td><td></td><td><a href="device-guides/get-started-with-smartlocks-api.md">get-started-with-smartlocks-api.md</a></td></tr><tr><td><strong>Thermostats API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/thermostats-16-9.png">thermostats-16-9.png</a></td><td></td><td><a href="broken-reference/">broken-reference</a></td></tr><tr><td><strong>Noise</strong> <strong>Sensors API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/sensors-16-9.png">sensors-16-9.png</a></td><td></td><td><a href="device-guides/get-started-with-minut-sensors.md">get-started-with-minut-sensors.md</a></td></tr></tbody></table>

