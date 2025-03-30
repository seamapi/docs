# User Identities

The User Identities route contains the following resources:

## The `user_identity` Resource

Represents a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) associated with an application user account.

## Properties

**`created_at`** *Datetime*

Date and time at which the user identity was created.


---
**`display_name`** *String*


---
**`email_address`** *String*

Unique email address for the user identity.


---
**`full_name`** *String*


---
**`phone_number`** *String*

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).


---
**`user_identity_id`** *UUID*

ID of the user identity.


---
**`user_identity_key`** *String*

Unique key for the user identity.


---
**`workspace_id`** *UUID*

ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the user identity.


---
## Endpoints

