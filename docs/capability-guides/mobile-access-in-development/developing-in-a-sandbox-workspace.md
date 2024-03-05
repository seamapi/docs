# Developing in a Sandbox Workspace

Seam's sandbox workspaces allow you to develop integrations without access to a real system. To test out issuing mobile keys, here are a few additional functions you'll need to test out your integration.

## Creating a Simulated Phone for a User Identity

When issuing mobile credentials, it is required for some systems for the user identity to have a provisioned phone. To add a phone in our development sandbox workspace, use the following flow to add a phone to a user identity.

```
user_identity = seam.user_identities.create(
    user_identity_key="xxx",
    first_name="Jane",
    last_name="Lo"
)

seam.enrollment_automations.launch(
    credential_manager_acs_system_id=cm.acs_system_id,
    create_acs_user=true,
    user_identity_id=user_identity.user_identity_id
)

seam.phones.simulate.create_sandbox_phone(
    user_identity_id=user_identity.user_identity_id
)
```
