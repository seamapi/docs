---
description: Guide for using dormakaba Oracode locks with Seam
---

# dormakaba Oracode Locks

## Overview

Seam integrates with the dormakaba [Oracode Live](https://www.dormakaba.com/us-en/offering/products/vacation-short-term-rental-solutions/access-control-management/oracode-live--ka\_128503) access control management platform. Intended for the vacation and short-term rental industries, the Oracode Live platform supports a "no keys, no cards" concept for efficient and secure access. Further, with the Oracode Live platform, codes expire automatically at the end of the authorized period.

You can use a variety of dormakaba Oracode smart locks with the Oracode Live platform. These strong and durable locks have commercial-grade finishes to withstand a wide range of climates.&#x20;

***

## Supported Devices

This integration supports all locks connected using the [Oracode Live](https://www.dormakaba.com/us-en/offering/products/vacation-short-term-rental-solutions/access-control-management/oracode-live--ka\_128503) platform.

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  brands='["dormakaba_oracode"]'
/>" %}

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../products/smart-locks/access-codes/)

{% hint style="info" %}
When programming permanent codes on Oracode locks, these PIN codes are rotated every 30 days. When the code changes, Seam issues an `access_code.changed` event with the new PIN code. For details about this event, see [Event Types](../api-clients/events/#event-types).
{% endhint %}

***

## Setup Instructions

1. Obtain the credentials that you use to log in to your [Oracode Live account](https://www.kabaecodewireless.com).
2. Use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews.md) to add your dormakaba Oracode devices to Seam.

***

## Where to Order

To purchase dormakaba Oracode devices, contact the dormakaba Sales team using the dormakaba **Contact** page or order Oracode Live locks from GoKeyless.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>dormakaba Contact Page</strong></td><td></td><td><a href="https://www.dormakaba.com/us-en/contact">https://www.dormakaba.com/us-en/contact</a></td><td><a href="../.gitbook/assets/dormakaba-logo.png">dormakaba-logo.png</a></td></tr><tr><td></td><td><strong>GoKeyless</strong></td><td></td><td><a href="https://www.gokeyless.com/shop/advertised/oracode-i-series-locks/">https://www.gokeyless.com/shop/advertised/oracode-i-series-locks/</a></td><td><a href="../.gitbook/assets/gokeyless-logo.png">gokeyless-logo.png</a></td></tr></tbody></table>

***

