# Common Use Cases

When integrating with the Visionline system, Assa Abloy requires handling a set of common scenarios to meet their integration requirements. Below are some of these key scenarios:

***

## Issuing Guest Mobile Credentials

### Single guest in a single room

```
// Some code
```

### Returning guest to a single room

<pre><code>acs_user = seam.acs.user.get(acs_user_id="xxx)

# Revoking all previous entrances
<strong>seam.acs.users.revoke_access_to_all_entrances(
</strong>    acs_user_id=acs_user.acs_user_id
)

# Granting new reservation's entrances
for each entrance in new_reservation_entrances:
    seam.acs.entrances.grant_access(
        acs_user_id=acs_user.acs_user_id
        acs_entrance_id=entrance.acs_entrance_id
    )

seam.acs.credentials.create(
    acs_user_id=acs_user.acs_user_id
    credential_manager_acs_system_id="xxx"
    is_multi_phone_sync_credential=True,
    access_method="mobile_key",
    starts_at="2023-01-01 10:40:00.000",
    ends_at="2023-01-04 10:40:00.000"
    visionline_metadata={
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "is_override_key": True
    }
)
</code></pre>

### Multiple guests in multiple rooms

```
// Some code
```

***

## Issuing Joiner Credentials

### Joining to a Seam Mobile Credential

You can select either the multi-phone sync credential or its child credentials. Make sure to grab its `acs_credential_id` to include in the `joiner_acs_credential_ids` list.

<pre><code><strong>joiners = [joiner_mobile_parent_sync_credential, joiner_mobile_child_credential]
</strong><strong>
</strong><strong># Creating the mobile credential
</strong>cred = seam.acs.credentials.create({
    acs_user_id: "xxx",
    credential_manager_acs_system_id="xxs"
    is_multi_phone_sync_credential: True,
    access_method = "mobile_key",
    starts_at: "2023-01-01 10:40:00.000",
    ends_at: "2023-01-04 10:40:00.000",
    visionline_metadata: {
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "joiner_acs_credential_ids": [
            joiner.acs_credential_id for joiner in joiners
        ]
    }
})
</code></pre>

### Joining to a Plastic Card

```
joiners = [joiner_plastic_card_credential]

# Creating the mobile credential
cred = seam.acs.credentials.create({
    acs_user_id: "xxx",
    credential_manager_acs_system_id="xxs"
    is_multi_phone_sync_credential: True,
    access_method = "mobile_key",
    starts_at: "2023-01-01 10:40:00.000",
    ends_at: "2023-01-04 10:40:00.000",
    visionline_metadata: {
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "joiner_acs_credential_ids": [
            joiner.acs_credential_id for joiner in joiners
        ]
    }
})
```

***

## Updating Guest Mobile Credentials

Instead of updating the guest credential, you can issue a new joiner credential with the updated parameters. The old credential will automatically get replaced with the new one.

```javascript
# Creating a new mobile credential will automatically revoke the previous one.
seam.acs.credentials.create({
    acs_user_id: "xxx",
    credential_manager_acs_system_id="xxx"
    is_multi_phone_sync_credential: True,
    access_method = "mobile_key",
    starts_at: "2023-01-01 10:40:00.000",
    ends_at: "2023-01-04 10:40:00.000",
    visionline_metadata: {
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "joiners": [
            "xxx", "yyy"
        ]
    }
})
```

***

## Revoking a Mobile Credential

Seam will issue a discard command for the Visionline card. If deleting a multi-phone sync credential, Seam will discard all of the credentials that were created underneath it.

```javascript
seam.acs.credentials.delete({
    acs_credential_id: "xxx"
})
```

***

## Removing a User Identity

To delete a user identity, you must first delete any [ACS credentials](../../api-clients/access-control-systems/credentials/delete-credential.md) and [enrollment automations](../../api-clients/user-identities/enrollment-automations/) associated with the user identity. You must also deactivate any associated phones. Then, delete the user identity.

```python
import asyncio

async def delete_user_identity(user_identity_id):
    # Delete the Client Sessions
    client_sessions = await seam.client_sessions.get(
        user_identity_id=user_identity_id
    )
    
    for session in client_sessions:
        await seam.client_sessions.delete(
            session_id=session['client_session_id']
        )
    
    # Delete the ACS Users and Credentials
    acs_users = await seam.acs.users.list(
        user_identity_id=user_identity_id
    )
    
    for acs_user in acs_users:
        credentials = await seam.acs.credentials.list(
            acs_user_id=acs_user['acs_user_id']
        )
    
        for credential in credentials:
            await seam.acs.credentials.delete(
                acs_credential_id=credential['acs_credential_id']
            )
        
        await asyncio.gather(*[
            wait_for_acs_credential_deleted(credential) 
            for credential in credentials
        ])
        
        await seam.acs.users.delete(
            acs_user_id=acs_user['acs_user_id']
        )
    
    await asyncio.gather(*[
        wait_for_acs_user_deleted(acs_user) for acs_user in acs_users
    ])
    
    # Delete the Enrollment Automations
    enrollment_automations = await seam.user_identities.enrollment_automations.list(
        user_identity_id=user_identity_id
    )
    
    for automation in enrollment_automations:
        await seam.user_identities.enrollment_automations.delete(
            enrollment_automation_id=automation['enrollment_automation_id']
        )
    
    await asyncio.gather(*[
        wait_for_enrollment_automation_deleted(automation) 
        for automation in enrollment_automations
    ])
    
    # Delete the Phones
    phones = await seam.phones.list(
        owner_user_identity_id=user_identity_id
    )
    
    for phone in phones:
        await seam.phones.deactivate(
            device_id=phone['device_id']
        )

    await asyncio.gather(*[
        wait_for_phone_deactivated(phone) for phone in phones
    ])
    
    # Finally, delete the User Identity
    await seam.user_identities.delete(
        user_identity_id=user_identity_id
    )

# Helper functions for waiting on deletion events
async def wait_for_event(event_type, event_filter):
    while True:
        events = await seam.events.list(event_type=event_type)
        if any(event_filter(event) for event in events):
            break

async def wait_for_acs_user_deleted(acs_user):
    await wait_for_event(
        'acs_user.deleted',
        lambda event: 'acs_user_id' in event and 
                      event.acs_user_id == acs_user.acs_user_id
    )

async def wait_for_enrollment_automation_deleted(enrollment_automation):
    await wait_for_event(
        'enrollment_automation.deleted',
        lambda event: 'enrollment_automation_id' in event and 
                      event.enrollment_automation_id == enrollment_automation.enrollment_automation_id
    )

async def wait_for_acs_credential_deleted(acs_credential):
    await wait_for_event(
        'acs_credential.deleted',
        lambda event: 'acs_credential_id' in event and 
                      event.acs_credential_id == acs_credential.acs_credential_id
    )

await delete_user_identity("xxx")

```
