# Systems

## The acs\_system Object

* [Properties](./#properties)
* [Errors](./#errors)
* [Warnings](./#warnings)
* [Events](./#events)
* [Endpoints](./#endpoints)

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

***

## Properties

**`acs_access_group_count`** _Number_

***

**`acs_system_id`** _UUID_

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

***

**`acs_user_count`** _Number_

***

**`connected_account_id`** _UUID_

ID of the [connected account](../../../core-concepts/connected-accounts/) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

***

**`connected_account_ids`** _List_ _of UUIDs_

IDs of the [connected accounts](../../../core-concepts/connected-accounts/) associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

{% hint style="warning" %}
**Deprecated**. Use `connected_account_id`.
{% endhint %}

***

**`created_at`** _Datetime_

Date and time at which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) was created.

***

**`default_credential_manager_acs_system_id`** _UUID_

ID of the default credential manager `acs_system` for this [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

***

[**`errors`**](./#errors) _List_ _of Objects_

Errors associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

The specific structure of each object in this list depends on the value of its `error_code` field.

Variants:

<details>

<summary><code>seam_bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge/), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. This error might also occur if Seam Bridge is connected to the wrong [workspace](../../../core-concepts/workspaces/). See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `seam_bridge_disconnected`

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>bridge_disconnected</code></summary>

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge/), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `bridge_disconnected`

***

**`is_bridge_error`** _Boolean_

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>visionline_instance_unreachable</code></summary>

Indicates that [Seam Bridge](../../../capability-guides/seam-bridge/) is functioning correctly and the Seam API can communicate with Seam Bridge, but the Seam API cannot connect to the on-premises [Visionline access control system](../../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/). For example, the IP address of the on-premises access control system may be set incorrectly within the Seam [workspace](../../../core-concepts/workspaces/). See also [Troubleshooting Your Access Control System](https://docs.seam.co/latest/capability-guides/capability-guides/access-systems/troubleshooting-your-access-control-system#acs_system.errors.visionline_instance_unreachable).

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `visionline_instance_unreachable`

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>salto_ks_subscription_limit_exceeded</code></summary>

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_subscription_limit_exceeded`

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>acs_system_disconnected</code></summary>

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has been disconnected. See [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md) to resolve the issue.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `acs_system_disconnected`

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>account_disconnected</code></summary>

Indicates that the login credentials are invalid. Reconnect the account using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) to restore access.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `account_disconnected`

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

<details>

<summary><code>salto_ks_certification_expired</code></summary>

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has lost its Salto KS certification. Contact [support](mailto:support@seam.co) to regain access.

**`created_at`** _Datetime_

Date and time at which Seam created the error.

***

**`error_code`** _Enum_

Unique identifier of the type of error. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_certification_expired`

***

**`message`** _String_

Detailed description of the error. Provides insights into the issue and potentially how to rectify it.

</details>

***

**`external_type`** _Enum_

Brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.

<details>

<summary>Enum values</summary>

* `pti_site`
* `alta_org`
* `salto_ks_site`
* `salto_space_system`
* `brivo_account`
* `hid_credential_manager_organization`
* `visionline_system`
* `assa_abloy_credential_service`
* `latch_building`
* `dormakaba_community_site`
* `dormakaba_ambiance_site`
* `legic_connect_credential_service`
* `assa_abloy_vostio`
* `assa_abloy_vostio_credential_service`
* `hotek_site`

</details>

***

**`external_type_display_name`** _String_

Display name that corresponds to the brand-specific terminology for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) type.

***

**`image_alt_text`** _String_

Alternative text for the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) image.

***

**`image_url`** _String_

URL for the image that represents the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

***

**`is_credential_manager`** _Boolean_

Indicates whether the `acs_system` is a credential manager.

***

**`location`** _Object_

<details>

<summary>Child Properties</summary>

*   **`time_zone`** _String_

    Time zone in which the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) is located.

</details>

***

**`name`** _String_

Name of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

***

**`system_type`** _Enum_

{% hint style="warning" %}
**Deprecated**. Use `external_type`.
{% endhint %}

<details>

<summary>Enum values</summary>

* `pti_site`
* `alta_org`
* `salto_ks_site`
* `salto_space_system`
* `brivo_account`
* `hid_credential_manager_organization`
* `visionline_system`
* `assa_abloy_credential_service`
* `latch_building`
* `dormakaba_community_site`
* `dormakaba_ambiance_site`
* `legic_connect_credential_service`
* `assa_abloy_vostio`
* `assa_abloy_vostio_credential_service`
* `hotek_site`

</details>

***

**`system_type_display_name`** _String_

{% hint style="warning" %}
**Deprecated**. Use `external_type_display_name`.
{% endhint %}

***

**`visionline_metadata`** _Object_

<details>

<summary>Child Properties</summary>

*   **`lan_address`** _String_

    IP address or hostname of the main Visionline server relative to [Seam Bridge](../../../capability-guides/seam-bridge/) on the local network.
*   **`mobile_access_uuid`** _String_

    Keyset loaded into a reader. Mobile keys and reader administration tools securely authenticate only with readers programmed with a matching keyset.
*   **`system_id`** _String_

    Unique ID assigned by the ASSA ABLOY licensing team that identifies each hotel in your credential manager.

</details>

***

[**`warnings`**](./#warnings) _List_ _of Objects_

Warnings associated with the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

The specific structure of each object in this list depends on the value of its `warning_code` field.

Variants:

<details>

<summary><code>salto_ks_subscription_limit_almost_reached</code></summary>

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site to rectify the issue.

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `salto_ks_subscription_limit_almost_reached`

</details>

<details>

<summary><code>time_zone_does_not_match_location</code></summary>

Indicates the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) time zone could not be determined because the reported physical location does not match the time zone configured on the physical [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

**`created_at`** _Datetime_

Date and time at which Seam created the warning.

***

**`message`** _String_

Detailed description of the warning. Provides insights into the issue and potentially how to rectify it.

***

**`misconfigured_acs_entrance_ids`** _List_ _of UUIDs_

{% hint style="warning" %}
**Deprecated**. this field is deprecated.
{% endhint %}

***

**`warning_code`** _Enum_

Unique identifier of the type of warning. Enables quick recognition and categorization of the issue.

Enum values:

* `time_zone_does_not_match_location`

</details>

***

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) that contains the [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

***

## Errors

**`account_disconnected`**

Indicates that the login credentials are invalid. Reconnect the account using a [Connect Webview](https://docs.seam.co/latest/ui-components/connect-webviews) to restore access.

***

**`acs_system_disconnected`**

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has been disconnected. See [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md) to resolve the issue.

***

**`bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge/), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

***

**`salto_ks_certification_expired`**

Indicates that the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) has lost its Salto KS certification. Contact [support](mailto:support@seam.co) to regain access.

***

**`salto_ks_subscription_limit_exceeded`**

Indicates that the maximum number of users allowed for the site has been reached. This means that new access codes cannot be created. Contact Salto support to increase the user limit.

***

**`seam_bridge_disconnected`**

Indicates that the Seam API cannot communicate with [Seam Bridge](../../../capability-guides/seam-bridge/), for example, if Seam Bridge executable has stopped or if the computer running the Seam Bridge executable is offline. This error might also occur if Seam Bridge is connected to the wrong [workspace](../../../core-concepts/workspaces/). See also [Troubleshooting Your Access Control System](../../../capability-guides/access-systems/troubleshooting-your-access-control-system.md#acs_system.errors.seam_bridge_disconnected).

***

**`visionline_instance_unreachable`**

Indicates that [Seam Bridge](../../../capability-guides/seam-bridge/) is functioning correctly and the Seam API can communicate with Seam Bridge, but the Seam API cannot connect to the on-premises [Visionline access control system](../../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/). For example, the IP address of the on-premises access control system may be set incorrectly within the Seam [workspace](../../../core-concepts/workspaces/). See also [Troubleshooting Your Access Control System](https://docs.seam.co/latest/capability-guides/capability-guides/access-systems/troubleshooting-your-access-control-system#acs_system.errors.visionline_instance_unreachable).

***

## Warnings

**`salto_ks_subscription_limit_almost_reached`**

Indicates that the Salto KS site has exceeded 80% of the maximum number of allowed users. Increase your subscription limit or delete some users from your site to rectify the issue.

***

**`time_zone_does_not_match_location`**

Indicates the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) time zone could not be determined because the reported physical location does not match the time zone configured on the physical [ACS entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).

***

## Events

**`acs_system.connected`**

An [access system](https://docs.seam.co/latest/capability-guides/access-systems) was connected.

<details>

<summary>Properties</summary>

**`acs_system_id`** _UUID_

ID of the access system.

**`connected_account_id`** _UUID_

ID of the connected account.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `acs_system.connected`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

**`acs_system.added`**

An [access system](https://docs.seam.co/latest/capability-guides/access-systems) was added.

<details>

<summary>Properties</summary>

**`acs_system_id`** _UUID_

ID of the access system.

**`connected_account_id`** _UUID_

ID of the connected account.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `acs_system.added`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

**`acs_system.disconnected`**

An [access system](https://docs.seam.co/latest/capability-guides/access-systems) was disconnected.

<details>

<summary>Properties</summary>

**`acs_system_id`** _UUID_

ID of the access system.

**`connected_account_id`** _UUID_

ID of the connected account.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `acs_system.disconnected`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

## Endpoints

[**`/acs/systems/get`**](get.md)

Returns a specified [access system](https://docs.seam.co/latest/capability-guides/access-systems).

[**`/acs/systems/list`**](list.md)

Returns a list of all [access systems](https://docs.seam.co/latest/capability-guides/access-systems).

[**`/acs/systems/list_compatible_credential_manager_acs_systems`**](list_compatible_credential_manager_acs_systems.md)

Returns a list of all credential manager systems that are compatible with a specified [access system](https://docs.seam.co/latest/capability-guides/access-systems).

[**`/acs/systems/report_devices`**](report_devices.md)

Reports ACS system device status including encoders and entrances.
