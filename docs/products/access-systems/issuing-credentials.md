---
description: Learn how to issue credentials to and remove credentials from users.
---

# Issuing Credentials

Credentials determine the means by which a user gains access at an entrance. Types of credentials include access codes, key cards, and mobile passes.

{% hint style="info" %}
Currently, Seam only supports the issuance of PIN codes for access.
{% endhint %}

## Create a Credential for a User

To [create a credential for a user](../../api-clients/access-control-systems/credentials/create-credential-for-user.md), provide the user ID (`acs_user_id`) and the desired [access (PIN) code](../smart-locks/access-codes/) (`code`).

Note the following restrictions for PIN codes:

* For [PTI Security Systems™](../../device-guides/pti-storlogix-cloud.md), the PIN code value must be an integer in the range 1-4294967296.
* Duplicate PIN codes are not allowed within a system.

The response includes the ID (`acs_credential_id`) of the newly-created credential, the assigned code (`code`), and the user (`acs_user_id`) associated with the credential. &#x20;

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_user_id": "22222222-2222-2222-2222-222222222222",
  "code": "1234"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "44444444-4444-4444-4444-444444444444",
    "acs_user_id": "22222222-2222-2222-2222-222222222222",
    "code": "1234",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-01-01T00:00:00Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

## Remove a Credential from a User

To remove a credential from a user, (that is, to [delete a credential](../../api-clients/access-control-systems/credentials/delete-credential.md)) provide the credential ID (`acs_credential_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "44444444-4444-4444-4444-444444444444"
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
