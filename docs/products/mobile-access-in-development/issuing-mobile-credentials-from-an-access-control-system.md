---
description: Learn how to create mobile credentials across a user's multiple phones.
---

# Issuing Mobile Credentials from an Access Control System

## Overview

A credential manager, such as [HID Origo Mobile Identities](https://origo.hidglobal.com/developers), is a cloud-based service responsible for issuing [mobile credentials](./#managing-mobile-credentials) and keeping track of which mobile credentials have been issued to which phones. Enrolling the phone with the credential manager is a prerequisite for issuing mobile credentials. Seam streamlines this registration through an enrollment automation that automatically detects when new phones come online for a [user identity](managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) and facilitates the enrollment process with the credential manager.

After setting up the enrollment automation, you can begin to issue mobile credentials to phones. Typically, without Seam, you would have to wait for a phone to complete enrollment before you could start sending credentials. Seam, however, simplifies this process by enabling you to preconfigure the mobile credential details. As soon as a new phone is enrolled successfully, Seam automatically issues the designated mobile credential to it.

***

## Prepare the Phones for a User Identity to Start Receiving Mobile Credentials Using an Enrollment Automation

An enrollment automation initializes the phones for a user identity with a credential manager. Once enabled for a user identity, the automation oversees the registration of each new phone with a credential manager.

### Initialize the User Identity with a Credential Manager

To set up an enrollment automation, call the [Launch Enrollment Automation](../../api-clients/user-identities/enrollment-automations/launch-an-enrollment-automation.md) function with the ID of the user identity (`user_identity_id`) and the system ID of the credential manager (`credential_manager_acs_system_id`).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.enrollment_automations.launch(
  user_identity_id = "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  credential_manager_acs_system_id = "6737e186-8d54-48ce-a7da-a0be4d252172"
)
```

**Response:**

```
EnrollmentAutomation(user_identity_id='5c945ab5-c75e-4bcb-8e5f-9410061c401f',
    enrollment_automation_id='05505650-aa57-49ab-8f19-429738758895',
    acs_credential_provisioning_automation_id='05505650-aa57-49ab-8f19-429738758895',
    credential_manager_acs_system_id='6737e186-8d54-48ce-a7da-a0be4d252172',
    is_running=True,
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at="2024-01-09T05:45:33.068Z")
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/enrollment_automations/launch' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
  "acs_credential_pool_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "create_credential_manager_user": true
}'
```

**Response:**

```json
{
  "enrollment_automation": {
    "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "is_running": true,
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-09T05:45:33.068Z"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(context.Background(), &useridentities.EnrollmentAutomationsLaunchRequest{
    UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172",
    AcsCredentialPoolId: api.String("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
    CreateCredentialManagerUser: api.Bool(true),
})

if uErr != nil {
    return uErr
}

fmt.Println(enrollmentAutomation)
return nil
```

**Response:**

```json
{
    "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "is_running": true,
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-09T05:45:33.068Z"
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
We may automate this step in the next iteration of our API. Consequently, you may not need to perform this step in the future.
{% endhint %}

***

## What Are Multi-Phone Sync Credentials?

When issuing mobile credentials for a mobile app user, it is necessary to issue a multi-phone sync credential. As [Managing Phones for a User Identity](managing-phones-for-a-user-identity.md) describes, a user identity (that is, a mobile app user) may possess multiple phones. To guarantee access across all of the phones for the user identity, the multi-phone sync credential manages the distribution of credentials to each phone linked to the user identity. The multi-phone sync credential also imports the credentials into the ACS and allocates them to the corresponding ACS user.

<figure><img src="../../.gitbook/assets/image (9).png" alt="The multi-phone sync credential creates one credential per phone for the user identity." width="563"><figcaption></figcaption></figure>

***

## Issuing Multi-Phone Sync Credentials

To issue mobile credentials, you must configure a multi-phone sync credential. This type of credential automatically replicates itself when the app user logs in on a new phone. To configure a multi-phone sync credential, include the ID of the ACS user (`acs_user_id`), set `is_multi_phone_sync_credential` to `true`, and include the card details that would be shared across these credentials.

{% hint style="info" %}
Seam configures the card details that you include in the request across all the credentials that it creates for each phone. Include only common card details, such as the [facility code](https://www.idwholesaler.com/learning-center/26-bit-proximity-card/), and omit any unique card details such as the card number. For more information about specific card properties, see the user guide for the access control system or credential manager.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.acs.credentials.create(
  is_multi_phone_sync_credential = True,
  acs_user_id = "4d223973-0874-4831-8630-bfcb29e6bce0",
  access_method = "mobile_key",  
  # System-specific properties
  card_format = "rfid48",
  facility_code = "9",
)
```

**Response:**

```
AcsCredential(acs_credential_id='28dd02cb-7d54-42ee-94b4-1e70af0b21e1',
    acs_user_id='4d223973-0874-4831-8630-bfcb29e6bce0',
    display_name='Multi Phone Sync Credential',
    code=null,
    acs_system_id='8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4',
    access_method='mobile_key',
    workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
    created_at='2024-01-11T10:42:25.848Z',
    is_multi_phone_sync_credential=True)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer seam_test2scj_2c636ceHmdU1ZJEHp5svCZgy' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0",
  "is_multi_phone_sync_credential": true,
  "card_format": "rfid48",
  "facility_code": "9",
  "access_method": "mobile_key"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "28dd02cb-7d54-42ee-94b4-1e70af0b21e1",
    "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0",
    "display_name": "Multi Phone Sync Credential",
    "code": null,
    "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
    "access_method": "mobile_key",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-11T10:42:25.848Z",
    "is_multi_phone_sync_credential": true
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
acsCredential, uErr := client.Acs.Credentials.Create(context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
    IsMultiPhoneSyncCredential: api.Bool(true),
    CardFormat: acs.CredentialsCreateRequestCardFormatRfid48.Ptr(),
    // FacilityCode: "9",
    AccessMethod: "mobile_key",
})

if uErr != nil {
    return uErr
}

fmt.Println(acsCredential)
return nil
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "4b7705a6-59a4-4885-a9bc-72eb27277558",
    "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0",
    "display_name": "Multi Phone Sync Credential",
    "code": null,
    "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
    "access_method": "mobile_key",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-11T11:47:57.039Z",
    "is_multi_phone_sync_credential": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
