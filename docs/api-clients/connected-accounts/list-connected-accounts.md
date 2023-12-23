---
description: Get all Connected Accounts associated with your Account
---

# List Connected Accounts

{% swagger src="https://connect.getseam.com/openapi.json" path="/connected_accounts/list" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Example

{% tabs %}
{% tab title="Ruby" %}
<pre class="language-ruby"><code class="lang-ruby"><strong>seam.connected_accounts.list
</strong>
# [&#x3C;Seam::ConnectedAccount:0x00ed1e8                                                            
#   connected_account_id="282f9d15-d979-4de7-b4eb-7097c401e910"                                
#   created_at="2022-07-06T09:43:07.125Z"                                                      
#   user_identifier=nil                                                                        
<strong>#   account_type="smartthings">]
</strong></code></pre>
{% endtab %}

{% tab title="Python" %}
```python
seam.connected_accounts.list()

# [ConnectedAccount(
#   connected_account_id='c6610ba7-88d7-4abf-9852-31eb0257aa56', 
#   created_at='2022-08-23T12:43:49.542Z', 
#   user_identifier={'email': 'jane@example.com'}, 
#   account_type='schlage', 
#   errors=[]
# )]
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.connectedAccounts.list();
  
// {
//   connected_account_id: 'c6610ba7-88d7-4abf-9852-31eb0257aa56',
//   created_at: '2022-08-23T12:43:49.542Z',
//   user_identifier: { email: 'jane@example.com' },
//   account_type: 'schlage',
//   errors: []
// }
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
  "connected_accounts": [
    {
      "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
      "created_at": "2022-08-24T10:38:05.128Z",
      "user_identifier": {
        "email": "jane@example.com"
      },
      "account_type": "schlage",
      "errors": []
    }
  ],
  "ok": true
}
```
{% endtab %}
{% endtabs %}
