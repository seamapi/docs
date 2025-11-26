---
description: Automating physical key hand‑offs with KeyNest lockers
---

# Keynest Key Lockers

<figure><img src="../../.gitbook/assets/image (29) (1).png" alt=""><figcaption></figcaption></figure>

## Overview

Connect your Keynest account to Seam to automate key pickup and drop-off for your properties. Keynest integrates directly with Seam’s Smart Lock API, letting you manage access to physical keys the same way you manage digital locks or credentials. Each physical key stored at a Keynest location appears as a device in Seam. You can issue time-bound pickup and drop-off codes through the Seam API, allowing guests, staff, or vendors to access keys securely without manual coordination.

***

## Supported Devices

This integration supports all keys stored and managed under your Keynest account. Each key is represented as a device within Seam once connected.

{% hint style="warning" %}
Note: Keys stored at [Quadrient lockers](https://www.quadient.com/en/news/KeyNest_Selects_Parcel_Pending_by_Quadient_Open_Network_to_Expand_Key_Exchange_Services_in_the_UK) aren't supported.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (36).png" alt="" width="563"><figcaption><p>Keys stored at Quadrient Lockers are not compatible with Seam.</p></figcaption></figure>

***

## Supported Features

With this integration, users can manage:

* **Collection Code** - Generate codes for guests to collect keys from KeyNest Points
* **Drop-off Code** - Create codes for dropping keys off at KeyNest Points
* **Real-time Key Tracking** - Monitor key status, location, and access activity
* **Magic Link Access** - Provide guests with direct access links for seamless key collection (To Be Implemented)

***

## Device Provider Key for Connect Webview

To create a [Connect Webview](../../core-concepts/connect-webviews/) that enables your users to connect their Keynest keys to Seam, include the `keynest` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Where to Order

Purchase KeyNest services or get more details about KeyNest locations directly from the KeyNest website:

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>KeyNest</strong></td><td></td><td><a href="https://keynest.com/">https://keynest.com/</a></td><td><a href="../../.gitbook/assets/keynest logo transparent.png">keynest logo transparent.png</a></td></tr></tbody></table>

***
