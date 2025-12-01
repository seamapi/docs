---
description: Guide for using the Dormakaba Community Access Control System with Seam
---

# Dormakaba Community Access Control System

<figure><img src="../../.gitbook/assets/dk comm (1).png" alt=""><figcaption></figcaption></figure>

***

## Overview

Connect your Dormakaba Community system to Seam to automate access and enable mobile credentials across your properties. Seam provides a single API and management layer, so you can integrate Community directly into your PMS, resident app, or hospitality platform.

This integration automates access for new visitors and residents, making it easy to issue Bluetooth mobile keys, encode cards, or deliver wallet-based keys without manual steps. Credentials can be set to automatically expire, keeping building access secure.

In multifamily settings, property managers often use this integration to streamline move-ins and guest access. When a new resident is added in your property management system, Seam can automatically create their profile in Dormakaba Community and provision the right credentials. Visitors can also be issued temporary mobile keys that work instantly and expire once their visit is over. This reduces operational overhead while creating a smoother, more welcoming experience for residents and guests.

{% hint style="info" %}
**Before you begin**

Follow the [Dormkaba Community Setup Guide](dormakaba-community-setup-guide.md) to configure your Community system settings and connect it to Seam.
{% endhint %}

***

## Key Benefits

* Automated access – Issue Bluetooth, card, or wallet-based keys without manual steps.
* Secure credentials – Set keys to automatically expire after move-out or visit end.
* Faster move-ins – Seam creates resident profiles and provisions credentials directly from your PMS.
* Streamlined visitor access – Provide visitors with instant, temporary mobile keys that expire automatically.
* Reduced overhead – Eliminate manual key management while improving the resident and guest experience.

***

## Supported Devices

This integration supports all wireless locks and readers connected to the Dormakaba Community system.

***

## Related Features

* [**Access Grants**](../../capability-guides/access-grants/reservation-access-grants.md) – The universal way to manage access in Seam. Integrate once, and your access model works consistently across all providers, including Dormakaba Community. For advanced, low-level control, you can still work directly with the ACS API.
* [**Mobile Keys**](../../capability-guides/mobile-access/) – Provision and revoke Bluetooth and wallet-based credentials directly from your PMS or app.
* [**Instant Keys**](../../capability-guides/instant-keys/) - Instantly issue temporary mobile pass that is shareable via an email or text.
* [**Plastic Card Encoding**](../../api/acs/encoders/encode_credential.md) – Encode and issue physical access cards using Seam’s card management API.

***

## Connecting Dormakaba Ambiance to Seam

To enable your users to [connect a Community system through Connect Webviews](../../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews), include the Dormakaba Community provider:

```json
{
  "accepted_providers": ["dormakaba_community"]
}
```

After the system admin completes the setup steps, they can enter their credentials into the Seam Connect form to complete the connection.

[→ See: Dormakaba Community Setup Guide](../lockly-locks/lockly-setup-guide.md)

***

## Brand-Specific Restrictions

Note the following restrictions on the Community system:

* Dormakaba Community locks do not support remote web unlock. Unlock operations must occur through a mobile app or using a plastic card.

***

## Where to Order

To purchase the Dormakaba Community access system, locate an installer near the property.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><strong>Connect your Dormakaba Community system to Seam</strong></td><td>Follow the setup guide to prepare your Dormakaba Community system and enable API access.</td><td><a href="dormakaba-community-setup-guide.md">dormakaba-community-setup-guide.md</a></td><td><a href="/broken/files/8ok3QS0mVbZ7KmKxRE1K">Broken link</a></td></tr><tr><td><strong>Certified Installers Page</strong></td><td>Find an installer for Community products at your property.</td><td><a href="https://www.dormakaba.com/us-en/certified-installers">https://www.dormakaba.com/us-en/certified-installers</a></td><td><a href="../../.gitbook/assets/Screenshot 2025-09-28 at 5.44.01 PM.png">Screenshot 2025-09-28 at 5.44.01 PM.png</a></td></tr></tbody></table>

***
