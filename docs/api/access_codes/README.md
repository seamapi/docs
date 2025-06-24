# Access Codes

## The access_code Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a smart lock [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

An access code is a code used for a keypad or pinpad device. Unlike physical keys, which can easily be lost or duplicated, PIN codes can be customized, tracked, and altered on the fly. Using the Seam Access Code API, you can easily generate access codes on the hundreds of door lock models with which we integrate.

Seam supports programming two types of access codes: [ongoing](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#ongoing-access-codes) and [time-bound](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#time-bound-access-codes). To differentiate between the two, refer to the `type` property of the access code. Ongoing codes display as `ongoing`, whereas time-bound codes are labeled `time_bound`. An ongoing access code is active, until it has been removed from the device. To specify an ongoing access code, leave both `starts_at` and `ends_at` empty. A time-bound access code will be programmed at the `starts_at` time and removed at the `ends_at` time.

In addition, for certain devices, Seam also supports [offline access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#offline-access-codes). Offline access (PIN) codes are designed for door locks that might not always maintain an internet connection. For this type of access code, the device manufacturer uses encryption keys (tokens) to create server-based registries of algorithmically-generated offline PIN codes. Because the tokens remain synchronized with the managed devices, the locks do not require an active internet connection—and you do not need to be near the locks—to create an offline access code. Then, owners or managers can share these offline codes with users through a variety of mechanisms, such as messaging applications. That is, lock users do not need to install a smartphone application to receive an offline access code.

{% tabs %}
{% tab title="One-Time-Use Offline Access Code" %}

A one-time-use offline access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": true,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": []
}
```
{% endtab %}
{% tab title="Ongoing Online Access Code" %}

An ongoing online access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": null,
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": true,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": null,
  "status": "set",
  "type": "ongoing",
  "warnings": []
}
```
{% endtab %}
{% tab title="Time-bound Online Access Code" %}

A time-bound online access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": true,
  "is_external_modification_allowed": true,
  "is_managed": true,
  "is_offline_access_code": false,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": []
}
```
{% endtab %}
{% tab title="Time-bound Offline Access Code" %}

A time-bound offline access code resource.

```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": false,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": []
}
```
{% endtab %}
{% endtabs %}

---
## Properties


## Errors

### Access Codes
**`empty_backup_access_code_pool`**

Indicates that the [backup access code pool](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) is empty.

---

### Locks
**`august_lock_missing_bridge`**

Indicates that the lock is not connected to a bridge.

---

**`august_lock_not_authorized`**

Indicates that the user is not authorized to use the August lock.

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the Salto site user limit has been reached.

---


## Events

**`access_code.created`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was created.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.created`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.changed`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was changed.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.changed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.scheduled_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was [scheduled natively](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>code</code></strong> <i>String</i>

  Code for the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.scheduled_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.set_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was set on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>code</code></strong> <i>String</i>

  Code for the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.set_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.removed_from_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was removed from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.removed_from_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.delay_in_setting_on_device`**

There was an unusually long delay in setting an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.delay_in_setting_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.failed_to_set_on_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be set on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.failed_to_set_on_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.deleted`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>code</code></strong> <i>String</i>

  Code for the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.deleted`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.delay_in_removing_from_device`**

There was an unusually long delay in removing an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.delay_in_removing_from_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.failed_to_remove_from_device`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) failed to be removed from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.failed_to_remove_from_device`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.modified_external_to_seam`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was modified outside of Seam.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.modified_external_to_seam`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.deleted_external_to_seam`**

An [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) was deleted outside of Seam.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.deleted_external_to_seam`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.backup_access_code_pulled`**

A [backup access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes) was pulled from the backup access code pool and set on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>backup_access_code_id</code></strong> <i>String</i>

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.backup_access_code_pulled`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/access_codes/create`**](./create.md)

Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/create_multiple`**](./create_multiple.md)

Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.


[**`/access_codes/delete`**](./delete.md)

Deletes an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/generate_code`**](./generate_code.md)

Generates a code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes), given a device ID.


[**`/access_codes/get`**](./get.md)

Returns a specified [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/list`**](./list.md)

Returns a list of all [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/pull_backup_access_code`**](./pull_backup_access_code.md)

Retrieves a backup access code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes). See also [Managing Backup Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/backup-access-codes).


[**`/access_codes/report_device_constraints`**](./report_device_constraints.md)

Enables you to report access code-related constraints for a device. Currently, supports reporting supported code length constraints for SmartThings devices.


[**`/access_codes/update`**](./update.md)

Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/update_multiple`**](./update_multiple.md)

Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.


