---
description: >-
  Learn how to use reservation_key with Access Grants to handle guest and
  resident credentials on offline access systems.
---

# Reservation Access Grants

## Overview

In hotel or multifamily buildings, many locks aren’t always connected to the internet. Instead, they make decisions locally using information stored on cards, fobs, or mobile keys. When someone issues a new credential for a room or unit, the lock uses an override model, where the new credential replaces or invalidates previous ones, like from a past guest or tenant.

For these systems, you need to use the **reservation** model to manage override behavior. This scope includes Dormakaba Community and Ambiance, Visionline, and Vostio. This differs from fully online systems like Brivo or Avigilon Alta, where access decisions happen in real time through the cloud.

***

### When to use reservations

#### **Guest vs. Staff Credentials**

Not all credentials behave the same way, and this determines when you need to use the reservation model.

* **Guest or resident credentials** usually follow an override model: issuing a new credential overrides previous ones for that space. For these credentials, using the reservation model is **required** on these override-based access systems.
* **Staff credentials** typically use separate credential types and lifecycles. They don’t override guest credentials, and guest credentials don’t override them. You can issue these as standard Access Grants without setting a `reservation_key`.

Use reservations when issuing guest or resident credentials on systems that rely on offline override behavior. For staff or persistent shared access, reservations usually aren’t needed.

***

### Override and Joiner Behavior

In these systems, locks don’t receive live updates from the cloud. Instead, access changes happen through credentials (cards, fobs, or mobile keys) that carry data to the lock.

* **Override behavior:** When a new credential is issued for a room or unit, the new credential contains data that causes the lock to replace or invalidate previous ones. For example, when a new guest checks in, their credential overrides the previous guest’s access without requiring the lock to be online.
* **Joiner behavior:** These systems also support joiner behavior, where multiple valid credentials can coexist for a stay. This happens, for example, when multiple guests need access under the same reservation. In these cases, the lock grants access to all valid credentials simultaneously.

This behavior applies only to **guest and resident credentials**. Staff credentials follow a separate path and aren’t subject to override or joiner rules.

***

### **How `reservation_key` works**

A **reservation** groups related Access Grants under a shared `reservation_key`, letting Seam apply the override and joiner behavior consistently across providers. When you create the first Access Grant with a new `reservation_key` for a space, Seam issues credentials that start a new reservation and override any previous reservation. Additional Access Grants with the same key join that reservation, so multiple guests or residents can share access during the same stay. Creating an Access Grant with a different key for the same space starts a new reservation and overrides access for the existing one. Entrances that don’t support reservation behavior are provisioned as standard access, such as common area doors where overrides aren’t needed.

***

## Issuing Access Grants with Reservations

### **1. Identify the user and entrances to grant access to.**

Create a user identity for the user to whom you want to grant access.

Identify the entrances (or spaces) the user should have access to.

***

### **2. Check entrance capabilities**

If you’re looking to issue a guest or resident credential, use the [Entrances API](../../api/acs/entrances/) to confirm which entrances support reservation semantics.

```
const entrances = await seam.acs.entrances.list({ space_id: "room-101" })
const entrances_that_support_reservations = entrances.filter(e => e.can_belong_to_reservation)
```

* If at least one entrance supports reservations → include a `reservation_key`.
* If none do → issue a standard access grant (omit `reservation_key`).

#### **For mixed grants: Reservation-capable + non-capable entrances**

When a single Access Grant includes a mix of entrances, Seam applies reservation behavior per entrance.

* Entrances with `can_belong_to_reservation: true` join or override based on `reservation_key`.
* Entrances without the `can_belong_to_reservation` capability ignore `reservation_key` and do not override credentials.

```tsx
await seam.accessGrants.create({
  user_identity_id: "guest-1",
  acs_entrance_ids: ["room-101-id", "gym-id", "lobby-id"],
  starts_at: "2025-05-10T15:00:00Z",
  ends_at:   "2025-05-14T11:00:00Z",
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1", // applied only to room-101
})
```

#### **What to expect**

* Room 101 (capable): credentials participate in override / join for `stay-1`.
* Gym/Lobby (non-capable): credentials are provisioned normally and never override credentials based on `reservation_key`.

***

### **3. Create the access grant with `reservation_key`**

Pass the `reservation_key` to group related grants and let Seam apply override/joiner behavior consistently.

```
await seam.accessGrants.create({
  user_identity_id: "guest-1",
  acs_entrance_ids: ["room-101-id"],
  starts_at: "2025-05-10T15:00:00Z",
  ends_at: "2025-05-14T11:00:00Z",
  requested_access_methods: [{ mode: "card" }],
  reservation_key: "stay-1",
})
```

***

### **4. Seam provisions credentials**

Seam chooses the correct credential type (e.g., guest vs. staff) and applies provider-native behavior. When the new credential is used at the lock:

* If it’s a new reservation, it overrides previous guest credentials.
* If it’s the same reservation, it joins.
* Staff credentials remain unaffected.

After provisioning, Seam exposes the issued credentials as **access methods**, which represent the actual, deliverable means of entry (e.g., encoded cards, mobile keys, PINs). You can fetch these via the Access Methods API, display them in your app, or encode them onto physical cards for delivery to the user.

[See the Access Methods guide for details on retrieving and delivering credentials.](delivering-access-methods.md)

***

## **Rules and Validation**

### **Rule 1: `reservation_key` requires at least one capable entrance**

If **none** of the targeted entrances support reservations, creation fails.

```tsx
await seam.accessGrants.create({
  user_identity_id: "guest-1",
  acs_entrance_ids: ["gym-id", "pool-id"],
  starts_at, ends_at,
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})
/*
HTTP 400 VALIDATION_ERROR
title: "reservation_key not supported."
message: "No targeted entrances support reservation behavior. Remove reservation_key or include at least one reservation-capable entrance."
*/
```

### Rule 2: **The reservation door set is fixed once established**

For reservation-capable entrances, the **first access grant** with a new `reservation_key` establishes the **reservation door set**.

You can’t issue concurrent grants that change this set (e.g., switch rooms) without clearing the existing grants first.

```tsx
// existing: stay-1 on room-101

// creating a new access grant with different doors
await seam.accessGrants.create({
  user_identity_id: "guest-1",
  space_ids: ["room-203"], // different door
  starts_at, ends_at,
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})
/*
HTTP 409 CONFLICT
title: "Reservation entrance change requires cleanup."
message: "To change the doors for this reservation, delete the existing access
grants first."
*/

const access_grants = await seam.accessGrants.list({ reservation_key: "stay-1" })
for (const { access_grant_id } of access_grants) {
  await seam.accessGrants.delete({ access_grant_id })
}
await seam.accessGrants.create({
  user_identity_id: "guest-1",
  space_ids: ["room-203"], // different door
  starts_at, ends_at,
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})
```

### Rule 3: **Joiners can target subsets of reservation-capable doors**

For **reservation-capable entrances**, additional access grants with the same `reservation_key` can target **subsets** of the established reservation door set.

This allows, for example, giving one guest full access and another guest limited access within the same stay.

Issuing a **superset** of reservation-capable doors isn’t allowed. If you need to expand the set (e.g., adding a new unit), clear the existing grants first and reissue with the new set.

\<aside> 💡

Entrances that don’t support reservations are not included in the subset/superset check. You can include any combination of non-capable entrances without triggering this rule.

\</aside>

```tsx
// Reservation has room-101 (reservation-capable door)

// ✅ Valid: subset joiner
await seam.accessGrants.create({
  user_identity_id: "guest-2",
  space_ids: ["room-101"], // subset
  starts_at, ends_at,
  reservation_key: "stay-1",
})

// ❌ Invalid: superset joiner (adds 102)
await seam.accessGrants.create({
  user_identity_id: "guest-3",
  space_ids: ["room-101", "room-102"], // superset of reservation-capable set
  starts_at, ends_at,
  reservation_key: "stay-1",
})
/*
HTTP 409 CONFLICT
title: "Reservation joiner entrance set conflict."
message: "Joiner access grants must use the same or a subset of the
reservation-capable doors."
*/
```

### **Rule 4: Time frames must overlap**

All access grants within the same `reservation_key` must have **overlapping time frames** for their reservation-capable entrances.

This ensures the underlying system treats the credentials as part of the same stay or lease and applies proper joiner behavior.

* If the time frames **overlap**, the new grant joins the existing reservation.
* If the time frames **don’t overlap**, the new grant is treated as a separate stay and must use a different reservation\_key.

```tsx
// ✅ Valid: overlapping time frames
await seam.accessGrants.create({
  user_identity_id: "guest-1",
  space_ids: ["room-101"],
  starts_at: "2025-05-10T15:00:00Z",
  ends_at:   "2025-05-14T11:00:00Z",
  reservation_key: "stay-1",
})

// joiner with overlapping window
await seam.accessGrants.create({
  user_identity_id: "guest-2",
  space_ids: ["room-101"],
  starts_at: "2025-05-11T11:00:00Z", // overlaps with guest-1
  ends_at:   "2025-05-14T11:00:00Z",
  reservation_key: "stay-1",
})

// ❌ Invalid: non-overlapping time frames
await seam.accessGrants.create({
  user_identity_id: "guest-3",
  space_ids: ["room-101"],
  starts_at: "2025-05-15T15:00:00Z", // no overlap with guest-1
  ends_at:   "2025-05-18T11:00:00Z",
  reservation_key: "stay-1",
})
/*
HTTP 409 CONFLICT
title: "Reservation time frames must overlap."
message: "Access grants in the same reservation must have overlapping time
frames."
*/
```

***

## Common scenarios

This section walks through common hospitality and multifamily scenarios to illustrate how `reservation_key` drives override and joiner behavior in Seam. Each example shows how Access Grants interact with locks under real operational conditions.

### 1. Back-to-back reservations

Two reservations for the same unit are scheduled back-to-back, with one guest checking out at 11 AM and the next checking in at 3 PM. When you issue the second Access Grant with a different `reservation_key`, Seam provisions it to override the previous stay. Once the new guest uses their credential at the door, the prior guest’s credential is invalidated automatically.

```jsx
// guest 1 (sat → wed)
await seam.accessGrants.create({
  user_identity_id: "guest-1",
  space_ids: ["room-101"],
  starts_at: "2025-05-10T15:00:00Z",
  ends_at:   "2025-05-14T11:00:00Z",
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})

// guest 2 (wed → fri) — different key → overrides guest 1 on first use
await seam.accessGrants.create({
  user_identity_id: "guest-2",
  space_ids: ["room-101"],
  starts_at: "2025-05-14T15:00:00Z",
  ends_at:   "2025-05-16T11:00:00Z",
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-2",
})
```

***

### 2. **Multiple guests on the same reservation**

A single reservation includes multiple guests who all need access during the same stay. By issuing Access Grants with the same `reservation_key`, Seam provisions the credentials as joiners. All guests’ credentials remain valid for the duration of the reservation, and the lock treats them as part of the same lease.

```jsx
// guest 1
await seam.accessGrants.create({
  user_identity_id: "g1",
  space_ids: ["room-101"],
  starts_at,
  ends_at,
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})

// guest 2 joins the same lease
await seam.accessGrants.create({
  user_identity_id: "g2",
  space_ids: ["room-101"],
  starts_at,
  ends_at,
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})
```

***

### 3. Relocate a reservation to new room

When a guest switches rooms mid-stay, the existing Access Grants for the original room must be fully cleared before creating new ones. Seam doesn’t allow issuing Access Grants with different door assignments for the same `reservation_key` at the same time. This reflects how underlying systems work—they require the previous access to be overridden before new room assignments can take effect.

```jsx
// original room
const oldGrant = await seam.accessGrants.create({
  user_identity_id: "guest-1",
  space_ids: ["room-101"],
  starts_at: "2025-05-10T15:00:00Z",
  ends_at:   "2025-05-14T11:00:00Z",
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})

// move to new room with same reservation identity
await seam.accessGrants.delete({ access_grant_id: oldGrant.access_grant_id })
// seam may surface warnings if physical cards still exist (collect/cancel)

await seam.accessGrants.create({
  user_identity_id: "guest-1",
  space_ids: ["room-203"],
  starts_at: "2025-05-10T15:30:00Z",
  ends_at:   "2025-05-14T11:00:00Z",
  requested_access_methods: [{"mode": "card"}],
  reservation_key: "stay-1",
})
```

***

### 4. **Reservation time frame changes**

When you change `starts_at` /  `ends_at`, Seam updates the **Access Grant**, but already-issued physical credentials on offline systems don’t automatically change. Seam will flag what you need to do next.

```jsx
// extend the reservation window
await seam.accessGrants.update({
  access_grant_id: "ag_123",
  ends_at: "2025-05-16T11:00:00Z",
})

// fetch current status and next steps
const grant = await seam.accessGrants.get({ access_grant_id: "ag_123" })

/*
grant.warnings might include:
- "encoding_required": re-encode a plastic card for the new dates
*/
```

The warning can be resolved by re-encoding the card.

```jsx
const cards = await seam.access_methods.list({
	access_grant_id
})

// (example) re-encode the plastic card for the new reservation window
await seam.acs.encoders.encode_card({
	cards[0].access_method_id,
	acs_encoder_id: "encoder-1"
})
```

***

## Error codes & troubleshooting

This section lists common validation and conflict errors you may encounter when creating Access Grants with `reservation_key`, along with what they mean and how to resolve them.

<table><thead><tr><th width="120.4228515625">HTTP Code</th><th width="185.884765625">Error title</th><th>When it happens</th><th>How to fix</th></tr></thead><tbody><tr><td>400</td><td><code>reservation_key</code> not supported.</td><td>You passed a <code>reservation_key</code> but none of the targeted entrances support reservations.</td><td>Remove <code>reservation_key</code> or include at least one reservation-capable entrance.</td></tr><tr><td>400</td><td><code>reservation_key</code> required for guest cards.</td><td>The targeted provider requires a reservation for guest credentials (e.g., Visionline) but none was provided.</td><td>Add a <code>reservation_key</code> when issuing guest credentials for these entrances.</td></tr><tr><td>409</td><td>Reservation entrance change requires cleanup.</td><td>You tried to issue an access grant with a different door set for an existing reservation.</td><td>List and delete existing access grants for that <code>reservation_key</code>, then reissue with the new door set.</td></tr><tr><td>409</td><td>Reservation joiner entrance set conflict.</td><td>A joiner grant includes a superset of the reservation-capable doors.</td><td>Joiners must use the same or a subset of the reservation-capable doors. Adjust the door set or clear/reissue.</td></tr><tr><td>409</td><td>Reservation time frames must overlap.</td><td>A new access grant’s time frame doesn’t overlap with existing grants for the same reservation.</td><td>Either adjust the time frame to overlap or use a new <code>reservation_key</code> for the separate stay.</td></tr></tbody></table>
