---
description: Guide for using the Dormakaba Ambiance Access Control System with Seam
---

# Dormakaba Ambiance Access Control System

***

## Overview

Connect Dormakaba Ambiance to Seam to automate guest access with mobile keys, plastic cards, and Apple Wallet. Seam gives you one API to plug Ambiance into your PMS or hospitality platform.

Seam handles the full guest key lifecycle. It issues mobile, card, or wallet keys automatically and expires them at checkout to keep access secure.

When a reservation changes, Seam updates Ambiance in real time. Reservation updates flow straight to Ambiance, ensuring guests always get the key that matches their stay.

***

## Key Benefits

* Automated access – Issue Bluetooth, card, or wallet-based keys without manual steps.
* Secure credentials – Set keys to automatically expire after move-out or visit end.
* Faster move-ins – Seam creates guest profiles and provisions credentials directly from your PMS.
* Streamlined visitor access – Provide visitors with instant, temporary mobile keys that expire automatically.
* Reduced overhead – Eliminate manual key management while improving the guest experience.

***

## Supported Devices

This integration supports all wireless locks and readers connected to the Dormakaba Ambiance system.

***

## Related Features

* [**Access Grants**](../../capability-guides/access-grants/reservation-access-grants.md) – The universal way to manage access in Seam. Integrate once, and your access model works consistently across all providers, including Dormakaba Ambiance. For advanced, low-level control, you can still work directly with the ACS API.
* [**Mobile Keys**](../../capability-guides/mobile-access/) – Provision and revoke Bluetooth and wallet-based credentials directly from your PMS or app.
* [**Instant Keys**](../../capability-guides/instant-keys/) - Instantly issue temporary mobile pass that is shareable via an email or text.
* [**Plastic Card Encoding**](../../api/acs/encoders/encode_credential.md) – Encode and issue physical access cards using Seam’s card management API.

***

### Device Provider Key

To create a [Connect Webview](../../core-concepts/connect-webviews/) that enables you to connect your Ambiance ACS to Seam, include the `dormakaba_ambiance` device provider key in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Brand-Specific Restrictions

Note the following restrictions on the Ambiance system:

* Dormakaba Ambiance locks do not support remote web unlock. Unlock operations must occur through a mobile app or using a plastic card.

***

## Where to Order

To purchase the Dormakaba Ambiance access system, locate an installer near the property.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><strong>Certified Installers Page</strong></td><td>Find an installer for Ambiance products at your property.</td><td></td><td><a href="https://www.dormakaba.com/us-en/certified-installers">https://www.dormakaba.com/us-en/certified-installers</a></td><td><a href="../../.gitbook/assets/ambiance.png">ambiance.png</a></td></tr></tbody></table>
