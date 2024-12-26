---
description: >-
  Update the starting and ending times for a set of linked access codes across
  multiple devices.
---

# Update Multiple Linked Access Codes

```
POST /access_codes/update ⇒ void
```

Updates the `starts_at` and `ends_at` timestamps of a specified group of [access codes](../../products/smart-locks/access-codes/) linked by a `common_code_key`, across multiple devices. You create these groups of access codes using [`/access_codes/create_multiple`](../../api-clients/access\_codes/create\_multiple.md), and all these codes have the same PIN code. See also [Creating and Updating Multiple Linked Access Codes](../../capability-guides/smart-locks/access-codes/creating-and-updating-multiple-linked-access-codes.md).

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Update the starting and ending times
# for a group of linked access codes,
# using the common_code_key to identify
# the group of access codes to update.
seam.access_codes.update_multiple(
  common_code_key = common_code_key,
  starts_at = "2024-11-15T12:00:00Z",
  ends_at = "2024-11-17T15:00:00Z"
)
```

**Response:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
# Update the starting and ending times
# for a group of linked access codes,
# using the common_code_key to identify
# the group of access codes to update.
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/update_multiple' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
    \"common_code_key\": \"${common_code_key}\",
    \"starts_at\": \"2024-11-15T12:00:00Z\",
    \"ends_at\": \"2024-11-17T15:00:00Z\"
}"
```

**Response:**

```json
{
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Update the starting and ending times
// for a group of linked access codes,
// using the common_code_key to identify
// the group of access codes to update.
await seam.accessCodes.updateMultiple({
  common_code_key: commonCodeKey,
  starts_at: "2024-11-15T12:00:00Z",
  ends_at: "2024-11-17T15:00:00Z"
});
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Update the starting and ending times
# for a group of linked access codes,
# using the common_code_key to identify
# the group of access codes to update.
client.access_codes.update_multiple(
  common_code_key: common_code_key,
  starts_at: "2024-11-15T12:00:00Z",
  ends_at: "2024-11-17T15:00:00Z"
)
```

**Response:**

```
void
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Update the starting and ending times
// for a group of linked access codes,
// using the common_code_key to identify
// the group of access codes to update.
$seam->access_codes->update_multiple(
  common_code_key: $common_code_key,
  starts_at: "2024-11-15T12:00:00Z",
  ends_at: "2024-11-17T15:00:00Z"
);
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Update the starting and ending times
// for a group of linked access codes,
// using the common_code_key to identify
// the group of access codes to update.
seam.AccessCodes.UpdateMultiple(
  commonCodeKey: commonCodeKey,
  startsAt: "2024-11-15T12:00:00Z",
  endsAt: "2024-11-17T15:00:00Z"
);
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Update the starting and ending times
// for a group of linked access codes,
// using the common_code_key to identify
// the group of access codes to update.
seam.accessCodes()
  .updateMultiple(AccessCodesUpdateMultipleRequest.builder()
    .commonCodeKey(commonCodeKey)
    .startsAt("2024-11-15T12:00:00Z")
    .endsAt("2024-11-17T15:00:00Z")
    .build());
```

**Response:**

```json
void
```
{% endtab %}

{% tab title="Go" %}
**Request:**

```go
// Update the starting and ending times
// for a group of linked access codes,
// using the common_code_key to identify
// the group of access codes to update.
client.AccessCodes.UpdateMultiple(
  context.Background(),
  &api.AccessCodesUpdateMultipleRequest{
    CommonCodeKey: commonCodeKey,
    StartsAt: api.String("2024-11-15T12:00:00Z"),
    EndsAt: api.String("2024-11-17T15:00:00Z"),
  },
)

if uErr != nil {
    return uErr
}

return nil
```

**Response:**

```json
void
```
{% endtab %}
{% endtabs %}

## Request Parameters

### `common_code_key`

Type: `string` Required: Yes

Key that links the group of access codes, assigned on creation by `/access_codes/create_multiple`.

***

### `starts_as`

Type: `string` Required: No

Date and time at which the validity of the linked access codes starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

***

### `ends_at`

Type: `string` Required: No

Date and time at which the validity of the linked access codes ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

***

## Return Type

void
