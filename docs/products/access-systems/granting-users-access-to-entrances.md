---
description: Learn how to grant ACS users access to entrances.
---

# Granting Users Access to Entrances

Within [access control systems](./), [entrances](./#access-system-components) include secured doors, gates, services, and other methods of entry. You grant [users](./#what-is-a-user) access to these entrances.

This guide explains how to grant users access to specific entrances within an ACS.

## List Entrances

To [list all entrances](../../api-clients/access-control-systems/entrances/list-entrances.md) in an ACS, provide the access control system ID (`acs_system_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/entrances/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4"
}'
```

**Response:**

```json
{
  "acs_entrances": [
    {
      "acs_entrance_id": "302a9eae-c6d5-4377-88d9-a284e0383df3",
      "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "properties": {},
      "visionline_door_id": "4f3408e7-6c53-4d65-87e1-bbc3eb323606",
      "display_name": "door 3",
      "created_at": "2024-01-05T07:20:10.554Z"
    },
    {
      "acs_entrance_id": "3c7c2288-d7ca-45ab-9928-eb8c8975f1dc",
      "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "properties": {},
      "visionline_door_id": "01e6b59a-c058-4837-b83f-5ab7da309305",
      "display_name": "door 2",
      "created_at": "2024-01-05T07:20:10.388Z"
    },
    {
      "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586",
      "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "properties": {},
      "visionline_door_id": "734926a0-ddfe-4be1-8ffb-3391cf6ca93f",
      "display_name": "door 1",
      "created_at": "2024-01-05T07:20:10.163Z"
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}

## Get an Entrance

To [get a specific entrance](../../api-clients/access-control-systems/entrances/get-an-entrance.md) within an ACS, provide the entrance ID (`acs_entrance_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/acs/entrances/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586"
}'
```

**Response:**

```json
{
  "acs_entrance": {
    "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586",
    "acs_system_id": "8aaa5fa0-9381-4463-a0ed-85f9c1fbcef4",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "properties": {},
    "visionline_door_id": "734926a0-ddfe-4be1-8ffb-3391cf6ca93f",
    "display_name": "door 1",
    "created_at": "2024-01-05T07:20:10.163Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

## Grant a User Access to an Entrance

To [grant a user access to an entrance](../../api-clients/access-control-systems/entrances/grant-a-user-access-to-an-entrance.md), provide both the entrance ID (`acs_entrance_id`) and the user ID (`acs_user_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/entrances/grant_access' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_entrance_id": "d3351d70-efb6-45d4-a580-fa7b2ffca586",
  "acs_user_id": "c0184e54-0d93-4bca-8a4e-47bbd2ee3bfe"
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
