---
description: Learn how to issue guest mobile credentials of various types.
---

# Issuing Various Types of Guest Mobile Credentials

In addition to understanding the [basic process for issuing guest mobile credentials](./#issuing-guest-mobile-credentials), it is useful to know how to issue guest mobile credentials of various types.&#x20;

## Single Guest in a Single Room

To issue a credential for a single guest in a single room, create an [override guest credential](./#issue-the-first-credential-for-a-reservation).&#x20;

```python
acs_user = seam.acs.user.get(acs_user_id="xxx")

guest_room = seam.acs.entrances.list(
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
    guest_room.acs_entrance_id,
    main_entrance.acs_entrance_id
  ],
  visionline_metadata={
    "cardFormat": "rfid48",
    "cardType": "guest",
    "label": "%ROOMNUM% - %SITENAME%",
    "override": True
  }
)
```

***

## Returning Guest to a Single Room

A new mobile key automatically overrides a previously-issued mobile credential.

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
    "override": True
  }
)
```

***

## Multiple Guests in Multiple Rooms

To issue credentials for multiple guests in multiple rooms, first create an [override guest credential](./#issue-the-first-credential-for-a-reservation). Then, create all subsequent guest credentials as [joiners](./#issue-subsequent-credentials-for-a-reservation).

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
    "override": True
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
