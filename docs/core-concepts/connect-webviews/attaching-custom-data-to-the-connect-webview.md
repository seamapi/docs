---
description: >-
  Use custom metadata to link internal IDs from your application to a Seam
  Connect Webview and connected account.
---

# Attaching Custom Data to the Connect Webview

You can use custom metadata to identify the user or other internal resources for whom your app created a [Connect Webview](./). This feature is useful for tracking customer information or internal IDs, enabling you to look up an internal resource when your app receives a completed Connect Webview event. You can use this functionality to store a custom payload or object, tailored to the specific needs of your app, in both the `connect_webview` and `connected_account` objects within your Seam [workspace](../workspaces/).

The `connect_webview` object includes an optional `custom_metadata` property that accepts up to 50 key:value pairs. For more information about this property, see [`connect_webview` Properties](../../api-clients/connect-webviews/#connect\_webview-properties). When a Connect Webview completes successfully, Seam creates a connected account ([`connected_account`](../../api-clients/connected-accounts/) object) to represent the device account that your user has authorized Seam to access. As part of this `connected_account` creation, Seam copies any `custom_metadata` from the associated `connect_webview` and stores this information in an analogous `custom_metadata` property for the `connected_account`.

{% hint style="info" %}
If you leave the `custom_metadata` property empty for a `connect_webview`, Seam sets the `custom_metadata` for the `connect_webview` and the `custom_metadata` for the `connected_account` to `{}` by default.
{% endhint %}

If you store an internal ID from your app in the `custom_metadata` for the Connect Webview, then, when Seam creates a resulting connected account, the `custom_metadata` property for the connected account also contains this internal ID.

This transfer of custom metadata process occurs as follows:

1. You app calls [`/connect_webviews/create`](../../api-clients/connect-webviews/create-a-connect-webview.md), specifying the internal ID as a key:value pair in the `custom_metadata`.\
   For example:

{% tabs %}
{% tab title="Python" %}
**Request:**

```python
internal_id = "internal_id_1"

created_connect_webview = seam.connect_webviews.create(
  provider_category = "stable",
  custom_metadata = {
    "id": internal_id
  }
)

pprint(created_connect_webview)
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
  'https://connect.getseam.com/connect_webviews/create' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer ${API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
  "provider_category": "stable",
  "custom_metadata": {
    "id": "internal_id_1"
  }
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
const internalId = "internalId1"

const createdConnectWebview = await seam.connectWebviews.create({
  provider_category: "stable",
  custom_metadata: {
    "id": internalId
  }
})

console.log(createdConnectWebview)
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
internal_id = "internal_id_1"

created_connect_webview = client.connect_webviews.create(
  provider_category: "stable",
  custom_metadata: {
    "id": internal_id
  }
)

puts created_connect_webview.inspect
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
var internalId = "internalId1";
var customMetadata = new Dictionary<string, string>()
{
  {"id", internalId}
};

var createdConnectWebview = seam.ConnectWebviews.Create(
  providerCategory: Seam.Api.ConnectWebviews.CreateRequest.ProviderCategoryEnum.Stable,
  customMetadata: customMetadata
);

Console.WriteLine(createdConnectWebview);
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
    Map.of("id", CustomMetadataValue.of(Optional.of("internalId1")));

ConnectWebview createdConnectWebview = seam.connectWebviews().create(ConnectWebviewsCreateRequest.builder()
                .providerCategory(ProviderCategory.STABLE)
                .customMetadata(customMetadata)
                .build());
System.out.println(createdConnectWebview);
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

2. Your app presents the Connect Webview to your user.
3. The user completes the Connect Webview.
4. Seam creates a connected account containing the user's device account information.\
   This connected account includes a `custom_metadata` property that automatically contains the information that you set in the `custom_metadata` property for the Connect Webview.
5. To retrieve the ID of the connected account associated with the completed Connect Webview, [get the `connect_webview`](../../api-clients/connect-webviews/get-a-connect-webview.md) and check the `connected_account_id` property.
6. To retrieve the connected account, [get the `connected_account`](../../api-clients/connected-accounts/get-a-connected-account.md) with the ID that you identified in the previous step.
7. Within the returned `connected_account`, view the `custom_metadata`.

{% hint style="info" %}
If a Connect Webview was used to connect an existing connected account (for example, to reconnect a disconnected account), Seam will replace any existing `custom metadata` in the `connected_account` object with the new payload.
{% endhint %}
