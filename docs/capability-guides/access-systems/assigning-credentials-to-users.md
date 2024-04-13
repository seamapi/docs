# Assigning Credentials to Users

This guide explains how to assign and unassign credentials to users. When credentials are assigned, users can use them to access areas and resources according to their permissions. When credentials are unassigned, users can no longer use those specific credentials to access areas or resources.

***

## Assign a Credential to a User

To [assign a credential to a user](../../api-clients/access-control-systems/credentials/assign-a-credential-to-a-user.md), provide both the user ID (`acs_user_id`) and the credential ID (`acs_credential_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/users/assign' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "22222222-2222-2222-2222-222222222222",
  "acs_user_id": "33333333-3333-3333-3333-333333333333"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "22222222-2222-2222-2222-222222222222",
    "acs_user_id": "33333333-3333-3333-3333-333333333333",
    "display_name": "Card 82****",
    "code": "824759",
    "acs_system_id": "b3eb61dc-9b69-42a9-8b73-375832dbeec8",
    "access_method": "card",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-06T06:50:05.714Z",
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Unassign a Credential from a User

To [unassign a credential from a user](../../api-clients/access-control-systems/credentials/unassign-a-credential-from-a-user.md), provide both the user ID (`acs_user_id`) and the credential ID (`acs_credential_id`).

{% tabs %}
{% tab title="cURL (Bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/acs/credentials/unassign' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_credential_id": "22222222-2222-2222-2222-222222222222",
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "755e6817-985f-4e2f-96b2-6f388456f19b",
    "display_name": "Code 82****",
    "code": "824759",
    "acs_system_id": "b3eb61dc-9b69-42a9-8b73-375832dbeec8",
    "access_method": "card",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-06T06:50:05.714Z",
    "visionline_metadata": {}
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
