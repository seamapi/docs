# Update a Noise Threshold

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


{% tabs %}
{% tab title="JavaScript" %}

Updates a noise threshold for a noise sensor.

#### Code:

```javascript
await seam.noiseSensors.noiseThresholds.update({
  noise_threshold_id: "2cb09850-4962-4dee-a658-d8a79fcb9aff",
  device_id: "c3885398-6794-44a0-a7a2-1f39ff454dc3",
  name: "My Updated Noise Sensor",
  starts_daily_at: "2025-06-18T15:13:17.000Z",
  ends_daily_at: "2025-06-17T21:33:58.000Z",
  noise_threshold_decibels: 50,
  noise_threshold_nrs: 40,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a noise threshold for a noise sensor.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/noise_sensors/noise_thresholds/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "noise_threshold_id": "2cb09850-4962-4dee-a658-d8a79fcb9aff",
  "device_id": "c3885398-6794-44a0-a7a2-1f39ff454dc3",
  "name": "My Updated Noise Sensor",
  "starts_daily_at": "2025-06-18T15:13:17.000Z",
  "ends_daily_at": "2025-06-17T21:33:58.000Z",
  "noise_threshold_decibels": 50,
  "noise_threshold_nrs": 40
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a noise threshold for a noise sensor.

#### Code:

```python
seam.noise_sensors.noise_thresholds.update(
    noise_threshold_id="2cb09850-4962-4dee-a658-d8a79fcb9aff",
    device_id="c3885398-6794-44a0-a7a2-1f39ff454dc3",
    name="My Updated Noise Sensor",
    starts_daily_at="2025-06-18T15:13:17.000Z",
    ends_daily_at="2025-06-17T21:33:58.000Z",
    noise_threshold_decibels=50,
    noise_threshold_nrs=40,
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a noise threshold for a noise sensor.

#### Code:

```ruby
seam.noise_sensors.noise_thresholds.update(
  noise_threshold_id: "2cb09850-4962-4dee-a658-d8a79fcb9aff",
  device_id: "c3885398-6794-44a0-a7a2-1f39ff454dc3",
  name: "My Updated Noise Sensor",
  starts_daily_at: "2025-06-18T15:13:17.000Z",
  ends_daily_at: "2025-06-17T21:33:58.000Z",
  noise_threshold_decibels: 50,
  noise_threshold_nrs: 40,
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a noise threshold for a noise sensor.

#### Code:

```php
$seam->noise_sensors->noise_thresholds->update(
    noise_threshold_id: "2cb09850-4962-4dee-a658-d8a79fcb9aff",
    device_id: "c3885398-6794-44a0-a7a2-1f39ff454dc3",
    name: "My Updated Noise Sensor",
    starts_daily_at: "2025-06-18T15:13:17.000Z",
    ends_daily_at: "2025-06-17T21:33:58.000Z",
    noise_threshold_decibels: 50,
    noise_threshold_nrs: 40,
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a noise threshold for a noise sensor.

#### Code:

```seam_cli
seam noise-sensors noise-thresholds update --noise_threshold_id "2cb09850-4962-4dee-a658-d8a79fcb9aff" --device_id "c3885398-6794-44a0-a7a2-1f39ff454dc3" --name "My Updated Noise Sensor" --starts_daily_at "2025-06-18T15:13:17.000Z" --ends_daily_at "2025-06-17T21:33:58.000Z" --noise_threshold_decibels 50 --noise_threshold_nrs 40
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

ID of the device that contains the noise threshold that you want to update.

---

**`noise_threshold_id`** *String* (Required)

ID of the noise threshold that you want to update.

---

**`ends_daily_at`** *String*

Time at which the noise threshold should become inactive daily.

---

**`name`** *String*

Name of the noise threshold that you want to update.

---

**`noise_threshold_decibels`** *Number*

Noise level in decibels for the noise threshold.

---

**`noise_threshold_nrs`** *Number*

Noise level in Noiseaware Noise Risk Score (NRS) for the noise threshold. This parameter is only relevant for [Noiseaware sensors](https://docs.seam.co/latest/device-and-system-integration-guides/noiseaware-sensors).

---

**`starts_daily_at`** *String*

Time at which the noise threshold should become active daily.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

