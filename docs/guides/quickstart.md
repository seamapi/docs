---
description: >-
  Seam provides a unified API to connect and control IoT devices, such as smart
  locks, thermostats, cameras, and sensors. This guide walks you through
  granting your first access with the Seam API.
---

# Quick Start

{% hint style="info" %}
**Building with an AI coding assistant?** Connect the [Seam MCP Server](developer-tools/seam-mcp.md) to give your assistant direct access to Seam documentation — setup takes under a minute, no API keys needed.
{% endhint %}

## Step 1 — Connect Devices

To get started with Seam, first connect a set of devices.

1. In a web browser, go to [Seam Console](core-concepts/seam-console/) at [https://console.seam.co/](https://console.seam.co/) and create an account.\
   Once you have logged in to Seam Console, you are working in the default [sandbox workspace](core-concepts/workspaces/#sandbox-workspaces).
2.  In the upper-right corner of the **Devices** page, click **Add Devices**.

    Seam Console displays an authorization flow (known as a [Connect Webview](core-concepts/connect-webviews/)) that enables you to connect a device account to Seam.
3. In the Connect Webview, click **Continue**.
4. In the manufacturer list, select [**August**](https://august.com/).
5. When prompted, type the following sample (sandbox) credentials:
   * **Email:** `jane@example.com`
   * **Password:** `1234`
6. Click **Submit**.
7. When prompted for a two-factor authentication (2FA) method, select **Email**.
8. In the **Two Factor Code** field, type `123456` and then click **Submit and Continue**.

Once authorized, the devices associated with this test account appear in your workspace.

## Step 2 — Get an API Key and SDK

To control the devices that you connected in [Step 1](quickstart.md#step-1-connect-devices), you must create an API key and install the Seam SDK in the programming language of your choice.

### Create an API Key

1. In the top navigation pane of [Seam Console](https://console.seam.co/), click **Developer**.
2. In the left navigation pane, click **API Keys**.
3. In the upper-right corner of the **API Keys** page, click **Add API Key**.
4. In the **Add API Key** dialog, type a name for your new API key and then click **Create API Key**.
5. Copy the newly-created API key and store it for future use.

### Install the Seam SDK

Install one of the Seam SDKs in the programming language of your choice.

Seam provides client libraries for many languages, such as JavaScript, Python, Ruby, PHP, and others, as well as a Postman collection and [OpenAPI](https://connect.getseam.com/openapi.json) spec.

* JavaScript / TypeScript ([npm](https://www.npmjs.com/package/seam), [GitHub](https://github.com/seamapi/javascript))
* Python ([pip](https://pypi.org/project/seam/), [GitHub](https://github.com/seamapi/python))
* Ruby Gem ([rubygem](https://rubygems.org/gems/seam), [GitHub](https://github.com/seamapi/ruby))
* PHP ([packagist](https://packagist.org/packages/seamapi/seam), [GitHub](https://github.com/seamapi/php))
* C# ([nuget](https://www.nuget.org/packages/Seam), [GitHub](https://github.com/seamapi/csharp))

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

## Step 3 — Grant Access

Grant your first access! You'll create an [Access Grant](use-cases/granting-access/README.md)—the default and recommended way to grant a person access to any physical space through Seam—and get back a PIN code that your user could enter on the lock's keypad.

To start, open a terminal window and export your API key as an environment variable.

```sh
$ export SEAM_API_KEY=seam_test2bMS_94SrGUXuNR2JmJkjtvBQDg5c
```

The Seam SDK that you have installed automatically uses this API key once you have exported it.

Next, use the following code to retrieve one of the devices that you connected in [Step 1](quickstart.md#step-1-connect-devices), inspect the supported capabilities of the device, and create an Access Grant that issues a PIN code on the lock:

{% tabs %}
{% tab title="JavaScript" %}

**Code:**

```javascript
import { Seam } from "seam";

const seam = new Seam(); // Seam automatically uses your exported SEAM_API_KEY.

// Retrieve all devices, filtered by manufacturer,
// which is one of several filters that list() supports.
const allAugustLocks = await seam.devices.list({ manufacturer: "august" });

// Select the first device as an example.
const frontDoor = allAugustLocks[0];

// Confirm that the device can program access codes.
// You're using a capability flag here!
if (frontDoor.can_program_online_access_codes) {
  // Grant your user access to the device
  // for a specific time window.
  const accessGrant = await seam.accessGrants.create({
    user_identity: {
      full_name: "Jane Doe",
      email_address: "jane.doe@example.com",
    },
    device_ids: [frontDoor.device_id],
    requested_access_methods: [{ mode: "code" }],
    starts_at: "2025-07-13T15:00:00.000Z",
    ends_at: "2025-07-16T11:00:00.000Z",
  });

  // Retrieve the issued access method to get the PIN code.
  const accessMethod = await seam.accessMethods.get({
    access_method_id:
      accessGrant.requested_access_methods[0].created_access_method_ids[0],
  });

  console.log(accessMethod.code);
}
```

**Output:**

```json
"1234"
```
{% endtab %}

{% tab title="cURL" %}

**Code:**

```bash
# Retrieve all devices, filtered by manufacturer, which is
# one of several filters that the list endpoint supports.
all_august_locks=$(
  curl -X 'POST' \
    'https://connect.getseam.com/devices/list' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{
    "manufacturer": "august"
  }')

# Select the first device as an example.
front_door=$(jq -r '.devices[0]' <<< ${all_august_locks})

# Confirm that the device can program access codes.
# You're using a capability flag here!
if  $(jq -r '.can_program_online_access_codes' <<< ${front_door}); then \
  # Grant your user access to the device
  # for a specific time window.
  access_grant=$(curl -X 'POST' \
    'https://connect.getseam.com/access_grants/create' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"user_identity\": {
        \"full_name\": \"Jane Doe\",
        \"email_address\": \"jane.doe@example.com\"
      },
      \"device_ids\": [\"$(jq -r '.device_id' <<< ${front_door})\"],
      \"requested_access_methods\": [{\"mode\": \"code\"}],
      \"starts_at\": \"2025-07-13T15:00:00.000Z\",
      \"ends_at\": \"2025-07-16T11:00:00.000Z\"
  }");

  # Retrieve the issued access method to get the PIN code.
  access_method_id=$(jq -r '.access_grant.requested_access_methods[0].created_access_method_ids[0]' <<< ${access_grant});
  curl -X 'POST' \
    'https://connect.getseam.com/access_methods/get' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"access_method_id\": \"${access_method_id}\"
  }" | jq -r '.access_method.code';
fi
```

**Output:**

```json
"1234"
```
{% endtab %}

{% tab title="Python" %}

**Code:**

```python
from seam import Seam

seam = Seam()  # Seam automatically uses your exported SEAM_API_KEY.

# Retrieve all devices, filtered by manufacturer,
# which is one of several filters that list() supports.
all_august_locks = seam.devices.list(manufacturer="august")

# Select the first device as an example.
front_door = all_august_locks[0]

# Confirm that the device can program access codes.
# You're using a capability flag here!
if front_door.can_program_online_access_codes:
  # Grant your user access to the device
  # for a specific time window.
  access_grant = seam.access_grants.create(
    user_identity={
      "full_name": "Jane Doe",
      "email_address": "jane.doe@example.com"
    },
    device_ids=[front_door.device_id],
    requested_access_methods=[{"mode": "code"}],
    starts_at="2025-07-13T15:00:00.000Z",
    ends_at="2025-07-16T11:00:00.000Z"
  )

  # Retrieve the issued access method to get the PIN code.
  access_method = seam.access_methods.get(
    access_method_id=access_grant.requested_access_methods[0].created_access_method_ids[0]
  )

  print(access_method.code)
```

**Output:**

```
1234
```
{% endtab %}

{% tab title="Ruby" %}

**Code:**

```ruby
require "seam"

seam = Seam.new() # Seam automatically uses your exported SEAM_API_KEY.

# Retrieve all devices, filtered by manufacturer,
# which is one of several filters that list() supports.
all_august_locks = seam.devices.list(manufacturer: "august")

# Select the first device as an example.
front_door = all_august_locks[0]

# Confirm that the device can program access codes.
# You're using a capability flag here!
if (front_door.can_program_online_access_codes)
  # Grant your user access to the device
  # for a specific time window.
  access_grant = seam.access_grants.create(
    user_identity: {
      full_name: "Jane Doe",
      email_address: "jane.doe@example.com",
    },
    device_ids: [front_door.device_id],
    requested_access_methods: [{"mode": "code"}],
    starts_at: "2025-07-13T15:00:00.000Z",
    ends_at: "2025-07-16T11:00:00.000Z"
  )

  # Retrieve the issued access method to get the PIN code.
  access_method = seam.access_methods.get(
    access_method_id: access_grant.requested_access_methods[0].created_access_method_ids[0]
  )

  puts access_method.code
end
```

**Output:**

```
1234
```
{% endtab %}

{% tab title="PHP" %}

**Code:**

```php
<?php
require 'vendor/autoload.php';

$seam = new Seam\SeamClient(); // Seam automatically uses your exported SEAM_API_KEY.

// Retrieve all devices, filtered by manufacturer,
// which is one of several filters that list() supports.
$all_august_locks = $seam->devices->list(manufacturer: "august");

// Select the first device as an example.
$front_door = $all_august_locks[0];

// Confirm that the device can program access codes.
// You're using a capability flag here!
if ($front_door->can_program_online_access_codes) {
  // Grant your user access to the device
  // for a specific time window.
  $access_grant = $seam->access_grants->create(
    user_identity: [
      "full_name" => "Jane Doe",
      "email_address" => "jane.doe@example.com",
    ],
    device_ids: [$front_door->device_id],
    requested_access_methods: [["mode" => "code"]],
    starts_at: "2025-07-13T15:00:00.000Z",
    ends_at: "2025-07-16T11:00:00.000Z"
  );

  // Retrieve the issued access method to get the PIN code.
  $access_method = $seam->access_methods->get(
    access_method_id: $access_grant->requested_access_methods[0]->created_access_method_ids[0]
  );

  echo $access_method->code;
}
```

**Output:**

```
1234
```
{% endtab %}

{% tab title="C#" %}

**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
In a sandbox workspace, the access method is issued almost instantly. On real devices, issuance can take a few moments—poll the access method until `is_issued` is `true` or watch for the `access_method.issued` event before reading the `code`.
{% endhint %}

## Congrats! :tada:

Now that you have completed the Seam API Quick Start, you are well on your way to writing code that can actually control the physical world! :sunglasses:

Here are some ideas of what you can do next...

### Go Deeper on Granting Access

You just created your first Access Grant. The same API issues mobile keys, [Instant Keys](capability-guides/instant-keys/README.md), and plastic cards, grants access to multiple devices and [access system entrances](use-cases/granting-access/creating-an-access-grant.md) in one call, and manages the full credential lifecycle. See the [Granting Access guide](use-cases/granting-access/README.md).

You can also control devices directly—for example, [lock and unlock doors](low-level-apis/smart-locks/lock-and-unlock.md) remotely.

### Connect a Real Device

If you have a real device, you can try to control it using the steps in this Quick Start. Note that you must first [create a production workspace](go-live.md#create-a-production-workspace) because sandbox workspaces only enable you to connect test accounts and devices. For more information, see [Workspaces](core-concepts/workspaces/).

### Connect Users' Devices

If you are creating an app to control your users' devices, see [Connect Webviews](core-concepts/connect-webviews/). Seam Connect Webviews are fully-embedded client-side components that you add to your app if you want to enable your users to import their own devices using your app. Your users interact with your embedded Connect Webviews to link their IoT device accounts to Seam through your app. That is, Connect Webviews walk your users through the process of logging in to their device accounts. Seam handles all the authentication steps, and—once your user has completed the authorization through your app—you can access and control their devices using the Seam API.

<figure><img src=".gitbook/assets/Seam Connect.png" alt="Use Connect Webviews to enable your users to authorize your app to control their devices."><figcaption></figcaption></figure>

### Learn about Devices and Capabilities

Seam supports many device categories. Each device can be broken down into [device capabilities](capability-guides/device-and-system-capabilities.md). A capability indicates what the device can do, what properties it has, and what events it emits. To learn more about specific capabilities, such as access codes or thermostats, see the following guides:

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden><select></select></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Door Locks API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/smart-locks-16-9.png">smart-locks-16-9.png</a></td><td></td><td><a href="low-level-apis/smart-locks/">smart-locks</a></td></tr><tr><td><strong>Thermostats API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/thermostats-cover.png">thermostats-cover.png</a></td><td></td><td><a href="capability-guides/thermostats/">thermostats</a></td></tr><tr><td><strong>Noise</strong> <strong>Sensors API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/sensors-16-9.png">sensors-16-9.png</a></td><td></td><td><a href="capability-guides/noise-sensors/">noise-sensors</a></td></tr><tr><td><strong>Access Control Systems API</strong></td><td>Get started →</td><td><a href=".gitbook/assets/acs-cover.png">acs-cover.png</a></td><td></td><td><a href="low-level-apis/access-systems/">access-systems</a></td></tr></tbody></table>
