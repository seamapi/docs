---
description: When listing Connect Webviews, you can filter by custom metadata.
---

# Filtering Connect Webviews by Custom Metadata

When you use [List Connect Webviews](../../api-clients/connect-webviews/list-connect-webviews.md), you can filter the list by one or more [custom metadata](attaching-custom-data-to-the-connect-webview.md) pairs. Include the `custom_metadata_has` parameter with an array that specifies the desired key:value pairs.

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
connect_webviews = seam.connect_webviews.list(
  custom_metadata_has = {
    "internal_account_id": "user-1"
  }
)
```

**Response:**

```
ConnectWebview(workspace_id='398d80b7-3f96-47c2-b85a-6f8ba21d07be',
               connect_webview_id='49e050d9-cb4c-4600-b24d-cdf9dd2f92b7',
               status='pending',
               url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=49e050d9-cb4c-4600-b24d-cdf9dd2f92b7&auth_token=C1r8ff3GLSr2L1ifEaCopAgrq2Faht2Dh',
               ...
               custom_metadata={'id': 'internal_id_1'},
               ...
               )
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Request:**

```bash
curl -X 'POST' \
  'https://connect.getseam.com/connect_webviews/list' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "custom_metadata_has": {
    "internal_account_id": "user-1"
  },
}'
```

**Response:**

```json
{
  "connect_webview": {
    "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=3c3f4c15-e7db-47c6-bc5a-1bf206ff269c&auth_token=LrpMC4MVHAY8YJRcNFeX1nQcb7tGNwpot",
    "status": "pending",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "custom_metadata": {
      "id": "internal_id_1"
    },
    ...
  },
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Request:**

```javascript
await seam.connectWebviews.list({
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
});
```

**Response:**

```json
{
  url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=3937fa0b-ab09-4a00-9f10-69864750ed07&auth_token=PVHmtzULRFEQDny776KDsegSQ5t2SsZHR',
  status: 'pending',
  workspace_id: '398d80b7-3f96-47c2-b85a-6f8ba21d07be',
  custom_metadata: { id: 'internalId1' },
  ...
}
```
{% endtab %}

{% tab title="Ruby" %}
**Request:**

```ruby
seam.connect_webviews.list(
  custom_metadata_has: {
    "internal_account_id": "user-1"
  }
)
```

**Response:**

```
<Seam::ConnectWebview:0x00438
  url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=7fe89a3e-a1d7-44dd-b53f-35f8f5f92607&auth_token=3jJWKRBcJvZeGcrA8UnC1y2RieyHDPSwV"
  status="pending"
  workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  custom_metadata={"id"=>"internal_id_1"}
  ...
  >
```
{% endtab %}

{% tab title="PHP" %}
**Request:**

```php
$webviews = $seam->connect_webviews->list(
  custom_metadata_has: array('internal_account_id' => 'user-1')
);
echo json_encode($webviews);
```

**Response:**

```
<Seam::ConnectWebview:0x00438
  url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=7fe89a3e-a1d7-44dd-b53f-35f8f5f92607&auth_token=3jJWKRBcJvZeGcrA8UnC1y2RieyHDPSwV"
  status="pending"
  workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be"
  custom_metadata={"id"=>"internal_id_1"}
  ...
  >
```
{% endtab %}

{% tab title="C#" %}
**Request:**

```csharp
var customMetadata = new Dictionary<string, string>()
{
  {"internal_account_id", "user-1"}
};

var connectWebviews = seam.ConnectWebviews.List(
  customMetadataHas: customMetadata
);

Console.WriteLine(connectWebviews);
```

**Response:**

```
{
  "connect_webview_id": "3874d8b4-4bb5-470a-9fc7-a54931a4b933",
  "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=3874d8b4-4bb5-470a-9fc7-a54931a4b933&auth_token=F9t4SkQ6R8mZjJEBV5K4dwoVdkR6VtjdJ",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "custom_metadata": {
    "id": "user1"
  },
  ...
}
```
{% endtab %}

{% tab title="Java" %}
**Request:**

```java
Map<String, CustomMetadataValue> customMetadata =
    Map.of("internal_account_id", CustomMetadataValue.of(Optional.of("user-1")));

var connectWebviews = seam.connectWebviews().list(ConnectWebviewsListRequest.builder()
                .customMetadataHas(customMetadata)
                .build());
System.out.println(connectWebviews);
```

**Response:**

```json
{
  "connect_webview_id" : "72dffd65-71e0-4035-9c85-199dd756a11c",
  "url" : "https://connect.getseam.com/connect_webviews/view?connect_webview_id=72dffd65-71e0-4035-9c85-199dd756a11c&auth_token=FQea1nN2sMGwLVRsjQXajzNzvven6jbGX",
  "workspace_id" : "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "device_selection_mode" : "none",
  "accepted_providers" : [ "august", "avigilon_alta", "brivo", "schlage", "smartthings", "yale", "nuki", "salto", "controlbyweb", "minut", "my_2n", "kwikset", "ttlock", "noiseaware", "igloohome", "ecobee", "hubitat", "four_suites", "dormakaba_oracode", "lockly", "wyze" ],
  "any_provider_allowed" : false,
  "any_device_allowed" : false,
  "created_at" : "2023-11-16T22:53:57.515Z",
  "login_successful" : false,
  "status" : "pending",
  "custom_redirect_url" : null,
  "wait_for_device_creation" : false,
  "custom_redirect_failure_url" : null,
  "automatically_manage_new_devices" : true,
  "authorized_at" : null,
  "custom_metadata" : {
    "id" : "internalId1"
  },
  "selected_provider" : null
}
```
{% endtab %}
{% endtabs %}
