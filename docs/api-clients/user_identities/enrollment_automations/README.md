---
description: >-
  Streamlined smart phone registration mechanisms that automatically detect when
  new phones come online for user identities and facilitate the enrollment
  process with the credential manager
---

# Enrollment Automations

The `enrollment_automation` object represents an [enrollment automation](../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md) within the [Seam mobile access solution](../../../products/mobile-access-in-development/).

## `enrollment_automation` Properties

The `enrollment_automation` object has the following properties:

<table><thead><tr><th width="365">Property</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>enrollment_automation_id</code></td><td>String<br><em>Required</em></td><td>ID of the enrollment automation</td></tr><tr><td><code>credential_manager_acs_system_id</code></td><td>String<br><em>Required</em></td><td>ID of the associated <a href="../../../products/access-systems/">ACS system</a> that serves as the <a href="../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md">credential manager</a></td></tr><tr><td><code>user_identity_id</code></td><td>String<br><em>Required</em></td><td>ID of the associated <a href="../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity">user identity</a>.</td></tr><tr><td><code>created_at</code></td><td>String<br><em>Required</em></td><td>Date and time at which the user identity was created</td></tr><tr><td><code>workspace_id</code></td><td>String<br><em>Required</em></td><td>ID of the <a href="../../../core-concepts/workspaces/">workspace</a> that contains the user identity</td></tr></tbody></table>

## `enrollment_automation` Methods

You can perform the following actions on `enrollment_automation` objects:

* [Launch an enrollment automation](../../user-identities/enrollment-automations/launch.md)
* [List enrollment automations](../../user-identities/enrollment-automations/list.md)
* [Get an enrollment automation](../../user-identities/enrollment-automations/get.md)
* [Delete an enrollment automation](delete.md)
