# Issuing Credentials

## Overview

Credentials determine the means by which a user gains access at an entrance. Currently, we only support the issuance of PIN codes for access.

***

### Adding a Credential for a User

To add a credential, provide the user ID and the desired PIN code.

For PTI Systems, the PIN code value must be an integer in the range of 1 - 4294967296. Duplicate PIN codes are not allowed within a system.

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
  "acs_user_id": "00000000-0000-0000-0000-000000000000",
  "code": "1234"
}'
```

**Response:**

```
{
  "acs_credential": {
    "acs_credential_id": "11111111-1111-1111-1111-111111111111",
    "acs_user_id": "00000000-0000-0000-0000-000000000000",
    "code": "1234",
    "acs_system_id": "22222222-2222-2222-2222-222222222222",
    "workspace_id": "33333333-3333-3333-3333-333333333333",
    "created_at": "2023-01-01T00:00:00Z"
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
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "11111111-1111-1111-1111-111111111111"
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
