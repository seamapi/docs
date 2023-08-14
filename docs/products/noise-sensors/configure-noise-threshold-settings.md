# Configure Noise Threshold Settings

Seam allows you to configure the [noise thresholds](./#what-is-a-threshold) of your noise sensor, and receive events when a disturbance is detected. This guide will walk you through how to configure noise thresholds with the API.

### Set Up Noise Thresholds

First, you’ll need to create a threshold using the [Create Noise Thresholds](../../api-clients/noise-sensors/create-noise-threshold.md) endpoint. For example:

```python
seam.noise_sensors.noise_thresholds.create(
    device_id="123e4567-e89b-12d3-a456-426614174000",
    starts_daily_at="20:00:00[America/Los_Angeles]",
    ends_daily_at="06:00:00[America/Los_Angeles]",
    noise_threshold_decibels=70,
)

 {
   "noise_threshold_id": "792263f8-1660-4cf9-a6c6-054d23b78d86",
   "device_id": "123e4567-e89b-12d3-a456-426614174000",
   "name": "builtin_quiet_hours",
   "noise_threshold_decibels": 70,
   "starts_daily_at": "20:00:00[America/Los_Angeles]",
   "ends_daily_at": "06:00:00[America/Los_Angeles]",
 }
```

This threshold creates a noise threshold of 70 decibels from 20:00-06:00 PST called `builtin_quiet_hours`.

That call will return this JSON response:

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

Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

Once you’ve created a threshold, you’ll need to connect it to a webhook to log events.

#### Best Practices

* For Minut devices, you can configure two thresholds- one for quiet hours and one for the rest of the day.
* For NoiseAware devices, you can configure as many thresholds as you want, provided they don't overlap during daytime hours.

### Set Up Webhooks

You can set up webhooks in the [Seam Console](https://console.seam.co) with the **"+ Add Webhook"** button. All you need to do is fill in your URL, then select the event types you want to receive events for, then click **"Create"**.

<figure><img src="../../.gitbook/assets/Screen Shot 2023-08-13 at 4.39.14 PM (1).png" alt=""><figcaption></figcaption></figure>

### Monitor Events

Once your thresholds and webhooks are configured, you’ll be able to monitor events with the API. An event will look something like the code snippet below:

```json
{
  "created_at": "2023-01-09T18:54:32.737Z",
  "device_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "event_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "event_type": "noise_sensors.noise_threshold_triggered",
  "minut_metadata": {},
  "noise_level_decibels": 50,
  "noise_level_nrs": 40,
  "noise_threshold_id": "c1296d07-3e96-4ee9-8219-3cd33a09aa37",
  "noise_threshold_name": "builtin_first_disturbance",
  "noiseaware_metadata": {}
}

```

You can see more parameters for events [here](../../api-clients/events/).
