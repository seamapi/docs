---
description: List all Connect Webviews on the Account
---

# List Connect Webviews

{% swagger method="get" path="/connect_webviews/list" baseUrl="https://connect.getseam.com" summary="Fetch list of Connect Webviews" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" required="false" %}
Bearer <API_KEY>
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Payload with Connect Webviews" %}
```javascript
{
  "connect_webviews": [
    {
      "connect_webview_id": "4f98efc0-df9c-4be0-b5ac-1c7a60e44ad1",
      "custom_metadata": {},
      "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=4f98efc0-df9c-4be0-b5ac-1c7a60e44ad1&auth_token=Q7RPKrBwpdS9pLaHRbme7SF491SHv6dUv",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "device_selection_mode": "none",
      "accepted_providers": [
        "schlage"
      ],
      "selected_provider": "schlage",
      "accepted_devices": [],
      "any_provider_allowed": false,
      "any_device_allowed": null,
      "created_at": "2022-08-24T08:58:00.444Z",
      "login_successful": false,
      "authorized_at": null,
      "status": "pending",
      "connected_account_id": null
    }
  ],
  "ok": true
}
```
{% endswagger-response %}
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Ruby" %}
```ruby
seam.connect_webviews.list

# [<Seam::ConnectWebview:0x00bd4e8                                                            
#   url="https://connect.getseam.com/connect_webviews/view?connect_webview_id=48880840-278b-4f55-bdc4-42ba8611952b&auth_token=asjDHKADH8392hf923FH"
#   status="pending"                                                                         
#   created_at="2022-07-06T14:18:41.556Z"                                                    
#   workspace_id="182ad8b2-4212-4640-873b-343c10b11c91"                                      
#   accepted_devices=[]                                                                      
#   login_successful=false                                                                   
#   accepted_providers=["august"]               
#   selected_provider="august"                                             
#   any_device_allowed=nil                                                                   
#   connect_webview_id="48880840-278b-4f55-bdc4-42ba8611952b"                                
#   any_provider_allowed=false                                                               
#   device_selection_mode="none">]
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.connectWebviews.list();

// [
//   {
//     connect_webview_id: 'd8e981cb-5f67-461f-9ab8-f7716e8aef4a',
//     url: 'https://connect.getseam.com/connect_webviews/view?connect_webview_id=d8e981cb-5f67-461f-9ab8-f7716e8aef4a&auth_token=L9ASMhP19fTbuWbsTLjWdGLUsT1UAVqLX',
//     workspace_id: 'f97073eb-c003-467a-965b-e6dba3a0131d',
//     device_selection_mode: 'none',
//     accepted_providers: [ 'schlage' ],
//     selected_provider: 'schlage'
//     accepted_devices: [],
//     any_provider_allowed: false,
//     any_device_allowed: null,
//     created_at: '2022-08-23T15:01:55.636Z',
//     login_successful: true,
//     authorized_at: '2022-08-23T15:02:12.295Z',
//     status: 'authorized',
//     connected_account_id: '137db755-0b63-47d6-a2de-3ff673a77e5a'
//   }
// ]
```
{% endtab %}

{% tab title="Python" %}
```python
seam.connect_webviews.list()

# [
#   ConnectWebview(
#     connect_webview_id='d8e981cb-5f67-461f-9ab8-f7716e8aef4a', 
#     status='authorized', 
#     url='https://connect.getseam.com/connect_webviews/view?connect_webview_id=d8e981cb-5f67-461f-9ab8-f7716e8aef4a&auth_token=L9ASMhP19fTbuWbsTLjWdGLUsT1UAVqLX', 
#     login_successful=True, connected_account_id='137db755-0b63-47d6-a2de-3ff673a77e5a'
#   )
# ]
```
{% endtab %}

{% tab title="PHP" %}
```php
$webviews = $seam->connect_webviews->list();
echo json_encode($webviews);
```
{% endtab %}
{% endtabs %}

### Parameters

This method doesn't take any parameters.

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "connect_webviews": [
    {
      "connect_webview_id": "4f98efc0-df9c-4be0-b5ac-1c7a60e44ad1",
      "url": "https://connect.getseam.com/connect_webviews/view?connect_webview_id=4f98efc0-df9c-4be0-b5ac-1c7a60e44ad1&auth_token=Q7RPKrBwpdS9pLaHRbme7SF491SHv6dUv",
      "workspace_id": "f97073eb-c003-467a-965b-e6dba3a0131d",
      "device_selection_mode": "none",
      "accepted_providers": [
        "schlage"
      ],
      "selected_provider": "schlage",
      "accepted_devices": [],
      "any_provider_allowed": false,
      "any_device_allowed": null,
      "created_at": "2022-08-24T08:58:00.444Z",
      "login_successful": false,
      "authorized_at": null,
      "status": "pending",
      "connected_account_id": null
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
