---
description: >-
  Learn how to manage your users, and sync tenants and visitors from your
  property management platform.
---

# User Management

## Overview

This guide explains how to create and manage users on an access system. With the Access System API, you can automate issuing access to long-term tenants or visitors.

Seam allows you to adjust the current heating and cooling settings, and the fan mode of a thermostat. This guide will walk you through how to do this with the API.

***

## Before You Begin

To add users to your access system, we'll first need to retrieve the ID of the access system you want to configure. Use the [Get System](../../api-clients/access-control-systems/systems/get-a-system.md) or [List Systems](../../api-clients/access-control-systems/systems/list-systems.md) to retrieve the access system details. After you've done that, come back here and keep reading.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json'
```

**Response:**

```
{
  "acs_systems": [
    {
      "acs_system_id": "00000000-0000-0000-0000-000000000000",
      "name": "Example Inc",
      "workspace_id": "11111111-1111-1111-1111-111111111111",
      "created_at": "2023-01-01T00:00:00Z",
      "system_type": "pti_site",
      "system_type_display_name": "PTI site"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Creating a User

[Create a user](../../api-clients/access-control-systems/users/create-user.md) by providing the `acs_system_id` of the system, and the attributes of the user.

You can also assign a user to an access group by including their access group IDs in the `acs_access_group_ids` parameter.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "00000000-0000-0000-0000-000000000000",
  "acs_access_group_ids": [],
  "full_name": "Jane Lo",
  "email": "user@example.com",
  "phone_number": "+10123456789"
}'
```

**Response:**

```
{
  "acs_user": {
    "acs_user_id": "11111111-1111-1111-1111-111111111111",
    "display_name": "Jane Lo",
    "full_name": "Jane Lo",
    "email": "user@example.com",
    "acs_system_id": "00000000-0000-0000-0000-000000000000",
    "workspace_id": "22222222-2222-2222-2222-222222222222",
    "created_at": "2023-01-01T00:00:00Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Updating a User

To [update a user](../../api-clients/access-control-systems/users/update-user.md), provide the `user_id` of the desired user along with the attributes you wish to modify.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer seam_test2jjY_9YgUrnuR7y29jWkUFQ9i3qMh' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "f3ce220c-294f-458e-8311-31a282147cab",
  "full_name": "Jack Lo"
}'
```

**Response:**

```
{
  "acs_user": {
    "acs_user_id": "11111111-1111-1111-1111-111111111111",
    "display_name": "Jane Lo",
    "full_name": "Jack Lo",
    "email": "user@example.com",
    "acs_system_id": "00000000-0000-0000-0000-000000000000",
    "workspace_id": "22222222-2222-2222-2222-222222222222",
    "created_at": "2023-01-01T00:00:00Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Deleting a User

Provide the `user_id` of the user you wish to delete.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "11111111-1111-1111-1111-111111111111"
}'
```

**Response:**

```
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Listing Users

To list users, provide the `acs_system_id` of the system.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer seam_test2jjY_9YgUrnuR7y29jWkUFQ9i3qMh' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "bd8a0f31-18f0-4d98-836a-951913d26c89"
}'
```

**Response:**

```
{
  "acs_users": [
    {
      "acs_user_id": "11111111-1111-1111-1111-111111111111",
      "display_name": "John Doe",
      "full_name": "John Doe",
      "email": "john@example.com",
      "acs_system_id": "00000000-0000-0000-0000-000000000000",
      "workspace_id": "22222222-2222-2222-2222-222222222222",
      "created_at": "2023-01-01T00:00:00Z"
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
