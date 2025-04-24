---
description: Learn how to connect your Visionline production account to Seam.
---

# Step 5: Connect Your Visionline Production Account to Seam

Perform this process for each Visionline site that you want to connect to Seam.

{% hint style="info" %}
If you already connected your Visionline ACS to Seam during the development phase—using your Visionline development account—you must now reconnect Visionline to Seam using your production Visionline credentials.
{% endhint %}

1.  In the top navigation pane of [Seam Console](https://console.seam.co/), click **ACS Systems**.

    <figure><img src="../../../../../.gitbook/assets/access-systems-tab-production-workspace.png" alt="Click ACS Systems to go to the Access Systems page."><figcaption><p>Click ACS Systems to go to the Access Systems page.</p></figcaption></figure>
2.  On the **Access Systems** page, click **New Access System**.

    Seam Console displays a Connect Webview that enables you to connect your ACS to Seam.
3. In the Connect Webview, click **Continue**.
4. If the Connect Webview displays multiple brand options, click **Visionline**.
5.  On the **Set up your Seam Bridge** page, click [**latest Seam Bridge client**](https://www.seam.co/seam-bridge/releases/latest).

    [Seam Bridge](../../../../../capability-guides/seam-bridge.md) is a software-only component that enables you to connect on-premises software systems to the Seam platform. Because Visionline is an on-premises ACS, Seam Bridge is required for Visionline systems.
6.  Download the Seam Bridge executable onto the on-premises computer that is running Visionline or onto a computer on the same network.

    For systems requirements, see [Seam Bridge](../../../../../capability-guides/seam-bridge.md).
7.
8. Run the downloaded Seam Bridge app.
9. In the **Welcome to Seam Bridge** window, type a name for the site that you are connecting using Seam Bridge and then click **Start pairing**.
10. Copy the pairing code.

    <figure><img src="../../../../../.gitbook/assets/seam-bridge-pairing-code.png" alt="Use the pairing code to pair Seam Bridge with your workspace." width="375"><figcaption><p>Use the pairing code to pair Seam Bridge with your workspace.</p></figcaption></figure>
11. In the Connect Webview, click **Continue**.
12. On the **Visionline info** page:
    1. In the **Enter your pairing token** field, paste the pairing code that you copied.
    2. In the **Name your bridge** field, type a unique name for Seam Bridge.
    3. Click **Submit**.
13. On the **Enter your credentials** page:
    1. In the **Visionline Site Name** field, type a name to identify the Visionline site within your Seam workspace.
    2.  In the **Username** field, type the username for your Visionline production account.

        This account is the one that you [created or identified in Visionline for the connection with Seam](../../../../assa-abloy-visionline-access-control-system/visionline-acs-setup-instructions/developing-and-launching-your-visionline-plastic-card-encoding-app/launching-your-visionline-plastic-card-encoding-app-to-a-live-site/step-2-configure-a-visionline-user-account.md).
    3. In the **Password** field, type the password for your Visionline production account.
    4. If Seam Bridge is not installed on the same computer as Visionline, select **Seam Bridge and Visionline server are installed on different computers** and then type the local IP address of the on-premises computer running Seam Bridge.
    5. Click **Submit**.
14. Click **Close**.
