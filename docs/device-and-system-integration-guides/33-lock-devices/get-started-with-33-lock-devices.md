---
description: Learn how to connect and control 33 Lock smart locks with the Seam API.
---

# Get started with 33 Lock devices

<figure><picture><source srcset="../../.gitbook/assets/33lock-manufacturer-page-cover-dark.png" media="(prefers-color-scheme: dark)"><img src="../../.gitbook/assets/33lock-manufacturer-page-cover-light.png" alt="Connect and control any 33 Locks device using the Seam API."></picture><figcaption><p>33 Lock smart locks</p></figcaption></figure>

## Overview

Seam provides a universal API to connect and control many brands of IoT devices and systems, including smart locks, access control systems (ACSs), thermostats, and noise sensors.

This guide gives you a rapid introduction to connecting and controlling your [33 Lock device](./) using the Seam API. For application developers, you can use the Seam API in your app, and your users can authorize your app to control their devices using Seam.

For detailed information about the 33 Lock devices that Seam supports, see our [33 Lock Supported Devices page](https://www.seam.co/manufacturers/33-lock).

To learn more about other IoT device and system brands that Seam supports—such as Yale, Schlage, Google Nest, and many more—visit our [integration page](https://www.seam.co/supported-devices-and-systems).

{% hint style="success" %}
This guide shows you how to install a Seam SDK and then control your 33 Lock device using the Seam API.

Another easy way to learn about what you can do with the Seam API is to explore the [interactive Seam CLI](../../core-concepts/seam-console/seam-online-cli.md), which you can access from directly within the [Seam Console](../../core-concepts/seam-console/).

:arrow\_forward: [Go to the Seam Console!](https://console.seam.co/)
{% endhint %}

***

## Step 1: Install a Seam SDK

Seam provides client libraries for many languages, including JavaScript, Python, Ruby, PHP, and others, as well as a Postman collection and an [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* JavaScript / TypeScript ([npm](https://www.npmjs.com/package/seam), [GitHub](https://github.com/seamapi/javascript))
* Python ([pip](https://pypi.org/project/seam/), [GitHub](https://github.com/seamapi/python))
* Ruby Gem ([rubygem](https://rubygems.org/gems/seam), [GitHub](https://github.com/seamapi/ruby))
* PHP ([packagist](https://packagist.org/packages/seamapi/seam), [GitHub](https://github.com/seamapi/php))
* C# ([nuget](https://www.nuget.org/packages/Seam), [GitHub](https://github.com/seamapi/csharp))

First, install a Seam SDK, as follows:

{% tabs %}
{% tab title="JavaScript" %}
```bash
npm i seam
```
{% endtab %}

{% tab title="Python" %}
```bash
pip install seam
# For some development environments, use pip3 in this command instead of pip.
```
{% endtab %}

{% tab title="Ruby" %}
```bash
bundle add seam
```
{% endtab %}

{% tab title="PHP" %}
```bash
composer require seamapi/seam
```
{% endtab %}

{% tab title="C#" %}
Install using [nuget](https://www.nuget.org/packages/Seam).
{% endtab %}
{% endtabs %}

Next, go to [https://console.seam.co/](https://console.seam.co/) and [sign up for Seam](../../core-concepts/seam-console/#create-a-seam-account) to get your [API key](../../core-concepts/authentication/api-keys.md).

Then, export your API key as an environment variable.

```bash
$ export SEAM_API_KEY=seam_test2bMS_94SrGUXuNR2JmJkjtvBQDg5c
```

{% hint style="info" %}
This guide uses a [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces). You can only connect virtual devices and systems in this type of workspace. If you want to connect a real 33 Lock device, use a [non-sandbox workspace](../../core-concepts/workspaces/#production-workspaces) and API key.
{% endhint %}

***

## Step 2: Link your 33 Lock with Seam

To control your 33 Lock device using the Seam API, you must first authorize your Seam workspace to connect to your associated TTLock account. If your application needs to connect to your users' TTLock accounts, Seam provides fully-embedded, [customizable](../../core-concepts/connect-webviews/customizing-connect-webviews.md) client-side [Connect Webviews](../../core-concepts/connect-webviews/) to collect their authorization securely. These user-friendly pre-built authorization flows walk your users through the process of granting your Seam workspace permission to control their 33 Lock devices. The Connect Webview presents a flow that prompts your users to enter their credentials for their TTLock account.

In this guide, you create a Connect Webview object. Then, you display the graphical component of the created Connect Webview and enter a set of sample credentials to connect a sandbox TTLock account.

{% hint style="success" %}
This guide shows you how to create a Connect Webview programmatically using the Seam API.

The [Seam Console](../../core-concepts/seam-console/) provides another easy way to connect devices to your Seam workspace.

Go to [https://console.seam.co/](https://console.seam.co/). On the **Devices** page, click **+ Add Devices**. Then, see [Authorize your workspace](get-started-with-33-lock-devices.md#authorize-your-workspace) in this guide to complete the Connect Webview authorization flow.

<img src="../../.gitbook/assets/add-devices-button.png" alt="You can also use the Seam Console to add devices." data-size="original">
{% endhint %}

### Create a Connect Webview

Create a `connect_webview` object and then note the returned URL.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
from seam import Seam

seam = Seam()  # Seam automatically uses your exported SEAM_API_KEY.

connect_webview = seam.connect_webviews.create(accepted_providers=["ttlock"])

assert connect_webview.login_successful is False

# Use the returned Connect Webview URL to display
# the Connect Webview authorization flow to your user.
print(connect_webview.url)
```

**Output:**

```
https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
  "accepted_providers": ["ttlock"]
}' | jq -r '"Login Successful (false): " + (.connect_webview.login_successful | tostring),
  "URL: " + .connect_webview.url'
  # Use the returned Connect Webview URL to display
  # the Connect Webview authorization flow to your user.
```

**Output:**

```
Login Successful (false): false
https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
import { Seam } from "seam";

const seam = new Seam(); // Seam automatically uses your exported SEAM_API_KEY.

const connectWebview = await seam.connectWebviews.create({
  accepted_providers: ['ttlock']
});

console.log(connectWebview.login_successful); // false

// Use the returned Connect Webview URL to display
// the Connect Webview authorization flow to your user.
console.log(connectWebview.url);
```

**Output:**

```
false
https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
require "seam"

seam = Seam.new() # Seam automatically uses your exported SEAM_API_KEY.

connect_webview = seam.connect_webviews.create(
  accepted_providers: ["ttlock"]
)

puts connect_webview.login_successful # false

# Use the returned Connect Webview URL to display
# the Connect Webview authorization flow to your user.
puts connect_webview.url
```

**Output:**

```
false
https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
<?php
require 'vendor/autoload.php';

$seam = new Seam\SeamClient(); // Seam automatically uses your exported SEAM_API_KEY.

$connect_webview = $seam->connect_webviews->create(
  accepted_providers: ["ttlock"]
);

echo $connect_webview->login_successful ? 'true' : 'false', "\n"; // false

// Use the returned Connect Webview URL to display
// the Connect Webview authorization flow to your user.
echo $connect_webview->url;
```

**Output:**

```
false
https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
using Seam.Client;

var seam = new SeamClient(apiToken: SEAM_API_KEY);

var connectWebview = seam.ConnectWebviews.Create(
  acceptedProviders: new() {Seam.Api.ConnectWebviews.CreateRequest.AcceptedProvidersEnum.Ttlock}
);

Console.WriteLine(connectWebview.LoginSuccessful); // False

// Use the returned Connect Webview URL to display
// the Connect Webview authorization flow to your user.
Console.WriteLine(connectWebview.Url);
```

**Output:**

```
False
https://connect.getseam.com/connect_webviews/view?connect_webview_id=12345678-1234-1234-1234-123456789012&auth_token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
{% endtab %}
{% endtabs %}

***

### Authorize your workspace

In a web browser, go to the URL that the Connect Webview object returned.

For application developers, you can redirect your user to this Connect Webview URL so that they can authorize your app to control their devices using Seam. We even provide a prebuilt [Connect Account Button](../../seam-components/react-components/connect-account-button.md) within our suite of [Seam Components](../../seam-components/overview/) that help you build your device management flow.

{% hint style="success" %}
Because you're using a sandbox workspace, you can connect Seam's test TTLock account. We provide [virtual devices](../../device-guides/sandbox-and-sample-data/) for each of the brands that we support. These sandbox devices and systems enable you to test your app with devices from multiple brands without the need to own all the corresponding physical devices.
{% endhint %}

Complete the Connect Webview authorization flow by entering the following [TTLock sandbox account](../../device-guides/sandbox-and-sample-data/ttlock-sample-data.md) credentials:

* **Email:** jane@example.com
* **Password:** 1234

<figure><picture><source srcset="../../.gitbook/assets/33-lock_connect-flow-screens_dark.png" media="(prefers-color-scheme: dark)"><img src="../../.gitbook/assets/33-lock_connect-flow-screens_light.png" alt="Use the Seam Connect Webview authorization flow to connect a TTLock account with Seam. This flow varies slightly based on the device manufacturer and region."></picture><figcaption><p>Use the Seam Connect Webview authorization flow to connect a TTLock account with Seam. This flow varies slightly based on the device manufacturer and region.</p></figcaption></figure>

Confirm that authorization through the Connect Webview was successful by querying its status.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
updated_connect_webview = seam.connect_webviews.get(connect_webview.connect_webview_id)

assert updated_connect_webview.login_successful is True # True
```

**Output:**

```
True
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"connect_webview_id\": \"${connect_webview_id}\"
}" | jq -r '"Login Successful (true): " + (.connect_webview.login_successful | tostring)'
```

**Output:**

```
Login Successful (true): true
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const updatedConnectWebview = await seam.connectWebviews.get({
  connect_webview_id: connectWebview.connect_webview_id
});

console.log(updatedConnectWebview.login_successful); // true
```

**Output:**

```
true
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
updated_connect_webview = seam.connect_webviews.get(
  connect_webview_id: connect_webview.connect_webview_id
)

puts updated_connect_webview.login_successful # true
```

**Output:**

```
true
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$updated_connect_webview = $seam->connect_webviews->get(
  connect_webview_id: $connect_webview->connect_webview_id
);

echo $updated_connect_webview->login_successful ? 'true' : 'false', "\n"; // true
```

**Output:**

```
true
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
var updatedConnectWebview = seam.ConnectWebviews.Get(
  connectWebviewId: connectWebview.connectWebviewId
);

Console.WriteLine(updatedConnectWebview.LoginSuccessful); // True
```

**Output:**

```
True
```
{% endtab %}
{% endtabs %}

***

## Step 3: Retrieve 33 Lock devices

When you link a TTLock account (for your 33 Lock devices) with Seam, we create a `device` object to represent each 33 Lock lock in your account. You can then retrieve these 33 Lock devices using the [List Devices](../../api/devices/list.md) and [Get Device](../../api/devices/get.md) endpoints.

The Seam API exposes each device's properties, such as the door lock status, power status, capabilities, and so on.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Retrieve all devices, filtered by manufacturer,
# which is one of several filters that list() supports.
all_ttlock_locks = seam.devices.list(manufacturer="ttlock")

# Select the first device as an example.
front_door = all_ttlock_locks[0]

# Inspect specific properties.
assert front_door.properties["online"] is True # True
assert front_door.properties["locked"] is True # True

# View the entire returned device object.
pprint(front_door)
```

**Output:**

```
Device(
  device_id='11111111-1111-1111-1111-444444444444',
  display_name='Lock 1',
  workspace_id='00000000-0000-0000-0000-000000000000'
  connected_account_id='11111111-1111-1111-1111-222222222222',
  created_at='2024-05-29T20:08:48.878Z',
  properties={
    'manufacturer': 'ttlock',
    'online': True,
    'locked': True,
    'battery': {
      'level': 0.9999532347993827,
      'status': 'full'
    },
    ...
  }
  can_remotely_unlock=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Retrieve all devices, filtered by manufacturer, which is
# one of several filters that the list endpoint supports.
all_ttlock_locks=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/list' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
    "manufacturer": "ttlock"
  }')

# Select the first device as an example.
front_door=$(jq -r '.devices[0]' <<< ${all_ttlock_locks})

# Inspect specific properties.
echo $(jq -r '"Online (true): " + (.properties.online | tostring)' <<< ${front_door})
echo $(jq -r '"Locked (true): " + (.properties.locked | tostring)' <<< ${front_door})

# View the entire returned device object.
echo ${front_door}
```

**Output:**

```json
Online (true): true
Locked (true): true
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "display_name": "Lock 1",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  "created_at": "2024-05-29T20:08:48.878Z",
  "properties": {
    "manufacturer": "ttlock",
    "locked": true,
    "online": true,
    "battery": {
      "level": 0.9999532347993827,
      "status": "full"
    },
    ...
  },
  "can_remotely_unlock": true,
  ...
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Retrieve all devices, filtered by manufacturer,
// which is one of several filters that list() supports.
const allTtlockLocks = await seam.devices.list({manufacturer: "ttlock"});

// Select the first device as an example.
const frontDoor = allTtlockLocks[0];

// Inspect specific properties.
console.log(frontDoor.properties.online); // true
console.log(frontDoor.properties.locked); // true

// View the entire returned device object.
console.log(frontDoor);
```

**Output:**

```json
true
true
{
  device_id: '11111111-1111-1111-1111-444444444444',
  display_name: 'Lock 1',
  workspace_id: '00000000-0000-0000-0000-000000000000',
  connected_account_id: '11111111-1111-1111-1111-222222222222',
  created_at: '2024-05-29T20:08:48.878Z',
  properties: {
    manufacturer: 'ttlock',
    online: true,
    locked: true,
    battery: {
      level: 0.9999532347993827,
      status: 'full'
    },
    ...
  },
  can_remotely_unlock: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Retrieve all devices, filtered by manufacturer,
# which is one of several filters that list() supports.
all_ttlock_locks = seam.devices.list(manufacturer: "ttlock")

# Select the first device as an example.
front_door = all_ttlock_locks[0]

# Inspect specific properties.
puts front_door.properties.online # true
puts front_door.properties.locked # true

# View the entire returned device object.
puts front_door.inspect
```

**Output:**

```json
true
true
<
  Seam::Device:0x00438
    device_id="11111111-1111-1111-1111-444444444444"
    display_name="Lock 1"
    workspace_id="00000000-0000-0000-0000-000000000000"
    connected_account_id="11111111-1111-1111-1111-222222222222"
    created_at=2024-05-29 20:08:48.878 UTC
    properties={
      "manufacturer"=>"ttlock",
      "online"=>true,
      "locked"=>true,
      "battery"=>{
        "level"=>0.9999532347993827,
        "status"=>"full"
      },
      ...
    }
    can_remotely_unlock=true
    ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Retrieve all devices, filtered by manufacturer,
// which is one of several filters that list() supports.
$all_ttlock_locks = $seam->devices->list(manufacturer: "ttlock");

// Select the first device as an example.
$front_door = $all_ttlock_locks[0];

// Inspect specific properties.
echo $front_door->properties->online ? 'true' : 'false', "\n"; // true
echo $front_door->properties->locked ? 'true' : 'false', "\n"; // true

// View the entire returned device object.
echo json_encode($front_door, JSON_PRETTY_PRINT);
```

**Output:**

```json
true
true
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "display_name": "Lock 1",
  "workspace_id": "00000000-0000-0000-0000-000000000000"
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  "created_at": "2024-05-29T20:08:48.878Z",
  "properties": {
    "manufacturer": "ttlock",
    "online": true,
    "locked": true,
    "battery": {
      "level": 0.9999532347993827,
      "status": "full"
    },
    ...
  },
  "can_remotely_unlock": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Retrieve all devices, filtered by manufacturer,
// which is one of several filters that list() supports.
var allTtlockLocks = seam.Devices.List(
  manufacturer: Seam.Api.Devices.ListRequest.ManufacturerEnum.Ttlock
);

// Select the first device as an example.
Device frontDoor = allTtlockLocks[0];

// Inspect specific properties.
Console.WriteLine(frontDoor.Properties.Online); // true
Console.WriteLine(frontDoor.Properties.Locked); // true

// View the entire returned device object.
Console.WriteLine(frontDoor);
```

**Output:**

```json
True
True
{
  "device_id": "11111111-1111-1111-1111-444444444444",
  "display_name": "Lock 1",
  "workspace_id": "00000000-0000-0000-0000-000000000000",
  "connected_account_id": "11111111-1111-1111-1111-222222222222",
  "created_at": "2024-05-29T20:08:48.878Z",
  "properties": {
    "manufacturer": "ttlock",
    "online": true,
    "locked": true,
    "battery": {
      "level": 0.9999532,
      "status": "full"
    },
    ...
  },
  "can_remotely_unlock": true,
  ...
}
```
{% endtab %}
{% endtabs %}

***

## Step 4: Control your 33 Lock device

Next, you can use the Seam API to control your lock.

Each device that you connect to Seam has a specific set of capabilities. These capabilities define the Seam API actions that you can use, such as [remote unlock actions](../../products/smart-locks/lock-and-unlock.md), [programming access codes](../../products/smart-locks/access-codes/), and so on. Seam's intuitive and granular [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags) inform your application about what features and behaviors each device supports. Notice the capability flags within the code samples in this guide.

Try out the following actions on your 33 Lock device:

* [ ] [Unlock your lock](get-started-with-33-lock-devices.md#unlock-your-lock)
* [ ] [Program access codes on your lock](get-started-with-33-lock-devices.md#program-access-codes-on-your-lock)

### Unlock your lock

To unlock a door, use the [Unlock Door](../../api/locks/unlock_door.md) endpoint. Specify the device that you want to unlock by including the `device_id` in the request body. This endpoint returns an [action attempt](../../core-concepts/action-attempts.md) to track the progress of the unlock operation.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Confirm that the device can remotely unlock.
# You're using a capability flag here!
if front_door.can_remotely_unlock:
  # Perform the unlock operation
  # and return an action attempt.
  action_attempt=seam.locks.unlock_door(device_id=front_door.device_id)
```

**Output:**

```
ActionAttempt(
  status='pending',
  action_type='UNLOCK_DOOR',
  action_attempt_id='11111111-2222-3333-4444-555555555555',
  result=None,
  error={}
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Confirm that the device can remotely unlock.
# You're using a capability flag here!
if  $(jq -r '.can_remotely_lock' <<< ${front_door}); then \
  # Perform the unlock operation
  # and return an action attempt.
  curl -X 'POST' \
    'https://connect.getseam.com/locks/unlock_door' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device_id' <<< ${front_door})\"
  }";
fi
```

**Output:**

```json
{
  "action_attempt": {
    "status":"pending",
    "action_type":"UNLOCK_DOOR",
    "action_attempt_id":"11111111-2222-3333-4444-555555555555",
    "result":null,
    "error":null
  },
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Confirm that the device can remotely unlock.
// You're using a capability flag here!
if (frontDoor.can_remotely_unlock) {
  // Perform the unlock operation
  // and return an action attempt.
  const actionAttempt = await seam.locks.unlockDoor({
    device_id: frontDoor.device_id
  });
};
```

**Output:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '11111111-2222-3333-4444-555555555555',
    action_type: 'UNLOCK_DOOR',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Confirm that the device can remotely unlock.
# You're using a capability flag here!
if (front_door.can_remotely_unlock)
  # Perform the unlock operation
  # and return an action attempt.
  action_attempt = seam.locks.unlock_door(device_id: front_door.device_id)
end
```

**Output:**

```
<Seam::ActionAttempt:0x00438
  status="pending"
  action_type="UNLOCK_DOOR"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  result=nil>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Confirm that the device can remotely unlock.
// You're using a capability flag here!
if ($front_door->can_remotely_unlock) {
  // Perform the unlock operation
  // and return an action attempt.
  $action_attempt = $seam->locks->unlock_door(device_id: $front_door->device_id);
}
```

**Output:**

```json
{
  "action_attempt_id":"11111111-2222-3333-4444-555555555555",
  "action_type":"UNLOCK_DOOR",
  "error":null,
  "result":{},
  "status":"success"
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Confirm that the device can remotely unlock.
// You're using a capability flag here!
if (frontDoor.CanRemotelyUnlock == true) {
  // Perform the unlock operation
  // and return an action attempt.
  ActionAttempt actionAttempt = seam.Locks.UnlockDoor(deviceId: frontDoor.DeviceId);
}
```

**Output:**

```json
{
  "status": "pending",
  "action_type": "UNLOCK_DOOR",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555"
}
```
{% endtab %}
{% endtabs %}

You can track the status of the unlock operation to confirm that the device unlocked successfully. Query the `locked` status of the device, [retrieve the action attempt](../../api/action_attempts/get.md) by ID, or look for a [`lock.unlocked` event](../../api/events/).

To query the `locked` status of the device:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the device by ID.
updated_front_door = seam.devices.get(device_id=front_door.device_id)

# Inspect the locked property to confirm
# that the unlock operation was successful.
assert updated_front_door.properties["locked"] is False # False
```

**Output:**

```
False
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Get the device by ID.
updated_front_door=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/devices/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device_id' <<< ${front_door})\"
  }")

# Inspect the locked property to confirm
# that the unlock operation was successful.
echo $(jq -r '"Locked (false): " + (.device.properties.locked | tostring)' <<< ${updated_front_door})
```

**Output:**

```
Locked (false): false
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Get the device by ID.
const updatedFrontDoor = await seam.devices.get({device_id: frontDoor.device_id});

// Inspect the locked property to confirm
// that the unlock operation was successful.
console.log(updatedFrontDoor.properties.locked) // false
```

**Output:**

```
false
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Get the device by ID.
updated_front_door = seam.devices.get(device_id: front_door.device_id)

# Inspect the locked property to confirm
# that the unlock operation was successful.
puts updated_front_door.properties.locked # false
```

**Output:**

```
false
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Get the device by ID.
$updated_front_door = $seam->devices->get(device_id: $front_door->device_id);

// Inspect the locked property to confirm
// that the unlock operation was successful.
echo $updated_front_door->properties->locked ? 'true' : 'false', "\n"; // false
```

**Output:**

```
false
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Get the device by ID.
Device updatedFrontDoor = seam.Devices.Get(
  deviceId: frontDoor.DeviceId
);

// Inspect the locked property to confirm
// that the unlock operation was successful.
Console.WriteLine(updatedFrontDoor.Properties.Locked); // false
```

**Output:**

```
False
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
Now that you have successfully unlocked your lock, you can use the [Lock Door](../../api/locks/lock_door.md) endpoint to lock it again.
{% endhint %}

***

### Program access codes on your lock

You can use the Seam API to program [online access codes](../../products/smart-locks/access-codes/) on 33 Lock devices. These devices have an integrated keypad. Lock users can then enter these access codes using the keypad to unlock the lock.

The Seam API makes it easy to program both [ongoing](../../products/smart-locks/access-codes/#ongoing-access-codes) and [time-bound](../../products/smart-locks/access-codes/#time-bound-access-codes) online access codes.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Confirm that the device supports online access codes.
# Here's another capability flag!
if updated_front_door.can_program_online_access_codes:
  # Create an ongoing online access code.
  seam.access_codes.create(
    device_id = updated_front_door.device_id,
    name = "my ongoing code",
    code = "1234"
  )
  # Create a time-bound online access code.
  seam.access_codes.create(
    device_id = updated_front_door.device_id,
    name = "my time-bound code",
    starts_at = "2025-01-01T16:00:00Z",
    ends_at = "2025-01-22T12:00:00Z",
    code = "2345"
  )
  # List all access codes for this device.
  access_codes = seam.access_codes.list(
    device_id = updated_front_door.device_id
  )
  pprint(access_codes)
```

**Output:**

```
[
  AccessCode(
    access_code_id='11111111-1111-1111-1111-555555555555',
    device_id='11111111-1111-1111-1111-444444444444',
    type='ongoing',
    code='1234',
    name='my ongoing code',
    ...
  )
  AccessCode(
    access_code_id='11111111-1111-1111-1111-666666666666',
    device_id='11111111-1111-1111-1111-444444444444',
    type='time_bound',
    code='2345',
    starts_at='2025-01-01T16:00:00.000Z',
    ends_at='2025-01-22T12:00:00.000Z',
    name='my time-bound code',
    ...
  )
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Confirm that the device supports online access codes.
# Here's another capability flag!
if  $(jq -r '.device.can_program_online_access_codes' <<< ${updated_front_door}); then \
  # Create an ongoing online access code.
  curl -X 'POST' \
    'https://connect.getseam.com/access_codes/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${updated_front_door})\",
      \"name\": \"my ongoing code\",
      \"code\": \"1234\"
  }"
  # Create a time-bound online access code.
  curl -X 'POST' \
    'https://connect.getseam.com/access_codes/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${updated_front_door})\",
      \"name\": \"my time-bound code\",
      \"starts_at\": \"2025-01-01T16:00:00Z\",
      \"ends_at\": \"2025-01-22T12:00:00Z\",
      \"code\": \"2345\"
  }"
  # List all access codes for this device.
  access_codes=$(
  # Use GET or POST.
  curl -X 'GET' \
    'https://connect.getseam.com/access_codes/list' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"device_id\": \"$(jq -r '.device.device_id' <<< ${updated_front_door})\"
  }")
  echo ${access_codes};
fi
```

**Output:**

```json
{
  "access_codes": [
    {
      "access_code_id":"11111111-1111-1111-1111-555555555555",
      "device_id":"11111111-1111-1111-1111-444444444444",
      "name":"my ongoing code",
      "code":"1234",
      "type":"ongoing",
      ...
    },
    {
      "access_code_id": "11111111-1111-1111-1111-666666666666",
      "device_id": "11111111-1111-1111-1111-444444444444",
      "name": "my time-bound code",
      "code": "2345",
      "type": "time_bound",
      "starts_at": "2025-01-01T16:00:00.000Z",
      "ends_at": "2025-01-22T12:00:00.000Z",
      ...
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Confirm that the device supports online access codes.
// Here's another capability flag!
if (updatedFrontDoor.can_program_online_access_codes) {
  // Create an ongoing online access code.
  await seam.accessCodes.create({
    device_id: updatedFrontDoor.device_id,
    name: "my ongoing code",
    code: "1234"
  });
  // Create a time-bound online access code.
  await seam.accessCodes.create({
    device_id: updatedFrontDoor.device_id,
    name: "my time-bound code",
    starts_at: "2025-01-01T16:00:00Z",
    ends_at: "2025-01-22T12:00:00Z",
    code: "2345"
  });
  // List all access codes for this device.
  const accessCodes = await seam.accessCodes.list({
    device_id: updatedFrontDoor.device_id
  });
  console.log(accessCodes);
};
```

**Output:**

```json
[
  {
    access_code_id: '11111111-1111-1111-1111-555555555555',
    device_id: '11111111-1111-1111-1111-444444444444',
    name: 'my ongoing code',
    code: '1234',
    type: 'ongoing',
    ...
  },
  {
    access_code_id: '11111111-1111-1111-1111-666666666666',
    device_id: '11111111-1111-1111-1111-444444444444',
    name: 'my time-bound code',
    code: '2345',
    type: 'time_bound',
    starts_at: '2025-01-01T16:00:00.000Z',
    ends_at: '2025-01-22T12:00:00.000Z',
    ...
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Confirm that the device supports online access codes.
# Here's another capability flag!
if (updated_front_door.can_program_online_access_codes)
  # Create an ongoing online access code.
  seam.access_codes.create(
    device_id: updated_front_door.device_id,
    name: "my ongoing code",
    code: "1234"
  )
  # Create a time-bound online access code.
  seam.access_codes.create(
    device_id: updated_front_door.device_id,
    name: "my time-bound code",
    starts_at: "2025-01-01T16:00:00Z",
    ends_at: "2025-01-22T12:00:00Z",
    code: "2345"
  )
  # List all access codes for this device.
  access_codes = seam.access_codes.list(
    device_id: updated_front_door.device_id
  )
  puts access_codes.inspect
end
```

**Output:**

```
[
  <Seam::AccessCode:0x00460
    access_code_id="11111111-1111-1111-1111-555555555555"
    device_id="11111111-1111-1111-1111-444444444444"
    name="my ongoing code"
    code="1234"
    type="ongoing"
    ...
  >,
  <Seam::AccessCode:0x00438
    access_code_id="11111111-1111-1111-1111-666666666666"
    device_id="11111111-1111-1111-1111-444444444444"
    name="my time-bound code"
    code="2345"
    type="time_bound"
    starts_at=2025-01-01 16:00:00 UTC
    ends_at=2025-01-22 12:00:00 UTC
    ...
  >
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Confirm that the device supports online access codes.
// Here's another capability flag!
if ($updated_front_door->can_program_online_access_codes) {
  // Create an ongoing online access code.
  $seam->access_codes->create(
    device_id: $updated_front_door->device_id,
    name: "my ongoing code",
    code: "1234"
  );
  // Create a time-bound online access code.
  $seam->access_codes->create(
    device_id: $updated_front_door->device_id,
    name: "my time-bound code",
    starts_at:  "2025-01-01T16:00:00Z",
    ends_at: "2025-01-22T12:00:00Z",
    code: "2345"
  );
  // List all access codes for this device.
  $access_codes = $seam->access_codes->list(
    device_id: $updated_front_door->device_id
  );
  echo json_encode($access_codes, JSON_PRETTY_PRINT);
}
```

**Output:**

```json
[
  {
    "access_code_id": "11111111-1111-1111-1111-555555555555",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "name": "my ongoing code",
    "type": "ongoing",
    "code": "1234",
    ...
  },
  {
    "access_code_id": "11111111-1111-1111-1111-666666666666",
    "device_id": "11111111-1111-1111-1111-444444444444",
    "name": "my time-bound code",
    "type": "time_bound",
    "starts_at": "2025-01-01T16:00:00.000Z",
    "ends_at": "2025-01-22T12:00:00.000Z",
    "code": "2345",
  }
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Confirm that the device supports online access codes.
// Here's another capability flag!
if (updatedFrontDoor.CanProgramOnlineAccessCodes == true) {
  // Create an ongoing online access code.
  seam.AccessCodes.Create(
    deviceId: updatedFrontDoor.DeviceId,
    name: "my ongoing code",
    code: "1234"
  );
  // Create a time-bound online access code.
  seam.AccessCodes.Create(
    deviceId: updatedFrontDoor.DeviceId,
    name: "my time-bound code",
    startsAt: "2025-01-01T16:00:00Z",
    endsAt: "2025-01-22T12:00:00Z",
    code: "2345"
  );
  // List all access codes for this device.
  var accessCodes = seam.AccessCodes.List(
    deviceId: updatedFrontDoor.DeviceId
  );
  foreach (var accessCode in accessCodes)
  {
    Console.WriteLine(accessCode);
  }
}
```

**Output:**

```json
{
  "type": "ongoing",
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my ongoing code",
  "code": "1234",
  ...
}
{
  "type": "time_bound",
  "access_code_id": "11111111-1111-1111-1111-666666666666",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "name": "my time-bound code",
  "starts_at": "2025-01-01T16:00:00Z",
  "ends_at": "2025-01-22T12:00:00Z",
  "code": "2345",
  ...
}
```
{% endtab %}
{% endtabs %}

***

## Step 5: Connect a real 33 Lock device

Now that you have learned the basics of using the Seam API, you can connect and control a real 33 Lock device. To do so, make sure to switch to a [non-sandbox workspace](../../core-concepts/workspaces/#production-workspaces) and [API key](../../core-concepts/authentication/api-keys.md).

For more details about setting up your real 33 Lock device, see the [33 Lock locks integration guide](./).

***

## Step 6: Build your application!

Seam makes it easy to develop your application. In addition to the robust Seam API and the wide variety of programming languages that our SDKs support, we also provide a suite of [Seam Components](../../seam-components/overview/). These prebuilt UI components help you to build your device management flow.

<figure><img src="../../.gitbook/assets/Lock Detail.png" alt="Seam Components make it easy to develop your application!" width="280"><figcaption><p>Seam Components make it easy to develop your application!</p></figcaption></figure>

For example, you can use the [Device Table Seam Component](../../seam-components/react-components/device-table.md) to display a list of devices and to identify all devices with issues. You can use the [Device Details Seam Component](../../seam-components/react-components/device-details.md) to display a device's properties, settings, and issues, as well as to enable your users to perform actions based on each device's capabilities. The [Access Code Details Seam Component](../../seam-components/react-components/access-code-details.md) provides a similar display and actions for access codes.

Seam Components use a responsive design to fit seamlessly on any screen size. They also provide device debugging flows to help your users.

To learn about all the Seam Components that we provide, see [Seam Components](../../seam-components/overview/).

***

## Next steps

Now that you've completed this getting started guide for 33 Lock devices, you can learn more about what you can do with the Seam API.

* [ ] **Explore**\
  See the [other devices and system integrations](../overview.md) that Seam supports.
* [ ] **Learn**\
  Read about Seam [concepts](../../core-concepts/overview.md) and the [device and system capabilities ](../../capability-guides/device-and-system-capabilities.md)that Seam supports.
* [ ] **Use Seam Components**\
  Find out about [Seam Components](../../seam-components/overview/), which are prebuilt UI components for building your device management flow.
* [ ] **Use webhooks**\
  Learn how to use [webhooks](../../core-concepts/webhooks.md) as an efficient way to receive device events.
* [ ] **Find out more**\
  Explore the other types of devices and systems that you can control with Seam, including [access control systems](../../products/access-systems/), [thermostats](../../products/thermostats/), and [noise sensors](../../products/noise-sensors/).
* [ ] **Develop for mobile access**\
  Learn about Seam's [mobile access solution](../../capability-guides/mobile-access/).

{% hint style="info" %}
If you have any questions or want to report an issue, email us at [support@seam.co](mailto:support@seam.co).
{% endhint %}

***

## Quick links

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Get an API Key</strong> (free)</td><td>Sign up for the Seam Console and get your API keys. →</td><td></td><td><a href="../../.gitbook/assets/seam-api-key.png">seam-api-key.png</a></td><td><a href="https://console.seam.co/">https://console.seam.co/</a></td></tr><tr><td><strong>Contact Sales</strong></td><td>Got a project or a specific question? Contact our team to get answers. →</td><td></td><td><a href="../../.gitbook/assets/seam-contact-us-light.png">seam-contact-us-light.png</a></td><td><a href="https://www.seam.co/contact-us">https://www.seam.co/contact-us</a></td></tr></tbody></table>
