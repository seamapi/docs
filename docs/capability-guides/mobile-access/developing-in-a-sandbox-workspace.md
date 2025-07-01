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

# Step 2: Create a simulated, sandbox phone.
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

# Step 2: Create a simulated, sandbox phone.
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

// Step 2: Create a simulated, sandbox phone.
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

# Step 2: Create a simulated, sandbox phone.
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

// Step 2: Create a simulated, sandbox phone.
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
{% endtabs %}
