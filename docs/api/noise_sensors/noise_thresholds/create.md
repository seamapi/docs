# Create a Noise Threshold

- [Request Parameters](#request-parameters)
- [Response](#response)

Creates a new [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors). Thresholds represent the limits of noise tolerated at a property, which can be customized for each hour of the day. Each device has its own default thresholds, but you can use the Seam API to modify them.


{% tabs %}
{% tab title="JavaScript" %}

Creates a new noise threshold for a noise sensor.

#### Code:

```javascript
await seam.noiseSensors.noiseThresholds.create({
  device_id: "8282891b-c4da-4239-8f01-56089d44b80d",
  name: "My Noise Sensor",
  starts_daily_at: "2025-06-20T18:29:57.000Z",
  ends_daily_at: "2025-06-19T12:38:44.000Z",
  noise_threshold_decibels: 50,
  noise_threshold_nrs: 40,
});
```

#### Output:

```javascript
{
  "device_id": "8282891b-c4da-4239-8f01-56089d44b80d",
  "ends_daily_at": "2025-06-19T12:38:44.000Z",
  "name": "My Noise Sensor",
  "noise_threshold_decibels": 50,
  "noise_threshold_id": "f8cef69d-625f-464c-aed4-287c06e0d7fe",
  "noise_threshold_nrs": 40,
  "starts_daily_at": "2025-06-20T18:29:57.000Z"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new noise threshold for a noise sensor.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/noise_sensors/noise_thresholds/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "8282891b-c4da-4239-8f01-56089d44b80d",
  "name": "My Noise Sensor",
  "starts_daily_at": "2025-06-20T18:29:57.000Z",
  "ends_daily_at": "2025-06-19T12:38:44.000Z",
  "noise_threshold_decibels": 50,
  "noise_threshold_nrs": 40
}
EOF
```

#### Output:

```curl
{
  "noise_threshold": {
    "device_id": "8282891b-c4da-4239-8f01-56089d44b80d",
    "ends_daily_at": "2025-06-19T12:38:44.000Z",
    "name": "My Noise Sensor",
    "noise_threshold_decibels": 50,
    "noise_threshold_id": "f8cef69d-625f-464c-aed4-287c06e0d7fe",
    "noise_threshold_nrs": 40,
    "starts_daily_at": "2025-06-20T18:29:57.000Z"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new noise threshold for a noise sensor.

#### Code:

```python
seam.noise_sensors.noise_thresholds.create(
    device_id="8282891b-c4da-4239-8f01-56089d44b80d",
    name="My Noise Sensor",
    starts_daily_at="2025-06-20T18:29:57.000Z",
    ends_daily_at="2025-06-19T12:38:44.000Z",
    noise_threshold_decibels=50,
    noise_threshold_nrs=40,
)
```

#### Output:

```python
NoiseThreshold(
    device_id="8282891b-c4da-4239-8f01-56089d44b80d",
    ends_daily_at="2025-06-19T12:38:44.000Z",
    name="My Noise Sensor",
    noise_threshold_decibels=50,
    noise_threshold_id="f8cef69d-625f-464c-aed4-287c06e0d7fe",
    noise_threshold_nrs=40,
    starts_daily_at="2025-06-20T18:29:57.000Z",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new noise threshold for a noise sensor.

#### Code:

```ruby
seam.noise_sensors.noise_thresholds.create(
  device_id: "8282891b-c4da-4239-8f01-56089d44b80d",
  name: "My Noise Sensor",
  starts_daily_at: "2025-06-20T18:29:57.000Z",
  ends_daily_at: "2025-06-19T12:38:44.000Z",
  noise_threshold_decibels: 50,
  noise_threshold_nrs: 40,
)
```

#### Output:

```ruby
{
  "device_id" => "8282891b-c4da-4239-8f01-56089d44b80d",
  "ends_daily_at" => "2025-06-19T12:38:44.000Z",
  "name" => "My Noise Sensor",
  "noise_threshold_decibels" => 50,
  "noise_threshold_id" => "f8cef69d-625f-464c-aed4-287c06e0d7fe",
  "noise_threshold_nrs" => 40,
  "starts_daily_at" => "2025-06-20T18:29:57.000Z",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new noise threshold for a noise sensor.

#### Code:

```php
$seam->noise_sensors->noise_thresholds->create(
    device_id: "8282891b-c4da-4239-8f01-56089d44b80d",
    name: "My Noise Sensor",
    starts_daily_at: "2025-06-20T18:29:57.000Z",
    ends_daily_at: "2025-06-19T12:38:44.000Z",
    noise_threshold_decibels: 50,
    noise_threshold_nrs: 40
);
```

#### Output:

```php
[
    "device_id" => "8282891b-c4da-4239-8f01-56089d44b80d",
    "ends_daily_at" => "2025-06-19T12:38:44.000Z",
    "name" => "My Noise Sensor",
    "noise_threshold_decibels" => 50,
    "noise_threshold_id" => "f8cef69d-625f-464c-aed4-287c06e0d7fe",
    "noise_threshold_nrs" => 40,
    "starts_daily_at" => "2025-06-20T18:29:57.000Z",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new noise threshold for a noise sensor.

#### Code:

```seam_cli
seam noise-sensors noise-thresholds create --device_id "8282891b-c4da-4239-8f01-56089d44b80d" --name "My Noise Sensor" --starts_daily_at "2025-06-20T18:29:57.000Z" --ends_daily_at "2025-06-19T12:38:44.000Z" --noise_threshold_decibels 50 --noise_threshold_nrs 40
```

#### Output:

```seam_cli
{
  "device_id": "8282891b-c4da-4239-8f01-56089d44b80d",
  "ends_daily_at": "2025-06-19T12:38:44.000Z",
  "name": "My Noise Sensor",
  "noise_threshold_decibels": 50,
  "noise_threshold_id": "f8cef69d-625f-464c-aed4-287c06e0d7fe",
  "noise_threshold_nrs": 40,
  "starts_daily_at": "2025-06-20T18:29:57.000Z"
}
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

ID of the device for which you want to create a noise threshold.

---

**`ends_daily_at`** *String* (Required)

Time at which the new noise threshold should become inactive daily.

---

**`starts_daily_at`** *String* (Required)

Time at which the new noise threshold should become active daily.

---

**`name`** *String*

Name of the new noise threshold.

---

**`noise_threshold_decibels`** *Number*

Noise level in decibels for the new noise threshold.

---

**`noise_threshold_nrs`** *Number*

Noise level in Noiseaware Noise Risk Score (NRS) for the new noise threshold. This parameter is only relevant for [Noiseaware sensors](https://docs.seam.co/latest/device-and-system-integration-guides/noiseaware-sensors).

---


## Response

{% hint style="success" %}
**Returns:**
[noise\_threshold](.)

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "device_id": "69b9e908-039b-413a-904e-5edee653ca27",
  "ends_daily_at": "09:00:00[America/Los_Angeles]",
  "name": "My Noise Threshold",
  "noise_threshold_decibels": 21,
  "noise_threshold_id": "f8cef69d-625f-464c-aed4-287c06e0d7fe",
  "noise_threshold_nrs": 5,
  "starts_daily_at": "07:00:00[America/Los_Angeles]"
}
```
{% endtab %}
{% endtabs %}
