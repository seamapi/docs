---
description: Learn how to find out information about the providers that Seam supports.
---

# Providers

Seam maintains a list of supported providers that you can access using the [List Device Providers](../../api-clients/devices/list_device_providers.md) endpoint. For a provider, this endpoint returns a subset of the following information, depending on the capabilities of the provider's devices:

<table><thead><tr><th width="273">Property</th><th width="101.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>device_provider_name</code></td><td>String</td><td><p>Name of the device provider.</p><p>For example: <code>august</code></p></td></tr><tr><td><code>display_name</code></td><td>String</td><td><p>Formatted version of the <code>device_provider_name</code>.</p><p>For example: <code>August</code></p></td></tr><tr><td><code>image_url</code></td><td>String</td><td>Image URL for the provider logo.</td></tr><tr><td><code>provider_categories</code></td><td>Array</td><td><p>Array of associated categories for the provider.</p><p>Supported categories:</p><ul><li><code>stable</code></li><li><code>consumer_smartlocks</code></li><li><code>thermostats</code></li><li><code>noise_sensors</code></li></ul></td></tr><tr><td><code>can_remotely_unlock</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can perform a <a href="../../products/smart-locks/lock-and-unlock.md">remote unlock operation</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_remotely_lock</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can perform a <a href="../../products/smart-locks/lock-and-unlock.md">remote lock operation</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_program_online_access_codes</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can <a href="../../products/smart-locks/access-codes/">program online access codes</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_program_offline_access_codes</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can <a href="../../products/smart-locks/access-codes/offline-access-codes.md">program offline access codes</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_simulate_connection</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can <a href="../devices/testing-your-app-against-device-disconnection-and-removal.md">simulate device connection</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_simulate_disconnection</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can <a href="../devices/testing-your-app-against-device-disconnection-and-removal.md">simulate device disconnection</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_simulate_removal</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can <a href="../devices/testing-your-app-against-device-disconnection-and-removal.md">simulate device removal</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_hvac_cool</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can be <a href="../../products/thermostats/configure-current-climate-settings.md">set to cool mode</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_hvac_heat</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can be <a href="../../products/thermostats/configure-current-climate-settings.md">set to heat mode</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_hvac_heat_cool</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can be <a href="../../products/thermostats/configure-current-climate-settings.md">set to heat-cool mode</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_turn_off_hvac</code></td><td>Boolean</td><td>Indicates whether at least one supported device from the provider can be <a href="../../products/thermostats/configure-current-climate-settings.md">set to off mode</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr></tbody></table>

The following example shows a `device_provider`:

```json
{
  "device_provider_name": "august",
  "display_name": "August",
  "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/august_logo_square.png&q=75&w=128",
  "provider_categories": [
    "stable",
    "consumer_smartlocks"
  ],
  "can_remotely_lock": true,
  "can_remotely_unlock": true,
  "can_program_online_access_codes": true,
  "can_simulate_connection": true,
  "can_simulate_disconnection": true,
  "can_simulate_removal": true
} 
```
