---
description: >-
  Use Access Grants to grant access to any physical space, irrespective of the
  locking hardware. Learn which Seam API to use for granting access.
---

# Granting Access

Use **[Access Grants](access-grants/README.md)** to grant a person access to a physical space. Access Grants are the default and recommended way to grant access on Seam—for any kind of space (a home, a building, a locker, a parking structure) and irrespective of the locking hardware (standalone smart locks, access control systems, and more).

With one API call, you tell Seam *who* should have access, *where*, *when*, and *how*. Seam creates the credential, attaches it to a user identity, encodes the time window, propagates it to every relevant device, and re-materializes it as devices come online, get added to spaces, or change ownership. PIN codes, mobile keys, and plastic cards—all through the same request.

```javascript
await seam.accessGrants.create({
  user_identity: {
    full_name: "Jane Doe",
    email_address: "jane@example.com",
  },
  device_ids: [front_door_lock_id],
  requested_access_methods: [{ mode: "code" }],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z",
});
```

***

## Start Simple, Then Scale Up

1. **One device.** Grant access to a single smart lock with a `device_id` and a `code` access method. See [Creating an Access Grant Using Devices](access-grants/creating-an-access-grant-using-devices.md).
2. **Multiple devices and spaces.** Pass several `device_ids` in one call, or organize access points into [spaces](https://docs.seam.co/latest/api/spaces) (Alpha) and grant access by `space_id`. See [Creating an Access Grant Using Spaces](access-grants/creating-an-access-grant-using-spaces.md).
3. **Access control systems.** Grant access to ACS entrances with `acs_entrance_ids`, including mobile keys, card encoding, and reservations. See [Creating an Access Grant Using Entrances](access-grants/creating-an-access-grant-using-entrances.md).

***

## Which API Should I Use to Grant Access?

**Use Access Grants.** The lower-level APIs remain available for a small set of specific scenarios:

| Scenario | API to use |
| --- | --- |
| Grant a person access to one or more smart locks | [Access Grants](access-grants/README.md) (`device_ids`) |
| Grant a person access to ACS entrances | [Access Grants](access-grants/README.md) (`acs_entrance_ids`) |
| Grant a person access to a group of access points | [Access Grants](access-grants/README.md) + [spaces](https://docs.seam.co/latest/api/spaces) (`space_ids`) |
| Issue a mobile key or Instant Key | [Access Grants](access-grants/README.md) (`mode: "mobile_key"`) |
| Set a PIN with a specific custom code value on a single lock | [Access Codes API](../../capability-guides/smart-locks/access-codes/README.md) (low-level) |
| Manage offline or backup PIN code pools on a single lock | [Access Codes API](../../capability-guides/smart-locks/access-codes/README.md) (low-level) |
| Directly manage ACS users, credentials, and access groups | [ACS API](../../capability-guides/access-systems/README.md) (low-level) |
| Lock or unlock a door remotely | [Smart Locks API](../../capability-guides/smart-locks/README.md) (not a granting workflow) |

{% hint style="warning" %}
The low-level [Access Codes](../../capability-guides/smart-locks/access-codes/README.md) and [ACS](../../capability-guides/access-systems/README.md) granting workflows are no longer recommended for granting access. For new development, use Access Grants—they cover the same providers through one consistent, future-proof interface.
{% endhint %}

***

## Get Started

* [Access Grant Quick Start](access-grants/access-grant-quick-start.md)
* [Access Grants Capability Guide](access-grants/README.md)
* [Access Grants API Reference](https://docs.seam.co/latest/api/access_grants/)
