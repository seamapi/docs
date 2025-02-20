---
description: Learn how to create a card-based credential for Visionline.
---

# Creating Visionline Card-based Credentials

To create a credential to encode on a plastic key card for a Visionline ACS:

1. Set up an [ACS user](../../products/access-systems/user-management.md).
2.  Create a [credential](../../capability-guides/access-systems/managing-credentials.md#create-a-card-based-credential) with the `access_method` set to `card` and the appropriate [`visionline_metadata`](mobile-credential-related-properties.md#acs_credential.visionline_metadata-properties), such as the card format.

    * To issue the first credential for a reservation—that is, an "override" credential—make sure to set `visionline_metadata.override` to `true`.
    * To issue subsequent credentials for a reservation, set the `visionline_metadata.joiner_acs_credential_ids`.

    For more information about Visionline credential types, see [Credential Types for Visionline](credential-types/#credential-types-for-visionline) and [Guest Mobile Credential Types](credential-types/#guest-mobile-credential-types).

The following example shows how to create a card-based override credential for Visionline:

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
  \"ends_at\": \"2024-12-04T12:00:00.000Z\",
  \"visionline_metadata\": {
     \"card_format\": \"rfid48\",
     \"override\": true
  }
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
  ends_at: "2024-12-04T12:00:00.000Z",
  visionline_metadata: {
    "card_format": "rfid48",
    "override": true
  }
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
  ends_at: "2024-12-04T12:00:00.000Z",
  visionline_metadata: {
    "card_format": "rfid48",
    "override": true
  }
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
  ends_at: "2024-12-04T12:00:00.000Z",
  visionline_metadata: array('card_format' => "rfid48", 'is_override_key' => true)
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

## Next Steps

Once you have created a card-based credential for a Visionline ACS, you must encode the credential onto a plastic card.

1. Use the `/acs/encoders/list` endpoint to retrieve a list of available encoders. Then, choose the encoder that you want to use to write the credential to the card.\
   See [Retrieve Encoders](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-2.-retrieve-encoders).
2. Use the `/acs/encoders/encode_credential` endpoint to encode the credential on the card, using the encoder that you have chosen.\
   See [Encode the Card](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-3.-encode-the-card).
3. Confirm that the card was encoded successfully using polling or a [webhook](../../core-concepts/webhooks.md).\
   See [Confirm Successful Encoding](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-4.-confirm-successful-encoding). Also, see a list of [common encoding errors](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#common-encoding-errors).

Then, you can use an encoder to scan a plastic key card to read its encoded parameters. The scan result includes the card's properties, such as its card number, serial number, and other useful details. For more information, see [Scanning Encoded Cards](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/scanning-encoded-cards.md).
