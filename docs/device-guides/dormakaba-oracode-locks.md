---
description: Guide for using dormakaba Oracode locks with Seam
---

# dormakaba Oracode Locks

## Overview

Seam integrates with the dormakaba [Oracode Live](https://www.dormakaba.com/us-en/offering/products/vacation-short-term-rental-solutions/access-control-management/oracode-live--ka\_128503) access control management platform. Intended for the vacation and short-term rental industries, the Oracode Live platform supports a "no keys, no cards" concept for efficient and secure access. Further, with the Oracode Live platform, codes expire automatically at the end of the authorized period.

In addition, the Seam integration supports the generation of [offline access codes](../products/smart-locks/access-codes/offline-access-codes.md) for dormakaba Oracode locks that do not have Wi-Fi capabilities.

You can use a variety of dormakaba Oracode smart locks with the Oracode Live platform. These strong and durable locks have commercial-grade finishes to withstand a wide range of climates.&#x20;

***

## Supported Devices

This integration supports all locks connected using the [Oracode Live](https://www.dormakaba.com/us-en/offering/products/vacation-short-term-rental-solutions/access-control-management/oracode-live--ka\_128503) platform. In addition, this integration supports a wider set of dormakaba Oracode devices for offline access code provisioning.

### Offline Access Code Support

This integration supports the generation of offline access codes for dormakaba Oracode lock models that do not have Wi-Fi capabilities. You generate offline access (PIN) codes remotely, and the manufacturer maintains a server-based registry of synchronized encryption keys (tokens) to enable these offline codes. Then, owners or managers can share these codes with users through messaging or other similar applications, and the users do not need to install a special application to unlock the device.

To learn about the special requirements regarding offline access codes for dormakaba Oracode locks, see [Offline Access Code Requirements](dormakaba-oracode-locks.md#offline-access-code-requirements). For more information about using offline access codes, see [Offline Access Codes](../products/smart-locks/access-codes/#offline-access-codes).

{% @seam-gitbook-plugin-v2/seam-component content="<seam-supported-device-table
  endpoint="https://connect.getseam.com"
  client-session-token="seam_cst126DAjfor_2kxn8QAAEUkj3Zu4Nr1Aoauy"
  manufacturers="Dormakaba=bb56ed21-a593-4116-a969-959396819638"
/>" %}

We support the following features:

* [Programming access codes](../products/smart-locks/access-codes/)

{% hint style="info" %}
When programming permanent codes on Oracode locks, these PIN codes are rotated every 30 days. When the code changes, Seam issues an `access_code.changed` event with the new PIN code. For details about this event, see [Event Types](../api-clients/events/#event-types).
{% endhint %}

***

### Device Provider Key

To create a [Connect Webview](../core-concepts/connect-webviews/) that enables your users to connect their dormakaba Oracode devices to Seam, include the `dormakaba_oracode` [device provider key](../api-clients/connect-webviews/#device-provider-keys) as the `selected_provider` or in the `accepted_providers` list. For more information, see [Customize the Brands to Display in Your Connect Webview](../core-concepts/connect-webviews/customizing-connect-webviews.md#customize-the-brands-to-display-in-your-connect-webviews).

***

## Offline Access Code Requirements

Seam supports daily-bound and hourly-bound [offline access codes](../products/smart-locks/access-codes/offline-access-codes.md) for dormakaba Oracode locks. Note the following dormakaba Oracode-specific restrictions and requirements for offline access codes:

### Duration

The duration limit for a dormakaba Oracode offline access code is 31 consecutive days.

### Deletion and Access Code Limits

You cannot delete dormakaba Oracode offline access codes. Consequently, it is important to be aware of device- and installation-specific access code limits, especially if you plan to create large numbers of codes simultaneously. For more information about these limits, see the user manual for your dormakaba Oracode lock or contact your dormakaba Oracode support representative.

### User Levels

dormakaba Oracode locks use pre-programmed sets of access code time slots called "user levels" or "user prefixes." All the access codes in a specific user level have the same prefix, for example, `123` in `123456789` and `123987654`. Further, all access codes in a specific user level use the same configuration for the following characteristics:

* Check in and check out time
* Whether the access code is a one-time-use code
* Whether the access code is daily-bound (`is_24_hour`)
* Whether the access code is a biweekly code (that is, a code that is valid for two weeks)
* Whether the access code is a master code that exists indefinitely, for example, for site owners

When you create a dormakaba Oracode offline access code, you must set the duration of the code to match—exactly—one of the time slots on the device. To view a list of all available time slots for a specific device, [get the lock](../api-clients/locks/get-lock.md) and view the `device.properties.dormakaba_oracode_metadata.predefined_time_slots` property for the device.

```json
"predefined_time_slots": [
  {
      "name": "Guest RCI D 3:30pm-10:30am",
      "prefix": 0,
      "is_master": false,
      "is_24_hour": false,
      "is_one_shot": false,
      "check_in_time": "15:30:00[PST8PDT]",
      "check_out_time": "10:30:00[PST8PDT]",
      "is_biweekly_mode": false,
      "dormakaba_oracode_user_level_id": "f23721ec-6dce-4c54-8971-40d58449a366",
      "ext_dormakaba_oracode_user_level_prefix": 0
  },
  ...
]
```

### Time Zones

All time zone configuration and display for dormakaba Oracode locks occur in the local time zone of the lock, itself. Consequently, when you configure an access code for a dormakaba Oracode lock, you must set the starting and ending times to match the relative local time zone of the lock. Note that the `starts_at` and `ends_at` properties use a time zone offset, rather than a time zone. Further, we recommend specifying all times as UTC times. In this case, the UTC time that you specify must be equivalent to the desired local time of the device.

To view the local time zone of a dormakaba Oracode lock, [get the lock](../api-clients/locks/get-lock.md) and see the `check_in_time` and `check_out_time` within each time slot in the `device.properties.dormakaba_oracode_metadata.predefined_time_slots` property for the device. You can also see the local time zone for a dormakaba Oracode lock in the `dormakaba_oracode_device_metadata.iana_timezone` property.

### Master Codes

Seam does not currently support dormakaba Oracode master offline access codes.

### One-Time-Use Codes

Seam does not currently support dormakaba Oracode one-time-use offline access codes.

***

## Setup Instructions

To control dormakaba Oracode devices using Seam, you must prompt owners of these devices to perform the following steps:

1. Obtain the credentials that you use to log in to your [Oracode Live account](https://www.kabaecodewireless.com).
2. Use these credentials to log in to the [Seam Connect Webview](../core-concepts/connect-webviews/) to add your dormakaba Oracode devices to Seam.

***

## Where to Order

To purchase dormakaba Oracode devices, contact the dormakaba Sales team using the dormakaba **Contact** page or order Oracode Live locks from GoKeyless.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td></td><td><strong>dormakaba Contact Page</strong></td><td></td><td><a href="https://www.dormakaba.com/us-en/contact">https://www.dormakaba.com/us-en/contact</a></td><td><a href="../.gitbook/assets/dormakaba-logo.png">dormakaba-logo.png</a></td></tr><tr><td></td><td><strong>GoKeyless</strong></td><td></td><td><a href="https://www.gokeyless.com/shop/advertised/oracode-i-series-locks/">https://www.gokeyless.com/shop/advertised/oracode-i-series-locks/</a></td><td><a href="../.gitbook/assets/gokeyless-logo.png">gokeyless-logo.png</a></td></tr></tbody></table>

***

