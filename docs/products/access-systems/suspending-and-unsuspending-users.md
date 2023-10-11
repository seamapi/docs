---
description: >-
  Learn how to make temporary access changes by suspending or unsuspending
  users.
---

# Suspending and Unsuspending Users

You can suspend a user to revoke their access temporarily. Suspending a user is a good action to take for users who may be behind on payment or have not fulfilled the requirements for entry. Then, once the user rectifies the payment, requirements, or other deficiency, you can unsuspend the user to restore their access.

## Suspend a User

To [suspend a user](../../api-clients/access-control-systems/users/suspend-a-user.md), provide the user ID (`acs_user_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/suspend' \
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

## Unsuspend a User

To [unsuspend a user](../../api-clients/access-control-systems/users/unsuspend-a-user.md), provide the user ID (`acs_user_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/unsuspend' \
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
