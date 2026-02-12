# Update an Unmanaged Device

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified [unmanaged device](../../../core-concepts/devices/managed-and-unmanaged-devices.md). To convert an unmanaged device to managed, set `is_managed` to `true`.

An unmanaged device has a limited set of visible properties and a subset of supported events. You cannot control an unmanaged device. Any [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) on an unmanaged device are unmanaged. To control an unmanaged device with Seam, [convert it to a managed device](../../../core-concepts/devices/managed-and-unmanaged-devices.md#convert-an-unmanaged-device-to-managed).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified unmanaged device.

#### Code:

```javascript
await seam.devices.unmanaged.update({
  device_id: "66c3adbf-a0e5-403a-8981-ec5286b5da76",
  is_managed: true,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified unmanaged device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/unmanaged/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "66c3adbf-a0e5-403a-8981-ec5286b5da76",
  "is_managed": true
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified unmanaged device.

#### Code:

```python
seam.devices.unmanaged.update(
    device_id="66c3adbf-a0e5-403a-8981-ec5286b5da76", is_managed=true
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified unmanaged device.

#### Code:

```ruby
seam.devices.unmanaged.update(device_id: "66c3adbf-a0e5-403a-8981-ec5286b5da76", is_managed: true)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified unmanaged device.

#### Code:

```php
$seam->devices->unmanaged->update(
    device_id: "66c3adbf-a0e5-403a-8981-ec5286b5da76",
    is_managed: true,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified unmanaged device.

#### Code:

```seam_cli
seam devices unmanaged update --device_id "66c3adbf-a0e5-403a-8981-ec5286b5da76" --is_managed true
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`device_id`** *String* (Required)

ID of the unmanaged device that you want to update.

---

**`custom_metadata`** *Object*

Custom metadata that you want to associate with the device. Supports up to 50 JSON key:value pairs.

---

**`is_managed`** *Boolean*

Indicates whether the device is managed. Set this parameter to `true` to convert an unmanaged device to managed.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

