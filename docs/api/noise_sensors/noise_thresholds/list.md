# List Noise Thresholds

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [noise thresholds](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all noise thresholds for a noise sensor.

#### Code:

```javascript
await seam.noiseSensors.noiseThresholds.list({
  device_id: "a60d1a44-5727-4223-8b58-9c2455eb57fc",
});
```

#### Output:

```javascript
[
  {
    "device_id": "a60d1a44-5727-4223-8b58-9c2455eb57fc",
    "ends_daily_at": "2025-06-19T12:38:44.000Z",
    "name": "My Noise Sensor",
    "noise_threshold_decibels": 50,
    "noise_threshold_id": "f8cef69d-625f-464c-aed4-287c06e0d7fe",
    "noise_threshold_nrs": 40,
    "starts_daily_at": "2025-06-20T18:29:57.000Z"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all noise thresholds for a noise sensor.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/noise_sensors/noise_thresholds/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "device_id": "a60d1a44-5727-4223-8b58-9c2455eb57fc"
}
EOF
```

#### Output:

```curl
{
  "noise_thresholds": [
    {
      "device_id": "a60d1a44-5727-4223-8b58-9c2455eb57fc",
      "ends_daily_at": "2025-06-19T12:38:44.000Z",
      "name": "My Noise Sensor",
      "noise_threshold_decibels": 50,
      "noise_threshold_id": "f8cef69d-625f-464c-aed4-287c06e0d7fe",
      "noise_threshold_nrs": 40,
      "starts_daily_at": "2025-06-20T18:29:57.000Z"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all noise thresholds for a noise sensor.

#### Code:

```python
seam.noise_sensors.noise_thresholds.list(device_id="a60d1a44-5727-4223-8b58-9c2455eb57fc")
```

#### Output:

```python
[NoiseThreshold(device_id="a60d1a44-5727-4223-8b58-9c2455eb57fc", ends_daily_at="2025-06-19T12:38:44.000Z", name="My Noise Sensor", noise_threshold_decibels=50, noise_threshold_id="f8cef69d-625f-464c-aed4-287c06e0d7fe", noise_threshold_nrs=40, starts_daily_at="2025-06-20T18:29:57.000Z")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all noise thresholds for a noise sensor.

#### Code:

```ruby
seam.noise_sensors.noise_thresholds.list(device_id: "a60d1a44-5727-4223-8b58-9c2455eb57fc")
```

#### Output:

```ruby
[{"device_id" => "a60d1a44-5727-4223-8b58-9c2455eb57fc","ends_daily_at" => "2025-06-19T12:38:44.000Z","name" => "My Noise Sensor","noise_threshold_decibels" => 50,"noise_threshold_id" => "f8cef69d-625f-464c-aed4-287c06e0d7fe","noise_threshold_nrs" => 40,"starts_daily_at" => "2025-06-20T18:29:57.000Z"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all noise thresholds for a noise sensor.

#### Code:

```php
$seam->noise_sensors->noise_thresholds->list(
    device_id: "a60d1a44-5727-4223-8b58-9c2455eb57fc",
);
```

#### Output:

```php
[
    [
        "device_id" => "a60d1a44-5727-4223-8b58-9c2455eb57fc",
        "ends_daily_at" => "2025-06-19T12:38:44.000Z",
        "name" => "My Noise Sensor",
        "noise_threshold_decibels" => 50,
        "noise_threshold_id" => "f8cef69d-625f-464c-aed4-287c06e0d7fe",
        "noise_threshold_nrs" => 40,
        "starts_daily_at" => "2025-06-20T18:29:57.000Z",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all noise thresholds for a noise sensor.

#### Code:

```seam_cli
seam noise-sensors noise-thresholds list --device_id "a60d1a44-5727-4223-8b58-9c2455eb57fc"
```

#### Output:

```seam_cli
[
  {
    "device_id": "a60d1a44-5727-4223-8b58-9c2455eb57fc",
    "ends_daily_at": "2025-06-19T12:38:44.000Z",
    "name": "My Noise Sensor",
    "noise_threshold_decibels": 50,
    "noise_threshold_id": "f8cef69d-625f-464c-aed4-287c06e0d7fe",
    "noise_threshold_nrs": 40,
    "starts_daily_at": "2025-06-20T18:29:57.000Z"
  }
]
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

ID of the device for which you want to list noise thresholds.

---


## Response

{% hint style="success" %}
Returns:
**Array of [noise\_thresholds](.)

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
