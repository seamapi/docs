# Delete a Connect Webview

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a [Connect Webview](../../core-concepts/connect-webviews/README.md).

You do not need to delete a Connect Webview once a user completes it. Instead, you can simply ignore completed Connect Webviews.


{% tabs %}
{% tab title="JavaScript" %}

Deletes a Connect Webview.

#### Code:

```javascript
await seam.connectWebviews.delete({
  connect_webview_id: "816f796f-636c-46a9-9fef-7f90ca69e771",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Deletes a Connect Webview.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/connect_webviews/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "connect_webview_id": "816f796f-636c-46a9-9fef-7f90ca69e771"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Deletes a Connect Webview.

#### Code:

```python
seam.connect_webviews.delete(connect_webview_id="816f796f-636c-46a9-9fef-7f90ca69e771")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Deletes a Connect Webview.

#### Code:

```ruby
seam.connect_webviews.delete(connect_webview_id: "816f796f-636c-46a9-9fef-7f90ca69e771")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Deletes a Connect Webview.

#### Code:

```php
$seam->connect_webviews->delete(
    connect_webview_id: "816f796f-636c-46a9-9fef-7f90ca69e771",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Deletes a Connect Webview.

#### Code:

```seam_cli
seam connect-webviews delete --connect_webview_id "816f796f-636c-46a9-9fef-7f90ca69e771"
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`connect_webview_id`** *String* (Required)

ID of the Connect Webview that you want to delete.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}

