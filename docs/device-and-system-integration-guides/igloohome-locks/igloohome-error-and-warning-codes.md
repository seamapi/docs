---
description: >-
  This guide covers error and warning codes specific to IglooHome devices
  integrated through Seam.
---

# IglooHome Error and Warning Codes

### Overview

IglooHome devices can generate errors and warnings related to device connectivity, bridge status, and access code management. Understanding these codes helps you quickly diagnose and resolve issues.

### Device Errors

Device errors indicate critical issues that prevent normal operation.

| Error Code            | Description                             | Triggered When                                   | Resolution                                                                                       |
| --------------------- | --------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `device_disconnected` | Device is offline and cannot be reached | Device goes offline (not an offline-only device) | Reconnect the device through the Igloohome app. Check device batteries and network connectivity. |
| `hub_disconnected`    | The Igloohome Bridge is offline         | Bridge cannot communicate with the cloud         | Check bridge power and network connection. Restart the bridge if needed.                         |

### Device Warnings

Device warnings indicate potential issues or configuration limitations but don't prevent all functionality.

| Warning Code                              | Description                                            | Triggered When                                            | Impact                                                                                                 |
| ----------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `accessory_keypad_setup_required`         | Accessory keypad is not linked to the Igloohome Bridge | Device has both keypad and bridge, but they're not linked | Online access code programming will fail. Link the keypad to the bridge in the Igloohome app.          |
| `hub_required_for_addtional_capabilities` | Device is operating without an Igloohome Bridge        | Device has no bridge configured                           | Only offline access codes are available. Add a bridge to enable remote unlock and online access codes. |
| `device_has_flaky_connection`             | Device has an unstable internet connection             | Frequent network disconnections detected                  | May experience intermittent issues with remote operations.                                             |

{% hint style="info" %}
**Note:** The legacy warning `functional_offline_device` is being migrated to `hub_required_for_addtional_capabilities`.
{% endhint %}

### Access Code Errors

Access code errors prevent the creation or management of access codes.

| Error Code                               | Description                 | Triggered When                                                   | Resolution                                                                                                                |
| ---------------------------------------- | --------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `igloohome_bridge_too_many_pending_jobs` | Bridge queue is at capacity | Bridge has 20 or more pending jobs                               | Seam will continue retrying automatically. If the issue persists, contact support. Jobs will process as the queue clears. |
| `igloohome_bridge_offline`               | Bridge cannot be contacted  | Bridge reports that it's offline or lock is not linked to bridge | Verify the bridge is online and the lock i                                                                                |
