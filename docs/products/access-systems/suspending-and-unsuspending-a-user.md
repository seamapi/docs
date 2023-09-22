# Suspending & Unsuspending a User

## Overview

{% hint style="warning" %}
These endpoints are coming soon!
{% endhint %}

Suspending a user allows you to temporarily revoke access for them. This is a good action to take for end users that may be behind on payment, or have not fulfilled the requirements for entry.

***

### Suspending a User

To suspend a user, provide their user ID.

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

### Unsuspending a User

To unsuspend a user, provide their user ID.

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
