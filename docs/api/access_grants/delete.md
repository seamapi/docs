# Delete an Access Grant
{% hint style="info" %}
**Early Access Preview.** The access grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Delete an access grant.


{% tabs %}
{% tab title="JavaScript" %}

Deletes an access grant.

#### Code

```javascript
await seam.accessGrants.delete({
  access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes an access grant.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_grant_id": "403ea27b-af76-4a48-ace9-8f9498f4c25c"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes an access grant.

#### Code

```python
seam.access_grants.delete(access_grant_id="403ea27b-af76-4a48-ace9-8f9498f4c25c")
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes an access grant.

#### Code

```ruby
seam.access_grants.delete(access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes an access grant.

#### Code

```php
<?php
$seam->access_grants->delete(
    access_grant_id: "403ea27b-af76-4a48-ace9-8f9498f4c25c"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes an access grant.

#### Code

```seam_cli
seam access-grants delete --access_grant_id "403ea27b-af76-4a48-ace9-8f9498f4c25c"
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

**`access_grant_id`** *String* (Required)

ID of access grant to delete.

---


## Response

void

