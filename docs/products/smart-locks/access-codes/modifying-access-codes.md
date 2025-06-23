---
description: >-
  Learn how to update your access codes, and ensure that the changes are
  successfully set on the device.
---

# Modifying Access Codes

## 1. Update the access code using the API

You can update any active or upcoming access codes using the [Update Access Code](../../../api/access_codes/update.md) request.

When modifying an access code, adjust the properties of the access code, such as the `code`, `name`, `starts_at`, and `ends_at` to the new desired values.

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_codes.update(
  access_code = "11111111-1111-1111-1111-555555555555",
  name = "my updated code name",
  code = "5432",
  starts_at = "2025-02-01T16:00:00Z",
  ends_at = "2025-02-22T12:00:00Z"
)
```

**Output:**

```
None
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/update' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "name": "my updated code name",
  "code": "5432",
  "starts_at": "2025-02-01T16:00:00Z",
  "ends_at": "2025-02-22T12:00:00Z"
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
**Code:**

```javascript
await seam.accessCodes.update({
  access_code_id: "11111111-1111-1111-1111-555555555555",
  name: "my updated code name",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z",
  code: "5432"
})
```

**Output:**

```json
void
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
client.access_codes.update(
  access_code_id: "11111111-1111-1111-1111-555555555555",
  name: "my updated code name",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z",
  code: "5432"
)
```

**Output:**

{% code overflow="wrap" %}
```
nil
```
{% endcode %}
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_codes->update(
  access_code_id: "11111111-1111-1111-1111-555555555555",
  name: "my updated code name",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z",
  code: "5432"
);
```

**Output:**

```
void
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
seam.AccessCodes.Update(
  accessCodeId: "11111111-1111-1111-1111-555555555555",
  name: "my updated code name",
  startsAt: "2025-02-01T16:00:00Z",
  endsAt: "2025-02-22T12:00:00Z",
  code: "5432"
);
```

**Output:**

```
void
```
{% endtab %}



{% endtabs %}

## 2. Verify that the access code has been updated

### For a permanent access code

There are two methods to verify that a permanent access code has been set on the device:

**Polling Method**

Utilize the `access_code_id` returned in the response from the create endpoint to invoke the [Get Access Code](../../../api/access_codes/get.md) endpoint. A basic implementation would involve polling this endpoint until the `status` of the access code updates to `set`.

If the `status` remains `setting` for a very long time, or if the `access_code` object contains any `warnings` or `errors` properties, consult [our guide on "Troubleshooting Access Code Issues"](troubleshooting-access-code-issues.md) for further guidance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.

### For a time-bound access code

There are two methods to verify that a time-bound access code has been set on the device:

**Polling Method**

Use the `access_code_id` provided in the response from the create endpoint to call the [Get Access Code](../../../api/access_codes/get.md) endpoint. In a basic implementation, you would poll this endpoint at the `starts_at` time to check if the access code's status is updated to `set`.

If the `status` remains `setting`, or if the `access_code` object displays any warnings or errors, refer to [our "Troubleshooting Access Code Issues" guide](troubleshooting-access-code-issues.md) for assistance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.

***

## Special Case #1: Changing an ongoing access code to time-bound access

To convert a permanent access code to time-bound access, you must set the `starts_at` and `ends_at` properties to the timeframe that you want for the access code.

{% tabs %}
{% tab title="Python" %}
**1. Confirm that the access code starts as an ongoing code.**

**Code:**

```python
access_code = seam.access_codes.get(
  access_code_id = "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-555555555555',
  type='ongoing',
  ...
)
```

**2. Update the code to set `starts_at` and `ends_at` timestamps.**

**Code:**

```python
seam.access_codes.update(
  access_code = "11111111-1111-1111-1111-555555555555",
  starts_at = "2025-01-01T16:00:00Z",
  ends_at = "2025-01-22T12:00:00Z"
)
```

**Output:**

```
None
```

**3. Confirm that the `type` has changed to `time_bound`.**

**Code:**

```python
seam.access_codes.get(
  access_code_id = "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-555555555555',
  type='time_bound',
  starts_at='2025-01-01T16:00:00.000Z',
  ends_at='2025-01-22T12:00:00.000Z',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**1. Confirm that the access code starts as an ongoing code.**

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-555555555555",
    "type": "ongoing",
    ...
  },
  "ok": true
}
```

**2. Update the code to set `starts_at` and `ends_at` timestamps.**

**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/update' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "starts_at": "2025-01-01T16:00:00Z",
  "ends_at": "2025-01-22T12:00:00Z"
}'
```

**Response:**

```json
{
  "ok": true
}
```

**3. Confirm that the `type` has changed to `time_bound`.**

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-555555555555",
    "type": "time_bound",
    "starts_at": "2025-01-01T16:00:00.000Z",
    "ends_at": "2025-01-22T12:00:00.000Z",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**1. Confirm that the access code starts as an ongoing code.**

**Code:**

```javascript
await seam.accessCodes.get({
  access_code_id: "11111111-1111-1111-1111-555555555555"
});
```

**Output:**

```json
{
  access_code_id: '11111111-1111-1111-1111-555555555555',
  type: 'ongoing',
  ...
}
```

**2. Update the code to set `starts_at` and `ends_at` timestamps.**

**Code:**

```javascript
await seam.accessCodes.update({
  access_code_id: "11111111-1111-1111-1111-555555555555",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z"
});
```

**Output:**

```json
void
```

**3. Confirm that the `type` has changed to `time_bound`.**

**Code:**

```javascript
await seam.accessCodes.get({
  access_code_id: "11111111-1111-1111-1111-555555555555"
});
```

**Output:**

```json
{
  access_code_id: '11111111-1111-1111-1111-555555555555',
  type: 'time_bound',
  starts_at: '2025-02-01T16:00:00.000Z',
  ends_at: '2025-02-22T12:00:00.000Z',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**1. Confirm that the access code starts as an ongoing code.**

**Code:**

```ruby
client.access_codes.get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-555555555555"
  type="ongoing"
  ...
>
```

**2. Update the code to set `starts_at` and `ends_at` timestamps.**

**Code:**

```ruby
client.access_codes.update(
  access_code_id: "11111111-1111-1111-1111-555555555555",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z"
)
```

**Output:**

{% code overflow="wrap" %}
```
nil
```
{% endcode %}

**3. Confirm that the `type` has changed to `time_bound`.**

**Code:**

```ruby
client.access_codes.get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-555555555555"
  type="time_bound"
  starts_at=2025-02-01 16:00:00 UTC
  ends_at=2025-02-22 12:00:00 UTC
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**1. Confirm that the access code starts as an ongoing code.**

**Code:**

```php
$seam->access_codes->get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "ongoing",
  ...
}
```

**2. Update the code to set `starts_at` and `ends_at` timestamps.**

**Code:**

```php
$seam->access_codes->update(
  access_code_id: "11111111-1111-1111-1111-555555555555",
  starts_at: "2025-02-01T16:00:00Z",
  ends_at: "2025-02-22T12:00:00Z"
);
```

**Output:**

{% code overflow="wrap" %}
```
void
```
{% endcode %}

**3. Confirm that the `type` has changed to `time_bound`.**

**Code:**

```php
$seam->access_codes->get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "time_bound",
  "starts_at": "2025-02-01T16:00:00.000Z",
  "ends_at": "2025-02-22T12:00:00.000Z",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**1. Confirm that the access code starts as an ongoing code.**

**Code:**

```csharp
seam.AccessCodes.Get(
  accessCodeId: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "ongoing",
  ...
}
```

**2. Update the code to set `starts_at` and `ends_at` timestamps.**

**Code:**

```csharp
seam.AccessCodes.Update(
  accessCodeId: "11111111-1111-1111-1111-555555555555",
  startsAt: "2025-02-01T16:00:00Z",
  endsAt: "2025-02-22T12:00:00Z"
);
```

**Output:**

{% code overflow="wrap" %}
```
void
```
{% endcode %}

**3. Confirm that the `type` has changed to `time_bound`.**

**Code:**

```csharp
seam.AccessCodes.Get(
  accessCodeId: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "time_bound",
  "starts_at": "2025-02-01T16:00:00.000Z",
  "ends_at": "2025-02-22T12:00:00.000Z",
  ...
}
```
{% endtab %}



{% endtabs %}

***

## Special Case #2: Changing a time-bound access code to permanent access

When converting a time-bound code to a permanent one, you'll also need to set the `type` property of the access code to `ongoing`.

{% tabs %}
{% tab title="Python" %}
**1. Confirm that the access code starts as a time-bound code.**

**Code:**

```python
seam.access_codes.get(
  access_code_id = "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-555555555555',
  type='time_bound',
  starts_at='2025-01-01T16:00:00.000Z',
  ends_at='2025-01-22T12:00:00.000Z',
  ...
)
```

**2. Update the code to set the `type` to `ongoing`.**

**Code:**

```python
seam.access_codes.update(
  access_code_id = "11111111-1111-1111-1111-555555555555",
  type = "ongoing"
)
```

**Output:**

```
None
```

**3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.**

**Code:**

```python
seam.access_codes.get(
  access_code_id = "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
AccessCode(
  access_code_id='11111111-1111-1111-1111-555555555555',
  type='ongoing',
  ...
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**1. Confirm that the access code starts as a time-bound code.**

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-555555555555",
    "type": "time_bound",
    "starts_at": "2025-01-01T16:00:00.000Z",
    "ends_at": "2025-01-22T12:00:00.000Z",
    ...
  },
  "ok": true
}
```

**2. Update the code to set the `type` to `ongoing`.**

**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/update' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "ongoing"
}'
```

**Response:**

```json
{
  "ok": true
}
```

**3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.**

**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-555555555555"
}'
```

**Response:**

```json
{
  "access_code": {
    "access_code_id": "11111111-1111-1111-1111-555555555555",
    "type": "ongoing",
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**1. Confirm that the access code starts as a time-bound code.**

**Code:**

```javascript
await seam.accessCodes.get({
  access_code_id: "11111111-1111-1111-1111-555555555555"
});
```

**Output:**

```json
{
  access_code_id: '11111111-1111-1111-1111-555555555555',
  type: 'time_bound',
  starts_at: '2025-02-01T16:00:00.000Z',
  ends_at: '2025-02-22T12:00:00.000Z',
  ...
}
```

**2. Update the code to set the `type` to `ongoing`.**

**Code:**

```javascript
await seam.accessCodes.update({
  access_code_id: "11111111-1111-1111-1111-555555555555",
  type: "ongoing"
});
```

**Output:**

```json
void
```

**3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.**

**Code:**

```javascript
await seam.accessCodes.get({
  access_code_id: "11111111-1111-1111-1111-555555555555"
});
```

**Output:**

```json
{
  access_code_id: '11111111-1111-1111-1111-555555555555',
  type: 'ongoing',
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**1. Confirm that the access code starts as a time-bound code.**

**Code:**

```ruby
client.access_codes.get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-555555555555"
  type="time_bound"
  starts_at=2025-02-01 16:00:00 UTC
  ends_at=2025-02-22 12:00:00 UTC
  ...
>
```

**2. Update the code to set the `type` to `ongoing`.**

**Code:**

```ruby
client.access_codes.update(
  access_code_id: "11111111-1111-1111-1111-555555555555",
  type: "ongoing"
)
```

**Output:**

{% code overflow="wrap" %}
```
nil
```
{% endcode %}

**3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.**

**Code:**

```ruby
client.access_codes.get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
)
```

**Output:**

```
<Seam::AccessCode:0x00438
  access_code_id="11111111-1111-1111-1111-555555555555"
  type="ongoing"
  ...
>
```
{% endtab %}

{% tab title="PHP" %}
**1. Confirm that the access code starts as a time-bound code.**

**Code:**

```php
$seam->access_codes->get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "time_bound",
  "starts_at": "2025-02-01T16:00:00.000Z",
  "ends_at": "2025-02-22T12:00:00.000Z",
  ...
}
```

**2. Update the code to set the `type` to `ongoing`.**

**Code:**

```php
$seam->access_codes->update(
  access_code_id: "11111111-1111-1111-1111-555555555555",
  type: "ongoing"
);
```

**Output:**

{% code overflow="wrap" %}
```
void
```
{% endcode %}

**3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.**

**Code:**

```php
$seam->access_codes->get(
  access_code_id: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "ongoing",
  ...
}
```
{% endtab %}

{% tab title="C#" %}
**1. Confirm that the access code starts as a time-bound code.**

**Code:**

```csharp
seam.AccessCodes.Get(
  accessCodeId: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "time_bound",
  "starts_at": "2025-02-01T16:00:00.000Z",
  "ends_at": "2025-02-22T12:00:00.000Z",
  ...
}
```

**2. Update the code to set the `type` to `ongoing`.**

**Code:**

```csharp
seam.AccessCodes.Update(
  accessCodeId: "11111111-1111-1111-1111-555555555555",
  type: Seam.Api.AccessCodes.UpdateRequest.TypeEnum.Ongoing
);
```

**Output:**

{% code overflow="wrap" %}
```
void
```
{% endcode %}

**3. Confirm that the `type` has changed to `ongoing` and the `starts_at` and `ends_at` are `None`.**

**Code:**

```csharp
seam.AccessCodes.Get(
  accessCodeId: "11111111-1111-1111-1111-555555555555"
);
```

**Output:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-555555555555",
  "type": "ongoing",
  ...
}
```
{% endtab %}



{% endtabs %}
