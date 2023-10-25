---
description: Guide for using the Brivo Access platform with Seam
---

# Brivo Access

## Overview

Seam integrates with Brivo Access, which is an access control platform for applications ranging from small, single-site facilities to multi-site commercial enterprises and multifamily residential properties. Brivo produces readers and control panels. In addition, through these Brivo control panels, the Brivo Access platform integrates with a variety of wireless smart locks, including Allegion, ASSA ABLOY Aperio, Z-Wave, and Salto.

***

## Supported Devices

This integration supports all [readers](https://www.brivo.com/products/smart-readers/), [control panels](https://www.brivo.com/products/control-panels/), and [wireless smart locks](https://www.brivo.com/products/smart-locks/) connected to the Brivo Access platform. Brivo control panels also integrate with any Wiegand or Open Supervised Device Protocol (OSDP) readers.

The Brivo Access platform supports the following wireless locks:

<table><thead><tr><th width="210">Lock Brand</th><th>Integration Description</th></tr></thead><tbody><tr><td><a href="https://resources.brivo.com/data-sheets/allegion-ndele-wireless-locks-data-sheet">Allegion</a></td><td>Brivo partners with Allegion to provide AD Series, LE, NDE, and Control® wireless locks for multifamily and commercial real estate uses.</td></tr><tr><td><a href="https://resources.brivo.com/data-sheets/assa-abloy-wireless-locks-data-sheet">ASSA ABLOY Aperio™</a></td><td>Brivo provides a variety of ASSA ABLOY Aperio locks for small, medium, and enterprise uses.</td></tr><tr><td><a href="https://www.brivo.com/lp/request-consultation">Z-Wave</a></td><td>Brivo provides a variety of Z-Wave-supported locks for multifamily residential doors connected to the <a href="https://www.brivo.com/products/smart-home/">Brivo Smart Home</a>.</td></tr><tr><td><a href="https://www.brivo.com/lp/request-consultation">Salto</a></td><td>Brivo supports various Salto wireless locks.</td></tr></tbody></table>

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers="Brivo=edcd4e38-a066-4502-be95-364fc54787ae"
/>" %}

We support the following features:

* [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../products/smart-locks/access-codes/) for readers and locks that have a keypad
* [Managing access systems](../products/access-systems/)

***

## Setup Instructions

1.  Use the **Brivo API Service Access Authorization Agreement Form** to ask your Brivo vendor to enable API access.

    When completing this form, supply the following information:

    * In the **Which solution(s) will be using the API?** field, type `Seam`.
    * In the **If applicable, please provide the Developer Account Username** field, type `seamapi`.

    <figure><img src="../.gitbook/assets/brivo-api-service-access-auth-agreement-form.png" alt="Brivo API Service Access Authorization Agreement Form" width="563"><figcaption></figcaption></figure>
2. This form must be signed by an active administrator on your account and a representative from the Brivo vendor.\
   Brivo then provides the API key to you securely.
3. Specify this API key in the [Seam Connect Webview](../core-concepts/connect-webviews.md) to add your Brivo devices to Seam.

***

## Where to Order

Contact the Brivo Sales team using the contact information on the Brivo **Contact Us** page.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>Brivo Contact Us Page</strong></td><td></td><td><a href="https://www.brivo.com/about/contact-us/">https://www.brivo.com/about/contact-us/</a></td><td><a href="../.gitbook/assets/brivo-logo.svg">brivo-logo.svg</a></td></tr></tbody></table>

***

