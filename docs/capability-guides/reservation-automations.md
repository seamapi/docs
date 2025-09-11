---
description: Learn how to automate access and climate around reservations.
---

# Reservation Automations

{% hint style="warning" %}
**Early Access Preview** - Reservation Automations are currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

Reservation Automations sync reservation and guest data with your access and climate systems. Instead of building custom workflows for check-in, mid-stay changes, and checkout, you send reservation data to Seam and device settings update automatically.&#x20;

Built for short-term bookings—whether hotel stays, gym classes, coworking rooms, or event rentals—Reservation Automations ensure access and climate settings apply only during the reserved time.

***

### How it works

Reservation Automations follow the lifecycle of a reservation:

1. You enable Automations in [Console](https://console.getseam.com/).
2. You send reservation and guest data with `push_data`.
3. Seam applies the right access and climate settings at the right times.
4. Webhooks notify you when settings are issued, updated, or revoked.
5. If a reservation is canceled, you call `delete_data` to roll back device settings.

***

### Before you begin![](https://b.stripecdn.com/docs-statics-srv/assets/fcc3a1c24df6fcffface6110ca4963de.svg) <a href="#before-you-begin" id="before-you-begin"></a>

Set up these resources in your Seam workspace:

* [Customer](customer-portals/) – identify who the automation belongs to with a `customer_key`.
* [Spaces](../core-concepts/mapping-your-resources-to-seam-resources.md) – represent the real-world units your customer manages (i.e. _Room 101_ in a hotel, _Studio 3_ in a gym). Reservations should reference these spaces.
* Devices or entrances – connect locks, thermostats, or other devices to each Space (e.g., assign the lock in Room 101 to the _Room 101_ space)

Reservation Automations use these resources to decide where and how to apply settings.

{% hint style="success" %}
You can also let customers configure their own accounts, spaces, and devices with [Customer Portals](customer-portals/).
{% endhint %}

***

### 1. Enable Reservation Automations in Console.

Go to **Console** → **Developer** → **Automations** and turn on an Automations for your workspace.

<figure><img src="../.gitbook/assets/Screenshot 2025-09-01 at 5.25.53 PM (1).png" alt=""><figcaption></figcaption></figure>

***

### 2. Push reservation data

Use the `push_data` endpoint to send customer, user, and reservation data to Seam. Automations use this information to configure devices at the right times.

A **reservation** represents a time-bound assignment of a user to a space. This can be a hotel stay, a gym day pass, or a coworking member’s conference room booking. Each reservation must include a unique `reservation_key`, which can be your system’s identifier for that record. Seam uses this key to know whether it should create a new reservation, update an existing one, or remove it later with `delete_data`.

Use the `push_data` endpoint to provide Seam your customer, guest, and reservation data. Seam uses this to issue access credentials and configure devices at the right times.

```bash
curl -X POST \
  https://api.seam.co/customers/push_data \
  -H "Authorization: Bearer $YOUR_API_KEY" \
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

***

### 3.  Use webhooks to listen for updates

Configure webhooks in **Console** > **Developer** > **Webhooks** to get notified when automations apply or revoke settings.

**Key events:**

* `access_method.issued` – access created
* `access_method.reissued` – access updated
* `access_method.deleted` – access removed

Webhook payloads include the keys that triggered the event, letting you sync state with your application.

***

### 4. Delete data

The `delete_data` endpoint is optional but important. Use it when access or device settings should no longer apply—such as when:

* A hotel reservation is canceled
* A conference room reservation ends early
* A gym class is dropped
* An event reservation is called off

Calling `delete_data` removes the underlying reservation records, which tells automations to immediately roll back any device settings tied to them. This could mean revoking access, resetting thermostats, or clearing other applied states. Without cleanup, those settings may stay active longer than intended.

```bash
curl -X POST \
  https://api.seam.co/customers/delete_data \
  -H "Authorization: Bearer $YOUR_API_KEY" \
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

***
