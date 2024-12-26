# Delete an Access Code

<mark style="color:red;">`DELETE`</mark> `https://connect.getseam.com/access_codes/delete`

## Request

### Request Parameters

| Name                                               | Type   | Description            |
| -------------------------------------------------- | ------ | ---------------------- |
| access\_code\_id<mark style="color:red;">\*</mark> | String | ID of the access code. |

### Sample Request

{% tabs %}
{% tab title="Ruby" %}
```ruby
seam.access_codes.delete(access_code_id: "123e4567-e89b-12d3-a456-426614174000")

# <Seam::ActionAttempt:0x0000000107026c98 
#  status="success"            
#  action_type="DELETE_ACCESS_CODE",
#  action_attempt_id="af0155aa-51fe-4e63-9acb-2fbd33675cac",
#  result={}>
```
{% endtab %}

{% tab title="Python" %}
```python
seam.access_codes.delete("0080cddd-e0ba-407d-b8c7-d0865bd1e3c4")
```
{% endtab %}

{% tab title="Javascript" %}
```javascript
await seam.accessCodes.delete({
    access_code_id: "1e9c85c3-77dc-481c-8fc1-3a10121ebe67",
});

//{}
```
{% endtab %}
{% endtabs %}

## Response

This section shows the JSON response returned by the API. Since each language encapsulates this response inside objects specific to that language and/or implementation, the actual type in your language might differ from what’s written here.

### Sample Response

{% tabs %}
{% tab title="JSON" %}
```json
{
  "ok": true
}
```
{% endtab %}
{% endtabs %}
