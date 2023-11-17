---
description: Means by which a user gains access at an entrance
---

# Credentials

The `acs_credential` object represents a [credential](../../../products/access-systems/issuing-credentials.md) that enables a [user](../../../products/access-systems/#what-is-a-user) to access one or more entrances within an [Access Control System](../../../products/access-systems/) (ACS). For each `acs_credential` object, you define an [access (PIN) code](../../../products/smart-locks/access-codes/).

## `acs_credential` Properties

The `acs_credential` object has the following properties:

<table><thead><tr><th width="293">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>acs_credential_id</code></td><td>String<br><em>Required</em></td><td>ID of the credential</td></tr><tr><td><code>acs_user_id</code></td><td>String<br><em>Required</em></td><td>ID of the user to whom the credential belongs</td></tr><tr><td><code>acs_system_id</code></td><td>String<br><em>Required</em></td><td>ID of the access control system that contains the credential</td></tr><tr><td><code>code</code></td><td>String<br><em>Required</em></td><td>Access (PIN) code for the credential</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the credential was created</td></tr><tr><td><code>workspace_id</code></td><td>String<br><em>Required</em></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the credential</td></tr></tbody></table>

## `acs_credential` Methods

You can perform the following actions on `acs_credential` objects:

* [Create a credential for a user](create-credential-for-user.md)
* [List credentials for a user](list-credentials-for-user.md)
* [Get a credential](get-credential.md)
* [Delete a credential](delete-credential.md)
