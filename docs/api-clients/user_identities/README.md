---
description: >-
  Application user profiles, each of which is associated with a single
  application user account
---

# User Identities

The `user_identity` object represents a [user identity](../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) associated with an application user account.

## `user_identity` Properties

The `user_identity` object has the following properties:

<table><thead><tr><th width="309">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the user identity</td></tr><tr><td><code>user_identity_key</code></td><td>String<br><em>Optional</em></td><td>Unique key for the user identity</td></tr><tr><td><code>email_address</code></td><td>String<br><em>Optional</em></td><td>Unique email address for the user identity</td></tr><tr><td><code>phone_number</code></td><td>String<br><em>Optional</em></td><td>Unique phone number for the user identity in <a href="https://www.itu.int/rec/T-REC-E.164/en">E.164 format</a> (for example, <code>+15555550100</code>)</td></tr><tr><td><code>first_name</code></td><td>String<br><em>Optional</em></td><td>First name of the user associated with the user identity</td></tr><tr><td><code>last_name</code></td><td>String<br><em>Optional</em></td><td>Last name of the user associated with the user identity</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the user identity was created</td></tr><tr><td><code>workspace_id</code></td><td>String<br><em>Required</em></td><td>ID of the <a href="../../core-concepts/workspaces/">workspace</a> that contains the user identity</td></tr></tbody></table>

## `user_identity` Methods

You can perform the following actions on `user_identity` objects:

* [Create a user identity](create-a-user-identity.md)
* [List user identities](list-user-identities.md)
* [Get a user identity](get-a-user-identity.md)
* [Add an ACS user to a user identity](add-an-acs-user-to-a-user-identity.md)
* [List ACS users associated with a user identity](list-acs-users-associated-with-a-user-identity.md)
* [Remove an ACS user from a user identity](remove-an-acs-user-from-a-user-identity.md)
* [Grant a user identity access to a device](grant-a-user-identity-access-to-a-device.md)
* [List accessible devices for a user identity](list-accessible-devices-for-a-user-identity.md)
* [Revoke access to a device from a user identity](revoke-access-to-a-device-from-a-user-identity.md)
* [Delete a user identity](delete-a-user-identity.md)
