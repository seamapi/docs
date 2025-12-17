# TTLock Locks

## Overview

TTLock produces both hardware and software for smart locks. Many other manufacturers utilize TTLock's platform to create their own smart lock products. Locks built on this platform are compatible with a wide range of entrance types, including traditional doors, glass doors, locker doors, and key cylinders. With the TTLock mobile app, businesses can effortlessly lock and unlock doors and program key codes into the locks.

***

## Supported Devices

This integration works with any TTLock locks that are paired with a [TTLock Gateway](https://ttlock.eu/shop/tag/ttlock+gateway/).

For detailed information about the TTLock devices that Seam supports, see our [TTLock Supported Devices page](https://www.seam.co/manufacturers/ttlock).

***

## Supported Features

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../products/smart-locks/access-codes/) on door locks and card readers that have a PIN pad

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their TTLock devices to Seam, include the `ttlock` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

To control TTLock devices using Seam, you must prompt owners of these devices to perform the following steps:

1.  Create an account in the [TTLock app](https://www.ttlock.com/#/lock/app) if you have not done so already.

    \{% hint style="info" %\} Your users must be the top administrator for each TTLock that they want to connect to Seam. \{% endhint %\}2. Install your TTLock lock and set it up using the TTLock app.\
    Follow [the instructions in this video](https://www.youtube.com/watch?v=IbgZNc1dAx4) to set up your door lock in the TTLock app.
2. Pair the lock with a [TTLock gateway](https://ttlock.eu/shop/tag/ttlock+gateway/).\
   Follow [the instructions in this video](https://www.youtube.com/watch?v=-lhKbjVP1as) to pair your lock with a gateway.
3. In the [TTLock app](https://www.ttlock.com/#/lock/app), go to the lock settings and enable the Remote Unlock feature.\
   This feature must be enabled to unlock a TTLock device. Note that if Seam detects that this feature is disabled, a warning is added to the device.\
   Follow [the instructions in this video](https://www.youtube.com/watch?v=ni-38QpoNA4) to turn on the Remote Unlock setting for each TTLock lock.
4. Note your login credentials for the TTLock app.
5. Use your credentials for the TTLock app to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your devices to Seam.

***

## Troubleshooting

### Lock Not Appearing in Seam

Your users must be the top administrator for each TTLock that they want to connect to Seam. That is, they must supply the credentials for the top administrator account when completing the [Connect Webview](../core-concepts/connect-webviews/) to connect their TTLocks to Seam.

### Lock Not Paired to Gateway Error

On the device, if you notice a `ttlock_lock_not_paired_to_gateway` error, you will need to purchase [a compatible gateway](https://ttlock.eu/shop/tag/ttlock+gateway/) and pair it to the lock. Follow the [set up instructions](ttlock-locks.md#set-up-instructions) to configure the door lock.

### Gateway Unlocking Not Enabled Warning

On the device, if you notice a `ttlock_lock_gateway_unlocking_not_enabled` warning, you will need to follow the [set up instructions](ttlock-locks.md#set-up-instructions) to turn on the "Remote Unlock" feature.

### Power-Saving Mode

Certain TTLock Wi-Fi lock models have a power-saving mode. When these locks are in power-saving mode, the Seam API cannot control them remotely. If a TTLock Wi-Fi lock is not completing requested actions successfully, confirm whether the lock is in power-saving mode. If so, prompt your user to turn off power-saving mode, and then retry the operation.

***

## Where to Order

Many manufacturers produce Smart Locks using the TTLock platform. Find a lock by searching for a TTLock lock that fits your entrance type.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Amazon - TTLock Locks</strong></td><td></td><td><a href="https://amzn.to/4554ISo">https://amzn.to/4554ISo</a></td><td><a href="../.gitbook/assets/download.png">download.png</a></td></tr></tbody></table>
