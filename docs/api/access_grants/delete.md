# Delete an Access Grant
{% hint style="info" %}
**Early Access Preview.** The Access Grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Delete an Access Grant.


{% tabs %}
{% tab title="JavaScript" %}

Deletes an Access Grant.

#### Code:

```javascript
await seam.accessGrants.delete({
  access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes an Access Grant.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "access_grant_id": "403ea27b-af76-4a48-ace9-8f9498f4c25c"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes an Access Grant.

#### Code:

```python
seam.access_grants.delete(access_grant_id="403ea27b-af76-4a48-ace9-8f9498f4c25c")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes an Access Grant.

#### Code:

```ruby
seam.access_grants.delete(access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes an Access Grant.

#### Code:

```php
$seam->access_grants->delete(
    access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes an Access Grant.

#### Code:

```seam_cli
seam access-grants delete --access_grant_id "403ea27b-af76-4a48-ace9-8f9498f4c25c"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`access_grant_id`** *String* (Required)

ID of Access Grant to delete.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

