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
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>access_method</code></strong> <i>Enum</i></td>
<td>
Access method for the [credential](../../../capability-guides/access-systems/managing-credentials.md). Supported values: `code`, `card`, `mobile_key`.

<details>

<summary>Enum values</summary>

- `code`
- `card`
- `mobile_key`
</details>


</td></tr>

<tr><td><strong><code>acs_credential_id</code></strong> <i>UUID</i></td>
<td>
ID of the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td><strong><code>acs_credential_pool_id</code></strong> <i>UUID</i></td>
<td>

</td></tr>

<tr><td><strong><code>acs_system_id</code></strong> <i>UUID</i></td>
<td>
ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td><strong><code>acs_user_id</code></strong> <i>UUID</i></td>
<td>
ID of the [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to whom the [credential](../../../capability-guides/access-systems/managing-credentials.md) belongs.


</td></tr>

<tr><td><strong><code>assa_abloy_vostio_metadata</code></strong> <i>Object</i></td>
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

<tr><td><strong><code>card_number</code></strong> <i>String</i></td>
<td>
Number of the card associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td><strong><code>code</code></strong> <i>String</i></td>
<td>
Access (PIN) code for the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was created.


</td></tr>

<tr><td><strong><code>display_name</code></strong> <i>String</i></td>
<td>
Display name that corresponds to the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.


</td></tr>

<tr><td><strong><code>ends_at</code></strong> <i>String</i></td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.


</td></tr>

<tr><td><strong><code>errors</code></strong> <i>List</i> <i>of Objects</i></td>
<td>
Errors associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).

<details>

<summary>Child Object Properties</summary>

- <strong><code>error_code</code></strong> <i>String</i>



- <strong><code>message</code></strong> <i>String</i>


</details>


</td></tr>

<tr><td><strong><code>external_type</code></strong> <i>Enum</i></td>
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

<tr><td><strong><code>external_type_display_name</code></strong> <i>String</i></td>
<td>
Display name that corresponds to the brand-specific terminology for the [credential](../../../capability-guides/access-systems/managing-credentials.md) type.


</td></tr>

<tr><td><strong><code>is_issued</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been encoded onto a card.


</td></tr>

<tr><td><strong><code>is_latest_desired_state_synced_with_provider</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the latest state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) has been synced from Seam to the provider.


</td></tr>

<tr><td><strong><code>is_managed</code></strong> <i>Boolean</i></td>
<td>

</td></tr>

<tr><td><strong><code>is_multi_phone_sync_credential</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).


</td></tr>

<tr><td><strong><code>is_one_time_use</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the [credential](../../../capability-guides/access-systems/managing-credentials.md) can only be used once. If `true`, the code becomes invalid after the first use.


</td></tr>

<tr><td><strong><code>issued_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) was encoded onto a card.


</td></tr>

<tr><td><strong><code>latest_desired_state_synced_with_provider_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was most recently synced from Seam to the provider.


</td></tr>

<tr><td><strong><code>parent_acs_credential_id</code></strong> <i>UUID</i></td>
<td>
ID of the parent [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td><strong><code>starts_at</code></strong> <i>String</i></td>
<td>
Date and time at which the [credential](../../../capability-guides/access-systems/managing-credentials.md) validity starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.


</td></tr>

<tr><td><strong><code>visionline_metadata</code></strong> <i>Object</i></td>
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

<tr><td><a href="./#warnings"><strong><code>warnings</code></strong></a> <i>List</i> <i>of Objects</i></td>
<td>
Warnings associated with the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

<tr><td><strong><code>workspace_id</code></strong> <i>UUID</i></td>
<td>
ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [credential](../../../capability-guides/access-systems/managing-credentials.md).


</td></tr>

</table>

## Warnings

<table>
<tr><th width="25%">Warning</th><th>Description</th></tr>
<tr><td><strong><code>waiting_to_be_issued</code></strong></td>

<td>Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is waiting to be issued.</td>
</tr>
<tr><td><strong><code>schedule_externally_modified</code></strong></td>

<td>Indicates that the schedule of one of the [credential](../../../capability-guides/access-systems/managing-credentials.md)'s children was modified externally.</td>
</tr>
<tr><td><strong><code>schedule_modified</code></strong></td>

<td>Indicates that the schedule of the [credential](../../../capability-guides/access-systems/managing-credentials.md) was modified to avoid creating a credential with a start date in the past.</td>
</tr>
<tr><td><strong><code>being_deleted</code></strong></td>

<td>Indicates that the [credential](../../../capability-guides/access-systems/managing-credentials.md) is being deleted.</td>
</tr>
<tr><td><strong><code>unknown_issue_with_acs_credential</code></strong></td>

<td>An unknown issue occurred while syncing the state of the [credential](../../../capability-guides/access-systems/managing-credentials.md) with the provider. This issue may affect the proper functioning of the credential.</td>
</tr>
<tr><td><strong><code>needs_to_be_reissued</code></strong></td>

<td>Access permissions for the [credential](../../../capability-guides/access-systems/managing-credentials.md) have changed. [Reissue](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/creating-and-encoding-card-based-credentials.md) (re-encode) the credential. This issue may affect the proper functioning of the credential.</td>
</tr>
</table>

## Events

<table>
<tr><th width="25%">Event</th><th>Description</th></tr>
<tr><td><strong><code>acs_credential.deleted</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>acs_credential.issued</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>acs_credential.reissued</code></strong></td>
<td>
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

</td></tr>
<tr><td><strong><code>acs_credential.invalidated</code></strong></td>
<td>
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

</td></tr>
</table>

## Endpoints

<table>
<tr><th width="25%">Endpoint</th><th>Description</th></tr>

<tr><td><a href="./assign.md"><strong><code>/acs/credentials/assign</code></strong></a></td>

<td>Assigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) to a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).</td></tr>


<tr><td><a href="./create.md"><strong><code>/acs/credentials/create</code></strong></a></td>

<td>Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).</td></tr>


<tr><td><a href="./delete.md"><strong><code>/acs/credentials/delete</code></strong></a></td>

<td>Deletes a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).</td></tr>


<tr><td><a href="./get.md"><strong><code>/acs/credentials/get</code></strong></a></td>

<td>Returns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).</td></tr>


<tr><td><a href="./list.md"><strong><code>/acs/credentials/list</code></strong></a></td>

<td>Returns a list of all [credentials](../../../capability-guides/access-systems/managing-credentials.md).</td></tr>


<tr><td><a href="./list_accessible_entrances.md"><strong><code>/acs/credentials/list_accessible_entrances</code></strong></a></td>

<td>Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.</td></tr>


<tr><td><a href="./unassign.md"><strong><code>/acs/credentials/unassign</code></strong></a></td>

<td>Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).</td></tr>


<tr><td><a href="./update.md"><strong><code>/acs/credentials/update</code></strong></a></td>

<td>Updates the code and ends at date and time for a specified [credential](../../../capability-guides/access-systems/managing-credentials.md).</td></tr>

</table>
