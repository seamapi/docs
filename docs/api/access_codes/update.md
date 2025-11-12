# Update an Access Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates a specified active or upcoming [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes).

See also [Modifying Access Codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/modifying-access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Updates a specified active or upcoming access code.

#### Code:

```javascript
await seam.accessCodes.update({
  access_code_id: "b854d7c9-d0d8-40a7-8a7c-cd3d167a6ce5",
  name: "My Updated Access Code",
  starts_at: "2025-06-19T08:26:41.000Z",
  ends_at: "2025-06-21T17:38:07.000Z",
  code: "4444",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates a specified active or upcoming access code.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/update" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_code_id": "b854d7c9-d0d8-40a7-8a7c-cd3d167a6ce5",
  "name": "My Updated Access Code",
  "starts_at": "2025-06-19T08:26:41.000Z",
  "ends_at": "2025-06-21T17:38:07.000Z",
  "code": "4444"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates a specified active or upcoming access code.

#### Code:

```python
seam.access_codes.update(
    access_code_id="b854d7c9-d0d8-40a7-8a7c-cd3d167a6ce5",
    name="My Updated Access Code",
    starts_at="2025-06-19T08:26:41.000Z",
    ends_at="2025-06-21T17:38:07.000Z",
    code="4444",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates a specified active or upcoming access code.

#### Code:

```ruby
seam.access_codes.update(
  access_code_id: "b854d7c9-d0d8-40a7-8a7c-cd3d167a6ce5",
  name: "My Updated Access Code",
  starts_at: "2025-06-19T08:26:41.000Z",
  ends_at: "2025-06-21T17:38:07.000Z",
  code: "4444",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates a specified active or upcoming access code.

#### Code:

```php
$seam->access_codes->update(
    access_code_id: "b854d7c9-d0d8-40a7-8a7c-cd3d167a6ce5",
    name: "My Updated Access Code",
    starts_at: "2025-06-19T08:26:41.000Z",
    ends_at: "2025-06-21T17:38:07.000Z",
    code: "4444"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates a specified active or upcoming access code.

#### Code:

```seam_cli
seam access-codes update --access_code_id "b854d7c9-d0d8-40a7-8a7c-cd3d167a6ce5" --name "My Updated Access Code" --starts_at "2025-06-19T08:26:41.000Z" --ends_at "2025-06-21T17:38:07.000Z" --code "4444"
```

#### Output:

```seam_cli
{}
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

**`access_code_id`** *String* (Required)

ID of the access code that you want to update.

---

**`allow_external_modification`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed. Default: `false`.

---

**`attempt_for_offline_device`** *Boolean*

---

**`code`** *String*

Code to be used for access.

---

**`device_id`** *String*

ID of the device containing the access code that you want to update.

---

**`ends_at`** *String*

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`is_external_modification_allowed`** *Boolean*

Indicates whether [external modification](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes#external-modification) of the code is allowed. Default: `false`.

---

**`is_managed`** *Boolean*

Indicates whether the access code is managed through Seam. Note that to convert an unmanaged access code into a managed access code, use `/access_codes/unmanaged/convert_to_managed`.

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

Name of the new access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.

Note that the name provided on Seam is used to identify the code on Seam and is not necessarily the name that will appear in the lock provider's app or on the device. This is because lock providers may have constraints on names, such as length, uniqueness, or characters that can be used. In addition, some lock providers may break down names into components such as `first_name` and `last_name`.

To provide a consistent experience, Seam identifies the code on Seam by its name but may modify the name that appears on the lock provider's app or on the device. For example, Seam may add additional characters or truncate the name to meet provider constraints.

To help your users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app or on the device as a separate property called `appearance`. This is an object with a `name` property and, optionally, `first_name` and `last_name` properties (for providers that break down a name into components).

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

**`type`** *String*

Type to which you want to convert the access code. To convert a time-bound access code to an ongoing access code, set `type` to `ongoing`. See also [Changing a time-bound access code to permanent access](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes/modifying-access-codes#special-case-2-changing-a-time-bound-access-code-to-permanent-access).

---

**`use_backup_access_code_pool`** *Boolean*

Indicates whether to use a [backup access code pool](https://docs.seam.co/latest/core-concepts/access-codes#backup-access-codes) provided by Seam. If `true`, you can use [`/access_codes/pull_backup_access_code`](https://docs.seam.co/latest/api/access_codes/pull_backup_access_code).

---

**`use_offline_access_code`** *Boolean*

{% hint style="warning" %}
**Deprecated**. Use `is_offline_access_code` instead.
{% endhint %}

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}

