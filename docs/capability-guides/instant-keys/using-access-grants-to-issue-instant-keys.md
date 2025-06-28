---
description: Learn how to create an access grant that issues an Instant Key.
---

# Using Access Grants to Issue Instant Keys

An access grant defines the "who, where, when, and how" for assigning a user access to entrances, including the following characteristics:

<table><thead><tr><th width="239.5999755859375">Characteristic</th><th>Description</th></tr></thead><tbody><tr><td><code>user_identity_id</code> or <code>user_identity</code></td><td>The user to whom to grant access. You can either create a user identity separately and specify the ID to the access grant or create a new user identity as part of the access grant creation action.</td></tr><tr><td><code>acs_entrance_ids</code></td><td>The entrances to which to grant access. You can specify one or more entrances by ID.</td></tr><tr><td><code>starts_at</code> and <code>ends_at</code></td><td>The access schedule.</td></tr><tr><td><code>requested_access_methods</code> and <code>mode</code></td><td>The access methods that you want to grant for the user. In each <code>requested_access_method</code>, specify the desired <code>mode</code> of access, such as a PIN code, key card, or mobile key (with an Instant Key).</td></tr></tbody></table>

Once you have identified the entrances to which you want to grant a user access, create an access grant to assign the specified access to the user. Specify `mobile_key` as the mode for a requested access method, and the resulting mobile key also includes an Instant Key.

To create an Instant Key:

1. [Identify the entrances](using-access-grants-to-issue-instant-keys.md#identify-entrances) to which you want to grant the user access.
2. [Create a user identity](using-access-grants-to-issue-instant-keys.md#create-a-user-identity) for the user to whom you want to grant access. Alternately, you can create a new user identity as part of the access grant creation action.
3. [Create an access grant](using-access-grants-to-issue-instant-keys.md#create-an-access-grant) for the user identity to define the entrances to which the user should have access, the starting and ending times for this access, and the requested access methods, including a mobile key.

The action returns an access grant that includes the Instant Key URL. You can then share this Instant Key URL with your user.

***

## **Identify Entrances**

List the entrances in the access system and identify the ones to which you want to grant the user access.

{% tabs %}
{% tab title="Python" %}
**Code**

```python
seam.acs.entrances.list(
  acs_system_id="c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)
```

**Output**

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

{% tab title="cURL" %}
**Code**

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
}
EOF
```

**Output**

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
**Code**

```javascript
await seam.acs.entrances.list({
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339",
});
```

**Output**

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
**Code**

```ruby
seam.acs.entrances.list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
)
```

**Output**

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
**Code**

```php
<?php
$seam->acs->entrances->list(
  acs_system_id: "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
);
```

**Output**

```php
<?php
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

{% tab title="Seam CLI" %}
**Code**

```seam_cli
seam acs entrances list --acs_system_id "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
```

**Output**

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
{% endtabs %}

## **Create a User Identity**

You can create a user identity before creating the access grant, you can retrieve an existing user identity, or you can skip this step and [create a new user identity as part of the access grant creation action](../../api/access_grants/create.md#create-an-access-grant-including-a-new-user-identity).

To create a user identity, specify the unique `user_identity_key`,  `email_address`, or `phone_number` of the user. Also, include the ID of the access system in which you want to grant the user access.

{% tabs %}
{% tab title="Python" %}
**Code**

```python
seam.user_identities.create(
  full_name="Jane Doe",
  email_address="jane@example.com",
  acs_system_ids=["c359cba2-8ef2-47fc-bee0-1c7c2a886339"]
)
```

**Output**

```python
UserIdentity(
  user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
  full_name="Jane Doe",
  email_address="jane@example.com",
  ...
)
```
{% endtab %}

{% tab title="cURL" %}
**Code**

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  "acs_system_ids": [
    "c359cba2-8ef2-47fc-bee0-1c7c2a886339"
  ]
}
EOF
```

**Output**

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
**Code**

```javascript
await seam.userIdentities.create({
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
});
```

**Output**

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
**Code**

```ruby
seam.user_identities.create(
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"],
)
```

**Output**

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
**Code**

```php
<?php
$seam->user_identities->create(
  full_name: "Jane Doe",
  email_address: "jane@example.com",
  acs_system_ids: ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"]
);
```

**Output**

```php
<?php
[
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "full_name" => "Jane Doe",
  "email_address" => "jane@example.com",
  ...
];
```
{% endtab %}

{% tab title="Seam CLI" %}
**Code**

```seam_cli
seam user-identities create --email_address "jane@example.com" --full_name "Jane Doe" --acs_system_ids ["c359cba2-8ef2-47fc-bee0-1c7c2a886339"]
```

**Output**

```json
{
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "full_name": "Jane Doe",
  "email_address": "jane@example.com",
  ...
}
```
{% endtab %}
{% endtabs %}

***

## **Create an Access Grant**

To create an access grant, specify the user identity, entrance IDs, starting and ending times, and requested access methods. To issue an Instant Key, specify `mobile_key` as the mode for a requested access method.

{% tabs %}
{% tab title="Python" %}
**Code**

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
    {"mode": "mobile_key"}
  ],
  starts_at="2025-07-13T15:00:00.000Z",
  ends_at="2025-07-16T11:00:00.000Z"
)
```

**Output**

```python
AccessGrant(
  access_grant_id="ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  display_name="My Access Grant",
  user_identity_id="43947360-cdc8-4db6-8b22-e079416d1d8b",
  starts_at="2025-07-13T15:00:00.000Z",
  ends_at="2025-07-16T11:00:00.000Z"
  requested_access_methods=[
    {
      "display_name": "Mobile Key Credential",
      "mode": "mobile_key",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    },
  ],
  instant_key_url="https://ik.seam.co/THSDKS",
  ...
)
```
{% endtab %}

{% tab title="cURL" %}
**Code**

```curl
# Alternately, to create a new user identity, use the
# following parameter instead of user_identity_id:
# user_identity={
#  "full_name": "Jane Doe",
#  "email_address": "jane.doe@example.com",
# },
curl --include --request POST "https://connect.getseam.com/access_grants/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "acs_entrance_ids": [
    "48ebfb50-c531-43c5-b9ea-409f26dabbd7",
    "f74e4879-5991-4e2f-a368-888983dcfbfc"
  ],
  "requested_access_methods": [
    {
      "mode": "mobile_key"
    }
  ],
  "starts_at": "2025-07-13T15:00:00.000Z",
  "ends_at": "2025-07-16T11:00:00.000Z"
}
EOF
```

**Output**

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
        "display_name": "Mobile Key Credential",
        "mode": "mobile_key",
        "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        ...
      }
    ],
    "instant_key_url": "https://ik.seam.co/THSDKS",
    ...
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code**

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
    { mode: "mobile_key" },
  ],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
});
```

**Output**

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "display_name": "My Access Grant",
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "starts_at": "2025-07-13T15:00:00.000Z",
  "ends_at": "2025-07-16T11:00:00.000Z",
  "requested_access_methods": [
    {
      "display_name": "Mobile Key Credential",
      "mode": "mobile_key",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    }
  ],
  "instant_key_url": "https://ik.seam.co/THSDKS",
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code**

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
  requested_access_methods: [{ mode: "mobile_key" }],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
)
```

**Output**

```ruby
{
  "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "display_name" => "My Access Grant",
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "starts_at" => "2025-07-13T15:00:00.000Z",
  "ends_at" => "2025-07-16T11:00:00.000Z",
  "requested_access_methods" => [
    {
      "display_name": "Mobile Key Credential",
      "mode": "mobile_key",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    }
  ],
  "instant_key_url" => "https://ik.seam.co/THSDKS",
  ...
}
```
{% endtab %}

{% tab title="PHP" %}
**Code**

```php
<?php
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
      ["mode" => "mobile_key"],
  ],
  starts_at: "2025-07-13T15:00:00.000Z",
  ends_at: "2025-07-16T11:00:00.000Z"
);
```

**Output**

```php
<?php
[
  "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "display_name" => "My Access Grant",
  "user_identity_id" => "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "starts_at" => "2025-07-13T15:00:00.000Z",
  "ends_at" => "2025-07-16T11:00:00.000Z",
  "requested_access_methods" => [
    [
      "display_name" => "Mobile Key Credential",
      "mode" => "mobile_key",
      "created_access_method_ids" => [
          "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
    ],
  ],
  "instant_key_url" => "https://ik.seam.co/THSDKS",
  ...
];
```
{% endtab %}

{% tab title="Seam CLI" %}
**Code**

```seam_cli
seam access-grants create --user_identity_id "e3d736c1-540d-4d10-83e5-9a4e135453b4" --acs_entrance_ids ["48ebfb50-c531-43c5-b9ea-409f26dabbd7","f74e4879-5991-4e2f-a368-888983dcfbfc"] --requested_access_methods [{"mode":"mobile_key"}] --starts_at "2025-07-13T15:00:00.000Z" --ends_at "2025-07-16T11:00:00.000Z"
```

**Output**

```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "display_name": "My Access Grant",
  "user_identity_id": "43947360-cdc8-4db6-8b22-e079416d1d8b",
  "starts_at": "2025-07-13T15:00:00.000Z",
  "ends_at": "2025-07-16T11:00:00.000Z",
  "requested_access_methods": [
    {
      "display_name": "Mobile Key Credential",
      "mode": "mobile_key",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      ...
    }
  ],
  "instant_key_url": "https://ik.seam.co/THSDKS",
  ...
}
```
{% endtab %}
{% endtabs %}

Within the response, the `instant_key_url` property provides the issued Instant Key. Share this URL with your user. For details, see [Delivering Instant Keys](delivering-instant-keys.md).
