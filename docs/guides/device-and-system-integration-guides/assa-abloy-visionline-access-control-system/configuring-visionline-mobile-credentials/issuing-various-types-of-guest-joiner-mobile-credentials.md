---
description: Learn how to issue guest joiner credentials of various types.
---

# Issuing Various Types of Guest Joiner Mobile Credentials

In addition to understanding the [basic process for issuing guest joiner credentials](./#issue-subsequent-credentials-for-a-reservation), it is useful to know how to issue various specific types of guest joiner credentials.

## Before You Begin

To issue a [joiner credential](./#issue-subsequent-credentials-for-a-reservation), you must specify the guest door credentials with which to associate the new joiner credential. To identify and retrieve these existing valid credentials, use the following process:

1. Identify the guest entrances to which you want to issue the joiner credential.
2. Retrieve the existing guest credentials that have been issued for these guest entrances.
3. Issue the joiner credential and include these guest credentials as joiners.

{% tabs %}
{% tab title="Python" %}
```python
# Define the list of guest entrances to check.
guest_entrance_ids = [
    room_101.acs_entrance_id,
    room_102.acs_entrance_id,
]

# Initialize a list to hold credentials for each entrance.
all_credentials = []

# Retrieve all valid credentials for each entrance individually.
for entrance_id in guest_entrance_ids:
    credentials = seam.acs.entrances.list_credentials_with_access(
        acs_entrance_id=entrance_id,
        include_if=["visionline_metadata.is_valid"]
    )
    all_credentials.append({
        "entrance_id": entrance_id,
        "credentials": credentials
    })
```
{% endtab %}
{% endtabs %}

***

## Join to a Seam Mobile Credential

You can select either the multi-phone sync credential or the child credentials. Make sure to get the `acs_credential_id` to include in the `joiner_acs_credential_ids` list.

```python
joiners = [joiner_mobile_parent_sync_credential, joiner_mobile_child_credential]

# Create the mobile credential.
cred = seam.acs.credentials.create({
  acs_user_id: "xxx",
  credential_manager_acs_system_id="xxs"
  is_multi_phone_sync_credential: True,
  access_method = "mobile_key",
  allowed_acs_entrance_ids=[
    "xxxx"
  ],
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

## Join to a Plastic Card

You can join to a plastic card.

```python
joiners = [joiner_plastic_card_credential]

# Create the mobile credential.
cred = seam.acs.credentials.create({
    acs_user_id: "xxx",
    credential_manager_acs_system_id="xxs"
    is_multi_phone_sync_credential: True,
    access_method = "mobile_key",
    allowed_acs_entrance_ids=[
        "xxxx"
    ]
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
