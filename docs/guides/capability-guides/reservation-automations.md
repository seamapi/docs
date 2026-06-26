---
description: Learn how to automate access and climate around reservations.
---

# Reservation Automations

Reservation Automations sync reservation and guest data with your access and climate systems. Instead of building custom workflows for check-in, mid-stay changes, and checkout, you send reservation data to Seam and device settings update automatically.

Built for short-term bookings—whether hotel stays, gym classes, coworking rooms, or event rentals—Reservation Automations ensure access and climate settings apply only during the reserved time.

***

### How it works

Reservation Automations follow the lifecycle of a reservation:

1. You create spaces and assign devices using [`/spaces/create`](https://docs.seam.co/latest/api/spaces/create).
2. You send reservation and guest data with `push_data`.
3. Seam applies the right access and climate settings at the right times.
4. Webhooks notify you when settings are issued, updated, or revoked.
5. If a reservation is canceled, you call `delete_data` to roll back device settings.

***

### Before you begin <a href="#before-you-begin" id="before-you-begin"></a>

Set up these resources in your Seam workspace:

* [Customer](customer-portals/) – identify who the automation belongs to with a `customer_key`.
* [Spaces](../core-concepts/mapping-your-resources-to-seam-resources.md) – represent the real-world units your customer manages (i.e. _Room 101_ in a hotel, _Studio 3_ in a gym). Each space must be created via [`/spaces/create`](https://docs.seam.co/latest/api/spaces/create) with a `space_key` and assigned devices or entrances **before** you call `push_data`. Reservations reference these spaces by `space_key`.
* Devices or entrances – connect locks, thermostats, or ACS entrances to each space (e.g., assign the lock in Room 101 to the _Room 101_ space). Use `device_ids` for smart locks and thermostats, or `acs_entrance_ids` for access control system entrances.
* Unique user identity emails – each `user_identity` you push must have a unique `email_address`. If an email already exists from a previous call, the reservation is silently skipped.

{% hint style="warning" %}
Although `push_data` accepts a `spaces` array, it only creates a lightweight resource reference — it does **not** assign devices or entrances to the space. If you skip [`/spaces/create`](https://docs.seam.co/latest/api/spaces/create), the space will have no devices and automations will have nothing to configure. The call still returns `ok: true`, making this a silent failure. Always create spaces with device or entrance assignments first using `/spaces/create`.
{% endhint %}

{% hint style="success" %}
You can also let customers configure their own accounts, spaces, and devices with [Customer Portals](customer-portals/).
{% endhint %}

***

### 1. Create spaces with devices

Before pushing reservation data, create a space for each bookable unit using the [`/spaces/create`](https://docs.seam.co/latest/api/spaces/create) endpoint. Each space must have a `space_key` (your identifier) and at least one assigned device or entrance.

```bash
curl -X POST \
  https://connect.getseam.com/spaces/create \
  -H "Authorization: Bearer $SEAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Room 101",
    "space_key": "unit-101-key",
    "device_ids": ["YOUR_LOCK_DEVICE_ID"]
  }'
```

Use `device_ids` for smart locks and thermostats, or `acs_entrance_ids` for access control system entrances. You can include both if the space has multiple access points.

The `space_key` is what you reference in `push_data` reservations. Without it, `push_data` cannot match reservations to the space.

***

### 2. Configure automation rules

Automation rules control what access Seam creates and when. Configure them in **Console** > **Developer** > **Automations**. Each rule is tied to an event—when a reservation is created, or when a staff member is created—and defines the access Seam issues in response.

#### When a reservation is created

Seam creates access for the guest to the property (space) associated with the reservation, valid for the duration of the reservation. The settings below control which credentials are issued and how.

**Access methods to create (in order of preference)**

Choose which credential types to issue. You must enable at least one. Drag the enabled methods to set their order of preference: for each door, Seam works down the list and creates access using the methods that door supports.

| Method           | Description                                   |
| ---------------- | --------------------------------------------- |
| **Plastic card** | A physical card encoded for the lock.         |
| **PIN code**     | A numeric code the guest enters on a keypad.  |
| **Mobile key**   | A digital key delivered to the guest's phone. |

**Access method creation strategy**

Controls how many access methods are created per device when multiple types are enabled:

| Strategy                      | Behavior                                                |
| ----------------------------- | ------------------------------------------------------- |
| **First available** (default) | Creates only the first supported method on each device. |
| **First two available**       | Creates up to two supported methods on each device.     |
| **All available**             | Creates every supported method on each device.          |

**Card count**

The number of plastic cards to create per reservation. Only applies when the plastic card access method is enabled.

**Instant key max use count**

The maximum number of times a mobile key can be used. Only applies when the mobile key access method is enabled.

**Use guest phone last 4 digits as code**

When enabled, Seam will attempt to use the last 4 digits of the guest's phone number as the PIN code instead of generating a random one. The phone number is looked up from the user identity data you provide via `push_data`.

PIN code priority:

1. An explicit `preferred_code` on the reservation always takes precedence.
2. If no `preferred_code` is set and this option is enabled, Seam uses the last 4 digits of the guest's phone number.
3. If the phone number is unavailable or has fewer than 4 digits, Seam falls back to an auto-generated code.

{% hint style="info" %}
The derived code is a best-effort preference, not a guarantee. If the code conflicts with a device's PIN constraints (for example, the code is already in use on that lock) Seam assigns an auto-generated code for that device and adds a relevant warning to the access grant.
{% endhint %}

**Allow shared email and phone across guests**

When enabled, multiple guests can share the same email address or phone number. This is useful when the same person has multiple reservations or holds different roles.

<figure><img src="../.gitbook/assets/Screenshot 2026-03-31 at 23.46.11.png" alt=""><figcaption></figcaption></figure>

#### When a staff member is created

Seam creates access for the staff member to the property (space) associated with that staff member. Use this rule to automatically provision access for on-site staff—such as housekeeping or maintenance—alongside guest access. The same access method settings above determine which credentials are issued.

### 3. Push reservation data

Use the `push_data` endpoint to send customer, user, and reservation data to Seam. Automations use this information to configure devices at the right times.

A **reservation** represents a time-bound assignment of a user to a space. This can be a hotel stay, a gym day pass, or a coworking member's conference room booking. Each reservation must include a unique `reservation_key`, which can be your system's identifier for that record. Seam uses this key to know whether it should create a new reservation, update an existing one, or remove it later with `delete_data`.

```bash
curl -X POST \
  https://connect.getseam.com/customers/push_data \
  -H "Authorization: Bearer $SEAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_key": "sample_customer_key",
    "user_identities": [
      {
        "user_identity_key": "user_789",
        "name": "John Doe",
        "email_address": "john@example.com"
      }
    ],
    "reservations": [
      {
        "reservation_key": "res_456",
        "user_identity_key": "user_789",
        "starts_at": "2025-08-12T19:47:27.490Z",
        "ends_at": "2025-08-14T19:47:27.490Z",
        "space_keys": ["unit-101-key"]
      }
    ]
  }'
```

* Call `push_data` with a new `reservation_key` to create a reservation.
* Call it again with the same `reservation_key` to update times or other details—Seam automatically reconfigures the device settings.

{% hint style="info" %}
The `push_data` [API reference](https://docs.seam.co/latest/api/customers/push_data) also documents `access_grants` and `bookings` as alternative top-level keys. This guide uses `reservations`, which is the recommended key for short-term booking workflows. If you use `access_grants` instead, use `access_grant_keys` (not `reservation_keys`) when calling [`delete_data`](https://docs.seam.co/latest/api/customers/delete_data).
{% endhint %}

#### Update a reservation

To update an existing reservation, call `push_data` again with the **same `reservation_key`** and the new values. Seam diffs the incoming data against what it already has and reconfigures only what changed—you do not need to delete and recreate the reservation for routine edits.

**Change the reservation time**

When a guest extends their stay or a booking moves, send the updated `starts_at` and `ends_at`. Seam shifts the access window and reissues credentials as needed.

```bash
curl -X POST \
  https://connect.getseam.com/customers/push_data \
  -H "Authorization: Bearer $SEAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_key": "sample_customer_key",
    "reservations": [
      {
        "reservation_key": "res_456",
        "user_identity_key": "user_789",
        "starts_at": "2025-08-12T19:47:27.490Z",
        "ends_at": "2025-08-16T19:47:27.490Z",
        "space_keys": ["unit-101-key"]
      }
    ]
  }'
```

**Change the assigned space**

When a guest is moved to a different unit, send the new `space_keys`. Seam revokes access on the previous space and issues access on the new one.

```bash
curl -X POST \
  https://connect.getseam.com/customers/push_data \
  -H "Authorization: Bearer $SEAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_key": "sample_customer_key",
    "reservations": [
      {
        "reservation_key": "res_456",
        "user_identity_key": "user_789",
        "starts_at": "2025-08-12T19:47:27.490Z",
        "ends_at": "2025-08-14T19:47:27.490Z",
        "space_keys": ["unit-202-key"]
      }
    ]
  }'
```

#### Choose a stable `reservation_key`

The `reservation_key` is how Seam tells an update apart from a brand-new reservation. Use a value that stays constant for the life of the booking—typically your system's own reservation or booking ID.

Do **not** derive the key from underlying resources such as a space, room number, device ID, or guest. If you do, the key changes whenever that resource changes, and Seam treats the next `push_data` as a different reservation: it creates a new one and leaves the original active, so two sets of credentials end up on the hardware.

{% hint style="warning" %}
If the `reservation_key` itself must change—for example, because it was built from data that is no longer stable—the only safe path is to [`delete_data`](https://docs.seam.co/latest/api/customers/delete_data) with the **old** key first, then `push_data` with the new key. This rolls back the original credentials before the new ones are issued and prevents orphaned access from lingering on the device.
{% endhint %}

#### Bookings that span multiple rooms

Some booking systems model a single booking as a parent reservation with multiple **sub-reservations**, where each sub-reservation occupies its own room. Don't collapse these into one `reservation_key` with several `space_keys`—the sub-reservations can be added, moved, or canceled independently, and a single key cannot track them apart.

Instead, push **one reservation per sub-reservation**, and build each `reservation_key` from your two stable identifiers, `<reservation_id>_<sub_reservation_id>`, with that sub-reservation's own space:

```bash
curl -X POST \
  https://connect.getseam.com/customers/push_data \
  -H "Authorization: Bearer $SEAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_key": "sample_customer_key",
    "reservations": [
      {
        "reservation_key": "res_456_sub_1",
        "user_identity_key": "user_789",
        "starts_at": "2025-08-12T19:47:27.490Z",
        "ends_at": "2025-08-14T19:47:27.490Z",
        "space_keys": ["unit-101-key"]
      },
      {
        "reservation_key": "res_456_sub_2",
        "user_identity_key": "user_789",
        "starts_at": "2025-08-12T19:47:27.490Z",
        "ends_at": "2025-08-14T19:47:27.490Z",
        "space_keys": ["unit-102-key"]
      }
    ]
  }'
```

This keeps each room's access independently addressable: you can update or `delete_data` a single sub-reservation without touching the others. Both parts of the key remain stable booking identifiers, so this is consistent with the rule above—you are combining IDs, not deriving the key from the room itself.

#### Push only confirmed reservations

Most booking systems move a reservation through several intermediate states—_inquiry_, _pending_, _tentative_, _on hold_—before it is actually confirmed. Send data to Seam only once the reservation is confirmed and access is genuinely needed.

Every `push_data` call that changes a reservation can translate into a physical operation on a lock, keypad, or access control system. Seam handles this synchronization reliably, but each command sent to hardware is an opportunity for a device to be offline, rate-limited, or slow to respond. Pushing speculative or short-lived states multiplies those commands for bookings that may never need access, increasing both load and the chance of an avoidable error. Waiting until a reservation is confirmed keeps the data you send aligned with the access you actually intend to grant.

***

### 4. Use webhooks to listen for updates

Configure webhooks in **Console** > **Developer** > **Webhooks** to get notified when automations apply or revoke settings.

**Key events:**

* `access_method.issued` – access created
* `access_method.reissued` – access updated
* `access_method.deleted` – access removed

Webhook payloads include the keys that triggered the event, letting you sync state with your application.

***

### 5. Delete data

The `delete_data` endpoint is optional but important. Use it when access or device settings should no longer apply—such as when:

* A hotel reservation is canceled
* A conference room reservation ends early
* A gym class is dropped
* An event reservation is called off

Calling `delete_data` removes the underlying reservation records, which tells automations to immediately roll back any device settings tied to them. This could mean revoking access, resetting thermostats, or clearing other applied states. Without cleanup, those settings may stay active longer than intended.

```bash
curl -X POST \
  https://connect.getseam.com/customers/delete_data \
  -H "Authorization: Bearer $SEAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "reservation_keys": ["res_456"],
    "user_identity_keys": ["user_789"]
  }'
```

* Pass a `reservation_key` to cancel a specific reservation and remove its device settings.
* Pass a `user_identity_key` to remove all device settings tied to a specific person.
* Pass a `customer_key` to offboard an entire customer and clear all their spaces, users, and settings.

***

### Troubleshooting

#### I called `push_data` and got `ok: true` but no access code was created

`push_data` returns a success response even when automations cannot act on the data. Check these common causes:

| Symptom | Cause | Fix |
| ------- | ----- | --- |
| No access code created | Space does not exist or is missing a `space_key` | Create the space via [`/spaces/create`](https://docs.seam.co/latest/api/spaces/create) with a `space_key` and `device_ids` or `acs_entrance_ids` before calling `push_data` |
| No access code created | No devices or entrances assigned to the space | Add `device_ids` or `acs_entrance_ids` when creating the space, or update the space to include them |
| Reservation silently skipped | Duplicate `email_address` on a `user_identity` | Each user identity must have a unique email. Check **Console** → **Automation Runs** for `user_identity_email_or_phone_conflict` errors |
| Automation did not run | Automations not enabled | Go to **Console** → **Developer** → **Automations** and verify automations are enabled for your workspace |

{% hint style="info" %}
Check **Console** → **Automation Runs** for detailed error information. Errors like `user_identity_email_or_phone_conflict` are only visible there — they do not appear in the `push_data` response.
{% endhint %}

***
