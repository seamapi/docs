---
description: Learn how to create a mobile credential's across a user's multiple phones.
---

# Issuing mobile credentials from an access control system

## Overview

A credential manager, such as HID Origo Mobile Identities, is a cloud-based service responsible for issuing mobile credentials and keeping track of which mobile credentials have been issued to which phones. Enrolling the phone with the credential manager is a prerequisite for issuing mobile credentials. Seam streamlines this registration through an Enrollment Automation, which automatically detects when new phones come online for a user identity and facilitates the enrollment process with the credential manager.

After setting up the enrollment automation, you're ready to begin issuing mobile credentials to phones. Typically without Seam, you'd have to wait for a phone to complete enrollment before you can start sending credentials. Seam, however, simplifies this process by letting you pre-configure the mobile credential details. As soon as a new phone is successfully enrolled, Seam automatically issues the designated mobile credential to it.

***

## Prepare a User Identity's Phones to start receiving Mobile Credentials using an Enrollment Automation

An enrollment automation initializes a user identity's phones with a credential manager. Once enabled for a user identity, the automation oversees the registration of each new phone with a credential manager.

### Initialize the User Identity with a Credential Manager

To set up an enrollment automation, call the Launch Enrollment Automation function with the user identity's ID (`user_identity_id`), and the credential manager's system ID (`credential_manager_acs_system_id`):

```
seam.enrollment_automations.launch(
  user_identity_id=user_identity.user_identity_id,
  credential_manager_acs_system_id=credential_manager.acs_system_id
)
```

{% hint style="info" %}
Note, we may automate this step in the next iteration of our API. You may not need to perform this step in the future.
{% endhint %}

***

## What are Multi-phone Sync Credentials?

When issuing mobile credentials for a mobile app user, it's necessary to issue a Multi-Phone Sync Credential. As covered in [the previous section](managing-phones-on-a-user-identity.md), a user identity (a.k.a. a mobile app user) may possess multiple phones. To guarantee access across all of the user identity's phones, the Multi-Phone Sync Credential will manage the distribution of credentials to each phone linked to the user identity. It will also import the credentials into the ACS and allocate them to the corresponding ACS user.

<figure><img src="../../.gitbook/assets/image (9).png" alt="" width="563"><figcaption><p>The Multi-Phone Sync Credential creates one credential per user identity's phone.</p></figcaption></figure>

***

## Issuing Multi-Phone Sync Credentials

For issuing mobile credentials, you'll need to configure a multi phone sync credential. This type of credential will automatically replicate itself when the app user logs in on a new phone. To configure such a credential, simply include the ACS user's id (`acs_user_id`), set `is_multi_phone_sync_credential` to `true`, and include the card details that would be shared across these credentials.

{% hint style="info" %}
Note that the card details included in the request will be configured across all the credentials created for each phone. Include only common card details such as the ["facility code"](https://www.idwholesaler.com/learning-center/26-bit-proximity-card/), and omit any unique card details such as the "card number". For more information about specific card properties, consult the access control system or credential manager's guides.
{% endhint %}

```python
seam.acs.credentials.create(
  is_multi_phone_sync_credential=True,
  acs_user_id=acs_user.acs_user_id,
  
  # System-specific properties
  card_format="rfid48",
  facility_code="9",
)

# {
#   "is_multi_phone_sync_credential": True,
#   "is_issuing_credentials": True,
#   "credential_manager_acs_system_id": "...",
#   "acs_user_id": "...",
#   "card_format": "rfid48",
#   "facility_code": "9",
#   "external_type": None,
#   "acs_system_id": "...",
#   "is_mobile_key": True,
# }
```
