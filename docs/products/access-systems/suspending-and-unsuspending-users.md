---
description: >-
  Learn how to make temporary access changes by suspending or unsuspending
  users.
---

# Suspending and Unsuspending Users

## Overview

{% hint style="warning" %}
These endpoints are coming soon!
{% endhint %}

You can suspend a user to revoke their access temporarily. Suspending a user is a good action to take for users who may be behind on payment or have not fulfilled the requirements for entry. Then, once the user rectifies the payment, requirements, or other deficiency, you can unsuspend the user to restore their access.

***

### Suspend a User

To suspend a user, provide the user ID (`acs_user_id`).

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/suspend' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "00000000-0000-0000-0000-000000000000"
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

### Unsuspend a User

To unsuspend a user, provide the user ID (`acs_user_id`).

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/unsuspend' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "00000000-0000-0000-0000-000000000000"
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
