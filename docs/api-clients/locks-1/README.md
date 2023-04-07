---
description: >-
  Noise Thresholds set on noise sensors connected to the Seam platform at which
  noise alerts are sent.
---

# Noise Thresholds

## The Noise Threshold object

| **`noise_threshold_id`**       | uuid                | ID of the Noise Threshold                                                               |
| ------------------------------ | ------------------- | --------------------------------------------------------------------------------------- |
| **`device_id`**                | uuid                | ID of the Device the Noise Threshold is set on                                          |
| **`name`**                     | string              | Name of the Noise Threshold                                                             |
| **`starts_daily_at`**          | datetime (ISO 8601) | Timestamp of when the Noise Threshold becomes active daily                              |
| **`ends_daily_at`**            | datetime (ISO 8601) | Timestamp of when the Noise Threshold becomes inactive daily                            |
| **`noise_threshold_decibels`** | number              | The noise level in decibels                                                             |
| **`noise_threshold_nrs`**      | number, optional    | Noise Level in Noiseaware Noise Risk Score (NRS) (only relevant for Noiseaware sensors) |



### List of Methods

| [List Noise Thresholds](list-locks.md) | List noise thresholds |
| -------------------------------------- | --------------------- |
