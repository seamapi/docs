---
description: Use Seam's API to create users and assign them to storage rental units.
---

# PTI Storlogix Cloud

## Overview

This integration uses [Storlogix Cloud](https://ptisecurity.com/products/storlogixcloudplatform/) to create users, generate access PIN codes, and grant them access to different access areas within the facility.

***

## Supported Devices and Capabilities

Seam integrates with any site that has Storlogix Cloud installed. Through this integration, you can manage users and assign them access permissions via Seam's [Access Control System API](../products/access-systems/). This also enables you to generate access codes and key cards for the users.

To authorize a user, [add them to a `pti_access_level` access group](../products/access-systems/assigning-users-to-access-groups.md). If you wish to document that a user has rented a specific unit, include them in a `pti_unit` access group using the same endpoint. Note that certain access levels mandate a user be part of a `pti_unit` linked to that access area before they can enter those zones.

***

## Setup Instructions&#x20;

To connect your Storlogix site, Seam'll need the following information about your facility:

* Site Code
* Site Key
* Operator Username
* Operator Password
* Storlogix Cloud Dashboard URL

### If you have access to your Storlogix Cloud dashboard

1. Login to your Storlogix Cloud dashboard using your operator username and password.
2. Copy down the page URL for the page as the "Storlogix Cloud Dashboard URL". You can find the URL in the address bar located at the top of your web browser.
3. Click on the "three horizontal lines" icon on the top-left corner of the screen.
4. Click on "Operations" > "Company Info".
5. Go to the "Device Settings" tab.
6. Copy down the "Site Key" and "Site Code".
7. In the Seam Connect Webview, fill in the fields to connect your PTI System to Seam.

### If you don't have access to your Storlogix Cloud dashboard

If you're unsure of your Storlogix Cloud login credentials and the Dashboard URL, please reach out to the [PTI Security Systems Customer Support team](https://ptisecurity.my.salesforce-sites.com/apex/Support). They can assist in retrieving your login details. Have your PTI Support PIN or facility information ready when contacting a support agent.

{% hint style="warning" %}
Make sure that you acquire the appropriate credentials specifically for Storlogix Cloud dashboard access. You'll be able use those credentials to log in to your Storlogix Cloud dashboard.
{% endhint %}

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td></td><td><a href="https://ptisecurity.my.salesforce-sites.com/apex/Support"><strong>PTI Security Systems Customer Support</strong></a></td><td></td><td><a href="../.gitbook/assets/Screen Shot 2023-08-24 at 2.49.11 PM.png">Screen Shot 2023-08-24 at 2.49.11 PM.png</a></td><td><a href="https://ptisecurity.my.salesforce-sites.com/apex/Support">https://ptisecurity.my.salesforce-sites.com/apex/Support</a></td></tr></tbody></table>

***

## Brand-Specific Warnings

`user.pti_access_level_not_assigned` - A PTI user needs to be assigned to an Access Level before their access credentials can be used to enter the site.

***

## Where to Order

To connect with a local PTI Systems installer, please contact the [PTI Systems sales team](https://ptisecurity.com/contact-us-sales/). You can find their contact information on [their website](https://ptisecurity.com/contact-us-sales/).



<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><a href="https://ptisecurity.com/contact-us-sales/"><strong>PTI Security Systems Sales</strong></a></td><td></td><td><a href="https://ptisecurity.com/contact-us-sales/">https://ptisecurity.com/contact-us-sales/</a></td><td><a href="../.gitbook/assets/Screen Shot 2023-08-24 at 2.46.02 PM.png">Screen Shot 2023-08-24 at 2.46.02 PM.png</a></td></tr></tbody></table>
