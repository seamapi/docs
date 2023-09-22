---
description: >-
  Learn how to use access groups to manage user permissions across different
  doors and areas.
---

# Assigning Users to Access Groups

## Overview

Access groups define specific permissions for various doors or areas. By utilizing these groups, property managers can easily assign or revoke access rights for numerous users, based on their rights and needs. Follow this guide to learn how to grant users access permissions by adding them into the appropriate access groups.

***

### Adding a User to an Access Group

To [add a user to an access group](../../api-clients/access-control-systems/users/add-user-to-access-group.md), provide both the user ID and the access group ID.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/add_to_access_group' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "f3ce220c-294f-458e-8311-31a282147cab",
  "acs_access_group_id": "39bf0dad-da02-4321-b352-25f2cf97e83a"
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

### Removing a User from an Access Group

To [remove a user from an access group](../../api-clients/access-control-systems/users/remove-user-from-access-group.md), provide both the user ID and the access group ID.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/remove_from_access_group' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer seam_test2jjY_9YgUrnuR7y29jWkUFQ9i3qMh' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "f3ce220c-294f-458e-8311-31a282147cab",
  "acs_access_group_id": "39bf0dad-da02-4321-b352-25f2cf97e83a"
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
