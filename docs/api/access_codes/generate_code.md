# Generate a Code

- [Request Parameters](#request-parameters)
- [Response](#response)

Generates a code for an [access code](https://docs.seam.co/latest/capability-guides/smart-locks/access-codes), given a device ID.


{% tabs %}
{% tab title="JavaScript" %}

Generates a code for an access code, given a device ID.

#### Code:

```javascript
await seam.accessCodes.generateCode({
  device_id: "02cd5099-d9f8-45a1-a9c0-f2ecbd334792",
});
```

#### Output:

```javascript
{ "device_id": "02cd5099-d9f8-45a1-a9c0-f2ecbd334792", "code": "1234" }
```
{% endtab %}

{% tab title="cURL" %}

Generates a code for an access code, given a device ID.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/generate_code" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "02cd5099-d9f8-45a1-a9c0-f2ecbd334792"
}
EOF
```

#### Output:

```curl
{
  "generated_code": {
    "device_id": "02cd5099-d9f8-45a1-a9c0-f2ecbd334792",
    "code": "1234"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Generates a code for an access code, given a device ID.

#### Code:

```python
seam.access_codes.generate_code(device_id="02cd5099-d9f8-45a1-a9c0-f2ecbd334792")
```

#### Output:

```python
AccessCode(device_id="02cd5099-d9f8-45a1-a9c0-f2ecbd334792", code="1234")
```
{% endtab %}

{% tab title="Ruby" %}

Generates a code for an access code, given a device ID.

#### Code:

```ruby
seam.access_codes.generate_code(device_id: "02cd5099-d9f8-45a1-a9c0-f2ecbd334792")
```

#### Output:

```ruby
{ "device_id" => "02cd5099-d9f8-45a1-a9c0-f2ecbd334792", "code" => "1234" }
```
{% endtab %}

{% tab title="PHP" %}

Generates a code for an access code, given a device ID.

#### Code:

```php
$seam->access_codes->generate_code(
    device_id: "02cd5099-d9f8-45a1-a9c0-f2ecbd334792",
);
```

#### Output:

```php
["device_id" => "02cd5099-d9f8-45a1-a9c0-f2ecbd334792", "code" => "1234"];
```
{% endtab %}

{% tab title="Seam CLI" %}

Generates a code for an access code, given a device ID.

#### Code:

```seam_cli
seam access-codes generate-code --device_id "02cd5099-d9f8-45a1-a9c0-f2ecbd334792"
```

#### Output:

```seam_cli
{ "device_id": "02cd5099-d9f8-45a1-a9c0-f2ecbd334792", "code": "1234" }
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

**`device_id`** *String* (Required)

ID of the device for which you want to generate a code.

---


## Response

{% hint style="success" %}
Returns:
[access\_code](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_code_id": "e9cf6dd6-89aa-477f-a701-c08f3de13c1f",
  "code": "1234",
  "common_code_key": null,
  "created_at": "2025-06-14T16:54:17.946242Z",
  "device_id": "c9cd621d-ef0c-45c8-b608-026ebdb74615",
  "ends_at": "2025-07-04T16:54:17.946049Z",
  "errors": [],
  "is_backup": false,
  "is_backup_access_code_available": false,
  "is_external_modification_allowed": false,
  "is_managed": true,
  "is_offline_access_code": true,
  "is_one_time_use": true,
  "is_scheduled_on_device": true,
  "is_waiting_for_code_assignment": false,
  "name": "My Access Code",
  "pulled_backup_access_code_id": null,
  "starts_at": "2025-07-02T16:54:17.946049Z",
  "status": "set",
  "type": "time_bound",
  "warnings": [],
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}
{% endtabs %}
