# Create a Credential for an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Creates a new PIN code credential for a specified access system user, using the associated user identity.

#### Code:

```javascript
await seam.acs.credentials.create({
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "code",
  code: "1234",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
});
```

#### Output:

```javascript
{
  "access_method": "code",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Salto KS Credential",
  "errors": [],
  "external_type": "salto_ks_credential",
  "external_type_display_name": "Salto KS Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% tab title="cURL" %}

Creates a new PIN code credential for a specified access system user, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "credential_manager_acs_system_id": "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  "user_identity_id": "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "access_method": "code",
  "code": "1234",
  "allowed_acs_entrance_ids": [
    "21805570-4706-4c21-99fc-3ed873a5e014"
  ],
  "starts_at": "2025-06-19T21:08:08.000Z",
  "ends_at": "2025-06-23T12:35:01.000Z"
}
EOF
```

#### Output:

```curl
{
  "acs_credential": {
    "access_method": "code",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
    "code": "1234",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Salto KS Credential",
    "errors": [],
    "external_type": "salto_ks_credential",
    "external_type_display_name": "Salto KS Credential",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": true,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-06-19T21:08:08.000Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new PIN code credential for a specified access system user, using the associated user identity.

#### Code:

```python
seam.acs.credentials.create(
    credential_manager_acs_system_id="bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    user_identity_id="4b6ec19d-ba68-46ca-80fd-55247684c2bb",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method="code",
    code="1234",
    allowed_acs_entrance_ids=["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at="2025-06-19T21:08:08.000Z",
    ends_at="2025-06-23T12:35:01.000Z",
)
```

#### Output:

```python
AcsCredential(
    access_method="code",
    acs_credential_id="73a0a199-024f-454d-a916-9bbda8502c12",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    code="1234",
    created_at="2025-06-16T16:54:17.946514Z",
    display_name="Salto KS Credential",
    errors=[],
    external_type="salto_ks_credential",
    external_type_display_name="Salto KS Credential",
    is_latest_desired_state_synced_with_provider=true,
    is_managed=true,
    is_multi_phone_sync_credential=true,
    is_one_time_use=false,
    latest_desired_state_synced_with_provider_at="2025-06-18T16:54:17.946514Z",
    starts_at="2025-06-19T21:08:08.000Z",
    warnings=[],
    workspace_id="005f1e54-5360-40db-8c31-4ef6baaad1fd",
)
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new PIN code credential for a specified access system user, using the associated user identity.

#### Code:

```ruby
seam.acs.credentials.create(
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "code",
  code: "1234",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
)
```

#### Output:

```ruby
{
  "access_method" => "code",
  "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
  "code" => "1234",
  "created_at" => "2025-06-16T16:54:17.946514Z",
  "display_name" => "Salto KS Credential",
  "errors" => [],
  "external_type" => "salto_ks_credential",
  "external_type_display_name" => "Salto KS Credential",
  "is_latest_desired_state_synced_with_provider" => true,
  "is_managed" => true,
  "is_multi_phone_sync_credential" => true,
  "is_one_time_use" => false,
  "latest_desired_state_synced_with_provider_at" => "2025-06-18T16:54:17.946514Z",
  "starts_at" => "2025-06-19T21:08:08.000Z",
  "warnings" => [],
  "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new PIN code credential for a specified access system user, using the associated user identity.

#### Code:

```php
$seam->acs->credentials->create(
    credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
    acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method: "code",
    code: "1234",
    allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at: "2025-06-19T21:08:08.000Z",
    ends_at: "2025-06-23T12:35:01.000Z",
);
```

#### Output:

```php
[
    "access_method" => "code",
    "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
    "code" => "1234",
    "created_at" => "2025-06-16T16:54:17.946514Z",
    "display_name" => "Salto KS Credential",
    "errors" => [],
    "external_type" => "salto_ks_credential",
    "external_type_display_name" => "Salto KS Credential",
    "is_latest_desired_state_synced_with_provider" => true,
    "is_managed" => true,
    "is_multi_phone_sync_credential" => true,
    "is_one_time_use" => false,
    "latest_desired_state_synced_with_provider_at" =>
        "2025-06-18T16:54:17.946514Z",
    "starts_at" => "2025-06-19T21:08:08.000Z",
    "warnings" => [],
    "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new PIN code credential for a specified access system user, using the associated user identity.

#### Code:

```seam_cli
seam acs credentials create --credential_manager_acs_system_id "bccb0d23-5107-498b-87a6-6a8aa929eeb2" --user_identity_id "4b6ec19d-ba68-46ca-80fd-55247684c2bb" --acs_system_id "7113de29-6130-4153-a6ea-1b7ca0fe3198" --access_method "code" --code "1234" --allowed_acs_entrance_ids ["21805570-4706-4c21-99fc-3ed873a5e014"] --starts_at "2025-06-19T21:08:08.000Z" --ends_at "2025-06-23T12:35:01.000Z"
```

#### Output:

```seam_cli
{
  "access_method": "code",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Salto KS Credential",
  "errors": [],
  "external_type": "salto_ks_credential",
  "external_type_display_name": "Salto KS Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method`** *String* (Required)

Access method for the new credential. Supported values: `code`, `card`, `mobile_key`.

---

**`acs_system_id`** *String*

ID of the access system to which the new credential belongs. You must provide either `acs_user_id` or the combination of `user_identity_id` and `acs_system_id`.

---

**`acs_user_id`** *String*

ID of the access system user to whom the new credential belongs. You must provide either `acs_user_id` or the combination of `user_identity_id` and `acs_system_id`.

---

**`allowed_acs_entrance_ids`** *Array* *of UUIDs*

Set of IDs of the [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for which the new credential grants access.

---

**`assa_abloy_vostio_metadata`** *Object*

Vostio-specific metadata for the new credential.

<details>

<summary><b><code>auto_join</code></b> <i>Boolean</i></summary>

</details>

---



<details>

<summary><b><code>join_all_guest_acs_entrances</code></b> <i>Boolean</i></summary>

</details>

---



<details>

<summary><b><code>override_all_guest_acs_entrances</code></b> <i>Boolean</i></summary>

</details>

---



<details>

<summary><b><code>override_guest_acs_entrance_ids</code></b> <i>List</i></summary>

</details>

---


**`code`** *String*

Access (PIN) code for the new credential. There may be manufacturer-specific code restrictions. For details, see the applicable [device or system integration guide](../../../device-and-system-integration-guides/overview.md).

---

**`credential_manager_acs_system_id`** *String*

ACS system ID of the credential manager for the new credential.

---

**`ends_at`** *String*

Date and time at which the validity of the new credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`is_multi_phone_sync_credential`** *Boolean*

Indicates whether the new credential is a [multi-phone sync credential](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials).

---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata for the new credential.

<details>

<summary><b><code>assign_new_key</code></b> <i>Boolean</i></summary>

Indicates whether to assign a first, new card to a user. See also [Programming Salto Space Card-based Credentials](../../../device-and-system-integration-guides/salto-proaccess-space-access-system/programming-salto-space-card-based-credentials.md).

</details>

---



<details>

<summary><b><code>update_current_key</code></b> <i>Boolean</i></summary>

Indicates whether to update the user's existing card. See also [Programming Salto Space Card-based Credentials](../../../device-and-system-integration-guides/salto-proaccess-space-access-system/programming-salto-space-card-based-credentials.md).

</details>

---


**`starts_at`** *String*

Date and time at which the validity of the new credential starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`user_identity_id`** *String*

ID of the user identity to whom the new credential belongs. You must provide either `acs_user_id` or the combination of `user_identity_id` and `acs_system_id`. If the access system contains a user with the same `email_address` or `phone_number` as the user identity that you specify, they are linked, and the credential belongs to the access system user. If the access system does not have a corresponding user, one is created.

---

**`visionline_metadata`** *Object*

Visionline-specific metadata for the new credential.

<details>

<summary><b><code>assa_abloy_credential_service_mobile_endpoint_id</code></b> <i>UUID</i></summary>

{% hint style="warning" %}
**Deprecated**. Read-only endpoint references moved to `endpoint`.
{% endhint %}

</details>

---



<details>

<summary><b><code>auto_join</code></b> <i>Boolean</i></summary>

</details>

---



<details>

<summary><b><code>card_format</code></b> <i>Enum</i></summary>

Enum values:

- <code>TLCode</code>
- <code>rfid48</code>

</details>

---



<details>

<summary><b><code>card_function_type</code></b> <i>Enum</i></summary>

Enum values:

- <code>guest</code>
- <code>staff</code>

</details>

---



<details>

<summary><b><code>is_override_key</code></b> <i>Boolean</i></summary>

{% hint style="warning" %}
**Deprecated**. Use `override` instead.
{% endhint %}

</details>

---



<details>

<summary><b><code>joiner_acs_credential_ids</code></b> <i>List</i></summary>

</details>

---



<details>

<summary><b><code>override</code></b> <i>Boolean</i></summary>

</details>

---



## Response

{% hint style="success" %}
Returns:
**[acs\_credential](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_method": "card",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
  "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
  "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
  "card_number": "164d29dc4a09b65f",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Guest Lock 1, Vingcard Lock 2",
  "ends_at": "2025-07-12T16:54:17.946512Z",
  "errors": [],
  "external_type": "visionline_card",
  "external_type_display_name": "Visionline Card",
  "is_issued": true,
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": false,
  "issued_at": "2025-06-16T16:54:17.946512Z",
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-07-10T16:54:17.946512Z",
  "visionline_metadata": {
    "card_function_type": "guest",
    "card_id": "5",
    "common_acs_entrance_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
    "credential_id": "15",
    "guest_acs_entrance_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
    "is_valid": true
  },
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}
{% endtabs %}

---

## Examples


### Create a PIN code credential for an access system user

Creates a new PIN code credential for a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.credentials.create({
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "code",
  code: "1234",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
});
```

#### Output:

```javascript
{
  "access_method": "code",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Salto KS Credential",
  "errors": [],
  "external_type": "salto_ks_credential",
  "external_type_display_name": "Salto KS Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "credential_manager_acs_system_id": "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "access_method": "code",
  "code": "1234",
  "allowed_acs_entrance_ids": [
    "21805570-4706-4c21-99fc-3ed873a5e014"
  ],
  "starts_at": "2025-06-19T21:08:08.000Z",
  "ends_at": "2025-06-23T12:35:01.000Z"
}
EOF
```

#### Output:

```curl
{
  "acs_credential": {
    "access_method": "code",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
    "code": "1234",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Salto KS Credential",
    "errors": [],
    "external_type": "salto_ks_credential",
    "external_type_display_name": "Salto KS Credential",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": true,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-06-19T21:08:08.000Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.credentials.create(
    credential_manager_acs_system_id="bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method="code",
    code="1234",
    allowed_acs_entrance_ids=["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at="2025-06-19T21:08:08.000Z",
    ends_at="2025-06-23T12:35:01.000Z",
)
```

#### Output:

```python
AcsCredential(
    access_method="code",
    acs_credential_id="73a0a199-024f-454d-a916-9bbda8502c12",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    code="1234",
    created_at="2025-06-16T16:54:17.946514Z",
    display_name="Salto KS Credential",
    errors=[],
    external_type="salto_ks_credential",
    external_type_display_name="Salto KS Credential",
    is_latest_desired_state_synced_with_provider=true,
    is_managed=true,
    is_multi_phone_sync_credential=true,
    is_one_time_use=false,
    latest_desired_state_synced_with_provider_at="2025-06-18T16:54:17.946514Z",
    starts_at="2025-06-19T21:08:08.000Z",
    warnings=[],
    workspace_id="005f1e54-5360-40db-8c31-4ef6baaad1fd",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.credentials.create(
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "code",
  code: "1234",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
)
```

#### Output:

```ruby
{
  "access_method" => "code",
  "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
  "code" => "1234",
  "created_at" => "2025-06-16T16:54:17.946514Z",
  "display_name" => "Salto KS Credential",
  "errors" => [],
  "external_type" => "salto_ks_credential",
  "external_type_display_name" => "Salto KS Credential",
  "is_latest_desired_state_synced_with_provider" => true,
  "is_managed" => true,
  "is_multi_phone_sync_credential" => true,
  "is_one_time_use" => false,
  "latest_desired_state_synced_with_provider_at" => "2025-06-18T16:54:17.946514Z",
  "starts_at" => "2025-06-19T21:08:08.000Z",
  "warnings" => [],
  "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->credentials->create(
    credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
    acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method: "code",
    code: "1234",
    allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at: "2025-06-19T21:08:08.000Z",
    ends_at: "2025-06-23T12:35:01.000Z",
);
```

#### Output:

```php
[
    "access_method" => "code",
    "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
    "code" => "1234",
    "created_at" => "2025-06-16T16:54:17.946514Z",
    "display_name" => "Salto KS Credential",
    "errors" => [],
    "external_type" => "salto_ks_credential",
    "external_type_display_name" => "Salto KS Credential",
    "is_latest_desired_state_synced_with_provider" => true,
    "is_managed" => true,
    "is_multi_phone_sync_credential" => true,
    "is_one_time_use" => false,
    "latest_desired_state_synced_with_provider_at" =>
        "2025-06-18T16:54:17.946514Z",
    "starts_at" => "2025-06-19T21:08:08.000Z",
    "warnings" => [],
    "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs credentials create --credential_manager_acs_system_id "bccb0d23-5107-498b-87a6-6a8aa929eeb2" --acs_user_id "53f39f90-5113-4bdd-8432-acf328ce508c" --acs_system_id "7113de29-6130-4153-a6ea-1b7ca0fe3198" --access_method "code" --code "1234" --allowed_acs_entrance_ids ["21805570-4706-4c21-99fc-3ed873a5e014"] --starts_at "2025-06-19T21:08:08.000Z" --ends_at "2025-06-23T12:35:01.000Z"
```

#### Output:

```seam_cli
{
  "access_method": "code",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Salto KS Credential",
  "errors": [],
  "external_type": "salto_ks_credential",
  "external_type_display_name": "Salto KS Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% endtabs %}

---


### Create a card credential for a user identity

Creates a new card credential for a specified access system user, using the associated user identity.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.credentials.create({
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "card",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  visionline_metadata: { card_format: "rfid48", override: true },
});
```

#### Output:

```javascript
{
  "access_method": "card",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Visionline Credential",
  "errors": [],
  "external_type": "visionline_card",
  "external_type_display_name": "Visionline Card",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "credential_manager_acs_system_id": "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  "user_identity_id": "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "access_method": "card",
  "allowed_acs_entrance_ids": [
    "21805570-4706-4c21-99fc-3ed873a5e014"
  ],
  "starts_at": "2025-06-19T21:08:08.000Z",
  "ends_at": "2025-06-23T12:35:01.000Z",
  "visionline_metadata": {
    "card_format": "rfid48",
    "override": true
  }
}
EOF
```

#### Output:

```curl
{
  "acs_credential": {
    "access_method": "card",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Visionline Credential",
    "errors": [],
    "external_type": "visionline_card",
    "external_type_display_name": "Visionline Card",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": true,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-06-19T21:08:08.000Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.credentials.create(
    credential_manager_acs_system_id="bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    user_identity_id="4b6ec19d-ba68-46ca-80fd-55247684c2bb",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method="card",
    allowed_acs_entrance_ids=["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at="2025-06-19T21:08:08.000Z",
    ends_at="2025-06-23T12:35:01.000Z",
    visionline_metadata={"card_format": "rfid48", "override": true},
)
```

#### Output:

```python
AcsCredential(
    access_method="card",
    acs_credential_id="73a0a199-024f-454d-a916-9bbda8502c12",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    created_at="2025-06-16T16:54:17.946514Z",
    display_name="Visionline Credential",
    errors=[],
    external_type="visionline_card",
    external_type_display_name="Visionline Card",
    is_latest_desired_state_synced_with_provider=true,
    is_managed=true,
    is_multi_phone_sync_credential=true,
    is_one_time_use=false,
    latest_desired_state_synced_with_provider_at="2025-06-18T16:54:17.946514Z",
    starts_at="2025-06-19T21:08:08.000Z",
    warnings=[],
    workspace_id="005f1e54-5360-40db-8c31-4ef6baaad1fd",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.credentials.create(
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "card",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  visionline_metadata: {
    card_format: "rfid48",
    override: true,
  },
)
```

#### Output:

```ruby
{
  "access_method" => "card",
  "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at" => "2025-06-16T16:54:17.946514Z",
  "display_name" => "Visionline Credential",
  "errors" => [],
  "external_type" => "visionline_card",
  "external_type_display_name" => "Visionline Card",
  "is_latest_desired_state_synced_with_provider" => true,
  "is_managed" => true,
  "is_multi_phone_sync_credential" => true,
  "is_one_time_use" => false,
  "latest_desired_state_synced_with_provider_at" => "2025-06-18T16:54:17.946514Z",
  "starts_at" => "2025-06-19T21:08:08.000Z",
  "warnings" => [],
  "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->credentials->create(
    credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
    acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method: "card",
    allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at: "2025-06-19T21:08:08.000Z",
    ends_at: "2025-06-23T12:35:01.000Z",
    visionline_metadata: ["card_format" => "rfid48", "override" => true],
);
```

#### Output:

```php
[
    "access_method" => "card",
    "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at" => "2025-06-16T16:54:17.946514Z",
    "display_name" => "Visionline Credential",
    "errors" => [],
    "external_type" => "visionline_card",
    "external_type_display_name" => "Visionline Card",
    "is_latest_desired_state_synced_with_provider" => true,
    "is_managed" => true,
    "is_multi_phone_sync_credential" => true,
    "is_one_time_use" => false,
    "latest_desired_state_synced_with_provider_at" =>
        "2025-06-18T16:54:17.946514Z",
    "starts_at" => "2025-06-19T21:08:08.000Z",
    "warnings" => [],
    "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs credentials create --credential_manager_acs_system_id "bccb0d23-5107-498b-87a6-6a8aa929eeb2" --user_identity_id "4b6ec19d-ba68-46ca-80fd-55247684c2bb" --acs_system_id "7113de29-6130-4153-a6ea-1b7ca0fe3198" --access_method "card" --allowed_acs_entrance_ids ["21805570-4706-4c21-99fc-3ed873a5e014"] --starts_at "2025-06-19T21:08:08.000Z" --ends_at "2025-06-23T12:35:01.000Z" --visionline_metadata {"card_format":"rfid48","override":true}
```

#### Output:

```seam_cli
{
  "access_method": "card",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Visionline Credential",
  "errors": [],
  "external_type": "visionline_card",
  "external_type_display_name": "Visionline Card",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% endtabs %}

---


### Create a card credential for an access system user

Creates a new card credential for a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.credentials.create({
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "card",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  visionline_metadata: { card_format: "rfid48", override: true },
});
```

#### Output:

```javascript
{
  "access_method": "card",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Visionline Credential",
  "errors": [],
  "external_type": "visionline_card",
  "external_type_display_name": "Visionline Card",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "credential_manager_acs_system_id": "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "access_method": "card",
  "allowed_acs_entrance_ids": [
    "21805570-4706-4c21-99fc-3ed873a5e014"
  ],
  "starts_at": "2025-06-19T21:08:08.000Z",
  "ends_at": "2025-06-23T12:35:01.000Z",
  "visionline_metadata": {
    "card_format": "rfid48",
    "override": true
  }
}
EOF
```

#### Output:

```curl
{
  "acs_credential": {
    "access_method": "card",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Visionline Credential",
    "errors": [],
    "external_type": "visionline_card",
    "external_type_display_name": "Visionline Card",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": true,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-06-19T21:08:08.000Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.credentials.create(
    credential_manager_acs_system_id="bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method="card",
    allowed_acs_entrance_ids=["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at="2025-06-19T21:08:08.000Z",
    ends_at="2025-06-23T12:35:01.000Z",
    visionline_metadata={"card_format": "rfid48", "override": true},
)
```

#### Output:

```python
AcsCredential(
    access_method="card",
    acs_credential_id="73a0a199-024f-454d-a916-9bbda8502c12",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    created_at="2025-06-16T16:54:17.946514Z",
    display_name="Visionline Credential",
    errors=[],
    external_type="visionline_card",
    external_type_display_name="Visionline Card",
    is_latest_desired_state_synced_with_provider=true,
    is_managed=true,
    is_multi_phone_sync_credential=true,
    is_one_time_use=false,
    latest_desired_state_synced_with_provider_at="2025-06-18T16:54:17.946514Z",
    starts_at="2025-06-19T21:08:08.000Z",
    warnings=[],
    workspace_id="005f1e54-5360-40db-8c31-4ef6baaad1fd",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.credentials.create(
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "card",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  visionline_metadata: {
    card_format: "rfid48",
    override: true,
  },
)
```

#### Output:

```ruby
{
  "access_method" => "card",
  "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at" => "2025-06-16T16:54:17.946514Z",
  "display_name" => "Visionline Credential",
  "errors" => [],
  "external_type" => "visionline_card",
  "external_type_display_name" => "Visionline Card",
  "is_latest_desired_state_synced_with_provider" => true,
  "is_managed" => true,
  "is_multi_phone_sync_credential" => true,
  "is_one_time_use" => false,
  "latest_desired_state_synced_with_provider_at" => "2025-06-18T16:54:17.946514Z",
  "starts_at" => "2025-06-19T21:08:08.000Z",
  "warnings" => [],
  "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->credentials->create(
    credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
    acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method: "card",
    allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at: "2025-06-19T21:08:08.000Z",
    ends_at: "2025-06-23T12:35:01.000Z",
    visionline_metadata: ["card_format" => "rfid48", "override" => true],
);
```

#### Output:

```php
[
    "access_method" => "card",
    "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at" => "2025-06-16T16:54:17.946514Z",
    "display_name" => "Visionline Credential",
    "errors" => [],
    "external_type" => "visionline_card",
    "external_type_display_name" => "Visionline Card",
    "is_latest_desired_state_synced_with_provider" => true,
    "is_managed" => true,
    "is_multi_phone_sync_credential" => true,
    "is_one_time_use" => false,
    "latest_desired_state_synced_with_provider_at" =>
        "2025-06-18T16:54:17.946514Z",
    "starts_at" => "2025-06-19T21:08:08.000Z",
    "warnings" => [],
    "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs credentials create --credential_manager_acs_system_id "bccb0d23-5107-498b-87a6-6a8aa929eeb2" --acs_user_id "53f39f90-5113-4bdd-8432-acf328ce508c" --acs_system_id "7113de29-6130-4153-a6ea-1b7ca0fe3198" --access_method "card" --allowed_acs_entrance_ids ["21805570-4706-4c21-99fc-3ed873a5e014"] --starts_at "2025-06-19T21:08:08.000Z" --ends_at "2025-06-23T12:35:01.000Z" --visionline_metadata {"card_format":"rfid48","override":true}
```

#### Output:

```seam_cli
{
  "access_method": "card",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Visionline Credential",
  "errors": [],
  "external_type": "visionline_card",
  "external_type_display_name": "Visionline Card",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% endtabs %}

---


### Create a mobile key credential for a user identity

Creates a new mobile key credential for a specified access system user, using the associated user identity.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.credentials.create({
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "mobile_key",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  is_multi_phone_sync_credential: true,
});
```

#### Output:

```javascript
{
  "access_method": "mobile_key",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Multi Phone Sync Credential",
  "errors": [],
  "external_type": "multi_phone_sync_credential",
  "external_type_display_name": "Multi Phone Sync Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "credential_manager_acs_system_id": "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  "user_identity_id": "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "access_method": "mobile_key",
  "allowed_acs_entrance_ids": [
    "21805570-4706-4c21-99fc-3ed873a5e014"
  ],
  "starts_at": "2025-06-19T21:08:08.000Z",
  "ends_at": "2025-06-23T12:35:01.000Z",
  "is_multi_phone_sync_credential": true
}
EOF
```

#### Output:

```curl
{
  "acs_credential": {
    "access_method": "mobile_key",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Multi Phone Sync Credential",
    "errors": [],
    "external_type": "multi_phone_sync_credential",
    "external_type_display_name": "Multi Phone Sync Credential",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": true,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-06-19T21:08:08.000Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.credentials.create(
    credential_manager_acs_system_id="bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    user_identity_id="4b6ec19d-ba68-46ca-80fd-55247684c2bb",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method="mobile_key",
    allowed_acs_entrance_ids=["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at="2025-06-19T21:08:08.000Z",
    ends_at="2025-06-23T12:35:01.000Z",
    is_multi_phone_sync_credential=true,
)
```

#### Output:

```python
AcsCredential(
    access_method="mobile_key",
    acs_credential_id="73a0a199-024f-454d-a916-9bbda8502c12",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    created_at="2025-06-16T16:54:17.946514Z",
    display_name="Multi Phone Sync Credential",
    errors=[],
    external_type="multi_phone_sync_credential",
    external_type_display_name="Multi Phone Sync Credential",
    is_latest_desired_state_synced_with_provider=true,
    is_managed=true,
    is_multi_phone_sync_credential=true,
    is_one_time_use=false,
    latest_desired_state_synced_with_provider_at="2025-06-18T16:54:17.946514Z",
    starts_at="2025-06-19T21:08:08.000Z",
    warnings=[],
    workspace_id="005f1e54-5360-40db-8c31-4ef6baaad1fd",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.credentials.create(
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "mobile_key",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  is_multi_phone_sync_credential: true,
)
```

#### Output:

```ruby
{
  "access_method" => "mobile_key",
  "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at" => "2025-06-16T16:54:17.946514Z",
  "display_name" => "Multi Phone Sync Credential",
  "errors" => [],
  "external_type" => "multi_phone_sync_credential",
  "external_type_display_name" => "Multi Phone Sync Credential",
  "is_latest_desired_state_synced_with_provider" => true,
  "is_managed" => true,
  "is_multi_phone_sync_credential" => true,
  "is_one_time_use" => false,
  "latest_desired_state_synced_with_provider_at" => "2025-06-18T16:54:17.946514Z",
  "starts_at" => "2025-06-19T21:08:08.000Z",
  "warnings" => [],
  "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->credentials->create(
    credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    user_identity_id: "4b6ec19d-ba68-46ca-80fd-55247684c2bb",
    acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method: "mobile_key",
    allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at: "2025-06-19T21:08:08.000Z",
    ends_at: "2025-06-23T12:35:01.000Z",
    is_multi_phone_sync_credential: true,
);
```

#### Output:

```php
[
    "access_method" => "mobile_key",
    "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at" => "2025-06-16T16:54:17.946514Z",
    "display_name" => "Multi Phone Sync Credential",
    "errors" => [],
    "external_type" => "multi_phone_sync_credential",
    "external_type_display_name" => "Multi Phone Sync Credential",
    "is_latest_desired_state_synced_with_provider" => true,
    "is_managed" => true,
    "is_multi_phone_sync_credential" => true,
    "is_one_time_use" => false,
    "latest_desired_state_synced_with_provider_at" =>
        "2025-06-18T16:54:17.946514Z",
    "starts_at" => "2025-06-19T21:08:08.000Z",
    "warnings" => [],
    "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs credentials create --credential_manager_acs_system_id "bccb0d23-5107-498b-87a6-6a8aa929eeb2" --user_identity_id "4b6ec19d-ba68-46ca-80fd-55247684c2bb" --acs_system_id "7113de29-6130-4153-a6ea-1b7ca0fe3198" --access_method "mobile_key" --allowed_acs_entrance_ids ["21805570-4706-4c21-99fc-3ed873a5e014"] --starts_at "2025-06-19T21:08:08.000Z" --ends_at "2025-06-23T12:35:01.000Z" --is_multi_phone_sync_credential true
```

#### Output:

```seam_cli
{
  "access_method": "mobile_key",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Multi Phone Sync Credential",
  "errors": [],
  "external_type": "multi_phone_sync_credential",
  "external_type_display_name": "Multi Phone Sync Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% endtabs %}

---


### Create a mobile key credential for an access system user

Creates a new mobile key credential for a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.credentials.create({
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "mobile_key",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  is_multi_phone_sync_credential: true,
});
```

#### Output:

```javascript
{
  "access_method": "mobile_key",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Multi Phone Sync Credential",
  "errors": [],
  "external_type": "multi_phone_sync_credential",
  "external_type_display_name": "Multi Phone Sync Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "credential_manager_acs_system_id": "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "access_method": "mobile_key",
  "allowed_acs_entrance_ids": [
    "21805570-4706-4c21-99fc-3ed873a5e014"
  ],
  "starts_at": "2025-06-19T21:08:08.000Z",
  "ends_at": "2025-06-23T12:35:01.000Z",
  "is_multi_phone_sync_credential": true
}
EOF
```

#### Output:

```curl
{
  "acs_credential": {
    "access_method": "mobile_key",
    "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at": "2025-06-16T16:54:17.946514Z",
    "display_name": "Multi Phone Sync Credential",
    "errors": [],
    "external_type": "multi_phone_sync_credential",
    "external_type_display_name": "Multi Phone Sync Credential",
    "is_latest_desired_state_synced_with_provider": true,
    "is_managed": true,
    "is_multi_phone_sync_credential": true,
    "is_one_time_use": false,
    "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
    "starts_at": "2025-06-19T21:08:08.000Z",
    "warnings": [],
    "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.credentials.create(
    credential_manager_acs_system_id="bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method="mobile_key",
    allowed_acs_entrance_ids=["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at="2025-06-19T21:08:08.000Z",
    ends_at="2025-06-23T12:35:01.000Z",
    is_multi_phone_sync_credential=true,
)
```

#### Output:

```python
AcsCredential(
    access_method="mobile_key",
    acs_credential_id="73a0a199-024f-454d-a916-9bbda8502c12",
    acs_system_id="7113de29-6130-4153-a6ea-1b7ca0fe3198",
    acs_user_id="53f39f90-5113-4bdd-8432-acf328ce508c",
    created_at="2025-06-16T16:54:17.946514Z",
    display_name="Multi Phone Sync Credential",
    errors=[],
    external_type="multi_phone_sync_credential",
    external_type_display_name="Multi Phone Sync Credential",
    is_latest_desired_state_synced_with_provider=true,
    is_managed=true,
    is_multi_phone_sync_credential=true,
    is_one_time_use=false,
    latest_desired_state_synced_with_provider_at="2025-06-18T16:54:17.946514Z",
    starts_at="2025-06-19T21:08:08.000Z",
    warnings=[],
    workspace_id="005f1e54-5360-40db-8c31-4ef6baaad1fd",
)
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.credentials.create(
  credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
  acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
  acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  access_method: "mobile_key",
  allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
  starts_at: "2025-06-19T21:08:08.000Z",
  ends_at: "2025-06-23T12:35:01.000Z",
  is_multi_phone_sync_credential: true,
)
```

#### Output:

```ruby
{
  "access_method" => "mobile_key",
  "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at" => "2025-06-16T16:54:17.946514Z",
  "display_name" => "Multi Phone Sync Credential",
  "errors" => [],
  "external_type" => "multi_phone_sync_credential",
  "external_type_display_name" => "Multi Phone Sync Credential",
  "is_latest_desired_state_synced_with_provider" => true,
  "is_managed" => true,
  "is_multi_phone_sync_credential" => true,
  "is_one_time_use" => false,
  "latest_desired_state_synced_with_provider_at" => "2025-06-18T16:54:17.946514Z",
  "starts_at" => "2025-06-19T21:08:08.000Z",
  "warnings" => [],
  "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->credentials->create(
    credential_manager_acs_system_id: "bccb0d23-5107-498b-87a6-6a8aa929eeb2",
    acs_user_id: "53f39f90-5113-4bdd-8432-acf328ce508c",
    acs_system_id: "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    access_method: "mobile_key",
    allowed_acs_entrance_ids: ["21805570-4706-4c21-99fc-3ed873a5e014"],
    starts_at: "2025-06-19T21:08:08.000Z",
    ends_at: "2025-06-23T12:35:01.000Z",
    is_multi_phone_sync_credential: true,
);
```

#### Output:

```php
[
    "access_method" => "mobile_key",
    "acs_credential_id" => "73a0a199-024f-454d-a916-9bbda8502c12",
    "acs_system_id" => "7113de29-6130-4153-a6ea-1b7ca0fe3198",
    "acs_user_id" => "53f39f90-5113-4bdd-8432-acf328ce508c",
    "created_at" => "2025-06-16T16:54:17.946514Z",
    "display_name" => "Multi Phone Sync Credential",
    "errors" => [],
    "external_type" => "multi_phone_sync_credential",
    "external_type_display_name" => "Multi Phone Sync Credential",
    "is_latest_desired_state_synced_with_provider" => true,
    "is_managed" => true,
    "is_multi_phone_sync_credential" => true,
    "is_one_time_use" => false,
    "latest_desired_state_synced_with_provider_at" =>
        "2025-06-18T16:54:17.946514Z",
    "starts_at" => "2025-06-19T21:08:08.000Z",
    "warnings" => [],
    "workspace_id" => "005f1e54-5360-40db-8c31-4ef6baaad1fd",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs credentials create --credential_manager_acs_system_id "bccb0d23-5107-498b-87a6-6a8aa929eeb2" --acs_user_id "53f39f90-5113-4bdd-8432-acf328ce508c" --acs_system_id "7113de29-6130-4153-a6ea-1b7ca0fe3198" --access_method "mobile_key" --allowed_acs_entrance_ids ["21805570-4706-4c21-99fc-3ed873a5e014"] --starts_at "2025-06-19T21:08:08.000Z" --ends_at "2025-06-23T12:35:01.000Z" --is_multi_phone_sync_credential true
```

#### Output:

```seam_cli
{
  "access_method": "mobile_key",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "7113de29-6130-4153-a6ea-1b7ca0fe3198",
  "acs_user_id": "53f39f90-5113-4bdd-8432-acf328ce508c",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Multi Phone Sync Credential",
  "errors": [],
  "external_type": "multi_phone_sync_credential",
  "external_type_display_name": "Multi Phone Sync Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-06-19T21:08:08.000Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}

{% endtabs %}
