---
description: Learn about ACS-related errors and how to resolve them.
---

# Troubleshooting Your Access Control System

The Seam API provides a set of errors that help you to troubleshoot your ACS.

## On-Premises Access Control System Errors

These errors alert you to issues involving the connection between your on-premises ACS and Seam.

### `acs_system.errors.seam_bridge_disconnected`

This error indicates that the Seam API cannot communicate with your [Seam Bridge](../seam-bridge.md), for example, if the Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. This error might also occur if your Seam Bridge is connected to the wrong [workspace](../../core-concepts/workspaces/).

To troubleshoot this error:

* Make sure that you are running the [latest version of the Seam Bridge](https://github.com/seamapi/seam-bridge-client/releases/latest). If not, reinstall and then start the Seam Bridge executable. See the [Seam Bridge installation instructions](../seam-bridge.md#installation-instructions).
* Reconnect the Seam Bridge. To reconnect, you can go to your ACS in the **Access Systems** area of the [Seam Console](https://console.seam.co/) or use a [Connect Webview](../../api-clients/connect_webviews/). For more information, see [Pairing the Seam Bridge with Your Workspace](../seam-bridge.md#pairing-the-seam-bridge-with-your-workspace).
* Restart the Seam Bridge executable.

***

### `acs_system.errors.visionline_instance_unreachable`

This error indicates that your Seam Bridge is functioning correctly and the Seam API can communicate with your Seam Bridge, but the Seam API cannot connect to your on-premises [Visionline ACS](../../device-guides/assa-abloy-visionline-access-control-system-in-development/). For example, the IP address of the on-premises ACS may be set incorrectly within your Seam workspace.

To troubleshoot this error:

* Reconnect your on-premises ACS to correct the IP address configuration. To reconnect, you can go to **Access Systems** in the [Seam Console](https://console.seam.co/) or use a [Connect Webview](../../api-clients/connect_webviews/). See the setup instructions within the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your on-premises ACS.
* Make sure that your on-premises ACS is running correctly.
