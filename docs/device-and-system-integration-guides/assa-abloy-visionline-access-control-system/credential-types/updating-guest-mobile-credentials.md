---
description: Learn how to update guest credentials.
---

# Updating Guest Mobile Credentials

Instead of updating a guest credential, you can issue a new [joiner credential](./#issue-subsequent-credentials-for-a-reservation) with the updated parameters. Seam automatically replaces the old credential with the new one.

```python
# Creating a new mobile credential automatically revokes 
# the previous one.
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
