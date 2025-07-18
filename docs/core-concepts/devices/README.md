---
description: >-
  Devices are objects like locks, thermostats, or sensors. In the Seam API,
  devices have capabilities that describe the functions that they can perform,
  as well as online and managed status.
---

# Devices

Seam decomposes the ensemble of features that a device provides into one or more capabilities, such as the capability to perform a remote unlock or the capability to program online access codes.

For detailed information about capabilities, see [Device and System Capabilities](../../capability-guides/device-and-system-capabilities.md).

Seam exposes each capability as a set of APIs that are standardized across brands for ease of integration. For example, an unlock action on a door lock always requires the same API call, regardless of the device brand.

![](<../../.gitbook/assets/image (10) (1).png>)

In addition, Seam provides the following three sets of device-related features:

* **Actions:** Commands that you can issue to the device, such as unlock. For more information, see the [Capability Guides](../../capability-guides/device-and-system-capabilities.md).
* **Properties:** The current state of the device, such as the locked, online, and managed statuses. For details, see [`device` Properties](../../api/devices/#properties).
* **Events:** Notifications related to changes in the state of the device, such as an unlocking operation performed with an access code. For details, see [Events](../../api/events/).\
  To help you test your app against events—like device disconnection or removal—that are difficult to orchestrate in a QA environment using real devices, Seam provides a suite of `simulate` endpoints that you can use in a [sandbox workspace](../workspaces/#sandbox-workspaces). See [Testing Your App Against Device Disconnection and Removal](testing-your-app-against-device-disconnection-and-removal.md).
