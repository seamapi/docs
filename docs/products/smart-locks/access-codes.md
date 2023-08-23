---
description: >-
  Access codes are codes for keypad or pinpad devices. These are used when you
  want to give someone the ability to enter a room through a smart lock or
  intercom by typing a 4-8 digit code.
---

# Access Codes

<figure><img src="../../.gitbook/assets/code_unlock.gif" alt=""><figcaption></figcaption></figure>

## What is an Access Code?

An Access Code is a code used for a keypad or pinpad device. You can tell Seam to create an Access Code on a device, when it should be set, and optionally the code you would like to set. Seam will then make sure that the code is present on the device at the specified time (or, for ongoing codes, make sure it is set until you remove it)

There are two types of codes:

* **ongoing**: This is the default access code that is created if you don't specify any options other than the `device_id`. This code will be set on the device and Seam will ensure it is set until you explicitly remove it (with `/access_codes/delete`).
* **time\_bound**: Time Bound codes are codes where you provide a `starts_at` or `ends_at` time. The code will be added to the device at the `starts_at` time and removed at the `ends_at` time.

## Native Scheduling

Native Scheduling is a Seam access code feature that preloads an access code into a smart lock's internal memory, and then use the device's internal clock to activate/deactivate the code at a later date. Native Scheduling improves access code reliability for `time_bound` codes and is enabled by default for all providers that support it (see supported provider table below).

With Native Scheduling, Seam preload access codes into the device **72 hours ahead** of the `starts_at` time of a `time_bound` code. When the `starts_at` time arrives, the code automatically becomes active until the `ends_at` timestamp.&#x20;

<figure><img src="../../.gitbook/assets/device-native-scheduling-illustration (3).png" alt=""><figcaption><p>72 hours before the <code>starts_at</code> timestamp, Seam inserts the code into the device's internal memory. When the <code>starts_at</code> time arrives, the device automatically activates the code. It is then automatically deactivated at the <code>ends_at</code> timestamp.</p></figcaption></figure>

When a provider does not support Native Scheduling, Seam will use its own scheduling infrastructure to explicitly set and remove the code at the `starts_at` and `ends_at` times. You can choose to override this default behavior, and always have Seam perform the scheduling by setting `prefer_native_scheduling` to `false` when creating the code.

#### Native Scheduling — Supported Providers

| ✅ Supported | ✖️ Not Supported |
| ----------- | ---------------- |
| 2N          | Hubitat          |
| August      | Lockly           |
| Igloohome   | Nuki             |
| Kwikset     | SmartThings      |
| Salto       |                  |
| Schlage     |                  |
| TTLock      |                  |
| Yale        |                  |

## Backup Access Codes

A backup access code is preprogrammed onto a device prior to the time of reservation. It is guaranteed to work. Backup access codes are essential for any robust integration with Seam. We recommend maintaining a healthy pool of backup access codes for each device that can be pulled whenever there is an issue with a device. Common issues include: intermittent connectivity issues, access codes being removed through manual interaction with a device, or device provider outages. Seam provides a hardened backup access code pool implementation you can [opt into when creating access codes](https://docs.seam.co/latest/api-clients/access-codes/create-an-access-code).

## Lifecycle of an Access Code

{% hint style="warning" %}
Seam is altering the behavior of access codes to never 404 unless the API user explicitly requests the deletion. At the moment, access codes will 404 if they are removed from a device, e.g. when a `time_bound` access code expires.
{% endhint %}

Access codes go through the following statuses. You can inspect the status by looking at `access_code.status`

* **unset**: Code is not in active time range, for ongoing codes it's never in this state
* **setting**: Code in active time range, Seam is contacting third party API
* **set**: Seam has confirmed the code is set on the device
* **removing:** Seam is contacting the third party API to remove the access code
* **unknown**: An account is disconnected and Seam cannot access the third party API to check the access code
* **404**: Seam has confirmed the code is not on the device, the access code is deleted in both Seam and the third party API

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Lifecycle of Access Codes with Transition Arrows</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Untitled-2022-09-07-1822.png" alt=""><figcaption><p>Logic that determines status of access code</p></figcaption></figure>

## Relationship between Action Attempts and Access Codes

{% hint style="warning" %}
Action Attempts are currently required for retrieving access codes from some endpoints like `/access_codes/create` and `/access_codes/update`, but in the future we will return access codes directly from these endpoints and recommend polling the Access Code state, because it gives more granular state information which are appropriate in more scenarios.
{% endhint %}

An Action Attempt represents Seam attempting to set the Access Code on the third party service. This means that Action Attempts for `time_bound` codes will not change their status to `success` and give the `result` containing the `access_code` until the `starts_at` time.