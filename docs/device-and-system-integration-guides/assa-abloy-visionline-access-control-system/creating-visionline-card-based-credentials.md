---
description: Learn how to create a card-based credential for Visionline.
---

# Creating Visionline Card-based Credentials

To create a credential to encode onto a plastic key card for a Visionline ACS:

1. Set up an [ACS user](../../products/access-systems/user-management.md).
2.  Create a [credential](../../capability-guides/access-systems/managing-credentials.md#create-a-card-based-credential) with the `access_method` set to `card` and the appropriate [`visionline_metadata`](mobile-credential-related-properties.md#acs_credential.visionline_metadata-properties), such as the card format.

    * To issue the first credential for a reservation—that is, an "override" credential—make sure to set `visionline_metadata.override` to `true`.
    * To issue subsequent credentials for a reservation, set the `visionline_metadata.joiner_acs_credential_ids`.

    For more information about Visionline credential types, see [Credential Types for Visionline](credential-types/#credential-types-for-visionline) and [Guest Mobile Credential Types](credential-types/#guest-mobile-credential-types).
3. Encode the credential onto a plastic card.
   1. Use the `/acs/encoders/list` endpoint to retrieve a list of available encoders. Then, choose the encoder that you want to use to write the credential to the card.\
      See [Retrieve Encoders](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-2.-retrieve-encoders).
   2. Use the `/acs/encoders/encode_credential` endpoint to encode the credential onto the card, using the encoder that you have chosen.\
      See [Encode the Card](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-3.-encode-the-card).
   3. Confirm that the card was encoded successfully using polling or a [webhook](../../core-concepts/webhooks.md).\
      See [Confirm Successful Encoding](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-4.-confirm-successful-encoding). Also, see a list of [common encoding errors](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#common-encoding-errors).

The following example shows how to create a card-based override credential for Visionline and encode it onto a plastic card:

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
  ends_at = "2024-12-04T12:00:00.000Z",
  visionline_metadata = {
    "card_format": "rfid48",
    "override": True
  }
)

# Step 3:
# Encode the credential onto a card.
# First, get the encoder that you want to use.
encoder = seam.acs.encoders.list(
  acs_system_ids = ["11111111-1111-1111-1111-111111111111"]
)[0]

# Then, encode the card.
encoding_action_attempt = seam.acs.encoders.encode_credential(
  acs_credential_id = credential.acs_credential_id,
  acs_encoder_id = encoder.acs_encoder_id
)

# To confirm that the encoding succeeded, 
# poll the returned action attempt
# until its status is success.
seam.action_attempts.get(
  action_attempt_id = encoding_action_attempt.action_attempt_id
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
  is_issued=False,
  ...
)

ActionAttempt(
  status='success',
  action_attempt_id='11111111-2222-3333-4444-555555555555',
  action_type='ENCODE_CREDENTIAL',
  result={
    acs_credential_id='66666666-6666-6666-6666-666666666666',
    card_number='1234abc',
    is_issued=True,
    issued_at='2024-12-01T12:00:00.000Z',
    ...
  },
  error=null
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
  \"ends_at\": \"2024-12-04T12:00:00.000Z\",
  \"visionline_metadata\": {
     \"card_format\": \"rfid48\",
     \"override\": true
  }
}")

# Step 3:
# Encode the credential onto a card.
# First, get the encoder that you want to use.
encoder=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/encoders/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"11111111-1111-1111-1111-111111111111\"
}" | jq -r '.acs_encoders[0]')

# Then, encode the card.
encoding_action_attempt=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/encoders/encode_credential' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_credential_id\": \"$(jq -r '.acs_credential.acs_credential_id' <<< ${credential})\",
  \"acs_encoder_id\": \"$(jq -r '.acs_encoder_id' <<< ${encoder})\"
}")

# To confirm that the encoding succeeded, 
# poll the returned action attempt
# until its status is success.
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
        "issued_at": "2024-12-01T12:00:00.000Z",
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
  ends_at: "2024-12-04T12:00:00.000Z",
  visionline_metadata: {
    "card_format": "rfid48",
    "override": true
  }
});

// Step 3:
// Encode the credential onto a card.
// First, get the encoder that you want to use.
const encoder = (await seam.acs.encoders.list({
  acs_system_ids = ["11111111-1111-1111-1111-111111111111"]
}))[0];

# Then, encode the card.
const encodingActionAttempt = await seam.acs.encoders.encodeCredential({
  acs_credential_id: credential.acs_credential_id,
  acs_encoder_id: encoder.acs_encoder_id
});

# To confirm that the encoding succeeded, 
# poll the returned action attempt
# until its status is success.
await seam.actionAttempts.get({
  action_attempt_id: encodingActionAttempt.action_attempt_id
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

{
  status: 'success',
  action_attempt_id: '11111111-2222-3333-4444-555555555555",
  action_type: 'ENCODE_CREDENTIAL',
  result: {
    acs_credential_id: "66666666-6666-6666-6666-666666666666',
    card_number: '1234abc',
    is_issued: true,
    issued_at: '2024-12-01T12:00:00.000Z',
    ...
  },
  error: null
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
  ends_at: "2024-12-04T12:00:00.000Z",
  visionline_metadata: {
    "card_format": "rfid48",
    "override": true
  }
)

# Step 3:
# Encode the credential onto a card.
# First, get the encoder that you want to use.
encoder = (seam.acs.encoders.list(
  acs_system_ids = ["11111111-1111-1111-1111-111111111111"]
))[0]

# Then, encode the card.
encoding_action_attempt = seam.acs.encoders.encode_credential(
  acs_credential_id: credential.acs_credential_id,
  acs_encoder_id: encoder.acs_encoder_id
)

# To confirm that the encoding succeeded, 
# poll the returned action attempt
# until its status is success.
seam.action_attempts.get(
  action_attempt_id: encoding_action_attempt.action_attempt_id
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

<Seam::Resources::ActionAttempt:0x00410
  status="success"
  action_attempt_id="11111111-2222-3333-4444-555555555555"
  action_type="ENCODE_CREDENTIAL"
  result={
    acs_credential_id="66666666-6666-6666-6666-666666666666"
    card_number="1234abc"
    is_issued=true,
    issued_at="2024-12-01T12:00:00.000Z"
    ...
  }
  error=nil
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
  ends_at: "2024-12-04T12:00:00.000Z",
  visionline_metadata: array('card_format' => "rfid48", 'is_override_key' => true)
);

// Step 3:
// Encode the credential onto a card.
// First, get the encoder that you want to use.
$encoder = $seam->acs->encoders->list(
  acs_system_ids = ["11111111-1111-1111-1111-111111111111"]
)[0];

// Then, encode the card.
$encoding_action_attempt = $seam->acs->encoders->encode_credential(
  acs_credential_id: $credential->acs_credential_id,
  acs_encoder_id: $encoder->acs_encoder_id
);

// To confirm that the encoding succeeded, 
// poll the returned action attempt
// until its status is success.
$seam->action_attempts->get(
  action_attempt_id: $encoding_action_attempt->action_attempt_id
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

{
  "status": "success",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "card_number": "1234abc",
    "is_issued": true,
    "issued_at": "2024-12-01T12:00:00.000Z",
    ...
  },
  "error": null
}
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming soon!
```

**Output:**

```json
// Coming soon!
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
    VisionlineMetadata: &acs.CredentialsCreateRequestVisionlineMetadata{
      CardFormat: acs.CredentialsCreateRequestVisionlineMetadataCardFormatRfid48.Ptr(),
      Override: api.Bool(true),
    },
  },
);
if err != nil {
  return err
};

// Step 3:
// Encode the credential onto a card.
// First, get the encoder that you want to use.
encoders, err := client.Acs.Encoders.List(
  context.Background(), &acs.EncodersListRequest{
    AcsSystemIds: []string{
      "11111111-1111-1111-1111-111111111111",
    },
  },
)
if err != nil {
  return err
}
encoder := encoders[0]

// Then, encode the card.
encodingActionAttempt, err := client.Acs.Encoders.EncodeCredential(
  context.Background(), &acs.EncodersEncodeCredentialRequest{
    AcsCredentialId: credential.AcsCredentialId,
    AcsEncoderId: encoder.AcsEncoderId,
  },
)
if err != nil {
  return err
}

// To confirm that the encoding succeeded, 
// poll the returned action attempt
// until its status is success.
actionAttempt, err := client.ActionAttempts.Get(
  context.Background(), &api.ActionAttemptsGetRequest{
    ActionAttemptId: encodingActionAttempt.ActionAttemptId,
  },
)
if err != nil {
  return err
}

fmt.Println(credential)
fmt.Println(actionAttempt)

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

{
  "status": "success",
  "action_attempt_id": "11111111-2222-3333-4444-555555555555",
  "action_type": "ENCODE_CREDENTIAL",
  "result": {
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "card_number": "1234abc",
    "is_issued": true,
    "issued_at": "2024-12-01T12:00:00.000Z",
    ...
  },
  "error": null
}
```
{% endtab %}
{% endtabs %}

***

## Next Steps

You can use an encoder to scan a plastic key card to read its encoded parameters. The scan result includes the card's properties, such as its card number, serial number, and other useful details. For more information, see [Scanning Encoded Cards](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/scanning-encoded-cards.md).