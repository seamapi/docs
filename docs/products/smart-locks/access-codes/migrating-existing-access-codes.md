---
description: Learn how to migrate existing lock access codes into Seam
---

# Migrating Existing Access Codes

## Overview

Prior to using Seam to manage your devices, you may have used another lock management system to manage the access codes on your devices. Where possible, we will help you keep any existing access codes on devices, and transition those codes to ones managed by your Seam workspace.

If migrating existing codes into your Seam workspace is not possible, you can still get a list of these existing codes, and replace them with new access codes managed by your Seam workspace.

## Unmanaged Access Codes

Seam differentiates between managed access codes and unmanaged access codes. When you create an access code on a device in Seam, it is created as a managed code. Codes that exist on a device that were not created on Seam are considered unmanaged codes. We strictly limit the operations that can be performed on unmanaged codes to:

* Viewing a list of the unmanaged codes on a device
* Converting an unmanaged code into a managed code
* Deleting an unmanaged code

{% hint style="info" %}
Strictly speaking, unmanaged codes are any codes on a device that were not created by the current workspace. For example, if you are within _Workspace 1_ and created codes _Code 1_ and _Code 2_, those two codes would be considered unmanaged if you were looking at the same device in _Workspace 2_. Therefore, unmanaged codes include both codes not managed by Seam at all, and codes that might be managed by a different workspace within Seam.
{% endhint %}

## Viewing Unmanaged Codes on a Device

You can retrieve a list of all unmanaged access codes for a particular device using the [List Unmanaged Access Codes](../../../api-clients/access-codes/list-unmanaged-access-codes.md) request, passing in `device_id` as a query parameter. For example:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
pprint(seam.access_codes.unmanaged.list(device="374d3ee2-5e5d-4141-b828-6c2fa458212f"))
```

**Response:**

```
[UnmanagedAccessCode(access_code_id='449b03e6-1c6f-4ff3-b055-b9cf8146d2b0',
                     device_id='374d3ee2-5e5d-4141-b828-6c2fa458212f',
                     type='ongoing',
                     created_at='2023-10-28T04:00:04.194Z',
                     errors=[],
                     warnings=[],
                     name='New Passcode',
                     code='123456',
                     is_managed=False,
                     starts_at=None,
                     ends_at=None,
                     status='set')]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/unmanaged/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "374d3ee2-5e5d-4141-b828-6c2fa458212f"
}'
```

**Response:**

```json
{
  "access_codes": [
    {
      "access_code_id": "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0",
      "device_id": "374d3ee2-5e5d-4141-b828-6c2fa458212f",
      "name": "New Passcode",
      "code": "123456",
      "type": "ongoing",
      "created_at": "2023-10-28T04:00:04.194Z",
      "starts_at": null,
      "ends_at": null,
      "status": "set",
      "errors": [],
      "warnings": [],
      "is_managed": false
    }
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.accessCodes.unmanaged.list({
  device_id: "374d3ee2-5e5d-4141-b828-6c2fa458212f"
}))
```

**Response:**

```json
[
  {
    access_code_id: '449b03e6-1c6f-4ff3-b055-b9cf8146d2b0',
    device_id: '374d3ee2-5e5d-4141-b828-6c2fa458212f',
    name: 'New Passcode',
    code: '123456',
    type: 'ongoing',
    created_at: '2023-10-28T04:00:04.194Z',
    starts_at: null,
    ends_at: null,
    status: 'set',
    errors: [],
    warnings: [],
    is_managed: false
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
device_id = "374d3ee2-5e5d-4141-b828-6c2fa458212f"
client.unmanaged_access_codes.list(device_id).inspect
```

**Response:**

```
[<Seam::AccessCode:0x00438
  access_code_id="449b03e6-1c6f-4ff3-b055-b9cf8146d2b0"
  device_id="374d3ee2-5e5d-4141-b828-6c2fa458212f"
  name="New Passcode"
  .
  .
  .
  code="123456"
  type="ongoing"
  status="set"
  .
  .
  .
  is_managed=false
  .
  .
  .
  >]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var unmanagedCodes = seam.UnmanagedAccessCodes.List(deviceId: "374d3ee2-5e5d-4141-b828-6c2fa458212f");
foreach (var unmanagedCode in unmanagedCodes)
{
  Console.WriteLine("Access code ID: " + unmanagedCode.AccessCodeId);
  Console.WriteLine("Is managed: " + unmanagedCode.IsManaged);
}
```

**Response:**

```
Access code ID: 449b03e6-1c6f-4ff3-b055-b9cf8146d2b0
Is managed: False
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var deviceId = "374d3ee2-5e5d-4141-b828-6c2fa458212f";

var unmanagedAccessCodes = seam.accessCodes().unmanaged().list(UnmanagedListRequest.builder()
        .deviceId(deviceId)
        .build());
System.out.println(unmanagedAccessCodes);
```

**Response:**

```json
[{
  "access_code" : {
    "type" : "ongoing",
    "access_code_id" : "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0",
    "device_id" : "374d3ee2-5e5d-4141-b828-6c2fa458212f",
    "name" : "New Passcode",
    "code" : "123456",
    "created_at" : "2023-10-28T04:00:04.194Z",
    "errors" : [ ],
    "warnings" : [ ],
    "is_managed" : "false",
    "status" : "set"
  },
  "ok" : true
}]
```
{% endtab %}
{% endtabs %}

## Converting Unmanaged Codes into Managed Codes

You can convert unmanaged access codes into managed ones using the [Convert an Unmanaged Access Code](../../../api-clients/access-codes/convert-an-unmanaged-access-code.md) request, passing in `access_code_id` as a query parameter. For example:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code_id = "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0"
attempt = seam.access_codes.unmanaged.convert_to_managed(
  access_code = access_code_id
)

pprint(attempt)
```

**Response:**

```
ActionAttempt(action_attempt_id='721b51b7-6ab9-41cf-b09d-a5e97d355208',
              action_type='CONVERT_ACCESS_CODE_TO_MANAGED',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/unmanaged/convert_to_managed' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0"
}
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "CONVERT_ACCESS_CODE_TO_MANAGED",
    "action_attempt_id": "721b51b7-6ab9-41cf-b09d-a5e97d355208",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.accessCodes.unmanaged.convertToManaged({
  access_code_id: "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0"
}))
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '721b51b7-6ab9-41cf-b09d-a5e97d355208',
    action_type: 'CONVERT_ACCESS_CODE_TO_MANAGED',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
access_code_id = "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0"
client.unmanaged_access_codes.convert_to_managed(access_code_id).inspect
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="success"
  action_type="CONVERT_ACCESS_CODE_TO_MANAGED"
  action_attempt_id="721b51b7-6ab9-41cf-b09d-a5e97d355208"
  result=nil>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var attempt = seam.UnmanagedAccessCodes.ConvertToManaged(accessCodeId: "449b03e6-1c6f-4ff3-b055-b9cf8146d2b0");

Type t = attempt.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
}
```

**Response:**

```
Status: success
ActionType: CONVERT_ACCESS_CODE_TO_MANAGED
ActionAttemptId: 721b51b7-6ab9-41cf-b09d-a5e97d355208
Result: 
Error: 
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var convert = seam.accessCodes().unmanaged().convertToManaged(UnmanagedConvertToManagedRequest.builder()
        .accessCodeId("449b03e6-1c6f-4ff3-b055-b9cf8146d2b0")
        .build());
System.out.println(convert);
```

**Response:**

```json
{
  "ok" : true
}
```
{% endtab %}
{% endtabs %}

The request returns immediately, but the conversion is an asynchronous process that completes in the background. You can listen to the `access_code.unmanaged.converted_to_managed` and `access_code.unmanaged.failed_to_convert_to_managed` to be notified when conversion succeeds or fails.

Once an unmanaged code is successfully converted to a managed code, all of the normal managed access code operations and behavior are available.

## Unsupported Conversion

Some third-party device providers strictly limit the information available about existing access codes on a device. Thus, for devices connected using these providers, we cannot convert unmanaged codes to managed ones. The current list of providers which do not support conversion is as follows:

* SmartThings
* igloohome

For SmartThings devices, you can still see a list of all unmanaged codes on the devices using the `GET /access_codes/unmanaged/list` endpoint, but you cannot see the actual PIN code for the access codes (the `code` property is not present).

## Deleting Unmanaged Codes

After you have converted unmanaged codes to managed codes, or replaced them with new ones, you can allow users to delete any remaining unmanaged codes on their device. You can do this by using the [Delete an Unmanaged Access Code](../../../api-clients/access-codes/delete-an-unmanaged-access-code.md) request and passing in passing in `access_code_id` as a query parameter. For example:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
access_code_id = "ddb6e6b7-7156-471e-9199-4106db2f2e57"
pprint(seam.access_codes.unmanaged.delete(access_code = access_code_id))
```

**Response:**

```
ActionAttempt(action_attempt_id='364e747f-9631-4eb1-bc9e-24cd1f11cf3b',
              action_type='DELETE_UNMANAGED_ACCESS_CODE',
              status='success',
              result={},
              error=None)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/access_codes/unmanaged/delete' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "ddb6e6b7-7156-471e-9199-4106db2f2e57"
}'
```

**Response:**

```json
{
  "action_attempt": {
    "status": "pending",
    "action_type": "DELETE_UNMANAGED_ACCESS_CODE",
    "action_attempt_id": "364e747f-9631-4eb1-bc9e-24cd1f11cf3b",
    "result": null,
    "error": null
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
console.log(await seam.accessCodes.unmanaged.delete({
  access_code_id: "ddb6e6b7-7156-471e-9199-4106db2f2e57"
}))
```

**Response:**

```json
{
  actionAttempt: {
    status: 'success',
    action_attempt_id: '364e747f-9631-4eb1-bc9e-24cd1f11cf3b',
    action_type: 'DELETE_UNMANAGED_ACCESS_CODE',
    result: {},
    error: null
  }
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
access_code_id = "ddb6e6b7-7156-471e-9199-4106db2f2e57"
client.unmanaged_access_codes.delete(access_code_id).inspect
```

**Response:**

```
<Seam::ActionAttempt:0x00438
  status="success"
  action_type="DELETE_UNMANAGED_ACCESS_CODE"
  action_attempt_id="364e747f-9631-4eb1-bc9e-24cd1f11cf3b"
  result={}>
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var attempt = seam.UnmanagedAccessCodes.ConvertToManaged(accessCodeId: "ddb6e6b7-7156-471e-9199-4106db2f2e57");

Type t = attempt.GetType();
PropertyInfo[] props = t.GetProperties();
foreach (var prop in props)
{
  Console.WriteLine(prop.Name + ": " + prop.GetValue(attempt));
}
```

**Response:**

```
Status: success
ActionType: DELETE_UNMANAGED_ACCESS_CODE
ActionAttemptId: 364e747f-9631-4eb1-bc9e-24cd1f11cf3b
Result: 
Error: 
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
var delete = seam.accessCodes().unmanaged()
        .delete(UnmanagedDeleteRequest.builder()
                .accessCodeId("ddb6e6b7-7156-471e-9199-4106db2f2e57")
                .build());
System.out.println(delete);
```

**Response:**

```json
{
  "ok" : true
}
```
{% endtab %}
{% endtabs %}

The request returns an action attempt, similar to the managed code deletion endpoint. See [Delete an access code](../../../api-clients/access-codes/delete-an-access-code.md) for more details.
