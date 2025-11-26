---
description: >-
  Learn how to connect a virtual Visionline ACS to Seam to help you develop and
  test your Visionline plastic card encoding app.
---

# Step 2: Connect the Virtual Visionline ACS to Seam

Once you've created a sandbox workspace, add a virtual Visionline ACS to start developing your Visionline plastic card encoding app.

1.  In the top navigation pane of [Seam Console](https://console.seam.co/), click **ACS Systems**.

    <figure><img src="broken-reference" alt="Click ACS Systems to go to the Access Systems page."><figcaption><p>Click ACS Systems to go to the Access Systems page.</p></figcaption></figure>
2.  On the **Access Systems** page, click **New Access System**.

    Seam Console displays a Connect Webview that enables you to connect a virtual ACS to Seam.
3. In the Connect Webview, authorize the connection.
   1. Click **Continue**.
   2. If the Connect Webview displays multiple brand options, click **Visionline**.
   3.  On the **Set up your Seam Bridge** page, click **Continue**.

       [Seam Bridge](../../../../../capability-guides/seam-bridge.md) is a software-only component that enables you to connect on-premises software systems to the Seam platform. Because Visionline is an on-premises ACS, Seam Bridge is required for real Visionline systems. However, this option uses a virtual Visionline ACS, so you do not need to install Seam Bridge.
   4. On the **Set up your Seam Bridge** page, click **Submit**.
   5. On the **Enter your credentials** page:
      1. In the **Visionline Site Name** field, type any string to identify this virtual Visionline ACS site, for example, `My Visionline Site`.
      2. In the **Username** field, type `jane`.
      3. In the **Password** field, type `1234`.
      4. Click **Submit**.
   6. Click **Close**.

The **Access Systems** page now displays the newly-connected virtual Visionline access control system.
