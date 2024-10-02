---
description: Get a Connected Account by its ID
---

# Get a Connected Account

{% swagger src="https://connect.getseam.com/openapi.json" path="/connected_accounts/get" method="post" %}
[https://connect.getseam.com/openapi.json](https://connect.getseam.com/openapi.json)
{% endswagger %}

### Code Examples

#### Retrieving using "connected\_account\_id"

{% tabs %}
{% tab title="Javascript" %}
```javascript
const connectedAccount = await seam.connectedAccounts.get({
  connected_account_id: "123e4567-e89b-12d3-a456-426614174000"
})

console.log(connectedAccount)
```
{% endtab %}

{% tab title="Python" %}
```python
# Get a connected account by its ID
connected_account = seam.connected_accounts.get("123e4567-e89b-12d3-a456-426614174000")

# Print the details of the connected account
print(connected_account)
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Use the Seam SDK to get a connected account by its id
connected_account = seam.connected_accounts.get(
    connected_account_id: "123e4567-e89b-12d3-a456-426614174000"
)

# Print the details of the connected account
puts connected_account
```
{% endtab %}

{% tab title="PHP" %}
```php
// Get a connected account by its ID
$connected_account = $seam->connected_accounts->get(
  "123e4567-e89b-12d3-a456-426614174000"
);

echo json_encode($connected_account);
```
{% endtab %}
{% endtabs %}

#### Retrieving using "email"

{% tabs %}
{% tab title="Ruby" %}
```ruby
connect_account = seam.connected_accounts.get(
    email: "jane@example.com"
)

puts connect_account
# <Seam::ConnectedAccount:0x00ed1e8                                                            
#   connected_account_id="282f9d15-d979-4de7-b4eb-7097c401e910"                                
#   created_at="2022-07-06T09:43:07.125Z"                                                      
#   user_identifier={"email": "jane@example.com"}                                                                    
#   account_type="smartthings"> 
```
{% endtab %}
{% endtabs %}

### Parameters

| `connected_account_id` | <p>type: string<br>Optional</p> | <p><br>ID of the Connected Account</p> |
| ---------------------- | ------------------------------- | -------------------------------------- |
| `email`                | <p>type: string<br>Optional</p> | Email associated with the account      |

### Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

#### JSON format

{% tabs %}
{% tab title="JSON" %}
```json
{
  "connected_account": {
    "connected_account_id": "9dcedcb3-5ede-4b66-9e07-f9ef97b3c29b",
    "created_at": "2022-08-24T10:38:05.128Z",
    "user_identifier": {
      "email": "jane@example.com"
    },
    "account_type": "schlage",
    "errors": []
  },
  "ok": true
}
```
{% endtab %}
{% endtabs %}
