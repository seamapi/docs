---
description: Learn how to migrate existing lock access codes into Seam
---

# Migrating Existing Unmanaged Access Codes

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
seam.access_codes.unmanaged.list(
  device_id="11111111-1111-1111-1111-444444444444"
)
```

**Response:**

```
[
  UnmanagedAccessCode(
    access_code_id='11111111-1111-1111-1111-999999999999',
    device_id='11111111-1111-1111-1111-444444444444',
    is_managed=False,
    ...
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
# Use GET or POST.
curl -X 'GET' \
  'https://connect.getseam.com/access_codes/unmanaged/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "device_id": "11111111-1111-1111-1111-444444444444"
}'
```

**Response:**

```json
{
  "access_codes": [
    {
      "access_code_id": "11111111-1111-1111-1111-999999999999",
      "device_id": "11111111-1111-1111-1111-444444444444",
      "is_managed": false,
      ...
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.accessCodes.unmanaged.list({
  device_id: "11111111-1111-1111-1111-444444444444"
})
```

**Response:**

```json
[
  {
    access_code_id: '11111111-1111-1111-1111-999999999999',
    device_id: '11111111-1111-1111-1111-444444444444',
    is_managed: false,
    ...
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
client.unmanaged_access_codes.list(
  device_id: "11111111-1111-1111-1111-444444444444"
)
```

**Response:**

```
[
  <Seam::AccessCode:0x00438
    access_code_id="11111111-1111-1111-1111-999999999999"
    device_id="11111111-1111-1111-1111-444444444444"
    is_managed=false
    ...
  >
  ...
]
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
seam.UnmanagedAccessCodes.List(
  deviceId: "11111111-1111-1111-1111-444444444444"
);
```

**Response:**

```json
{
  "access_code_id": "11111111-1111-1111-1111-999999999999",
  "device_id": "11111111-1111-1111-1111-444444444444",
  "is_managed": false,
  ...
}
...
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
seam.accessCodes().unmanaged().list(UnmanagedListRequest.builder()
        .deviceId("11111111-1111-1111-1111-444444444444")
        .build());
```

**Response:**

```json
[
  {
    "access_code_id" : "11111111-1111-1111-1111-999999999999",
    "device_id" : "11111111-1111-1111-1111-444444444444",
    "is_managed" : "false",
    ...
  },
  ...
]
```
{% endtab %}
{% endtabs %}

## Converting Unmanaged Codes into Managed Codes

You can convert unmanaged access codes into managed ones using the [Convert an Unmanaged Access Code](../../../api-clients/access-codes/convert-an-unmanaged-access-code.md) request, passing in `access_code_id` as a query parameter. For example:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
seam.access_codes.unmanaged.convert_to_managed(
  access_code_id = "11111111-1111-1111-1111-999999999999"
)
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
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-999999999999"
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
await seam.accessCodes.unmanaged.convertToManaged({
  access_code_id: "11111111-1111-1111-1111-999999999999"
})
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
client.unmanaged_access_codes.convert_to_managed(
  access_code_id: "11111111-1111-1111-1111-999999999999"
)
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
seam.UnmanagedAccessCodes.ConvertToManaged(
  accessCodeId: "11111111-1111-1111-1111-999999999999"
);
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
seam.accessCodes().unmanaged().convertToManaged(UnmanagedConvertToManagedRequest.builder()
        .accessCodeId("11111111-1111-1111-1111-999999999999")
        .build());
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
seam.access_codes.unmanaged.delete(
  access_code_id = "11111111-1111-1111-1111-999999999999"
)
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
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "access_code_id": "11111111-1111-1111-1111-999999999999"
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
await seam.accessCodes.unmanaged.delete({
  access_code_id: "11111111-1111-1111-1111-999999999999"
});
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
client.unmanaged_access_codes.delete(
  access_code_id: "11111111-1111-1111-1111-999999999999"
)
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
seam.UnmanagedAccessCodes.Delete(
  accessCodeId: "11111111-1111-1111-1111-999999999999"
);
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
seam.accessCodes().unmanaged()
  .delete(UnmanagedDeleteRequest.builder()
    .accessCodeId("11111111-1111-1111-1111-999999999999")
    .build());
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
