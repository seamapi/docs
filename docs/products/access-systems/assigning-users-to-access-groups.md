---
description: >-
  Learn how to use access groups to manage user permissions across different
  doors and areas.
---

# Assigning Users to Access Groups

## Overview

Access groups define sets of users, combined with sets of permissions. These permissions include both the sets of doors, areas, or other assets that the users can access and the schedules during which the users can access these assets. By using access groups, property managers can assign or revoke access rights easily for numerous users, based on their rights and needs.

This guide explains how to grant access permissions to users by adding them to the appropriate access groups.

***

### Add a User to an Access Group

To [add a user to an access group](../../api-clients/access-control-systems/users/add-user-to-access-group.md), provide both the user ID (`acs_user_id`) and the access group ID (`acs_access_group_id`).

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/add_to_access_group' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "00000000-0000-0000-0000-000000000000",
  "acs_access_group_id": "11111111-1111-1111-1111-111111111111"
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

### Remove a User from an Access Group

To [remove a user from an access group](../../api-clients/access-control-systems/users/remove-user-from-access-group.md), provide both the user ID (`acs_user_id`) and the access group ID (`acs_access_group_id`).

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/remove_from_access_group' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "00000000-0000-0000-0000-000000000000",
  "acs_access_group_id": "11111111-1111-1111-1111-111111111111"
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
