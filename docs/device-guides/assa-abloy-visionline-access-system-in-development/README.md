# Assa Abloy Visionline Access System (In Development)

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
2. On the Visionline application, click on "Devices", and then "Add".
3. Enter a name "Seam Bridge", select the type "Service device host", and enter an unused port number (i.e. "27015"), click "Save".
4. Create a Connect Webview with "visionline" set as an accepted provider.
5. Within the Connect Webview, if presented with multiple brand options, select "Visionline".
6.  Select your Seam Bridge in the following screen:



    <figure><img src="../../.gitbook/assets/image (8).png" alt="" width="359"><figcaption></figcaption></figure>
7. Use the following values to complete the the [Seam Connect Webview](../../core-concepts/connect-webviews/) to add your Visionline access system to Seam:
   * Username and Password from log in.
   * Local IP address of the on-prem computer, plus the port number `443`, i.e. "https://192.168.0.10:443".
8. Click "Submit".

<figure><img src="../../.gitbook/assets/image (7).png" alt="" width="330"><figcaption></figcaption></figure>

***

## Where to Order

To purchase the Assa Abloy Visionline access system and devices, request a quote from Assa Abloy.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Assa Abloy Contact Page</strong></td><td></td><td><a href="https://www.assaabloyglobalsolutions.com/en/about/local-contacts">https://www.assaabloyglobalsolutions.com/en/about/local-contacts</a></td><td><a href="../../.gitbook/assets/image (1).png">image (1).png</a></td></tr></tbody></table>

***

