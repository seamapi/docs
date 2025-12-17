# List Device Providers

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all device providers.

The information that this endpoint returns for each provider includes a set of [capability flags](../../capability-guides/device-and-system-capabilities.md#capability-flags), such as `device_provider.can_remotely_unlock`. If at least one supported device from a provider has a specific capability, the corresponding capability flag is `true`.

When you create a [Connect Webview](../../core-concepts/connect-webviews/README.md), you can customize the providers—that is, the brands—that it displays. In the `/connect_webviews/create` request, include the desired set of device provider keys in the `accepted_providers` parameter. See also [Customize the Brands to Display in Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all device providers.

#### Code:

```javascript
await seam.devices.listDeviceProviders();
```

#### Output:

```javascript
[
  {
    "can_program_online_access_codes": true,
    "can_remotely_unlock": true,
    "device_provider_name": "akiles",
    "display_name": "Akiles",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
    "provider_categories": ["stable", "consumer_smartlocks"]
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all device providers.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list_device_providers" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output:

```curl
{
  "device_providers": [
    {
      "can_program_online_access_codes": true,
      "can_remotely_unlock": true,
      "device_provider_name": "akiles",
      "display_name": "Akiles",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
      "provider_categories": ["stable", "consumer_smartlocks"]
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all device providers.

#### Code:

```python
seam.devices.list_device_providers()
```

#### Output:

```python
[
    DeviceProvider(
        can_program_online_access_codes=true,
        can_remotely_unlock=true,
        device_provider_name="akiles",
        display_name="Akiles",
        image_url="https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
        provider_categories=["stable", "consumer_smartlocks"],
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all device providers.

#### Code:

```ruby
seam.devices.list_device_providers()
```

#### Output:

```ruby
[
  {
    "can_program_online_access_codes" => true,
    "can_remotely_unlock" => true,
    "device_provider_name" => "akiles",
    "display_name" => "Akiles",
    "image_url" =>
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
    "provider_categories" => %w[stable consumer_smartlocks],
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all device providers.

#### Code:

```php
$seam->devices->list_device_providers();
```

#### Output:

```php
[
    [
        "can_program_online_access_codes" => true,
        "can_remotely_unlock" => true,
        "device_provider_name" => "akiles",
        "display_name" => "Akiles",
        "image_url" =>
            "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
        "provider_categories" => ["stable", "consumer_smartlocks"],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all device providers.

#### Code:

```seam_cli
seam devices list-device-providers
```

#### Output:

```seam_cli
[
  {
    "can_program_online_access_codes": true,
    "can_remotely_unlock": true,
    "device_provider_name": "akiles",
    "display_name": "Akiles",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
    "provider_categories": ["stable", "consumer_smartlocks"]
  }
]
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`provider_category`** *String*

Category for which you want to list providers.

---


## Response

{% hint style="success" %}
Returns:
**Array of [device\_providers](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "can_program_online_access_codes": true,
  "can_remotely_unlock": true,
  "device_provider_name": "akiles",
  "display_name": "Akiles",
  "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
  "space_ids": [],
  "provider_categories": ["stable", "consumer_smartlocks"]
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### List device providers for a specific provider category

Returns a list of all device providers for a specified provider category.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.devices.listDeviceProviders({ provider_category: "stable" });
```

#### Output:

```javascript
[
  {
    "can_program_online_access_codes": true,
    "can_remotely_unlock": true,
    "device_provider_name": "akiles",
    "display_name": "Akiles",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
    "provider_categories": ["stable", "consumer_smartlocks"]
  }
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/list_device_providers" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "provider_category": "stable"
}
EOF
```

#### Output:

```curl
{
  "device_providers": [
    {
      "can_program_online_access_codes": true,
      "can_remotely_unlock": true,
      "device_provider_name": "akiles",
      "display_name": "Akiles",
      "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
      "provider_categories": ["stable", "consumer_smartlocks"]
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.devices.list_device_providers(provider_category="stable")
```

#### Output:

```python
[
    DeviceProvider(
        can_program_online_access_codes=true,
        can_remotely_unlock=true,
        device_provider_name="akiles",
        display_name="Akiles",
        image_url="https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
        provider_categories=["stable", "consumer_smartlocks"],
    )
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.devices.list_device_providers(provider_category: "stable")
```

#### Output:

```ruby
[
  {
    "can_program_online_access_codes" => true,
    "can_remotely_unlock" => true,
    "device_provider_name" => "akiles",
    "display_name" => "Akiles",
    "image_url" =>
      "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
    "provider_categories" => %w[stable consumer_smartlocks],
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->devices->list_device_providers(provider_category: "stable");
```

#### Output:

```php
[
    [
        "can_program_online_access_codes" => true,
        "can_remotely_unlock" => true,
        "device_provider_name" => "akiles",
        "display_name" => "Akiles",
        "image_url" =>
            "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
        "provider_categories" => ["stable", "consumer_smartlocks"],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam devices list-device-providers --provider_category "stable"
```

#### Output:

```seam_cli
[
  {
    "can_program_online_access_codes": true,
    "can_remotely_unlock": true,
    "device_provider_name": "akiles",
    "display_name": "Akiles",
    "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/logos/akiles.png&q=75&w=128",
    "provider_categories": ["stable", "consumer_smartlocks"]
  }
]
```
{% endtab %}

{% endtabs %}
