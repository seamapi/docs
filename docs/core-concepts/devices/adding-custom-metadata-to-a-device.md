---
description: You can add or change custom metadata for a device.
---

# Adding Custom Metadata to a Device

You can use custom metadata to store a custom payload or object, tailored to the specific needs of your app. For example, this feature is useful for tracking customer information, internal user IDs, or other internal resources for a [device](./). Storing custom metadata in a Seam `device` object enables you to look up an internal resource from directly within your Seam [workspace](../workspaces/). Then, you can [filter devices by the desired metadata](filtering-devices-by-custom-metadata.md).

{% hint style="info" %}
You can also use unique resource keys as an easy way to link your resources to Seam resources. For details, see [Mapping Your Resources to Seam Resources](../mapping-your-resources-to-seam-resources.md).
{% endhint %}

Use the [Update Device](../../api/devices/update.md) method with the optional [`custom_metadata` property](../../api/devices/#properties) to change or add custom metadata for the connected account. This property accepts up to 50 JSON key:value pairs.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
device_update = seam.devices.update(
    device = "30fd243b-3054-4384-a713-5487076a3826",
    custom_metadata = {
        "internal_account_id": "user-1"
    }
)

pprint(device_update)
```

**Response:**

```
True
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/devices/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "30fd243b-3054-4384-a713-5487076a3826",
  "custom_metadata": {
    "id": "internal_id_1"
  }
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
const deviceUpdate = await seam.devices.update({
  device_id: "30fd243b-3054-4384-a713-5487076a3826",
  custom_metadata: {
    "internal_account_id": "user-1"
  }
})

console.log(deviceUpdate)
```

**Response:**

```json
{ ok: true }
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
device_update = client.devices.update(
  device_id: "30fd243b-3054-4384-a713-5487076a3826",
  custom_metadata: {
    "internal_account_id": "user-1"
  }
)

puts device_update.inspect
```

**Response:**

```
{"ok"=>true}
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$device_update = $seam->devices->update(
  device_id: "30fd243b-3054-4384-a713-5487076a3826",
  custom_metadata: array('internal_account_id' => 'user-1')
)
echo json_encode($device_update, JSON_PRETTY_PRINT);
```

**Response:**

{% code overflow="wrap" %}
```json
true
```
{% endcode %}
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var customMetadata = new Dictionary<string, string>()
{
  {"internal_account_id", "user-1"}
};

var deviceUpdate = seam.Devices.Update(
  deviceId: "30fd243b-3054-4384-a713-5487076a3826",
  customMetadata: customMetadata
);

Console.WriteLine(deviceUpdate);
```

**Response:**

```json
{
  "device_id": "30fd243b-3054-4384-a713-5487076a3826",
  "device_type": "schlage_lock",
  ...
  "is_managed": true,
  "custom_metadata": {"internal_account_id"=>"user-1"}
}
```
{% endtab %}
{% endtabs %}
