---
description: Learn how to configure your Latch ACS for integration with Seam.
---

# Dormakaba Ambiance Setup Instructions

Use this guide to connect your Dormakaba Ambiance system to Seam and enable automated guest access with plastic cards, mobile keys, and (when available) Apple Wallet. After setup, Seam syncs reservation changes in real time and manages the full guest key lifecycle for you.

***

## Before you begin

Make sure your Ambiance environment is ready for integration.

#### Software

* Ambiance version 2.11.2 or later.
* Mobile Keys (if used) require:
  * A Dormakaba Mobile Access license
  * An active LEGIC Connect account

#### Hardware

* Locks and control units that support BLE/NFC mobile keys must run firmware 1.3.1.0+.
* Plastic card encoders must be installed and paired with your Ambiance server.

***

## 1. Configure Ambiance

Set up Ambiance so that Seam can connect and issue credentials on your behalf.

#### Create an integration operator.

1. Go to **Staff Management** → **New staff member**.
2. Name the user: `Seam Integration`.
3. Save the profile.
4. Enable **Ambiance Operator** and set the role to **Administrator**.
5. Enter any **Operator Username** and **Password** (Store these as your Staff Admin credentials).
6. Save the profile.

#### Create PMS Operator Login credentials

These are the credentials Seam uses to communicate with Ambiance.

1. Open the Seam Integration staff member.
2. Scroll to **PMS Operator Login** → **Add/Update Username & Password**.
3. Create a **Username** and **Password** (Store these as your PMS Operator credentials.).
4. Save the changes.

#### Enable API access

1. Go to **System Settings** → **Security**.
   * Toggle **Enable PMS Authentication**.
   * Save.
2. Go to **System Settings** → **PMS**.
   * Toggle **Enable LGS REST API**.
   * Create a **Client ID** and **Secret Key**.
   * Save.
3. In the same PMS section, toggle **Enable LGS SOAP API** and save.

#### What you should have after setup

* Staff Admin username
* Staff Admin password
* PMS Operator username
* PMS Operator password
* REST API Client ID
* REST API Secret Key

You’ll enter all six in the next step.

***

## 2. Connect Ambiance to Seam

{% hint style="info" %}
If your Ambiance server is on-premises, [install Seam Bridge](../../capability-guides/seam-bridge.md) before continuing.\
Seam Bridge provides the secure outbound connection Seam uses to reach your Ambiance REST and SOAP APIs.\
Install it on the same computer as Ambiance or on a machine with network access to Ambiance and verify it’s running.
{% endhint %}

Once Seam Bridge is installed (or if your system is cloud-hosted), you can connect your Dormakaba Ambiance system to Seam.

1.  **Choose connection method**

    Select **Bridge application** for on-prem systems, or **Cloud connection** if your Ambiance server is hosted.
2.  **(Bridge only) Enter your pairing token**\
    Copy the pairing token from the Seam Bridge app and submit it.\


    <figure><img src="../../.gitbook/assets/seam-bridge-client.png" alt=""><figcaption><p>Grab the Pairing Token from the top right corner of the Bridge application.</p></figcaption></figure>


3. **Enter your Ambiance operator credentials**\
   These credentials come from the Staff Admin (Operator) account you created in Ambiance.
   *   **Ambiance Operator Username**

       Enter the username for your Staff Admin / Operator
   * **Ambiance Operator Password**\
     Enter the password for your Staff Admin / Operator
   *   **Ambiance Server URL** (if using Bridge)\
       Enter the URL or IP address of your Ambiance server within the local area network.

       Example: `http://192.168.x.x`
   *   **Ambiance Cloud URL** (if Cloud connection)

       Enter the base URL of your cloud-hosted Ambiance environment.\

4. **Enter your REST API credentials**\
   These fields use the values created under System Settings → PMS in Ambiance.
   *   **PMS Operator Username**

       Enter the PMS Operator Login username you created.
   *   **PMS Operator Password**

       Enter the PMS Operator Login password.
   *   **REST API Client ID**

       Enter the Client ID created when enabling LGS REST API.
   *   **REST API Client Secret**

       Enter the Client Secret created alongside the Client ID.\


Seam will verify the credentials and complete the connection. Once finished, your Ambiance entrances and reservations will begin syncing automatically.

***

## 3. Enable Bluetooth Mobile Keys in Ambiance (Optional)

1. Contact Dormakaba Technical Support at **+1 (800) 999-6213** to begin the Mobile Key License procurement and setup process.
   1. After selecting your language, follow the menu prompts: **Technical Support** → **Product Support** → **Hospitality** → **Ambiance**.
2. Inform them you are utilizing **Seam’s integration for Dormakaba Ambiance Mobile Keys**.
3. Dormakaba will connect your Community property to Seam’s LEGIC account and provide you with a **Project ID** and **API Key**.
4. In Ambiance, go to **System Settings** > **Advanced** > **Mobile Keys** > **LEGIC Configuration Settings** and enter the **Project ID** and **API Key**.
5.  Enter **"https://integration.legicconnect.com"** as the **Endpoint address**.

    <figure><img src="../../.gitbook/assets/Screenshot 2025-09-28 at 5.22.31 PM.png" alt=""><figcaption></figcaption></figure>
6. Click **Test LEGIC connection settings** to confirm that the settings were set correctly.
7. Click the **Save** icon in the top-right corner to save the changes.

***
