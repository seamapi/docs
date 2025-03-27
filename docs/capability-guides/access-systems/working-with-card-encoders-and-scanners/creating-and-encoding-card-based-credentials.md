---
description: >-
  Learn how to create a card-based credential and then encode this credential on
  a plastic card.
---

# Creating and Encoding Card-based Credentials

<figure><img src="../../../.gitbook/assets/encode-card.png" alt=""><figcaption></figcaption></figure>

Some access control systems require encoding a plastic card credential with the data necessary to enable access. This process involves creating a credential with the required access permissions and then using a card encoder to write the credential to the card.

This process consists of the following basic steps:

1. Set up an [ACS user](../../../products/access-systems/user-management.md) and create a [credential](../managing-credentials.md#create-a-card-based-credential) with the `access_method` set to `card`.\
   See the [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS provider to learn specific requirements, such as configuring entrances and access schedules.\
   See [Set Up an ACS User and Card Credential](creating-and-encoding-card-based-credentials.md#id-1.-set-up-an-acs-user-and-card-credential).
2. Use the `/acs/encoders/list` endpoint to retrieve a list of available encoders. Then, choose the encoder that you want to use to write the credential to the card.\
   See [Retrieve Encoders](creating-and-encoding-card-based-credentials.md#id-2.-retrieve-encoders).
3. Use the `/acs/encoders/encode_credential` endpoint to encode the credential on the card, using the encoder that you have chosen.\
   See [Encode the Card](creating-and-encoding-card-based-credentials.md#id-3.-encode-the-card).
4. Confirm that the card was encoded successfully using polling or a [webhook](../../../core-concepts/webhooks.md).\
   See [Confirm Successful Encoding](creating-and-encoding-card-based-credentials.md#id-4.-confirm-successful-encoding). Also, see a list of [common encoding errors](creating-and-encoding-card-based-credentials.md#common-encoding-errors).

Once you have written a credential to a card, you cannot reuse the credential for another card. That is, you must create a separate credential for each card. However, you can reuse a card by re-encoding the card with a new credential.

***

## 1. **Set Up an ACS User and Card Credential**

This example shows how to create an ACS user and card-based credential. Note that the `is_issued` property of the resulting credential is `false`, which means the the credential is ready to be written to a card and has not yet been used to encode a card.

{% hint style="info" %}
Depending on your specific access control system, creating an ACS user or credential may require additional parameters. For details, see the [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems) for your ACS.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Step 1:
# Create the new ACS user.
acs_user = seam.acs.users.create(
  acs_system_id = "11111111-1111-1111-1111-111111111111",
  full_name = "Jane Doe",
  email_address = "jane@example.com"
)

# Step 2:
# Create a card-based credential for each entrance for the ACS user.
credential = seam.acs.credentials.create(
  acs_user_id = acs_user.acs_user_id,
  access_method = "card",
  # List the IDs of the entrances to which
  # you want to grant access.
  allowed_acs_entrance_ids = [
    room_101.seam_acs_entrance_id
  ],
  starts_at = "2024-12-01T15:00:00.000Z",
  ends_at = "2024-12-04T12:00:00.000Z"
)
```

**Output:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='card',
  starts_at='2024-12-01T15:00:00.000Z',
  ends_at='2024-12-04T12:00:00.000Z',
  is_issued=False
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Step 1:
# Create the new ACS user.
acs_user=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"11111111-1111-1111-1111-111111111111\",
  \"full_name\": \"Jane Doe\",
  \"email_address\": \"jane@example.com\"
}")

# Step 2:
# Create a card-based credential for each entrance for the ACS user.
# In allowed_entrance_ids, list the IDs of the entrances to
# which you want to grant access.
credential=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${acs_user})\",
  \"access_method\": \"card\",
  \"allowed_acs_entrance_ids\": [
    \"${entrance_id}\"
  ],
  \"starts_at\": \"2024-12-01T15:00:00.000Z\",
  \"ends_at\": \"2024-12-04T12:00:00.000Z\"
}")
```

**Output:**

```json
{
  "acs_credential":
    {
      "acs_credential_id": "66666666-6666-6666-6666-666666666666",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "access_method": "card",
      "starts_at": "2024-12-01T15:00:00.000Z",
      "ends_at": "2024-12-04T12:00:00.000Z",
      "is_issued": false,
      ...
    },
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
// Step 1:
// Create the new ACS user.
const acsUser = await seam.acs.users.create({
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  full_name: "Jane Doe",
  email_address: "jane@example.com"
});

// Step 2:
// Create a card-based credential for each entrance for the ACS user.
const credential = await seam.acs.credentials.create({
  acs_user_id: acsUser.acs_user_id,
  access_method: "card",
  allowed_acs_entrance_ids: [
    // List the IDs of the entrances to which
    // you want to grant access.
    room101.seam_acs_entrance_id
  ],
  starts_at: "2024-12-01T15:00:00.000Z",
  ends_at: "2024-12-04T12:00:00.000Z"
});
```

**Output:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'card',
  starts_at: '2024-12-01T15:00:00.000Z',
  ends_at: '2024-12-04T12:00:00.000Z',
  is_issued: false,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Step 1:
# Create the new ACS user.
acs_user = seam.acs.users.create(
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  full_name: "Jane Doe",
  email_address: "jane@example.com"
)

# Step 2:
# Create a card-based credential for each entrance for the ACS user.
credential = seam.acs.credentials.create(
  acs_user_id: acs_user.acs_user_id,
  access_method: "card",
  # List the IDs of the entrances to which
  # you want to grant access.
  allowed_acs_entrance_ids: [
    room_101.seam_acs_entrance_id
  ],
  starts_at: "2024-12-01T15:00:00.000Z",
  ends_at: "2024-12-04T12:00:00.000Z"
)
```

**Output:**

```
<Seam::Resources::AcsCredential:0x00410
  acs_credential_id="66666666-6666-6666-6666-666666666666"
  acs_user_id="33333333-3333-3333-3333-333333333333"
  access_method="card"
  starts_at="2024-12-01T15:00:00.000Z"
  ends_at="2024-12-04T12:00:00.000Z"
  is_issued=false
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Step 1:
// Create the new ACS user.
$acs_user = $seam->acs->users->create(
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  full_name: "Jane Doe",
  email_address: "jane@example.com"
);

// Step 2:
// Create a card-based credential for each entrance for the ACS user.
$credential = $seam->acs->credentials->create(
  acs_user_id: $acs_user->acs_user_id,
  access_method: "card",
  allowed_acs_entrance_ids: [
    // List the IDs of the entrances to which
    // you want to grant access.
    $room_101->seam_acs_entrance_id
  ],
  starts_at: "2024-12-01T15:00:00.000Z",
  ends_at: "2024-12-04T12:00:00.000Z"
);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "starts_at": "2024-12-01T15:00:00.000Z",
  "ends_at": "2024-12-04T12:00:00.000Z",
  "is_issued": false,
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Step 1:
// Create the new ACS user.
AcsUser acsUser = seam.UsersAcs.Create(
  acsSystemId: "11111111-1111-1111-1111-111111111111",
  fullName: "Jane Doe",
  emailAddress: "jane@example.com"
);

// Step 2:
// Create a card-based credential for each entrance for the ACS user.
AcsCredential credential = seam.CredentialsAcs.Create(
  acsUserId: acsUser.acsUserId,
  accessMethod: "card",
  allowedAcsEntranceIds: new List<string>
  {
    // List the IDs of the entrances to which
    // you want to grant access.
    room_101.acsEntranceId
  },
  startsAt: "2024-12-01T15:00:00.000Z",
  endsAt: "2024-12-04T12:00:00.000Z"
);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "starts_at": "2024-12-01T15:00:00Z",
  "ends_at": "2024-12-04T12:00:00Z",
  "is_issued": false,
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
// Step 1:
// Create the new ACS user.
acs_user, err := client.Acs.Users.Create(
  context.Background(), &acs.UsersCreateRequest{
    AcsSystemId: "11111111-1111-1111-1111-111111111111",
    FullName: api.String("Jane Doe"),
    EmailAddress: api.String("jane@example.com"),
  },
)
if err != nil {
  return err
}

startsAt, err := time.Parse(time.RFC3339, "2024-12-01T15:00:00Z")
endsAt, err := time.Parse(time.RFC3339, "2024-12-04T12:00:00Z")
if err != nil {
  return err
}

// Step 2:
// Create a card-based credential for each entrance for the ACS user.
credential, err := client.Acs.Credentials.Create(
  context.Background(), &acs.CredentialsCreateRequest{
    AcsUserId: acs_user.AcsUserId,
    AccessMethod: "card",
    AllowedAcsEntranceIds: []string{
      // List the IDs of the entrances to which
      // you want to grant access.
      room_101.AcsEntranceId,
    },
    StartsAt: api.Time(startsAt),
    EndsAt: api.Time(endsAt),
  },
);
if err != nil {
  return err
};

return nil
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "starts_at": "2024-12-01T15:00:00Z",
  "ends_at": "2024-12-04T12:00:00Z",
  "is_issued": false,
  ...
}
```
{% endtab %}
{% endtabs %}

***

## 2. Retrieve Encoders

There may be multiple encoders at a location, so it’s important to select the right one to encode the credential.

This example shows how to retrieve all encoders in a building connected to a single ACS system. Once you've identified the encoder you'd like to use, grab the `acs_encoder_id` of the chosen encoder for the next step.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.acs.encoders.list(
  acs_system_ids = [building_system_id]
)
```

**Output:**

```
[
  AcsEncoder(
    acs_encoder_id='33333333-4444-5555-6666-777777777777',
    display_name='Front Desk',
    ...
  )
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/encoders/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_ids\": [\"${building_system_id}\"]
}"
```

**Output:**

```json
{
  "acs_encoders": [
    {
      "acs_encoder_id": "33333333-4444-5555-6666-777777777777",
      "display_name": "Front Desk",
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.acs.encoders.list({
  acs_system_ids: [buildingSystemId]
});
```

**Output:**

```json
[
  {
    acs_encoder_id: '33333333-4444-5555-6666-777777777777',
    display_name: 'Front Desk',
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.acs.encoders.list(
  acs_system_ids: [building_system_id]
)
```

**Output:**

```
[
  <Seam::Resources::AcsEncoder:0x00410
    acs_encoder_id="33333333-4444-5555-6666-777777777777"
    display_name="Front Desk"
    ...
  >,
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->acs->encoders->list(
  acs_system_ids: [building_system_id]
);
```

**Output:**

```json
[
  {
    "acs_encoder_id": "33333333-4444-5555-6666-777777777777",
    "display_name": "Front Desk",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
seam.EncodersAcs.List(
  acsSystemIds: new List<string>
  {
    buildingSystemId
  }
);
```

**Output:**

```json
{
  "acs_encoder_id": "33333333-4444-5555-6666-777777777777",
  "display_name": "Front Desk",
  ...
}
...
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
acs_encoders, err := client.Acs.Encoders.List(
  context.Background(), &acs.EncodersListRequest{
    AcsSystemIds: []string{
      building_system_id,
    },
  },
)
if err != nil {
  return err
}

return nil
```

**Output:**

```json
[
  {
    "acs_encoder_id": "33333333-4444-5555-6666-777777777777",
    "display_name": "Front Desk",
    ...
  },
  ...
]
```
{% endtab %}
{% endtabs %}

***

## 3. Encode the Card

Use `/acs/encoders/encode_credential` to start the card writing procedure that stores the credential data on the plastic key card.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
encoding_action_attempt = seam.acs.encoders.encode_credential(
  acs_credential_id = credential.acs_credential_id,
  acs_encoder_id = encoder.acs_encoder_id
)
```

**Output:**

```
ActionAttempt(
  status='pending',
  action_attempt_id='11111111-2222-3333-4444-555555555555',
  action_type='ENCODE_CREDENTIAL',
  result=null,
  error=null
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
encoding_action_attempt=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/encoders/encode_credential' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_credential_id\": \"$(jq -r '.acs_credential.acs_credential_id' <<< ${credential})\",
  \"acs_encoder_id\": \"${acs_encoder_id}\"
}")
```

**Output:**

```json
{
  "action_attempt":
    {
      "status": "pending",
      "action_attempt_id": "11111111-2222-3333-4444-555555555555",
      "action_type": "ENCODE_CREDENTIAL",
      "result": null,
      "error": null
    },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
const encodingActionAttempt = await seam.acs.encoders.encodeCredential({
  acs_credential_id: credential.acs_credential_id,
  acs_encoder_id: encoder.acs_encoder_id
});
```

**Output:**

```json
{
  status: 'pending',
  action_attempt_id: '11111111-2222-3333-4444-555555555555",
  action_type: 'ENCODE_CREDENTIAL',
  result: null,
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
encoding_action_attempt = seam.acs.encoders.encode_credential(
  acs_credential_id: credential.acs_credential_id,
  acs_encoder_id: encoder.acs_encoder_id
)
```

**Output:**

```
<Seam::Resources::ActionAttempt:0x00410
  status="pending"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  action_type="ENCODE_CREDENTIAL"
  result=nil
  error=nil
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$encoding_action_attempt = $seam->acs->encoders->encode_credential(
  acs_credential_id: $credential->acs_credential_id,
  acs_encoder_id: $encoder->acs_encoder_id
);
```

**Output:**

```json
{
  "status": "pending",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": null,
  "error": null
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
actionAttempt encodingActionAttempt = seam.EncodersAcs.EncodeCredential(
  acsCredentialId: credential.acsCredentialId,
  acsEncoderId: encoder.acsEncoderId
);
```

**Output:**

```json
{
  "status": "pending",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": null,
  "error": null
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
encoding_action_attempt, err := client.Acs.Encoders.EncodeCredential(
  context.Background(), &acs.EncodersEncodeCredentialRequest{
    AcsCredentialId: credential.AcsCredentialId,
    AcsEncoderId: encoder.AcsEncoderId,
  },
)
if err != nil {
  return err
}

return nil
```

**Output:**

```json
{
  "status": "pending",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": null,
  "error": null
}
```
{% endtab %}
{% endtabs %}

***

## 4. Confirm Successful Encoding

Once you issue a request to encode the credential onto the card, it is important to confirm that the encoding process completes successfully. You can use polling or a [webhook](../../../core-concepts/webhooks.md).

### Confirm Successful Encoding by Polling

When you make an `/acs/encoders/encode_credential` request, Seam returns an [action attempt](../../../core-concepts/action-attempts.md). To confirm that the card encoding was successful, you can poll this action attempt, until its `status` becomes `success`.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.action_attempts.get(
  action_attempt_id = encoding_action_attempt.action_attempt_id
)
```

**Output:**

```
ActionAttempt(
  status='success',
  action_attempt_id='11111111-2222-3333-4444-555555555555',
  action_type='ENCODE_CREDENTIAL',
  result={
    acs_credential_id='66666666-6666-6666-6666-666666666666',
    card_number='1234abc',
    is_issued=True,
    issued_at='2024-10-23T19:46:06.113Z',
    ...
  },
  error=null
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/action_attempts/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"action_attempt_id\": \"$(jq -r '.action_attempt.action_attempt_id' <<< ${encoding_action_attempt})\"
}"
```

**Output:**

```json
{
  "action_attempt":
    {
      "status": "success",
      "action_attempt_id": "11111111-2222-3333-4444-555555555555",
      "action_type": "ENCODE_CREDENTIAL",
      "result": {
        "acs_credential_id": "66666666-6666-6666-6666-666666666666",
        "card_number": "1234abc",
        "is_issued": true,
        "issued_at": "2024-10-23T19:46:06.113Z",
        ...
      },
      "error": null
    },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.actionAttempts.get({
  action_attempt_id: encodingActionAttempt.action_attempt_id
});
```

**Output:**

```json
{
  status: 'success',
  action_attempt_id: '11111111-2222-3333-4444-555555555555",
  action_type: 'ENCODE_CREDENTIAL',
  result: {
    acs_credential_id: "66666666-6666-6666-6666-666666666666',
    card_number: '1234abc',
    is_issued: true,
    issued_at: '2024-10-23T19:46:06.113Z',
    ...
  },
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.action_attempts.get(
  action_attempt_id: encoding_action_attempt.action_attempt_id
)
```

**Output:**

```
<Seam::Resources::ActionAttempt:0x00410
  status="success"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  action_type="ENCODE_CREDENTIAL"
  result={
    acs_credential_id="66666666-6666-6666-6666-666666666666"
    card_number="1234abc"
    is_issued=true,
    issued_at="2024-10-23T19:46:06.113Z"
    ...
  }
  error=nil
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->action_attempts->get(
  action_attempt_id: $encoding_action_attempt->action_attempt_id
);
```

**Output:**

```json
{
  "status": "success",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "card_number": "1234abc",
    "is_issued": true,
    "issued_at": "2024-10-23T19:46:06.113Z",
    ...
  },
  "error": null
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
seam.ActionAttempts.Get(
  actionAttemptId: encodingActionAttempt.actionAttemptId
);
```

**Output:**

```json
{
  "status": "success",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "card_number": "1234abc",
    "is_issued": true,
    "issued_at": "2024-10-23T19:46:06.113Z",
    ...
  },
  "error": null
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
action_attempt, err := client.ActionAttempts.Get(
  context.Background(), &api.ActionAttemptsGetRequest{
    ActionAttemptId: encoding_action_attempt.ActionAttemptId,
  },
)
if err != nil {
  return err
}

return nil
```

**Output:**

```json
{
  "status": "success",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "card_number": "1234abc",
    "is_issued": true,
    "issued_at": "2024-10-23T19:46:06.113Z",
    ...
  },
  "error": null
}
```
{% endtab %}
{% endtabs %}

#### View Credential Properties

It is also useful to note that Seam assigns values to various card-related properties on the credential when the encoder has finished encoding the card. For example, `acs_credential.is_issued` becomes `true`, and `acs_credential.card_number` and `acs_credential.issued_at` receive values. You can retrieve the credential to view these properties.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.acs.credentials.get(
  acs_credential_id = credential.acs_credential_id
)
```

**Output:**

```
AcsCredential(
  acs_credential_id='66666666-6666-6666-6666-666666666666',
  acs_user_id='33333333-3333-3333-3333-333333333333',
  access_method='card',
  starts_at='2024-12-01T15:00:00.000Z',
  ends_at='2024-12-04T12:00:00.000Z',
  is_issued=True,
  card_number='1234abc',
  issued_at='2024-10-23T19:46:06.113Z',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_credential_id\": \"$(jq -r '.acs_credential.acs_credential_id' <<< ${credential})\"
}"
```

**Output:**

```json
{
  "acs_credential":
    {
      "acs_credential_id": "66666666-6666-6666-6666-666666666666",
      "acs_user_id": "33333333-3333-3333-3333-333333333333",
      "access_method": "card",
      "starts_at": "2024-12-01T15:00:00.000Z",
      "ends_at": "2024-12-04T12:00:00.000Z",
      "is_issued": true,
      "card_number": "1234abc",
      "issued_at": "2024-10-23T19:46:06.113Z",
      ...
    },
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.acs.credentials.get({
  acs_credential_id: credential.acs_credential_id
});
```

**Output:**

```json
{
  acs_credential_id: '66666666-6666-6666-6666-666666666666',
  acs_user_id: '33333333-3333-3333-3333-333333333333',
  access_method: 'card',
  starts_at: '2024-12-01T15:00:00.000Z',
  ends_at: '2024-12-04T12:00:00.000Z',
  is_issued: true,
  card_number: '1234abc',
  issued_at: '2024-10-23T19:46:06.113Z',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.acs.credentials.get(
  acs_credential_id: credential.acs_credential_id
)
```

**Output:**

```
<Seam::Resources::AcsCredential:0x00410
  acs_credential_id="66666666-6666-6666-6666-666666666666"
  acs_user_id="33333333-3333-3333-3333-333333333333"
  access_method="card"
  starts_at="2024-12-01T15:00:00.000Z"
  ends_at="2024-12-04T12:00:00.000Z"
  is_issued=true
  card_number="1234abc"
  issued_at="2024-10-23T19:46:06.113Z"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->acs->credentials->get(
  acs_credential_id: $credential->acs_credential_id
);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "starts_at": "2024-12-01T15:00:00.000Z",
  "ends_at": "2024-12-04T12:00:00.000Z",
  "is_issued": true,
  "card_number": "1234abc",
  "issued_at": "2024-10-23T19:46:06.113Z",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
seam.CredentialsAcs.Get(
  acsCredentialId: credential.acsCredentialId
);
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "starts_at": "2024-12-01T15:00:00.000Z",
  "ends_at": "2024-12-04T12:00:00.000Z",
  "is_issued": true,
  "card_number": "1234abc",
  "issued_at": "2024-10-23T19:46:06.113Z",
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Code:**

```java
// Coming soon!
```

**Output:**

```json
// Coming soon!
```
{% endtab %}

{% tab title="Go" %}
**Code:**

```go
acs_credential, err := client.Acs.Credentials.Get(
  context.Background(), &acs.CredentialsGetRequest{
    AcsCredentialId: credential.AcsCredentialId,
  },
)
if err != nil {
  return err
}

return nil
```

**Output:**

```json
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "access_method": "card",
  "starts_at": "2024-12-01T15:00:00.000Z",
  "ends_at": "2024-12-04T12:00:00.000Z",
  "is_issued": true,
  "card_number": "1234abc",
  "issued_at": "2024-10-23T19:46:06.113Z",
  ...
}
```
{% endtab %}
{% endtabs %}

***

### Confirm Successful Encoding by Using a Webhook

To confirm successful encoding, you can use a [webhook](../../../core-concepts/webhooks.md) to listen for an `acs_credential.issued` event that contains the `acs_credential_id` in the payload. If you are re-encoding a card, listen for `acs_credential.reissued` instead of `acs_credential.issued`.

```json
{
    "event_id": "22222222-3333-4444-5555-666666666666",
    "event_description": "An ACS credential was issued.",
    "event_type": "acs_credential.issued",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-10-23T19:47:35.375Z",
    "occurred_at": "2024-10-23T19:47:35.356Z",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "connected_account_id": "11111111-1111-1111-1111-222222222222"
}
```

***

## Common Encoding Errors

<table><thead><tr><th width="309">Error</th><th>Description</th></tr></thead><tbody><tr><td><code>no_card_on_encoder</code></td><td>No card was placed on the encoder.</td></tr><tr><td><code>incompatible_card_format</code></td><td>A card with an incompatible card format was placed on the encoder.</td></tr><tr><td><code>uncategorized_error</code></td><td>Any other encoding error.</td></tr></tbody></table>
