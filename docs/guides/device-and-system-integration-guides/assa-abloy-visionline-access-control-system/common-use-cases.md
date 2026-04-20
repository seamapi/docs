---
description: >-
  Learn how to meet the ASSA ABLOY scenario requirements for integrating with
  the Visionline system.
---

# Common Use Cases

When integrating with the Visionline system, ASSA ABLOY requires handling a set of common scenarios to meet their integration requirements. Learn how to accomplish some of these key scenarios.

## Issue Guest Mobile Credentials

* [Issue a credential for a single guest in a single room.](credential-types/issuing-various-types-of-guest-mobile-credentials.md#single-guest-in-a-single-room)
* [Issue a credential for a returning guest to a single room.](credential-types/issuing-various-types-of-guest-mobile-credentials.md#returning-guest-to-a-single-room)
* [Issue credentials for multiple guests in multiple rooms.](credential-types/issuing-various-types-of-guest-mobile-credentials.md#multiple-guests-in-multiple-rooms)

```python
acs_user = seam.acs.user.get(acs_user_id="xxx")

new_guest_room = seam.acs.entrances.list(
  acs_system_id=hotel_acs_system_id
)[0]

seam.acs.credentials.create(
  acs_user_id=acs_user.acs_user_id
  credential_manager_acs_system_id="xxx"
  is_multi_phone_sync_credential=True,
  access_method="mobile_key",
  starts_at="2023-01-01 10:40:00.000",
  ends_at="2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids=[
    new_guest_room.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "is_override_key": True
  }
)
```

```python
guest_room_1 = seam.acs.entrances.list(
  acs_system_id=hotel_acs_system_id
)[0]

guest_room_2 = seam.acs.entrances.list(
  acs_system_id=hotel_acs_system_id
)[0]

first_acs_user = seam.acs.user.get(acs_user_id="xxx")

# First credential should be an override credential.
first_credential = seam.acs.credentials.create(
  acs_user_id=first_acs_user.acs_user_id
  credential_manager_acs_system_id="xxx"
  is_multi_phone_sync_credential=True,
  access_method="mobile_key",
  starts_at="2023-01-01 10:40:00.000",
  ends_at="2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids=[
    guest_room_1.acs_entrance_id,
    guest_room_2.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "is_override_key": True
  }
)

second_acs_user = seam.acs.user.get(acs_user_id="yyy")

# Subsequent credentials should be joiners to the first credential.
seam.acs.credentials.create(
  acs_user_id=second_acs_user.acs_user_id
  credential_manager_acs_system_id="xxx"
  is_multi_phone_sync_credential=True,
  access_method="mobile_key",
  starts_at="2023-01-01 10:40:00.000",
  ends_at="2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids=[
    guest_room_1.acs_entrance_id,
    guest_room_2.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "joiner_acs_credential_ids": [first_credential.acs_credential_id]
  }
)
```

***

## Issue Joiner Mobile Credentials

* [Join to a Seam mobile credential.](credential-types/issuing-various-types-of-guest-joiner-mobile-credentials.md#join-to-a-seam-mobile-credential)
* [Join to a plastic card.](credential-types/issuing-various-types-of-guest-joiner-mobile-credentials.md#join-to-a-plastic-card)

```python
joiners = [joiner_mobile_parent_sync_credential, joiner_mobile_child_credential]

# Create the mobile credential.
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

## Additional Scenarios

* [Update guest mobile credentials.](credential-types/updating-guest-mobile-credentials.md)
* [Revoke a mobile credential.](credential-types/revoking-mobile-credentials.md)
* [Remove a user identity.](../../api/user_identities/delete.md)