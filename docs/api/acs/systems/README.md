# Systems

## The acs_system Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Within an `acs_system`, create [`acs_user`s](https://docs.seam.co/latest/api/acs/users#acs_user) and [`acs_credential`s](https://docs.seam.co/latest/api/acs/credentials#acs_credential) to grant access to the `acs_user`s.

For details about the resources associated with an access control system, see the [access control systems namespace](https://docs.seam.co/latest/api/acs).

{% tabs %}
{% tab title="JSON" %}
```json
{
  acs_access_group_count: [example value],
  acs_system_id: [example value],
  acs_user_count: [example value],
  can_add_acs_users_to_acs_access_groups: [example value],
  can_automate_enrollment: [example value],
  can_create_acs_access_groups: [example value],
  can_remove_acs_users_from_acs_access_groups: [example value],
  connected_account_id: [example value],
  connected_account_ids: [example value],
  created_at: [example value],
  default_credential_manager_acs_system_id: [example value],
  errors: [example value],
  external_type: [example value],
  external_type_display_name: [example value],
  image_alt_text: [example value],
  image_url: [example value],
  is_credential_manager: [example value],
  location: [example value],
  name: [example value],
  system_type: [example value],
  system_type_display_name: [example value],
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
<tr><th>Property</th><th>Description</th></tr>
<tr><td><strong><code>acs_access_group_count</code></strong> <i>Number</i></td>
<td>

</td></tr>

<tr><td><strong><code>acs_system_id</code></strong> <i>UUID</i></td>
<td>
ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><strong><code>acs_user_count</code></strong> <i>Number</i></td>
<td>

</td></tr>

<tr><td><strong><code>can_add_acs_users_to_acs_access_groups</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) supports [adding users to access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#add-an-acs-user-to-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).


</td></tr>

<tr><td><strong><code>can_automate_enrollment</code></strong> <i>Boolean</i></td>
<td>
Indicates whether it is possible to [launch enrollment automations](../../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#prepare-the-phones-for-a-user-identity-to-start-receiving-mobile-credentials-using-an-enrollment-aut) for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><strong><code>can_create_acs_access_groups</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) supports creating [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).


</td></tr>

<tr><td><strong><code>can_remove_acs_users_from_acs_access_groups</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) supports [removing users from access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups#remove-an-acs-user-from-an-access-group). See also [Access Group-based Access Control Systems](https://docs.seam.co/latest/capability-guides/access-systems/understanding-access-control-system-differences#access-group-based-access-control-systems).


</td></tr>

<tr><td><strong><code>connected_account_id</code></strong> <i>UUID</i></td>
<td>
ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><strong><code>connected_account_ids</code></strong> <i>List</i> <i>of UUIDs</i></td>
<td>
IDs of the [connected accounts](../../../core-concepts/connected-accounts/README.md) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

{% hint style="warning" %}
**Deprecated**. Use `connected_account_id`.
{% endhint %}


</td></tr>

<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) was created.


</td></tr>

<tr><td><strong><code>default_credential_manager_acs_system_id</code></strong> <i>UUID</i></td>
<td>
ID of the default credential manager `acs_system` for this [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><a href="./#errors"><strong><code>errors</code></strong></a> <i>List</i> <i>of Objects</i></td>
<td>
Errors associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><strong><code>external_type</code></strong> <i>Enum</i></td>
<td>
Brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.

<details>

<summary>Enum values</summary>

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
</details>


</td></tr>

<tr><td><strong><code>external_type_display_name</code></strong> <i>String</i></td>
<td>
Display name that corresponds to the brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.


</td></tr>

<tr><td><strong><code>image_alt_text</code></strong> <i>String</i></td>
<td>
Alternative text for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) image.


</td></tr>

<tr><td><strong><code>image_url</code></strong> <i>String</i></td>
<td>
URL for the image that represents the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><strong><code>is_credential_manager</code></strong> <i>Boolean</i></td>
<td>
Indicates whether the `acs_system` is a credential manager.


</td></tr>

<tr><td><strong><code>location</code></strong> <i>Object</i></td>
<td>
<details>

<summary>Child Properties</summary>

- <strong><code>time_zone</code></strong> <i>String</i>

  Time zone in which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) is located.


</details>


</td></tr>

<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>
Name of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><strong><code>system_type</code></strong> <i>Enum</i></td>
<td>
{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

<details>

<summary>Enum values</summary>

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
</details>


</td></tr>

<tr><td><strong><code>system_type_display_name</code></strong> <i>String</i></td>
<td>
{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}


</td></tr>

<tr><td><strong><code>visionline_metadata</code></strong> <i>Object</i></td>
<td>
<details>

<summary>Child Properties</summary>

- <strong><code>lan_address</code></strong> <i>String</i>

  IP address or hostname of the main Visionline server relative to [Seam Bridge](../../../capability-guides/seam-bridge.md) on the local network.



- <strong><code>mobile_access_uuid</code></strong> <i>String</i>

  Keyset loaded into a reader. Mobile keys and reader administration tools securely authenticate only with readers programmed with a matching keyset.



- <strong><code>system_id</code></strong> <i>String</i>

  Unique ID assigned by the ASSA ABLOY licensing team that identifies each hotel in your credential manager.


</details>


</td></tr>

<tr><td><a href="./#warnings"><strong><code>warnings</code></strong></a> <i>List</i> <i>of Objects</i></td>
<td>
Warnings associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

<tr><td><strong><code>workspace_id</code></strong> <i>UUID</i></td>
<td>
ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


</td></tr>

</table>

## Errors

**`seam_bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  This error might also occur if Seam Bridge is connected to the wrong [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
    See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`visionline_instance_unreachable`**

Indicates that [Seam Bridge](../../../capability-guides/seam-bridge.md) is functioning correctly and the Seam API can communicate with Seam Bridge, but the Seam API cannot connect to the on-premises [Visionline access control system](https://docs.seam.co/latest/device-and-system-integration-guides/assa-abloy-visionline-access-control-system).
  For example, the IP address of the on-premises access control system may be set incorrectly within the Seam [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](https://docs.seam.co/latest/capability-guides/capability-guides/access-systems/troubleshooting-your-access-control-system#acs_system.errors.visionline_instance_unreachable).

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

---

**`acs_system_disconnected`**

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has been disconnected. See [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md) to resolve the issue.

---

**`account_disconnected`**

Indicates that the login credentials are invalid. Reconnect the account using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) to restore access.

---

**`salto_ks_certification_expired`**

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has lost its Salto KS certification. Contact [support](mailto:support@seam.co) to regain access.

---


## Warnings

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site to rectify the issue.

---

**`time_zone_does_not_match_location`**

Indicates the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) time zone could not be determined because the reported physical location does not match the time zone configured on the physical [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

---


## Events

**`acs_system.connected`**

An [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) was connected.

<details>

<summary>Properties</summary>

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

**`acs_system.added`**

An [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) was added.

<details>

<summary>Properties</summary>

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

**`acs_system.disconnected`**

An [ACS system](https://docs.seam.co/latest/capability-guides/access-systems) was disconnected.

<details>

<summary>Properties</summary>

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


[**`/acs/systems/get`**](./get.md)

Returns a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


[**`/acs/systems/list`**](./list.md)

Returns a list of all [access control systems](https://docs.seam.co/latest/capability-guides/access-systems).


[**`/acs/systems/list_compatible_credential_manager_acs_systems`**](./list_compatible_credential_manager_acs_systems.md)

Returns a list of all credential manager ACS systems that are compatible with a specified [access control system](https://docs.seam.co/latest/capability-guides/access-systems).


