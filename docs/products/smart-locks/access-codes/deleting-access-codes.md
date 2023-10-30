---
description: >-
  Learn how to delete your access codes, and ensure that the code is
  successfully removed from the device.
---

# Deleting Access Codes

## 1. Delete the access code using the API

To delete an access code, specify the desired `access_code_id`  in the [Delete Access Code](../../../api-clients/access-codes/delete-an-access-code.md) request.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"

pprint(seam.access_codes.delete(access_code_id))
```

**Response:**

```
ActionAttempt(action_attempt_id='364e747f-9631-4eb1-bc9e-24cd1f11cf5f',
              action_type='DELETE_ACCESS_CODE',
              status='success',
              result={},
              error=None)
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```python
access_code_id="daf89de3-ad3a-49aa-93bd-25f27d58f699"

try:
    seam.access_codes.get(access_code_id)
except Exception as e:
    print(e)
```

**Response:**

```
SeamAPIException: status=404, request_id=4b1d2f1b-3988-4949-9279-fddef25dc9ae, metadata={'type': 'access_code_not_found', 'message': 'Could not find an access_code with device_id or access_code_id', 'data': {'access_code_id': 'daf89de3-ad3a-49aa-93bd-25f27d58f699'}, 'request_id': '4b1d2f1b-3988-4949-9279-fddef25dc9ae'}
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_ACCESS_CODE",
    "action_attempt_id": "bf2a1322-a147-454b-b0eb-90ee6f2a3911",
    "result": null,
    "error": null
  },
  "ok": true
}
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/get' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc"
}'
```

**Response:**

```json
{
  "error": {
    "type": "access_code_not_found",
    "message": "Could not find an access_code with device_id or access_code_id",
    "data": {
      "access_code_id": "d2047ba8-8849-467f-a07a-efab6c3673bc"
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
console.log(await seam.accessCodes.delete({
  access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
}))
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: 'b1393e75-f405-4895-91d8-2d0a1ed010f0',
    action_type: 'DELETE_ACCESS_CODE',
    result: {},
    error: null
  }
}
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```javascript
try {
  await seam.accessCodes.get({
    access_code_id: "f4780806-076e-4cec-8081-df0ea2139d5a"
  })
} catch(error) {
    console.log(error)
}
```

**Response:**

```json
SeamAPIError: Could not find an access_code with device_id or access_code_id
    at file:///workspaces/api-docs/snippet-playground/javascript/node_modules/seamapi/dist/chunk-2BGOBPMB.mjs:669:13
    at Generator.throw (<anonymous>)
    at rejected (file:///workspaces/api-docs/snippet-playground/javascript/node_modules/seamapi/dist/chunk-2BGOBPMB.mjs:54:29)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  status: 404,
  requestId: '799c903f-0768-4249-8226-cff55d3fbdbb',
  metadata: {
    type: 'access_code_not_found',
    message: 'Could not find an access_code with device_id or access_code_id',
    data: { access_code_id: 'f4780806-076e-4cec-8081-df0ea2139d5a' },
    request_id: '799c903f-0768-4249-8226-cff55d3fbdbb'
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
puts client.access_codes.delete("6fe348a8-5938-4b73-8a36-86f7ffdfc431").inspect
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="success"
  action_type="DELETE_ACCESS_CODE"
  action_attempt_id="32ab3a7b-4588-491f-bceb-d099de7b1496"
  result={}>
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```ruby
begin
  client.access_codes.get("6fe348a8-5938-4b73-8a36-86f7ffdfc431")
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
```php
use Seam\SeamClient;

$seam = new SeamClient("seam_test2ek7_2sq2ExLasPDwa9foJ8PyQ2zH");

$access_code_id = "e3d6cf81-6dd4-490c-b81f-8478054c2003";
$seam->access_codes->delete($access_code_id);

// confirm you're getting a 404
try {
    $deleted_access_code = $seam->access_codes->get(
        access_code_id: $access_code_id
    );
    echo json_encode($deleted_access_code, JSON_PRETTY_PRINT);
} catch (Exception $e) {
    echo $e->getMessage();
}
// Error Calling "GET access_codes/get" : access_code_not_found: Could not find an access_code with device_id or access_code_id
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var attempt = seam.AccessCodes.Delete(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");

Type t = attempt.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
}
```

**Response:**

```
Status: pending
ActionType: DELETE_ACCESS_CODE
ActionAttemptId: 8e79a65c-97f2-4792-88cb-c11702166e36
Result: 
Error: 
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```csharp
try
{
  seam.AccessCodes.Get(accessCodeId: "fe372cb9-1fa5-492f-9494-ea01c5558333");
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
ActionAttempt attempt = seam.accessCodes()
        .delete(AccessCodesDeleteRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .build());
System.out.println(attempt.getPending());
```

**Response:**

```json
Optional[{
  "action_type" : "DELETE_ACCESS_CODE",
  "action_attempt_id" : "51a65bfd-9421-44b7-8b9c-1ce16852fff7"
}]
```

{% hint style="info" %}
Once the access code has been deleted, a request to get the access code returns a 404 error.
{% endhint %}

**Request:**

```java
try {
  AccessCode accessCode = seam.accessCodes()
        .get(AccessCodesGetRequest.builder()
                .accessCodeId("aff0c858-22f6-4587-9aac-1f5d550be560")
                .build());
}
catch(Exception e) {
  System.out.println(e);
}
```

**Response:**

{% code overflow="wrap" %}
```json
ApiError{statusCode: 404, body: {error={type=access_code_not_found, message=Could not find an access_code with device_id or access_code_id, data={access_code_id=aff0c858-22f6-4587-9aac-1f5d550be560}, request_id=be588519-00c6-4992-9cf0-f77d6b20a120}, ok=false}}
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
