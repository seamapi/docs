# Phones

## The phone Object

- [Properties](./#properties)
- [Errors](./#errors)
- [Warnings](./#warnings)
- [Events](./#events)
- [Endpoints](./#endpoints)


Represents an app user's mobile phone.

{% tabs %}
{% tab title="JSON" %}
```json
{
  created_at: [example value],
  custom_metadata: [example value],
  device_id: [example value],
  device_type: [example value],
  display_name: [example value],
  errors: [example value],
  nickname: [example value],
  properties: [example value],
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
<tr><td><strong><code>created_at</code></strong> <i>Datetime</i></td>
<td>
Date and time at which the `phone` was created.


</td></tr>

<tr><td><strong><code>custom_metadata</code></strong> <i>Record</i></td>
<td>
Optional [custom metadata](../../core-concepts/devices/adding-custom-metadata-to-a-device.md) for the phone.


</td></tr>

<tr><td><strong><code>device_id</code></strong> <i>UUID</i></td>
<td>
ID of the `phone`.


</td></tr>

<tr><td><strong><code>device_type</code></strong> <i>Enum</i></td>
<td>
Type of phone.

<details>

<summary>Enum values</summary>

- `ios_phone`
- `android_phone`
</details>


</td></tr>

<tr><td><strong><code>display_name</code></strong> <i>String</i></td>
<td>
Display name of the phone. Defaults to `nickname` (if it is set) or `properties.appearance.name` otherwise. Enables administrators and users to identify the phone easily, especially when there are numerous phones.


</td></tr>

<tr><td><strong><code>errors</code></strong> <i>List</i> <i>of Objects</i></td>
<td>
Errors associated with the `phone`.

<details>

<summary>Child Object Properties</summary>

- <strong><code>error_code</code></strong> <i>String</i>



- <strong><code>message</code></strong> <i>String</i>


</details>


</td></tr>

<tr><td><strong><code>nickname</code></strong> <i>String</i></td>
<td>
Optional nickname to describe the phone, settable through Seam.


</td></tr>

<tr><td><strong><code>properties</code></strong> <i>Object</i></td>
<td>
Properties of the phone.

<details>

<summary>Child Properties</summary>

- <strong><code>assa_abloy_credential_service_metadata</code></strong> <i>Object</i>

  ASSA ABLOY Credential Service metadata for the phone.



- <strong><code>assa_abloy_credential_service_metadata.endpoints</code></strong> <i>List</i> <i>of Objects</i>

  Endpoints associated with the phone.


- <strong><code>endpoint_id</code></strong> <i>String</i>

  ID of the associated endpoint.



- <strong><code>is_active</code></strong> <i>Boolean</i>

  Indicated whether the endpoint is active.




- <strong><code>assa_abloy_credential_service_metadata.has_active_endpoint</code></strong> <i>Boolean</i>

  Indicates whether the credential service has active endpoints associated with the phone.



- <strong><code>salto_space_credential_service_metadata</code></strong> <i>Object</i>

  Salto Space credential service metadata for the phone.



- <strong><code>salto_space_credential_service_metadata.has_active_phone</code></strong> <i>Boolean</i>

  Indicates whether the credential service has an active associated phone.


</details>


</td></tr>

<tr><td><strong><code>warnings</code></strong> <i>List</i> <i>of Objects</i></td>
<td>
Warnings associated with the `phone`.

<details>

<summary>Child Object Properties</summary>

- <strong><code>message</code></strong> <i>String</i>



- <strong><code>warning_code</code></strong> <i>String</i>


</details>


</td></tr>

<tr><td><strong><code>workspace_id</code></strong> <i>UUID</i></td>
<td>
ID of the [workspace](../../core-concepts/workspaces/README.md) that contains the `phone`.


</td></tr>

</table>

## Events

<table>
<tr><th width="25%">Event</th><th>Description</th></tr>
<tr><td><strong><code>phone.deactivated</code></strong></td>
<td>
A phone device was deactivated.

<details>

<summary>Properties</summary>

- <strong><code>created_at</code></strong> <i>Datetime</i>

  Date and time at which the event was created.



- <strong><code>device_id</code></strong> <i>UUID</i>

  ID of the [device](../../core-concepts/devices/README.md).



- <strong><code>event_id</code></strong> <i>UUID</i>

  ID of the event.



- <strong><code>event_type</code></strong> <i>String</i>



- <strong><code>occurred_at</code></strong> <i>Datetime</i>

  Date and time at which the event occurred.



- <strong><code>workspace_id</code></strong> <i>UUID</i>

  ID of the [workspace](../../core-concepts/workspaces/README.md).


</details>

</td></tr>
</table>

## Endpoints

<table>
<tr><th width="25%">Endpoint</th><th>Description</th></tr>

<tr><td><a href="./deactivate.md"><strong><code>/phones/deactivate</code></strong></a></td>

<td>Deactivates a phone, which is useful, for example, if a user has lost their phone. For more information, see [App User Lost Phone Process](../../capability-guides/mobile-access/managing-phones-for-a-user-identity.md#app-user-lost-phone-process).</td></tr>


<tr><td><a href="./get.md"><strong><code>/phones/get</code></strong></a></td>

<td>Returns a single phone entry matching the provided `device_id`.</td></tr>


<tr><td><a href="./list.md"><strong><code>/phones/list</code></strong></a></td>

<td>Returns a list of all phones. To filter the list of returned phones by a specific owner user identity or credential, include the `owner_user_identity_id` or `acs_credential_id`, respectively, in the request body.</td></tr>

</table>
