# Encoders

## The acs\_encoder Object

* [Properties](./#properties)
* [Errors](./#errors)
* [Warnings](./#warnings)
* [Events](./#events)
* [Endpoints](./#endpoints)

Represents a hardware device that encodes [credential](../../../capability-guides/access-systems/managing-credentials.md) data onto physical cards within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Some access control systems require credentials to be encoded onto plastic key cards using a card encoder. This process involves the following two key steps:

1. Credential creation\
   Configure the access parameters for the credential.
2. Card encoding\
   Write the credential data onto the card using a compatible card encoder.

Separately, the Seam API also supports card scanning, which enables you to scan and read the encoded data on a card. You can use this action to confirm consistency with access control system records or diagnose discrepancies if needed.

See [Working with Card Encoders and Scanners](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

To verify if your access control system requires a card encoder, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="ACS Encoder" %}
An access system encoder resource.

```json
{
  "acs_encoder_id": "681da2d6-4ac6-4b33-8c03-86281b761325",
  "acs_system_id": "c85406d2-214f-4e11-8000-a2e5b5a362a4",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
  "created_at": "2025-06-16T16:54:17.946527Z",
  "display_name": "Encoder 1",
  "errors": [],
  "workspace_id": "f863ac85-2c4e-49ae-8679-3ec2417f1d62"
}
```
{% endtab %}
{% endtabs %}

***

## Properties

**`acs_encoder_id`** _UUID_

ID of the \[encoder]\(https://docs.seam.co/latest/capability-guides/access-systems/working-with-card-encoders-and-scanners.

***

**`acs_system_id`** _UUID_

ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

***

**`connected_account_id`** _UUID_

ID of the [connected account](../../../core-concepts/connected-accounts/) that contains the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

***

**`created_at`** _Datetime_

Date and time at which the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/) was created.

***

**`display_name`** _String_

Display name for the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

***

**`errors`** _List_ _of Objects_

Errors associated with the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

<details>

<summary>Child Object Properties</summary>

**`created_at`** _Datetime_

```
Date and time at which Seam created the error.
```

**`error_code`** _Enum_

```
Unique identifier of the type of error. Enables quick recognition and categorization of the issue.
```

**`message`** _String_

```
Detailed description of the error. Provides insights into the issue and potentially how to rectify it.
```

</details>

***

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) that contains the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

***

## Events

**`acs_encoder.added`**

An [access system encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/) was added.

<details>

<summary>Properties</summary>

**`acs_encoder_id`** _UUID_

ID of the affected encoder.

**`acs_system_id`** _UUID_

ID of the access system.

**`connected_account_id`** _UUID_

ID of the connected account.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `acs_encoder.added`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

**`acs_encoder.removed`**

An [access system encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/) was removed.

<details>

<summary>Properties</summary>

**`acs_encoder_id`** _UUID_

ID of the affected encoder.

**`acs_system_id`** _UUID_

ID of the access system.

**`connected_account_id`** _UUID_

ID of the connected account.

**`created_at`** _Datetime_

Date and time at which the event was created.

**`event_id`** _UUID_

ID of the event.

**`event_type`** _Enum_

Value: `acs_encoder.removed`

**`occurred_at`** _Datetime_

Date and time at which the event occurred.

**`workspace_id`** _UUID_

ID of the [workspace](../../../core-concepts/workspaces/) associated with the event.

</details>

***

## Endpoints

[**`/acs/encoders/encode_access_method`**](encode_access_method.md)

Encodes an existing access method onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

[**`/acs/encoders/encode_credential`**](encode_credential.md)

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

[**`/acs/encoders/get`**](get.md)

Returns a specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

[**`/acs/encoders/list`**](list.md)

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).

[**`/acs/encoders/scan_credential`**](scan_credential.md)

Scans an encoded [acs\_credential](../../../capability-guides/access-systems/managing-credentials.md) from a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/).
