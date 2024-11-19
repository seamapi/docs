---
description: Guide for using August locks with Seam
---

# TESTING ADDING SEAM-SUPPORTED-DEVICE-TABLE VIA MARKDOWN

## Overview

August produces smart locks for the residential market. Seam integrates directly with the August Wi-Fi Smart Lock, as well as with additional August Smart Locks through the August Connect® Wi-Fi Bridge. In addition, Seam supports the August Smart Keypad accessory.

Each August lock attaches to an existing deadbolt, replacing only the lock component on the inside of a door. Consequently, August locks do not change the exterior of locks, and the existing physical keys still work with installed August locks.&#x20;

---

## Supported Devices

This integration supports all August Smart Lock models that are connected to Wi-Fi, either through built-in Wi-Fi or using the [August Connect Wi-Fi Bridge](https://august.com/products/august-connect). Seam also supports the addition of the optional [August Smart Keypad](https://august.com/products/august-smart-keypad) to enable entering access codes to control the lock.

<figure><img src="../.gitbook/assets/august-smart-locks.png" alt="August Smart Locks" width="563"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/august-accessories.png" alt="August accessories" width="563"><figcaption></figcaption></figure>

The following table details the requirements for compatibility with this Seam integration:

<table><thead><tr><th width="187.33333333333331">Product Models</th><th>Compatibility</th><th>Accessories</th></tr></thead><tbody><tr><td><a href="https://august.com/products/august-wifi-smart-lock">Wi-Fi Smart Lock</a></td><td>Compatible</td><td><ul><li>Smart Keypad (optional)</li></ul></td></tr><tr><td><a href="https://august.com/products/august-smart-lock-pro-connect">Smart Lock Pro</a></td><td>Compatible only with Connect Wi-Fi Bridge</td><td><ul><li>Connect Wi-Fi Bridge</li><li>Smart Keypad (optional)</li></ul></td></tr><tr><td><a href="https://august.com/products/august-smart-lock-connect">Smart Lock</a></td><td>Compatible only with Connect Wi-Fi Bridge</td><td><ul><li>Connect Wi-Fi Bridge</li><li>Smart Keypad (optional)</li></ul></td></tr></tbody></table>

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
  user-identifier-key="c6e74334-eb31-4719-b679-d84cf1c07d9c"
  brands='["lockly"]'
/>" %}

---

# TEST

Seam supported device table copied from 2N PR and pasted into Markdown

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
  user-identifier-key="c6e74334-eb31-4719-b679-d84cf1c07d9c"
  brands='["my_2n"]'
/>" %}

Seam supported device table copied from directly above, pasted into Markdown, and changed "my_2n" to "august"

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
  user-identifier-key="c6e74334-eb31-4719-b679-d84cf1c07d9c"
  brands='["august"]'
/>" %}

Working Seam supported device table copied from above in Markdown file and pasted into Markdown

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
  user-identifier-key="c6e74334-eb31-4719-b679-d84cf1c07d9c"
  brands='["august"]'
/>" %}

Working Seam supported device table copied from above in Markdown file, pasted into Markdown, and removed first line break

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table endpoint="https://connect.getseam.com"
  publishable-key="seam_pk1J0Bgui_oYEuzDhOqUzSBkrPmrNsUuKL"
  user-identifier-key="c6e74334-eb31-4719-b679-d84cf1c07d9c"
  brands='["august"]'
/>" %}

# END TEST

---

We support the following features:

- [Triggering web lock and unlock actions](../products/smart-locks/lock-and-unlock.md)
- [Programming access codes](../products/smart-locks/access-codes/) on locks that have an installed August Smart Keypad

---

## Setup Instructions

1. Create an account in the [August Home App](https://august.com/pages/app) if you have not done so already.
2. In the August Home App, add your August devices.
3. Note your login credentials for the August Home App, and use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews.md) to add your devices to Seam.

---

## Brand-Specific Errors

The following access code errors might appear for an August lock:

<table data-full-width="true"><thead><tr><th width="384">Error</th><th>Description</th></tr></thead><tbody><tr><td><code>august_device_programming_delay</code></td><td>August has acknowledged a request to program the code, but the access code has not yet been moved fully to the device. The device likely has an unstable internet connection. Seam continues to try to set the code on the device.</td></tr><tr><td><code>august_device_slots_full</code></td><td>All access code slots on the device are full.</td></tr><tr><td><code>august_lock_bad_access_code_format</code></td><td>The access code format is incorrect.</td></tr><tr><td><code>august_lock_missing_keypad</code></td><td>The August lock is missing a keypad.</td></tr><tr><td><code>august_lock_temporarily_offline</code></td><td>The August lock was temporarily offline while setting or removing a code. The code should be set removed when the lock comes back online.</td></tr></tbody></table>

---

## Where to Order

Order August locks and accessories directly from the August website or from Amazon.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>August</strong></td><td></td><td><a href="https://august.com/">https://august.com/</a></td><td><a href="../.gitbook/assets/august-logo.png">august-logo.png</a></td></tr><tr><td></td><td><strong>August Products on Amazon</strong></td><td></td><td><a href="https://amzn.to/3sVFNTl">https://amzn.to/3sVFNTl</a></td><td><a href="../.gitbook/assets/august-on-amazon.png">august-on-amazon.png</a></td></tr></tbody></table>

---
