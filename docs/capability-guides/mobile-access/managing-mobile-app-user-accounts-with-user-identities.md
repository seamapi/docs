---
description: Learn how to use Seam user identities to manage mobile app user accounts.
---

# Managing Mobile App User Accounts with User Identities

## What is a User Identity?

Seam user identities are a feature for tracking and managing user accounts in your application. This feature assigns unique identifiers to each of your users, enabling you to issue and manage their [mobile credentials](./#managing-mobile-credentials) and access permissions. Each user identity is mapped to a user account in your app.

<figure><img src="../../.gitbook/assets/identities accounts.png" alt="Each user identity is mapped to a user account in your app." width="563"><figcaption></figcaption></figure>

### User Identities Can Be Connected to Users in Multiple Access Control Systems

User identities can be linked to one [ACS user](../../products/access-systems/#what-is-a-user) in each access control system. Any mobile credentials issued to these ACS users are consolidated under the user identity. Consequently, a user's mobile app account has access to these credentials through the user identity.

<figure><img src="../../.gitbook/assets/acs identites.png" alt="A user identity can be connected to an ACS user in each ACS." width="563"><figcaption></figcaption></figure>

***

## Create a User Identity and Associate it with an ACS User

### 1. Create a User Identity

To [create a user identity](../../api/user_identities/create.md), you can specify any of the following characteristics:

* Unique user identity key (`user_identity_key`)
* Unique email address (`email_address`)
* Unique phone number (`phone_number`)
* Full name (`full_name`)

Note that if you specify one or more of the `user_identity_key`, `email_address`, or `phone_number`, each of these values must be unique within your [workspace](../../core-concepts/workspaces/).

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
seam.user_identities.create(
  user_identity_key = "jean_doe",
  email_address = "jean@example.com",
  phone_number = "+15555550110",
  full_name = "Jean Doe"
)
```

**Output:**

```
UserIdentity(
  user_identity_id='22222222-2222-2222-2222-222222222222',
  user_identity_key='jean_doe',
  email_address='jean@example.com',
  phone_number='+15555550110',
  display_name='Jean Doe',
  full_name='Jean Doe',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
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
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "user_identity_key": "jean_doe",
    "email_address": "jean@example.com",
    "phone_number": "+15555550110",
    "display_name": "Jean Doe",
    "full_name": "Jean Doe",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
await seam.userIdentities.create({
  user_identity_key: "jean_doe",
  email_address: "jean@example.com",
  phone_number: "+15555550110",
  full_name: "Jean Doe",
});
```

**Output:**

```json
{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "display_name": "Jean Doe",
  "full_name": "Jean Doe",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
seam.user_identities.create(
  user_identity_key: "jean_doe",
  email_address: "jean@example.com",
  phone_number: "+15555550110",
  full_name: "Jean Doe",
)
```

**Output:**

```
<Seam::Resources::UserIdentity:0x005f0
  user_identity_id="22222222-2222-2222-2222-222222222222"
  user_identity_key="jean_doe"
  email_address="jean@example.com"
  phone_number="+15555550110"
  display_name="Jean Doe"
  full_name="Jean Doe"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$seam->user_identities->create(
  user_identity_key: "jean_doe",
  email_address: "jean@example.com",
  phone_number: "+15555550110",
  full_name: "Jean Doe"
);
```

**Output:**

```json
{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "user_identity_key": "jean_doe",
  "email_address": "jean@example.com",
  "phone_number": "+15555550110",
  "display_name": "Jean Doe",
  "full_name": "Jean Doe",
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

### 2. Assign an ACS User to the User Identity

To [link an ACS user with a user identity](../../api/user_identities/add_acs_user.md), provide the ID of the user identity and the ID of the ACS user.

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
user_identity = seam.user_identities.get(
  email_address = "jean@example.com"
)

acs_user = seam.acs.users.get(
  email_address = "jean@example.com"
)

seam.user_identities.add_acs_user(
  user_identity_id = user_identity.user_identity_id,
  acs_user_id = acs_user.acs_user_id
)
```

**Output:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/user_identities/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"email_address\": \"jane@example.com\"
}")

# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/users/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"email_address\": \"jane@example.com\"
}")


curl -X 'POST' \
  'https://connect.getseam.com/user_identities/add_acs_user' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d "{
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${user_identity})\",
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${acs_user})\",
}"
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
const userIdentity = await seam.userIdentities.get({
  email_address: "jean@example.com",
});

const acsUser = await seam.acs.users.get({
  email_address: "jean@example.com",
});

await seam.userIdentities.addAcsUser({
  user_identity_id: userIdentity.user_identity_id,
  acs_user_id: acsUser.acs_user_id,
});
```

**Output:**

```
// void
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
user_identity = seam.user_identities.get(
  email_address: "jane@example.com"
)

acs_user = seam.acs.users.get(
  email_address: "jane@example.com"
)

seam.user_identities.add_acs_user(
  user_identity_id: user_identity.user_identity_id,
  acs_user_id: acs_user.acs_user_id,
)
```

**Output:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$user_identity = $seam->user_identities->get(
  email_address: "jean@example.com",
);

$acs_user = $seam->acs->users->get(
  email_address: "jean@example.com",
);

$seam->user_identities->add_acs_user(
    user_identity_id: $user_identity->user_identity_id,
    acs_user_id: $acs_user->acs_user_id
);
```

**Output:**

```
null
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

***

## Removing a User Identity

To delete a user identity, you must first delete any [ACS credentials](../../api/acs/credentials/delete.md), [ACS users](../../api/acs/users/delete.md), and [enrollment automations](../../api/user_identities/enrollment_automations/) associated with the user identity. You must also deactivate any associated phones. Then, delete the user identity.

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
import asyncio

user_identity_id = "22222222-2222-2222-2222-222222222222"

async def delete_user_identity(user_identity_id):
  # Step 1: List and delete all client sessions 
  # associated with the user identity.
  
  # List the client sessions.
  client_sessions = await seam.client_sessions.list(
    user_identity_id = user_identity_id
  )

  # Delete the client sessions.
  for session in client_sessions:
    await seam.client_sessions.delete(
      session_id=session['client_session_id']
    )

  # Step 2: List and delete all ACS users and credentials 
  # associated with the user identity.
  
  # List the ACS users.
  acs_users = await seam.acs.users.list(
    user_identity_id=user_identity_id
  )

  for acs_user in acs_users:
    # List the credentials for each ACS user.
    credentials = await seam.acs.credentials.list(
      acs_user_id=acs_user['acs_user_id']
    )

    # Delete the credentials.
    for credential in credentials:
      await seam.acs.credentials.delete(
        acs_credential_id=credential['acs_credential_id']
      )
    
      await asyncio.gather(*[
        wait_for_acs_credential_deleted(credential)
        for credential in credentials
      ])
    
    # Delete the ACS users.
    await seam.acs.users.delete(
      acs_user_id=acs_user['acs_user_id']
    )

    await asyncio.gather(*[
      wait_for_acs_user_deleted(acs_user) for acs_user in acs_users
    ])

  # Step 3: List and delete all enrollment automations 
  # associated with the user identity.
  
  # List the enrollment automations.
  enrollment_automations = await seam.user_identities.enrollment_automations.list(
      user_identity_id=user_identity_id
  )

  # Delete the enrollment automations.
  for automation in enrollment_automations:
    await seam.user_identities.enrollment_automations.delete(
      enrollment_automation_id=automation['enrollment_automation_id']
    )

  await asyncio.gather(*[
    wait_for_enrollment_automation_deleted(automation)
    for automation in enrollment_automations
  ])

  # Step 4: List and deactivate all phones 
  # associated with the user identity.
  
  # List the phones.
  phones = await seam.phones.list(
    owner_user_identity_id=user_identity_id
  )

  # Deactivate the phones.
  for phone in phones:
    await seam.phones.deactivate(
      device_id=phone['device_id']
    )

  await asyncio.gather(*[
    wait_for_phone_deactivated(phone) for phone in phones
  ])

  # Step 5: Delete the user identity.
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

async def wait_for_phone_deactivated(phone):
  await wait_for_event(
    'phone.deactivated',
    lambda event: 'device_id' in event and
                  event.device_id == phone.device_id
  )

await delete_user_identity(user_identity_id)
```

**Output:**

```
None
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
const userIdentityId = "22222222-2222-2222-2222-222222222222";

// Step 1: List and delete all client sessions 
// associated with the user identity.

// List the client sessions.
const clientSessions = await seam.clientSessions.list({
  user_identity_id: userIdentityId,
});

// Delete each returned client session.
for (const clientSession of clientSessions) {
  await seam.clientSessions.delete({
    client_session_id: clientSession.client_session_id,
  });
}

// Step 2: List and delete all ACS users and credentials 
// associated with the user identity.

// List the ACS users.
const acsUsers = await seam.acs.users.list({
  user_identity_id: userIdentityId,
});

for (const acsUser of acsUsers) {
  // For each returned ACS user, list the associated credentials.
  const credentials = await seam.acs.credentials.list({
    acs_user_id: acsUser.acs_user_id,
  });
  
  // Delete each returned credential.
  for (const credential of credentials) {
    await seam.acs.credentials.delete({
      acs_credential_id: credential.acs_credential_id,
    });
  
    // Wait until each credential has been deleted.
    // You can watch for acs_credential.deleted events.
  
  }
    
  // Delete each ACS user returned previously.
  await seam.acs.users.delete({
    acs_user_id: acsUser.acs_user_id,
  });

  // Wait until each ACS user has been deleted.
  // You can watch for acs_user.deleted events.
  
}

// Step 3: List and delete all enrollment automations 
// associated with the user identity.

// List the enrollment automations.
const enrollmentAutomations = await seam.userIdentities.enrollmentAutomations.list({
  user_identity_id: userIdentityId,
});

// Delete each returned enrollment automation.
for (const enrollmentAutomation of enrollmentAutomations) {
  await seam.userIdentities.enrollmentAutomations.delete({
    enrollment_automation_id: enrollmentAutomation.enrollment_automation_id,
  });

  // Wait until each enrollment automation has been deleted.
  // You can watch for enrollment_automation.deleted events.

}

// Step 4: List and deactivate all phones 
// associated with the user identity.

// List the phones.
const phones = await seam.phones.list({
  owner_user_identity_id: userIdentityId,
});

// Deactivate each returned phone.
for (const phone of phones) {
  await seam.phones.deactivate({
    device_id: phone.device_id,
  });

  // Wait until each phone has been deactivated.
  // You can watch for phone.deactivated events.

}

// Step 5: Delete the user identity.
await seam.userIdentities.delete({
  user_identity_id: userIdentityId,
});
```

**Output:**

```
// void
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
user_identity_id = "22222222-2222-2222-2222-222222222222"

# Step 1: List and delete all client sessions 
# associated with the user identity.

# List the client sessions.
client_sessions = seam.client_sessions.list(
  user_identity_id: user_identity_id
)

# Delete each returned client session.
client_sessions.each do |client_session|
  seam.client_sessions.delete(
    client_session_id: client_session.client_session_id
  )
end

# Step 2: List and delete all ACS users and credentials 
# associated with the user identity.

# List the ACS users.
acs_users = seam.acs.users.list(
  user_identity_id: user_identity_id
)

acs_users.each do |acs_user|
  # For each returned ACS user, list the associated credentials.
  credentials = seam.acs.credentials.list(
    acs_user_id: acs_user.acs_user_id
  )
  
  # Delete each returned credential.
  credentials.each do |credential|
    seam.acs.credentials.delete(
      acs_credential_id: credential.acs_credential_id
    )
  
    # Wait until each credential has been deleted.
    # You can watch for acs_credential.deleted events.
  
  end
    
  # Delete each ACS user returned previously.
  seam.acs.users.delete(
      acs_user_id: acs_user.acs_user_id
  )

  # Wait until each ACS user has been deleted.
  # You can watch for acs_user.deleted events.
  
end

# Step 3: List and delete all enrollment automations 
# associated with the user identity.

# List the enrollment automations.
enrollment_automations = seam.user_identities.enrollment_autoations.list(
  user_identity_id: user_identity_id
)

# Delete each returned enrollment automation.
enrollment_automations.each do |enrollment_automation|
  seam.user_identities.enrollment_automations.delete(
    enrollment_automation_id: enrollment_automation.enrollment_automation_id
  )

  # Wait until each enrollment automation has been deleted.
  # You can watch for enrollment_automation.deleted events.

end

# Step 4: List and deactivate all phones 
# associated with the user identity.

# List the phones.
phones = seam.phones.list(
  owner_user_identity_id: user_identity_id
)

# Deactivate each returned phone.
phones.each do |phone|
  seam.phones.deactivate(
    device_id: phone.device_id
  )

  # Wait until each phone has been deactivated.
  # You can watch for phone.deactivated events.

end

# Step 5: Delete the user identity.
seam.user_identities.delete(
  user_identity_id: user_identity_id
)
```

**Output:**

```
nil
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
$user_identity_id = "22222222-2222-2222-2222-222222222222";

// Step 1: List and delete all client sessions 
// associated with the user identity.

// List the client sessions.
$client_sessions = $seam->client_sessions->list(
  user_identity_id: $user_identity_id
);

// Delete each returned client session.
foreach ($client_sessions as $client_session) {
  $seam->client_sessions->delete(
      client_session_id: $client_session->client_session_id
  );
}

// Step 2: List and delete all ACS users and credentials 
// associated with the user identity.

// List the ACS users.
$acs_users = $seam->acs->users->list(
  user_identity_id: $user_identity_id
);

foreach ($acs_users as $acs_user) {
  // For each returned ACS user, list the associated credentials.
  $credentials = $seam->acs->credentials->list(
    acs_user_id: $acs_user->acs_user_id
  );
  
  // Delete each returned credential.
  foreach ($credentials as $credential) {
    $seam->acs->credentials->delete(
      acs_credential_id: $credential->acs_credential_id
    );
  
    // Wait until each credential has been deleted.
    // You can watch for acs_credential.deleted events.
  
  }
    
  // Delete each ACS user returned previously.
  $seam->acs->users->delete(
      acs_user_id: $acs_user->acs_user_id
  );

  // Wait until each ACS user has been deleted.
  // You can watch for acs_user.deleted events.
  
}

// Step 3: List and delete all enrollment automations 
// associated with the user identity.

// List the enrollment automations.
$enrollment_automations = $seam->user_identities->enrollment_automations->list(
  user_identity_id: $user_identity_id
);

// Delete each returned enrollment automation.
foreach ($enrollment_automations as $enrollment_automation) {
  $seam->user_identities->enrollment_automations->delete(
    enrollment_automation_id: $enrollment_automation->enrollment_automation_id
  );

  // Wait until each enrollment automation has been deleted.
  // You can watch for enrollment_automation.deleted events.

}

// Step 4: List and deactivate all phones 
// associated with the user identity.

// List the phones.
$phones = $seam->phones->list(
  owner_user_identity_id: $user_identity_id
);

// Deactivate each returned phone.
foreach ($phones as $phone) {
  $seam->phones->deactivate(
    device_id: $phone->device_id
  );

  // Wait until each phone has been deactivated.
  // You can watch for phone.deactivated events.

}

// Step 5: Delete the user identity.
$seam->user_identities->delete(
  user_identity_id: $user_identity_id
);
```

**Output:**

```
null
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
