---
description: Use Seam Bridge to connect on-premises access systems to Seam.
---

# 📡 Seam Bridge

## Overview

Seam Bridge is a lightweight app that brings your on-premises access system online—without exposing any ports to the public internet.

Install it on a computer in the same local network as your access system. Seam Bridge creates a secure tunnel between your on-premises system and Seam Cloud, handling all the encryption and authentication for you.

With Seam Bridge, you get the reliability of a local system, plus the flexibility of the cloud.

{% hint style="info" %}
It is important to understand the difference between Seam Bridge and smart lock Wi-Fi bridges. Seam Bridge is specifically designed to connect on-premises access systems to the Seam platform. On the other hand, Smart lock Wi-Fi bridges enable remote management of smart lock devices that do not have integrated Wi-Fi connectivity. That is, a smart lock Wi-Fi bridge uses a short-range communication protocol, such as Bluetooth, to connect one or more locks to the internet through a property's local Wi-Fi network.
{% endhint %}

***

## Getting Started

Download the Seam Bridge application onto an on-premises computer. Then, pair Seam Bridge with your Seam [workspace](../core-concepts/workspaces/) and connect the on-premises access system to Seam. You install and pair Seam Bridge while you are connecting your on-premises access system to Seam. That is, the [Connect Webview](device-and-system-capabilities/connect-webviews/) that you use to connect your on-premises access system to Seam walks you through the process of downloading and pairing Seam Bridge.

For detailed information, see the setup instructions within the [system integration guide](../device-and-system-integration-guides/overview.md#access-control-systems) for your on-premises access system.&#x20;

***

## **Download Seam Bridge**

In a web browser, go to [the Seam Bridge repo](https://www.seam.co/seam-bridge/releases/latest) and download the latest version of the Seam Bridge application for the appropriate operating system.

<figure><img src="../.gitbook/assets/seam-bridge-download-area.png" alt="Download the Seam Bridge application for your operating system."><figcaption><p>Download the Seam Bridge application for your operating system.</p></figcaption></figure>

### System Requirements

* **Operating System:** Window 7 or later, macOS, or Linux
* **Memory:** At least 1 GB of RAM
* **Network:** LAN connection required

***

## Run Seam Bridge

1. Open the downloaded executable file.
2. If you are using a Windows computer running Microsoft Defender, you may need to allow Windows to run the Seam Bridge app.
   1. In the **Windows protected your PC** dialog, click **More info**.
   2. Click **Run anyway**.
3.  If you are using a Windows computer, you may need to allow public networks to access the Seam Bridge app.

    1. In the **Do you want to allow public and private networks to access this app?** dialog, click **Show more**.
    2. Make sure that the **Public networks** and **Private networks** checkboxes are selected.
    3. Click **Allow**.

    The Seam Bridge app displays the **Welcome to Seam Bridge** window.

    <figure><img src="../.gitbook/assets/seam-bridge-welcome.png" alt="Welcome to Seam Bridge window" width="375"><figcaption><p><strong>Welcome to Seam Bridge</strong> window</p></figcaption></figure>
4. In the **Welcome to Seam Bridge** window, type a name for the site that you are connecting using Seam Bridge—for example, `My Site`—and then click **Start pairing**.

The Seam Bridge app displays a pairing code that you can use to pair Seam Bridge with your workspace.

<figure><img src="../.gitbook/assets/seam-bridge-pairing-code.png" alt="Use the pairing code to pair Seam Bridge with your workspace." width="375"><figcaption><p>Use the pairing code to pair Seam Bridge with your workspace.</p></figcaption></figure>

***

## Next Steps

Go to the setup instructions within the [system integration guide](../device-and-system-integration-guides/overview.md#access-control-systems) for your on-premises access system. These instructions describe how to pair Seam Bridge with your workspace and then connect your on-premises access system to Seam through Seam Bridge.

***

## Troubleshooting Seam Bridge

If issues affect the connections between Seam Bridge, your on-premises access system, and the Seam platform, the Seam Bridge app displays status, error, and other information to help you understand and troubleshoot these issues.

The **Connected Systems** area displays the status of each connection. A green checkmark indicates a healthy connection.

The Seam Bridge app also displays communication errors at the top of the window.

<figure><img src="../.gitbook/assets/seam-bridge-connected-systems-info.png" alt="Seam Bridge displays information about the connections to on-premises access systems." width="375"><figcaption><p>Seam Bridge displays information about the connections to on-premises access systems.</p></figcaption></figure>
