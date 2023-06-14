---
description: Create access codes across multiple devices that share a common code
---

# Create many Access Codes

{% swagger src="../../.gitbook/assets/openapi (2).json" path="/access_codes/create_multiple" method="post" %}
[openapi (2).json](<../../.gitbook/assets/openapi (2).json>)
{% endswagger %}

  ### Code Example

{% tabs %}
{% tab title="Javascript" %}
```javascript
await seam.accessCodes.createMultiple({
    device_id: [
      "a83690b2-2b70-409a-9a94-426699b84c97", 
      "7bfe1838-5e64-432c-adb6-34e971bda001"
    ],
});

/*
[
  {
    code: '9913',
    type: 'ongoing',
    status: 'setting',
    created_at: '2022-08-26T11:08:24.161Z',
    access_code_id: 'e0e31756-9385-408b-89f8-9f5ea43f9adf',
    device_id: 'a83690b2-2b70-409a-9a94-426699b84c97',
    common_code_key: 'auto_set_by_create_multiple_996c8131-34a4-4d58-86c4-7820f2ccdefb',    
  },
  {
    code: '9913',
    type: 'ongoing',
    status: 'setting',
    created_at: '2022-08-26T11:08:24.161Z',
    access_code_id: 'f3a89135-1101-4197-b272-4b4c5ed092b5',
    device_id: '7bfe1838-5e64-432c-adb6-34e971bda001',
    common_code_key: 'auto_set_by_create_multiple_996c8131-34a4-4d58-86c4-7820f2ccdefb',    
  }
]
*/
```
{% endtab %}
{% endtabs %}

### Parameters

| `device_ids`                          | type: string\[]                                           | <p><br>ID of the Device</p>                                                                                                                                                |
| ------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                | <p>type: string<br>Optional</p>                           | Name of Access Codes                                                                                                                                                       |
| `starts_at`                           | <p>type: string<br>Optional</p>                           | From when is the code valid                                                                                                                                                |
| `ends_at`                             | <p>type: string<br>Optional</p>                           | Code expiry                                                                                                                                                                |
| `behavior_when_code_cannot_be_shared` | <p>type: enum<br>Optional, default <code>throw</code></p> | If `throw`, no access codes will be created if any device cannot share a code. If `create_random_code`, a random code will be created on devices that cannot share a code. |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "access_codes": [
    {
      "code": "9913",
      "type": "ongoing",
      "status": "setting",
      "created_at": "2022-08-26T11:08:24.161Z",
      "access_code_id": "e0e31756-9385-408b-89f8-9f5ea43f9adf",
      "device_id": "a83690b2-2b70-409a-9a94-426699b84c97",
      "common_code_key": "auto_set_by_create_multiple_996c8131-34a4-4d58-86c4-7820f2ccdefb",    
    },
    {
      "code": "9913",
      "type": "ongoing",
      "status": "setting",
      "created_at": "2022-08-26T11:08:24.161Z",
      "access_code_id": "f3a89135-1101-4197-b272-4b4c5ed092b5",
      "device_id": "7bfe1838-5e64-432c-adb6-34e971bda001",
      "common_code_key": "auto_set_by_create_multiple_996c8131-34a4-4d58-86c4-7820f2ccdefb",    
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
