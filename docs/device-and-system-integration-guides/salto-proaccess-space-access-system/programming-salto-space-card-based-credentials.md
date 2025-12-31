---
description: Learn how to create plastic card-based credentials for Salto Space.
---

# Programming Salto Space Card-based Credentials

For each access system user in a [Salto Space access system](./), you can create a maximum of one key card credential and one [mobile key credential](programming-salto-space-mobile-credentials.md). For Salto Space, you create card credentials and then encode them onto plastic key cards for users.

To use the Seam API to create card credentials for a Salto Space access system:

1. Create an [access system user](../../products/access-systems/user-management.md).
2. Assign access permissions to the user by assigning them to one or more [access groups](../../capability-guides/access-systems/user-management/assigning-users-to-access-groups.md).
   * Each access group is preconfigured with specific entrances.
3. Create a [credential](../../capability-guides/access-systems/managing-credentials.md).
   * Specify the ID of the access system user.
   * Set the `access_method` to `card`.
   *   Choose whether to assign a new card to the user or update the user's existing card. Use the Boolean `salto_space_metadata.assign_new_key` parameter when creating the credential.

       Consider the following situations:

       * To assign a first, new card to a user, set `salto_space_metadata.assign_new_key` to `true`.
       * To replace a user's card—for example, if a user has lost their card—delete the user's previous credential and then create a new credential, setting `salto_space_metadata.assign_new_key` to `true`. Remember that a Salto Space user can only have one key card at a time.
       * To update a user's card with changed access permissions, set `salto_space_metadata.assign_new_key` to `false`. For example, this option is applicable if a user's access group assignment has changed or if the set of entrances for an access group has changed.
4.  Encode the credential onto a card.

    \{% hint style="info" %\} Make sure that each of your Salto Space sites is equipped with a supported card encoder. The [NCoder card encoder](https://saltosystems.com/en-us/products/ncoder/) is compatible with the Seam integration. \{% endhint %\}

    1. Use the `/acs/encoders/list` endpoint to retrieve a list of available encoders. Then, choose the encoder that you want to use to write the credential to the card.\
       See [Retrieve Encoders](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-2.-retrieve-encoders).
    2. Use the `/acs/encoders/encode_credential` endpoint to encode the credential onto the card, using the encoder that you have chosen.\
       See [Encode the Card](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-3.-encode-the-card).
    3. Confirm that the card was encoded successfully using polling or a [webhook](../../core-concepts/webhooks.md).\
       See [Confirm Successful Encoding](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#id-4.-confirm-successful-encoding). Also, see a list of [common encoding errors](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md#common-encoding-errors).

The following example walks you through this process:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
# Get the access system.
building_a = seam.acs.systems.get(
  acs_system_id="11111111-1111-1111-1111-111111111111"
)

# Step 1:
# Create the new access system user.
jane_user = seam.acs.users.create(
  full_name = "Jane Doe",
  phone_number = "+15555550100",
  acs_system_id = building_a.acs_system_id
)

# Step 2:
# Add the access system user to all desired access groups.
access_group_ids = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
]
for access_group_id in access_group_ids:
  seam.acs.users.add_to_access_group(
    acs_user_id = jane_user.acs_user_id,
    acs_access_group_id = access_group_id
  )

# Step 3:
# Create a card credential for the access system user.
card_credential = seam.acs.credentials.create(
  acs_user_id = jane_user.acs_user_id,
  access_method = "card",
  salto_space_metadata = {
    # This example assigns a new card to the user.
    # To update an existing card, set assign_new_card to False.
    "assign_new_card": True
  }
)

# Step 4:
# Encode the credential onto a card.
# First, get the encoder that you want to use.
encoder = seam.acs.encoders.list(
  acs_system_ids = [building_a.acs_system_id]
)[0]

# Then, encode the card.
encoding_action_attempt = seam.acs.encoders.encode_credential(
  acs_credential_id = card_credential.acs_credential_id,
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
    issued_at='2025-03-01T19:46:06.113Z',
    ...
  },
  error=null
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
# Get the access system.
building_a=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"11111111-1111-1111-1111-111111111111\"
}")

# Step 1:
# Create the new access system user.
jane_user=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"full_name\": \"Jane Doe\",
  \"phone_number\": \"+15555550100\",
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\"
}")

# Step 2:
# Add the access system user to all desired access groups.
declare -a access_group_ids=("44444444-4444-4444-4444-333333333333" "44444444-4444-4444-4444-444444444444")
for access_group_id in ${access_group_ids[@]};
do
  curl -X 'POST' \
    'https://connect.getseam.com/acs/users/add_to_access_group' \
    -H 'accept: application/json' \
    -H "Authorization: Bearer ${SEAM_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
    \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${jane_user})\",
    \"acs_access_group_id\": \"$access_group_id\"
  }";
done

# Step 3:
# Create a card credential for the access system user.
# This example assigns a new card to the user.
# To update an existing card, set assign_new_card to false.
card_credential=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_user_id\": \"$(jq -r '.acs_user.acs_user_id' <<< ${jane_user})\",
  \"access_method\": \"card\",
  \"salto_space_metadata\": {
    \"assign_new_card\": true
  }
}")

# Step 4:
# Encode the credential onto a card.
# First, get the encoder that you want to use.
encoder=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/encoders/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_system_id\": \"$(jq -r '.acs_system.acs_system_id' <<< ${building_a})\"
}" | jq -r '.acs_encoders[0]')

# Then, encode the card.
encoding_action_attempt=$(curl -X 'POST' \
  'https://connect.getseam.com/acs/encoders/encode_credential' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
  \"acs_credential_id\": \"$(jq -r '.acs_credential.acs_credential_id' <<< ${card_credential})\",
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
  "acs_credential":{
    "acs_credential_id": "66666666-6666-6666-6666-666666666666",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "access_method": "card",
    "is_issued": false,
    ...
  }
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
        "issued_at": "2025-03-01T19:46:06.113Z",
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
// Get the access system.
const buildingA = await seam.acs.systems.get({
  acs_system_id: "11111111-1111-1111-1111-111111111111"
});

// Step 1:
// Create the new access system user.
const janeUser = await seam.acs.users.create({
  full_name: "Jane Doe",
  phone_number: "+15555550100",
  acs_system_id: buildingA.acs_system_id
});

// Step 2:
// Add the access system user to all desired access groups.
const accessGroupIds = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
];
for (const accessGroupId of accessGroupIds) {
  await seam.acs.users.addToAccessGroup({
    acs_user_id: janeUser.acs_user_id,
    acs_access_group_id: accessGroupId
  });
}

// Step 3:
// Create a card credential for the access system user.
const cardCredential = await seam.acs.credentials.create({
  acs_user_id: janeUser.acs_user_id,
  access_method: "card",
  salto_space_metadata: {
    // This example assigns a new card to the user.
    // To update an existing card, set assign_new_card to false.
    "assign_new_card": true
  }
});

// Step 4:
// Encode the credential onto a card.
// First, get the encoder that you want to use.
const encoder = (await seam.acs.encoders.list({
  acs_system_ids = [building_a.acs_system_id]
}))[0];

// Then, encode the card.
const encodingActionAttempt = await seam.acs.encoders.encodeCredential({
  acs_credential_id: cardCredential.acs_credential_id,
  acs_encoder_id: encoder.acs_encoder_id
});

// To confirm that the encoding succeeded, 
// poll the returned action attempt
// until its status is success.
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
    issued_at: '2025-03-01T19:46:06.113Z',
    ...
  },
  error: null
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
# Get the access system.
building_a = seam.acs.systems.get(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
)

# Step 1:
# Create the new access system user.
jane_user = seam.acs.users.create(
  full_name: "Jane Doe",
  phone_number: "+15555550100",
  acs_system_id: building_a.acs_system_id
)

# Step 2:
# Add the access system user to all desired access groups.
access_group_ids = [
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
]
access_group_ids.each do |access_group_id|
  seam.acs.users.add_to_access_group(
    acs_user_id: jane_user.acs_user_id,
    acs_access_group_id: access_group_id
  )
end

# Step 3:
# Create a card credential for the access system user.
card_credential = seam.acs.credentials.create(
  acs_user_id: jane_user.acs_user_id,
  access_method: "card",
  salto_space_metadata: {
    # This example assigns a new card to the user.
    # To update an existing card, set assign_new_card to false.
    "assign_new_card": true
  }
)

# Step 4:
# Encode the credential onto a card.
# First, get the encoder that you want to use.
encoder = (seam.acs.encoders.list(
  acs_system_ids = [building_a.acs_system_id]
))[0]

# Then, encode the card.
encoding_action_attempt = seam.acs.encoders.encode_credential(
  acs_credential_id: card_credential.acs_credential_id,
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
    issued_at="2025-03-01T19:46:06.113Z"
    ...
  }
  error=nil
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
// Get the access system.
$building_a = $seam->acs->systems->get(
  acs_system_id: "11111111-1111-1111-1111-111111111111"
);

// Step 1:
// Create the new access system user.
$jane_user = $seam->acs->users->create(
  full_name: "Jane Doe",
  phone_number: "+15555550100",
  acs_system_id: $building_a->acs_system_id
);

// Step 2:
// Add the access system user to all desired access groups.
$access_group_ids = array(
  "44444444-4444-4444-4444-333333333333",
  "44444444-4444-4444-4444-444444444444"
);
foreach ($access_group_ids as $access_group_id) {
  $seam->acs->users->add_to_access_group(
    acs_user_id: $jane_user->acs_user_id,
    acs_access_group_id: $access_group_id
  );
};

// Step 3:
// Create a card credential for the access system user.
$card_credential = $seam->acs->credentials->create(
  acs_user_id: $jane_user->acs_user_id,
  access_method: "card",
  salto_space_metadata: {
    // This example assigns a new card to the user.
    // To update an existing card, set assign_new_card to false.
    "assign_new_card": true
  }
);

// Step 4:
// Encode the credential onto a card.
// First, get the encoder that you want to use.
$encoder = $seam->acs->encoders->list(
  acs_system_ids = [$building_a->acs_system_id]
)[0];

// Then, encode the card.
$encoding_action_attempt = $seam->acs->encoders->encode_credential(
  acs_credential_id: $card_credential->acs_credential_id,
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
    "issued_at": "2025-03-01T19:46:06.113Z",
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
{% endtabs %}

***

## Next Steps

You can use an encoder to scan a plastic key card to read its encoded parameters. The scan result includes the card's properties, such as its card number, serial number, and other useful details. For more information, see [Scanning Encoded Cards](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/scanning-encoded-cards.md).

***

## Learn More

To find out more about using the Seam API with your Salto Space access system, see the following topics:

* [Access Systems](../../products/access-systems/)
* [Access Group-Based Access Systems](../../capability-guides/access-systems/connect-an-acs-to-seam/understanding-access-control-system-differences.md#access-group-based-access-control-systems)
* [Managing Access System Users](../../products/access-systems/user-management.md)
* [Managing Credentials](../../capability-guides/access-systems/managing-credentials.md)
* [Working with Card Encoders and Scanners](../../capability-guides/access-systems/working-with-card-encoders-and-scanners/)
* [Access Systems](../../api/acs/) in the Seam API reference
