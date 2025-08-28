# Credentials

## The acs_credential Object

- [Properties](./#properties)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Means by which an [access control system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) gains access at an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md). The `acs_credential` object represents a [credential](../../../capability-guides/access-systems/managing-credentials.md) that provides an ACS user access within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

An access control system generally uses digital means of access to authorize a user trying to get through a specific entrance. Examples of credentials include plastic key cards, mobile keys, biometric identifiers, and PIN codes. The electronic nature of these credentials, as well as the fact that access is centralized, enables both the rapid provisioning and rescinding of access and the ability to compile access audit logs.

For each `acs_credential`, you define the access method. You can also specify additional properties, such as a PIN code, depending on the credential type.

{% tabs %}
{% tab title="ACS Card Credential" %}

An access system card credential resource.

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
{% tab title="ACS Mobile Key Credential" %}

An access system mobile key credential resource.

```json
{
  "access_method": "mobile_key",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
  "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "Front Door",
  "errors": [],
  "is_managed": true,
  "is_multi_phone_sync_credential": true,
  "is_one_time_use": false,
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}
{% tab title="ACS PIN Code Credential" %}

An access system PIN code credential resource.

```json
{
  "access_method": "code",
  "acs_credential_id": "73a0a199-024f-454d-a916-9bbda8502c12",
  "acs_system_id": "b1d03165-2759-474b-a342-e02223f27b39",
  "acs_user_id": "0fc82df4-391b-4d00-a234-86378f1c3952",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "code": "123456",
  "created_at": "2025-06-16T16:54:17.946514Z",
  "display_name": "FRONT_DOOR",
  "errors": [],
  "external_type": "salto_ks_credential",
  "external_type_display_name": "Salto KS Credential",
  "is_latest_desired_state_synced_with_provider": true,
  "is_managed": true,
  "is_multi_phone_sync_credential": false,
  "is_one_time_use": false,
  "latest_desired_state_synced_with_provider_at": "2025-06-18T16:54:17.946514Z",
  "starts_at": "2025-07-10T16:54:17.946512Z",
  "warnings": [],
  "workspace_id": "005f1e54-5360-40db-8c31-4ef6baaad1fd"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`access_method`** *Enum*

Access method for the [credential](../../../capability-guides/access-systems/managing-credentials.md). Supported values: `code`, `card`, `mobile_key`.


<details>
<summary>Enum values</summary>

- <code>code</code>
- <code>card</code>
- <code>mobile_key</code>
</details>


---

**`acs_credential_id`** *UUID*

ID of the [credential](../../../capability-guides/access-systems/managing-credentials.md).




---

**`acs_credential_pool_id`** *UUID*





---

**`acs_system_id`** *UUID*

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).




---

**`acs_user_id`** *UUID*

ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to whom the [credential](../../../capability-guides/access-systems/managing-credentials.md) belongs.




---

**`assa_abloy_vostio_metadata`** *Object*

Vostio-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).



<details>
  <summary>Child Properties</summary>

  - <strong><code>auto_join</code></strong> <i>Boolean</i>
  
    Indicates whether the credential should auto-join. For an auto-join credential, Seam automatically issues an override card if there are no other cards and a joiner card if there are existing cards on the doors.

  - <strong><code>door_names</code></strong> <i>List</i> <i>of Strings</i>
  
    Names of the doors to which to grant access in the Vostio access system.

  - <strong><code>endpoint_id</code></strong> <i>String</i>
  
    Endpoint ID in the Vostio access system.

  - <strong><code>key_id</code></strong> <i>String</i>
  
    Key ID in the Vostio access system.

  - <strong><code>key_issuing_request_id</code></strong> <i>String</i>
  
    Key issuing request ID in the Vostio access system.

  - <strong><code>override_guest_acs_entrance_ids</code></strong> <i>List</i> <i>of Strings</i>
  
    IDs of the guest entrances to override in the Vostio access system.

</details>

---

**`card_number`** *String*

Number of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).




---

**`code`** *String*

Access (PIN) code for the [credential](../../../capability-guides/access-systems/managing-credentials.md).




---

**`connected_account_id`** *UUID*

ID of the [connected account](../../../capability-guides/access-systems/managing-credentials.md#connected-accounts) to which the [credential](../../../capability-guides/access-systems/managing-credentials.md) belongs.




---

**`created_at`** *Datetime*

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was created.




---

**`display_name`** *String*

Display name that corresponds to the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.




---

**`ends_at`** *String*

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.




---

**`errors`** *List* *of Objects*

Errors associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).



<details>
  <summary>Child Object Properties</summary>
<strong><code>error_code</code></strong> <i>String</i>

<strong><code>message</code></strong> <i>String</i>

</details>

---

**`external_type`** *Enum*

Brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type. Supported values: `pti_card`, `brivo_credential`, `hid_credential`, `visionline_card`.


<details>
<summary>Enum values</summary>

- <code>pti_card</code>
- <code>brivo_credential</code>
- <code>hid_credential</code>
- <code>visionline_card</code>
- <code>salto_ks_credential</code>
- <code>assa_abloy_vostio_key</code>
- <code>salto_space_key</code>
- <code>latch_access</code>
- <code>dormakaba_ambiance_credential</code>
- <code>hotek_card</code>
</details>


---

**`external_type_display_name`** *String*

Display name that corresponds to the brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.




---

**`is_issued`** *Boolean*

Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been encoded onto a card.




---

**`is_latest_desired_state_synced_with_provider`** *Boolean*

Indicates whether the latest state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been synced from Seam to the provider.




---

**`is_managed`** *Boolean*





---

**`is_multi_phone_sync_credential`** *Boolean*

Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) is a [multi-phone sync credential](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials).




---

**`is_one_time_use`** *Boolean*

Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) can only be used once. If `true`, the code becomes invalid after the first use.




---

**`issued_at`** *Datetime*

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was encoded onto a card.




---

**`latest_desired_state_synced_with_provider_at`** *Datetime*

Date and time at which the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was most recently synced from Seam to the provider.




---

**`parent_acs_credential_id`** *UUID*

ID of the parent [credential](../../../capability-guides/access-systems/managing-credentials.md).




---

**`starts_at`** *String*

Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.




---

**`user_identity_id`** *UUID*

ID of the [user identity](https://docs.seam.co/latest/api/user_identities) to whom the [credential](../../../capability-guides/access-systems/managing-credentials.md) belongs.




---

**`visionline_metadata`** *Object*

Visionline-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).



<details>
  <summary>Child Properties</summary>

  - <strong><code>auto_join</code></strong> <i>Boolean</i>
  
    Indicates whether the credential should auto-join. For an auto-join credential, Seam automatically issues an override card if there are no other cards and a joiner card if there are existing cards on the doors.

  - <strong><code>card_function_type</code></strong> <i>Enum</i>
  
    Card function type in the Visionline access system.
  <details>
      <summary>Enum values:</summary>
  
      - <code>guest</code>
      - <code>staff</code>
  </details>

  - <strong><code>card_id</code></strong> <i>String</i>
  
    ID of the card in the Visionline access system.

  - <strong><code>common_acs_entrance_ids</code></strong> <i>List</i> <i>of UUIDs</i>
  
    Common entrance IDs in the Visionline access system.

  - <strong><code>credential_id</code></strong> <i>String</i>
  
    ID of the credential in the Visionline access system.

  - <strong><code>guest_acs_entrance_ids</code></strong> <i>List</i> <i>of UUIDs</i>
  
    Guest entrance IDs in the Visionline access system.

  - <strong><code>is_valid</code></strong> <i>Boolean</i>
  
    Indicates whether the credential is valid.

  - <strong><code>joiner_acs_credential_ids</code></strong> <i>List</i> <i>of UUIDs</i>
  
    IDs of the credentials to which you want to join.

</details>

---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>waiting_to_be_issued</code></summary>

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is waiting to be issued.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>waiting_to_be_issued</code>
  
  
</details>
<details>
<summary><code>schedule_externally_modified</code></summary>

Indicates that the schedule of one of the [credential](../../../capability-guides/access-systems/managing-credentials.md)'s children was modified externally.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>schedule_externally_modified</code>
  
  
</details>
<details>
<summary><code>schedule_modified</code></summary>

Indicates that the schedule of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was modified to avoid creating a credential with a start date in the past.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>schedule_modified</code>
  
  
</details>
<details>
<summary><code>being_deleted</code></summary>

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is being deleted.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>being_deleted</code>
  
  
</details>
<details>
<summary><code>unknown_issue_with_acs_credential</code></summary>

An unknown issue occurred while syncing the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) with the provider. This issue may affect the proper functioning of the credential.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>unknown_issue_with_acs_credential</code>
  
  
</details>
<details>
<summary><code>needs_to_be_reissued</code></summary>

Access permissions for the [credential](../../../capability-guides/access-systems/managing-credentials.md) have changed. [Reissue](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md) (re-encode) the credential. This issue may affect the proper functioning of the credential.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>needs_to_be_reissued</code>
  
  
</details>

---

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).




---


## Warnings

**`being_deleted`**

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is being deleted.

---

**`needs_to_be_reissued`**

Access permissions for the [credential](../../../capability-guides/access-systems/managing-credentials.md) have changed. [Reissue](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md) (re-encode) the credential. This issue may affect the proper functioning of the credential.

---

**`schedule_externally_modified`**

Indicates that the schedule of one of the [credential](../../../capability-guides/access-systems/managing-credentials.md)'s children was modified externally.

---

**`schedule_modified`**

Indicates that the schedule of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was modified to avoid creating a credential with a start date in the past.

---

**`unknown_issue_with_acs_credential`**

An unknown issue occurred while syncing the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) with the provider. This issue may affect the proper functioning of the credential.

---

**`waiting_to_be_issued`**

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is waiting to be issued.

---


## Events

**`acs_credential.deleted`**

An [access system credential](../../../capability-guides/access-systems/managing-credentials.md) was deleted.

<details>

<summary>Properties</summary>

<strong><code>acs_credential_id</code></strong> <i>UUID</i>

  ID of the affected credential.

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`acs_credential.issued`**

An [access system credential](../../../capability-guides/access-systems/managing-credentials.md) was issued.

<details>

<summary>Properties</summary>

<strong><code>acs_credential_id</code></strong> <i>UUID</i>

  ID of the affected credential.

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.issued`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`acs_credential.reissued`**

An [access system credential](../../../capability-guides/access-systems/managing-credentials.md) was reissued.

<details>

<summary>Properties</summary>

<strong><code>acs_credential_id</code></strong> <i>UUID</i>

  ID of the affected credential.

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.reissued`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`acs_credential.invalidated`**

An [access system credential](../../../capability-guides/access-systems/managing-credentials.md) was invalidated. That is, the credential cannot be used anymore.

<details>

<summary>Properties</summary>

<strong><code>acs_credential_id</code></strong> <i>UUID</i>

  ID of the affected credential.

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.invalidated`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/acs/credentials/assign`**](./assign.md)

Assigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) to a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/credentials/create`**](./create.md)

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/credentials/delete`**](./delete.md)

Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


[**`/acs/credentials/get`**](./get.md)

Returns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


[**`/acs/credentials/list`**](./list.md)

Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md).


[**`/acs/credentials/list_accessible_entrances`**](./list_accessible_entrances.md)

Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.


[**`/acs/credentials/unassign`**](./unassign.md)

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/credentials/update`**](./update.md)

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


