---
description: Learn how to migrate existing lock access codes into Seam
---

# Overview

Prior to using Seam to manage your devices, you may have used another lock management system to manage
the access codes on your devices. Where possible, we will help you keep any existing access codes on devices, and
transition those codes to ones managed by your Seam workspace.

If migrating existing codes into your Seam workspace is not possible, you can still get a list of
these existing codes, and replace them with new access codes managed by your Seam workspace.

# Unmanaged access codes

Seam differentiates between managed access codes and unmanaged access codes. When you create an access code on a device in Seam,
it is created as a managed code. Codes that exist on a device that were not created on Seam are considered unmanaged
codes. We strictly limit the operations that can be performed on unmanaged codes to:

- Viewing a list of the unmanaged codes on a device
- Converting an unmanaged code into a managed code

{% hint style="info" %}
Strictly speaking, unmanaged codes are any codes on a device that were not created by the current workspace. For example,
if you are within _Workspace 1_ and created codes _Code 1_ and _Code 2_, those two codes would be considered unmanaged if you
were looking at the same device in _Workspace 2_. Therefore, unmanaged codes include both codes not managed by Seam at all, and
codes that might be managed by a different workspace within Seam.
{% endhint %}

# Viewing unmanaged codes on a device

You can retrieve a list of all unmanaged access codes for a particular device using a `GET /access_codes/unmanaged/list` request,
passing in `device_id` as a query parameter, for example:

{% swagger method="get" path="/access_codes/unmanaged/list" baseUrl="https://connect.getseam.com" summary="Get a list of unmanaged codes" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="device_id" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

```javascript
{
  "access_codes": [{
    "code": "1988",
    "name": "Code 1",
    "status": "set",
    "created_at": "2022-08-26T12:50:17.858Z",
    "access_code_id": "26d6138c-6524-4f3c-ac96-43cc3bea0a8d",
  }]
}
```

{% endswagger-response %}

{% endswagger %}

# Converting unmanaged codes into managed codes

You can convert unmanaged access codes into managed ones using a `POST /access_codes/unmanaged/update` request,
and passing in a JSON body similar to:

```js
{
    "access_code_id": "xxxx-xxxx-xxxx-xxxx",
    "is_managed": true
}
```

The request will return immediately but the conversion is an asynchronous process that completes in the background.
You can listen to the `access_code.unmanaged.converted_to_managed` and `access_code.unmanaged.failed_to_convert_to_managed` to
be notified when conversion succeeds or fails.

Once an unmanaged code is successfully converted to a managed code, all of the normal managed access code operations and behavior
is available.

# Unsupported conversion

Some third-party device providers strictly limit the information available about existing access codes on a device.
Thus, for devices connected using these providers, we cannot convert unmanaged codes to managed ones. The current
list of providers which do not support conversion are:

- SmartThings
- igloohome

For SmartThings devices, you can still see a list of all unmanaged codes on the devices using the `GET /access_codes/unmanaged/list`
endpoint, but you will not be able to see the actual pin code for the access codes (the `code` property won't be present).
