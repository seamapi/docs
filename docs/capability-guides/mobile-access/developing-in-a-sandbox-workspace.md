# Developing in a Sandbox Workspace

Seam's sandbox workspaces enable you to develop integrations without access to a real system. Use your sandbox workspace to test out issuing mobile keys and other related aspects of your integration.

## Creating a Simulated Phone for a User Identity

When issuing mobile credentials, some systems require the user identity to have a provisioned phone. While you are developing and testing your integration, you can add a simulated phone in your sandbox workspace. Use the following flow to [add a simulated phone](../../api/phones/simulate/create_sandbox_phone.md) for a user identity:

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
# Step 1: Create the user identity.
user_identity = seam.user_identities.create(
  user_identity_key = "jean_doe",
  full_name = "Jean Doe"
)

# Step 2: Launch an enrollment automation.
# Use the acs_system_id of the credential manager.
seam.user_identities.enrollment_automations.launch(
  user_identity_id = user_identity.user_identity_id,
  credential_manager_acs_system_id = credential_manager.acs_system_id,
  create_credential_manager_user = True
)

# Step 3: Create a simulated, sandbox phone.
seam.phones.simulate.create_sandbox_phone(
  user_identity_id = user_identity.user_identity_id
)
```

**Output:**

```
UserIdentity(
  user_identity_id='22222222-2222-2222-2222-222222222222',
  user_identity_key='jean_doe',
  full_name='Jean Doe',
  ...
)

EnrollmentAutomation(
  user_identity_id='22222222-2222-2222-2222-222222222222',
  enrollment_automation_id='77777777-8888-7777-7777-888888888888',
  ...
)

Phone(
  device_id='22222222-2222-2222-2222-444444444444',
  device_type='android_phone',
  created_at='2025-01-01T10:40:00+00:00',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Step 1: Create the user identity.
user_identity=$(curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_key": "jean_doe",
  "full_name": "Jean Doe"
}')

# Step 2: Launch an enrollment automation.
# Use the acs_system_id of the credential manager.
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/enrollment_automations/launch' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${user_identity})\",
  \"credential_manager_acs_system_id\": \"${credential_manager_acs_system_id}\",
  \"create_credential_manager_user\": true
}"

# Step 3: Create a simulated, sandbox phone.
curl -X 'POST' \
  'https://connect.getseam.com/phones/simulate/create_sandbox_phone' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"user_identity_id\": \"$(jq -r '.user_identity.user_identity_id' <<< ${user_identity})\"
}"
```

**Response:**

```json
{
  "user_identity": {
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "full_name": "Jean Doe",
    ...
  },
  "ok": true
}

{
  "enrollment_automation": {
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "enrollment_automation_id": "77777777-8888-7777-7777-888888888888",
    ...
  },
  "ok": true
}

{
  "phone": {
    "device_id": "22222222-2222-2222-2222-444444444444",
    "device_type": "android_phone",
    "created_at": "2025-01-01T10:40:00+00:00",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Command:**

```javascript
// Step 1: Create the user identity.
const userIdentity = await seam.userIdentities.create({
  user_identity_key: "jean_doe",
  full_name: "Jean Doe",
});

// Step 2: Launch an enrollment automation.
// Use the acs_system_id of the credential manager.
await seam.userIdentities.enrollmentAutomations.launch({
  user_identity_id: userIdentity.user_identity_id,
  credential_manager_acs_system_id: credentialManager.acs_system_id,
  create_credential_manager_user: true,
});

// Step 3: Create a simulated, sandbox phone.
await seam.phones.simulate.createSandboxPhone({
  user_identity_id: userIdentity.user_identity_id,
});
```

**Output:**

```json
{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "full_name": "Jean Doe",
  ...
}

{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "enrollment_automation_id": "77777777-8888-7777-7777-888888888888",
  ...
}

{
  "device_id": "22222222-2222-2222-2222-444444444444",
  "device_type": "android_phone",
  "created_at": "2025-01-01T10:40:00+00:00",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Command:**

```ruby
# Step 1: Create the user identity.
user_identity = seam.user_identities.create(
  user_identity_key: "jean_doe",
  full_name: "Jean Doe",
)

# Step 2: Launch an enrollment automation.
# Use the acs_system_id of the credential manager.
seam.user_identities.enrollment_automations.launch(
  user_identity_id: user_identity.user_identity_id,
  credential_manager_acs_system_id: credential_manager.acs_system_id,
  create_credential_manager_user: true,
)

# Step 3: Create a simulated, sandbox phone.
seam.phones.simulate.create_sandbox_phone(
  user_identity_id: user_identity.user_identity_id,
)
```

**Output:**

```
<Seam::Resources::UserIdentity:0x005f0
  user_identity_id="22222222-2222-2222-2222-222222222222"
  full_name="Jean Doe"
  ...
>

<Seam::Resources::EnrollmentAutomation:0x005f0
  user_identity_id="22222222-2222-2222-2222-222222222222"
  enrollment_automation_id="77777777-8888-7777-7777-888888888888"
  ...
>

<Seam::Resources::Phone:0x005f0
  device_id="22222222-2222-2222-2222-444444444444"
  device_type="android_phone"
  created_at="2025-01-01T10:40:00+00:00"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Command:**

```php
// Step 1: Create the user identity.
$seam->user_identities->create(
  user_identity_key: "jean_doe",
  full_name: "Jean Doe"
);

// Step 2: Launch an enrollment automation.
// Use the acs_system_id of the credential manager.
$seam->user_identities->enrollment_automations->launch(
  user_identity_id: $user_identity->user_identity_id,
  credential_manager_acs_system_id: $credential_manager->acs_system_id,
  create_credential_manager_user: true
);

// Step 3: Create a simulated, sandbox phone.
$seam->phones->simulate->create_sandbox_phone(
  user_identity_id: $user_identity->user_identity_id
);
```

**Output:**

```json
{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "full_name": "Jean Doe",
  ...
}

{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "enrollment_automation_id": "77777777-8888-7777-7777-888888888888",
  ...
}

{
  "device_id": "22222222-2222-2222-2222-444444444444",
  "device_type": "android_phone",
  "created_at": "2025-01-01T10:40:00+00:00",
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

{% tab title="Go" %}
**Command:**

```go
// Step 1: Create the user identity.
userIdentity, uErr := client.UserIdentities.Create(
  context.Background(),
  &api.UserIdentitiesCreateRequest{
    UserIdentityKey: api.String("jean_doe"),
    FullName: api.String("Jean Doe"),
})

if uErr != nil {
    return uErr
}

fmt.Println(userIdentity)

// Step 2: Launch an enrollment automation.
// Use the acs_system_id of the credential manager.
enrollmentAutomation, uErr := client.UserIdentities.EnrollmentAutomations.Launch(
  context.Background(),
  &api.EnrollmentAutomationsLaunchRequest{
    UserIdentityId: userIdentity.user_identity_id,
    CredentialManagerAcsSystemId: credentialManager.acs_system_id,
    CreateCredentialManagerUser: api.Bool(true),
})

if uErr != nil {
    return uErr
}

fmt.Println(enrollmentAutomation)

// Step 3: Create a simulated, sandbox phone.
phone, uErr := client.phones.simulate.CreateSandboxPhone(
  context.Background(),
  &api.PhonesSimulateCreateSandboxPhoneRequest{
    UserIdentityId: userIdentity.user_identity_id,
})

fmt.Println(phone)

return nil
```

**Output:**

```json
{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "full_name": "Jean Doe",
  ...
}

{
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "enrollment_automation_id": "77777777-8888-7777-7777-888888888888",
  ...
}

{
  "device_id": "22222222-2222-2222-2222-444444444444",
  "device_type": "android_phone",
  "created_at": "2025-01-01T10:40:00+00:00",
  ...
}
```
{% endtab %}
{% endtabs %}
