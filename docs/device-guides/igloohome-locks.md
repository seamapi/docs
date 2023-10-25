---
description: Guide for using igloohome locks with Seam
---

# igloohome Locks

## Overview

igloohome produces various types of smart locks for the residential, rental property, and small business markets. These locks include mortise, deadbolt, rim, glass door, keybox, and padlock style locks. Further, igloohome [algoPIN™](https://www.igloohome.co/en-US/how-it-works) technology enables you to issue offline access codes that are valid for 24 hours.

Seam integrates with igloohome locks through the [igloohome Wi-Fi Bridge](https://www.igloohome.co/en-US/products/bridge) to provide lock, unlock, and customizable access code provisioning actions. You can link up to five igloohome locks with a single igloohome Bridge.

In addition, the Seam integration supports the generation of offline access codes (that is, algoPIN codes) for igloohome locks without the need for the igloohome Bridge.

***

## Supported Devices

This integration supports a series of igloohome devices for lock, unlock, and customizable access code provisioning actions. In addition, this integration supports a wider set of igloohome devices for offline access code (algoPIN) provisioning.

#### igloohome Bridge Support

This integration supports lock, unlock, and customizable access code provisioning actions for a subset of igloohome smart locks, when combined with the [igloohome Bridge](https://www.igloohome.co/en-US/products/bridge). For a list of compatible igloohome smart locks, see the **Bridge Compatibility** area on the [igloohome Bridge ](https://www.igloohome.co/en-US/products/bridge)page.

Each igloohome Bridge supports up to five compatible igloohome locks.

#### Offline Access Code Support (Upcoming!)

This integration will support the generation of offline access codes (that is, [algoPIN](https://www.igloohome.co/en-US/how-it-works) codes) for all igloohome lock models, without the need for a bridge. Using offline access codes, you generate PIN codes remotely, and these PIN codes are valid for 24 hours. Note that once you generate an offline access code, you can only delete this code from the corresponding lock if you are within Bluetooth® range of the lock.

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers="igloohome=fba9c9bd-cbf9-4ea6-8cb9-7c724da8afed"
/>" %}

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md) for igloohome smart locks connected through the igloohome Bridge
* [Programming access codes](../products/smart-locks/access-codes/)

{% hint style="info" %}
We support customizable access codes for igloohome locks connected through the igloohome Bridge. We support offline algoPIN codes for all igloohome locks, without the need for a bridge.
{% endhint %}

***

## Setup Instructions

1. Create an account in the igloohome mobile app if you have not done so already.\
   For more information, see "Download App & Sign in" in the [igloohome app quick start guide](https://support.igloohome.co/support/solutions/articles/35000183120-igloohome-app-quick-start-guide).
2. In the igloohome mobile app, add your igloohome devices.\
   For more information, see "Pair your lock" in the [igloohome app quick start guide](https://support.igloohome.co/support/solutions/articles/35000183120-igloohome-app-quick-start-guide).
3. To be able to configure your igloohome smart locks remotely, trigger lock and unlock actions, and use custom codes, install the [igloohome Wi-Fi Bridge](https://www.igloohome.co/en-US/products/bridge), and then pair your locks to the bridge.
4. Note your login credentials for the igloohome mobile app, and use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews.md) to add your devices to Seam.

***

## Where to Order

Order igloohome devices directly from the igloohome website.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>igloohome</strong></td><td></td><td><a href="https://store-us.igloohome.co/">https://store-us.igloohome.co/</a></td><td><a href="../.gitbook/assets/igloohome-logo.png">igloohome-logo.png</a></td></tr></tbody></table>

***

