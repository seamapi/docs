# Get an Access Method
{% hint style="info" %}
**Early Access Preview.** The access methods API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets an access method.


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified access method.

#### Code:

```javascript
await seam.accessMethods.get({
  access_method_id: "7410aea4-6bed-490c-a602-dd417d9cd075",
});
```

#### Output:

```javascript
{
  "access_method_id": "7410aea4-6bed-490c-a602-dd417d9cd075",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Mobile Key",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "is_card_encoding_required": false,
  "mode": "mobile_key",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified access method.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_methods/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "access_method_id": "7410aea4-6bed-490c-a602-dd417d9cd075"
}
EOF
```

#### Output:

```curl
{
  "access_method": {
    "access_method_id": "7410aea4-6bed-490c-a602-dd417d9cd075",
    "created_at": "2025-06-14T16:54:17.946612Z",
    "display_name": "My Mobile Key",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required": false,
    "mode": "mobile_key",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified access method.

#### Code:

```python
seam.access_methods.get(access_method_id="7410aea4-6bed-490c-a602-dd417d9cd075")
```

#### Output:

```python
AccessMethod(access_method_id="7410aea4-6bed-490c-a602-dd417d9cd075", created_at="2025-06-14T16:54:17.946612Z", display_name="My Mobile Key", instant_key_url="https://ik.seam.co/ABCXYZ", is_card_encoding_required=false, mode="mobile_key", workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc")
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified access method.

#### Code:

```ruby
seam.access_methods.get(access_method_id: "7410aea4-6bed-490c-a602-dd417d9cd075")
```

#### Output:

```ruby
{"access_method_id" => "7410aea4-6bed-490c-a602-dd417d9cd075","created_at" => "2025-06-14T16:54:17.946612Z","display_name" => "My Mobile Key","instant_key_url" => "https://ik.seam.co/ABCXYZ","is_card_encoding_required" => false,"mode" => "mobile_key","workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc"}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified access method.

#### Code:

```php
$seam->access_methods->get(
    access_method_id: "7410aea4-6bed-490c-a602-dd417d9cd075",
);
```

#### Output:

```php
[
    "access_method_id" => "7410aea4-6bed-490c-a602-dd417d9cd075",
    "created_at" => "2025-06-14T16:54:17.946612Z",
    "display_name" => "My Mobile Key",
    "instant_key_url" => "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required" => false,
    "mode" => "mobile_key",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified access method.

#### Code:

```seam_cli
seam access-methods get --access_method_id "7410aea4-6bed-490c-a602-dd417d9cd075"
```

#### Output:

```seam_cli
{
  "access_method_id": "7410aea4-6bed-490c-a602-dd417d9cd075",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Mobile Key",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "is_card_encoding_required": false,
  "mode": "mobile_key",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_method_id`** *String* (Required)

ID of access method to get.

---


## Response

{% hint style="success" %}
Returns:
[access\_method](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_method_id": "27d8ad77-55c2-4e20-b5b3-43555926f0e8",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Card",
  "is_card_encoding_required": true,
  "issued_at": "2025-06-14T16:54:17.946612Z",
  "mode": "card",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}
{% endtabs %}
