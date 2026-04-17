---
description: Learn the details of how Seam Instant Keys work.
---

# How Instant Keys Work

When you issue an Instant Key, Seam creates a secure URL tied to a specific user identity. Seam uses this identity to track and manage access across devices and time windows.

## Tied to a User Identity

An Instant Key is issued to a user identity, not a device or a mobile credential. That means a user can access their Instant Key from any phone or browser session, and the system retrieves and loads their associated mobile credentials.

## Includes All Issued Mobile Credentials

The Instant Key experience fetches all valid mobile credentials that have been issued to the user. If multiple doors or entrance types are assigned—such as hotel room doors, elevators, and amenity areas—they're all available through the same link.

Credentials are scoped to the identity's active access grants.

If the user is reissued access—for example, a new room or an extended stay—the Instant Key reflects the latest set of credentials automatically.

## Seamless Unlocking

Once opened, the Instant Key web app:

1. Initializes Bluetooth scanning using native Web Bluetooth APIs (or App Clip/Instant App wrappers).
2. Detects eligible nearby locks and attempts to unlock using the mobile credentials.
3. Provides visual feedback for successful unlocks, errors, and unsupported devices.

## Sharing Access

Users can forward their Instant Key by text or email if they want to share access with a friend, partner, or teammate. The link still loads all valid credentials for the original user identity. This ability is useful for households, couples, and group stays. You can restrict or track this behavior using the Seam API, if needed.

## Secure by Design

Seam ensures security in the following ways:

* Instant Key links are scoped and time-limited, and they only work for the intended user.
* All credential operations happen on the client side, using cryptographic keys provisioned by the access control provider.
* The Instant Key link can be revoked at any time using the Seam API.
