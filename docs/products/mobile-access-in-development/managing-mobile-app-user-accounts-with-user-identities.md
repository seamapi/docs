---
description: Learn how to use Seam user identities to manage mobile app user accounts.
---

# Managing Mobile App User Accounts with User Identities

## What is a User Identity?

Seam user identities are a feature for tracking and managing user accounts in your application. This feature assigns unique identifiers to each of your users, enabling you to issue and manage their [mobile credentials](./#managing-mobile-credentials) and access permissions. Each user identity is mapped to a user account in your app.

<figure><img src="../../.gitbook/assets/identities accounts.png" alt="Each user identity is mapped to a user account in your app." width="563"><figcaption></figcaption></figure>

### User Identities Can Be Connected to Users in Multiple Access Control Systems

User identities can be linked to one [ACS user](../access-systems/#what-is-a-user) in each access control system. Any mobile credentials issued to these ACS users are consolidated under the user identity. Consequently, a user's mobile app account has access to these credentials through the user identity.

<figure><img src="../../.gitbook/assets/acs identites.png" alt="A user identity can be connected to an ACS user in each ACS." width="563"><figcaption></figcaption></figure>

***

## Create a User Identity and Associate it with an ACS User

### 1. Create a User Identity

To [create a user identity](../../api-clients/user_identities/create.md), you can specify any of the following characteristics:

* Unique user identity key (`user_identity_key`)
* Unique email address (`email_address`)
* Unique phone number (`phone_number`)
* Full name (`full_name`)

Note that if you specify one or more of the `user_identity_key`, `email_address`, or `phone_number`, each of these values must be unique within your [workspace](../../core-concepts/workspaces/).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.user_identities.create(
  user_identity_key = "jean_doe",
  email_address = "jean@example.com",
  phone_number = "+15555550110",
  full_name = "Jean Doe"
)
```

**Response:**

```
UserIdentity"(user_identity_id='48500a8e-5e7e-4bde-b7e5-0be97cae5d7a',
              user_identity_key='jean_doe',
              email_address='jean@example.com',
              phone_number='+15555550110',
              display_name='Jean Doe',
              full_name='Jean Doe',
              created_at='2024-01-11T05:37:50.264Z',
              workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be')
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "full_name": "Jean Doe"
}'
```

**Response:**

```json
{
  "user_identity": {
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
userIdentity, uErr := client.UserIdentities.Create(context.Background(), &useridentities.UserIdentitiesCreateRequest{
    UserIdentityKey: api.String("jenny_lee"),
    EmailAddress: api.String("jenny@example.com"),
    PhoneNumber: api.String("+15555550111"),
    FullName: api.String("Jenny Lee"),
})

if uErr != nil {
    return uErr
}

fmt.Println(userIdentity)
return nil
```

**Response:**

```json
{
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    "created_at": "2024-01-11T05:37:50.264Z",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be"
}
```
{% endtab %}
{% endtabs %}

### 2. Assign an ACS User to the User Identity

To [link an ACS user with a user identity](../../api-clients/user_identities/add_acs_user.md), provide the ID of the user identity and the ID of the ACS user.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
user_identity = seam.user_identities.get(email_address="jean@example.com")
acs_user = seam.acs.users.get(email_address="jean@example.com")

seam.user_identities.add_acs_user(
  user_identity_id=user_identity.user_identity_id,
  acs_user_id=acs_user.acs_user_id
)
```

**Response:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/add_acs_user' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "acs_user_id": "4d223973-0874-4831-8630-bfcb29e6bce0"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
_, uErr := client.UserIdentities.AddAcsUser(context.Background(), &useridentities.UserIdentitiesAddAcsUserRequest{
    UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    AcsUserId: "4d223973-0874-4831-8630-bfcb29e6bce0",
})

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```
None
```
{% endtab %}
{% endtabs %}

***

## Removing a User Identity

To delete a user identity, you must first delete any [ACS credentials](../../api-clients/acs/credentials/delete.md) and [enrollment automations](../../api-clients/user_identities/enrollment_automations/) associated with the user identity. You must also deactivate any associated phones. Then, delete the user identity.

```python
import asyncio

async def delete_user_identity(user_identity_id):
    # Delete the client sessions.
    client_sessions = await seam.client_sessions.list(
        user_identity_id=user_identity_id
    )

    for session in client_sessions:
        await seam.client_sessions.delete(
            session_id=session['client_session_id']
        )

    # Delete the ACS users and credentials.
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

    # Delete the enrollment automations.
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

    # Delete the phones.
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

    # Finally, delete the user identity.
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
