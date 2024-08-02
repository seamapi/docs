---
description: Get all device providers
---

# List Device Providers

Returns a list of all [device providers](./#device-providers).

{% swagger src="https://connect.getseam.com/openapi.json" path="/devices/list_device_providers" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

## Request

To filter the list of returned device providers by a specific device provider category, include the `provider_category` in the request body.

### Request Body Parameters

<table><thead><tr><th>Parameter</th><th width="112.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>provider_category</code></td><td>String<br><em>Optional</em></td><td><p>Provider category by which to filter device providers.</p><p>Supported categories:</p><ul><li><code>stable</code></li><li><code>consumer_smartlocks</code></li><li><code>thermostats</code></li><li><code>noise_sensors</code></li></ul></td></tr></tbody></table>

### Sample Request

{% tabs %}
{% tab title="Python" %}
```python
seam.devices.list_device_providers(
  provider_category="stable"
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/devices/list_device_providers' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "provider_category": "stable"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
await seam.devices.listDeviceProviders({
  provider_category: "stable"
})
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
client.devices.list_device_providers(
  provider_category: "stable"
)
```
{% endtab %}

{% tab title="C#" %}
```csharp
seam.Devices.ListDeviceProviders(
  providerCategory: Seam.Api.Devices.ListDeviceProvidersRequest.ProviderCategoryEnum.Stable
);
```
{% endtab %}

{% tab title="Java" %}
```java
seam.devices().listDeviceProviders(DevicesListDeviceProvidersRequest.builder()
  .providerCategory(DevicesListDeviceProvidersRequestProviderCategory.STABLE)
  .build()
);
```
{% endtab %}
{% endtabs %}

## Response

Returns an `device_providers` array, in which each returned `device_provider` contains the following properties:

<table><thead><tr><th width="310">Property</th><th>Description</th></tr></thead><tbody><tr><td><code>device_provider_name</code></td><td>Name of the device provider.</td></tr><tr><td><code>display_name</code></td><td>Display name that corresponds to the device provider type.</td></tr><tr><td><code>image_url</code></td><td>Image URL for the device provider.</td></tr><tr><td><code>provider_categories</code></td><td>List of provider categories for the device provider.</td></tr><tr><td><code>can_remotely_unlock</code></td><td>Indicates whether at least one supported device from the provider can perform a <a href="../../products/smart-locks/lock-and-unlock.md">remote unlock operation</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_remotely_lock</code></td><td>Indicates whether at least one supported device from the provider can perform a <a href="../../products/smart-locks/lock-and-unlock.md">remote lock operation</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_program_online_access_codes</code></td><td>Indicates whether at least one supported device from the provider can <a href="../../products/smart-locks/access-codes/">program online access codes</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr><tr><td><code>can_program_offline_access_codes</code></td><td>Indicates whether at least one supported device from the provider can <a href="../../products/smart-locks/access-codes/offline-access-codes.md">program offline access codes</a>. See <a href="../../capability-guides/device-and-system-capabilities.md#capability-flags">Capability Flags</a>.</td></tr></tbody></table>

### Sample Response

{% tabs %}
{% tab title="Python" %}
```
[
  DeviceProvider(    
    device_provider_name='august',
    display_name='August',
    image_url=/https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/august_logo_square.png&q=75&w=128',
    provider_categories=[
      'stable',
      'consumer_smartlocks'
    ],
    can_remotely_lock=True,
    can_remotely_unlock=True,
    can_program_online_access_codes=True
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
```json
{
  "device_providers": [
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
      "can_program_online_access_codes": true
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
```json
[
  {
    device_provider_name: 'august',
    display_name: 'August',
    image_url: 'https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/august_logo_square.png&q=75&w=128',
    provider_categories: [
      'stable',
      'consumer_smartlocks'
    ],
    'can_remotely_lock': true,
    'can_remotely_unlock': true,
    'can_program_online_access_codes': true
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
```
[
  <Seam::DeviceProvider:0x00438
    device_provider_name="august"
    display_name="August"
    image_url="https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/august_logo_square.png&q=75&w=128"
    provider_categories=[
      "stable",
      "consumer_smartlocks"
    ],
    can_remotely_lock: true,
    can_remotely_unlock: true,
    can_program_online_access_codes: true
  >,
  ...
]
```
{% endtab %}

{% tab title="C#" %}
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
  "can_program_online_access_codes": true
}
...
```
{% endtab %}

{% tab title="Java" %}
```json
[
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
    "can_program_online_access_codes": true
  },
  ...
]
```
{% endtab %}
{% endtabs %}
