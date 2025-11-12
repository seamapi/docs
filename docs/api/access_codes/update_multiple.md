# Update Multiple Linked Access Codes

- [Request Parameters](#request-parameters)
- [Response](#response)

Updates [access codes](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes) that share a common code across multiple devices.

Specify the `common_code_key` to identify the set of access codes that you want to update.

See also [Update Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md#update-linked-access-codes).


{% tabs %}
{% tab title="JavaScript" %}

Updates access codes that share a common code across multiple devices.

#### Code:

```javascript
await seam.accessCodes.updateMultiple({
  ends_at: "2025-06-22T05:05:47.000Z",
  starts_at: "2025-06-18T19:14:13.000Z",
  name: "My Updated Linked Access Code",
  common_code_key:
    "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Updates access codes that share a common code across multiple devices.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/update_multiple" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "ends_at": "2025-06-22T05:05:47.000Z",
  "starts_at": "2025-06-18T19:14:13.000Z",
  "name": "My Updated Linked Access Code",
  "common_code_key": "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Updates access codes that share a common code across multiple devices.

#### Code:

```python
seam.access_codes.update_multiple(
    ends_at="2025-06-22T05:05:47.000Z",
    starts_at="2025-06-18T19:14:13.000Z",
    name="My Updated Linked Access Code",
    common_code_key="auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Updates access codes that share a common code across multiple devices.

#### Code:

```ruby
seam.access_codes.update_multiple(
  ends_at: "2025-06-22T05:05:47.000Z",
  starts_at: "2025-06-18T19:14:13.000Z",
  name: "My Updated Linked Access Code",
  common_code_key: "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000",
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Updates access codes that share a common code across multiple devices.

#### Code:

```php
$seam->access_codes->update_multiple(
    ends_at: "2025-06-22T05:05:47.000Z",
    starts_at: "2025-06-18T19:14:13.000Z",
    name: "My Updated Linked Access Code",
    common_code_key: "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000"
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Updates access codes that share a common code across multiple devices.

#### Code:

```seam_cli
seam access-codes update-multiple --ends_at "2025-06-22T05:05:47.000Z" --starts_at "2025-06-18T19:14:13.000Z" --name "My Updated Linked Access Code" --common_code_key "auto_set_by_create_multiple_550e8400-e29b-41d4-a716-446655440000"
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

**`common_code_key`** *String* (Required)

Key that links the group of access codes, assigned on creation by `/access_codes/create_multiple`.

---

**`ends_at`** *String*

Date and time at which the validity of the new access code ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`name`** *String*

Name of the new access code. Enables administrators and users to identify the access code easily, especially when there are numerous access codes.

Note that the name provided on Seam is used to identify the code on Seam and is not necessarily the name that will appear in the lock provider's app or on the device. This is because lock providers may have constraints on names, such as length, uniqueness, or characters that can be used. In addition, some lock providers may break down names into components such as `first_name` and `last_name`.

To provide a consistent experience, Seam identifies the code on Seam by its name but may modify the name that appears on the lock provider's app or on the device. For example, Seam may add additional characters or truncate the name to meet provider constraints.

To help your users identify codes set by Seam, Seam provides the name exactly as it appears on the lock provider's app or on the device as a separate property called `appearance`. This is an object with a `name` property and, optionally, `first_name` and `last_name` properties (for providers that break down a name into components).

---

**`starts_at`** *String*

Date and time at which the validity of the new access code starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

