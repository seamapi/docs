---
description: Devices that send alerts when noise levels exceed a threshold.
---

# Noise Sensors

## Manage Noise Thresholds

### List Noise Thresholds

This endpoint enables you to generate a list of currently available noise thresholds for a specific device. For example, to generate the list of thresholds for a device with the id, `123e4567-e89b-12d3-a456-426614174000`, you would make the following call:

```python
seam.noise_sensors.noise_thresholds.list("123e4567-e89b-12d3-a456-426614174000")
```

Then, you would receive a response like this:

```json
{
  "noise_thresholds": [
    {
      "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
      "device_id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "builtin_quiet_hours",
      "noise_threshold_decibels": 70,
      "starts_daily_at": "22:00:00[America/Los_Angeles]",
      "ends_daily_at": "06:00:00[America/Los_Angeles]"
    },
    {
      "noise_threshold_id": "678ccd98-7036-402f-a42c-e66f55575566",
      "device_id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "builtin_normal_hours",
      "noise_threshold_decibels": 75,
      "starts_daily_at": "06:00:00[America/Los_Angeles]",
      "ends_daily_at": "22:00:00[America/Los_Angeles]"
    }
  ]
}
```

Here, we can see the device has two thresholds- one during the night and one during the day.

### Create Noise Thresholds

{% hint style="info" %}
For a more in-depth guide to threshold creation, check out our guide [here](../../products/noise-sensors/configure-noise-threshold-settings.md).
{% endhint %}

If your device has no default thresholds, or you wish to create custom ones, you can create a noise threshold with the `Create Noise Threshold` endpoint. For example, you can create an endpoint like this:

```python
seam.noise_sensors.noise_thresholds.create(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    starts_daily_at="20:00:00[America/Los_Angeles]",
    ends_daily_at="06:00:00[America/Los_Angeles]",
    noise_threshold_decibels=70,
)
```

This creates a threshold creates a noise threshold of 70 decibels from 20:00-06:00 PST called `builtin_quiet_hours`, and will return this JSON response:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CREATE_NOISE_THRESHOLD",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "ok": true
}
```

### Update Noise Thresholds

You can change the thresholds you’ve already created. For example, if we wanted to change the `builtin_quiet_hours` threshold we saw above, we can do something like this:

```python
seam.noise_sensors.noise_thresholds.update(
  noise_threshold_id="792263f8-1660-4cf9-a6c6-054d23b78d86",
  device_id="123e4567-e89b-12d3-a456-426614174000",
  noise_threshold_decibels=75
)
```

This increases the noise threshold from 70 to 75 decibels. The above returns the edited threshold:

```json
{
   "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
   "device_id": "123e4567-e89b-12d3-a456-426614174000",
   "name": "builtin_quiet_hours",
   "noise_threshold_decibels": 75,
   "starts_daily_at": "22:00:00[America/Los_Angeles]",
   "ends_daily_at": "06:00:00[America/Los_Angeles]",
 }
```

### Delete Noise Thresholds

Finally, you can delete a threshold. You’ll need to know the device and threshold id to delete the threshold. For example:

```python
seam.noise_sensors.noise_thresholds.delete(
  noise_threshold_id="123e4567-e89b-12d3-a456-426614174000",
  device_id="123e4567-e89b-12d3-a456-426614174001"
)
```

This permanently deletes the `built_in_normal` threshold from the device. You’ll see something like this as a return:

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_NOISE_THRESHOLD",
    "action_attempt_id": "c10e3db5-a5a2-47f2-a76f-48379ed9cd22",
    "result": null,
    "error": null
  },
  "ok": true
}
```

### Events

#### `noise_sensor.noise_threshold_triggered`

The noise detected from a noise sensor exceeded a predefined threshold or duration.

<details>

<summary><code>noise_threshold_id</code> <code>string</code></summary>

ID (`uuid`) of the [noise threshold](../../products/noise-sensors/#what-is-a-threshold) that was triggered.

</details>

<details>

<summary><code>noise_threshold_name</code> <code>string</code></summary>

Name of the [noise threshold](../../products/noise-sensors/#what-is-a-threshold) that was triggered, for example, `builtin_first_disturbance`.

</details>

## Next Steps

For more details on each endpoint, see our API references:

| [List Noise Thresholds](noise_thresholds/list.md)    |
| ---------------------------------------------------- |
| [Create Noise Threshold](noise_thresholds/create.md) |
| [Update Noise Threshold](noise_thresholds/update.md) |
| [Delete Noise Threshold](noise_thresholds/delete.md) |
