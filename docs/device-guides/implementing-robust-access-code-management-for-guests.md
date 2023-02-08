---
description: >-
  There are many pitfalls to implementing access codes due to real world
  constraints of devices.
---

# Implementing Robust Access Code Management for Guests

### Overview

Devices in homes frequently have issues receiving commands,

### Terminology

* Guest Access Code: The code sent to a guest in a message prior to their arrival
* Backup Access Code: A code given to a guest at the time of reservation
* Device Owner: The person or company that owns a lot and their operators or staff

### Common Problems

* A Guest Access Code isn't available at the time of reservation due to the lock being unable to connect to the network or it's hub
* A device can not be remotely unlocked due to a network error

### RECOMMENDED: On-Demand Backup Code Workflow

{% hint style="info" %}
Seam is introducing support for automatic backup codes in the future. For now, we still recommend implementing the workflow below.
{% endhint %}

We recommend the following system for issuing backup codes to guests.

* For every lock your Device Owner is using for guests, create a pool of 5 backup codes. Create the backup codes as `ongoing` codes so that they are programmed to the device immediately.
* Do not share the backup codes with the Device Owner or the guest (until there is an entry issue)
* When a guest is unable to open a lock, send them one of the backup codes from the backup access code pool.
* Set `ends_at` on the backup access code you sent to the guest to the time when the reservation ends
* At the end of the reservation the backup code will be unprogrammed from the device
* Replace the backup code that was used by creating a new backup code for the pool

{% hint style="info" %}
Having a pool of 5 access codes can allow you to continue issuing backup codes if the Device Owner is having trouble repairing the network for the lock.
{% endhint %}

{% hint style="info" %}
If you have several locks that should share the same code, use `common_code_key` for both the guest code _and_ the backup codes, this will give the guest a simpler experience.
{% endhint %}



### Permanent Backup Code Workflow

Many Device Owners prefer to manage backup codes manually. These Device Owners typically want the following features:

1. A dashboard where they can easily generate a new backup code
2. A way to message guests the backup code when they have trouble getting in

{% hint style="warning" %}
Re-using codes and leaving codes active on a device can cause guests to re-enter a building after their reservation has ended, or cause them to enter early.
{% endhint %}

### Frequently Asked Questions

* **What if a Device Owner removes a code from the lock?**
  * Device Owners may make changes to the lock from time to time. Seam will attempt to set any codes it has detected are removed. If a code still fails to set or is constantly being removed, Seam will alert you with a warning `delay_in_setting_code_on_device` then an error `failed_to_set_on_device.`
* **What if a Device Owner factory resets a lock?**
  * A factory reset can often cause Seam to register the lock as an entirely new device. From an your perspective, the old device will appear offline and a new device will appear. You should always prompt a Device Owner to clarify the location of a device when a new device appears, and allow them to replace an existing device.
* **How many codes can I set on a device?**
  * Seam does not currently provide the code limit for&#x20;
* **If I set my Guest Access Code in advance of a reservation, shouldn't they be already on the device even if the device goes offline?**
  * Where supported, Seam will attempt to pre-program codes to locks to provide more reliablity that a code is available even where a lock is disconnected. Even so, we recommend using the backup code system described above to further increase reliability.

