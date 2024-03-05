---
description: Learn how to remove (delete) credentials from users.
---

# Removing Credentials from Users

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
  "acs_credential_id": "755e6817-985f-4e2f-96b2-6f388456f19b"
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
