---
description: Learn our best practices for programming access codes for a hotel guest
---

# Access Code Management for Hospitality

<figure><img src="../.gitbook/assets/yale-smart-door-lock-system-500x500 (1).webp" alt=""><figcaption><p>A guest entering an access code on a smart lock</p></figcaption></figure>

## Overview

Access codes are a convenient way of giving out access for hotel guests. Guests can enter their room without the need for a physical key or card, bypassing the need for a manual check-in and check-out process. Access codes can also be easily changed after a guest leaves, reducing the risk of unauthorized access to the room.

In this guide, we will be providing some guidelines on how best to program access codes for a hotel stay.

## Programming a Code for the Guest Stay

#### What you'll need

- [A Door Lock that supports the `access_code` capability](#user-content-fn-1)[^1]

#### Recommendations

When programming a code for a guest stay, you can set the `starts_at` time to the check-in time, and the `ends_at` time to the check-out time. Our system will attempt programming the code 30 minutes prior to the guest stay.

When a future `access_code` is first created, its status will be `unset`. Its status will transition to `set` once the `starts_at` date has begun, and the code has been programmed on the door lock.

## Setting up Back Up Codes on each Door Lock

In case a guest is having issues unlocking the door, or if Seam encounters issues programming codes on the door lock, we recommend having some back up methods for letting in the guest.

### Terminology

- Guest Access Code: The code that is programmed for a guest stay and will only be active during the duration of the scheduled time. This will be shared with a guest prior to their arrival.
- Backup Access Codes: Back up codes that are already programmed on the door lock. These can be given out to a guest if there are issues with their Guest Access Code.
- Device Owner: The person or company that owns a lot and their operators or staff

### Common Problems

- A Guest Access Code isn't available at the time of reservation due to the lock being unable to connect to the network or its hub
- A device can not be remotely unlocked due to a network error

### RECOMMENDED: Official Seam Backup Access Code Pool

Seam provides a simple, robust backup access code implementation. When you use
Seam's backup access code pool, we automatically make sure all backup access codes
are healthy, ready for immediate usage, replaced after every use, and automatically
removed when a reservation ends.

Seam's official backup access code pool can be enabled by adding `use_backup_access_code_pool: true` to any [`/access_codes/create` API request](https://docs.seam.co/latest/api/access_codes/create). You can then retrieve access codes using [`/access_codes/pull_backup_access_code`](https://docs.seam.co/latest/api/access_codes/pull_backup_access_code).

{% tabs %}

{% tab title="Javascript" %}

```javascript
// Time of Creation
await seam.accessCodes.create({
  name: "My Access Code",
  code: "1234",
  use_backup_access_code_pool: true,
})

// Time of Reservation
async function getGuestMessage() {
  const access_code = await seam.accessCodes.get({ name: "My Access Code" })
  if (access_code.errors.length === 0) {
    return `Hello Guest! Your access code is: ${access_code.code}`
  } else {
    const backup_access_code = await seam.accessCodes.pullBackupAccessCode({
      access_code_id: access_code.access_code_id,
    })
    return `Hello Guest! Your access code is: ${backup_access_code.code}`
  }
}
```

{% endtab %}
{% endtabs %}

### DIY On-Demand Backup Code Workflow

The following system is effective for issuing backup codes to guests:

- For every lock your Device Owner is using for guests, create a pool of 5 backup codes. Create the backup codes as `ongoing` codes so that they are programmed to the device immediately.
- Do not keep access codes with errors inside your backup access code pool, maintain a "healthy" pool of access codes
- Do not share the backup codes with the Device Owner or the guest (until there is an entry issue)
- When a guest is unable to open a lock, send them one of the backup codes from the backup access code pool.
- Set `ends_at` on the backup access code you sent to the guest to the time when the reservation ends
- At the end of the reservation the backup code will be unprogrammed from the device
- Replace the backup code that was used by creating a new backup code for the pool

{% hint style="info" %}
Having a pool of 5 access codes can allow you to continue issuing backup codes if the Device Owner is having trouble repairing the network for the lock.
{% endhint %}

### Permanent Backup Code Workflow

Many Device Owners prefer to manage backup codes manually. These Device Owners typically want the following features:

1. A dashboard where they can easily generate a new backup code
2. A way to message guests the backup code when they have trouble getting in

{% hint style="warning" %}
Re-using codes and leaving codes active on a device can cause guests to re-enter a building after their reservation has ended, or cause them to enter early.
{% endhint %}

### Frequently Asked Questions

- **What if a Device Owner removes a code from the lock?**
  - Device Owners may make changes to the lock from time to time. Seam will attempt to set any codes it has detected are removed. If a code still fails to set or is constantly being removed, Seam will alert you with a warning `delay_in_setting_code_on_device` then an error `failed_to_set_on_device.`
- **What if a Device Owner factory resets a lock?**
  - A factory reset can often cause Seam to register the lock as an entirely new device. From an your perspective, the old device will appear offline and a new device will appear. You should always prompt a Device Owner to clarify the location of a device when a new device appears, and allow them to replace an existing device.
- **How many codes can I set on a device?**
  - Seam does not currently provide the code slot limits for the door locks.
- **If I set my Guest Access Code in advance of a reservation, shouldn't they be already on the device even if the device goes offline?**
  - Where supported, Seam will attempt to pre-program codes to locks to provide more reliablity that a code is available even where a lock is disconnected. Even so, we recommend using the backup code system described above to further increase reliability.

[^1]: Add link to such a list.
