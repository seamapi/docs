# \[Archive pre-edit] Keynest Key Lockers



<figure><img src="../.gitbook/assets/lockly-manufacturer-page-cover-16-9-light.png" alt=""><figcaption></figcaption></figure>

## Overview

Connect your Keynest account to Seam to automate key pickup and drop-off for your properties. Each physical key stored at a Keynest location appears as a device in Seam. You can issue time-bound pickup and drop-off codes through the Seam API, allowing guests, staff, or vendors to access keys securely without manual coordination.

Keynest integrates directly with Seam’s Smart Lock API, letting you manage access to physical keys the same way you manage digital locks or credentials.

***

## Supported Devices

This integration supports all keys stored and managed under your Keynest account.

Each key is represented as a device within Seam once connected.

This integration supports [all Lockly smart locks](https://lockly.com/collections/door-lock).&#x20;

For detailed information about the Lockly devices that Seam supports, see our [Lockly Supported Devices page](https://www.seam.co/manufacturers/lockly).

***

## Supported Features

We support the following features:

* Issuing pickup codes for retrieving a key within a defined time window
* Issuing drop-off codes for returning a key securely
* Retrieving real-time status of a key (e.g., available, picked up, dropped off)
* [Programming online access codes](../products/smart-locks/access-codes/) on locks that have a keypad

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their Lockly devices to Seam, include the `keynest` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To connect your Keynest account to Seam, do the following:

1. [Create a Keynest account](https://keynest.com) if you have not done so already.
2. In the Keynest dashboard, add the keys you want to store.
3. Note your login credentials for the Keynest dashboard, and use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your devices to Seam.

Once connected through the Seam Smart Lock API, each key can be issued a pickup code with a defined time frame.

***

## How to use



***

## Brand-Specific Restrictions

Note the following Lockly-specific restrictions:

### Access Codes

Lockly supports creating custom access codes. These custom codes must be six to eight digits long.

***

## Where to Order

Order Lockly locks directly from the Lockly website.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Lockly</strong></td><td></td><td><a href="https://lockly.com/collections/door-lock">https://lockly.com/collections/door-lock</a></td><td><a href="../.gitbook/assets/lockly-logo.png">lockly-logo.png</a></td></tr></tbody></table>

***
