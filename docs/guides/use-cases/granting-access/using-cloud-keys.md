---
description: >-
  Learn how to use cloud keys to provide web-based unlock experiences where
  each unlock is attributed to the specific user identity.
---

# Using Cloud Keys

Cloud keys are a web unlock access method. When you include a cloud key in an Access Grant, your user can unlock entrances through a web pass or an unlock button embedded in your app. The unlock happens over the internet through the access control system's cloud connection — no Bluetooth, no NFC, and no native SDK required.

The key benefit of cloud keys is **user-attributed unlocks**. Each unlock is recorded in the ACS audit trail as the specific user identity who was granted access, not as a generic system action. This gives you full visibility into who entered which entrance and when.

***

## Use Cases

- **Web pass shared via link:** Share a web pass URL with your user. The user opens the link and taps to unlock — similar to Instant Keys, but for cloud-connected locks that support web unlock.
- **Embedded unlock in your app:** Add an unlock button to your web or mobile application. When the user taps the button, your app calls the Seam API to unlock the entrance on the user's behalf.

***

## Before You Begin

To use cloud keys, you need:

- A [Seam account](https://console.seam.co) with an API key
- A [connected access control system](../../low-level-apis/access-systems/connect-an-acs-to-seam/) that supports cloud key unlocks
- Entrances with `can_unlock_with_cloud_key` set to `true`

***

## Step 1: Verify Entrance Support

List entrances and confirm that the ones you want to grant access to support cloud key unlocks.

{% tabs %}
{% tab title="JavaScript" %}

**Code:**

```javascript
const entrances = await seam.acs.entrances.list({
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
});

const cloudKeyEntrances = entrances.filter(
  (entrance) => entrance.can_unlock_with_cloud_key
);
```

**Output:**

```json
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name": "Room 101",
    "can_unlock_with_cloud_key": true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="cURL" %}

**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/entrances/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
}'
```

**Output:**

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
      "display_name": "Room 101",
      "can_unlock_with_cloud_key": true,
      ...
    },
    ...
  ]
}
```
{% endtab %}

{% tab title="Python" %}

**Code:**

```python
entrances = seam.acs.entrances.list(
  acs_system_id="c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)

cloud_key_entrances = [
  e for e in entrances
  if e.can_unlock_with_cloud_key
]
```

**Output:**

```
[
  AcsEntrance(
    acs_entrance_id="f74e4879-5991-4e2f-a368-888983dcfbfc",
    display_name="Room 101",
    can_unlock_with_cloud_key=True,
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}

**Code:**

```ruby
entrances = seam.acs.entrances.list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)

cloud_key_entrances = entrances.select do |entrance|
  entrance.can_unlock_with_cloud_key
end
```

**Output:**

```
[
  {
    "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name" => "Room 101",
    "can_unlock_with_cloud_key" => true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="PHP" %}

**Code:**

```php
$entrances = $seam->acs->entrances->list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

$cloud_key_entrances = array_filter(
  $entrances,
  fn($entrance) => $entrance->can_unlock_with_cloud_key
);
```

**Output:**

```json
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name": "Room 101",
    "can_unlock_with_cloud_key": true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="C#" %}

**Code:**

```csharp
var entrances = seam.Acs.Entrances.List(
  acsSystemId: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);

var cloudKeyEntrances = entrances
  .Where(e => e.CanUnlockWithCloudKey == true)
  .ToList();
```

**Output:**

```json
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name": "Room 101",
    "can_unlock_with_cloud_key": true,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Java" %}

**Code:**

```java
var entrances = seam.acs().entrances().list(
  AcsEntrancesListRequest.builder()
    .acsSystemId("c359cba2-8ef2-47fc-bee0-1c7c2a886339")
    .build()
);

var cloudKeyEntrances = entrances.stream()
  .filter(e -> Boolean.TRUE.equals(e.getCanUnlockWithCloudKey()))
  .toList();
```

**Output:**

```json
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name": "Room 101",
    "can_unlock_with_cloud_key": true,
    ...
  },
  ...
]
```
{% endtab %}
{% endtabs %}

***

## Step 2: Create an Access Grant with a Cloud Key

Create an Access Grant that includes a cloud key access method. Specify the user identity, the entrances, the access schedule, and `mode: "cloud_key"` in the requested access methods.

{% tabs %}
{% tab title="JavaScript" %}

**Code:**

```javascript
const accessGrant = await seam.accessGrants.create({
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_entrance_ids: [
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  ],
  starts_at: "2025-07-01T16:00:00Z",
  ends_at: "2025-07-04T11:00:00Z",
  requested_access_methods: [
    { mode: "cloud_key" }
  ]
});
```

**Output:**

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "starts_at": "2025-07-01T16:00:00.000Z",
  "ends_at": "2025-07-04T11:00:00.000Z",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
  ],
  ...
}
```
{% endtab %}

{% tab title="cURL" %}

**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "acs_entrance_ids": [
      "f74e4879-5991-4e2f-a368-888983dcfbfc"
    ],
    "starts_at": "2025-07-01T16:00:00Z",
    "ends_at": "2025-07-04T11:00:00Z",
    "requested_access_methods": [
      { "mode": "cloud_key" }
    ]
}'
```

**Output:**

```json
{
  "access_grant": {
    "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
    "user_identity_id": "22222222-2222-2222-2222-222222222222",
    "starts_at": "2025-07-01T16:00:00.000Z",
    "ends_at": "2025-07-04T11:00:00.000Z",
    "access_method_ids": [
      "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
    ],
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Python" %}

**Code:**

```python
access_grant = seam.access_grants.create(
  user_identity_id="22222222-2222-2222-2222-222222222222",
  acs_entrance_ids=[
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  ],
  starts_at="2025-07-01T16:00:00Z",
  ends_at="2025-07-04T11:00:00Z",
  requested_access_methods=[
    {"mode": "cloud_key"}
  ]
)
```

**Output:**

```
AccessGrant(
  access_grant_id="ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  user_identity_id="22222222-2222-2222-2222-222222222222",
  starts_at="2025-07-01T16:00:00.000Z",
  ends_at="2025-07-04T11:00:00.000Z",
  access_method_ids=["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
  ...
)
```
{% endtab %}

{% tab title="Ruby" %}

**Code:**

```ruby
access_grant = seam.access_grants.create(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_entrance_ids: [
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  ],
  starts_at: "2025-07-01T16:00:00Z",
  ends_at: "2025-07-04T11:00:00Z",
  requested_access_methods: [
    { mode: "cloud_key" }
  ]
)
```

**Output:**

```
{
  "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "user_identity_id" => "22222222-2222-2222-2222-222222222222",
  "starts_at" => "2025-07-01T16:00:00.000Z",
  "ends_at" => "2025-07-04T11:00:00.000Z",
  "access_method_ids" => ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
  ...
}
```
{% endtab %}

{% tab title="PHP" %}

**Code:**

```php
$access_grant = $seam->access_grants->create(
  user_identity_id: "22222222-2222-2222-2222-222222222222",
  acs_entrance_ids: [
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  ],
  starts_at: "2025-07-01T16:00:00Z",
  ends_at: "2025-07-04T11:00:00Z",
  requested_access_methods: [
    ["mode" => "cloud_key"]
  ]
);
```

**Output:**

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "starts_at": "2025-07-01T16:00:00.000Z",
  "ends_at": "2025-07-04T11:00:00.000Z",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
  ],
  ...
}
```
{% endtab %}

{% tab title="C#" %}

**Code:**

```csharp
var accessGrant = seam.AccessGrants.Create(
  userIdentityId: "22222222-2222-2222-2222-222222222222",
  acsEntranceIds: new List<string> {
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  },
  startsAt: "2025-07-01T16:00:00Z",
  endsAt: "2025-07-04T11:00:00Z",
  requestedAccessMethods: new List<AccessGrantsCreateRequestRequestedAccessMethods> {
    new AccessGrantsCreateRequestRequestedAccessMethods(
      mode: AccessGrantsCreateRequestRequestedAccessMethodsMode.CloudKey
    )
  }
);
```

**Output:**

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "starts_at": "2025-07-01T16:00:00.000Z",
  "ends_at": "2025-07-04T11:00:00.000Z",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
  ],
  ...
}
```
{% endtab %}

{% tab title="Java" %}

**Code:**

```java
var accessGrant = seam.accessGrants().create(
  AccessGrantsCreateRequest.builder()
    .userIdentityId("22222222-2222-2222-2222-222222222222")
    .acsEntranceIds(List.of(
      "f74e4879-5991-4e2f-a368-888983dcfbfc"
    ))
    .startsAt("2025-07-01T16:00:00Z")
    .endsAt("2025-07-04T11:00:00Z")
    .requestedAccessMethods(List.of(
      AccessGrantsCreateRequestRequestedAccessMethods.builder()
        .mode(AccessGrantsCreateRequestRequestedAccessMethodsMode.CLOUD_KEY)
        .build()
    ))
    .build()
);
```

**Output:**

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "user_identity_id": "22222222-2222-2222-2222-222222222222",
  "starts_at": "2025-07-01T16:00:00.000Z",
  "ends_at": "2025-07-04T11:00:00.000Z",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
  ],
  ...
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
You can combine cloud keys with other access methods in the same Access Grant. For example, include both `cloud_key` and `code` to give the user both a web unlock option and a PIN code fallback.
{% endhint %}

***

## Step 3: Unlock an Entrance on Behalf of the User

Once the cloud key access method is issued, unlock the entrance by calling `/access_methods/unlock_door` with the cloud key `access_method_id` and the `acs_entrance_id`. The endpoint resolves the credential internally and attributes the unlock to the user identity in the ACS audit trail.

{% tabs %}
{% tab title="JavaScript" %}

**Code:**

```javascript
const actionAttempt = await seam.accessMethods.unlockDoor({
  access_method_id: "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  acs_entrance_id: "f74e4879-5991-4e2f-a368-888983dcfbfc"
});
```

**Output:**

```json
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type": "UNLOCK_DOOR",
  "status": "success",
  "result": { "was_confirmed_by_device": false },
  "error": null
}
```
{% endtab %}

{% tab title="cURL" %}

**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/unlock_door' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "access_method_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc"
}'
```

**Output:**

```json
{
  "action_attempt": {
    "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "action_type": "UNLOCK_DOOR",
    "status": "success",
    "result": { "was_confirmed_by_device": false },
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="Python" %}

**Code:**

```python
action_attempt = seam.access_methods.unlock_door(
  access_method_id="a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  acs_entrance_id="f74e4879-5991-4e2f-a368-888983dcfbfc"
)
```

**Output:**

```
ActionAttempt(
  action_attempt_id="5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  action_type="UNLOCK_DOOR",
  status="success",
  result={"was_confirmed_by_device": False},
  error=None
)
```
{% endtab %}

{% tab title="Ruby" %}

**Code:**

```ruby
action_attempt = seam.access_methods.unlock_door(
  access_method_id: "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  acs_entrance_id: "f74e4879-5991-4e2f-a368-888983dcfbfc"
)
```

**Output:**

```
{
  "action_attempt_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type" => "UNLOCK_DOOR",
  "status" => "success",
  "result" => { "was_confirmed_by_device" => false },
  "error" => nil
}
```
{% endtab %}

{% tab title="PHP" %}

**Code:**

```php
$action_attempt = $seam->access_methods->unlock_door(
  access_method_id: "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  acs_entrance_id: "f74e4879-5991-4e2f-a368-888983dcfbfc"
);
```

**Output:**

```json
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type": "UNLOCK_DOOR",
  "status": "success",
  "result": { "was_confirmed_by_device": false },
  "error": null
}
```
{% endtab %}

{% tab title="C#" %}

**Code:**

```csharp
var actionAttempt = seam.AccessMethods.UnlockDoor(
  accessMethodId: "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
  acsEntranceId: "f74e4879-5991-4e2f-a368-888983dcfbfc"
);
```

**Output:**

```json
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type": "UNLOCK_DOOR",
  "status": "success",
  "result": { "was_confirmed_by_device": false },
  "error": null
}
```
{% endtab %}

{% tab title="Java" %}

**Code:**

```java
var actionAttempt = seam.accessMethods().unlockDoor(
  AccessMethodsUnlockDoorRequest.builder()
    .accessMethodId("a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d")
    .acsEntranceId("f74e4879-5991-4e2f-a368-888983dcfbfc")
    .build()
);
```

**Output:**

```json
{
  "action_attempt_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
  "action_type": "UNLOCK_DOOR",
  "status": "success",
  "result": { "was_confirmed_by_device": false },
  "error": null
}
```
{% endtab %}
{% endtabs %}

The unlock is now recorded in the ACS audit trail as an entry by the user identity associated with the Access Grant.

***

## Next Steps

- [Delivering Access Methods](delivering-access-methods.md)
- [Creating an Access Grant](creating-an-access-grant.md)
- [Retrieving Access Grants and Access Methods](retrieving-access-grants-and-access-methods.md)
- [Access Grants API Reference](https://docs.seam.co/latest/api/access_grants)
- [ACS Entrances API Reference](https://docs.seam.co/latest/api/acs/entrances)
