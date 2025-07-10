---
description: Learn how to configure your Visionline ACS for integration with Seam.
---

# Visionline ACS Setup Instructions

Seam's Visionline ACS integration enables you to create the following two types of applications:

* Apps that issue and encode Visionline plastic cards
* Mobile apps that issue Visionline mobile keys

{% hint style="info" %}
For information about Seam mobile keys, see [Mobile Access](../../../capability-guides/mobile-access/).
{% endhint %}

Integrating Visionline with Seam consists of a development phase and a production phase. The setup processes and requirements differ between these two phases.

This topic provides the following process overviews with links to complete instructions:

* [Developing and Launching a Plastic Card Encoding Solution](./#developing-and-launching-a-plastic-card-encoding-solution)
  * [Develop a Plastic Card Encoding App Using a Real Visionline Server](./#develop-a-plastic-card-encoding-app-using-a-real-visionline-server)
  * [Develop a Plastic Card Encoding App Using a Sandbox Workspace](./#develop-a-plastic-card-encoding-app-using-a-sandbox-workspace)
  * [Launch Your Visionline Plastic Card Encoding App](./#launch-your-visionline-plastic-card-encoding-app-to-a-live-visionline-system)
* [Developing and Launching a Mobile Key Solution](./#developing-and-launching-a-mobile-key-solution)
  * [Develop Your Visionline Mobile Key App](./#develop-your-visionline-mobile-key-app)
  * [Launch Your Visionline Mobile Key App](./#launch-your-visionline-mobile-key-app)

***

## Developing and Launching a Plastic Card Encoding Solution

The following sections describe the major steps of the setup process for developing and launching a plastic card encoding solution:

### Develop a Plastic Card Encoding App Using a Real Visionline Server

1.  Install your Visionline application using your development account.

    Contact Seam at [support@seam.co](mailto:support@seam.co) to obtain access.
2. Configure Visionline and set it up to work with plastic cards.
   1. Unblock the required ports.
   2. Make sure that Visionline is configured with an appropriate user account.
   3. Buy and install a [Visionline card encoder](https://estore.assaabloyglobalsolutions.com/no/marine/rfid-encoder-updater-complete.html) and then connect it to your Visionline server.
   4. Set up all door locks.
   5. Use Lock Service 3G to program the door locks.
3.  Create a Seam production workspace.

    You can continue to use this workspace in your production phase as well.
4.  Connect your Visionline development account to Seam.

    This step includes installing and running Seam Bridge to connect your on-premises Visionline application to Seam.

For detailed instructions, see [Developing Your Visionline Plastic Card Encoding App Using a Real Visionline Server](developing-and-launching-your-visionline-plastic-card-encoding-app/developing-your-visionline-plastic-card-encoding-app-using-a-real-visionline-server/).

***

### Develop a Plastic Card Encoding App Using a Sandbox Workspace

1. Create a sandbox workspace.\
   A sandbox workspace enables you to develop and test your app using Seam-provided virtual systems and devices.
2. Connect the virtual Visionline ACS to Seam.

For detailed instructions, see [Developing Your Visionline Plastic Card Encoding App Using a Sandbox Workspace](developing-and-launching-your-visionline-plastic-card-encoding-app/developing-your-visionline-plastic-card-encoding-app-using-a-sandbox-workspace/).

***

### Launch Your Visionline Plastic Card Encoding App to a Live Visionline System

1. Confirm that your production Visionline site meets the system requirements.
2. Make sure that Visionline is configured with an appropriate user account.
3. Purchase the required Callback option from ASSA ABLOY and import it into Visionline.
4.  Connect your Visionline production account to Seam.

    Either create a new production workspace or use your existing production workspace.\
    This step also includes installing Seam Bridge.

For detailed instructions, see [Launching Your Visionline Plastic Card Encoding App](developing-and-launching-your-visionline-plastic-card-encoding-app/launching-your-visionline-plastic-card-encoding-app-to-a-live-site/).

***

## Developing and Launching a Mobile Key Solution

The following sections describe the major steps of the setup process for developing and launching a mobile key solution:

### Develop Your Visionline Mobile Key App

1. Sign up for and complete the ASSA ABLOY mobile development course.
2. Install your Visionline app.
3. Configure Visionline using your development account.
   1. Unblock the required ports.
   2. Make sure that Visionline is configured with an appropriate user account.
   3. Set up your Credential Services account in the Visionline application.
   4. Configure the mobile access UUID in the Visionline application.
   5. Set up all door locks with Bluetooth low energy (BLE) profiles.
   6. Use Lock Service 3G to program the door locks.
4.  Create a Seam production workspace.

    You can continue to use this workspace in your production phase as well.
5.  Connect your Visionline site to Seam using your Visionline development account.

    This step includes installing and running Seam Bridge to connect your on-premises Visionline application to Seam.

    1. Also, add your Visionline development application ID in Seam Console.

For detailed instructions, see [Developing Your Visionline Mobile Key App](developing-and-launching-your-visionline-mobile-key-app/developing-your-visionline-mobile-key-app/).

***

### Launch Your Visionline Mobile Key App

1. Pass the ASSA ABLOY certification process.
2. Confirm that your production Visionline site meets the system requirements.
3. Configure all door locks for use with mobile keys.

{% hint style="info" %}
```
This process can be quite time-consuming because it requires interaction with all locks.
```
{% endhint %}

```
1. Make sure that the BLE module is installed on all locks.
2. Set up all door locks with BLE profiles.
3. Use Lock Service 3G to program all locks.
```

4\. Configure Visionline using your production account.

1. Make sure that Visionline is configured with an appropriate user account.
2. Purchase the following required options from ASSA ABLOY and import them into Visionline:
   * Callback options
   * Mobile Service option with your tenant account
3.  Connect your Visionline production instance to Seam.

    Either create a new production workspace or use your existing production workspace.

    This step also includes installing Seam Bridge and adding your Visionline application ID in your workspace.

For detailed instructions, see [Launching Your Visionline Mobile Key App](developing-and-launching-your-visionline-mobile-key-app/launching-your-visionline-mobile-key-app/).
