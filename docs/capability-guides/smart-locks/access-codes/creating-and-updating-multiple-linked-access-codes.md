---
description: >-
  Learn how to create and update groups of access codes with the same code for
  properties with multiple door locks.
---

# Creating and Updating Multiple Linked Access Codes

Users with more than one door lock in a property may want to create groups of linked access codes, all of which have the same code (PIN). For example, a short-term rental host may want to provide guests the same PIN for both a front door lock and a back door lock. In this case, use [`/access_codes/create_multiple`](../../../api/access_codes/create_multiple.md). Specify the `device_id` of each device for which you want to create linked access codes. You can also include additional optional properties, such as the following:

* A name to apply to all of the access codes.
* The `preferred_code_length`.
* Whether to throw an error or create a random code if any of the included devices cannot share a code.
* Starting and ending timestamps if you want to create time-bound access codes.

When you use `/access_codes/create_multiple`, Seam assigns a `common_code_key` to all of the created access codes and returns this key. The `common_code_key` identifies all the access codes within this linked group.

Then, you can change the starting or ending time for the group of access codes—for example, if a short-term rental guest requests an early check-in or late checkout. To update a group of linked access codes, use [`/access_codes/update_multiple`](../../../api/access_codes/update_multiple.md), specifying the `common_code_key` of the linked access code group, along with the replacement starting and ending timestamps.

***

## Specifying Custom Codes

When you use `/access_codes/create_multiple`, you can specify a custom `code`. Seam assigns this custom `code` to each of the resulting access codes. However, in this case, Seam does not link these access codes together with a `common_code_key`. That is, `common_code_key` remains null for these access codes.

If you want to change these access codes that are not linked by a `common_code_key`, you cannot use `/access_codes/update_multiple`. However, you can update each of these access codes individually, using [`/access_codes/update`](../../../api/access_codes/update.md).

***

## Create Linked Access Codes

The following example creates two linked access codes for two devices.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Create the group of linked access codes.
# Each returned access code includes a common_code_key.
seam.access_codes.create_multiple(
  device_ids = [
    "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
    "d87eea5d-71c6-4633-a966-396c5ac51177"
  ],
  name = "Jane's reservation",
  starts_at = "2024-11-15T15:00:00Z",
  ends_at = "2024-11-17T11:00:00Z",
  preferred_code_length = 4
)
```

**Response:**

```
[
  AccessCode(
    access_code_id='4ae69d7a-de72-4bb0-a32e-afc2ac025e2e',
    name="Jane's reservation",
    device_id='8e94044d-a4d1-4691-9f7e-e97d3e8a0b73',
    code='2709',
    common_code_key='auto_set_by_create_multiple_a11a027a-5070-47f5-aabf-279051117b0d',
    starts_at='2024-11-15T15:00:00.000Z',
    ends_at='2024-11-17T11:00:00.000Z',
    ...
  ),
  AccessCode(
    access_code_id='adcd39ff-a334-4890-9904-0c056d8f8f8c',
    name="Jane's reservation",
    device_id='d87eea5d-71c6-4633-a966-396c5ac51177',
    code='2709',
    common_code_key='auto_set_by_create_multiple_a11a027a-5070-47f5-aabf-279051117b0d',
    starts_at='2024-11-15T15:00:00.000Z',
    ends_at='2024-11-17T11:00:00.000Z',
    ...
  )
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```sh
# Create the group of linked access codes.
# Each returned access code includes a common_code_key.
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/create_multiple' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "device_ids": [
      "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
      "d87eea5d-71c6-4633-a966-396c5ac51177"
    ],
    "name": "Jane'\''s reservation",
    "starts_at": "2024-11-15T15:00:00Z",
    "ends_at": "2024-11-17T11:00:00Z",
    "preferred_code_length": 4
}'
```

**Response:**

```json
{
  "access_codes": [
    {
      "access_code_id": "d7369c78-77a5-4c95-b6f0-d218e9eb82e0",
      "name": "Jane's reservation",
      "device_id": "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
      "code": "2156",
      "common_code_key": "auto_set_by_create_multiple_ba3a361f-4acb-4122-9cce-12b164e70554",
      "starts_at": "2024-11-15T15:00:00.000Z",
      "ends_at": "2024-11-17T11:00:00.000Z",
      ...
    },
    {
      "access_code_id": "0f14fed0-00f0-49bf-bfee-262120844b5a",
      "name": "Jane's reservation",
      "device_id": "d87eea5d-71c6-4633-a966-396c5ac51177",
      "code": "2156",
      "common_code_key": "auto_set_by_create_multiple_ba3a361f-4acb-4122-9cce-12b164e70554",
      "starts_at": "2024-11-15T15:00:00.000Z",
      "ends_at": "2024-11-17T11:00:00.000Z",
      ...
    }
  ],
  "ok":true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
// Create the group of linked access codes.
// Each returned access code includes a common_code_key.
await seam.accessCodes.createMultiple({
  device_ids: [
    "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
    "d87eea5d-71c6-4633-a966-396c5ac51177"
  ],
  name: "Jane's reservation",
  starts_at: "2024-11-15T15:00:00Z",
  ends_at: "2024-11-17T11:00:00Z",
  preferred_code_length: 4
});
```

**Response:**

```json
[
  {
    access_code_id: 'a1c682b1-c909-473f-926a-442a4ffc54c2',
    name: "Jane's reservation",
    device_id: '8e94044d-a4d1-4691-9f7e-e97d3e8a0b73',
    code: '5974',
    common_code_key: 'auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7',
    starts_at: '2024-12-15T15:00:00.000Z',
    ends_at: '2024-12-17T11:00:00.000Z',
    ...
  },
  {
    access_code_id: '49261a24-103c-4880-8e58-d1d98f301ba7',
    name: "Jane's reservation",
    device_id: 'd87eea5d-71c6-4633-a966-396c5ac51177',
    code: '5974',
    common_code_key: 'auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7',
    starts_at: '2024-12-15T15:00:00.000Z',
    ends_at: '2024-12-17T11:00:00.000Z',
    ...
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
# Create the group of linked access codes.
# Each returned access code includes a common_code_key.
client.access_codes.create_multiple(
  device_ids: [
    "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
    "d87eea5d-71c6-4633-a966-396c5ac51177"
  ],
  name: "Jane's reservation",
  starts_at: "2024-11-15T15:00:00Z",
  ends_at: "2024-11-17T11:00:00Z",
  preferred_code_length: 4
)
```

**Response:**

```
<Seam::AccessCode:0x00438
  access_code_id="a1c682b1-c909-473f-926a-442a4ffc54c2"
  name="Jane's reservation"
  device_id="8e94044d-a4d1-4691-9f7e-e97d3e8a0b73"
  code="5974"
  common_code_key="auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7"
  starts_at=2024-12-15 15:00:00 UTC
  ends_at=2024-12-17 11:00:00 UTC
  ...
>,
<Seam::AccessCode:0x00438
  access_code_id="49261a24-103c-4880-8e58-d1d98f301ba7"
  name="Jane's reservation"
  device_id="d87eea5d-71c6-4633-a966-396c5ac51177"
  code="5974"
  common_code_key="auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7"
  starts_at=2024-12-15 15:00:00 UTC
  ends_at=2024-12-17 11:00:00 UTC
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
// Create the group of linked access codes.
// Each returned access code includes a common_code_key.
$seam->access_codes->create_multiple(
  device_ids: [
    "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
    "d87eea5d-71c6-4633-a966-396c5ac51177"
  ],
  name: "Jane's reservation",
  starts_at: "2024-11-15T15:00:00Z",
  ends_at: "2024-11-17T11:00:00Z",
  preferred_code_length: 4
);
```

**Response:**

```json
[
  {
    "access_code_id": "a1c682b1-c909-473f-926a-442a4ffc54c2",
    "name": "Jane's reservation",
    "device_id": "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
    "code": "5974",
    "common_code_key": "auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7",
    "starts_at": "2024-12-15T15:00:00.000Z",
    "ends_at": "2024-12-17T11:00:00.000Z",
    ...
  },
  {
    "access_code_id": "49261a24-103c-4880-8e58-d1d98f301ba7",
    "name": "Jane's reservation",
    "device_id": "d87eea5d-71c6-4633-a966-396c5ac51177",
    "code": "5974",
    "common_code_key": "auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7",
    "starts_at": "2024-12-15T15:00:00.000Z",
    "ends_at": "2024-12-17T11:00:00.000Z",
    ...
  }
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
// Create the group of linked access codes.
// Each returned access code includes a common_code_key.
seam.AccessCodes.CreateMultiple(
  deviceIds: new List<string>(new string[] {
    "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
   "d87eea5d-71c6-4633-a966-396c5ac51177"
  }),
  name: "Jane's reservation",
  startsAt: "2024-11-15T15:00:00Z",
  endsAt: "2024-11-17T11:00:00Z",
  preferredCodeLength: 4
);
```

**Response:**

```json
[
  {
    "access_code_id": "a1c682b1-c909-473f-926a-442a4ffc54c2",
    "name": "Jane's reservation",
    "device_id": "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
    "code": "5974",
    "common_code_key": "auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7",
    "starts_at": "2024-12-15T15:00:00.000Z",
    "ends_at": "2024-12-17T11:00:00.000Z",
    ...
  },
  {
    "access_code_id": "49261a24-103c-4880-8e58-d1d98f301ba7",
    "name": "Jane's reservation",
    "device_id": "d87eea5d-71c6-4633-a966-396c5ac51177",
    "code": "5974",
    "common_code_key": "auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7",
    "starts_at": "2024-12-15T15:00:00.000Z",
    "ends_at": "2024-12-17T11:00:00.000Z",
    ...
  }
]
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
// Create the group of linked access codes.
// Each returned access code includes a common_code_key.
seam.accessCodes()
  .createMultiple(AccessCodesCreateMultipleRequest.builder()
    .deviceIds(new ArrayList<>(Arrays.asList(
      "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
      "d87eea5d-71c6-4633-a966-396c5ac51177"
    )))
    .name("Jane's reservation")
    .startsAt("2024-11-15T15:00:00Z")
    .endsAt("2024-11-17T11:00:00Z")
    .preferredCodeLength(4)
    .build());
```

**Response:**

```json
[
  {
    "access_code_id": "a1c682b1-c909-473f-926a-442a4ffc54c2",
    "name": "Jane's reservation",
    "device_id": "8e94044d-a4d1-4691-9f7e-e97d3e8a0b73",
    "code": "5974",
    "common_code_key": "auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7",
    "starts_at": "2024-12-15T15:00:00.000Z",
    "ends_at": "2024-12-17T11:00:00.000Z",
    ...
  },
  {
    "access_code_id": "49261a24-103c-4880-8e58-d1d98f301ba7",
    "name": "Jane's reservation",
    "device_id": "d87eea5d-71c6-4633-a966-396c5ac51177",
    "code": "5974",
    "common_code_key": "auto_set_by_create_multiple_72f81ee3-997f-4fdc-81d0-289dabc28ae7",
    "starts_at": "2024-12-15T15:00:00.000Z",
    "ends_at": "2024-12-17T11:00:00.000Z",
    ...
  }
]
```
{% endtab %}


{% endtabs %}

***

## Update Linked Access Codes

The following example changes both the starting and ending times for a group of linked access codes:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
# Update the starting and ending times
# for all these linked access codes,
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
# for all these linked access codes,
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
// for all these linked access codes,
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
# for all these linked access codes,
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
// for all these linked access codes,
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
// for all these linked access codes,
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
// for all these linked access codes,
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


{% endtabs %}
