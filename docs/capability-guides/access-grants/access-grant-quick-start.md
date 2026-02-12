---
description: >-
  Create your first Access Grant to give a user scheduled access to a set of
  entrances with Seam.
---

# Access Grant Quick Start

In this quick start, create an Access Grant to give a user access to a set of entrances. Access Grants provide a unified, intuitive, and streamlined way to grant and manage user access across multiple access system providers. With a single command you can define the "who, where, when, and how" for assigning a user access to entrances and other access points.

In addition, this quick start shows you that, with Access Grants, it's easy to issue users access through multiple types of access methods, such as key cards, PIN codes, mobile keys, and Instant Keys.

{% hint style="info" %}
Seam Instant Keys are the fastest way to share access. You can send them as links through text or email, with no app download required. For details, see [Instant Keys](../instant-keys/).
{% endhint %}

***

## Before You Begin

Before you begin this quick start, perform the following steps:

1.  [Connect](../../core-concepts/workspaces/#connecting-virtual-devices) an access system to Seam.

    In this quick start, you can use a Seam virtual access system in a sandbox workspace, for example, the [virtual Salto Space access system](../../developer-tools/sandbox-and-sample-data/sandbox-salto-space-access-control-system.md).

    For instructions, see [Connect an Access System to Seam](../access-systems/connect-an-acs-to-seam/).
2.  Install a Seam SDK and create an API key.

    For instructions, see [Installation](../../api/installation.md) and [API Keys](../../core-concepts/authentication/api-keys.md).

***

## Overview

This quick start walks you through the following basic steps:

1.  Create an Access Grant.

    This Access Grant defines the following characteristics:

    * User identity: The user to whom you want to grant access.
    * Entrances: The set of entrances or other access points to which you want to grant the user access.
    * Access schedule: The starting and ending times for access.
    * Access methods: The modes of access, including key cards, PIN codes, mobile keys, and Instant Keys.

    For instructions, see [Step 1: Create an Access Grant](access-grant-quick-start.md#step-1-create-an-access-grant).
2.  Poll for access method status changes or monitor for Access Grant and access method lifecycle events.

    These properties and events let you know what your next step is. They also alert you to when you can deliver the access methods to your user.

    For instructions, see [Step 2: Poll for Status Changes or Monitor for Lifecycle Events](access-grant-quick-start.md#step-2-poll-for-status-changes-or-monitor-for-lifecycle-events).
3.  Deliver the created access methods to your user.

    The delivery method depends on the access method.

    For instructions, see [Step 3: Deliver the Access Methods](access-grant-quick-start.md#step-3-deliver-the-access-methods).

:rocket: Let's get started!

***

## Step 1: Create an Access Grant

Create an Access Grant to define the "who, where, when, and how" for assigning a user access to entrances and other access points. In this example, suppose that you want to grant a user named Jane Doe access for a three-day period. Jane needs to access two doors. To show how to create multiple access methods, this example issues Jane a key card and a mobile key that includes an Instant Key.

1. Find the access system ID.
   1. In the top navigation pane of [Seam Console](https://console.seam.co/), click **ACS Systems**.
   2. On the **Access Systems** page, locate the access system that you connected to Seam.
   3. In the **acs\_system\_id** column for the access system, click the ID to copy it.
   4. Store this access system ID for future use.
2. Create the Access Grant, as follows:

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
from seam import Seam

seam = Seam()  # Seam automatically uses your exported SEAM_API_KEY.

# Identify the IDs of the entrances to which
# you want to grant access.
entrances = seam.acs.entrances.list(
  # Use the access system ID that you copied in the previous step.
  acs_system_id=acs_system_id
)

# Create the Access Grant.
access_grant = seam.access_grants.create(
  # Create a new user identity to represent your user.
  user_identity={
   "full_name": "Jane Doe",
   "email_address": "jane.doe@example.com",
   "phone_number": "+15555551000"
  },
  # Specify the IDs of the entrances to which you want to grant access.
  acs_entrance_ids=[
    entrances[0].acs_entrance_id,
    entrances[1].acs_entrance_id
  ],

  # Specify the access methods that you want to issue.
  requested_access_methods=[
    {"mode": "card"},
    {"mode": "mobile_key"}
  ],
  # Specify the access schedule.
  starts_at="2025-08-01T15:00:00.000Z",
  ends_at="2025-08-04T11:00:00.000Z"
)
```

**Output:**

```python
AccessGrant(
  access_grant_id='6d74aefc-5712-4a8b-82c1-73a51ae60b87',
  user_identity_id='8cc2633a-54ca-455a-8a2b-77e6a1fc4fee',
  starts_at='2025-08-01T15:00:00.000Z',
  ends_at='2025-08-04T11:00:00.000Z',
  instant_key_url='https://ik.seam.co/ABCXYZ',
  requested_access_methods=[
    {
      "display_name": "Plastic Card",
      "mode": "card",
      "created_at": "2025-06-16T16:54:19.946606Z",
      "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
    },
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_at": "2025-06-16T16:54:21.946606Z",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
    }
  ],
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
# Identify the IDs of the entrances to which
# you want to grant access.
# Use the access system ID that you copied in the previous step.
mapfile -t entrances < <(
  curl -s --request POST "https://connect.getseam.com/acs/entrances/list" \
    --header "Authorization: Bearer $SEAM_API_KEY" \
    --header "Content-Type: application/json" \
    --data "{\"acs_system_id\": \"$acs_system_id\"}" | 
  jq -c '.acs_entrances[]'
)

# Create the Access Grant.
# In this command:
# - Create a new user identity to represent your user.
# - Specify the IDs of the entrances to which you want to grant access.
# - Specify the access methods that you want to issue.
# - Specify the access schedule.
access_grant=$(curl --include --request POST "https://connect.getseam.com/access_grants/create" \
  -H "Authorization: Bearer $SEAM_API_KEY" \
  -H 'Content-Type: application/json' \
  -d "{
    \"user_identity\": {
      \"full_name\": \"Jane Doe\",
      \"email_address\": \"jane.doe@example.com\",
      \"phone_number\": \"+15555551000\"
    },
    \"acs_entrance_ids\": [
      \"$(echo ${entrances[0]} | jq -r '.acs_entrance_id')\",
      \"$(echo ${entrances[1]} | jq -r '.acs_entrance_id')\"
    ],
    \"requested_access_methods\": [
      {
        \"mode\": \"card\"
      },
      {
        \"mode\": \"mobile_key\"
      }
    ],
    \"starts_at\": \"2025-08-01T15:00:00.000Z\",
    \"ends_at\": \"2025-08-04T11:00:00.000Z\"
}")
```

**Output:**

```json
{
  "access_grant":{
    "access_grant_id":"6d74aefc-5712-4a8b-82c1-73a51ae60b87",
    "user_identity_id":"8cc2633a-54ca-455a-8a2b-77e6a1fc4fee",
    "starts_at":"2025-08-01T15:00:00.000Z",
    "ends_at":"2025-08-04T11:00:00.000Z"
    "instant_key_url":"https://ik.seam.co/ABCXYZ",
    "requested_access_methods":[
      {
        "display_name":"Plastic Card",
        "mode":"card",
        "created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        "created_at":"2025-06-16T16:54:19.946606Z"
      },
      {
        "display_name":"Mobile Key",
        "mode":"mobile_key",
        "created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        "created_at":"2025-06-16T16:54:21.946606Z"
      }
    ],
    ...
  },
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
import { Seam } from "seam";

const seam = new Seam(); // Seam automatically uses your exported SEAM_API_KEY.

// Identify the IDs of the entrances to which
// you want to grant access.
const entrances = await seam.acs.entrances.list({
  // Use the access system ID that you copied in the previous step.
  acs_system_id: acsSystemId
});

// Create the Access Grant.
const accessGrant = await seam.accessGrants.create({
  // Create a new user identity to represent your user.
  user_identity: {
    full_name: "Jane Doe",
    email_address: "jane.doe@example.com",
    phone_number: "+15555551000"    
  },
  // Specify the IDs of the entrances to which you want to grant access.
  acs_entrance_ids: [
    entrances[0].acs_entrance_id,
    entrances[1].acs_entrance_id
  ],
  // Specify the access methods that you want to issue.
  requested_access_methods: [
    {"mode": "card"},
    {"mode": "mobile_key"}
  ],
  // Specify the access schedule.
  starts_at: "2025-08-01T15:00:00.000Z",
  ends_at: "2025-08-04T11:00:00.000Z"
});
```

**Output:**

```json
{
  access_grant_id: '6d74aefc-5712-4a8b-82c1-73a51ae60b87',
  user_identity_id: '8cc2633a-54ca-455a-8a2b-77e6a1fc4fee',
  starts_at: '2025-08-01T15:00:00.000Z',
  ends_at: '2025-08-04T11:00:00.000Z'
  instant_key_url: 'https://ik.seam.co/ABCXYZ',
  requested_access_methods: [
    {
      display_name: 'Plastic card',
      mode: 'card',
      created_access_method_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
      created_at: '2025-06-16T16:54:19.946606Z'
    },
    {
      display_name: 'Mobile key',
      mode: 'mobile_key',
      created_access_method_ids: ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      created_at: '2025-06-16T16:54:21.946606Z'
    }
  ],
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
require "seam"

seam = Seam.new() # Seam automatically uses your exported SEAM_API_KEY.

# Identify the IDs of the entrances to which
# you want to grant access.
entrances = seam.acs.entrances.list(
  # Use the access system ID that you copied in the previous step.
  acs_system_id: acs_system_id
)

# Create the Access Grant.
access_grant = seam.access_grants.create(
  # Create a new user identity to represent your user.
  user_identity: {
    full_name: "Jane Doe",
    email_address: "jane.doe@example.com",
    phone_number: "+15555551000"    
  },
  # Specify the IDs of the entrances to which you want to grant access.
  acs_entrance_ids: [
    entrances[0].acs_entrance_id,
    entrances[1].acs_entrance_id
  ],
  # Specify the access methods that you want to issue.
  requested_access_methods: [
    { mode: "card" },
    { mode: "mobile_key" }
  ],
  # Specify the access schedule.
  starts_at: "2025-08-01T15:00:00.000Z",
  ends_at: "2025-08-04T11:00:00.000Z"
)
```

**Output:**

```ruby
<Seam::Resources::AccessGrant:0x005f0
  access_grant_id="6d74aefc-5712-4a8b-82c1-73a51ae60b87"
  user_identity_id="8cc2633a-54ca-455a-8a2b-77e6a1fc4fee"
  starts_at=2025-08-01 15:00:00 UTC
  ends_at=2025-08-04 11:00:00 UTC
  instant_key_url="https://ik.seam.co/ABCXYZ"
  requested_access_methods=[
    {
      "display_name"=>"Plastic card",
      "mode"=>"card",
      "created_access_method_ids"=>["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
      "created_at"=>"2025-06-16T16:54:19.946606Z"
    },
    {
      "display_name"=>"Mobile key",
      "mode"=>"mobile_key",
      "created_access_method_ids"=>["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      "created_at"=>"2025-06-16T16:54:21.946606Z"
    }
  ]
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
<?php
require 'vendor/autoload.php';

$seam = new Seam\SeamClient(); // Seam automatically uses your exported SEAM_API_KEY.

// Identify the IDs of the entrances to which
// you want to grant access.
$entrances = $seam->acs->entrances->list(
  // Use the access system ID that you copied in the previous step.
  acs_system_id: $acs_system_id
);

// Create the Access Grant.
$access_grant = $seam->access_grants->create(
  // Create a new user identity to represent your user.
  user_identity: [
    "full_name" => "Jane Doe",
    "email_address" => "jane.doe@example.com",
    "phone_number" => "+15555551000"
  ],
  // Specify the IDs of the entrances to which you want to grant access.
  acs_entrance_ids: [
    $entrances[0]->acs_entrance_id,
    $entrances[1]->acs_entrance_id
  ],
  // Specify the access methods that you want to issue.
  requested_access_methods: [
    ["mode" => "card"],
    ["mode" => "mobile_key"]
  ],
  // Specify the access schedule.
  starts_at: '2025-08-01T15:00:00.000Z',
  ends_at: '2025-08-04T11:00:00.000Z'
);
```

**Output:**

```php
{
  "access_grant_id":"6d74aefc-5712-4a8b-82c1-73a51ae60b87",
  "user_identity_id":"8cc2633a-54ca-455a-8a2b-77e6a1fc4fee",
  "starts_at":"2025-08-01T15:00:00.000Z",
  "ends_at":"2025-08-04T11:00:00.000Z"
  "instant_key_url":"https://ik.seam.co/ABCXYZ",
  "requested_access_methods":[
    {
      "display_name":"Plastic Card",
      "mode":"card",
      "created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
      "created_at":"2025-06-16T16:54:19.946606Z"
    },
    {
      "display_name":"Mobile Key",
      "mode":"mobile_key",
      "created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
      "created_at":"2025-06-16T16:54:21.946606Z"
    }
  ],
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
{% endtabs %}

***

## Step 2: Poll for Status Changes or Monitor for Lifecycle Events

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

Watch for the following events that include the IDs of the created Access Grant and access methods:

* `access_grant.access_granted_to_door`
* `access_grant.access_granted_to_all_doors`
* `access_method.card_encoding_required`&#x20;
* `access_method.issued`

These events tell you what to do next. For example, if you've created a card access method, `access_method.card_encoding_required` lets you know that you need to encode the access method onto a plastic card. `access_grant.access_granted_to_all_doors` tells you that Seam has successfully created all the access methods that you requested through the Access Grant. `access_method.issued` indicates that you can now deliver the access method to your user.

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

## Step 3: Deliver the Access Methods

Once the access methods are ready to deliver to your user, retrieve each access method by ID. Remember, the returned access grant includes the IDs of all the requested access methods. Then, deliver each access method to your user. The delivery mechanism varies for different access method modes.

{% hint style="info" %}
If you've created an Access Grant that includes a mobile key, the access grant also contains the corresponding Instant Key URL, for added efficiency. In this case, you do not need to retrieve the access method. Instead, you can identify the Instant Key URL directly from the returned Access Grant.
{% endhint %}

### Get an Access Method

Retrieve each access method that you created as part of the Access Grant. Note that the set of relevant properties for an access method varies based on the mode, such as `card`, `code`, or `mobile_key`.

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
  is_card_encoding_required=false,
  is_issued=true,
  issued_at="2025-06-16T16:55:03.924353Z",
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
    "is_card_encoding_required": false,
    "is_issued": true,
    "issued_at": "2025-06-16T16:55:03.924353Z",
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
  "is_card_encoding_required": false,
  "is_issued": true,
  "issued_at": "2025-06-16T16:55:03.924353Z",
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
  "is_card_encoding_required" => false,
  "is_issued" => true,
  "issued_at" => "2025-06-16T16:55:03.924353Z",
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
  "is_card_encoding_required" => false,
  "is_issued" => true,
  "issued_at" => "2025-06-16T16:55:03.924353Z",
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

### Deliver the Access Method to Your User

The way in which you deliver an access method depends on the mode of access. The following table describes the delivery mechanisms:

<table><thead><tr><th width="188.4000244140625">Access Method Mode</th><th>Delivery Mechanism</th></tr></thead><tbody><tr><td>PIN code</td><td>You can retrieve the access method by ID. The returned access method resource includes the <code>code</code> that you can share with your user.</td></tr><tr><td>Plastic key card</td><td>Some access systems require you to encode plastic key cards. In this case, the access method's <code>is_encoding_required</code> property is <code>true</code>. You can use the Seam API or Seam Console to encode and scan the cards. For details, see <a href="../access-systems/working-with-card-encoders-and-scanners/">Working with Card Encoders and Scanners</a>.<br>Once you've encoded the card, the access method's <code>is_encoding_required</code> property changes to <code>false</code>, and its <code>is_issued</code> property changes to <code>true</code>. The card is ready to be delivered to your user.</td></tr><tr><td>Mobile key</td><td>You deliver a mobile key to your user within your own mobile app that you develop using the Seam mobile SDKs. For mobile keys, the access method includes a <code>client_session_token</code> property that you can use to identify the client session and client session token that you need to initialize the Seam client on your user's mobile device. Then, your user simply taps a button in your app to unlock the door. For details, see <a href="../mobile-access/">Mobile Access</a>.</td></tr><tr><td>Instant Key</td><td>Each mobile key that you create also includes an Instant Key. Seam Instant Keys are the most streamlined mobile access experience available today. Both the Access Grant and the mobile key access method include the <code>instant_key_url</code> property. You deliver this URL to your user by sending it through text or email. There's no app download required. You can also embed an Instant Key in your own app. For details, see <a href="../instant-keys/">Instant Keys</a> and <a href="../instant-keys/delivering-instant-keys.md">Delivering Instant Keys</a>.</td></tr></tbody></table>

***

## Next Steps

Now that you've created your first Access Grant, learn more about Access Grants.

* [Creating an Access Grant Using Entrances](creating-an-access-grant-using-entrances.md)
* [Creating an Access Grant Using Spaces](creating-an-access-grant-using-spaces.md)
* [Delivering Access Methods](delivering-access-methods.md)
* [Access Grants API Reference](../../api/access_grants/)
* [Access Methods API Reference](../../api/access_methods/)
