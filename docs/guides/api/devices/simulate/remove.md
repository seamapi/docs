# Simulate Device Removal

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates removing a device from Seam. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your App Against Device Disconnection and Removal](../../../core-concepts/devices/testing-your-app-against-device-disconnection-and-removal.md).


{% tabs %}
{% tab title="JavaScript" %}

Simulates removing a device from Seam.

#### Code:

```javascript
await seam.devices.simulate.remove({
  device_id: "46757795-11f7-446a-a6cb-779e9f039d7c",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates removing a device from Seam.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/simulate/remove" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "46757795-11f7-446a-a6cb-779e9f039d7c"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates removing a device from Seam.

#### Code:

```python
seam.devices.simulate.remove(device_id="46757795-11f7-446a-a6cb-779e9f039d7c")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates removing a device from Seam.

#### Code:

```ruby
seam.devices.simulate.remove(device_id: "46757795-11f7-446a-a6cb-779e9f039d7c")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates removing a device from Seam.

#### Code:

```php
$seam->devices->simulate->remove(
    device_id: "46757795-11f7-446a-a6cb-779e9f039d7c",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates removing a device from Seam.

#### Code:

```seam_cli
seam devices simulate remove --device_id "46757795-11f7-446a-a6cb-779e9f039d7c"
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

ID of the device that you want to simulate removing from Seam.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

