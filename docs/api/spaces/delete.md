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

#### Code

```javascript
await seam.spaces.delete();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a space.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/spaces/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a space.

#### Code

```python
seam.spaces.delete()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a space.

#### Code

```ruby
seam.spaces.delete()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a space.

#### Code

```php
<?php
$seam->spaces->delete();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a space.

#### Code

```seam_cli
seam spaces delete
```

#### Output

```seam_cli
{}
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

**`space_id`** *String* (Required)

ID of the space that you want to delete.

---


## Response

void

