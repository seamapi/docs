# Simulate Triggering a Noise Threshold

- [Request Parameters](#request-parameters)
- [Response](#response)

Simulates the triggering of a [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors) in a [sandbox workspace](../../../core-concepts/workspaces/README.md#sandbox-workspaces).


{% tabs %}
{% tab title="JavaScript" %}

Simulates the triggering of a noise threshold for a noise sensor in a sandbox workspace.

#### Code:

```javascript
await seam.noiseSensors.simulate.triggerNoiseThreshold({
  device_id: "c0384c1c-9038-427c-9a72-314d2b168d43",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Simulates the triggering of a noise threshold for a noise sensor in a sandbox workspace.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/noise_sensors/simulate/trigger_noise_threshold" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "c0384c1c-9038-427c-9a72-314d2b168d43"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Simulates the triggering of a noise threshold for a noise sensor in a sandbox workspace.

#### Code:

```python
seam.noise_sensors.simulate.trigger_noise_threshold(
    device_id="c0384c1c-9038-427c-9a72-314d2b168d43"
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Simulates the triggering of a noise threshold for a noise sensor in a sandbox workspace.

#### Code:

```ruby
seam.noise_sensors.simulate.trigger_noise_threshold(
  device_id: "c0384c1c-9038-427c-9a72-314d2b168d43",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Simulates the triggering of a noise threshold for a noise sensor in a sandbox workspace.

#### Code:

```php
$seam->noise_sensors->simulate->trigger_noise_threshold(
    device_id: "c0384c1c-9038-427c-9a72-314d2b168d43",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Simulates the triggering of a noise threshold for a noise sensor in a sandbox workspace.

#### Code:

```seam_cli
seam noise-sensors simulate trigger-noise-threshold --device_id "c0384c1c-9038-427c-9a72-314d2b168d43"
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

ID of the device for which you want to simulate the triggering of a noise threshold.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

