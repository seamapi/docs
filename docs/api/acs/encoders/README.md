# Encoders

## The acs_encoder Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents a hardware device that encodes [credential](../../../capability-guides/access-systems/managing-credentials.md) data onto physical cards within an [access control system](https://docs.seam.co/latest/capability-guides/access-systems).

Some access control systems require credentials to be encoded onto plastic key cards using a card encoder. This process involves the following two key steps:

1. Credential creation
   Configure the access parameters for the credential.
2. Card encoding
   Write the credential data onto the card using a compatible card encoder.

Separately, the Seam API also supports card scanning, which enables you to scan and read the encoded data on a card. You can use this action to confirm consistency with access control system records or diagnose discrepancies if needed.

 See [Working with Card Encoders and Scanners](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

To verify if your access control system requires a card encoder, see the corresponding [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

{% tabs %}
{% tab title="JSON" %}
```json
{
  acs_encoder_id: [example value],
  acs_system_id: [example value],
  created_at: [example value],
  display_name: [example value],
  errors: [example value],
  workspace_id: [example value]
}
```
{% endtab %}
{% endtabs %}

---

## Properties

<table>
<tr><th>** Property **</th><th>** Description **</th></tr>
<tr><td>**`acs_encoder_id`** *UUID*</td>
<td>
ID of the [encoder](https://docs.seam.co/latest/capability-guides/access-systems/working-with-card-encoders-and-scanners.


</td></tr>

<tr><td>**`acs_system_id`** *UUID*</td>
<td>
ID of the [access control system](https://docs.seam.co/latest/capability-guides/access-systems) that contains the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


</td></tr>

<tr><td>**`created_at`** *Datetime*</td>
<td>
Date and time at which the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was created.


</td></tr>

<tr><td>**`display_name`** *String*</td>
<td>
Display name for the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


</td></tr>

<tr><td>**`errors`** *List* *of Objects*</td>
<td>
Errors associated with the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).

<details>

<summary>Child Object Properties</summary>

- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which Seam created the error.



- <strong><code>error_code</code></strong> <i>String</i>

  Unique identifier of the type of error. Enables quick recognition and categorization of the issue.



- <strong><code>message</code></strong> <i>String</i>

  Detailed description of the error. Provides insights into the issue and potentially how to rectify it.


</details>


</td></tr>

<tr><td>**`workspace_id`** *UUID*</td>
<td>
ID of the [workspace](../../../core-concepts/workspaces/README.md) that contains the [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


</td></tr>

</table>

## Events

**`acs_encoder.added`**

An [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was added.

<details>

<summary>Properties</summary>

- <strong><code>acs_encoder_id</code></strong> <i>UUID</i>

  ID of the [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).



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

**`acs_encoder.removed`**

An [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md) was removed.

<details>

<summary>Properties</summary>

- <strong><code>acs_encoder_id</code></strong> <i>UUID</i>

  ID of the [ACS encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).



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


[**`/acs/encoders/encode_credential`**](./encode_credential.md)

Encodes an existing [credential](../../../capability-guides/access-systems/managing-credentials.md) onto a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


[**`/acs/encoders/list`**](./list.md)

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


[**`/acs/encoders/scan_credential`**](./scan_credential.md)

Scans an encoded [acs_credential](../../../capability-guides/access-systems/managing-credentials.md) from a plastic card placed on the specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


