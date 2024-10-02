---
description: >-
  Learn about managing noise sensors that detect noise levels that exceed
  configured thresholds in specific areas.
---

# 👂 Noise Sensors

## What Is a Noise Sensor?

Noise sensors are devices that measure that sound level in a given area. You can use noise sensors to monitor noise levels remotely and receive notifications when the noise volume is too loud. The Seam API enables you to configure the noise thresholds of a noise sensor and receive events when a disturbance is detected.

## What Is a Threshold?

Thresholds represent the limits of noise tolerated at a property, which can be customized for each hour of the day. Each device has its own default thresholds, but you can use the API to modify them.

## Use Cases

* You can configure noise threshold default settings for a customer's portfolio or on a property-by-property basis. When a new noise sensor is added, you can use the Seam API to configure its noise thresholds automatically according to these defaults.
* You can react to noise disturbances by sending notifications to your users when a `noise_sensor.disturbance_detected` event occurs. Seam notifies you when the noise event has been resolved.
* Seam provides prebuilt UI components for displaying information for a noise sensor. You can show the noise level, ways to configure noise thresholds, and the activity log of any noise events.

## **Best Practices**

While you can theoretically set noise thresholds to any decibel value, we have found that setting them within the following specific ranges lead to fewer false positives:

| Property Type | Decibels |
| ------------- | -------- |
| Apartment     | 50-70    |
| House         | 70-90    |
| Estate        | 80-100   |

## **Next Steps**

To learn how to set up noise thresholds for your devices, see the following guide:

* [Configuring Noise Threshold Settings](configure-noise-threshold-settings.md)

For the corresponding Seam API reference, see [Noise Sensors](../../api-clients/noise_sensors/).
