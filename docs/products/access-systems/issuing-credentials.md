# Issuing Credentials

## Overview

Credentials determine the means by which a user gains access at an entrance. Currently, we only support the issuance of PIN codes for access.

***

### Adding a Credential for a User

To add a credential for a user, provide both the user ID and the pin code you want to program.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "f3ce220c-294f-458e-8311-31a282147cab",
  "code": "1234"
}'
```

**Response:**

```
{
  "acs_credential": {
    "acs_credential_id": "d5dc9756-b061-4255-8801-1b13ac80eb16",
    "acs_user_id": "f3ce220c-294f-458e-8311-31a282147cab",
    "code": "23432343",
    "acs_system_id": "bd8a0f31-18f0-4d98-836a-951913d26c89",
    "workspace_id": "9946a591-2da2-4558-9556-0cadf93f4040",
    "created_at": "2023-09-22T18:54:42.352Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Removing a Credential for a User

To remove a credential for a user, provide both the credential ID.

{% tabs %}
{% tab title="Curl" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer seam_test2jjY_9YgUrnuR7y29jWkUFQ9i3qMh' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "d5dc9756-b061-4255-8801-1b13ac80eb16"
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
