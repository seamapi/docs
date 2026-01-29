---
description: Create and manage access codes for Ultraloq locks
---

# Creating Ultraloq Access Codes

This guide explains how to create and manage access codes for Ultraloq locks using the Seam API.

***

## Overview

Ultraloq locks support two types of access codes:

* **Permanent access codes** — Codes without start or end times that work indefinitely
* **Time-bound access codes** — Codes that automatically activate and deactivate at specific times

{% hint style="warning" %}
**Important:** Time-bound access codes require [timezone configuration](configuring-ultraloq-device-timezones.md). Permanent access codes work without timezone configuration.
{% endhint %}

***

## Before You Begin

To create access codes for an Ultraloq device:

1. Your Ultraloq device must be [connected to Seam](ultraloq-setup-guide.md)
2. For **time-bound access codes only**: Device timezone must be [configured](configuring-ultraloq-device-timezones.md)
3. Device must have `can_program_online_access_codes: true`

***

## Creating Permanent Access Codes

Permanent access codes work indefinitely until you delete them. They **do not require timezone configuration**.

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

print(f"Access code created: {access_code.code}")
print(f"Status: {access_code.status}")
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

console.log(`Access code created: ${accessCode.code}`);
console.log(`Status: ${accessCode.status}`);
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

puts "Access code created: #{access_code.code}"
puts "Status: #{access_code.status}"
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

echo "Access code created: " . $accessCode->code . "\n";
echo "Status: " . $accessCode->status . "\n";
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

Console.WriteLine($"Access code created: {accessCode.Code}");
Console.WriteLine($"Status: {accessCode.Status}");
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

System.out.println("Access code created: " + accessCode.getCode());
System.out.println("Status: " + accessCode.getStatus());
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

***

## Creating Time-Bound Access Codes

Time-bound access codes automatically activate and deactivate at specified times. They **require timezone configuration**.

{% hint style="warning" %}
**Prerequisites:**
1. Device timezone must be configured (see [Configuring Ultraloq Device Timezones](configuring-ultraloq-device-timezones.md))
2. Device must not have the `ultraloq_time_zone_unknown` warning
{% endhint %}

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam
from datetime import datetime, timedelta

seam = Seam()

# Define time range in UTC
starts_at = datetime.utcnow() + timedelta(days=1)
ends_at = starts_at + timedelta(days=2)

# Create time-bound access code
access_code = seam.access_codes.create(
  device_id="your-device-id",
  name="Weekend Guest",
  code="5678",  # Optional: auto-generated if omitted
  starts_at=starts_at.isoformat() + "Z",
  ends_at=ends_at.isoformat() + "Z"
)

print(f"Access code created: {access_code.code}")
print(f"Active from {access_code.starts_at} to {access_code.ends_at}")
print(f"Status: {access_code.status}")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

// Define time range in UTC
const startsAt = new Date(Date.now() + 24 * 60 * 60 * 1000);  // Tomorrow
const endsAt = new Date(startsAt.getTime() + 2 * 24 * 60 * 60 * 1000);  // +2 days

// Create time-bound access code
const accessCode = await seam.accessCodes.create({
  device_id: "your-device-id",
  name: "Weekend Guest",
  code: "5678",  // Optional: auto-generated if omitted
  starts_at: startsAt.toISOString(),
  ends_at: endsAt.toISOString()
});

console.log(`Access code created: ${accessCode.code}`);
console.log(`Active from ${accessCode.starts_at} to ${accessCode.ends_at}`);
console.log(`Status: ${accessCode.status}`);
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"
require "time"

seam = Seam.new()

# Define time range in UTC
starts_at = Time.now.utc + (24 * 60 * 60)  # Tomorrow
ends_at = starts_at + (2 * 24 * 60 * 60)   # +2 days

# Create time-bound access code
access_code = seam.access_codes.create(
  device_id: "your-device-id",
  name: "Weekend Guest",
  code: "5678",  # Optional: auto-generated if omitted
  starts_at: starts_at.iso8601,
  ends_at: ends_at.iso8601
)

puts "Access code created: #{access_code.code}"
puts "Active from #{access_code.starts_at} to #{access_code.ends_at}"
puts "Status: #{access_code.status}"
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

// Define time range in UTC
$startsAt = new DateTime('+1 day', new DateTimeZone('UTC'));
$endsAt = (clone $startsAt)->add(new DateInterval('P2D'));

// Create time-bound access code
$accessCode = $seam->access_codes->create(
  device_id: "your-device-id",
  name: "Weekend Guest",
  code: "5678",  // Optional: auto-generated if omitted
  starts_at: $startsAt->format(DateTime::ATOM),
  ends_at: $endsAt->format(DateTime::ATOM)
);

echo "Access code created: " . $accessCode->code . "\n";
echo "Active from " . $accessCode->starts_at . " to " . $accessCode->ends_at . "\n";
echo "Status: " . $accessCode->status . "\n";
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;
using System;

var seam = new SeamClient();

// Define time range in UTC
var startsAt = DateTime.UtcNow.AddDays(1);
var endsAt = startsAt.AddDays(2);

// Create time-bound access code
var accessCode = seam.AccessCodes.Create(
  deviceId: "your-device-id",
  name: "Weekend Guest",
  code: "5678",  // Optional: auto-generated if omitted
  startsAt: startsAt,
  endsAt: endsAt
);

Console.WriteLine($"Access code created: {accessCode.Code}");
Console.WriteLine($"Active from {accessCode.StartsAt} to {accessCode.EndsAt}");
Console.WriteLine($"Status: {accessCode.Status}");
```
{% endtab %}

{% tab title="Java" %}
```java
import com.seam.api.Seam;
import com.seam.api.types.AccessCode;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

Seam seam = Seam.builder().build();

// Define time range in UTC
Instant startsAt = Instant.now().plus(1, ChronoUnit.DAYS);
Instant endsAt = startsAt.plus(2, ChronoUnit.DAYS);

// Create time-bound access code
AccessCode accessCode = seam.accessCodes().create(
  AccessCodesCreateRequest.builder()
    .deviceId("your-device-id")
    .name("Weekend Guest")
    .code("5678")  // Optional: auto-generated if omitted
    .startsAt(startsAt.toString())
    .endsAt(endsAt.toString())
    .build()
);

System.out.println("Access code created: " + accessCode.getCode());
System.out.println("Active from " + accessCode.getStartsAt() + " to " + accessCode.getEndsAt());
System.out.println("Status: " + accessCode.getStatus());
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Calculate timestamps (requires date command)
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
    \"code\": \"5678\",
    \"starts_at\": \"${STARTS_AT}\",
    \"ends_at\": \"${ENDS_AT}\"
  }"
```
{% endtab %}
{% endtabs %}

### How Time Zone Conversion Works

When you create a time-bound access code:

1. **You provide:** UTC timestamps (`starts_at` and `ends_at`)
2. **Seam converts:** UTC → Device local time using the configured timezone
3. **Ultraloq schedules:** Code activation/deactivation in device's local time
4. **Seam stores:** UTC timestamps for consistent time representation

**Example:**

```
User creates code with:
  starts_at: "2024-01-20T19:00:00Z"  (7:00 PM UTC)
  ends_at:   "2024-01-22T02:00:00Z"  (2:00 AM UTC)

Device timezone: "America/New_York" (UTC-5)

Seam converts to local time:
  Starts: 2024-01-20 14:00 (2:00 PM EST)
  Ends:   2024-01-21 21:00 (9:00 PM EST)

Ultraloq device activates code from 2:00 PM to 9:00 PM EST.
```

***

## Access Code Requirements

### Code Format

Ultraloq access codes must be:

* **Numeric only** — Only digits 0-9
* **4-8 characters long** — Examples: `"1234"`, `"567890"`, `"12345678"`

{% hint style="info" %}
**Auto-generated codes:** If you omit the `code` parameter, Seam automatically generates a random 4-8 digit numeric code.
{% endhint %}

### Valid Examples

```python
# Valid codes
"1234"      # 4 digits
"56789"     # 5 digits
"123456"    # 6 digits
"1234567"   # 7 digits
"12345678"  # 8 digits
```

### Invalid Examples

```python
# Invalid codes
"123"       # Too short (< 4 digits)
"123456789" # Too long (> 8 digits)
"abcd"      # Non-numeric characters
"12-34"     # Special characters not allowed
```

***

## Checking Device Readiness

Before creating time-bound access codes, verify that the device's timezone is configured:

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

def can_create_time_bound_codes(device_id):
  device = seam.devices.get(device_id=device_id)

  # Check for timezone warning
  has_timezone_warning = any(
    w.warning_code == "ultraloq_time_zone_unknown"
    for w in device.warnings
  )

  return not has_timezone_warning

# Check before creating
if can_create_time_bound_codes("your-device-id"):
  # Safe to create time-bound codes
  access_code = seam.access_codes.create(
    device_id="your-device-id",
    starts_at="...",
    ends_at="..."
  )
else:
  print("Configure device timezone first")
  print("See: Configuring Ultraloq Device Timezones")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

async function canCreateTimeBoundCodes(deviceId) {
  const device = await seam.devices.get({ device_id: deviceId });

  // Check for timezone warning
  const hasTimezoneWarning = device.warnings.some(
    w => w.warning_code === "ultraloq_time_zone_unknown"
  );

  return !hasTimezoneWarning;
}

// Check before creating
if (await canCreateTimeBoundCodes("your-device-id")) {
  // Safe to create time-bound codes
  const accessCode = await seam.accessCodes.create({
    device_id: "your-device-id",
    starts_at: "...",
    ends_at: "..."
  });
} else {
  console.log("Configure device timezone first");
  console.log("See: Configuring Ultraloq Device Timezones");
}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

def can_create_time_bound_codes?(seam, device_id)
  device = seam.devices.get(device_id: device_id)

  # Check for timezone warning
  has_timezone_warning = device.warnings.any? do |w|
    w.warning_code == "ultraloq_time_zone_unknown"
  end

  !has_timezone_warning
end

# Check before creating
if can_create_time_bound_codes?(seam, "your-device-id")
  # Safe to create time-bound codes
  access_code = seam.access_codes.create(
    device_id: "your-device-id",
    starts_at: "...",
    ends_at: "..."
  )
else
  puts "Configure device timezone first"
  puts "See: Configuring Ultraloq Device Timezones"
end
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

function canCreateTimeBoundCodes($seam, $deviceId) {
  $device = $seam->devices->get(device_id: $deviceId);

  // Check for timezone warning
  foreach ($device->warnings as $warning) {
    if ($warning->warning_code === "ultraloq_time_zone_unknown") {
      return false;
    }
  }

  return true;
}

// Check before creating
if (canCreateTimeBoundCodes($seam, "your-device-id")) {
  // Safe to create time-bound codes
  $accessCode = $seam->access_codes->create(
    device_id: "your-device-id",
    starts_at: "...",
    ends_at: "..."
  );
} else {
  echo "Configure device timezone first\n";
  echo "See: Configuring Ultraloq Device Timezones\n";
}
```
{% endtab %}
{% endtabs %}

***

## Disabled Access Codes

Users can disable access codes through the Ultraloq mobile app. When this happens, Seam detects the change and adds a warning to the access code.

### Detecting Disabled Codes

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

access_code = seam.access_codes.get(
  access_code_id="your-access-code-id"
)

# Check for disabled warning
is_disabled = any(
  w.warning_code == "ultraloq_access_code_disabled"
  for w in access_code.warnings
)

if is_disabled:
  print("⚠️ Code is disabled on Ultraloq device")
  print("User must re-enable it in the Ultraloq mobile app")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const accessCode = await seam.accessCodes.get({
  access_code_id: "your-access-code-id"
});

// Check for disabled warning
const isDisabled = accessCode.warnings.some(
  w => w.warning_code === "ultraloq_access_code_disabled"
);

if (isDisabled) {
  console.log("⚠️ Code is disabled on Ultraloq device");
  console.log("User must re-enable it in the Ultraloq mobile app");
}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

access_code = seam.access_codes.get(
  access_code_id: "your-access-code-id"
)

# Check for disabled warning
is_disabled = access_code.warnings.any? do |w|
  w.warning_code == "ultraloq_access_code_disabled"
end

if is_disabled
  puts "⚠️ Code is disabled on Ultraloq device"
  puts "User must re-enable it in the Ultraloq mobile app"
end
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
require 'vendor/autoload.php';

use Seam\SeamClient;

$seam = new SeamClient();

$accessCode = $seam->access_codes->get(
  access_code_id: "your-access-code-id"
);

// Check for disabled warning
$isDisabled = false;
foreach ($accessCode->warnings as $warning) {
  if ($warning->warning_code === "ultraloq_access_code_disabled") {
    $isDisabled = true;
    break;
  }
}

if ($isDisabled) {
  echo "⚠️ Code is disabled on Ultraloq device\n";
  echo "User must re-enable it in the Ultraloq mobile app\n";
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**Resolution:** The user must re-enable the code in the Ultraloq mobile app. Seam cannot programmatically re-enable disabled codes. Once re-enabled in the app, Seam will automatically detect the change and clear the warning.
{% endhint %}

***

## Validation and Error Handling

### Time-Bound Code Without Timezone

If you attempt to create a time-bound code without configuring the device's timezone:

```json
{
  "error": {
    "type": "invalid_input",
    "message": "Time zone required for time-bound access codes on Ultraloq devices"
  }
}
```

**Solution:** Configure the device's timezone first using `/devices/report_provider_metadata`. See [Configuring Ultraloq Device Timezones](configuring-ultraloq-device-timezones.md).

### Invalid Code Format

If you provide a code that doesn't meet the 4-8 digit numeric requirement:

```json
{
  "error": {
    "type": "invalid_input",
    "message": "Access code must be 4-8 digit numeric PIN for Ultraloq devices"
  }
}
```

**Solution:** Use only numeric digits (0-9) and ensure the code is 4-8 characters long.

### Missing Time Bounds

If you provide only `starts_at` or only `ends_at`:

```json
{
  "error": {
    "type": "invalid_input",
    "message": "Both starts_at and ends_at must be provided together"
  }
}
```

**Solution:** Either provide both `starts_at` and `ends_at`, or omit both for a permanent code.

### Invalid Time Ordering

If `ends_at` is before `starts_at`:

```json
{
  "error": {
    "type": "invalid_input",
    "message": "ends_at must be after starts_at"
  }
}
```

**Solution:** Ensure `starts_at` comes before `ends_at`.

***

## Best Practices

### 1. Use Auto-Generated Codes

For better security, let Seam generate random codes instead of using predictable patterns:

```python
# Good: Auto-generated random code
access_code = seam.access_codes.create(
  device_id="your-device-id",
  name="Guest 123"
  # code parameter omitted - Seam generates random code
)

# Less secure: Predictable pattern
access_code = seam.access_codes.create(
  device_id="your-device-id",
  name="Guest 123",
  code="1234"  # Easy to guess
)
```

### 2. Check Timezone Before Creating Time-Bound Codes

Always verify timezone configuration before attempting to create time-bound codes:

```python
device = seam.devices.get(device_id="your-device-id")

if not any(w.warning_code == "ultraloq_time_zone_unknown" for w in device.warnings):
  # Safe to create time-bound codes
  seam.access_codes.create(device_id=device.device_id, starts_at="...", ends_at="...")
else:
  # Configure timezone first
  print("Configure timezone before creating time-bound codes")
```

### 3. Monitor Access Code Warnings

Regularly check access code warnings to detect disabled codes:

```python
access_codes = seam.access_codes.list(device_id="your-device-id")

disabled_codes = [
  code for code in access_codes
  if any(w.warning_code == "ultraloq_access_code_disabled" for w in code.warnings)
]

if disabled_codes:
  print(f"⚠️ {len(disabled_codes)} codes are disabled")
  # Notify user to re-enable in Ultraloq app
```

### 4. Use UTC Timestamps

Always provide timestamps in UTC (ISO 8601 format with 'Z' suffix):

```python
# Good: UTC timestamp
starts_at = "2024-01-20T15:00:00Z"

# Bad: Local time without timezone info
starts_at = "2024-01-20T10:00:00"  # Ambiguous!
```

***

## Troubleshooting

### Code Not Appearing on Device

If an access code doesn't appear on the physical device:

1. Verify the code status is `set` (not `setting` or `unset`)
2. Check for warnings on the access code
3. Ensure the device is online and connected to Wi-Fi
4. Wait a few minutes for synchronization

### Time-Bound Code Activates at Wrong Time

If a time-bound code activates at an unexpected time:

1. Verify the device's timezone is correctly configured
2. Check `device.properties.ultraloq_metadata.time_zone`
3. Ensure you provided UTC timestamps (with 'Z' suffix)
4. Recalculate the local time conversion to verify correctness

### Code Validation Errors

If you receive validation errors when creating codes:

1. **Invalid format:** Ensure code is 4-8 numeric digits
2. **Timezone required:** Configure device timezone for time-bound codes
3. **Missing time bounds:** Provide both `starts_at` and `ends_at`, or neither
4. **Invalid ordering:** Ensure `starts_at` is before `ends_at`

***

## API Reference

For complete API documentation, see:

* [POST /access_codes/create](../../api/access_codes/create.md)
* [GET /access_codes/get](../../api/access_codes/get.md)
* [GET /access_codes/list](../../api/access_codes/list.md)
* [POST /access_codes/delete](../../api/access_codes/delete.md)

***

## Next Steps

* **Learn about timezone configuration:** See [Configuring Ultraloq Device Timezones](configuring-ultraloq-device-timezones.md)
* **Understand code constraints:** See [Understanding Code Constraints](../../capability-guides/smart-locks/access-codes/creating-access-codes/understanding-code-constraints.md)
* **Review the setup guide:** See [Ultraloq Setup Guide](ultraloq-setup-guide.md)
* **Explore access code webhooks:** See [Webhooks](../../core-concepts/webhooks.md)

***
