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

