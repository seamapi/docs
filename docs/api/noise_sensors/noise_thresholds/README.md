# Noise Thresholds

## The noise_threshold Object

- [Properties](./#properties)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors). Thresholds represent the limits of noise tolerated at a property, which can be customized for each hour of the day. Each device has its own default thresholds, but you can use the Seam API to modify them.

{% tabs %}
{% tab title="Noise Threshold" %}

A noise threshold resource.

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

---
## Properties

**`device_id`** *UUID*

Unique identifier for the device that contains the noise threshold.




---

**`ends_daily_at`** *String*

Time at which the noise threshold should become inactive daily.




---

**`name`** *String*

Name of the noise threshold.




---

**`noise_threshold_decibels`** *Number*

Noise level in decibels for the noise threshold.




---

**`noise_threshold_id`** *UUID*

Unique identifier for the noise threshold.




---

**`noise_threshold_nrs`** *Number*

Noise level in Noiseaware Noise Risk Score (NRS) for the noise threshold. This parameter is only relevant for [Noiseaware sensors](https://docs.seam.co/latest/device-and-system-integration-guides/noiseaware-sensors).




---

**`starts_daily_at`** *String*

Time at which the noise threshold should become active daily.




---


## Events

**`noise_sensor.noise_threshold_triggered`**

Extended periods of noise or noise exceeding a [threshold](https://docs.seam.co/latest/capability-guides/noise-sensors#what-is-a-threshold) were detected.

<details>

<summary>Properties</summary>

<strong><code>connected_account_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the connected account, present when connected_account_id is provided.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the event.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_custom_metadata</code></strong> <i>Record</i>

  Custom metadata of the device, present when device_id is provided.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the affected device.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `noise_sensor.noise_threshold_triggered`

<strong><code>minut_metadata</code></strong> <i>Record</i>

  Metadata from Minut.

<strong><code>noise_level_decibels</code></strong> <i>Number</i>

  Detected noise level in decibels.

<strong><code>noise_level_nrs</code></strong> <i>Number</i>

  Detected noise level in Noiseaware Noise Risk Score (NRS).

<strong><code>noise_threshold_id</code></strong> <i>UUID</i>

  ID of the noise threshold that was triggered.

<strong><code>noise_threshold_name</code></strong> <i>String</i>

  Name of the noise threshold that was triggered.

<strong><code>noiseaware_metadata</code></strong> <i>Record</i>

  Metadata from Noiseaware.

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/noise_sensors/noise_thresholds/create`**](./create.md)

Creates a new [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors). Thresholds represent the limits of noise tolerated at a property, which can be customized for each hour of the day. Each device has its own default thresholds, but you can use the Seam API to modify them.


[**`/noise_sensors/noise_thresholds/delete`**](./delete.md)

Deletes a [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) from a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


[**`/noise_sensors/noise_thresholds/get`**](./get.md)

Returns a specified [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


[**`/noise_sensors/noise_thresholds/list`**](./list.md)

Returns a list of all [noise thresholds](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


[**`/noise_sensors/noise_thresholds/update`**](./update.md)

Updates a [noise threshold](https://docs.seam.co/latest/capability-guides/noise-sensors/configure-noise-threshold-settings) for a [noise sensor](https://docs.seam.co/latest/capability-guides/noise-sensors).


