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
{% endtabs %}

***

## Removing a User Identity

When you [delete a user identity](../../api/user_identities/delete.md), Seam automatically cleans up all other associated resources.

{% tabs %}
{% tab title="Python" %}
**Command:**

```python
seam.user_identities.delete(
    user_identity_id = "22222222-2222-2222-2222-222222222222"
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
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/delete' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "22222222-2222-2222-2222-222222222222"
}'
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
await seam.userIdentities.delete({
  user_identity_id: "22222222-2222-2222-2222-222222222222",
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
seam.user_identities.delete(
  user_identity_id: "22222222-2222-2222-2222-222222222222"
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
$seam->user_identities->delete(
  user_identity_id: "22222222-2222-2222-2222-222222222222"
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
{% endtabs %}
