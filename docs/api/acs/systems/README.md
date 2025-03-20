# Systems

## `acs_system`

Represents an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

### `acs_system_id`

Format: `UUID`

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `can_add_acs_users_to_acs_access_groups`

Format: `Boolean`

Indicates whether the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) supports [adding users to access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).

---

### `can_automate_enrollment`

Format: `Boolean`

Indicates whether it is possible to [launch enrollment automations](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut) for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `can_create_acs_access_groups`

Format: `Boolean`

Indicates whether the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) supports creating [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).

---

### `can_remove_acs_users_from_acs_access_groups`

Format: `Boolean`

Indicates whether the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) supports [removing users from access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).

---

### `connected_account_id`

Format: `UUID`

ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `connected_account_ids`

{% hint style="warning" %}
**Deprecated**. Use `connected_account_id`.
{% endhint %}

Format: `List`

Item format: `UUID`

IDs of the [connected accounts](../../../core-concepts/connected-accounts/README.md) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `created_at`

Format: `Datetime`

Date and time at which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) was created.

---

### `default_credential_manager_acs_system_id`

Format: `UUID`

ID of the default credential manager `acs_system` for this [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### [`errors`](./#errors-1)

Format: `List`

Item format: `Object`

Errors associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `external_type`

Format: `Enum`

Brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.

Possible enum values:
- `pti_site`
- `alta_org`
- `salto_ks_site`
- `salto_space_system`
- `brivo_account`
- `hid_credential_manager_organization`
- `visionline_system`
- `assa_abloy_credential_service`
- `latch_building`
- `dormakaba_community_site`
- `legic_connect_credential_service`
- `assa_abloy_vostio`
- `assa_abloy_vostio_credential_service`

---

### `external_type_display_name`

Format: `String`

Display name that corresponds to the brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.

---

### `image_alt_text`

Format: `String`

Alternative text for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) image.

---

### `image_url`

Format: `String`

URL for the image that represents the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `is_credential_manager`

Format: `Boolean`

Indicates whether the `acs_system` is a credential manager.

---

### `location`

Format: `Object`

<details>

<summary><code>time_zone</code> Format: <code>String</code></summary>

Time zone in which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) is located.


</details>

---

### `name`

Format: `String`

Name of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `system_type`

{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

Format: `Enum`

Possible enum values:
- `pti_site`
- `alta_org`
- `salto_ks_site`
- `salto_space_system`
- `brivo_account`
- `hid_credential_manager_organization`
- `visionline_system`
- `assa_abloy_credential_service`
- `latch_building`
- `dormakaba_community_site`
- `legic_connect_credential_service`
- `assa_abloy_vostio`
- `assa_abloy_vostio_credential_service`

---

### `system_type_display_name`

{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}

Format: `String`

---

### `visionline_metadata`

Format: `Object`

<details>

<summary><code>lan_address</code> Format: <code>String</code></summary>

IP address or hostname of the main Visionline server relative to [Seam Bridge](../../../capability-guides/seam-bridge.md) on the local network.


</details>

<details>

<summary><code>mobile_access_uuid</code> Format: <code>String</code></summary>

Keyset loaded into a reader. Mobile keys and reader administration tools securely authenticate only with readers programmed with a matching keyset.


</details>

<details>

<summary><code>system_id</code> Format: <code>String</code></summary>

Unique ID assigned by the ASSA ABLOY licensing team that identifies each hotel in your credential manager.


</details>

---

### [`warnings`](./#warnings-1)

Format: `List`

Item format: `Object`

Warnings associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

### `workspace_id`

Format: `UUID`

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

## Errors

### `seam_bridge_disconnected`

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  This error might also occur if Seam Bridge is connected to the wrong [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](https://docs.seam.co/latest/capability-guides/capability-guides/access-systems/troubleshooting-your-access-control-system#acs_system.errors.seam_bridge_disconnected).

---

### `visionline_instance_unreachable`

Indicates that [Seam Bridge](../../../capability-guides/seam-bridge.md) is functioning correctly and the Seam API can communicate with Seam Bridge, but the Seam API cannot connect to the on-premises [Visionline access control system](https://docs.seam.co/latest/device-and-system-integration-guides/assa-abloy-visionline-access-control-system).
  For example, the IP address of the on-premises access control system may be set incorrectly within the Seam [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](https://docs.seam.co/latest/capability-guides/capability-guides/access-systems/troubleshooting-your-access-control-system#acs_system.errors.visionline_instance_unreachable).

---

### `salto_ks_subscription_limit_exceeded`

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

---

### `acs_system_disconnected`

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has been disconnected. See [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md) to resolve the issue.

---

### `account_disconnected`

Indicates that the login credentials are invalid. Reconnect the account using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) to restore access.

---

### `salto_ks_certification_expired`

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has lost its Salto KS certification. Contact [support](mailto:support@seam.co) to regain access.

---

## Warnings

### `salto_ks_subscription_limit_almost_reached`

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site to rectify the issue.

---

### `time_zone_does_not_match_location`

Indicates the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) time zone could not be determined because the reported physical location does not match the time zone configured on the physical [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

---

## Endpoints

### [`/acs/systems/get`](./get.md)

Returns a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).
### [`/acs/systems/list`](./list.md)

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).
### [`/acs/systems/list_compatible_credential_manager_acs_systems`](./list_compatible_credential_manager_acs_systems.md)

Returns a list of all credential manager ACS systems that are compatible with a specified
[access control system](https://docs.seam.co/latest/capability-guides/access-systems).

---

## Events

### `acs_system.connected`

An [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) was connected.

<details>

<summary><code>acs_system_id</code> Format: <code>UUID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).


</details>

<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).


</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.


</details>

<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.


</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>


</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.


</details>

<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

### `acs_system.added`

An [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) was added.

<details>

<summary><code>acs_system_id</code> Format: <code>UUID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).


</details>

<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).


</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.


</details>

<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.


</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>


</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.


</details>

<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

### `acs_system.disconnected`

An [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) was disconnected.

<details>

<summary><code>acs_system_id</code> Format: <code>UUID</code></summary>

ID of the [ACS system](https://docs.seam.co/latest/capability-guides/access-systems).


</details>

<details>

<summary><code>connected_account_id</code> Format: <code>UUID</code></summary>

ID of the [connected account](../../../core-concepts/connected-accounts/README.md).


</details>

<details>

<summary><code>created_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event was created.


</details>

<details>

<summary><code>event_id</code> Format: <code>UUID</code></summary>

ID of the event.


</details>

<details>

<summary><code>event_type</code> Format: <code>String</code></summary>


</details>

<details>

<summary><code>occurred_at</code> Format: <code>Datetime</code></summary>

Date and time at which the event occurred.


</details>

<details>

<summary><code>workspace_id</code> Format: <code>UUID</code></summary>

ID of the [workspace](../../../core-concepts/workspaces/README.md).


</details>

---

