---
description: Learn about manufacturer- and device-specific constraints on codes.
---

# Understanding Code Constraints

When creating access codes, it is important to be aware of any constraints on the `code`. [Get a device](../../../../api/devices/get.md) and review its `device.properties.code_constraints`. Seam represents each constraint as an object with a `constraint_type` property. Depending on the constraint type, there may also be additional properties. Note that some constraints are manufacturer- or device-specific.

The `constraint_type` property can be any of the following enum values:

<table><thead><tr><th width="338">Constraint Type</th><th>Description</th></tr></thead><tbody><tr><td><code>no_zeros</code></td><td>Cannot use <code>0</code>s as digits in the PIN code.</td></tr><tr><td><code>cannot_start_with_12</code></td><td>PIN code cannot start with the sequence of digits <code>12</code>.</td></tr><tr><td><code>no_triple_consecutive_ints</code></td><td>No more than three digits in a row can be consecutive or the same in the PIN code.</td></tr><tr><td><code>cannot_specify_pin_code</code></td><td>Cannot specify a PIN code. You must leave the code empty, and the lock provider generates a PIN code.</td></tr><tr><td><code>pin_code_matches_existing_set</code></td><td><p>If you specify a PIN code, it must match an existing set of PIN codes used in the account.</p><p>For example, the PIN code could match the code assigned to a user in the system.</p></td></tr><tr><td><code>start_date_in_future</code></td><td>For time-bound codes, the start date must be in the future.</td></tr><tr><td><code>no_ascending_or_descending_sequence</code></td><td>PIN code cannot consist of a sequence of consecutive digits.</td></tr><tr><td><code>at_least_three_unique_digits</code></td><td>PIN code must contain at least three unique digits.</td></tr><tr><td><code>cannot_contain_089</code></td><td><p>PIN code cannot contain the digits <code>0</code>, <code>8</code>, or <code>9</code>.</p><p>For example, this restriction could apply to a cylinder lock that only includes the digits <code>1</code> to <code>7</code>.</p></td></tr><tr><td><code>cannot_contain_0789</code></td><td><p>PIN code cannot contain the digits <code>0</code>, <code>7</code>, <code>8</code>, or <code>9</code>.</p><p>For example, this restriction could apply to a cylinder lock that only includes the digits <code>1</code> to <code>6</code>.</p></td></tr><tr><td><code>name_length</code></td><td><p>Name of the code has some restrictions on length.</p><p>When the <code>constraint_type</code> is <code>name_length</code>, the constraint object has one or two additional properties called <code>min_length</code> and <code>max_length</code> to specify the length constraints.</p></td></tr><tr><td><code>name_must_be_unique</code></td><td>Name of the code must be unique within the device.</td></tr></tbody></table>

***

## Provider-Specific Requirements

In addition to code constraints, some device providers have additional requirements for creating access codes.

### Timezone Configuration

Some device providers require you to configure the device's timezone before creating time-bound access codes. This is because these devices schedule access codes using device-local time, but their APIs do not report the device's timezone.

**Providers requiring timezone configuration:**

* **Ultraloq** — Must configure timezone using `/devices/report_provider_metadata` before creating time-bound access codes. See [Configuring Ultraloq Device Timezones](../../../../device-and-system-integration-guides/ultraloq-locks/configuring-ultraloq-device-timezones.md).

{% hint style="info" %}
Permanent access codes (codes without `starts_at` and `ends_at`) do not require timezone configuration, even on providers that require it for time-bound codes.
{% endhint %}

**Detecting timezone requirement:**

Check for the provider-specific timezone warning in `device.warnings`:

{% tabs %}
{% tab title="Python" %}
```python
from seam import Seam

seam = Seam()

device = seam.devices.get(device_id="your-device-id")

# Check for timezone warnings
timezone_warnings = [
  w for w in device.warnings
  if "time_zone" in w.warning_code.lower()
]

if timezone_warnings:
  print("⚠️ Timezone configuration required for time-bound codes")
  print(f"Warning: {timezone_warnings[0].message}")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Seam } from "seam";

const seam = new Seam();

const device = await seam.devices.get({
  device_id: "your-device-id"
});

// Check for timezone warnings
const timezoneWarnings = device.warnings.filter(
  w => w.warning_code.toLowerCase().includes("time_zone")
);

if (timezoneWarnings.length > 0) {
  console.log("⚠️ Timezone configuration required for time-bound codes");
  console.log(`Warning: ${timezoneWarnings[0].message}`);
}
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
require "seam"

seam = Seam.new()

device = seam.devices.get(device_id: "your-device-id")

# Check for timezone warnings
timezone_warnings = device.warnings.select do |w|
  w.warning_code.downcase.include?("time_zone")
end

if timezone_warnings.any?
  puts "⚠️ Timezone configuration required for time-bound codes"
  puts "Warning: #{timezone_warnings[0].message}"
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

// Check for timezone warnings
$timezoneWarnings = array_filter($device->warnings, function($w) {
  return stripos($w->warning_code, "time_zone") !== false;
});

if (count($timezoneWarnings) > 0) {
  echo "⚠️ Timezone configuration required for time-bound codes\n";
  echo "Warning: " . array_values($timezoneWarnings)[0]->message . "\n";
}
```
{% endtab %}

{% tab title="C#" %}
```csharp
using Seam.Client;
using System.Linq;

var seam = new SeamClient();

var device = seam.Devices.Get(deviceId: "your-device-id");

// Check for timezone warnings
var timezoneWarnings = device.Warnings
  .Where(w => w.WarningCode.ToLower().Contains("time_zone"))
  .ToList();

if (timezoneWarnings.Any())
{
  Console.WriteLine("⚠️ Timezone configuration required for time-bound codes");
  Console.WriteLine($"Warning: {timezoneWarnings[0].Message}");
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

// Check for timezone warnings
var timezoneWarnings = device.getWarnings().stream()
  .filter(w -> w.getWarningCode().toLowerCase().contains("time_zone"))
  .collect(Collectors.toList());

if (!timezoneWarnings.isEmpty()) {
  System.out.println("⚠️ Timezone configuration required for time-bound codes");
  System.out.println("Warning: " + timezoneWarnings.get(0).getMessage());
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

# Check for timezone warnings
echo $device | jq '.device.warnings[] | select(.warning_code | test("time_zone"; "i"))'
```
{% endtab %}
{% endtabs %}

For devices requiring timezone configuration, attempting to create a time-bound access code without first setting the timezone will result in a validation error.
