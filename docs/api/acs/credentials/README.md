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

<table>
<tr><th>** Property **</th><th>** Description **</th></tr>
<tr><td>**`access_method`** *Enum*</td>
<td>
Access method for the [credential](../../../capability-guides/access-systems/managing-credentials.md). Supported values: `code`, `card`, `mobile_key`.

<details>

<summary>Enum values</summary>

- `code`
- `card`
- `mobile_key`
</details>


</td></tr>

<tr><td>**`acs_credential_id`** *UUID*</td>
<td>
ID of the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td>**`acs_credential_pool_id`** *UUID*</td>
<td>

</td></tr>

<tr><td>**`acs_system_id`** *UUID*</td>
<td>
ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td>**`acs_user_id`** *UUID*</td>
<td>
ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to whom the [credential](../../../capability-guides/access-systems/managing-credentials.md) belongs.


</td></tr>

<tr><td>**`assa_abloy_vostio_metadata`** *Object*</td>
<td>
Vostio-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

<details>

<summary>Child Properties</summary>

- <strong><code>door_names</code></strong> <i>List</i> <i>of Strings</i>



- <strong><code>endpoint_id</code></strong> <i>String</i>



- <strong><code>key_id</code></strong> <i>String</i>



- <strong><code>key_issuing_request_id</code></strong> <i>String</i>



- <strong><code>override_guest_acs_entrance_ids</code></strong> <i>List</i> <i>of Strings</i>


</details>


</td></tr>

<tr><td>**`card_number`** *String*</td>
<td>
Number of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td>**`code`** *String*</td>
<td>
Access (PIN) code for the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td>**`created_at`** *Datetime*</td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was created.


</td></tr>

<tr><td>**`display_name`** *String*</td>
<td>
Display name that corresponds to the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.


</td></tr>

<tr><td>**`ends_at`** *String*</td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.


</td></tr>

<tr><td>**`errors`** *List* *of Objects*</td>
<td>
Errors associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

<details>

<summary>Child Object Properties</summary>

- <strong><code>error_code</code></strong> <i>String</i>



- <strong><code>message</code></strong> <i>String</i>


</details>


</td></tr>

<tr><td>**`external_type`** *Enum*</td>
<td>
Brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type. Supported values: `pti_card`, `brivo_credential`, `hid_credential`, `visionline_card`.

<details>

<summary>Enum values</summary>

- `pti_card`
- `brivo_credential`
- `hid_credential`
- `visionline_card`
- `salto_ks_credential`
- `assa_abloy_vostio_key`
- `salto_space_key`
</details>


</td></tr>

<tr><td>**`external_type_display_name`** *String*</td>
<td>
Display name that corresponds to the brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.


</td></tr>

<tr><td>**`is_issued`** *Boolean*</td>
<td>
Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been encoded onto a card.


</td></tr>

<tr><td>**`is_latest_desired_state_synced_with_provider`** *Boolean*</td>
<td>
Indicates whether the latest state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been synced from Seam to the provider.


</td></tr>

<tr><td>**`is_managed`** *Boolean*</td>
<td>

</td></tr>

<tr><td>**`is_multi_phone_sync_credential`** *Boolean*</td>
<td>
Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).


</td></tr>

<tr><td>**`is_one_time_use`** *Boolean*</td>
<td>
Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) can only be used once. If `true`, the code becomes invalid after the first use.


</td></tr>

<tr><td>**`issued_at`** *Datetime*</td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was encoded onto a card.


</td></tr>

<tr><td>**`latest_desired_state_synced_with_provider_at`** *Datetime*</td>
<td>
Date and time at which the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was most recently synced from Seam to the provider.


</td></tr>

<tr><td>**`parent_acs_credential_id`** *UUID*</td>
<td>
ID of the parent [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td>**`starts_at`** *String*</td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


</td></tr>

<tr><td>**`visionline_metadata`** *Object*</td>
<td>
Visionline-specific metadata for the [credential](../../../capability-guides/access-systems/managing-credentials.md).

<details>

<summary>Child Properties</summary>

- <strong><code>auto_join</code></strong> <i>Boolean</i>



- <strong><code>card_function_type</code></strong> <i>Enum</i>


<details>

<summary>Enum values:</summary>

  - `guest`
  - `staff`
</details>



- <strong><code>card_id</code></strong> <i>String</i>



- <strong><code>common_acs_entrance_ids</code></strong> <i>List</i> <i>of UUIDs</i>



- <strong><code>credential_id</code></strong> <i>String</i>



- <strong><code>guest_acs_entrance_ids</code></strong> <i>List</i> <i>of UUIDs</i>



- <strong><code>is_valid</code></strong> <i>Boolean</i>



- <strong><code>joiner_acs_credential_ids</code></strong> <i>List</i> <i>of UUIDs</i>


</details>


</td></tr>

<tr><td>[**`warnings`**](./#warnings) *List* *of Objects*</td>
<td>
Warnings associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td>**`workspace_id`** *UUID*</td>
<td>
ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

</table>

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



- <strong><code>event_type</code></strong> <i>String</i>



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



- <strong><code>event_type</code></strong> <i>String</i>



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



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

**`acs_credential.invalidated`**

An [ACS credential](../../../capability-guides/access-systems/managing-credentials.md) was invalidated.

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



- <strong><code>event_type</code></strong> <i>String</i>



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


