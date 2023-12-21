---
description: >-
  Use Seam to issue mobile credentials across a wide variety of access
  platforms.
---

# 📱 Mobile Access (In Development)

## An overview of managing mobile credentials

Mobile access is the use of a mobile device (e.g., smartphone, tablet or wearable) to gain access to secured doors, gates, services and more. This functionality is incorporated in access control systems of diverse types and levels of complexity.

Seam’s mobile access solution makes it easy to issue and retrieve mobile credentials across a wide variety of access control systems. In this guide, we’ll offer an overview of these basic operations, and introduce the basic terminology around mobile access.

***

## What lock and access platforms is this for?

This feature is primarily focused on electronic locks and access hardware that support Bluetooth or NFC technology. This includes a vast array of modern electronic door locks, turnstiles, and gate systems. Before implementation, it's important to verify that the existing hardware can communicate with smartphones through one of these wireless technologies.\
If you aim to enable mobile access with WiFi or Z-Wave locks, refer to [the Smart Locks section](../smart-locks/). Here, you'll find API endpoints that you can use directly in your mobile application.

***

## How mobile credentials work

1. **Installation of an App**: Users first download a specialized app onto their smartphone. This can be an app developed by your team, or the Seam Passport app.
2. **Credential Assignment**: Credentials are then issued to the user's app account. This process also links their specific account to their unique user profile in the access control system.
3. **Bluetooth or NFC Technology**: The smartphone communicates with the access control system using either Bluetooth or Near Field Communication (NFC). These technologies enable the phone to communicate with a reader installed at the access point.
4. **Authentication**: When a user approaches an access point (like a door or gate), they use the app to signal their intent to enter. The app communicates with the reader to authenticate the user's credentials. This can be done either by tapping a button in the app, using a gesture, or even automatically when the phone comes into range (depending on the system's configuration).
5. **Access Granted or Denied**: The access control system verifies the credentials and either grants access (by unlocking the door or gate) or denies it. The system can also record the access event, noting the time and the identity of the user.

***

## Use Cases

Use Seam’s API and Mobile SDK for the following tasks:

* **Issue and distribute mobile credentials across many platforms:** Seam’s API is compatible with many access control systems. The Mobile SDK also supports multiple mobile technologies, like bluetooth low energy (BLE), near field communication (NFC), and Apple Wallet.
* **Automatically provision new phones and issue credentials:** When a user signs into their account on a new phone, Seam will automatically provision the device and issues the necessary credentials. It also ensure that the mobile credentials are synced to the access control system.
