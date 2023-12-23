---
description: Use Seam Network to connect on-premise systems to Seam.
---

# 🌩 Seam Bridge - In Development

## Overview

The "Seam Bridge" product allows you to connect on-premise software systems with the Seam platform. It is deployed as an executable file that can be installed easily on an on-premise computer. Once installed, it functions as a secure intermediary, facilitating network requests between Seam and the on-premise network. This setup aims to enable smooth communication between cloud-based services and existing local systems while prioritizing data security and network integrity.

***

## System Requirements

1. **Operating System:** Window 7 or later versions.
2. **Memory:** At least 1 GB of RAM.
3. **Network:** LAN connection required.

***

## Installation instructions

### **Installing the Seam Bridge app on the on-premise computer**

1. Download the File: Visit [the Seam Bridge releases page](https://github.com/seamapi/seam-bridge-client/releases/tag/latest) and download the latest version of "SeamBridge.exe" file.
2. Run the **"SeamBridge.exe"** executable. It will launch a webpage with the Seam Bridge settings.
3.  Copy down the invitation code that is displayed on the webpage. The installer use it to pair this Seam Bridge to the workspace.\


    <figure><img src="../.gitbook/assets/image (10).png" alt="" width="563"><figcaption><p>Copy down the invitation code shown on the Seam Bridge app screen.</p></figcaption></figure>

### Pairing the Seam Bridge with your Workspace

You have two options for connecting the Seam Bridge to your workspace. If you're a developer looking to connect your own device, refer to the "Pair using the Seam Console" section. If you're coordinating with an external party to set up a Seam Bridge device, consult the "Pair using a Connect Webview" section.

**Pair using the Seam Console:**

1. Log in to your account on the [Seam Console](https://console.getseam.com).
2. Navigate to the **"Devices"** page.
3. Click on "+ Add Devices" in the top right corner.
4. Select "Seam Bridge".
5. Enter a unique name in the "Bridge Name" field, and the invitation code you collected from the previous section in the "PIN Code" field.
6. Make sure to remember the name of the Seam Network for future reference for connecting the on-premise access control system in the Connect Webview.

**Pair using a Connect Webview:**

1. Create a Connect Webview using the `accepted_providers` key `seam_bridge`.
2. Share the `url` of the created Connect Webview with the end user.
3. When the end user accesses the Connect Webview, they can choose "Seam Bridge" from the list of brands, if available.
4. They must enter a unique name in the "Bridge Name" field sand the invitation code they collected from the Seam Bridge webpage in the "PIN Code" field.
5. Remind them to remember the name for future reference when connecting their on-premise system in the Connect Webview.

<figure><img src="../.gitbook/assets/Screen Shot 2023-12-22 at 3.33.56 PM.png" alt="" width="221"><figcaption><p>Connect Webview for connecting your Seam Bridge instance.</p></figcaption></figure>

***

## Connecting the On-Premise Software System

After installing the Seam Bridge app and connecting it to your workspace, you'll need to connect your on-prem software system to Seam using a Connect Webview. For detailed instructions on how to connect your system, please consult the "Set Up Instructions" found in the brand-specific guide within the **"Device Guides"** section.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Device Guides</strong></td><td>Get started →</td><td></td><td><a href="broken-reference">Broken link</a></td><td><a href="../.gitbook/assets/image.png">image.png</a></td></tr></tbody></table>
