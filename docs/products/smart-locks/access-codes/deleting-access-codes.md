---
description: >-
  Learn how to delete your access codes, and ensure that the code is
  successfully removed from the device.
---

# Deleting Access Codes

## 1. Delete the access code using the API

To delete an access code, specify the desired `access_code_id` in the [Delete Access Code](../../../api-clients/access-codes/delete-an-access-code.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.access_codes.delete(
  access_code_id="11111111-1111-1111-1111-555555555555"
)
```

**Response:**

```
None
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```python
try:
  seam.access_codes.get(
    access_code_id="11111111-1111-1111-1111-555555555555"
  )
except Exception as e:
  print(e)
```

**Response:**

{% code overflow="wrap" %}
```
SeamAPIException: status=404, request_id=4b1d2f1b-3988-4949-9279-fddef25dc9ae, metadata={'type': 'access_code_not_found', 'message': 'Could not find an access_code with device_id or access_code_id', 'data': {'access_code_id': '11111111-1111-1111-1111-555555555555'}, 'request_id': '4b1d2f1b-3988-4949-9279-fddef25dc9ae'}
```
{% endcode %}
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/delete' \
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
  "ok": true
}
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

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
  "error": {
    "type": "access_code_not_found",
    "message": "Could not find an access_code with device_id or access_code_id",
    "data": {
      "access_code_id": "11111111-1111-1111-1111-555555555555"
    },
    "request_id": "e034a368-1936-418e-8219-dbc99b49165e"
  },
  "ok": false
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.accessCodes.delete({
  access_code_id: "11111111-1111-1111-1111-555555555555"
})
```

**Response:**

```
void
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```javascript
try {
  await seam.accessCodes.get({
    access_code_id: "11111111-1111-1111-1111-555555555555"
  })
} catch(error) {
    console.log(error)
}
```

**Response:**

```json
SeamAPIError: Could not find an access_code with device_id or access_code_id
    at file:... {
  status: 404,
  requestId: '799c903f-0768-4249-8226-cff55d3fbdbb',
  metadata: {
    type: 'access_code_not_found',
    message: 'Could not find an access_code with device_id or access_code_id',
    data: { access_code_id: '11111111-1111-1111-1111-555555555555' },
    request_id: '799c903f-0768-4249-8226-cff55d3fbdbb'
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
client.access_codes.delete(
  access_code_id: "11111111-1111-1111-1111-555555555555"
)
```

**Response:**

```
void
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```ruby
begin
  client.access_codes.get(
    access_code_id: "11111111-1111-1111-1111-555555555555"
  )
rescue => e
  puts e
end
```

**Response:**

```
Api Error access_code_not_found
request_id: e07366ad-c117-4e69-a644-8a247848d69d
Could not find an access_code with device_id or access_code_id
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$seam->access_codes->delete(
  access_code_id: "11111111-1111-1111-1111-555555555555"
);
```

**Response:**

```
void
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```php
try {
    $deleted_access_code = $seam->access_codes->get(
        access_code_id: "11111111-1111-1111-1111-555555555555"
    );
    echo json_encode($deleted_access_code, JSON_PRETTY_PRINT);
} catch (Exception $e) {
    echo $e->getMessage();
}
```

**Response:**

```
Error Calling "GET access_codes/get" : access_code_not_found: Could not find an access_code with device_id or access_code_id
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.AccessCodes.Delete(
  accessCodeId: "11111111-1111-1111-1111-555555555555"
);
```

**Response:**

```
void
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```csharp
try
{
  seam.AccessCodes.Get(
    accessCodeId: "11111111-1111-1111-1111-555555555555"
  );
}
catch (Exception e)
{
  Console.WriteLine(e.Message);
}
```

**Response:**

```
Could not find an AccessCode with DeviceId or AccessCodeId
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.accessCodes()
  .delete(AccessCodesDeleteRequest.builder()
    .accessCodeId("11111111-1111-1111-1111-555555555555")
    .build());
```

**Response:**

```
void
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```java
try {
  AccessCode accessCode = seam.accessCodes()
    .get(AccessCodesGetRequest.builder()
      .accessCodeId("11111111-1111-1111-1111-555555555555")
      .build());
}
catch(Exception e) {
  System.out.println(e);
}
```

**Response:**

{% code overflow="wrap" %}
```json
ApiError{statusCode: 404, body: {error={type=access_code_not_found, message=Could not find an access_code with device_id or access_code_id, data={access_code_id=11111111-1111-1111-1111-555555555555}, request_id=be588519-00c6-4992-9cf0-f77d6b20a120}, ok=false}}
```
{% endcode %}
{% endtab %}
{% endtabs %}

***

## 2. Verify that the access code has been removed

There are two methods to verify that an access code has been removed:

**Polling method**

Utilize the `action_attempt_id` provided in the response from the [deletion endpoint](../../../api-clients/access-codes/delete-an-access-code.md) to call the [Get Action Attempt](../../../api-clients/action-attempt/get-action-attempt.md) endpoint. Typically, you'd poll this endpoint until the `status` reads `success`.

If the action attempt's status lingers as `pending`, or if the access code object reveals any `warnings` or `errors` properties, see [our "Troubleshooting Access Code Issues" guide](troubleshooting-access-code-issues.md) for help.

**Webhook method**

Here, you'll need to keep an eye on incoming webhook events. Specifically, watch for the `access_code.deleted` and `access_code.removed_from_device` events. These signify successful access code deletion and its removal from the device, respectively. It's worth noting that if you delete an access code that was never programmed onto a device, the `access_code.removed_from_device` event won't be triggered.

If, however, you encounter `access_code.failed_to_remove_from_device` or `access_code.delay_in_removing_from_device` events, it's imperative to consult [the "Troubleshooting access code issues" guide](troubleshooting-access-code-issues.md).
