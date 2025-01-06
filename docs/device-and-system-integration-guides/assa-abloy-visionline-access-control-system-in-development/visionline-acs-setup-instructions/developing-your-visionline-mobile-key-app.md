---
description: >-
  Learn how to integrate with Seam to develop and test your mobile app to issue
  mobile keys for Visionline.
---

# Developing Your Visionline Mobile Key App

To develop a mobile app to issue mobile keys for Visionline:

## 1. Complete the ASSA ABLOY Mobile Access course

Sign up for and take the mandatory ASSA ABLOY Mobile Access course. For details, send an email to either of the following addresses:

* [mobile.access.globalsolutions@assaabloy.com](mailto:mobile.access.globalsolutions@assaabloy.com)
* [onboardingprogram@assaabloy.com](mailto:onboardingprogram@assaabloy.com)

As part of this course, ASSA ABLOY provides you with the following items:

* Demo lock
* Demo Visionline instance
* Demo [ASSA ABLOY Credential Services](../../../device-guides/assa-abloy-credential-services-credential-manager-in-development.md) account

Note that the course shows you how to install and set up the demo Visionline instance.

***

## 2. Set up your demo Visionline instance for use with Seam

To develop your app, you must use the demo Visionline instance that ASSA ABLOY has provided to you.

To set up your demo Visionline instance to integrate with Seam:

1.  Install your demo Visionline instance on a Windows computer.\
    Make sure that your server and client meet the following requirements:

    * Key server:
      * Visionline V1.27.0.29 (or newer)
      * Windows 10 1901 (or newer)
      * Hosted in a location where internet traffic is allowed
    * ASSA ABLOY online locks:
      * Bluetooth modules and licenses installed

    For more details, see the following ASSA ABLOY Visionline document:

{% file src="../../../.gitbook/assets/VisiOnline Server Client and DCOM Port Requirements.pdf" %}

2. Unblock the following ports on the server:
   * All files in the Visionline `Program Files` and `ProgramData` folders\
     The default locations are `C:\Program Files\ASSA ABLOY\VisiOnline` and `C:\ProgramData\ASSA ABLOY\VisiOnline`.
   * Firewall ports:
     * Port 135 (TCP)
     * 3001 (TCP)
     * 7799, 7788 (TCP/UDP)
     * Lock Service Port (27015 default) (TCP)
     * PMS port (4000 default) (TCP)
3. Unblock the following ports on the client:
   * All files in the Visionline `Program Files` and `ProgramData` folders\
     The default locations are `C:\Program Files\ASSA ABLOY\VisiOnline` and `C:\ProgramData\ASSA ABLOY\VisiOnline`.
   * Firewall ports
     * Port 135 (TCP)
     * 3001 (TCP)
     * DCOM ports
4. Set up your Credential Services account in the Visionline application.
   * At the bottom of the left navigation pane in the Visionline application, click **Lists > Mobile Access Accounts**.
   * Click **Add**.
   * Enter your credentials.
   * Click **Test** to verify these credentials.
5. Set up all door locks with Bluetooth low energy (BLE) profiles and then use Lock Service 3G to program the door locks with the settings from Visionline.\
   For instructions, see [Setting up Door Locks for Visionline](setting-up-door-locks-for-visionline.md).
6. Make sure that your demo Visionline instance is configured with an appropriate user account.\
   You use this account to connect the Visionline instance with Seam.\
   You can use the default `sym` user and password.\
   Alternately, you can create a new user. This user must be configured as an operator that uses the System Manager operator template. This user must also have a password. For instructions, see [Creating a Visionline User for Seam](creating-a-visionline-user-for-seam.md).
7. [Add](../../../core-concepts/workspaces/#create-a-sandbox-workspace) a Seam [workspace](../../../core-concepts/workspaces/) for this development phase.
8. Identify the development credentials for your demo ASSA ABLOY Credential Services tenant account.\
   These credentials include a username and password, as well as your application ID for the development phase.\
   See [Retrieve Your ASSA ABLOY Development Credentials](../../../device-guides/assa-abloy-credential-services-credential-manager-in-development.md#retrieve-your-assa-abloy-development-credentials).
9.  Use a [Connect Webview](../../../core-concepts/connect-webviews/) to connect the demo ASSA ABLOY Credential Services tenant account to Seam.

    See the [ASSA ABLOY Credential Services setup instructions](../../../device-guides/assa-abloy-credential-services-credential-manager-in-development.md).
10. Add your development application ID in the Seam Console.
    * In upper-right corner of the [Seam Console](https://console.seam.co/), click your username and then select **Workspace Settings**.
    * On the **Workspace Settings** page, next to **Assa Abloy Settings**, click **Edit**.
    *   In the **Assa Abloy Settings** dialog, type or paste your application ID.\


        <figure><img src="../../../.gitbook/assets/assa-abloy-settings.png" alt="Specify your ASSA ABLOY application ID." width="375"><figcaption></figcaption></figure>
    * Click **Save**.
11. Install and run the [Seam Bridge](../../../capability-guides/seam-bridge.md) on the computer running the Visionline instance or on a computer on the same LAN.\
    See the [Seam Bridge installation instructions](../../../capability-guides/seam-bridge.md#installation-instructions).
12. Use a [Connect Webview](../../../core-concepts/connect-webviews/) to connect your demo Visionline instance to Seam.

    See [Connecting a Visionline Site to Seam](connecting-a-visionline-site-to-seam.md).

***

## 2. Develop and test your app

Learn about [Seam mobile access](../../../capability-guides/mobile-access/), as well as how to use the Seam API to perform the following tasks:

* [Create ACS users.](../../../products/access-systems/user-management.md#create-an-acs-user)
* [Use user identities to manage mobile credentials.](../../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md)
* [Issue mobile credentials for your Visionline ACS.](../credential-types/)
* [Use the Seam mobile SDKs to load credentials into your app.](../../../capability-guides/mobile-access/mobile-device-sdks/)

***

## Next Steps

[Obtain ASSA ABLOY certification for your mobile app.](obtaining-assa-abloy-certification-for-your-visionline-mobile-app.md)
