---
description: Learn how to manage credentials and assign them to users.
---

# Managing Credentials

Credentials determine the means by which a user gains access at an entrance. Types of credentials include key cards, mobile passes, and PIN codes. This guide provide instructions on creating and removing credentials, and reassigning them to users.

***

## Create a Credential for a User

To [create a credential for a user](../../api-clients/access-control-systems/credentials/create-credential-for-user.md), provide the user ID (`acs_user_id`) and the desired access method (`access_method`). Seam supports the following access methods:

* `code` for a PIN code-based credential
* `card` for a key card-based credential
* `mobile_key` for a [multi-phone sync credential](../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials).

Depending on the access control system and the type of credential being issued, you may also specify the following properties for the new credential:

* PIN code (`code`)
* Start and end time frame for the credential's validity (`starts_at` and `ends_at`)
* When creating a Seam mobile key, make sure to issue a multi-phone sync credential (`is_multi_phone_sync_credential`)
* Brand-specific data, such as [Visionline-specific metadata](../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system-in-development/visionline-credential-metadata.md) (`visionline_metadata`)

{% hint style="info" %}
Make sure to note any brand-specific restrictions. For details, see the applicable [device or system integration guide](broken-reference).
{% endhint %}

The response includes the ID (`acs_credential_id`) of the newly-created credential, the user (`acs_user_id`) associated with the credential, and other additional properties of the credential.

***

### Create a PIN Code-Based Credential

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
  "acs_user_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
  "access_method": "code",
  "code": "824759"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "755e6817-985f-4e2f-96b2-6f388456f19b",
    "acs_system_id": "755e6817-985f-4e2f-96b2-6f388456f19b",
    "acs_user_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
    "display_name": "Code 82****",
    "code": "824759",
    "acs_system_id": "b3eb61dc-9b69-42a9-8b73-375832dbeec8",
    "access_method": "code",
    "errors": [],
    "warnings": [],
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-06T06:50:05.714Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Create a Key Card-Based Credential

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
  "acs_user_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
  "access_method": "card",
  "code": "123456"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "ec371376-dcb9-4c2b-a84a-bd0c959d41e3",
    "acs_system_id": "755e6817-985f-4e2f-96b2-6f388456f19b",
    "acs_user_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
    "display_name": "Card 123***",
    "code": "123456",
    "acs_system_id": "b3eb61dc-9b69-42a9-8b73-375832dbeec8",
    "access_method": "card",
    "errors": [],
    "warnings": [],
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-10T04:58:36.372Z"
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

### Create a Seam Mobile Key

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
  "acs_user_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
  "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
  "access_method": "mobile_key",
  "is_multi_phone_sync_credential": true,
  "starts_at": "2024-03-01T10:40:00Z",
  "ends_at": "2024-03-04T10:40:00Z"
}'
```

**Response:**

```json
{
  "acs_credential": {
    "acs_credential_id": "d36869b6-1d12-441e-a057-195ad51bc7dd",
    "acs_user_id": "20ab519f-75ae-482e-ae4c-082f29295bf2",
    "display_name": "Multi Phone Sync Credential",
    "code": null,
    "acs_system_id": "b3eb61dc-9b69-42a9-8b73-375832dbeec8",
    "access_method": "mobile_key",
    "errors": [],
    "warnings": [],
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-02-10T04:48:16.867Z",
    "is_multi_phone_sync_credential": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}

***

## Delete a Credential

To [delete a credential](../../api-clients/access-control-systems/credentials/delete-credential.md), provide the credential ID (`acs_credential_id`).

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
