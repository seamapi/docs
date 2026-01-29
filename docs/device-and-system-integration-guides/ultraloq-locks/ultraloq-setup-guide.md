---
description: Step-by-step instructions for connecting Ultraloq devices to Seam
---

# Ultraloq Setup Guide

This guide walks you through connecting Ultraloq locks to Seam and configuring them for use with the Seam API.

## Before You Begin

To follow this guide, you need:

* A Seam account (create one at [console.seam.co](https://console.seam.co))
* An API key from your Seam workspace
* An Ultraloq account with at least one lock configured

{% hint style="info" %}
If you're testing the integration, you can use a [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces) with test Ultraloq devices.
{% endhint %}

***

## Step 1: Create a Connect Webview

Create a [Connect Webview](../../core-concepts/connect-webviews/) to enable the Ultraloq device owner to authorize Seam to access their Ultraloq account.

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

webview = seam.connect_webviews.create(
  accepted_providers=["ultraloq"],
  custom_redirect_url="https://your-app.com/oauth/callback"
)

print(webview.url)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const webview = await seam.connectWebviews.create({
  accepted_providers: ["ultraloq"],
  custom_redirect_url: "https://your-app.com/oauth/callback"
});

console.log(webview.url);
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

webview = seam.connect_webviews.create(
  accepted_providers: ["ultraloq"],
  custom_redirect_url: "https://your-app.com/oauth/callback"
)

puts webview.url
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

$webview = $seam->connect_webviews->create(
  accepted_providers: ["ultraloq"],
  custom_redirect_url: "https://your-app.com/oauth/callback"
);

echo $webview->url;
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

var webview = seam.ConnectWebviews.Create(
  acceptedProviders: new[] { "ultraloq" },
  customRedirectUrl: "https://your-app.com/oauth/callback"
);

Console.WriteLine(webview.Url);
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.ConnectWebview;

Seam seam = Seam.builder().build();

ConnectWebview webview = seam.connectWebviews().create(
  ConnectWebviewsCreateRequest.builder()
    .acceptedProviders(List.of("ultraloq"))
    .customRedirectUrl("https://your-app.com/oauth/callback")
    .build()
);

System.out.println(webview.getUrl());
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "accepted_providers": ["ultraloq"],
    "custom_redirect_url": "https://your-app.com/oauth/callback"
  }'
```
{% endtab %}
{% endtabs %}

***

## Step 2: User Authorization

Direct the user to the Connect Webview URL returned in Step 1. The user will be prompted to:

1. Sign in to their Ultraloq account
2. Authorize Seam to access their Ultraloq devices

After authorization, the user is redirected to your `custom_redirect_url` with the `connect_webview_id` as a query parameter.

***

## Step 3: Verify Connection

Wait for the Connect Webview status to change to `authorized`, indicating that the connection was successful. You can either poll the Connect Webview or use [webhooks](../../core-concepts/webhooks.md) to be notified when the status changes.

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

# Poll until authorized
webview = seam.connect_webviews.get(
  connect_webview_id=webview.connect_webview_id
)

if webview.status == "authorized":
  print("Connection successful!")
  print(f"Connected account ID: {webview.connected_account_id}")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Poll until authorized
const webview = await seam.connectWebviews.get({
  connect_webview_id: webview.connect_webview_id
});

if (webview.status === "authorized") {
  console.log("Connection successful!");
  console.log(`Connected account ID: ${webview.connected_account_id}`);
}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

# Poll until authorized
webview = seam.connect_webviews.get(
  connect_webview_id: webview.connect_webview_id
)

if webview.status == "authorized"
  puts "Connection successful!"
  puts "Connected account ID: #{webview.connected_account_id}"
end
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Poll until authorized
$webview = $seam->connect_webviews->get(
  connect_webview_id: $webview->connect_webview_id
);

if ($webview->status === "authorized") {
  echo "Connection successful!\n";
  echo "Connected account ID: " . $webview->connected_account_id;
}
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

// Poll until authorized
var webview = seam.ConnectWebviews.Get(
  connectWebviewId: webview.ConnectWebviewId
);

if (webview.Status == "authorized")
{
  Console.WriteLine("Connection successful!");
  Console.WriteLine($"Connected account ID: {webview.ConnectedAccountId}");
}
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.ConnectWebview;

Seam seam = Seam.builder().build();

// Poll until authorized
ConnectWebview webview = seam.connectWebviews().get(
  ConnectWebviewsGetRequest.builder()
    .connectWebviewId(webview.getConnectWebviewId())
    .build()
);

if (webview.getStatus().equals("authorized")) {
  System.out.println("Connection successful!");
  System.out.println("Connected account ID: " + webview.getConnectedAccountId());
}
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"connect_webview_id\": \"${CONNECT_WEBVIEW_ID}\"
  }"
```
{% endtab %}
{% endtabs %}

***

## Step 4: List Devices

Once the connection is authorized, retrieve the list of Ultraloq devices associated with the connected account.

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

devices = seam.devices.list(
  connected_account_id=webview.connected_account_id
)

for device in devices:
  print(f"Device: {device.properties['name']}")
  print(f"Device ID: {device.device_id}")
  print(f"Warnings: {device.warnings}")
  print()
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const devices = await seam.devices.list({
  connected_account_id: webview.connected_account_id
});

for (const device of devices) {
  console.log(`Device: ${device.properties.name}`);
  console.log(`Device ID: ${device.device_id}`);
  console.log(`Warnings:`, device.warnings);
  console.log();
}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

devices = seam.devices.list(
  connected_account_id: webview.connected_account_id
)

devices.each do |device|
  puts "Device: #{device.properties['name']}"
  puts "Device ID: #{device.device_id}"
  puts "Warnings: #{device.warnings}"
  puts
end
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

$devices = $seam->devices->list(
  connected_account_id: $webview->connected_account_id
);

foreach ($devices as $device) {
  echo "Device: " . $device->properties->name . "\n";
  echo "Device ID: " . $device->device_id . "\n";
  echo "Warnings: " . json_encode($device->warnings) . "\n\n";
}
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

var devices = seam.Devices.List(
  connectedAccountId: webview.ConnectedAccountId
);

foreach (var device in devices)
{
  Console.WriteLine($"Device: {device.Properties.Name}");
  Console.WriteLine($"Device ID: {device.DeviceId}");
  Console.WriteLine($"Warnings: {string.Join(", ", device.Warnings)}");
  Console.WriteLine();
}
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.Device;

Seam seam = Seam.builder().build();

List<Device> devices = seam.devices().list(
  DevicesListRequest.builder()
    .connectedAccountId(webview.getConnectedAccountId())
    .build()
);

for (Device device : devices) {
  System.out.println("Device: " + device.getProperties().getName());
  System.out.println("Device ID: " + device.getDeviceId());
  System.out.println("Warnings: " + device.getWarnings());
  System.out.println();
}
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"connected_account_id\": \"${CONNECTED_ACCOUNT_ID}\"
  }"
```
{% endtab %}
{% endtabs %}

**Expected Output:**

When you first list Ultraloq devices, they will have the `ultraloq_time_zone_unknown` warning:

```json
{
  "device_id": "11111111-2222-3333-4444-555555555555",
  "device_type": "ultraloq_lock",
  "can_program_online_access_codes": true,
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "warnings": [
    {
      "warning_code": "ultraloq_time_zone_unknown",
      "message": "Seam does not know the time zone of the Ultraloq device. Set a time zone to enable time-bound access codes."
    }
  ],
  "properties": {
    "ultraloq_metadata": {
      "time_zone": null
    }
  }
}
```

{% hint style="warning" %}
**Important:** The `ultraloq_time_zone_unknown` warning indicates that you must configure the device's timezone before creating time-bound access codes. Proceed to Step 5 to configure timezones.
{% endhint %}

***

## Step 5: Configure Device Timezones

This is a **required step** for Ultraloq devices. You must configure each device's timezone before you can create time-bound access codes.

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

# Configure timezone for one or more devices
seam.devices.report_provider_metadata(
  devices=[
    {
      "device_id": device.device_id,
      "ultraloq_metadata": {
        "time_zone": "America/New_York"
      }
    }
  ]
)

print("Timezone configured successfully!")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Configure timezone for one or more devices
await seam.devices.reportProviderMetadata({
  devices: [
    {
      device_id: device.device_id,
      ultraloq_metadata: {
        time_zone: "America/New_York"
      }
    }
  ]
});

console.log("Timezone configured successfully!");
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

# Configure timezone for one or more devices
seam.devices.report_provider_metadata(
  devices: [
    {
      device_id: device.device_id,
      ultraloq_metadata: {
        time_zone: "America/New_York"
      }
    }
  ]
)

puts "Timezone configured successfully!"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Configure timezone for one or more devices
$seam->devices->report_provider_metadata(
  devices: [
    [
      "device_id" => $device->device_id,
      "ultraloq_metadata" => [
        "time_zone" => "America/New_York"
      ]
    ]
  ]
);

echo "Timezone configured successfully!";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

// Configure timezone for one or more devices
seam.Devices.ReportProviderMetadata(
  devices: new[] {
    new DeviceMetadata {
      DeviceId = device.DeviceId,
      UltraloqMetadata = new UltraloqMetadata {
        TimeZone = "America/New_York"
      }
    }
  }
);

Console.WriteLine("Timezone configured successfully!");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;

Seam seam = Seam.builder().build();

// Configure timezone for one or more devices
seam.devices().reportProviderMetadata(
  DevicesReportProviderMetadataRequest.builder()
    .devices(List.of(
      DeviceMetadata.builder()
        .deviceId(device.getDeviceId())
        .ultraloqMetadata(UltraloqMetadata.builder()
          .timeZone("America/New_York")
          .build())
        .build()
    ))
    .build()
);

System.out.println("Timezone configured successfully!");
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/report_provider_metadata' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"devices\": [
      {
        \"device_id\": \"${DEVICE_ID}\",
        \"ultraloq_metadata\": {
          \"time_zone\": \"America/New_York\"
        }
      }
    ]
  }"
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
**Valid Timezone Values:** Use IANA timezone strings such as `"America/New_York"`, `"Europe/London"`, or `"Asia/Tokyo"`. Do not use timezone abbreviations like `"EST"` or `"PST"`.

For a complete list of valid timezones, see the [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
{% endhint %}

For detailed information about timezone configuration, including best practices and troubleshooting, see [Configuring Ultraloq Device Timezones](configuring-ultraloq-device-timezones.md).

***

## Step 6: Verify Configuration

After configuring the timezone, verify that the warning has been cleared and the timezone is set correctly.

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

device = seam.devices.get(device_id=device.device_id)

# Check that timezone is configured
assert device.properties["ultraloq_metadata"]["time_zone"] == "America/New_York"

# Check that warning is cleared
has_warning = any(
  w.warning_code == "ultraloq_time_zone_unknown"
  for w in device.warnings
)
assert not has_warning, "Timezone warning should be cleared"

print("✓ Device is ready to create time-bound access codes!")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const device = await seam.devices.get({
  device_id: device.device_id
});

// Check that timezone is configured
console.assert(
  device.properties.ultraloq_metadata.time_zone === "America/New_York",
  "Timezone should be set"
);

// Check that warning is cleared
const hasWarning = device.warnings.some(
  w => w.warning_code === "ultraloq_time_zone_unknown"
);
console.assert(!hasWarning, "Timezone warning should be cleared");

console.log("✓ Device is ready to create time-bound access codes!");
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

device = seam.devices.get(device_id: device.device_id)

# Check that timezone is configured
raise "Timezone not set" unless device.properties["ultraloq_metadata"]["time_zone"] == "America/New_York"

# Check that warning is cleared
has_warning = device.warnings.any? { |w| w.warning_code == "ultraloq_time_zone_unknown" }
raise "Timezone warning not cleared" if has_warning

puts "✓ Device is ready to create time-bound access codes!"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

$device = $seam->devices->get(device_id: $device->device_id);

// Check that timezone is configured
assert($device->properties->ultraloq_metadata->time_zone === "America/New_York");

// Check that warning is cleared
$hasWarning = false;
foreach ($device->warnings as $warning) {
  if ($warning->warning_code === "ultraloq_time_zone_unknown") {
    $hasWarning = true;
    break;
  }
}
assert(!$hasWarning, "Timezone warning should be cleared");

echo "✓ Device is ready to create time-bound access codes!";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

var device = seam.Devices.Get(deviceId: device.DeviceId);

// Check that timezone is configured
Debug.Assert(
  device.Properties.UltraloqMetadata.TimeZone == "America/New_York",
  "Timezone should be set"
);

// Check that warning is cleared
var hasWarning = device.Warnings.Any(
  w => w.WarningCode == "ultraloq_time_zone_unknown"
);
Debug.Assert(!hasWarning, "Timezone warning should be cleared");

Console.WriteLine("✓ Device is ready to create time-bound access codes!");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.Device;

Seam seam = Seam.builder().build();

Device device = seam.devices().get(
  DevicesGetRequest.builder()
    .deviceId(device.getDeviceId())
    .build()
);

// Check that timezone is configured
assert device.getProperties().getUltraloqMetadata().getTimeZone().equals("America/New_York");

// Check that warning is cleared
boolean hasWarning = device.getWarnings().stream()
  .anyMatch(w -> w.getWarningCode().equals("ultraloq_time_zone_unknown"));
assert !hasWarning : "Timezone warning should be cleared";

System.out.println("✓ Device is ready to create time-bound access codes!");
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
device=$(curl -X 'POST' \
  'https://connect.getseam.com/devices/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"device_id\": \"${DEVICE_ID}\"
  }")

# Check timezone is set
echo $device | jq '.device.properties.ultraloq_metadata.time_zone'

# Check warnings are cleared
echo $device | jq '.device.warnings'
```
{% endtab %}
{% endtabs %}

***

## Next Steps

Now that your Ultraloq devices are connected and configured, you can perform common operations:

### Lock and Unlock Devices

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

# Lock the door
seam.locks.lock_door(device_id="your-device-id")
print("Door locked")

# Unlock the door
seam.locks.unlock_door(device_id="your-device-id")
print("Door unlocked")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Lock the door
await seam.locks.lockDoor({ device_id: "your-device-id" });
console.log("Door locked");

// Unlock the door
await seam.locks.unlockDoor({ device_id: "your-device-id" });
console.log("Door unlocked");
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

# Lock the door
seam.locks.lock_door(device_id: "your-device-id")
puts "Door locked"

# Unlock the door
seam.locks.unlock_door(device_id: "your-device-id")
puts "Door unlocked"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Lock the door
$seam->locks->lock_door(device_id: "your-device-id");
echo "Door locked\n";

// Unlock the door
$seam->locks->unlock_door(device_id: "your-device-id");
echo "Door unlocked\n";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

// Lock the door
seam.Locks.LockDoor(deviceId: "your-device-id");
Console.WriteLine("Door locked");

// Unlock the door
seam.Locks.UnlockDoor(deviceId: "your-device-id");
Console.WriteLine("Door unlocked");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;

Seam seam = Seam.builder().build();

// Lock the door
seam.locks().lockDoor(LocksLockDoorRequest.builder()
  .deviceId("your-device-id")
  .build());
System.out.println("Door locked");

// Unlock the door
seam.locks().unlockDoor(LocksUnlockDoorRequest.builder()
  .deviceId("your-device-id")
  .build());
System.out.println("Door unlocked");
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Lock the door
curl -X 'POST' \
  'https://connect.getseam.com/locks/lock_door' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{\"device_id\": \"your-device-id\"}"

# Unlock the door
curl -X 'POST' \
  'https://connect.getseam.com/locks/unlock_door' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{\"device_id\": \"your-device-id\"}"
```
{% endtab %}
{% endtabs %}

### Create Permanent Access Codes

Permanent access codes work indefinitely and do not require timezone configuration:

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

# Create permanent access code
access_code = seam.access_codes.create(
  device_id="your-device-id",
  name="Maintenance Team",
  code="1234"  # Optional: auto-generated if omitted
)

print(f"Created permanent code: {access_code.code}")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Create permanent access code
const accessCode = await seam.accessCodes.create({
  device_id: "your-device-id",
  name: "Maintenance Team",
  code: "1234"  // Optional: auto-generated if omitted
});

console.log(`Created permanent code: ${accessCode.code}`);
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

# Create permanent access code
access_code = seam.access_codes.create(
  device_id: "your-device-id",
  name: "Maintenance Team",
  code: "1234"  # Optional: auto-generated if omitted
)

puts "Created permanent code: #{access_code.code}"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Create permanent access code
$accessCode = $seam->access_codes->create(
  device_id: "your-device-id",
  name: "Maintenance Team",
  code: "1234"  // Optional: auto-generated if omitted
);

echo "Created permanent code: " . $accessCode->code . "\n";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

// Create permanent access code
var accessCode = seam.AccessCodes.Create(
  deviceId: "your-device-id",
  name: "Maintenance Team",
  code: "1234"  // Optional: auto-generated if omitted
);

Console.WriteLine($"Created permanent code: {accessCode.Code}");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.AccessCode;

Seam seam = Seam.builder().build();

// Create permanent access code
AccessCode accessCode = seam.accessCodes().create(
  AccessCodesCreateRequest.builder()
    .deviceId("your-device-id")
    .name("Maintenance Team")
    .code("1234")  // Optional: auto-generated if omitted
    .build()
);

System.out.println("Created permanent code: " + accessCode.getCode());
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "your-device-id",
    "name": "Maintenance Team",
    "code": "1234"
  }'
```
{% endtab %}
{% endtabs %}

### Create Time-Bound Access Codes

Time-bound access codes require timezone configuration (completed in Step 5):

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam
from datetime import datetime, timedelta

seam = Seam()

# Define time range
starts_at = datetime.utcnow() + timedelta(days=1)
ends_at = starts_at + timedelta(days=2)

# Create time-bound access code
access_code = seam.access_codes.create(
  device_id="your-device-id",
  name="Weekend Guest",
  starts_at=starts_at.isoformat() + "Z",
  ends_at=ends_at.isoformat() + "Z"
)

print(f"Created time-bound code: {access_code.code}")
print(f"Active from {access_code.starts_at} to {access_code.ends_at}")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Define time range
const startsAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
const endsAt = new Date(startsAt.getTime() + 2 * 24 * 60 * 60 * 1000);

// Create time-bound access code
const accessCode = await seam.accessCodes.create({
  device_id: "your-device-id",
  name: "Weekend Guest",
  starts_at: startsAt.toISOString(),
  ends_at: endsAt.toISOString()
});

console.log(`Created time-bound code: ${accessCode.code}`);
console.log(`Active from ${accessCode.starts_at} to ${accessCode.ends_at}`);
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"
require "time"

seam = Seam.new()

# Define time range
starts_at = Time.now.utc + (24 * 60 * 60)
ends_at = starts_at + (2 * 24 * 60 * 60)

# Create time-bound access code
access_code = seam.access_codes.create(
  device_id: "your-device-id",
  name: "Weekend Guest",
  starts_at: starts_at.iso8601,
  ends_at: ends_at.iso8601
)

puts "Created time-bound code: #{access_code.code}"
puts "Active from #{access_code.starts_at} to #{access_code.ends_at}"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Define time range
$startsAt = new DateTime('+1 day', new DateTimeZone('UTC'));
$endsAt = (clone $startsAt)->add(new DateInterval('P2D'));

// Create time-bound access code
$accessCode = $seam->access_codes->create(
  device_id: "your-device-id",
  name: "Weekend Guest",
  starts_at: $startsAt->format(DateTime::ATOM),
  ends_at: $endsAt->format(DateTime::ATOM)
);

echo "Created time-bound code: " . $accessCode->code . "\n";
echo "Active from " . $accessCode->starts_at . " to " . $accessCode->ends_at . "\n";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;
using System;

var seam = new SeamClient();

// Define time range
var startsAt = DateTime.UtcNow.AddDays(1);
var endsAt = startsAt.AddDays(2);

// Create time-bound access code
var accessCode = seam.AccessCodes.Create(
  deviceId: "your-device-id",
  name: "Weekend Guest",
  startsAt: startsAt,
  endsAt: endsAt
);

Console.WriteLine($"Created time-bound code: {accessCode.Code}");
Console.WriteLine($"Active from {accessCode.StartsAt} to {accessCode.EndsAt}");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.AccessCode;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

Seam seam = Seam.builder().build();

// Define time range
Instant startsAt = Instant.now().plus(1, ChronoUnit.DAYS);
Instant endsAt = startsAt.plus(2, ChronoUnit.DAYS);

// Create time-bound access code
AccessCode accessCode = seam.accessCodes().create(
  AccessCodesCreateRequest.builder()
    .deviceId("your-device-id")
    .name("Weekend Guest")
    .startsAt(startsAt.toString())
    .endsAt(endsAt.toString())
    .build()
);

System.out.println("Created time-bound code: " + accessCode.getCode());
System.out.println("Active from " + accessCode.getStartsAt() + " to " + accessCode.getEndsAt());
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Calculate timestamps
STARTS_AT=$(date -u -d '+1 day' '+%Y-%m-%dT%H:%M:%SZ')
ENDS_AT=$(date -u -d '+3 days' '+%Y-%m-%dT%H:%M:%SZ')

curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"device_id\": \"your-device-id\",
    \"name\": \"Weekend Guest\",
    \"starts_at\": \"${STARTS_AT}\",
    \"ends_at\": \"${ENDS_AT}\"
  }"
```
{% endtab %}
{% endtabs %}

### Monitor Device Status

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

device = seam.devices.get(device_id="your-device-id")

# Check lock status
print(f"Lock status: {device.properties['locked']}")

# Check online status
print(f"Online: {device.properties['online']}")

# Check battery level (if available)
if 'battery_level' in device.properties:
  print(f"Battery level: {device.properties['battery_level']}")

# Check for warnings
if device.warnings:
  print(f"Warnings: {[w.warning_code for w in device.warnings]}")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const device = await seam.devices.get({ device_id: "your-device-id" });

// Check lock status
console.log(`Lock status: ${device.properties.locked}`);

// Check online status
console.log(`Online: ${device.properties.online}`);

// Check battery level (if available)
if (device.properties.battery_level) {
  console.log(`Battery level: ${device.properties.battery_level}`);
}

// Check for warnings
if (device.warnings.length > 0) {
  console.log(`Warnings: ${device.warnings.map(w => w.warning_code)}`);
}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

device = seam.devices.get(device_id: "your-device-id")

# Check lock status
puts "Lock status: #{device.properties['locked']}"

# Check online status
puts "Online: #{device.properties['online']}"

# Check battery level (if available)
if device.properties['battery_level']
  puts "Battery level: #{device.properties['battery_level']}"
end

# Check for warnings
if device.warnings.any?
  puts "Warnings: #{device.warnings.map(&:warning_code)}"
end
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

$device = $seam->devices->get(device_id: "your-device-id");

// Check lock status
echo "Lock status: " . ($device->properties->locked ? "locked" : "unlocked") . "\n";

// Check online status
echo "Online: " . ($device->properties->online ? "yes" : "no") . "\n";

// Check battery level (if available)
if (isset($device->properties->battery_level)) {
  echo "Battery level: " . $device->properties->battery_level . "\n";
}

// Check for warnings
if (count($device->warnings) > 0) {
  $warningCodes = array_map(fn($w) => $w->warning_code, $device->warnings);
  echo "Warnings: " . implode(", ", $warningCodes) . "\n";
}
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;
using System.Linq;

var seam = new SeamClient();

var device = seam.Devices.Get(deviceId: "your-device-id");

// Check lock status
Console.WriteLine($"Lock status: {device.Properties.Locked}");

// Check online status
Console.WriteLine($"Online: {device.Properties.Online}");

// Check battery level (if available)
if (device.Properties.BatteryLevel.HasValue)
{
  Console.WriteLine($"Battery level: {device.Properties.BatteryLevel}");
}

// Check for warnings
if (device.Warnings.Any())
{
  var warningCodes = string.Join(", ", device.Warnings.Select(w => w.WarningCode));
  Console.WriteLine($"Warnings: {warningCodes}");
}
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.Device;
import java.util.stream.Collectors;

Seam seam = Seam.builder().build();

Device device = seam.devices().get(
  DevicesGetRequest.builder()
    .deviceId("your-device-id")
    .build()
);

// Check lock status
System.out.println("Lock status: " + device.getProperties().getLocked());

// Check online status
System.out.println("Online: " + device.getProperties().getOnline());

// Check battery level (if available)
if (device.getProperties().getBatteryLevel() != null) {
  System.out.println("Battery level: " + device.getProperties().getBatteryLevel());
}

// Check for warnings
if (!device.getWarnings().isEmpty()) {
  String warningCodes = device.getWarnings().stream()
    .map(w -> w.getWarningCode())
    .collect(Collectors.joining(", "));
  System.out.println("Warnings: " + warningCodes);
}
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
device=$(curl -X 'POST' \
  'https://connect.getseam.com/devices/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{\"device_id\": \"your-device-id\"}")

# Check lock status
echo $device | jq '.device.properties.locked'

# Check online status
echo $device | jq '.device.properties.online'

# Check battery level
echo $device | jq '.device.properties.battery_level'

# Check warnings
echo $device | jq '.device.warnings'
```
{% endtab %}
{% endtabs %}

***

## Related Resources

* **[Creating Ultraloq Access Codes](creating-ultraloq-access-codes.md)** - Detailed guide on permanent and time-bound access codes
* **[Configuring Ultraloq Device Timezones](configuring-ultraloq-device-timezones.md)** - Complete timezone configuration reference
* **[Lock and Unlock Operations](../../products/smart-locks/lock-and-unlock.md)** - General smart lock control documentation
* **[Access Codes Overview](../../products/smart-locks/access-codes/)** - Understanding access code management

***

## Troubleshooting

### Devices not appearing after connection

If devices don't appear after connecting your Ultraloq account:

1. Verify that your locks are connected to Wi-Fi in the Ultraloq mobile app
2. Ensure your Ultraloq account has access to the locks you're trying to connect
3. Wait a few minutes for the initial sync to complete

### Warning persists after setting timezone

If the `ultraloq_time_zone_unknown` warning persists after setting the timezone:

1. Verify you used a valid IANA timezone string (e.g., `"America/New_York"`, not `"EST"`)
2. Check that the API call succeeded without errors
3. Refresh the device by calling `seam.devices.get()` to get the latest state

### Time-bound access codes fail to create

If you receive an error when creating time-bound access codes:

1. Confirm the device's timezone is configured (check `device.properties.ultraloq_metadata.time_zone`)
2. Verify the `ultraloq_time_zone_unknown` warning is not present in `device.warnings`
3. Ensure you're providing both `starts_at` and `ends_at` parameters

***
