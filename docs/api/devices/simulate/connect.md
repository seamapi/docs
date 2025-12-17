# Simulate Device Connection

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates connecting a device to Seam. Only applicable for [sandbox devices](../../../core-concepts/workspaces/README.md#sandbox-workspaces). See also [Testing Your App Against Device Disconnection and Removal](../../../core-concepts/devices/testing-your-app-against-device-disconnection-and-removal.md).


{% tabs %}
{% tab title="JavaScript" %}

Simulates connecting a device to Seam.

#### Code:

```javascript
await seam.devices.simulate.connect({
  device_id: "5d703d4f-523f-42af-9439-618415ca651f",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates connecting a device to Seam.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/devices/simulate/connect" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
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

Simulates connecting a device to Seam.

#### Code:

```python
seam.devices.simulate.connect(device_id="5d703d4f-523f-42af-9439-618415ca651f")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates connecting a device to Seam.

#### Code:

```ruby
seam.devices.simulate.connect(device_id: "5d703d4f-523f-42af-9439-618415ca651f")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates connecting a device to Seam.

#### Code:

```php
$seam->devices->simulate->connect(
    device_id: "5d703d4f-523f-42af-9439-618415ca651f",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates connecting a device to Seam.

#### Code:

```seam_cli
seam devices simulate connect --device_id "5d703d4f-523f-42af-9439-618415ca651f"
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

ID of the device that you want to simulate connecting to Seam.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

