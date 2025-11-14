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
{% tab title="ACS System" %}

An access system resource.

```json
{
  "acs_access_group_count": 5,
  "acs_system_id": "dbed811f-a8c7-4dab-a3cb-1a734ebd6ac7",
  "acs_user_count": 20,
  "connected_account_id": "a94aeed0-1ae0-4e49-9c23-8444c7ceba09",
  "connected_account_ids": ["a94aeed0-1ae0-4e49-9c23-8444c7ceba09"],
  "created_at": "2025-06-15T16:54:17.946425Z",
  "default_credential_manager_acs_system_id": "5dde2def-3507-44f5-9521-7ca96aa4cd18",
  "errors": [],
  "external_type": "salto_ks_site",
  "external_type_display_name": "Salto KS site",
  "image_alt_text": "Salto KS site Logo",
  "image_url": "https://connect.getseam.com/_next/image?url=https://connect.getseam.com/assets/images/acs_systems/salto_ks_site.png&q=75&w=128",
  "is_credential_manager": false,
  "location": { "time_zone": "America/New_York" },
  "name": "My ACS System",
  "warnings": [],
  "workspace_id": "172920be-1f4d-45d4-8519-ecc3bdee638f"
}
```
{% endtab %}
{% endtabs %}

---
## Properties

**`acs_access_group_count`** *Number*





---

**`acs_system_id`** *UUID*

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




---

**`acs_user_count`** *Number*





---

**`connected_account_id`** *UUID*

ID of the [connected account](../../../core-concepts/connected-accounts/README.md) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




---

**`connected_account_ids`** *List* *of UUIDs*

IDs of the [connected accounts](../../../core-concepts/connected-accounts/README.md) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

{% hint style="warning" %}
**Deprecated**. Use `connected_account_id`.
{% endhint %}



---

**`created_at`** *Datetime*

Date and time at which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) was created.




---

**`default_credential_manager_acs_system_id`** *UUID*

ID of the default credential manager `acs_system` for this [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




---

[**`errors`**](./#errors) *List* *of Objects*

Errors associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:
<details>
<summary><code>seam_bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  This error might also occur if Seam Bridge is connected to the wrong [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>seam_bridge_disconnected</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
    See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>bridge_disconnected</code>
  
  
  ---

  **`is_bridge_error`** *Boolean*
  
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>visionline_instance_unreachable</code></summary>

Indicates that [Seam Bridge](../../../capability-guides/seam-bridge.md) is functioning correctly and the Seam API can communicate with Seam Bridge, but the Seam API cannot connect to the on-premises [Visionline access control system](../../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/README.md).
  For example, the IP address of the on-premises access control system may be set incorrectly within the Seam [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](https://docs.seam.co/latest/capability-guides/capability-guides/access-systems/troubleshooting-your-access-control-system#acs_system.errors.visionline_instance_unreachable).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>visionline_instance_unreachable</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_exceeded</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>acs_system_disconnected</code></summary>

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has been disconnected. See [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md) to resolve the issue.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>acs_system_disconnected</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>account_disconnected</code></summary>

Indicates that the login credentials are invalid. Reconnect the account using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) to restore access.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>account_disconnected</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>
<details>
<summary><code>salto_ks_certification_expired</code></summary>

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has lost its Salto KS certification. Contact [support](mailto:support@seam.co) to regain access.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the error.
  
  
  ---

  **`error_code`** *Enum*
  
  
  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_certification_expired</code>
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
  
  
</details>

---

**`external_type`** *Enum*

Brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.


<details>
<summary>Enum values</summary>

- <code>pti_site</code>
- <code>alta_org</code>
- <code>salto_ks_site</code>
- <code>salto_space_system</code>
- <code>brivo_account</code>
- <code>hid_credential_manager_organization</code>
- <code>visionline_system</code>
- <code>assa_abloy_credential_service</code>
- <code>latch_building</code>
- <code>dormakaba_community_site</code>
- <code>dormakaba_ambiance_site</code>
- <code>legic_connect_credential_service</code>
- <code>assa_abloy_vostio</code>
- <code>assa_abloy_vostio_credential_service</code>
- <code>hotek_site</code>
</details>


---

**`external_type_display_name`** *String*

Display name that corresponds to the brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.




---

**`image_alt_text`** *String*

Alternative text for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) image.




---

**`image_url`** *String*

URL for the image that represents the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




---

**`is_credential_manager`** *Boolean*

Indicates whether the `acs_system` is a credential manager.




---

**`location`** *Object*




<details>
  <summary>Child Properties</summary>

  - <strong><code>time_zone</code></strong> <i>String</i>
  
    Time zone in which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) is located.

</details>

---

**`name`** *String*

Name of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




---

**`system_type`** *Enum*


{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

<details>
<summary>Enum values</summary>

- <code>pti_site</code>
- <code>alta_org</code>
- <code>salto_ks_site</code>
- <code>salto_space_system</code>
- <code>brivo_account</code>
- <code>hid_credential_manager_organization</code>
- <code>visionline_system</code>
- <code>assa_abloy_credential_service</code>
- <code>latch_building</code>
- <code>dormakaba_community_site</code>
- <code>dormakaba_ambiance_site</code>
- <code>legic_connect_credential_service</code>
- <code>assa_abloy_vostio</code>
- <code>assa_abloy_vostio_credential_service</code>
- <code>hotek_site</code>
</details>


---

**`system_type_display_name`** *String*


{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}



---

**`visionline_metadata`** *Object*




<details>
  <summary>Child Properties</summary>

  - <strong><code>lan_address</code></strong> <i>String</i>
  
    IP address or hostname of the main Visionline server relative to [Seam Bridge](../../../capability-guides/seam-bridge.md) on the local network.

  - <strong><code>mobile_access_uuid</code></strong> <i>String</i>
  
    Keyset loaded into a reader. Mobile keys and reader administration tools securely authenticate only with readers programmed with a matching keyset.

  - <strong><code>system_id</code></strong> <i>String</i>
  
    Unique ID assigned by the ASSA ABLOY licensing team that identifies each hotel in your credential manager.

</details>

---

[**`warnings`**](./#warnings) *List* *of Objects*

Warnings associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:
<details>
<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site to rectify the issue.

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>salto_ks_subscription_limit_almost_reached</code>
  
  
</details>
<details>
<summary><code>time_zone_does_not_match_location</code></summary>

Indicates the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) time zone could not be determined because the reported physical location does not match the time zone configured on the physical [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

  **`created_at`** *Datetime*
  
  
  Date and time at which Seam created the warning.
  
  
  ---

  **`message`** *String*
  
  
  Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.
  
  
  ---

  **`misconfigured_acs_entrance_ids`** *List* *of UUIDs*
  
  
  {% hint style="warning" %}
  **Deprecated**. this field is deprecated.
  {% endhint %}
  
  
  ---

  **`warning_code`** *Enum*
  
  
  Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.
  
  Enum values:
  
  - <code>time_zone_does_not_match_location</code>
  
  
</details>

---

**`workspace_id`** *UUID*

ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).




---


## Errors

**`account_disconnected`**

Indicates that the login credentials are invalid. Reconnect the account using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) to restore access.

---

**`acs_system_disconnected`**

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has been disconnected. See [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md) to resolve the issue.

---

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
    See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`salto_ks_certification_expired`**

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has lost its Salto KS certification. Contact [support](mailto:support@seam.co) to regain access.

---

**`salto_ks_subscription_limit_exceeded`**

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

---

**`seam_bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge.md), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline.
  This error might also occur if Seam Bridge is connected to the wrong [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

---

**`visionline_instance_unreachable`**

Indicates that [Seam Bridge](../../../capability-guides/seam-bridge.md) is functioning correctly and the Seam API can communicate with Seam Bridge, but the Seam API cannot connect to the on-premises [Visionline access control system](../../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/README.md).
  For example, the IP address of the on-premises access control system may be set incorrectly within the Seam [workspace](../../../core-concepts/workspaces/README.md).
  See also [Troubleshooting Your Access Control System](https://docs.seam.co/latest/capability-guides/capability-guides/access-systems/troubleshooting-your-access-control-system#acs_system.errors.visionline_instance_unreachable).

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

An [access system](https://docs.seam.co/latest/capability-guides/access-systems) was connected.

<details>

<summary>Properties</summary>

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_system.connected`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`acs_system.added`**

An [access system](https://docs.seam.co/latest/capability-guides/access-systems) was added.

<details>

<summary>Properties</summary>

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_system.added`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

**`acs_system.disconnected`**

An [access system](https://docs.seam.co/latest/capability-guides/access-systems) was disconnected.

<details>

<summary>Properties</summary>

<strong><code>acs_system_id</code></strong> <i>UUID</i>

  ID of the access system.

<strong><code>connected_account_id</code></strong> <i>UUID</i>

  ID of the connected account.

<strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.

<strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.

<strong><code>event_type</code></strong> <i>Enum</i>

  Value: `acs_system.disconnected`

<strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.

<strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../../core-concepts/workspaces/README.md) associated with the event.
</details>

---

## Endpoints


[**`/acs/systems/get`**](./get.md)

Returns a specified [access system](https://docs.seam.co/latest/capability-guides/access-systems).


[**`/acs/systems/list`**](./list.md)

Returns a list of all [access systems](https://docs.seam.co/latest/capability-guides/access-systems).


[**`/acs/systems/list_compatible_credential_manager_acs_systems`**](./list_compatible_credential_manager_acs_systems.md)

Returns a list of all credential manager systems that are compatible with a specified [access system](https://docs.seam.co/latest/capability-guides/access-systems).


[**`/acs/systems/report_devices`**](./report_devices.md)

Reports ACS system device status including encoders and entrances.


