# Get an Encoder

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [encoder](../../../capability-guides/access-systems/working-with-card-encoders-and-scanners/README.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified encoder.

#### Code:

```javascript
await seam.acs.encoders.get({
  acs_encoder_id: "4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
});
```

#### Output:

```javascript
{
  "acs_encoder_id": "4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
  "acs_system_id": "c85406d2-214f-4e11-8000-a2e5b5a362a4",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
  "created_at": "2025-06-16T16:54:17.946527Z",
  "display_name": "Encoder 1",
  "errors": [],
  "workspace_id": "f863ac85-2c4e-49ae-8679-3ec2417f1d62"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified encoder.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/encoders/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_encoder_id": "4bccf994-21a6-4a6d-bc6d-5b0311d1686a"
}
EOF
```

#### Output:

```curl
{
  "acs_encoder": {
    "acs_encoder_id": "4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
    "acs_system_id": "c85406d2-214f-4e11-8000-a2e5b5a362a4",
    "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
    "created_at": "2025-06-16T16:54:17.946527Z",
    "display_name": "Encoder 1",
    "errors": [],
    "workspace_id": "f863ac85-2c4e-49ae-8679-3ec2417f1d62"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified encoder.

#### Code:

```python
seam.acs.encoders.get(acs_encoder_id="4bccf994-21a6-4a6d-bc6d-5b0311d1686a")
```

#### Output:

```python
AcsEncoder(
    acs_encoder_id="4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
    acs_system_id="c85406d2-214f-4e11-8000-a2e5b5a362a4",
    connected_account_id="1b9a3e0d-443f-4063-b619-4ca7e2a97750",
    created_at="2025-06-16T16:54:17.946527Z",
    display_name="Encoder 1",
    errors=[],
    workspace_id="f863ac85-2c4e-49ae-8679-3ec2417f1d62",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified encoder.

#### Code:

```ruby
seam.acs.encoders.get(acs_encoder_id: "4bccf994-21a6-4a6d-bc6d-5b0311d1686a")
```

#### Output:

```ruby
{
  "acs_encoder_id" => "4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
  "acs_system_id" => "c85406d2-214f-4e11-8000-a2e5b5a362a4",
  "connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
  "created_at" => "2025-06-16T16:54:17.946527Z",
  "display_name" => "Encoder 1",
  "errors" => [],
  "workspace_id" => "f863ac85-2c4e-49ae-8679-3ec2417f1d62",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified encoder.

#### Code:

```php
$seam->acs->encoders->get(
    acs_encoder_id: "4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
);
```

#### Output:

```php
[
    "acs_encoder_id" => "4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
    "acs_system_id" => "c85406d2-214f-4e11-8000-a2e5b5a362a4",
    "connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97750",
    "created_at" => "2025-06-16T16:54:17.946527Z",
    "display_name" => "Encoder 1",
    "errors" => [],
    "workspace_id" => "f863ac85-2c4e-49ae-8679-3ec2417f1d62",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified encoder.

#### Code:

```seam_cli
seam acs encoders get --acs_encoder_id "4bccf994-21a6-4a6d-bc6d-5b0311d1686a"
```

#### Output:

```seam_cli
{
  "acs_encoder_id": "4bccf994-21a6-4a6d-bc6d-5b0311d1686a",
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


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_encoder_id`** *String* (Required)

ID of the encoder that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[acs\_encoder](.)

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
