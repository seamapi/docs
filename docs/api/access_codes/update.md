# Update an Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

See also [Modifying Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/modifying-access-codes).

{% tabs %}
{% tab title="Signature" %}
```
PUT /access_codes/update ⇒ void
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
<tr><th style="width:25%">Parameter</th><th>Description</th></tr>
<tr><td><strong><code>access_code_id</code></strong> <i>String</i> (Required)</td>
<td>

ID of the access code that you want to update.
</td></tr>
<tr><td><strong><code>allow_external_modification</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.
</td></tr>
<tr><td><strong><code>attempt_for_offline_device</code></strong> <i>Boolean</i></td>
<td>
</td></tr>
<tr><td><strong><code>code</code></strong> <i>String</i></td>
<td>

Code to be used for access.
</td></tr>
<tr><td><strong><code>device_id</code></strong> <i>String</i></td>
<td>

ID of the device containing the access code that you want to update.
</td></tr>
<tr><td><strong><code>ends_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.
</td></tr>
<tr><td><strong><code>is_external_modification_allowed</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.
</td></tr>
<tr><td><strong><code>is_managed</code></strong> <i>Boolean</i></td>
<td>

Indicates whether the access code is managed through Seam. Note that to convert an unmanaged access code into a managed access code, use `/access_codes/unmanaged/convert_to_managed`.
</td></tr>
<tr><td><strong><code>is_offline_access_code</code></strong> <i>Boolean</i></td>
<td>

Indicates whether the access code is an [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes).
</td></tr>
<tr><td><strong><code>is_one_time_use</code></strong> <i>Boolean</i></td>
<td>

Indicates whether the [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) is a single-use access code.
</td></tr>
<tr><td><strong><code>max_time_rounding</code></strong> <i>String</i></td>
<td>

Maximum rounding adjustment. To create a daily-bound [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) for devices that support this feature, set this parameter to `1d`.
</td></tr>
<tr><td><strong><code>name</code></strong> <i>String</i></td>
<td>

Name of the new access code.
</td></tr>
<tr><td><strong><code>prefer_native_scheduling</code></strong> <i>Boolean</i></td>
<td>

Indicates whether [native scheduling](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) should be used for time-bound codes when supported by the provider. Default: `true`.
</td></tr>
<tr><td><strong><code>preferred_code_length</code></strong> <i>Number</i></td>
<td>

Preferred code length. Only applicable if you do not specify a `code`. If the affected device does not support the preferred code length, Seam reverts to using the shortest supported code length.
</td></tr>
<tr><td><strong><code>starts_at</code></strong> <i>String</i></td>
<td>

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
</td></tr>
<tr><td><strong><code>type</code></strong> <i>String</i></td>
<td>

Type to which you want to convert the access code. To convert a time-bound access code to an ongoing access code, set `type` to `ongoing`. See also [Changing a time-bound access code to permanent access](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/modifying-access-codes#special-case-2-changing-a-time-bound-access-code-to-permanent-access).
</td></tr>
<tr><td><strong><code>use_backup_access_code_pool</code></strong> <i>Boolean</i></td>
<td>

Indicates whether to use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. If `true`, you can use [`/access_codes/pull_backup_access_code`](../../api-clients/access_codes/pull_backup_access_code.md).
</td></tr>
<tr><td><strong><code>use_offline_access_code</code></strong> <i>Boolean</i></td>
<td>
</td></tr>
</table>

## Response

void
