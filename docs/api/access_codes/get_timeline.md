# Get Access Code Timeline

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a chronological timeline of events for an access code.

The timeline includes state changes (create, update, delete), delivery lifecycle events
(programming attempts, success/failure), and related device events.


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_code_id`** *String* (Required)

ID of the access code for which to retrieve the timeline.

---

**`after`** *String*

Only return events that occurred after this timestamp (ISO 8601 format).

---

**`before`** *String*

Only return events that occurred before this timestamp (ISO 8601 format).

---

**`event_types`** *Array* *of Enums*

Filter to only return specific event types.
<details>

<summary>Enum values</summary>

Possible enum values:
- <code>access_code.created</code>
- <code>access_code.changed</code>
- <code>access_code.deleted</code>
- <code>access_code.modified_external_to_seam</code>
- <code>access_code.deleted_external_to_seam</code>
- <code>access_code.scheduled_on_device</code>
- <code>access_code.set_on_device</code>
- <code>access_code.removed_from_device</code>
- <code>access_code.delay_in_setting_on_device</code>
- <code>access_code.failed_to_set_on_device</code>
- <code>access_code.delay_in_removing_from_device</code>
- <code>access_code.failed_to_remove_from_device</code>
- <code>internal.access_code.programming_started</code>
- <code>internal.access_code.programming_finished</code>
- <code>access_code.backup_access_code_pulled</code>
- <code>access_code.unmanaged.converted_to_managed</code>
- <code>access_code.unmanaged.failed_to_convert_to_managed</code>
</details>

---

**`limit`** *Number*

Maximum number of timeline events to return (default 50, max 200).

---


## Response

{% hint style="success" %}
Returns:
**Array of [unknowns](./)**

{% endhint %}

