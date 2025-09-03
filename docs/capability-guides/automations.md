---
description: Learn how to customize access and climate workflows with automations.
---

# Automations

{% hint style="warning" %}
**Early Access Preview** - The automations feature is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

Seam automations are a low-code way to sync data about who is using a space and when—whether for a short-term booking, a visitor, or long-term use like employees, residents, or members. Automations handle the scheduling and application of device settings, from issuing and revoking access to adjusting climate controls. Instead of building and maintaining these workflows yourself, you can launch in days by using automations!

Automations rely on two core endpoints:

* `push_data` to send and update usage data
* `delete_data` to remove it

***

### How it works

1. **Enable in Console** – Turn on Automations in [Console](https://console.getseam.com/) > **Developer** > **Automations**.
2. **Send usage data** – call `push_data` with details such as time windows, users, and spaces.
   * **Seam applies settings** – device actions (access, climate, etc.) are scheduled and updated automatically.
3. **Listen for updates** – configure webhooks to track when settings are created, updated, or removed.
4. **Clean up** – If needed, use the `delete_data` endpoint to remove bookings, guests, or listings.

***

### Before you begin![](https://b.stripecdn.com/docs-statics-srv/assets/fcc3a1c24df6fcffface6110ca4963de.svg) <a href="#before-you-begin" id="before-you-begin"></a>

Set up these resources in your Seam workspace:

* [Customer](customer-management/) – identify who the automation belongs to with a `customer_key`.
* [Spaces](../core-concepts/mapping-your-resources-to-seam-resources.md) – represent the real-world units your customer manages (for example, _Room 101_ in a hotel, _Unit A_ in an apartment building, or _Studio 3_ in a gym). Automations should reference these spaces.
* Devices or entrances – connect locks, thermostats, or other devices to each Space. For example, assign the door lock on _Room 101_ to the _Room 101_ Space.

Automations use these resources to decide where and how to apply settings.

{% hint style="success" %}
Let customer configure their own accounts, Spaces, and devices with  [Customer Portals](customer-management/).
{% endhint %}

***

### 1. Enable Automations in Console.

Go to **Console** → **Developer** → Automations and turn on Automations for your workspace.

<figure><img src="../.gitbook/assets/Screenshot 2025-09-01 at 5.25.53 PM (1).png" alt=""><figcaption></figcaption></figure>

***

### 2. Push usage data

Use the `push_data` endpoint to send customer, user, and usage data to Seam. Automations use this information to configure devices at the right times.

A **booking** represents a time-bound assignment of a user to a space. This can be a hotel stay, a gym visit, or long-term access like an employee schedule. Each booking must include a unique `booking_key`, which can be your system’s identifier for that record. Seam uses this key to know whether it should create a new booking, update an existing one, or remove it later with `delete_data`.

Use the `push_data` endpoint to provide Seam your customer, guest, and booking data. Seam uses this to issue access credentials and configure devices at the right times.

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
        "email": "john@example.com"
      }
    ],
    "bookings": [
      {
        "booking_key": "res_456",
        "user_identity_key": "user_789",
        "starts_at": "2025-08-12T19:47:27.490Z",
        "ends_at": "2025-08-14T19:47:27.490Z",
        "space_keys": ["unit-101-key"]
      }
    ]
  }'
```

* Call `push_data` with a new `booking_key` to create a booking.
* Call it again with the same `booking_key` to update times or other details—Seam automatically reconfigures the device settings.

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

* A hotel booking is canceled
* A gym member ends their membership
* A resident moves out
* An employee leaves the company

Calling `delete_data` removes the underlying usage records, which tells automations to immediately roll back any device settings tied to them. This could mean revoking access, resetting thermostats, or clearing other applied states. Without cleanup, those settings may stay active longer than intended.

```bash
curl -X POST \
  https://api.seam.co/customers/delete_data \
  -H "Authorization: Bearer $YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "booking_keys": ["res_456"],
    "user_identity_keys": ["user_789"]
  }'
```

* Pass a `booking_key` to cancel a specific booking and remove its device settings.
* Pass a `user_identity_key` to remove all device settings tied to a specific person.
* Pass a `customer_key` to offboard an entire customer and clear all their spaces, users, and settings.

***

***
