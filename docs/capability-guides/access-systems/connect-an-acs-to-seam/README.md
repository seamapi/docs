---
description: Learn how to connect your access control system to Seam.
---

# Connect an ACS to Seam

You can use [Seam Console](../../../core-concepts/seam-console/) or the [Seam API](../../../api-clients/connect_webviews/) to connect your access control system to Seam. You use a [Connect Webview](../../device-and-system-capabilities/connect-webviews/) to authorize the connection.

## Connect an ACS Using Seam Console

1. Log in to [Seam Console](https://console.seam.co/).
2.  In the upper-left corner, click the workspace switcher and select or create a [workspace](../../../core-concepts/workspaces/).

    ![Use the Seam Console workspace switcher to switch between workspaces and create new workspaces.](../../../.gitbook/assets/workspace-switcher.png)
3. In the top navigation pane, click **ACS Systems**.
4.  On the **Access Systems** page, click **New Access System**.

    Seam Console displays a Connect Webview that enables you to connect a virtual ACS to Seam.
5.  In the Connect Webview, follow the prompts to authorize the connection.

    If you want to connect a virtual ACS to a [sandbox workspace](../../../core-concepts/workspaces/#sandbox-workspaces), use the corresponding [sandbox ACS credentials](../../../device-guides/sandbox-and-sample-data/).

    To connect a real access control system, see the [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS to learn any brand- or system-specific prerequisites, requirements, and restrictions.

The **Access Systems** page now displays the newly-connected access control system.

***

## Connect an ACS Using the Seam API

First, use the Seam API to create a Connect Webview. Then, display this Connect Webview to your user. You user completes the Connect Webview to authorize the ACS connection to Seam.

For detailed instructions, see [Connect Webview Process](../../device-and-system-capabilities/connect-webviews/connect-webview-process.md).
