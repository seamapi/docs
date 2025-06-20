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

To set up an enrollment automation, call the [Launch Enrollment Automation](../../api/user_identities/enrollment_automations/launch.md) function with the ID of the user identity and the system ID of the credential manager. You can also choose to create a credential manager user.

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
seam.user_identities.enrollment_automations.launch(
  user_identity_id = "22222222-2222-2222-2222-222222222222",
  credential_manager_acs_system_id = "88888888-8888-8888-8888-888888888888",
  create_credential_manager_user = True
)
```

**Output:**

```
EnrollmentAutomation(
  user_identity_id='22222222-2222-2222-2222-222222222222',
  enrollment_automation_id='77777777-8888-7777-7777-888888888888',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/enrollment_automations/launch' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "credential_manager_acs_system_id": "88888888-8888-8888-8888-888888888888",
  "create_credential_manager_user": true
}'
```

**Response:**

```json
{
  "enrollment_automation": {
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "enrollment_automation_id": "77777777-8888-7777-7777-888888888888",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
await seam.userIdentities.enrollmentAutomations.launch({
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  create_credential_manager_user: true,
});
```

**Output:**

```json
{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "enrollment_automation_id": "77777777-8888-7777-7777-888888888888",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
seam.user_identities.enrollment_automations.launch(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  create_credential_manager_user: true,
)
```

**Output:**

```
<Seam::Resources::EnrollmentAutomation:0x005f0
  user_identity_id="22222222-2222-2222-2222-222222222222"
  enrollment_automation_id="77777777-8888-7777-7777-888888888888"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$seam->user_identities->->enrollment_automations->launch(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  create_credential_manager_user: true
);
```

**Output:**

```json
{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "enrollment_automation_id": "77777777-8888-7777-7777-888888888888",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Command:**

```csharp
Coming soon!
```

**Output:**

```json
Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Command:**

```java
Coming soon!
```

**Output:**

```json
Coming soon!
```
{% endtab %}


{% endtabs %}

{% hint style="info" %}
We may automate this step in a future iteration of our API. Consequently, you may not need to perform this step in the future.
{% endhint %}

***

## What Are Multi-Phone Sync Credentials?

When issuing mobile credentials for a mobile app user, it is necessary to issue a multi-phone sync credential. As [Managing Phones for a User Identity](managing-phones-for-a-user-identity.md) describes, a user identity (that is, a mobile app user) may possess multiple phones. To guarantee access across all of the phones for the user identity, the multi-phone sync credential manages the distribution of credentials to each phone linked to the user identity. The multi-phone sync credential also imports the credentials into the ACS and allocates them to the corresponding ACS user.

<figure><img src="../../.gitbook/assets/image (9) (1).png" alt="The multi-phone sync credential creates one credential per phone for the user identity." width="563"><figcaption></figcaption></figure>

***

## Issuing Multi-Phone Sync Credentials

To issue mobile credentials, you must configure a multi-phone sync credential. This type of credential automatically replicates itself when the app user logs in on a new phone. To configure a multi-phone sync credential, include the ID of the ACS user, set `is_multi_phone_sync_credential` to `true`, and include the card details that should be shared across these credentials.

Seam configures the card details that you include in the request across all the credentials that it creates for each phone. Include only common card details, such as the [facility code](https://www.idwholesaler.com/learning-center/26-bit-proximity-card/), and omit any unique card details, such as the card number. For more information about specific card properties, see the user guide for the access control system or credential manager.

{% hint style="info" %}
The code samples in this section contain manufacturer-specific metadata that may vary by ACS. For details, see the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
seam.acs.credentials.create(
  is_multi_phone_sync_credential=True,
  acs_user_id="33333333-3333-3333-3333-333333333333",
  access_method="mobile_key",
  credential_manager_acs_system_id="88888888-8888-8888-8888-888888888888",
  # ACS manufacturer-specific properties
  visionline_metadata={
    "cardFormat": "rfid48",
    "label": "%ROOMNUM% - %SITENAME%",
    "override": True
  },
  ...
)
```

**Output:**

```
AcsCredential(
  acs_credential_id='99999999-9999-9999-9999-999999999999',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='mobile_key',
  is_multi_phone_sync_credential=True,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Note the manufacturer-specific visionline_metadata in this request.
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "is_multi_phone_sync_credential": true,
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "credential_manager_acs_system_id": "88888888-8888-8888-8888-888888888888",
  "visionline_metadata": {
    "cardFormat": "rfid48",
    "label": "%ROOMNUM% - %SITENAME%",
    "override": true
  },
  ...
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "99999999-9999-9999-9999-999999999999",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "mobile_key",
    "is_multi_phone_sync_credential": true,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
await seam.acs.credentials.create({
  is_multi_phone_sync_credential: true,
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "mobile_key",
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  // ACS manufacturer-specific properties
  visionline_metadata: {
    "cardFormat": "rfid48",
    "label": "%ROOMNUM% - %SITENAME%",
    "override": true
  },
  ...
});
```

**Output:**

```json
{
  acs_credential_id: '99999999-9999-9999-9999-999999999999',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'mobile_key',
  is_multi_phone_sync_credential: true,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
seam.acs.credentials.create(
  is_multi_phone_sync_credential: true,
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "mobile_key",
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  # ACS manufacturer-specific properties
  visionline_metadata: {
    "cardFormat" => "rfid48",
    "label" => "%ROOMNUM% - %SITENAME%",
    "override" => true
  },
  ...
)
```

**Output:**

```
<Seam::Resources::AcsCredential:0x005f0
  acs_credential_id="99999999-9999-9999-9999-999999999999"
  acs_user_id="33333333-3333-3333-3333-333333333333"
  access_method="mobile_key"
  is_multi_phone_sync_credential=true
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$seam->acs->credentials->create(
  is_multi_phone_sync_credential: true,
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  access_method: "mobile_key",
  credential_manager_acs_system_id: "88888888-8888-8888-8888-888888888888",
  // ACS manufacturer-specific properties
  visionline_metadata => [
    "cardFormat" => "rfid48",
    "label" => "%ROOMNUM% - %SITENAME%",
    "override" => true
  ],
  ...
);
```

**Output:**

```json
{
  "acs_credential_id": "99999999-9999-9999-9999-999999999999",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Command:**

```csharp
Coming soon!
```

**Output:**

```json
Coming soon!
```
{% endtab %}

{% tab title="Java" %}
**Command:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}


{% endtabs %}
