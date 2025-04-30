---
description: Report access code-related constraints for a device.
---

# Report Device Access Code Constraints

```
POST /access_codes/report_device_constraints ⇒ void
```

Enables you to report access code-related constraints for a device.

{% hint style="info" %}
Currently, this endpoint supports reporting supported code length constraints for SmartThings devices. Specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.
{% endhint %}

## Report Supported Code Lengths

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.access_codes.report_device_constraints(
  device_id = "11111111-1111-1111-1111-444444444444",
  supported_code_lengths = [4, 5, 6]
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
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/report_device_constraints' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "11111111-1111-1111-1111-444444444444",
    "supported_code_lengths": [4, 5, 6]
}'
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
await seam.accessCodes.reportDeviceConstraints({
  device_id: "11111111-1111-1111-1111-444444444444",
  supported_code_lengths: [4, 5, 6]
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
client.access_codes.report_device_constraints(
  device_id: "11111111-1111-1111-1111-444444444444",
  supported_code_lengths: [4, 5, 6]
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
$seam->access_codes->report_device_constraints(
  device_id: "11111111-1111-1111-1111-444444444444",
  supported_code_lengths: [4, 5, 6]
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
List<int> codeLengths = new() { 4, 5, 6 };

seam.AccessCodes.reportDeviceConstraints(
  deviceId: "11111111-1111-1111-1111-444444444444",
  supportedCodeLengths: codeLengths
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
seam.accessCodes()
  .reportDeviceConstraints(AccessCodesReportDeviceConstraintsRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .supportedCodeLengths(List.of(4, 5, 6))
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
codeLengths := []int { 4, 5, 6 }

client.AccessCodes.ReportDeviceConstraints(
  context.Background(),
  &api.AccessCodesReportDeviceConstraintsRequest{
    DeviceId: "11111111-1111-1111-1111-444444444444",
    SupportedCodeLengths: codeLengths,
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

## Report Minimum and Maximum Supported Code Lengths

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.access_codes.report_device_constraints(
  device_id = "11111111-1111-1111-1111-444444444444",
  min_code_length = 4,
  max_code_length = 6
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
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/report_device_constraints' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_id": "11111111-1111-1111-1111-444444444444",
    "min_code_length": 4,
    "max_code_length": 6
}'
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
await seam.accessCodes.reportDeviceConstraints({
  device_id: "11111111-1111-1111-1111-444444444444",
  min_code_length: 4,
  max_code_length: 6
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
client.access_codes.report_device_constraints(
  device_id: "11111111-1111-1111-1111-444444444444",
  min_code_length: 4,
  max_code_length: 6
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
$seam->access_codes->report_device_constraints(
  device_id: "11111111-1111-1111-1111-444444444444",
  min_code_length: 4,
  max_code_length: 6
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
seam.AccessCodes.reportDeviceConstraints(
  deviceId: "11111111-1111-1111-1111-444444444444",
  minCodeLength: 4,
  maxCodeLength: 6
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
seam.accessCodes()
  .reportDeviceConstraints(AccessCodesReportDeviceConstraintsRequest.builder()
    .deviceId("11111111-1111-1111-1111-444444444444")
    .minCodeLength(4)
    .maxCodeLength(6)
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
client.AccessCodes.ReportDeviceConstraints(
  context.Background(),
  &api.AccessCodesReportDeviceConstraintsRequest{
    DeviceId: "11111111-1111-1111-1111-444444444444",
    MinCodeLength: 4,
    MaxCodeLength: 6
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

### `device_id`

Type: `string` Required: Yes

ID of the device for which to report constraints.

***

### `supported_code_lengths`

Type: `string` Required: No

Array of supported code lengths as integers between 4 and 20, inclusive. You can specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.

***

### `min_code_length`

Type: `integer` Required: No

Minimum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

***

### `max_code_length`

Type: `integer` Required: No

Maximum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

## Return Type

void
