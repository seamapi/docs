---
description: Guide for using SmartThings hubs + smart locks with Seam
---

# SmartThings Hubs + Smart Locks

## Overview

[SmartThings Hubs](https://www.samsung.com/fr/smartthings/) are connected to your local network using either Wi-Fi or Ethernet. You pair smart locks to SmartThings hubs using Zigbee or Z-Wave. Them, you can unlock and lock these smart locks remotely, and you can program access codes on them for keyless entry.

***

## Supported Devices

This integration supports the SmartThings hub and door locks paired with it.

For detailed information about the SmartThings hubs that Seam supports, see our [SmartThings Supported Devices page](https://www.seam.co/manufacturers/smartthings).

***

## Supported Features

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md) on paired smart locks that support this feature
* [Programming access codes](../products/smart-locks/access-codes/) on paired smart locks that support this feature

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their August devices to Seam, include the `smartthings` [device provider key](../api-clients/connect_webviews/#device-provider-keys) in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control SmartThings-connected devices using Seam, you must prompt owners of these devices to perform the following steps:

1. Create an account in the [SmartThings app](https://www.samsung.com/us/support/owners/app/smartthings) if you have not done so already.
2. Follow [these instructions](https://www.samsung.com/ca/support/mobile-devices/smartthings-how-to-set-up-your-hub/) to pair your devices to the SmartThings hub.
3. Note your login credentials for the SmartThings app, and use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your devices to Seam.

***

## Brand-Specific Features

Note the following SmartThings-specific features:

### Reporting Access Code Length Constraints

For SmartThings-connected devices, you can report the set of supported access code lengths or the minimum and maximum supported code lengths. For details, see [Report Device Access Code Constraints](../api/access_codes/report-device-access-code-constraints.md).

***

## Where to Order

To order SmartThings hubs, see the Aeotec **Where to buy** page.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Aeotec Where to buy page</strong> </td><td></td><td><a href="https://aeotec.com/where-to-buy/">https://aeotec.com/where-to-buy/</a></td><td><a href="../.gitbook/assets/smartthings-logo.png">smartthings-logo.png</a></td></tr></tbody></table>

***
