# Simulate Hub Connection

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates bringing the Wi‑Fi hub (bridge) back online for a device.
Only applicable for sandbox workspaces and currently
implemented for August and TTLock locks.
This will clear the corresponding `hub_disconnected` or
`ttlock_lock_not_paired_to_gateway` error on the device.


{% tabs %}
{% tab title="JavaScript" %}

Simulates bringing the Wi-Fi hub (bridge) back online for a device.

#### Code:

```javascript
await seam.devices.simulate.connectToHub({
  device_id: "5d703d4f-523f-42af-9439-618415ca651f",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates bringing the Wi-Fi hub (bridge) back online for a device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/simulate/connect_to_hub" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "5d703d4f-523f-42af-9439-618415ca651f"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates bringing the Wi-Fi hub (bridge) back online for a device.

#### Code:

```python
seam.devices.simulate.connect_to_hub(device_id="5d703d4f-523f-42af-9439-618415ca651f")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates bringing the Wi-Fi hub (bridge) back online for a device.

#### Code:

```ruby
seam.devices.simulate.connect_to_hub(device_id: "5d703d4f-523f-42af-9439-618415ca651f")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates bringing the Wi-Fi hub (bridge) back online for a device.

#### Code:

```php
$seam->devices->simulate->connect_to_hub(
    device_id: "5d703d4f-523f-42af-9439-618415ca651f",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates bringing the Wi-Fi hub (bridge) back online for a device.

#### Code:

```seam_cli
seam devices simulate connect-to-hub --device_id "5d703d4f-523f-42af-9439-618415ca651f"
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

ID of the device whose hub you want to reconnect.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

