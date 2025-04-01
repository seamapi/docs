---
description: Learn how to connect your Salto Space access system to Seam.
---

# Salto Space Setup Instructions

This topic describes how to connect your Salto Space sites to Seam.

## Prerequisites

This section describes the steps that you must take before connecting your Salto Space sites to Seam.

### Integrate with Live Salto Space Sites

These setup instructions assume that you are integrating existing, live Salto Space sites with Seam.

***

### SHIP Settings for Seam Integration

Before connecting your Salto Space access system to Seam, you must first configure the SHIP settings in the Salto ProAccess Space Management Software. In these settings, specify the username and password that you want to use to connect your Salto Space site to Seam.

Perform the following process for each Salto Space site that you want to integrate with Seam:

1. Log in to the Salto ProAccess Space desktop app.
2. In the top navigation pane, click **System > General options**.
3. On the **General options** page, click the **SHIP** tab.
4.  In the **Salto SHIP Server** pane:

    1. Select **Enable**.
    2. In the **Transport Protocol** area, select **HTTP(S)**.
    3. In the **Authentication** field, select **Basic**.
    4. In the **Username** field, type a username for the integration with Seam, for example, `Seam_Integration`.
    5. In the **Password** field, type a password for this Seam integration user.

    <figure><img src="../../.gitbook/assets/salto-space-ship-settings.png" alt="In the Salto Space SHIP settings, specify a username and password for the integration with Seam."><figcaption><p>In the Salto Space SHIP settings, specify a username and password for the integration with Seam.</p></figcaption></figure>
5. In the lower-right corner of the **General options** page, click **Save**.
6. Note the username and password that you have specified in the SHIP settings. You must use these credentials to connect your Salto Space site to Seam.

***

### LAN URL of the Salto Space Server

During the process of connecting your Salto Space access system to Seam, you must specify the LAN URL of your Salto Space server.

To identify this URL:

1.  On the Windows computer that is running the Salto Space server, open a **Command Prompt** window.

    That is, click **Start**, type `cmd`, and press **Enter**.
2.  In the **Command Prompt** window, type `ipcofig` and then press **Enter**.

    This command displays the computer's Windows IP configuration.
3.  Note the IPv4 address that the computer is using to connect to the internet.

    This IP address most likely starts with `192`.
4.  Prepend `http://` and append the port number `8100` to the IP address to form the LAN URL.

    For example, if the computer's IP address is `192.168.1.101`, the LAN URL is `http://192.168.1.101:8100`.
5. Note this LAN URL for use when connecting your Salto Space access system to Seam.

***

## Setup Process

Perform the following process for each Salto Space site that you want to integrate with Seam:

1.  In the top navigation pane of [Seam Console](https://console.seam.co/), click **ACS Systems**.

    <figure><img src="../../.gitbook/assets/access-systems-tab-production-workspace.png" alt="Click ACS Systems to go to the Access Systems page."><figcaption><p>Click ACS Systems to go to the Access Systems page.</p></figcaption></figure>
2.  On the **Access Systems** page, click **New Access System**.

    Seam Console displays a Connect Webview that enables you to connect your access system to Seam.
3. In the Connect Webview, click **Continue**.
4. If the Connect Webview displays multiple brand options, click **Salto Space**.
5.  On the **Set up your Seam Bridge** page, click [**latest Seam Bridge client**](https://github.com/seamapi/seam-bridge-client/releases/latest).

    [Seam Bridge](../../capability-guides/seam-bridge.md) is a software-only component that enables you to connect on-premises software systems to the Seam platform. Because Salto Space is an on-premises access system, Seam Bridge is required for Salto Space systems.
6.  Download the Seam Bridge executable onto the on-premises computer that is running Salto Space or onto a computer on the same network.

    For systems requirements, see [Seam Bridge](../../capability-guides/seam-bridge.md).
7.  Run the downloaded Seam Bridge executable file.

    This application opens a webpage containing the Seam Bridge settings.
8. Click **Create Pairing Code**.
9. Copy the pairing code that the webpage displays.
10. In the Connect Webview, click **Continue**.
11. On the **Seam Bridge Connection** page:
    1. In the **Enter your pairing token** field, paste the pairing code that you copied.
    2. In the **Name your bridge** field, type a unique name for Seam Bridge.
    3. Click **Submit**.
12. On the **Enter your credentials** page:
    1. In the **System Name** field, type a name to identify the Salto Space site within your Seam workspace.
    2.  In the **LAN URL of the Salto Space server** field, type the [URL that you identified](salto-space-setup-instructions.md#lan-url-of-the-salto-space-server) before beginning this process.

        For example: `http://192.168.1.101:8100`
    3. In the **Username** field, type the username that you configured in the [Salto Space SHIP settings](salto-space-setup-instructions.md#prerequisites).
    4. In the **Password** field, type the password that you configured in the Salto Space SHIP settings.
    5. Click **Submit**.
13. Click **Close**.
