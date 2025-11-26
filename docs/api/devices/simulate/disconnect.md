# Simulate Device Disconnection

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates disconnecting a device from Seam. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your App Against Device Disconnection and Removal](../../../core-concepts/devices/testing-your-app-against-device-disconnection-and-removal.md).


{% tabs %}
{% tab title="JavaScript" %}

Simulates disconnecting a device from Seam.

#### Code:

```javascript
await seam.devices.simulate.disconnect({
  device_id: "a60686b8-f401-452d-9f67-53d139cf6160",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates disconnecting a device from Seam.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/simulate/disconnect" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "a60686b8-f401-452d-9f67-53d139cf6160"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates disconnecting a device from Seam.

#### Code:

```python
seam.devices.simulate.disconnect(device_id="a60686b8-f401-452d-9f67-53d139cf6160")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates disconnecting a device from Seam.

#### Code:

```ruby
seam.devices.simulate.disconnect(device_id: "a60686b8-f401-452d-9f67-53d139cf6160")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates disconnecting a device from Seam.

#### Code:

```php
$seam->devices->simulate->disconnect(
    device_id: "a60686b8-f401-452d-9f67-53d139cf6160",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates disconnecting a device from Seam.

#### Code:

```seam_cli
seam devices simulate disconnect --device_id "a60686b8-f401-452d-9f67-53d139cf6160"
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

ID of the device that you want to simulate disconnecting from Seam.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

