---
description: >-
  Learn how to retrieve access codes using various filters or by referencing
  their specific IDs
---

# Retrieving access codes

## Retrieving all access codes for a device

To retrieve all access codes for a device, include the `device_id` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.



<!-- CODE INJECT START
Using a device, retrieve the access codes of that device. If you need to use a string for the device id, use "7a83ddc8-b9d9-4944-9457-46b31e654bdc"

e.g. in python you could do:
```python
access_codes = seam.access_codes.list(device="7a83ddc8-b9d9-4944-9457-46b31e654bdc")
print(access_codes)
```
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const accessCodes = await seam.accessCodes.list({
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc"
})

console.log(accessCodes)
```
{% endtab %}
{% tab title="Python" %}
```python

device_id = "device3"
access_codes_for_device = seam.access_codes.list(device_id)

print(access_codes_for_device)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
device_id = '7a83ddc8-b9d9-4944-9457-46b31e654bdc'

access_codes = seam.access_codes.list(device_id)
puts access_codes
```
{% endtab %}
{% tab title="PHP" %}
```php
$device_id = "7a83ddc8-b9d9-4944-9457-46b31e654bdc";
$access_codes = $seam->access_codes->list(['device_id' => $device_id]);

echo json_encode($access_codes);
```
{% endtab %}
{% endtabs %}
<!-- CODE INJECT END -->

{% tabs %}
{% tab title="Curl" %}
#### Request:

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/list' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "device_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

#### Response:

```
{
  "access_codes": [
    {
      "access_code_id": "11111111-1111-1111-1111-111111111111",
      "device_id": "00000000-0000-0000-0000-000000000000",
      "name": "Access Code",
      "code": "1234",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "created_at": "2023-01-01T00:00:00Z",
      "errors": [],
      "warnings": [],
      "is_managed": true
    },
    ...
  ]
}
```
{% endtab %}
{% endtabs %}

***

## Retrieving access codes using their IDs

To retrieve access codes by their IDs, include their `access_code_ids` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.

{% tabs %}
{% tab title="Curl" %}
#### Request:

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/list' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_ids": [
    "00000000-0000-0000-0000-000000000000",
    "11111111-1111-1111-1111-111111111111"
  ]
 }'
</code></pre>

#### Response:

```
{
  "access_codes": [
    {
      "access_code_id": "00000000-0000-0000-0000-000000000000",
      "device_id": "22222222-2222-2222-2222-222222222222",
      "name": "Access Code 0",
      "code": "1234",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "created_at": "2023-01-01T00:00:00Z",
      "errors": [],
      "warnings": [],
      "is_managed": true
    },
    {
      "access_code_id": "11111111-1111-1111-1111-111111111111",
      "device_id": "33333333-3333-3333-3333-333333333333",
      "name": "Access Code 1",
      "code": "1111",
      "common_code_key": null,
      "type": "ongoing",
      "status": "set",
      "created_at": "2023-01-01T00:00:00Z",
      "errors": [],
      "warnings": [],
      "is_managed": true
    },
  ]
}
```
{% endtab %}
{% endtabs %}

***

## Retrieving individual access codes

To retrieve a specific access code, include its `access_code_id` in the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) request.

{% tabs %}
{% tab title="Curl" %}
#### Request:

<pre class="language-bash"><code class="lang-bash"><strong>$ curl --request POST 'https://connect.getseam.com/access_codes/get' \
</strong>--header 'Authorization: Bearer ${API_KEY}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "access_code_id": "00000000-0000-0000-0000-000000000000"
 }'
</code></pre>

#### Response:

```
{
  "access_code": {
    "access_code_id": "00000000-0000-0000-0000-000000000000",
    "device_id": "11111111-1111-1111-1111-111111111111",
    "name": "Access Code",
    "code": "1234",
    "common_code_key": null,
    "type": "ongoing",
    "status": "set",
    "created_at": "2023-01-01T00:00:00Z",
    "errors": [],
    "warnings": [],
    "is_managed": true
  }
}
```
{% endtab %}
{% endtabs %}
