# List Encoders

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all [encoders](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all encoders.

#### Code:

```javascript
await seam.acs.encoders.list();
```

#### Output:

```javascript
[
  {
    "acs_encoder_id": "681da2d6-4ac6-4b33-8c03-86281b761325",
    "acs_system_id": "c85406d2-214f-4e11-8000-a2e5b5a362a4",
    "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
    "created_at": "2025-06-16T16:54:17.946527Z",
    "display_name": "Encoder 1",
    "errors": [],
    "workspace_id": "f863ac85-2c4e-49ae-8679-3ec2417f1d62"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all encoders.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/list" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output:

```curl
{
  "acs_encoders": [
    {
      "acs_encoder_id": "681da2d6-4ac6-4b33-8c03-86281b761325",
      "acs_system_id": "c85406d2-214f-4e11-8000-a2e5b5a362a4",
      "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
      "created_at": "2025-06-16T16:54:17.946527Z",
      "display_name": "Encoder 1",
      "errors": [],
      "workspace_id": "f863ac85-2c4e-49ae-8679-3ec2417f1d62"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all encoders.

#### Code:

```python
seam.acs.encoders.list()
```

#### Output:

```python
[AcsEncoder(acs_encoder_id="681da2d6-4ac6-4b33-8c03-86281b761325", acs_system_id="c85406d2-214f-4e11-8000-a2e5b5a362a4", connected_account_id="1b9a3e0d-443f-4063-b619-4ca7e2a97750", created_at="2025-06-16T16:54:17.946527Z", display_name="Encoder 1", errors=[], workspace_id="f863ac85-2c4e-49ae-8679-3ec2417f1d62")]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all encoders.

#### Code:

```ruby
seam.acs.encoders.list()
```

#### Output:

```ruby
[{"acs_encoder_id" => "681da2d6-4ac6-4b33-8c03-86281b761325","acs_system_id" => "c85406d2-214f-4e11-8000-a2e5b5a362a4","connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97750","created_at" => "2025-06-16T16:54:17.946527Z","display_name" => "Encoder 1","errors" => [],"workspace_id" => "f863ac85-2c4e-49ae-8679-3ec2417f1d62"}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all encoders.

#### Code:

```php
$seam->acs->encoders->list();
```

#### Output:

```php
[
    [
        "acs_encoder_id" => "681da2d6-4ac6-4b33-8c03-86281b761325",
        "acs_system_id" => "c85406d2-214f-4e11-8000-a2e5b5a362a4",
        "connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
        "created_at" => "2025-06-16T16:54:17.946527Z",
        "display_name" => "Encoder 1",
        "errors" => [],
        "workspace_id" => "f863ac85-2c4e-49ae-8679-3ec2417f1d62",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all encoders.

#### Code:

```seam_cli
seam acs encoders list
```

#### Output:

```seam_cli
[
  {
    "acs_encoder_id": "681da2d6-4ac6-4b33-8c03-86281b761325",
    "acs_system_id": "c85406d2-214f-4e11-8000-a2e5b5a362a4",
    "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
    "created_at": "2025-06-16T16:54:17.946527Z",
    "display_name": "Encoder 1",
    "errors": [],
    "workspace_id": "f863ac85-2c4e-49ae-8679-3ec2417f1d62"
  }
]
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

**`acs_encoder_ids`** *Array* *of UUIDs*

IDs of the encoders that you want to retrieve.

---

**`acs_system_id`** *String*

ID of the access system for which you want to retrieve all encoders.

---

**`acs_system_ids`** *Array* *of UUIDs*

IDs of the access systems for which you want to retrieve all encoders.

---

**`limit`** *Number*

Number of encoders to return.

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---


## Response

{% hint style="success" %}
Returns:
**Array of [acs\_encoders](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "acs_encoder_id": "681da2d6-4ac6-4b33-8c03-86281b761325",
  "acs_system_id": "c85406d2-214f-4e11-8000-a2e5b5a362a4",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
  "created_at": "2025-06-16T16:54:17.946527Z",
  "display_name": "Encoder 1",
  "errors": [],
  "workspace_id": "f863ac85-2c4e-49ae-8679-3ec2417f1d62"
}
```
{% endtab %}
{% endtabs %}
