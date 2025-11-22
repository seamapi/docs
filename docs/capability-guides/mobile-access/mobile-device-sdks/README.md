---
description: >-
  The Seam mobile SDKs help you to create native applications for Apple (iOS)
  and Android devices and platforms.
---

# Integrating into Your Mobile Application

## Overview

We have designed the Seam mobile SDKs to provide the flexibility to support a range of workflows. This example describes a mobile key workflow, in which the smart door lock scans for and unlocks in the presence of a nearby mobile device acting as a passive key. Note that the mobile device in this example uses Bluetooth Low Energy (BLE) technology.

1. Once the mobile app is downloaded, it requests Bluetooth permissions from the user.
2. The user presses the **Unlock** button, prompting the phone to search for nearby locks.
3. When the user holds their phone close to the lock, a Bluetooth connection is established, and the phone transmits a key to the lock.
4. The lock verifies the mobile key, confirms that the key can access this lock, and sends a success response back to the app.
5. The lock successfully unlocks!

<figure><img src="broken-reference" alt=""><figcaption><p>Example of Unlock sequence in a Mobile App</p></figcaption></figure>
