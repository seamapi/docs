# Get a Noise Threshold

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified noise threshold for a noise sensor.

#### Code:

```javascript
await seam.noiseSensors.noiseThresholds.get({
  noise_threshold_id: "8282891b-c4da-4239-8f01-56089d44b80d",
});
```

#### Output:

```javascript
{
  "device_id": "736fc5bf-192d-4416-b879-66ff0195f2f7",
  "ends_daily_at": "2025-06-19T12:38:44.000Z",
  "name": "My Noise Sensor",
  "noise_threshold_decibels": 50,
  "noise_threshold_id": "8282891b-c4da-4239-8f01-56089d44b80d",
  "noise_threshold_nrs": 40,
  "starts_daily_at": "2025-06-20T18:29:57.000Z"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified noise threshold for a noise sensor.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/noise_sensors/noise_thresholds/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "noise_threshold_id": "8282891b-c4da-4239-8f01-56089d44b80d"
}
EOF
```

#### Output:

```curl
{
  "noise_threshold": {
    "device_id": "736fc5bf-192d-4416-b879-66ff0195f2f7",
    "ends_daily_at": "2025-06-19T12:38:44.000Z",
    "name": "My Noise Sensor",
    "noise_threshold_decibels": 50,
    "noise_threshold_id": "8282891b-c4da-4239-8f01-56089d44b80d",
    "noise_threshold_nrs": 40,
    "starts_daily_at": "2025-06-20T18:29:57.000Z"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified noise threshold for a noise sensor.

#### Code:

```python
seam.noise_sensors.noise_thresholds.get(
    noise_threshold_id="8282891b-c4da-4239-8f01-56089d44b80d"
)
```

#### Output:

```python
NoiseThreshold(
    device_id="736fc5bf-192d-4416-b879-66ff0195f2f7",
    ends_daily_at="2025-06-19T12:38:44.000Z",
    name="My Noise Sensor",
    noise_threshold_decibels=50,
    noise_threshold_id="8282891b-c4da-4239-8f01-56089d44b80d",
    noise_threshold_nrs=40,
    starts_daily_at="2025-06-20T18:29:57.000Z",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified noise threshold for a noise sensor.

#### Code:

```ruby
seam.noise_sensors.noise_thresholds.get(noise_threshold_id: "8282891b-c4da-4239-8f01-56089d44b80d")
```

#### Output:

```ruby
{
  "device_id" => "736fc5bf-192d-4416-b879-66ff0195f2f7",
  "ends_daily_at" => "2025-06-19T12:38:44.000Z",
  "name" => "My Noise Sensor",
  "noise_threshold_decibels" => 50,
  "noise_threshold_id" => "8282891b-c4da-4239-8f01-56089d44b80d",
  "noise_threshold_nrs" => 40,
  "starts_daily_at" => "2025-06-20T18:29:57.000Z",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified noise threshold for a noise sensor.

#### Code:

```php
$seam->noise_sensors->noise_thresholds->get(
    noise_threshold_id: "8282891b-c4da-4239-8f01-56089d44b80d",
);
```

#### Output:

```php
[
    "device_id" => "736fc5bf-192d-4416-b879-66ff0195f2f7",
    "ends_daily_at" => "2025-06-19T12:38:44.000Z",
    "name" => "My Noise Sensor",
    "noise_threshold_decibels" => 50,
    "noise_threshold_id" => "8282891b-c4da-4239-8f01-56089d44b80d",
    "noise_threshold_nrs" => 40,
    "starts_daily_at" => "2025-06-20T18:29:57.000Z",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified noise threshold for a noise sensor.

#### Code:

```seam_cli
seam noise-sensors noise-thresholds get --noise_threshold_id "8282891b-c4da-4239-8f01-56089d44b80d"
```

#### Output:

```seam_cli
{
  "device_id": "736fc5bf-192d-4416-b879-66ff0195f2f7",
  "ends_daily_at": "2025-06-19T12:38:44.000Z",
  "name": "My Noise Sensor",
  "noise_threshold_decibels": 50,
  "noise_threshold_id": "8282891b-c4da-4239-8f01-56089d44b80d",
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

**`noise_threshold_id`** *String* (Required)

ID of the noise threshold that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[noise\_threshold](.)**

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
