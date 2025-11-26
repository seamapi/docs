# Simulate Hub Disconnection

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates taking the Wi‑Fi hub (bridge) offline for a device.
Only applicable for sandbox workspaces and currently
implemented for August, TTLock, and IglooHome devices.
This will set the corresponding `hub_disconnected` or
`ttlock_lock_not_paired_to_gateway` error on the device, or mark the
IglooHome bridge offline in sandbox.


{% tabs %}
{% tab title="JavaScript" %}

Simulates taking the Wi-Fi hub (bridge) offline for a device.

#### Code:

```javascript
await seam.devices.simulate.disconnectFromHub({
  device_id: "a60686b8-f401-452d-9f67-53d139cf6160",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates taking the Wi-Fi hub (bridge) offline for a device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/simulate/disconnect_from_hub" \
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

Simulates taking the Wi-Fi hub (bridge) offline for a device.

#### Code:

```python
seam.devices.simulate.disconnect_from_hub(
    device_id="a60686b8-f401-452d-9f67-53d139cf6160"
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates taking the Wi-Fi hub (bridge) offline for a device.

#### Code:

```ruby
seam.devices.simulate.disconnect_from_hub(device_id: "a60686b8-f401-452d-9f67-53d139cf6160")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates taking the Wi-Fi hub (bridge) offline for a device.

#### Code:

```php
$seam->devices->simulate->disconnect_from_hub(
    device_id: "a60686b8-f401-452d-9f67-53d139cf6160",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates taking the Wi-Fi hub (bridge) offline for a device.

#### Code:

```seam_cli
seam devices simulate disconnect-from-hub --device_id "a60686b8-f401-452d-9f67-53d139cf6160"
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

ID of the device whose hub you want to disconnect.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

