---
description: Systems for managing and monitoring access to physical spaces
---

# Access Control Systems

In the Seam platform and API, [access control systems](../../products/access-systems/) (ACSs) consist of the following components:

<table><thead><tr><th width="150.33333333333331">Component</th><th width="203">API Object</th><th>Description</th></tr></thead><tbody><tr><td><a href="../../products/access-systems#what-is-an-access-control-system">System</a></td><td><a href="../../api/acs/systems/"><code>acs_system</code></a></td><td>An access control system itself. You create users, access groups, and credentials in the context of an <code>acs_system</code>.</td></tr><tr><td><a href="../../products/access-systems/user-management.md">User</a></td><td><a href="../../api/acs/users/"><code>acs_user</code></a></td><td>A user to whom to grant access to specific physical spaces.</td></tr><tr><td><a href="../../capability-guides/access-systems/retrieving-entrance-details.md">Entrance</a></td><td><a href="../../api/acs/entrances/"><code>acs_entrance</code></a></td><td>A secured door, gate, service, or other method of entry.</td></tr><tr><td><a href="../../products/access-systems/assigning-users-to-access-groups.md">Access group</a></td><td><a href="../../api/acs/access_groups/"><code>acs_access_group</code></a></td><td>A group that defines the entrances to which a set of users has access, as well as the access schedule for these entrances and users. </td></tr><tr><td><a href="../../capability-guides/access-systems/managing-credentials.md">Credential</a></td><td><a href="../../api/acs/credentials/"><code>acs_credential</code></a></td><td>A means by which a user gains access at an entrance, such as access codes, key cards, and mobile passes.</td></tr></tbody></table>
