# List Devices

## List Devices

{% swagger method="get" path="/devices/list_device_providers" baseUrl="https://connect.getseam.com" summary="Get a list of device providers" %}
{% swagger-description %}
Retrieve a list of device providers, optionally filtered by provider category
{% endswagger-description %}

{% swagger-parameter in="query" name="provider_category" %}
Category of the device provider you'd like to filter by
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Successful response" %}
```javascript
{
	"device_providers": [
		{
			"device_provider_name": "akuvox",
			"display_name": "Akuvox",
			"image_url": "https://connect.getseam.com/assets/images/logos/akuvox_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "august",
			"display_name": "August",
			"image_url": "https://connect.getseam.com/assets/images/logos/august_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "brivo",
			"display_name": "Brivo",
			"image_url": "https://connect.getseam.com/assets/images/logos/brivo_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "butterflymx",
			"display_name": "ButterflyMX",
			"image_url": "https://connect.getseam.com/assets/images/logos/butterflymx_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "doorking",
			"display_name": "Doorking",
			"image_url": "https://connect.getseam.com/assets/images/logos/doorking_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "genie",
			"display_name": "Genie",
			"image_url": "https://connect.getseam.com/assets/images/logos/genie_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "igloo",
			"display_name": "Igloohome",
			"image_url": "https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "linear",
			"display_name": "Linear",
			"image_url": "https://connect.getseam.com/assets/images/logos/linear_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "lockly",
			"display_name": "Lockly",
			"image_url": "https://connect.getseam.com/assets/images/logos/lockly_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "nuki",
			"display_name": "Nuki",
			"image_url": "https://connect.getseam.com/assets/images/logos/nuki_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "salto",
			"display_name": "Salto",
			"image_url": "https://connect.getseam.com/assets/images/logos/salto_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "schlage",
			"display_name": "Schlage",
			"image_url": "https://connect.getseam.com/assets/images/logos/schlage_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "seam_relay_admin",
			"display_name": "Seam",
			"image_url": "https://connect.getseam.com/assets/images/logos/seam.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "smartthings",
			"display_name": "SmartThings",
			"image_url": "https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "yale_access",
			"display_name": "Yale Access",
			"image_url": "https://connect.getseam.com/assets/images/logos/yale_logo_square.png",
			"provider_categories": [
				"stable"
			]
		}
	],
	"ok": true
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Invalid provider_category" %}
```javascript
{
	"error": {
		"type": "invalid_input",
		"message": "Invalid enum value. Expected 'stable', received 'bad' for \"provider_category\"",
		"validation_errors": {
			"_errors": [],
			"provider_category": {
				"_errors": [
					"Invalid enum value. Expected 'stable', received 'bad'"
				]
			}
		},
		"request_id": "c97a717c-91fb-4cd1-a0db-94729052138b"
	},
	"ok": false
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}

{% tab title="Ruby" %}
```ruby
# List all device providers
seam.devices.list_device_providers
# List all stable device providers
seam.devices.list_device_providers({ provider_category: "stable" })

# Logged DeviceProvider (puts(device_provider.inspect)):
# 
# <Seam::DeviceProvider:0x001d38
#   device_provider_name="august"
#   display_name="August"
#   provider_categories=["stable"]>
```
{% endtab %}
{% endtabs %}

### Parameters

| `provider_category` | <p>type: string<br>Optional</p>   | <p><br>Provider category to filter providers by. Currently supported categories: `stable`</p> |
| ---------------------- | --------------------------------- | -------------------------------------- |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
	"device_providers": [
		{
			"device_provider_name": "akuvox",
			"display_name": "Akuvox",
			"image_url": "https://connect.getseam.com/assets/images/logos/akuvox_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "august",
			"display_name": "August",
			"image_url": "https://connect.getseam.com/assets/images/logos/august_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "brivo",
			"display_name": "Brivo",
			"image_url": "https://connect.getseam.com/assets/images/logos/brivo_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "butterflymx",
			"display_name": "ButterflyMX",
			"image_url": "https://connect.getseam.com/assets/images/logos/butterflymx_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "doorking",
			"display_name": "Doorking",
			"image_url": "https://connect.getseam.com/assets/images/logos/doorking_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "genie",
			"display_name": "Genie",
			"image_url": "https://connect.getseam.com/assets/images/logos/genie_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "igloo",
			"display_name": "Igloohome",
			"image_url": "https://connect.getseam.com/assets/images/logos/igloohome_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "linear",
			"display_name": "Linear",
			"image_url": "https://connect.getseam.com/assets/images/logos/linear_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "lockly",
			"display_name": "Lockly",
			"image_url": "https://connect.getseam.com/assets/images/logos/lockly_logo_square.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "nuki",
			"display_name": "Nuki",
			"image_url": "https://connect.getseam.com/assets/images/logos/nuki_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "salto",
			"display_name": "Salto",
			"image_url": "https://connect.getseam.com/assets/images/logos/salto_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "schlage",
			"display_name": "Schlage",
			"image_url": "https://connect.getseam.com/assets/images/logos/schlage_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "seam_relay_admin",
			"display_name": "Seam",
			"image_url": "https://connect.getseam.com/assets/images/logos/seam.png",
			"provider_categories": []
		},
		{
			"device_provider_name": "smartthings",
			"display_name": "SmartThings",
			"image_url": "https://connect.getseam.com/assets/images/logos/smartthings_logo_square.png",
			"provider_categories": [
				"stable"
			]
		},
		{
			"device_provider_name": "yale_access",
			"display_name": "Yale Access",
			"image_url": "https://connect.getseam.com/assets/images/logos/yale_logo_square.png",
			"provider_categories": [
				"stable"
			]
		}
	],
	"ok": true
}
```
{% endtab %}
{% endtabs %}
