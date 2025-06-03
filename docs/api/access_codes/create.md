# Create an Access Code

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Creates a new [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

{% tabs %}
{% tab title="Signature" %}
```
POST /access_codes/create ⇒ { access_code }
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

**`device_id`** *String* (Required)

ID of the device for which you want to create the new access code.

---

**`allow_external_modification`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

---

**`attempt_for_offline_device`** *Boolean*

---

**`code`** *String*

Code to be used for access.

---

**`common_code_key`** *String*

Key to identify access codes that should have the same code. Any two access codes with the same `common_code_key` are guaranteed to have the same `code`. See also [Creating and Updating Multiple Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md).

---

**`ends_at`** *String*

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`is_external_modification_allowed`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/api/access_codes#external-modification) of the code is allowed. Default: `false`.

---

**`is_offline_access_code`** *Boolean*

Indicates whether the access code is an [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes).

---

**`is_one_time_use`** *Boolean*

Indicates whether the [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) is a single-use access code.

---

**`max_time_rounding`** *String*

Maximum rounding adjustment. To create a daily-bound [offline access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/offline-access-codes) for devices that support this feature, set this parameter to `1d`.

---

**`name`** *String*

Name of the new access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes. Note that the name provided on Seam is used to identify the code on Seam and is not necessarily the name that will appear in the lock provider's app or on the device. This is because lock providers may have constraints on names, such as length, uniqueness, or characters that can be used. In addition, some lock providers may break down names into components such as `first_name` and `last_name`. To provide a consistent experience, Seam identifies the code on Seam by its name but may modify the name that appears on the lock provider's app or on the device. For example, Seam may add additional characters or truncate the name to meet provider constraints. To help your users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app or on the device as a separate property called `appearance`. This is an object with a `name` property and, optionally, `first_name` and `last_name` properties (for providers that break down a name into components).

---

**`prefer_native_scheduling`** *Boolean*

Indicates whether [native scheduling](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#native-scheduling) should be used for time-bound codes when supported by the provider. Default: `true`.

---

**`preferred_code_length`** *Number*

Preferred code length. Only applicable if you do not specify a `code`. If the affected device does not support the preferred code length, Seam reverts to using the shortest supported code length.

---

**`starts_at`** *String*

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`use_backup_access_code_pool`** *Boolean*

Indicates whether to use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. If `true`, you can use [`/access_codes/pull_backup_access_code`](https://docs.seam.co/latest/api-clients/access_codes/pull_backup_access_code).

---

**`use_offline_access_code`** *Boolean*

---


## Response

[access\_code](./)

