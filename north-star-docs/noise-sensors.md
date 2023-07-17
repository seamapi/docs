# Noise Sensors

## Overview

Noise sensors are devices that measure that sound level in a given area. Property managers may want to use noise sensors to monitor noise levels remotely, or automate visitor notifications when a visitor is being too loud. Seam allows you to configure the noise thresholds of the noise sensor, and receive events when a disturbance is detected.

## Basic Implementation

1. Configure noise threshold settings for a sensor
  - The endpoints for configuring noise thresholds are here: https://docs.seam.co/latest/api-clients/noise-sensors
  - For Minut, you can configure two thresholds, one for quiet hours, and one for the rest of the day. The Quiet hours threshold is active during certain hours of the day, and the other schedule will be active for the rest of the time.
  - For Noiseaware, you can configure many thresholds, as long as they don't overlap during the day.


2. Set up a Webhook URL from the Console
  - You can set up Webhooks on this page:
    https://console.seam.co/workspaces/[:workspace_id]/webhooks
  - Click the "Add Webhook" button
  - Fill in your URL, and select the event types you want to receive events for
  - Click "Create"

3. Receive events on that webhook
  - `noise_sensors.noise_threshold_triggered`, with the params:
    ```
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
    [Link to event payload docs](https://app.svix.com/app_2SgEVhawEYS5d8F6Gn8s5nWbyzR/event-types)

## Advanced Implementation(s)
N/A

## Troubleshooting Steps
N/A

## Configuring features via the Console
1. Set up Noise Thresholds from the Console
  - You can set up Webhooks on this page:
    https://console.seam.co/workspaces/[:workspace_id]/webhooks
  - Click the "Add Webhook" button
  - Fill in your URL, and select the event types you want to receive events for.
  - Click "Create"
2. See what noise level a sensor is measuring at the time.
  - Navigate to the device's page on the Console:
    https://console.seam.co/workspaces/[:workspace_id]/devices/[:device_id]
  - In the "Properties" section, look for the "Noise Level" property.

## How would a user incorporate this feature into their Dashboard?

A PMS might expose a way to configure noise threshold default settings for a customer's portfolio, or on a property-by-property basis.

When a new noise sensor is added, the PMS will automatically configure the noise thresholds according to these defaults.

A PMS might allow their customer to customize the notification messaging for a listing. When a `noise_sensor.disturbance_detected` event gets fired. If we detect that there is an active stay at the listing, the PMS can automate contacting the guest to ask them to quiet down.

Seam provides prebuilt UI components for displaying a noise sensor's details.
It'll show the noise level, a way to configure noise thresholds, and see the activity log of any noise events.

## Suggested Improvements

- [ ] Add support for logging noise sensor data, so that we can show a graph of the noise data over time.