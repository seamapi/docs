# 👂 Noise Sensors

## What is a Noise Sensor?

Noise sensors are devices that measure that sound level in a given area. You can use noise sensors to monitor noise levels remotely and receive notifications when the noise volume is too loud. Seam’s API allows you to configure the noise thresholds of a noise sensor and receive events when a disturbance is detected.

## What Is a Threshold?

Thresholds represent the limit of noise tolerated at a property, which can be customized for each hour of the day. Each device has its own default thresholds, but you can use the API to modify them.

## Use Cases

* You can configure noise threshold default settings for a customer's portfolio or on a property-by-property basis, and when a new noise sensor is added, you can use Seam's API to automatically configure its noise thresholds according to these defaults.
* You can react to noise disturbances by sending notifications to your users when a `noise_sensor.disturbance_detected` event gets fired. Seam will also notify you when the noise event has been resolved.
* Additionally, Seam provides prebuilt UI components for displaying a noise sensor's information. You can show the noise level, ways to configure noise thresholds, and the activity log of any noise events.

## **Best Practices**

While you can theoretically set noise thresholds to any decibel value, we have found that setting them within a specific range leads to fewer false positives:

| Property Type | Decibels |
| ------------- | -------- |
| Apartment     | 50-70    |
| House         | 70-90    |
| Estate        | 80-100   |

## **Next Steps**

For more information on setting up Noise Thresholds for your device, check out our guide [here](configure-noise-threshold-settings.md). Or, you can check out our API Reference Guide [here](../../api-clients/noise-sensors/).
