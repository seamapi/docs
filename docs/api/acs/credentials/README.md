# Credentials

## The acs_credential Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Means by which an [access control system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) gains access at an [entrance](../../../capability-guides/access-systems/retrieving-entrance-details.md). The `acs_credential` object represents a [credential](../../../capability-guides/access-systems/managing-credentials.md) that provides an ACS user access within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

An access control system generally uses digital means of access to authorize a user trying to get through a specific entrance. Examples of credentials include plastic key cards, mobile keys, biometric identifiers, and PIN codes. The electronic nature of these credentials, as well as the fact that access is centralized, enables both the rapid provisioning and rescinding of access and the ability to compile access audit logs.

For each `acs_credential`, you define the access method. You can also specify additional properties, such as a PIN code, depending on the credential type.

{% tabs %}
{% tab title="JSON" %}
```json
{
  access_method: [example value],
  acs_credential_id: [example value],
  acs_credential_pool_id: [example value],
  acs_system_id: [example value],
  acs_user_id: [example value],
  assa_abloy_vostio_metadata: [example value],
  card_number: [example value],
  code: [example value],
  created_at: [example value],
  display_name: [example value],
  ends_at: [example value],
  errors: [example value],
  external_type: [example value],
  external_type_display_name: [example value],
  is_issued: [example value],
  is_latest_desired_state_synced_with_provider: [example value],
  is_managed: [example value],
  is_multi_phone_sync_credential: [example value],
  is_one_time_use: [example value],
  issued_at: [example value],
  latest_desired_state_synced_with_provider_at: [example value],
  parent_acs_credential_id: [example value],
  starts_at: [example value],
  visionline_metadata: [example value],
  warnings: [example value],
  workspace_id: [example value]
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

  - <strong><code>door_names</code></strong> <i>List</i> <i>of Strings</i>

  - <strong><code>endpoint_id</code></strong> <i>String</i>

  - <strong><code>key_id</code></strong> <i>String</i>

  - <strong><code>key_issuing_request_id</code></strong> <i>String</i>

  - <strong><code>override_guest_acs_entrance_ids</code></strong> <i>List</i> <i>of Strings</i>

</details>

---

**`card_number`** *String*

Number of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).




---

**`code`** *String*

Access (PIN) code for the [credential](../../../capability-guides/access-systems/managing-credentials.md).




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

Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).




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

**`visionline_metadata`** *Object*

Visionline-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).



<details>
  <summary>Child Properties</summary>
  - <strong><code>auto_join</code></strong> <i>Boolean</i>

  - <strong><code>card_function_type</code></strong> <i>Enum</i>
<details>
    <summary>Enum values:</summary>
    - <code>guest`</code>
    - <code>staff`</code>
</details>

  - <strong><code>card_id</code></strong> <i>String</i>

  - <strong><code>common_acs_entrance_ids</code></strong> <i>List</i> <i>of UUIDs</i>

  - <strong><code>credential_id</code></strong> <i>String</i>

  - <strong><code>guest_acs_entrance_ids</code></strong> <i>List</i> <i>of UUIDs</i>

  - <strong><code>is_valid</code></strong> <i>Boolean</i>

  - <strong><code>joiner_acs_credential_ids</code></strong> <i>List</i> <i>of UUIDs</i>

</details>

---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>waiting_to_be_issued</code></summary>

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is waiting to be issued.

  **`created_at`** Format: `Datetime`
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** Format: `String`
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** Format: `Enum`
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  <details>
      <summary>Enum values:</summary>
      - <code>waiting_to_be_issued</code>
  </details>
  
  
</details>
<details>
<summary><code>schedule_externally_modified</code></summary>

Indicates that the schedule of one of the [credential](../../../capability-guides/access-systems/managing-credentials.md)'s children was modified externally.

  **`created_at`** Format: `Datetime`
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** Format: `String`
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** Format: `Enum`
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  <details>
      <summary>Enum values:</summary>
      - <code>schedule_externally_modified</code>
  </details>
  
  
</details>
<details>
<summary><code>schedule_modified</code></summary>

Indicates that the schedule of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was modified to avoid creating a credential with a start date in the past.

  **`created_at`** Format: `Datetime`
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** Format: `String`
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** Format: `Enum`
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  <details>
      <summary>Enum values:</summary>
      - <code>schedule_modified</code>
  </details>
  
  
</details>
<details>
<summary><code>being_deleted</code></summary>

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is being deleted.

  **`created_at`** Format: `Datetime`
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** Format: `String`
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** Format: `Enum`
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  <details>
      <summary>Enum values:</summary>
      - <code>being_deleted</code>
  </details>
  
  
</details>
<details>
<summary><code>unknown_issue_with_acs_credential</code></summary>

An unknown issue occurred while syncing the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) with the provider. This issue may affect the proper functioning of the credential.

  **`created_at`** Format: `Datetime`
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** Format: `String`
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** Format: `Enum`
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  <details>
      <summary>Enum values:</summary>
      - <code>unknown_issue_with_acs_credential</code>
  </details>
  
  
</details>
<details>
<summary><code>needs_to_be_reissued</code></summary>

Access permissions for the [credential](../../../capability-guides/access-systems/managing-credentials.md) have changed. [Reissue](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md) (re-encode) the credential. This issue may affect the proper functioning of the credential.

  **`created_at`** Format: `Datetime`
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** Format: `String`
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** Format: `Enum`
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  <details>
      <summary>Enum values:</summary>
      - <code>needs_to_be_reissued</code>
  </details>
  
  
</details>

---

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).




---


## Warnings

**`waiting_to_be_issued`**

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is waiting to be issued.

---

**`schedule_externally_modified`**

Indicates that the schedule of one of the [credential](../../../capability-guides/access-systems/managing-credentials.md)'s children was modified externally.

---

**`schedule_modified`**

Indicates that the schedule of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was modified to avoid creating a credential with a start date in the past.

---

**`being_deleted`**

Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is being deleted.

---

**`unknown_issue_with_acs_credential`**

An unknown issue occurred while syncing the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) with the provider. This issue may affect the proper functioning of the credential.

---

**`needs_to_be_reissued`**

Access permissions for the [credential](../../../capability-guides/access-systems/managing-credentials.md) have changed. [Reissue](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md) (re-encode) the credential. This issue may affect the proper functioning of the credential.

---


## Events

**`acs_credential.deleted`**

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was deleted.

<details>

<summary>Properties</summary>

- <strong><code>acs_credential_id</code></strong> <i>UUID</i>


- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).


- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.deleted`


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

**`acs_credential.issued`**

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was issued.

<details>

<summary>Properties</summary>

- <strong><code>acs_credential_id</code></strong> <i>UUID</i>


- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).


- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.issued`


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

**`acs_credential.reissued`**

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was reissued.

<details>

<summary>Properties</summary>

- <strong><code>acs_credential_id</code></strong> <i>UUID</i>


- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).


- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.reissued`


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

**`acs_credential.invalidated`**

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was invalidated. That is, the credential cannot be used anymore.

<details>

<summary>Properties</summary>

- <strong><code>acs_credential_id</code></strong> <i>UUID</i>


- <strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).


- <strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md).


- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.


- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.


- <strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_credential.invalidated`


- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.


- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).

</details>

---

## Endpoints


[**`/acs/credentials/assign`**](./assign.md)

Assigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) to a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


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

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


[**`/acs/credentials/update`**](./update.md)

Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).


