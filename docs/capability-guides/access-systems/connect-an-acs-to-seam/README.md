---
description: Learn how to connect your access system to Seam.
---

# Connect an Access System to Seam

You can use [Seam Console](../../../core-concepts/seam-console/) or the [Seam API](../../../api/connect_webviews/) to connect your access system to Seam. You use a [Connect Webview](../../../core-concepts/connect-webviews/) to authorize the connection.

## Connect an Access System Using Seam Console

1. Log in to [Seam Console](https://console.seam.co/).
2.  In the upper-left corner, click the workspace switcher and select or create a [workspace](../../../core-concepts/workspaces/).

    To connect a real access system to Seam, use a production workspace. To use one of Seam's [virtual access systems](../../../device-guides/sandbox-and-sample-data/), use a [sandbox workspace](../../../core-concepts/workspaces/#sandbox-workspaces).

    ![Use the Seam Console workspace switcher to switch between workspaces and create new workspaces.](../../../.gitbook/assets/workspace-switcher.png)
3. In the top navigation pane, click **ACS Systems**.
4.  On the **Access Systems** page, click **New Access System**.

    Seam Console displays a Connect Webview that enables you to connect your access system to Seam.
5.  In the Connect Webview, follow the prompts to authorize the connection.

    <figure><img src="../../../.gitbook/assets/salto webview.webp.png" alt="Use a Connect Webview to connect your access system to Seam."><figcaption><p>Use a Connect Webview to connect your access system to Seam.</p></figcaption></figure>

    If you want to connect a virtual access system to a sandbox workspace, use the corresponding [sandbox access system credentials](../../../device-guides/sandbox-and-sample-data/).

    To connect a real access system, see the [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS to learn any brand- or system-specific prerequisites, requirements, and restrictions.

The **Access Systems** page now displays the newly-connected access control system.

***

## Connect an Access System Using the Seam API

First, use the Seam API to [create a Connect Webview](../../../api/connect_webviews/create.md). Then, display this Connect Webview to your user. You user completes the Connect Webview to authorize the access system connection to Seam.

For detailed instructions, see [Connect Webview Process](../../../core-concepts/connect-webviews/connect-webview-process.md).
