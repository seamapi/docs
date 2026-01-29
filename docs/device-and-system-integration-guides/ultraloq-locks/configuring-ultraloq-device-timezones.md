---
description: Configure device timezones for Ultraloq locks to enable time-bound access codes
---

# Configuring Ultraloq Device Timezones

Ultraloq devices require timezone configuration before you can create time-bound access codes. This guide explains why this is necessary and how to configure timezones for your Ultraloq devices.

***

## Why Timezone Configuration is Required

Ultraloq devices have a unique characteristic that requires manual timezone configuration:

**The Problem:**

* Ultraloq devices schedule access codes using **device-local time** (e.g., "2024-01-15 14:30")
* The Ultraloq API returns timestamps **without timezone information**
* Without knowing the device's timezone, Seam cannot correctly convert UTC timestamps to device-local time

**The Solution:**

* You must manually configure each device's timezone using the `/devices/report_provider_metadata` API
* This tells Seam what timezone the device is in so it can correctly schedule time-bound access codes

{% hint style="info" %}
This is a **one-time configuration** per device. Once set, the timezone persists until you change it.
{% endhint %}

***

## What Works Without Timezone

You can use the following features **without** configuring the device's timezone:

* ✅ **Permanent access codes** — Codes without `starts_at` and `ends_at` work immediately
* ✅ **Lock and unlock operations** — Remote lock/unlock commands work immediately
* ✅ **Device monitoring** — Battery level, lock status, and online/offline state

***

## What Requires Timezone

The following feature **requires** timezone configuration:

* ❌ **Time-bound access codes** — Codes with `starts_at` and `ends_at` require timezone

If you attempt to create a time-bound access code without configuring the timezone, you'll receive a validation error:

```json
{
  "error": {
    "type": "invalid_input",
    "message": "Time zone required for time-bound access codes on Ultraloq devices"
  }
}
```

***

## Detecting Unconfigured Devices

When you first connect an Ultraloq device, it will have the `ultraloq_time_zone_unknown` warning:

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

device = seam.devices.get(device_id="your-device-id")

# Check for timezone warning
has_timezone_warning = any(
  w.warning_code == "ultraloq_time_zone_unknown"
  for w in device.warnings
)

if has_timezone_warning:
  print("⚠️ Timezone not configured")
  print("Configure timezone before creating time-bound access codes")

# Check timezone value
timezone = device.properties.get("ultraloq_metadata", {}).get("time_zone")
print(f"Current timezone: {timezone}")  # Will be None if not configured
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const device = await seam.devices.get({
  device_id: "your-device-id"
});

// Check for timezone warning
const hasTimezoneWarning = device.warnings.some(
  w => w.warning_code === "ultraloq_time_zone_unknown"
);

if (hasTimezoneWarning) {
  console.log("⚠️ Timezone not configured");
  console.log("Configure timezone before creating time-bound access codes");
}

// Check timezone value
const timezone = device.properties.ultraloq_metadata?.time_zone;
console.log(`Current timezone: ${timezone}`);  // Will be null if not configured
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

device = seam.devices.get(device_id: "your-device-id")

# Check for timezone warning
has_timezone_warning = device.warnings.any? do |w|
  w.warning_code == "ultraloq_time_zone_unknown"
end

if has_timezone_warning
  puts "⚠️ Timezone not configured"
  puts "Configure timezone before creating time-bound access codes"
end

# Check timezone value
timezone = device.properties.dig("ultraloq_metadata", "time_zone")
puts "Current timezone: #{timezone}"  # Will be nil if not configured
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

$device = $seam->devices->get(device_id: "your-device-id");

// Check for timezone warning
$hasTimezoneWarning = false;
foreach ($device->warnings as $warning) {
  if ($warning->warning_code === "ultraloq_time_zone_unknown") {
    $hasTimezoneWarning = true;
    break;
  }
}

if ($hasTimezoneWarning) {
  echo "⚠️ Timezone not configured\n";
  echo "Configure timezone before creating time-bound access codes\n";
}

// Check timezone value
$timezone = $device->properties->ultraloq_metadata->time_zone ?? null;
echo "Current timezone: " . ($timezone ?? "not set") . "\n";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

var device = seam.Devices.Get(deviceId: "your-device-id");

// Check for timezone warning
var hasTimezoneWarning = device.Warnings.Any(
  w => w.WarningCode == "ultraloq_time_zone_unknown"
);

if (hasTimezoneWarning)
{
  Console.WriteLine("⚠️ Timezone not configured");
  Console.WriteLine("Configure timezone before creating time-bound access codes");
}

// Check timezone value
var timezone = device.Properties.UltraloqMetadata?.TimeZone;
Console.WriteLine($"Current timezone: {timezone ?? "not set"}");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.Device;

Seam seam = Seam.builder().build();

Device device = seam.devices().get(
  DevicesGetRequest.builder()
    .deviceId("your-device-id")
    .build()
);

// Check for timezone warning
boolean hasTimezoneWarning = device.getWarnings().stream()
  .anyMatch(w -> w.getWarningCode().equals("ultraloq_time_zone_unknown"));

if (hasTimezoneWarning) {
  System.out.println("⚠️ Timezone not configured");
  System.out.println("Configure timezone before creating time-bound access codes");
}

// Check timezone value
String timezone = device.getProperties().getUltraloqMetadata().getTimeZone();
System.out.println("Current timezone: " + (timezone != null ? timezone : "not set"));
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
    \"device_id\": \"your-device-id\"
  }")

# Check for timezone warning
echo $device | jq '.device.warnings[] | select(.warning_code == "ultraloq_time_zone_unknown")'

# Check timezone value
echo $device | jq '.device.properties.ultraloq_metadata.time_zone'
```
{% endtab %}
{% endtabs %}

***

## Configuring Timezones

### Single Device

To configure the timezone for a single device, use the `/devices/report_provider_metadata` endpoint:

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

# Configure timezone for one device
seam.devices.report_provider_metadata(
  devices=[
    {
      "device_id": "your-device-id",
      "ultraloq_metadata": {
        "time_zone": "America/New_York"
      }
    }
  ]
)

print("✓ Timezone configured successfully!")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Configure timezone for one device
await seam.devices.reportProviderMetadata({
  devices: [
    {
      device_id: "your-device-id",
      ultraloq_metadata: {
        time_zone: "America/New_York"
      }
    }
  ]
});

console.log("✓ Timezone configured successfully!");
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

# Configure timezone for one device
seam.devices.report_provider_metadata(
  devices: [
    {
      device_id: "your-device-id",
      ultraloq_metadata: {
        time_zone: "America/New_York"
      }
    }
  ]
)

puts "✓ Timezone configured successfully!"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Configure timezone for one device
$seam->devices->report_provider_metadata(
  devices: [
    [
      "device_id" => "your-device-id",
      "ultraloq_metadata" => [
        "time_zone" => "America/New_York"
      ]
    ]
  ]
);

echo "✓ Timezone configured successfully!";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

// Configure timezone for one device
seam.Devices.ReportProviderMetadata(
  devices: new[] {
    new DeviceMetadata {
      DeviceId = "your-device-id",
      UltraloqMetadata = new UltraloqMetadata {
        TimeZone = "America/New_York"
      }
    }
  }
);

Console.WriteLine("✓ Timezone configured successfully!");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;

Seam seam = Seam.builder().build();

// Configure timezone for one device
seam.devices().reportProviderMetadata(
  DevicesReportProviderMetadataRequest.builder()
    .devices(List.of(
      DeviceMetadata.builder()
        .deviceId("your-device-id")
        .ultraloqMetadata(UltraloqMetadata.builder()
          .timeZone("America/New_York")
          .build())
        .build()
    ))
    .build()
);

System.out.println("✓ Timezone configured successfully!");
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/report_provider_metadata' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "devices": [
      {
        "device_id": "your-device-id",
        "ultraloq_metadata": {
          "time_zone": "America/New_York"
        }
      }
    ]
  }'
```
{% endtab %}
{% endtabs %}

### Multiple Devices (Batch Configuration)

You can configure timezones for multiple devices in a single API call:

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

# Get all Ultraloq devices
devices = seam.devices.list(device_type="ultraloq_lock")

# Configure timezone for all devices
seam.devices.report_provider_metadata(
  devices=[
    {
      "device_id": device.device_id,
      "ultraloq_metadata": {
        "time_zone": "America/Los_Angeles"  # Or get from user
      }
    }
    for device in devices
  ]
)

print(f"✓ Configured timezone for {len(devices)} devices")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Get all Ultraloq devices
const devices = await seam.devices.list({
  device_type: "ultraloq_lock"
});

// Configure timezone for all devices
await seam.devices.reportProviderMetadata({
  devices: devices.map(device => ({
    device_id: device.device_id,
    ultraloq_metadata: {
      time_zone: "America/Los_Angeles"  // Or get from user
    }
  }))
});

console.log(`✓ Configured timezone for ${devices.length} devices`);
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

# Get all Ultraloq devices
devices = seam.devices.list(device_type: "ultraloq_lock")

# Configure timezone for all devices
seam.devices.report_provider_metadata(
  devices: devices.map do |device|
    {
      device_id: device.device_id,
      ultraloq_metadata: {
        time_zone: "America/Los_Angeles"  # Or get from user
      }
    }
  end
)

puts "✓ Configured timezone for #{devices.length} devices"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Get all Ultraloq devices
$devices = $seam->devices->list(device_type: "ultraloq_lock");

// Configure timezone for all devices
$deviceMetadata = array_map(function($device) {
  return [
    "device_id" => $device->device_id,
    "ultraloq_metadata" => [
      "time_zone" => "America/Los_Angeles"  // Or get from user
    ]
  ];
}, $devices);

$seam->devices->report_provider_metadata(devices: $deviceMetadata);

echo "✓ Configured timezone for " . count($devices) . " devices";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;
using System.Linq;

var seam = new SeamClient();

// Get all Ultraloq devices
var devices = seam.Devices.List(deviceType: "ultraloq_lock");

// Configure timezone for all devices
seam.Devices.ReportProviderMetadata(
  devices: devices.Select(device => new DeviceMetadata {
    DeviceId = device.DeviceId,
    UltraloqMetadata = new UltraloqMetadata {
      TimeZone = "America/Los_Angeles"  // Or get from user
    }
  }).ToArray()
);

Console.WriteLine($"✓ Configured timezone for {devices.Count()} devices");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.Device;
import java.util.stream.Collectors;

Seam seam = Seam.builder().build();

// Get all Ultraloq devices
List<Device> devices = seam.devices().list(
  DevicesListRequest.builder()
    .deviceType("ultraloq_lock")
    .build()
);

// Configure timezone for all devices
seam.devices().reportProviderMetadata(
  DevicesReportProviderMetadataRequest.builder()
    .devices(devices.stream()
      .map(device -> DeviceMetadata.builder()
        .deviceId(device.getDeviceId())
        .ultraloqMetadata(UltraloqMetadata.builder()
          .timeZone("America/Los_Angeles")  // Or get from user
          .build())
        .build())
      .collect(Collectors.toList()))
    .build()
);

System.out.println("✓ Configured timezone for " + devices.size() + " devices");
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Get all Ultraloq devices
devices=$(curl -X 'POST' \
  'https://connect.getseam.com/devices/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_type": "ultraloq_lock"
  }')

# Configure timezone for all devices
# (Requires jq to construct the request)
curl -X 'POST' \
  'https://connect.getseam.com/devices/report_provider_metadata' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "$(echo $devices | jq '{
    devices: [.devices[] | {
      device_id: .device_id,
      ultraloq_metadata: {
        time_zone: "America/Los_Angeles"
      }
    }]
  }')"
```
{% endtab %}
{% endtabs %}

***

## Valid Timezone Values

You must use **IANA timezone strings** (also called "tz database" timezones). These are standardized timezone identifiers in the format `Continent/City`.

### Examples of Valid Timezones

* `"America/New_York"` — Eastern Time (US)
* `"America/Chicago"` — Central Time (US)
* `"America/Denver"` — Mountain Time (US)
* `"America/Los_Angeles"` — Pacific Time (US)
* `"America/Phoenix"` — Arizona (no DST)
* `"America/Toronto"` — Eastern Time (Canada)
* `"Europe/London"` — UK
* `"Europe/Paris"` — Central European Time
* `"Asia/Tokyo"` — Japan
* `"Australia/Sydney"` — Australian Eastern Time

{% hint style="warning" %}
**Do not use timezone abbreviations** like `"EST"`, `"PST"`, or `"GMT-5"`. These are ambiguous and will cause validation errors. Always use the full IANA timezone string.
{% endhint %}

### Finding the Right Timezone

For a complete list of valid IANA timezones, see:

* [IANA Time Zone Database (Wikipedia)](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
* [IANA Official Database](https://www.iana.org/time-zones)

Most programming languages also provide timezone lookup utilities:

{% tabs %}
{% tab title="Python" %}
```python
import pytz

# List all available timezones
all_timezones = pytz.all_timezones
print(f"Available timezones: {len(all_timezones)}")

# Search for timezones containing "New"
ny_timezones = [tz for tz in all_timezones if "New" in tz]
print(ny_timezones)
# ['America/New_York', 'America/North_Dakota/New_Salem', ...]
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
// Using Intl API (built-in)
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(`User's timezone: ${userTimezone}`);
// Example: "America/Los_Angeles"

// Or using moment-timezone library
const moment = require('moment-timezone');
const allTimezones = moment.tz.names();
console.log(`Available timezones: ${allTimezones.length}`);
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require 'tzinfo'

# List all available timezones
all_timezones = TZInfo::Timezone.all_identifiers
puts "Available timezones: #{all_timezones.length}"

# Search for timezones containing "New"
ny_timezones = all_timezones.select { |tz| tz.include?("New") }
puts ny_timezones
# ["America/New_York", "America/North_Dakota/New_Salem", ...]
```
{% endtab %}
{% endtabs %}

***

## Verification

After configuring the timezone, verify that the configuration was successful:

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

device = seam.devices.get(device_id="your-device-id")

# Verify timezone is set
timezone = device.properties["ultraloq_metadata"]["time_zone"]
print(f"Device timezone: {timezone}")

# Verify warning is cleared
has_warning = any(
  w.warning_code == "ultraloq_time_zone_unknown"
  for w in device.warnings
)

if not has_warning:
  print("✓ Timezone configured successfully!")
  print("✓ Device is ready to create time-bound access codes")
else:
  print("✗ Warning still present - check timezone configuration")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const device = await seam.devices.get({
  device_id: "your-device-id"
});

// Verify timezone is set
const timezone = device.properties.ultraloq_metadata.time_zone;
console.log(`Device timezone: ${timezone}`);

// Verify warning is cleared
const hasWarning = device.warnings.some(
  w => w.warning_code === "ultraloq_time_zone_unknown"
);

if (!hasWarning) {
  console.log("✓ Timezone configured successfully!");
  console.log("✓ Device is ready to create time-bound access codes");
} else {
  console.log("✗ Warning still present - check timezone configuration");
}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

device = seam.devices.get(device_id: "your-device-id")

# Verify timezone is set
timezone = device.properties["ultraloq_metadata"]["time_zone"]
puts "Device timezone: #{timezone}"

# Verify warning is cleared
has_warning = device.warnings.any? { |w| w.warning_code == "ultraloq_time_zone_unknown" }

if !has_warning
  puts "✓ Timezone configured successfully!"
  puts "✓ Device is ready to create time-bound access codes"
else
  puts "✗ Warning still present - check timezone configuration"
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

// Verify timezone is set
$timezone = $device->properties->ultraloq_metadata->time_zone;
echo "Device timezone: $timezone\n";

// Verify warning is cleared
$hasWarning = false;
foreach ($device->warnings as $warning) {
  if ($warning->warning_code === "ultraloq_time_zone_unknown") {
    $hasWarning = true;
    break;
  }
}

if (!$hasWarning) {
  echo "✓ Timezone configured successfully!\n";
  echo "✓ Device is ready to create time-bound access codes\n";
} else {
  echo "✗ Warning still present - check timezone configuration\n";
}
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

var device = seam.Devices.Get(deviceId: "your-device-id");

// Verify timezone is set
var timezone = device.Properties.UltraloqMetadata.TimeZone;
Console.WriteLine($"Device timezone: {timezone}");

// Verify warning is cleared
var hasWarning = device.Warnings.Any(
  w => w.WarningCode == "ultraloq_time_zone_unknown"
);

if (!hasWarning)
{
  Console.WriteLine("✓ Timezone configured successfully!");
  Console.WriteLine("✓ Device is ready to create time-bound access codes");
}
else
{
  Console.WriteLine("✗ Warning still present - check timezone configuration");
}
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.Device;

Seam seam = Seam.builder().build();

Device device = seam.devices().get(
  DevicesGetRequest.builder()
    .deviceId("your-device-id")
    .build()
);

// Verify timezone is set
String timezone = device.getProperties().getUltraloqMetadata().getTimeZone();
System.out.println("Device timezone: " + timezone);

// Verify warning is cleared
boolean hasWarning = device.getWarnings().stream()
  .anyMatch(w -> w.getWarningCode().equals("ultraloq_time_zone_unknown"));

if (!hasWarning) {
  System.out.println("✓ Timezone configured successfully!");
  System.out.println("✓ Device is ready to create time-bound access codes");
} else {
  System.out.println("✗ Warning still present - check timezone configuration");
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
  -d "{
    \"device_id\": \"your-device-id\"
  }")

# Check timezone
echo $device | jq -r '.device.properties.ultraloq_metadata.time_zone'

# Check warnings
echo $device | jq '.device.warnings[] | select(.warning_code == "ultraloq_time_zone_unknown")'
```
{% endtab %}
{% endtabs %}

After configuration, the device will also have the timezone in `device.location.timezone`:

```json
{
  "device_id": "...",
  "properties": {
    "ultraloq_metadata": {
      "time_zone": "America/New_York"
    }
  },
  "location": {
    "timezone": "America/New_York"
  },
  "warnings": []
}
```

***

## Changing Timezones

You can change a device's timezone at any time by calling `/devices/report_provider_metadata` again with the new timezone.

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

# User moved device from New York to Los Angeles
seam.devices.report_provider_metadata(
  devices=[
    {
      "device_id": "your-device-id",
      "ultraloq_metadata": {
        "time_zone": "America/Los_Angeles"  # Changed from America/New_York
      }
    }
  ]
)

print("✓ Timezone updated to Pacific Time")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// User moved device from New York to Los Angeles
await seam.devices.reportProviderMetadata({
  devices: [
    {
      device_id: "your-device-id",
      ultraloq_metadata: {
        time_zone: "America/Los_Angeles"  // Changed from America/New_York
      }
    }
  ]
});

console.log("✓ Timezone updated to Pacific Time");
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

# User moved device from New York to Los Angeles
seam.devices.report_provider_metadata(
  devices: [
    {
      device_id: "your-device-id",
      ultraloq_metadata: {
        time_zone: "America/Los_Angeles"  # Changed from America/New_York
      }
    }
  ]
)

puts "✓ Timezone updated to Pacific Time"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// User moved device from New York to Los Angeles
$seam->devices->report_provider_metadata(
  devices: [
    [
      "device_id" => "your-device-id",
      "ultraloq_metadata" => [
        "time_zone" => "America/Los_Angeles"  // Changed from America/New_York
      ]
    ]
  ]
);

echo "✓ Timezone updated to Pacific Time";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;

var seam = new SeamClient();

// User moved device from New York to Los Angeles
seam.Devices.ReportProviderMetadata(
  devices: new[] {
    new DeviceMetadata {
      DeviceId = "your-device-id",
      UltraloqMetadata = new UltraloqMetadata {
        TimeZone = "America/Los_Angeles"  // Changed from America/New_York
      }
    }
  }
);

Console.WriteLine("✓ Timezone updated to Pacific Time");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;

Seam seam = Seam.builder().build();

// User moved device from New York to Los Angeles
seam.devices().reportProviderMetadata(
  DevicesReportProviderMetadataRequest.builder()
    .devices(List.of(
      DeviceMetadata.builder()
        .deviceId("your-device-id")
        .ultraloqMetadata(UltraloqMetadata.builder()
          .timeZone("America/Los_Angeles")  // Changed from America/New_York
          .build())
        .build()
    ))
    .build()
);

System.out.println("✓ Timezone updated to Pacific Time");
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/report_provider_metadata' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "devices": [
      {
        "device_id": "your-device-id",
        "ultraloq_metadata": {
          "time_zone": "America/Los_Angeles"
        }
      }
    ]
  }'
```
{% endtab %}
{% endtabs %}

**Impact on Existing Access Codes:**

* Existing time-bound access codes maintain their **UTC timestamps**
* They continue working correctly because Seam stores them in UTC internally
* Future access codes will use the new timezone for scheduling

***

## Best Practices

### 1. Set Timezone Immediately After Connection

Configure the timezone as soon as you connect an Ultraloq device, before users try to create time-bound access codes:

```python
# Good practice: Configure timezone right after connection
devices = seam.devices.list(connected_account_id=account_id)

seam.devices.report_provider_metadata(
  devices=[
    {
      "device_id": device.device_id,
      "ultraloq_metadata": {"time_zone": user_timezone}
    }
    for device in devices
  ]
)
```

### 2. Check Warnings Before Creating Time-Bound Codes

Always check for the `ultraloq_time_zone_unknown` warning before creating time-bound access codes:

```python
def can_create_time_bound_codes(device):
  return not any(
    w.warning_code == "ultraloq_time_zone_unknown"
    for w in device.warnings
  )

if can_create_time_bound_codes(device):
  # Safe to create time-bound codes
  seam.access_codes.create(
    device_id=device.device_id,
    starts_at="...",
    ends_at="..."
  )
else:
  # Prompt user to configure timezone
  print("Configure device timezone before creating time-bound codes")
```

### 3. Use device.location.timezone for Reference

After configuration, you can reference the configured timezone from `device.location.timezone`:

```python
device = seam.devices.get(device_id="...")

if device.location and device.location.timezone:
  print(f"Device is in {device.location.timezone}")
  # Use this timezone for display or calculations
```

### 4. Provide Clear UI Guidance

In your application UI, guide users to select the correct timezone:

```
┌─────────────────────────────────────────────┐
│ ⚠️  Action Required: Set Device Timezone    │
│                                             │
│ Your Ultraloq device needs a timezone to   │
│ support scheduled access codes.             │
│                                             │
│ Device: Front Door Lock                     │
│                                             │
│ Select timezone: [America/New_York     ▼]  │
│                                             │
│ [ Configure Timezone ]                      │
└─────────────────────────────────────────────┘
```

***

## Troubleshooting

### Invalid Timezone Error

**Problem:** You receive an error like `"Invalid timezone. Must be a valid IANA timezone string."`

**Solution:**
* Verify you're using a valid IANA timezone (e.g., `"America/New_York"`, not `"EST"`)
* Check for typos in the timezone string
* Refer to the [IANA timezone list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

### Warning Not Cleared After Configuration

**Problem:** The `ultraloq_time_zone_unknown` warning persists after calling `report_provider_metadata`.

**Solution:**
* Verify the API call succeeded (check for errors in the response)
* Refresh the device by calling `seam.devices.get()` again
* Ensure you used the correct `device_id`
* Wait a few seconds and check again (state updates are usually immediate but may take a moment)

### Time-Bound Codes Still Failing

**Problem:** Time-bound access codes still fail to create after configuring timezone.

**Solution:**
* Verify `device.properties.ultraloq_metadata.time_zone` is not `null`
* Check that `device.warnings` does not contain `ultraloq_time_zone_unknown`
* Ensure you're providing both `starts_at` and `ends_at` in your access code request
* Verify your timestamps are valid ISO 8601 UTC strings

***

## API Reference

For complete API documentation, see:

* [POST /devices/report_provider_metadata](../../api/devices/report_provider_metadata.md)

***

## Next Steps

Now that you understand timezone configuration, you can:

* **Create time-bound access codes:** See [Creating Ultraloq Access Codes](creating-ultraloq-access-codes.md)
* **Review the setup guide:** See [Ultraloq Setup Guide](ultraloq-setup-guide.md)
* **Learn about access code constraints:** See [Understanding Code Constraints](../../capability-guides/smart-locks/access-codes/creating-access-codes/understanding-code-constraints.md)

***
