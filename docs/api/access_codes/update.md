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

**`access_code_id`**  (Required)

ID of the access code that you want to update.

---

**`allow_external_modification`** 

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

---

**`attempt_for_offline_device`** 

---

**`code`** 

Code to be used for access.

---

**`device_id`** 

ID of the device containing the access code that you want to update.

---

**`ends_at`** 

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`is_external_modification_allowed`** 

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

---

**`is_managed`** 

Indicates whether the access code is managed through Seam. Note that to convert an unmanaged access code into a managed access code, use `/access_codes/unmanaged/convert_to_managed`.

---

**`is_offline_access_code`** 

Indicates whether the access code is an [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes).

---

**`is_one_time_use`** 

Indicates whether the [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) is a single-use access code.

---

**`max_time_rounding`** 

Maximum rounding adjustment. To create a daily-bound [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) for devices that support this feature, set this parameter to `1d`.

---

**`name`** 

Name of the new access code.

---

**`prefer_native_scheduling`** 

Indicates whether [native scheduling](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) should be used for time-bound codes when supported by the provider. Default: `true`.

---

**`preferred_code_length`** 

Preferred code length. Only applicable if you do not specify a `code`. If the affected device does not support the preferred code length, Seam reverts to using the shortest supported code length.

---

**`starts_at`** 

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`type`** 

Type to which you want to convert the access code. To convert a time-bound access code to an ongoing access code, set `type` to `ongoing`. See also [Changing a time-bound access code to permanent access](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/modifying-access-codes#special-case-2-changing-a-time-bound-access-code-to-permanent-access).

---

**`use_backup_access_code_pool`** 

Indicates whether to use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. If `true`, you can use [`/access_codes/pull_backup_access_code`](../../api-clients/access_codes/pull_backup_access_code.md).

---

**`use_offline_access_code`** 

---


## Response

void
