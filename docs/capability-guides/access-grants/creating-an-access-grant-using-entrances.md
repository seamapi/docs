---
description: >-
  Learn how to create an access grant to define the "who, where, when, and how"
  for assigning a user access to entrances.
---

# Creating an Access Grant Using Entrances

An Access Grant defines the following characteristics:

* User identity: The user to whom you want to grant access.
* Entrances: The set of entrances or other access points to which you want to grant the user access.
* Access schedule: The starting and ending times for access.
* Access methods: The modes of access, including key cards, PIN codes, mobile keys, and [Instant Keys](../instant-keys/).

It is important to note that you can specify the set of entrances to which you want to grant access using the IDs of the entrances themselves. Alternately, before creating an Access Grant, you can organize sets of entrances into spaces. Then, when you create an Access Grant, you specify the IDs of the spaces to which you want to grant access. Seam grants the user access to all entrances included in these spaces.

This topic describes how to create an Access Grant using entrances. To learn how to create an Access Grant using spaces, see [Creating an Access Grant Using Spaces](creating-an-access-grant-using-spaces.md).

***

## Access Grant Creation Process

To create an Access Grant:

1. [Identify the entrances](creating-an-access-grant-using-entrances.md#identify-entrances) to which you want to grant the user access.
2. [Create a user identity](creating-an-access-grant-using-entrances.md#create-a-user-identity) for the user to whom you want to grant access. Alternately, you can create a new user identity as part of the Access Grant creation action.
3.  [Create an Access Grant](creating-an-access-grant-using-entrances.md#create-an-access-grant) for the user identity to define the entrances to which the user should have access, the starting and ending times for this access, and the requested access methods, that is, one or more of `card`, `code`, and `mobile_key`.

    The action returns the created Access Grant.
4. [Monitor for lifecycle events](creating-an-access-grant-using-entrances.md#monitor-for-lifecycle-events) to identify next steps, such as the following:
   * Whether you need to encode a card access method onto a plastic card.
   * When the access methods are ready to deliver to your user.

If you've created an Access Grant that includes an mobile key, the returned Access Grant includes the Instant Key URL. to make it more efficient for you to share this URL with your user.

***

## Before You Begin

To create an Access Grant, first [connect](../../core-concepts/workspaces/#connecting-virtual-devices) an access system to Seam. You may also need to set up your access system and confirm that it has the required licenses. For details, see [Setting Up Your Site for Instant Keys](../instant-keys/setting-up-your-site-for-instant-keys.md) and the [system integration guide](../../device-and-system-integration-guides/overview.md#access-control-systems) for your access system.

***

## **Identify Entrances**

List the entrances in the access system and identify the ones to which you want to grant the user access.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.acs.entrances.list(
  acs_system_id="c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)
```

**Output:**

```python
[
  AcsEntrance(
    acs_entrance_id="48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    display_name="Main Entrance",
    acs_system_id="c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  ),
  AcsEntrance(
    acs_entrance_id="f74e4879-5991-4e2f-a368-888983dcfbfc",
    display_name="Room 101",
    acs_system_id="c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
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
      "acs_entrance_id": "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
      "display_name": "Main Entrance",
      "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
      ...
    },
    {
      "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
      "display_name": "Room 101",
      "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
      ...
    },
    ...
  ]
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.acs.entrances.list({
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
});
```

**Output:**

```json
[
  {
    "acs_entrance_id": "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    "display_name": "Main Entrance",
    "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  },
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name": "Room 101",
    "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.acs.entrances.list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)
```

**Output:**

```json
[
  {
    "acs_entrance_id" => "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    "display_name" => "Main Entrance",
    "acs_system_id" => "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  },
  {
    "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name" => "Room 101",
    "acs_system_id" => "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->acs->entrances->list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);
```

**Output:**

```php
[
  [
    "acs_entrance_id" => "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    "display_name" => "Main Entrance",
    "acs_system_id" => "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  ],
  [
    "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "display_name" => "Room 101",
    "acs_system_id" => "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
    ...
  ],
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

## **Create a User Identity**

You can create a user identity before creating the Access Grant, you can retrieve an existing user identity, or you can skip this step and [create a new user identity as part of the Access Grant creation action](creating-an-access-grant-using-entrances.md#create-an-access-grant).

To create a user identity, specify the unique `user_identity_key`, `email_address`, or `phone_number` of the user. Also, include the ID of the access system in which you want to grant the user access.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.user_identities.create(
  full_name="Jane Doe",
  email_address="jane@example.com",
  acs_system_ids=["c359cba2-8ef2-47fc-bee0-1c7c2a886339"]
)
```

**Output:**

```python
UserIdentity(
  user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
  full_name="Jane Doe",
  email_address="jane@example.com",
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    "acs_system_ids": [
      "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
    ]
}'
```

**Output:**

```json
{
  "user_identity": {
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "full_name": "Jane Doe",
    "email_address": "jane@example.com",
    ...
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.userIdentities.create({
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
});
```

**Output:**

```json
{
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.user_identities.create(
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
)
```

**Output:**

```ruby
{
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "full_name" => "Jane Doe",
  "email_address" => "jane@example.com",
  ...
}
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->user_identities->create(
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"]
);
```

**Output:**

```php
[
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "full_name" => "Jane Doe",
  "email_address" => "jane@example.com",
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

***

## **Create an Access Grant**

To create an Access Grant, specify the user identity, entrance IDs, starting and ending times, and requested access methods, such as `code`, `card`, and `mobile_key`. To issue an Instant Key, specify `mobile_key` as the mode for a requested access method.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.create(
  user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
  # Alternately, to create a new user identity, use the
  # following parameter instead of user_identity_id:
  # user_identity={
  #  "full_name": "Jane Doe",
  #  "email_address": "jane.doe@example.com",
  # },
  acs_entrance_ids=[
    "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  ],
  requested_access_methods=[
    {"mode": "code"},
    {"mode": "card"},
    {"mode": "mobile_key"}
  ],
  starts_at="2025-07-13T15:00:00.000Z",
  ends_at="2025-07-16T11:00:00.000Z"
)
```

**Output:**

```python
AccessGrant(
  access_grant_id="ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  display_name="My Access Grant",
  user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
  starts_at="2025-07-13T15:00:00.000Z",
  ends_at="2025-07-16T11:00:00.000Z",
  requested_access_methods=[
    {
      "display_name": "Plastic Card",
      "mode": "card",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    },
    {
      "display_name": "PIN Code",
      "mode": "code",
      "created_access_method_ids": ["f47ac10b-58cc-4372-a567-0e02b2c3d479"],
      ...
    },
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["6ba7b810-9dad-11d1-80b4-00c04fd430c8"],
      ...
    }
  ],
  instant_key_url="https://ik.seam.co/ABCXYZ",
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
# Alternately, to create a new user identity, use the
# following parameter instead of user_identity_id:
# user_identity={
#  "full_name": "Jane Doe",
#  "email_address": "jane.doe@example.com",
# },
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "acs_entrance_ids": [
      "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
      "f74e4879-5991-4e2f-a368-888983dcfbfc"
    ],
    "requested_access_methods": [
      {"mode": "code"},
      {"mode": "card"},
      {"mode": "mobile_key"}
    ],
    "starts_at": "2025-07-13T15:00:00.000Z",
    "ends_at": "2025-07-16T11:00:00.000Z"
}'
```

**Output:**

```json
{
  "access_grant": {
    "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
    "display_name": "My Access Grant",
    "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
    "starts_at": "2025-07-13T15:00:00.000Z",
    "ends_at": "2025-07-16T11:00:00.000Z",
    "requested_access_methods": [
      {
        "display_name": "Plastic Card",
        "mode": "card",
        "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        ...
      },
      {
        "display_name": "PIN Code",
        "mode": "code",
        "created_access_method_ids": ["f47ac10b-58cc-4372-a567-0e02b2c3d479"],
        ...
      },
      {
        "display_name": "Mobile Key Credential",
        "mode": "mobile_key",
        "created_access_method_ids": ["6ba7b810-9dad-11d1-80b4-00c04fd430c8"],
        ...
      }
    ],
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    ...
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.create({
  user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  // Alternately, to create a new user identity, use the
  // following parameter instead of user_identity_id:
  // user_identity: {
  //  full_name: "Jane Doe",
  //  email_address: "jane.doe@example.com",
  // },
  acs_entrance_ids: [
    "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  ],
  requested_access_methods: [
    {"mode": "code"},
    {"mode": "card"},
    {"mode": "mobile_key"}
  ],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
});
```

**Output:**

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "display_name": "My Access Grant",
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "starts_at": "2025-07-13T15:00:00.000Z",
  "ends_at": "2025-07-16T11:00:00.000Z",
  "requested_access_methods": [
    {
      "display_name": "Plastic Card",
      "mode": "card",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    },
    {
      "display_name": "PIN Code",
      "mode": "code",
      "created_access_method_ids": ["f47ac10b-58cc-4372-a567-0e02b2c3d479"],
      ...
    },
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["6ba7b810-9dad-11d1-80b4-00c04fd430c8"],
      ...
    }
  ],
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.create(
  user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  # Alternately, to create a new user identity, use the
  # following parameter instead of user_identity_id:
  # user_identity: {
  #  full_name: "Jane Doe",
  #  email_address: "jane.doe@example.com",
  # },
  acs_entrance_ids: %w[48ebfb50-c531-43c5-b9ea-409f26dabbd7 f74e4879-5991-4e2f-a368-888983dcfbfc],
  requested_access_methods: [
    {"mode": "code"},
    {"mode": "card"},
    {"mode": "mobile_key"}
  ],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
)
```

**Output:**

```ruby
{
  "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "display_name" => "My Access Grant",
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "starts_at" => "2025-07-13T15:00:00.000Z",
  "ends_at" => "2025-07-16T11:00:00.000Z",
  "requested_access_methods" => [
    {
      "display_name": "Plastic Card",
      "mode": "card",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    },
    {
      "display_name": "PIN Code",
      "mode": "code",
      "created_access_method_ids": ["f47ac10b-58cc-4372-a567-0e02b2c3d479"],
      ...
    },
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["6ba7b810-9dad-11d1-80b4-00c04fd430c8"],
      ...
    }
  ],
  "instant_key_url" => "https://ik.seam.co/ABCXYZ",
  ...
}
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->create(
  user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  // Alternately, to create a new user identity, use the
  // following parameter instead of user_identity_id:
  // user_identity: {
  //  full_name: "Jane Doe",
  //  email_address: "jane.doe@example.com",
  // },
  acs_entrance_ids: [
    "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    "f74e4879-5991-4e2f-a368-888983dcfbfc",
  ],
  requested_access_methods: [
    ["mode" => "code"],
    ["mode" => "card"],
    ["mode" => "mobile_key"],
  ],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
);
```

**Output:**

```php
[
  "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "display_name" => "My Access Grant",
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "starts_at" => "2025-07-13T15:00:00.000Z",
  "ends_at" => "2025-07-16T11:00:00.000Z",
  "requested_access_methods" => [
    {
      "display_name": "Plastic Card",
      "mode": "card",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    },
    {
      "display_name": "PIN Code",
      "mode": "code",
      "created_access_method_ids": ["f47ac10b-58cc-4372-a567-0e02b2c3d479"],
      ...
    },
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_access_method_ids": ["6ba7b810-9dad-11d1-80b4-00c04fd430c8"],
      ...
    }
  ],
  "instant_key_url" => "https://ik.seam.co/ABCXYZ",
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

***

## Poll for Status Changes or Monitor for Lifecycle Events

Once you've created an Access Grant with one or more access methods, poll the created access methods for status changes or watch for Access Grant and access method lifecycle events. The `access_method.is_issued` property and event let you know when an access method is ready to deliver to your user.

### Poll for Status Changes

To poll the created access methods, get these access methods by ID and look for the following status changes:

* If `access_method.is_encoding_required` is `true`, you must encode the card access method onto a plastic key card. Once you've encoded the access method onto a card, this property changes to `false`.
* When an access method is ready to be delivered to a user, `access_method.is_issued` changes to `true`. For a card access method, `access_method.is_issued` changes to `true` after you encode the plastic card. You can also view the `access_method.issued_at` property to learn when the access method was issued.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_methods.get(
  access_method_id = "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
)
```

**Output:**

```
AccessMethod(
  access_method_id="c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
  display_name="Plastic Card",
  mode="card",
  created_at="2025-06-16T16:54:19.946606Z",
  is_card_encoding_required=true,
  is_issued=false,
  issued_at=null,
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_methods/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
}'
```

**Output:**

```json
{
  "access_method": {
    "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    "display_name": "Plastic Card",
    "mode": "card",
    "created_at": "2025-06-16T16:54:19.946606Z",
    "is_card_encoding_required": true,
    "is_issued": false,
    "issued_at": null,
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessMethods.get({
  access_method_id: "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
});
```

**Output:**

```json
{
  "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
  "display_name": "Plastic Card",
  "mode": "card",
  "created_at": "2025-06-16T16:54:19.946606Z",
  "is_card_encoding_required": true,
  "is_issued": false,
  "issued_at": null,
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_methods.get(
  access_method_id: "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
)
```

**Output:**

```
{
  "access_method_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
  "display_name" => "Plastic Card",
  "mode" => "card",
  "created_at" => "2025-06-16T16:54:19.946606Z",
  "is_card_encoding_required" => true,
  "is_issued" => false,
  "issued_at" => null,
  ...
}
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_methods->get(
  access_method_id: "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
);
```

**Output:**

```json
[
  "access_method_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
  "display_name" => "Plastic Card",
  "mode" => "card",
  "created_at" => "2025-06-16T16:54:19.946606Z",
  "is_card_encoding_required" => true,
  "is_issued" => false,
  "issued_at" => null,
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

### Monitor for Lifecycle Events

Watch for the following Access Grant and access method events that include the IDs of the created Access Grant and access methods:

* `access_grant.access_granted_to_door`
* `access_grant.access_granted_to_all_doors`
* `access_method.card_encoding_required`
* `access_method.issued`

These events tell you what to do next. For example, if you've created a card access method, `access_method.card_encoding_required` lets you know that you need to encode the access method onto a plastic card. `access_grant.access_granted_to_all_doors` tells you that Seam has successfully created all the access methods that you requested through an Access Grant. `access_method.issued` indicates that you can now deliver the access method to your user.

The following example shows the payload for an `access_method.card_encoding_required` event:

```json
{
  "event_id": "22222222-3333-4444-5555-666666666666",
  "event_description": "An access method representing a physical card requires encoding.",
  "event_type": "access_method.card_encoding_required",
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
  ...
}
```

***

## Next Steps

Once you've created the Access Grant and the resulting access methods have been issued, you can deliver the access methods to your user. For details, see [Delivering Access Methods](delivering-access-methods.md).
