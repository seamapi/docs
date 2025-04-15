# Create Multiple Linked Access Codes

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates new [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.

Users with more than one door lock in a property may want to create groups of linked access codes, all of which have the same code (PIN). For example, a short-term rental host may want to provide guests the same PIN for both a front door lock and a back door lock.

If you specify a custom code, Seam assigns this custom code to each of the resulting access codes. However, in this case, Seam does not link these access codes together with a `common_code_key`. That is, `common_code_key` remains null for these access codes.

If you want to change these access codes that are not linked by a `common_code_key`, you cannot use `/access_codes/update_multiple`. However, you can update each of these access codes individually, using `/access_codes/update`.

See also [Creating and Updating Multiple Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md).

{% tabs %}
{% tab title="Signature" %}
```
PUT /access_codes/create_multiple ⇒ { access_codes: [access_code, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

<table>
<tr><th width="25%">Property</th><th>Description</th></tr>
<tr><td><strong><code>device_ids</code></strong> <i>Array</i> <i>of UUIDs</i> (Required)</td>
<td>

IDs of the devices for which to create the new access codes.

---
</td></tr>
<tr><td><strong><code>allow_external_modification</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

---
</td></tr>
<tr><td><strong><code>attempt_for_offline_device</code></strong> <i>Boolean</i></td>
<td>

---
</td></tr>
<tr><td><strong><code>behavior_when_code_cannot_be_shared</code></strong> <i>String</i></td>
<td>

Desired behavior if any device cannot share a code. If `throw` (default), no access codes will be created if any device cannot share a code. If `create_random_code`, a random code will be created on devices that cannot share a code.

---
</td></tr>
<tr><td><strong><code>code</code></strong> <i>String</i></td>
<td>

Code to be used for access.

---
</td></tr>
<tr><td><strong><code>ends_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---
</td></tr>
<tr><td><strong><code>is_external_modification_allowed</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

---
</td></tr>
<tr><td><strong><code>is_offline_access_code</code></strong> <i>Boolean</i></td>
<td>

Indicates whether the access code is an [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes).

---
</td></tr>
<tr><td><strong><code>is_one_time_use</code></strong> <i>Boolean</i></td>
<td>

Indicates whether the [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) is a single-use access code.

---
</td></tr>
<tr><td><strong><code>max_time_rounding</code></strong> <i>String</i></td>
<td>

Maximum rounding adjustment. To create a daily-bound [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) for devices that support this feature, set this parameter to `1d`.

---
</td></tr>
<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>

Name of the new access code.

---
</td></tr>
<tr><td><strong><code>prefer_native_scheduling</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [native scheduling](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) should be used for time-bound codes when supported by the provider. Default: `true`.

---
</td></tr>
<tr><td><strong><code>preferred_code_length</code></strong> <i>Number</i></td>
<td>

Preferred code length. Only applicable if you do not specify a `code`. If the affected device does not support the preferred code length, Seam reverts to using the shortest supported code length.

---
</td></tr>
<tr><td><strong><code>starts_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---
</td></tr>
<tr><td><strong><code>use_backup_access_code_pool</code></strong> <i>Boolean</i></td>
<td>

Indicates whether to use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. If `true`, you can use [`/access_codes/pull_backup_access_code`](../../api-clients/access_codes/pull_backup_access_code.md).

---
</td></tr>
<tr><td><strong><code>use_offline_access_code</code></strong> <i>Boolean</i></td>
<td>

---
</td></tr>
</table>

## Response

Array of [access\_codes](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of access_code
}
```
{% endtab %}
{% endtabs %}
