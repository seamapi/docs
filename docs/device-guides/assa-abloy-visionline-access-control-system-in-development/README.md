# Assa Abloy Visionline (Access Control System) - In Development

## Overview

Seam integrates seamlessly with the Assa Abloy Visionline access system, a widely-used on-premise control platform for hotels. This system supports doors, elevators, turnstiles, and gates, allowing you to secure either a single building or multiple buildings using the same setup. Visionline employs a data-on-card platform, significantly reducing installation costs as the locks can function offline. Additionally, the system's capability to operate independently of network connectivity enhances its reliability and flexibility.

***

## Supported Devices

This integration supports all readers, and wireless locks connected to the Visionline platform.

We support the following features:

* [Managing access systems](../../products/access-systems/)
* [Issuing mobile access credentials](../../products/mobile-access-in-development/)

***

### Device Provider Key

To create a [Connect Webview](../../core-concepts/connect-webviews/) that enables you to connect your Visionline access system to Seam, include the `visionline` [device provider key](../../api-clients/connect-webviews/#device-provider-keys) as the `selected_provider` or in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Setup Instructions

1. Login to the Visionline application, take a note of the user name and password.
   * Optionally, you may add a new user and use their username and password instead.
2. Make sure you set up a Mobile Access Account so that you can issue mobile credentials. If you've set up your mobile access account, skip to step 4.
3. To set up your Mobile Access account in Visionline:
   * In the left navigation, click on "Lists" in the bottom left corner.
   * Under "System setup", click on "Mobile Access", "Mobile Access", and then "New".
   * On account details, Server screen, enter the connection details received from Assa Abloy. Note that in a real hotel, these parameters are wrapped and applied via an ‘Option Code’ (i.e. a license string) and are not directly entered.
4. To retrieve your "System ID":
   * In the left navigation, click on "Lists" in the bottom left corner.
   * Under "System setup", click on "Mobile Access".
   *   Select the configured mobile access account, Server screen, and write down the "System ID".\


       <figure><img src="../../.gitbook/assets/Screen Shot 2023-12-22 at 5.05.19 PM.png" alt=""><figcaption><p>Copy down the "System ID" from the Mobile Access account.</p></figcaption></figure>
5. Create a Connect Webview with "`visionline`" set as the accepted provider.
6. Within the Connect Webview, if presented with multiple brand options, select "Visionline".
7.  Select your Seam Bridge that is connected to the Visionline system you're trying to connect to in the following screen:

    <figure><img src="../../.gitbook/assets/image (8).png" alt="" width="240"><figcaption></figcaption></figure>
8. Use the following values to complete the the [Seam Connect Webview](../../core-concepts/connect-webviews/) to add your Assa Abloy Credential Services account to Seam:
   * Username and Password from log in.
   * Local IP address of the on-premise computer, i.e. "`192.168.0.10`".
   * (Coming soon!) System ID of your Visionline instance.
9. Click "Submit".

<figure><img src="../../.gitbook/assets/image (7).png" alt="" width="330"><figcaption></figcaption></figure>

{% hint style="info" %}
When connecting a Visionline Access System in your sandbox test envrionment, you can use the following test credentials:\
[https://docs.seam.co/latest/device-guides/sandbox-and-sample-data/assa-abloy-visionline-access-management-system-sample-data](https://docs.seam.co/latest/device-guides/sandbox-and-sample-data/assa-abloy-visionline-access-management-system-sample-data)
{% endhint %}

***

## Where to Order

To purchase the Assa Abloy Visionline access system and devices, request a quote from Assa Abloy.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Assa Abloy Contact Page</strong></td><td></td><td><a href="https://www.assaabloyglobalsolutions.com/en/about/local-contacts">https://www.assaabloyglobalsolutions.com/en/about/local-contacts</a></td><td><a href="../../.gitbook/assets/image (1).png">image (1).png</a></td></tr></tbody></table>

***

