---
description: Guide for using the ASSA ABLOY Visionline Access Control System with Seam
---

# ASSA ABLOY Visionline Access Control System

## Overview

Seam integrates seamlessly with the [ASSA ABLOY Visionline Access Control System](https://www.assaabloyglobalsolutions.com/en/hospitality-solutions/access-management-systems-for-hotels#gw-group-text-and-media-14987d7731) (ACS), a widely-used on-premises access control platform for hotels. This system supports doors, elevators, turnstiles, and gates, enabling you to secure either a single building or multiple buildings using the same setup. Visionline uses a data-on-card platform, significantly reducing installation costs because the locks can function offline. Additionally, the capability of the system to operate independently of network connectivity enhances the reliability and flexibility.

***

## Supported Devices

This integration supports all readers and wireless locks connected to the Visionline ACS.

For detailed information about the ASSA ABLOY Visionline devices that Seam supports, see the following table and our [ASSA ABLOY Supported Devices page](https://www.seam.co/manufacturers/assa-abloy):

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
  user-identifier-key="c6e74334-eb31-4719-b679-d84cf1c07d9c"
  manufacturers='["Assa"]'
/>" %}

***

## Supported Features

We support the following features:

* [Managing access systems](../../products/access-systems/)
* [Issuing plastic card credentials](../../capability-guides/access-systems/managing-credentials.md#create-a-key-card-based-credential)
* [Issuing mobile access credentials](../../capability-guides/mobile-access/)

***

### Device Provider Key

To create a [Connect Webview](../../core-concepts/connect-webviews/) that enables you to connect your Visionline ACS to Seam, include the `visionline` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Brand-Specific Errors

For information about Visionline ACS-related errors, including issues related to the connection between your ACS and Seam, see [Troubleshooting Your ACS](../../capability-guides/access-systems/troubleshooting-your-access-control-system.md).

***

## Where to Order

To purchase the ASS ABLOY Visionline ACS and devices, request a quote from ASSA ABLOY.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>ASSA ABLOY Contact Page</strong></td><td></td><td><a href="https://www.assaabloyglobalsolutions.com/en/about/local-contacts">https://www.assaabloyglobalsolutions.com/en/about/local-contacts</a></td><td><a href="../../.gitbook/assets/assa-abloy-logo.png">assa-abloy-logo.png</a></td></tr></tbody></table>
