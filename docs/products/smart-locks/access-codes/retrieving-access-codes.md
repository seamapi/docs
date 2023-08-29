---
description: >-
  Learn how to retrieve access codes using various filters or by referencing
  their specific IDs
---

# Retrieving Access Codes

## Retrieving all access codes for a device

To retrieve all access codes for a device, include the `device_id` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.



<!-- CODE INJECT START
List the access codes for a device. Please use device_id "7a83ddc8-b9d9-4944-9457-46b31e654bdc"
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript

const accessCodes = await seam.accessCodes.list({
  device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc"
});

console.log(accessCodes);
```
{% endtab %}
{% tab title="Python" %}
```python
access_codes = seam.access_codes.list(device="7a83ddc8-b9d9-4944-9457-46b31e654bdc")
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
access_code_list = seam.access_codes.list(device_id: "7a83ddc8-b9d9-4944-9457-46b31e654bdc")
```
{% endtab %}
{% tab title="PHP" %}
```php
$device_access_codes = $seam->access_codes->list([
  'device_id' => "7a83ddc8-b9d9-4944-9457-46b31e654bdc"
]);

echo json_encode($device_access_codes);
```
{% endtab %}
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
<!-- CODE INJECT END -->


***

## Retrieving access codes using their IDs

To retrieve access codes by their IDs, include their `access_code_ids` in the [List Access Codes](../../../api-clients/access-codes/list-access-codes.md) request.

<!-- CODE INJECT START
List access codes using their ids. Please use the following access code ids: "ed4a1f62-9070-4379-8c46-ea30a99e4d74" and "170f9da1-ad0e-46c2-a37b-a9959843ecf5"
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript
const accessCodeIds = ["ed4a1f62-9070-4379-8c46-ea30a99e4d74", "170f9da1-ad0e-46c2-a37b-a9959843ecf5"];

const accessCodes = await seam.accessCodes.list({
  access_code_ids: accessCodeIds
})
```
{% endtab %}
{% tab title="Python" %}
```python

access_code_ids = ["ed4a1f62-9070-4379-8c46-ea30a99e4d74", "170f9da1-ad0e-46c2-a37b-a9959843ecf5"]
seam.access_codes.list(access_code_ids=access_code_ids)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
# not implemented; contact us if you need immediate support
```
{% endtab %}
{% tab title="PHP" %}
```php
/** not implemented; contact us if you need immediate support **/
```
{% endtab %}
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
<!-- CODE INJECT END -->


***

## Retrieving individual access codes

To retrieve a specific access code, include its `access_code_id` in the [Get Access Code](../../../api-clients/access-codes/get-an-access-code.md) request.

<!-- CODE INJECT START
Get a single access code using its id. Please use the following access code id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74"
-->
{% tabs %}
{% tab title="Javascript" %}
```javascript

const accessCode = await seam.accessCodes.get({
  access_code_id: "ed4a1f62-9070-4379-8c46-ea30a99e4d74"
})

console.log(accessCode)
```
{% endtab %}
{% tab title="Python" %}
```python

access_code = seam.access_codes.get("ed4a1f62-9070-4379-8c46-ea30a99e4d74")


print(access_code)
```
{% endtab %}
{% tab title="Ruby" %}
```ruby
access_code_id = "ed4a1f62-9070-4379-8c46-ea30a99e4d74"
access_code = seam.access_codes.get(access_code_id)

print(access_code)
```
{% endtab %}
{% tab title="PHP" %}
```php
$access_code = $seam->access_codes->get("ed4a1f62-9070-4379-8c46-ea30a99e4d74");

echo json_encode($access_code);
```
{% endtab %}
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
<!-- CODE INJECT END -->

