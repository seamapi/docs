# Update a Device

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [device](../../core-concepts/devices/README.md).

You can add or change [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) for a device, change the device's name, or [convert a managed device to unmanaged](../../core-concepts/devices/managed-and-unmanaged-devices.md).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified device.

#### Code:

```javascript
await seam.devices.update({
  device_id: "ccfab465-4838-4ff3-af62-97c78e8bf44b",
  name: "My Updated Device",
  is_managed: true,
  custom_metadata: { id: "internalId1" },
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "ccfab465-4838-4ff3-af62-97c78e8bf44b",
  "name": "My Updated Device",
  "is_managed": true,
  "custom_metadata": {
    "id": "internalId1"
  }
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified device.

#### Code:

```python
seam.devices.update(
    device_id="ccfab465-4838-4ff3-af62-97c78e8bf44b",
    name="My Updated Device",
    is_managed=true,
    custom_metadata={"id": "internalId1"},
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified device.

#### Code:

```ruby
seam.devices.update(
  device_id: "ccfab465-4838-4ff3-af62-97c78e8bf44b",
  name: "My Updated Device",
  is_managed: true,
  custom_metadata: {
    id: "internalId1",
  },
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified device.

#### Code:

```php
$seam->devices->update(
    device_id: "ccfab465-4838-4ff3-af62-97c78e8bf44b",
    name: "My Updated Device",
    is_managed: true,
    custom_metadata: ["id" => "internalId1"],
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified device.

#### Code:

```seam_cli
seam devices update --device_id "ccfab465-4838-4ff3-af62-97c78e8bf44b" --name "My Updated Device" --is_managed true --custom_metadata {"id":"internalId1"}
```

#### Output:

```seam_cli
{}
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

**`device_id`** *String* (Required)

ID of the device that you want to update.

---

**`custom_metadata`** *Object*

Custom metadata that you want to associate with the device. Supports up to 50 JSON key:value pairs. [Adding custom metadata to a device](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) enables you to store custom information, like customer details or internal IDs from your application. Then, you can [filter devices by the desired metadata](../../core-concepts/devices/filtering-devices-by-custom-metadata.md).

---

**`is_managed`** *Boolean*

Indicates whether the device is managed. To unmanage a device, set `is_managed` to `false`.

---

**`name`** *String*

Name for the device.

---

**`properties`** *Object*

<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Name for the device.

</details>

---



## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

