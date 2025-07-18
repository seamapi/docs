---
description: Guide for using Minut sensors with Seam
---

# Minut Sensors

## Overview

Seam integrates with the Minut sensor to provide [noise monitoring](https://support.minut.com/en/articles/5291774-settings-and-thresholds#h_f83ac7d6c8) functions for the rental property and vacation rental industries. This camera-free, privacy-safe sensor notifies owners when guest noise levels exceed configured thresholds. In addition, the Minut sensor is weatherproof and, consequently, suitable for both outdoor and indoor use. For each Minut sensor, you can configure a regular noise threshold and an optional quiet hours threshold.

***

## Supported Devices

This integration supports the [Minut sensor](https://www.minut.com/product/features).

For detailed information about the Minut devices that Seam supports, see our [Minut Supported Devices page](https://www.seam.co/manufacturers/minut).

***

## Supported Features

We support the following features:

* [Configuring noise threshold settings](../products/noise-sensors/configure-noise-threshold-settings.md)\
  You can configure a maximum of two noise thresholds per Minut sensor. The first threshold is required and represents the regular threshold for the whole day. The second threshold is optional and represents the threshold for the quiet hours timeframe.
* [Receiving noise sensor events when noise events occur](../api/events/)\
  For more information, see the [`noise_sensor.noise_threshold_triggered` event](../api/events/).

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their Minut devices to Seam, include the `minut` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control Minut devices using Seam, you must prompt owners of these devices to perform the following steps:

1. Create an account in the [Minut app](https://www.minut.com/setup) if you have not done so already.
2. In the Minut app, add your Minut sensors.
3. Note your login credentials for the Minut app, and use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your devices to Seam.

***

## Where to Order

To purchase Minut sensors, visit the Minut online store.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Minut Online Store</strong></td><td></td><td><a href="https://store.minut.com/">https://store.minut.com/</a></td><td><a href="../.gitbook/assets/minut-logo.png">minut-logo.png</a></td></tr></tbody></table>

***
