---
description: >-
  Learn how to manage your users and sync tenants and visitors from your
  property management platform.
---

# User Management

This guide explains how to create and manage users in an access control system (ACS). Using the [Access Control Systems API](../../api-clients/access-control-systems/), you can automate issuing access to long-term tenants or visitors.

## Before You Begin

To add users to your access system, first retrieve the ID (`acs_system_id`) of the access system that you want to configure. To retrieve the access system details, use [Get a System](../../api-clients/access-control-systems/systems/get-system.md) or [List Systems](../../api-clients/access-control-systems/systems/list-systems.md). Then, continue to the remaining sections in this topic to learn how to manage users.

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/systems/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json'
```

**Response:**

```json
{
  "acs_systems": [
    {
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "name": "Example Inc",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2023-09-28T01:40:50.447Z",
      "system_type": "pti_site",
      "system_type_display_name": "PTI site",
      "external_type": "pti_site",
      "external_type_display_name": "PTI site"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}

## Create a User

To [create a user](../../api-clients/access-control-systems/users/create-user.md), provide the ACS system ID (`acs_system_id`) of the system and the attributes of the user, such as the full name (`full_name`), email address (`email`), phone number (`phone_number`), and so on.

You can also assign a user to one or more access groups by including the access group IDs for the user as an array of strings in the `acs_access_group_ids` parameter.

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "11111111-1111-1111-1111-111111111111",
  "acs_access_group_ids": [],
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "phone_number": "+15555550101"
}'
```

**Response:**

```json
{
  "acs_user": {
    "acs_user_id": "22222222-2222-2222-2222-222222222222",
    "display_name": "Jane Doe",
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "phone_number": "+15555550101",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-01-01T00:00:00Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

## Update a User

To [update a user](../../api-clients/access-control-systems/users/update-user.md), provide the ID (`acs_user_id`) of the desired user, along with the attributes that you want to modify.

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/update' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer seam_test2jjY_9YgUrnuR7y29jWkUFQ9i3qMh' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "22222222-2222-2222-2222-222222222222",
  "full_name": "Jack Doe"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}

## Delete a User

To [delete a user](../../api-clients/access-control-systems/users/delete-user.md), provide the ID (`acs_user_id`) of the user that you want to delete.

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "22222222-2222-2222-2222-222222222222"
}'
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}

## List Users

To list all users within an ACS, provide the ID (`acs_system_id)` of the ACS.

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer seam_test2jjY_9YgUrnuR7y29jWkUFQ9i3qMh' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "11111111-1111-1111-1111-111111111111"
}'
```

**Response:**

```json
{
  "acs_users": [
    {
      "acs_user_id": "22222222-2222-2222-2222-222222222222",
      "display_name": "Jane Doe",
      "full_name": "Jack Doe",
      "email": "jane@example.com",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2023-01-01T00:00:00Z"
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
