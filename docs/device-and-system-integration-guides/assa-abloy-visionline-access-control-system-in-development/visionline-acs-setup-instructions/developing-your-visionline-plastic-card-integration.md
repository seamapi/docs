---
description: >-
  Learn how to integrate with Seam to develop and test your app to issue plastic
  cards for Visionline.
---

# Developing Your Visionline Plastic Card Integration

To develop an app to issue plastic cards for Visionline:

## 1. Set up a demo or Seam sandbox Visionline instance

To develop your app, you can set up and use a demo Visionline instance that ASSA ABLOY has provided to you. Alternately, you can use the [sandbox Visionline ACS](../../../device-guides/sandbox-and-sample-data/assa-abloy-visionline-access-management-system-sample-data.md) that Seam provides.

Seam [sandbox workspaces](../../../core-concepts/workspaces/#sandbox-workspaces) provide test accounts and virtual devices and systems that you can connect and control. Importantly, virtual devices and systems behave identically to the corresponding real devices and systems.

### Use a Demo Visionline Instance

To set up a demo Visionline instance:

1.  Download and install Visionline.

    Contact Seam at [support@seam.co](mailto:support@seam.co) to obtain access.
2. Make sure that your demo Visionline instance is configured with an appropriate operator user account. You'll use this account to connect the Visionline instance with Seam. You can use the default `sym` user and password. Alternately, you can create a new user. This user must be configured as an operator that uses the System Manager operator template. This user must also have a password. For instructions, see [Creating a Visionline User for Seam](creating-a-visionline-user-for-seam.md).
3. Buy and install a [Visionline card encoder](https://estore.assaabloyglobalsolutions.com/no/marine/rfid-encoder-updater-complete.html), and connect it to your Visionline server. For instructions, see [Setting up Card Encoder for Visionline](setting-up-card-encoder-for-visionline.md).
4. Install and run the [Seam Bridge](../../../capability-guides/seam-bridge.md) on the computer running the Visionline instance or on a computer on the same LAN.\
   See the [Seam Bridge installation instructions](../../../capability-guides/seam-bridge.md#installation-instructions).
5. [Add](../../../core-concepts/workspaces/#create-a-sandbox-workspace) a Seam workspace for this development phase.
6.  Use a [Connect Webview](../../../core-concepts/connect-webviews/) to connect your demo Visionline instance to Seam.

    See [Connecting a Visionline Site to Seam](connecting-a-visionline-site-to-seam.md).

### Use the Seam Sandbox Visionline ACS

1. In the upper-right corner of the [Seam Console](https://console.seam.co/), click the down arrow to display the workspace list.
2. [Add](../../../core-concepts/workspaces/#create-a-sandbox-workspace) a Seam sandbox workspace for this development phase.
3.  Use a Connect Webview to connect the Seam sandbox Visionline ACS.\
    In the Connect Webview authorization flow, use the [sandbox Visionline ACS credentials](../../../device-guides/sandbox-and-sample-data/assa-abloy-visionline-access-management-system-sample-data.md).

    For instructions, see [Connecting a Visionline Site to Seam](connecting-a-visionline-site-to-seam.md).

***

## 2. Develop and test your app

Learn how to use the Seam access control system API to [create ACS users](../../../products/access-systems/user-management.md#create-an-acs-user) and [plastic card-based credentials](../../../capability-guides/access-systems/managing-credentials.md#create-a-key-card-based-credential).

***

## Next Steps

Contact Seam to obtain the details necessary to [launch one or more Visionline production sites](launching-your-visionline-production-sites.md).&#x20;
