# Delete a Noise Threshold

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) from a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


{% tabs %}
{% tab title="JavaScript" %}

Deletes a noise threshold from a noise sensor.

#### Code:

```javascript
await seam.noiseSensors.noiseThresholds.delete({
  noise_threshold_id: "00fbac13-6602-4079-b4ae-c89d5dcbed35",
  device_id: "736fc5bf-192d-4416-b879-66ff0195f2f7",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a noise threshold from a noise sensor.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/noise_sensors/noise_thresholds/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "noise_threshold_id": "00fbac13-6602-4079-b4ae-c89d5dcbed35",
  "device_id": "736fc5bf-192d-4416-b879-66ff0195f2f7"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a noise threshold from a noise sensor.

#### Code:

```python
seam.noise_sensors.noise_thresholds.delete(
    noise_threshold_id="00fbac13-6602-4079-b4ae-c89d5dcbed35",
    device_id="736fc5bf-192d-4416-b879-66ff0195f2f7",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a noise threshold from a noise sensor.

#### Code:

```ruby
seam.noise_sensors.noise_thresholds.delete(
  noise_threshold_id: "00fbac13-6602-4079-b4ae-c89d5dcbed35",
  device_id: "736fc5bf-192d-4416-b879-66ff0195f2f7",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a noise threshold from a noise sensor.

#### Code:

```php
$seam->noise_sensors->noise_thresholds->delete(
    noise_threshold_id: "00fbac13-6602-4079-b4ae-c89d5dcbed35",
    device_id: "736fc5bf-192d-4416-b879-66ff0195f2f7"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a noise threshold from a noise sensor.

#### Code:

```seam_cli
seam noise-sensors noise-thresholds delete --noise_threshold_id "00fbac13-6602-4079-b4ae-c89d5dcbed35" --device_id "736fc5bf-192d-4416-b879-66ff0195f2f7"
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

ID of the device that contains the noise threshold that you want to delete.

---

**`noise_threshold_id`** *String* (Required)

ID of the noise threshold that you want to delete.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

