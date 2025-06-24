# Unmanaged Access Codes

## The unmanaged_access_code Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an [unmanaged smart lock access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).

An access code is a code used for a keypad or pinpad device. Unlike physical keys, which can easily be lost or duplicated, PIN codes can be customized, tracked, and altered on the fly.

When you create an access code on a device in Seam, it is created as a managed access code. Access codes that exist on a device that were not created through Seam are considered unmanaged codes. We strictly limit the operations that can be performed on unmanaged codes.

Prior to using Seam to manage your devices, you may have used another lock management system to manage the access codes on your devices. Where possible, we help you keep any existing access codes on devices and transition those codes to ones managed by your Seam workspace.

Not all providers support unmanaged access codes. The following providers do not support unmanaged access codes:

- [Kwikset](https://docs.seam.co/latest/device-and-system-integration-guides/kwikset-locks)

{% tabs %}
{% tab title="Unmanaged Access Code" %}

An unmanaged access code resource.

```json
{
  "access_code_id": "88fa1812-bef8-4108-9fb4-4855376c3edf",
  "code": "1234",
  "created_at": "2025-06-16T16:54:17.946283Z",
  "device_id": "b3439f17-7273-46f3-9e20-9a283d9cb5b4",
  "ends_at": "2025-06-23T16:54:17.946261Z",
  "errors": [],
  "is_managed": false,
  "name": "My Unmanaged Access Code",
  "starts_at": "2025-06-21T16:54:17.946261Z",
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

**`access_code.unmanaged.converted_to_managed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was converted successfully to a managed access code.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.converted_to_managed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.unmanaged.failed_to_convert_to_managed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) failed to be converted to a managed access code.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.failed_to_convert_to_managed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.unmanaged.created`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was created on a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.created`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`access_code.unmanaged.removed`**

An [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) was removed from a device.

<details>

<summary>Properties</summary>

<strong><code>access_code_id</code></strong> <i>UUID</i>

  ID of the affected access code.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the affected access code.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>device_id</code></strong> <i>UUID</i>

  ID of the device associated with the affected access code.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `access_code.unmanaged.removed`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/access_codes/unmanaged/convert_to_managed`**](./convert_to_managed.md)

Converts an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes) to an [access code managed through Seam](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).


[**`/access_codes/unmanaged/delete`**](./delete.md)

Deletes an [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


[**`/access_codes/unmanaged/get`**](./get.md)

Returns a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


[**`/access_codes/unmanaged/list`**](./list.md)

Returns a list of all [unmanaged access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


[**`/access_codes/unmanaged/update`**](./update.md)

Updates a specified [unmanaged access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/migrating-existing-access-codes).


