---
description: >-
  Learn how to update your access codes, and ensure that the changes are
  successfully set on the device.
---

# Modifying Access Codes

## 1. Update the access code using the API

Any active or upcoming access codes may be updated using the [Update Access Code](../../../api-clients/access-codes/update-an-access-code.md) request.

When making this change, adjust the access code's properties such as the `code`, `name`, `starts_at`, and `ends_at` to the new desired values.

<!-- CODE INJECT START
Update an access code with id "ed4a1f62-9070-4379-8c46-ea30a99e4d74" to set its new name to "my updated code name". Please also sets its updated starts_at date January 1st, 2025 at 4pm utc. Please make the updated ends_at date January 22nd, 2025 at 12pm utc.
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const updatedAccessCode = await seam.accessCodes.update({
  name: "my updated code name",
  starts_at: new Date("2025-01-01T16:00:00Z").toISOString(),
  ends_at: new Date("2025-01-22T12:00:00Z").toISOString(),
  access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74",
});

console.log(updatedAccessCode);
```
{% endtab %}
{% tab title="Python" %}
```python
updated_access_code = seam.access_codes.update(
  access_code_id="ed4a1f62-9070-4379-8c46-ea30a99e4d74",
  name="my updated code name",
  starts_at="2025-01-01T16:00:00Z",
  ends_at="2025-01-22T12:00:00Z"
)

print(updated_access_code)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
action_attempt = seam.access_codes.update(
    access_code_id: 'ed4a1f62-9070-4379-8c46-ea30a99e4d74',
    name: 'my updated code name',
    starts_at: '2025-01-01T16:00:00Z',
    ends_at: '2025-01-22T12:00:00Z'
)

print(action_attempt.status)
```
{% endtab %}
{% tab title="PHP" %}
```php
$action_attempt = $seam->access_codes->update(
  access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74",
  name: "my updated code name",
  starts_at: "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z"
);

print($action_attempt->status); // expected "pending" or "success"
```
{% endtab %}
{% tab title="Curl" %}
#### Request:

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request PUT 'https://connect.getseam.com/access_codes/update' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_id": "00000000-0000-0000-0000-000000000000",
  "name": "New Name",
  "code": "1111"
 }'
</code></pre>

#### Response:

```
{
  "action_attempt": {
    "status": "pending",
    "action_type": "UPDATE_ACCESS_CODE",
    "action_attempt_id": "UUID-1",
    "result": null,
    "error": null
  },
  "access_code": {
    "access_code_id": "00000000-0000-0000-0000-000000000000",
    "device_id": "11111111-1111-1111-1111-111111111111",
    "name": "New Name",
    "code": "1111",
    "common_code_key": null,
    "type": "ongoing",
    "status": "setting",
    "created_at": "2023-01-01T00:00:00Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->

***

## 2. Verify that the access code has been updated

### For a permanent access code

There are two methods to verify that a permanent access code has been set on the device:

**Polling Method**

Utilize the `access_code_id` returned in the response from the create endpoint to invoke the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) endpoint. A basic implementation would involve polling this endpoint until the `status` of the access code updates to `set`.

If the `status` remains `setting` for a very long time,  or if the `access_code` object contains any `warnings` or `errors` properties, consult [our guide on "Troubleshooting Access Code Issues"](troubleshooting-access-code-issues.md) for further guidance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.

### For a time-bound access code

There are two methods to verify that a time-bound access code has been set on the device:

**Polling Method**

Use the `access_code_id` provided in the response from the create endpoint to call the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) endpoint. In a basic implementation, you would poll this endpoint at the `starts_at` time to check if the access code's status is updated to `set`.

If the `status` remains `setting`, or if the `access_code` object displays any warnings or errors, refer to [our "Troubleshooting Access Code Issues" guide](troubleshooting-access-code-issues.md) for assistance.

**Webhook Events Method**

Monitor the incoming events on your webhook. Be on the lookout for the `access_code.set_on_device` event, which indicates the successful setting of the access code on the device.

However, if you receive `access_code.failed_to_set_on_device` or `access_code.delay_in_setting_on_device` events, it's crucial to refer to [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md) for assistance.

***

## Special Case #1: Changing a permanent access code to time-bound access

When converting a permanent access code to time-bound access, you'll also need to set the `starts_at` and `ends_at` properties to the time frame you want.

<!-- CODE INJECT START
Update an ongoing access code to a time bound access code. Use the access code id "ed4a1f62-9070-4379-8c46-ea30a99e4d74", sets its updated starts_at date January 1st, 2025 at 4pm utc, and its ends_at date January 22nd, 2025 at 12pm utc.
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
await seam.accessCodes.update({
  starts_at: new Date("2025-01-01T16:00:00Z").toISOString(),
  ends_at: new Date("2025-01-22T12:00:00Z").toISOString(),
  access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74",
})
```
{% endtab %}
{% tab title="Python" %}
```python

seam.access_codes.update(
  access_code_id="ed4a1f62-9070-4379-8c46-ea30a99e4d74",
  starts_at="2025-01-01T16:00:00Z",
  ends_at="2025-01-22T12:00:00Z"
)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby

update_access_code_attempt = seam.access_codes.update(
  access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74", 
  starts_at: "2025-01-01T16:00:00Z", 
  ends_at: "2025-01-22T12:00:00Z"
)
```
{% endtab %}
{% tab title="PHP" %}
```php

$action_attempt = $seam->access_codes->update(
  access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74",
  starts_at: "2025-01-01T16:00:00Z",
  ends_at: "2025-01-22T12:00:00Z"
);


```
{% endtab %}

{% tab title="Curl" %}
<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request PUT 'https://connect.getseam.com/access_codes/update' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_id": "00000000-0000-0000-0000-000000000000",
  "starts_at": "2023-01-02T00:00:00Z",
  "ends_at": "2023-01-03T00:00:00Z"
 }'
</code></pre>
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->


***

## Special Case #2: Changing a time-bound access code to permanent access

When converting a time-bound code to a permanent one, you'll also need to set the `type` property of the access code to `ongoing`.

<!-- CODE INJECT START
Update a time-bound access code to an ongoing access code by setting its type to "ongoing". Use the access code id "ed4a1f62-9070-4379-8c46-ea30a99e4d74".
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
await seam.accessCodes.update({
  type: "ongoing",
  access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74"
})
```
{% endtab %}
{% tab title="Python" %}
```python
action_attempt = seam.access_codes.update(
  type="ongoing",
  access_code_id="ed4a1f62-9070-4379-8c46-ea30a99e4d74"
)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
update_access_code_attempt = seam.access_codes.update({type: "ongoing", access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74"})
```
{% endtab %}
{% tab title="PHP" %}
```php
$action_attempt = $seam->access_codes->update(
  'ed4a1f62-9070-4379-8c46-ea30a99e4d74',
  'ongoing'
);
```
{% endtab %}
{% tab title="Curl" %}
<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request PUT 'https://connect.getseam.com/access_codes/update' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_id": "00000000-0000-0000-0000-000000000000",
  "type": "ongoing"
 }'
</code></pre>
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->

