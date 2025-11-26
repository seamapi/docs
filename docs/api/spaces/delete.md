# Delete a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a space.


{% tabs %}
{% tab title="JavaScript" %}

Deletes a space.

#### Code:

```javascript
await seam.spaces.delete({ space_id: "a7cd0163-4e94-41ae-b5b7-da6040a65509" });
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a space.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "space_id": "a7cd0163-4e94-41ae-b5b7-da6040a65509"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a space.

#### Code:

```python
seam.spaces.delete(space_id="a7cd0163-4e94-41ae-b5b7-da6040a65509")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a space.

#### Code:

```ruby
seam.spaces.delete(space_id: "a7cd0163-4e94-41ae-b5b7-da6040a65509")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a space.

#### Code:

```php
$seam->spaces->delete(space_id: "a7cd0163-4e94-41ae-b5b7-da6040a65509");
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a space.

#### Code:

```seam_cli
seam spaces delete --space_id "a7cd0163-4e94-41ae-b5b7-da6040a65509"
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

**`space_id`** *String* (Required)

ID of the space that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

