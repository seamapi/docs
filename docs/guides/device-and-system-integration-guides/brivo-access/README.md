---
description: Guide for using the Brivo Access platform with Seam
---

# Brivo Access

## Overview

Seam integrates with Brivo, which produces an access control platform for applications ranging from small, single-site facilities to multi-site commercial enterprises and multifamily residential properties. Brivo produces readers and control panels. In addition, through these Brivo control panels, the Brivo Access platform integrates with a variety of wireless smart locks, including Allegion, ASSA ABLOY Aperio, Z-Wave, and Salto.

***

## Supported Devices

This integration supports all [readers](https://www.brivo.com/products/smart-readers/), [control panels](https://www.brivo.com/products/control-panels/), and [wireless smart locks](https://www.brivo.com/products/smart-locks/) connected to the Brivo Access platform. Brivo control panels also integrate with any Wiegand or Open Supervised Device Protocol (OSDP) readers.

The Brivo Access platform supports the following wireless locks:

<table><thead><tr><th width="210">Lock Brand</th><th>Integration Description</th></tr></thead><tbody><tr><td><a href="https://resources.brivo.com/data-sheets/allegion-ndele-wireless-locks-data-sheet">Allegion</a></td><td>Brivo partners with Allegion to provide AD Series, LE, NDE, and Control® wireless locks for multifamily and commercial real estate uses.</td></tr><tr><td><a href="https://resources.brivo.com/data-sheets/assa-abloy-wireless-locks-data-sheet">ASSA ABLOY Aperio™</a></td><td>Brivo provides a variety of ASSA ABLOY Aperio locks for small, medium, and enterprise uses.</td></tr><tr><td><a href="https://www.brivo.com/lp/request-consultation">Z-Wave</a></td><td>Brivo provides a variety of Z-Wave-supported locks for multifamily residential doors connected to the <a href="https://www.brivo.com/products/smart-home/">Brivo Smart Home</a>.</td></tr><tr><td><a href="https://www.brivo.com/lp/request-consultation">Salto</a></td><td>Brivo supports various Salto wireless locks.</td></tr></tbody></table>

For detailed information about the Brivo-connected devices that Seam supports, see our [Brivo Supported Devices page](https://www.seam.co/manufacturers/brivo).

***

## Supported Features

We support the following features:

* [Triggering web lock and unlock actions](../../products/smart-locks/lock-and-unlock.md)
* [Programming access codes](../../products/smart-locks/access-codes/) for readers and locks that have a keypad
* [Managing access systems](../../products/access-systems/)

***

### Device Provider Key

To create a [Connect Webview](../../core-concepts/connect-webviews/) that enables you to connect your Brivo Access platform and devices to Seam, include the `brivo` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Next Steps

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><strong>Order Brivo Devices</strong></td><td>Submit a request on the Brivo Contact Us Page</td><td><a href="https://www.brivo.com/about/contact-us/">https://www.brivo.com/about/contact-us/</a></td><td><a href="../../.gitbook/assets/brivo-logo.png">brivo-logo.png</a></td></tr><tr><td><strong>Setup your Brivo account</strong></td><td>See this guide for how to connect your Brivo account with Seam</td><td><a href="brivo-access-setup-guide.md">brivo-access-setup-guide.md</a></td><td><a href="../../.gitbook/assets/setup tile.png">setup tile.png</a></td></tr></tbody></table>

***
