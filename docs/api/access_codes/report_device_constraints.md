# Report Device Access Code Constraints

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Enables you to report access code-related constraints for a device. Currently, supports reporting supported code length constraints for SmartThings devices.

Specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.


{% tabs %}
{% tab title="JavaScript" %}

Enables you to report access code-related constraints for a device.

#### Code:

```javascript
await seam.accessCodes.reportDeviceConstraints({
  device_id: "cd17e797-e952-47a1-ba47-46bf72934181",
  supported_code_lengths: [4, 5, 6],
  min_code_length: 42,
  max_code_length: 42,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Enables you to report access code-related constraints for a device.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/report_device_constraints" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "cd17e797-e952-47a1-ba47-46bf72934181",
  "supported_code_lengths": [
    4,
    5,
    6
  ],
  "min_code_length": 42,
  "max_code_length": 42
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Enables you to report access code-related constraints for a device.

#### Code:

```python
seam.access_codes.report_device_constraints(
    device_id="cd17e797-e952-47a1-ba47-46bf72934181",
    supported_code_lengths=[4, 5, 6],
    min_code_length=42,
    max_code_length=42,
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Enables you to report access code-related constraints for a device.

#### Code:

```ruby
seam.access_codes.report_device_constraints(
  device_id: "cd17e797-e952-47a1-ba47-46bf72934181",
  supported_code_lengths: [4, 5, 6],
  min_code_length: 42,
  max_code_length: 42,
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Enables you to report access code-related constraints for a device.

#### Code:

```php
$seam->access_codes->report_device_constraints(
    device_id: "cd17e797-e952-47a1-ba47-46bf72934181",
    supported_code_lengths: [4, 5, 6],
    min_code_length: 42,
    max_code_length: 42
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Enables you to report access code-related constraints for a device.

#### Code:

```seam_cli
seam access-codes report-device-constraints --device_id "cd17e797-e952-47a1-ba47-46bf72934181" --supported_code_lengths [4,5,6] --min_code_length 42 --max_code_length 42
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

**`device_id`** *String* (Required)

ID of the device for which you want to report constraints.

---

**`max_code_length`** *Number*

Maximum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

---

**`min_code_length`** *Number*

Minimum supported code length as an integer between 4 and 20, inclusive. You can specify either `min_code_length`/`max_code_length` or `supported_code_lengths`.

---

**`supported_code_lengths`** *Array* *of Numbers*

Array of supported code lengths as integers between 4 and 20, inclusive. You can specify either `supported_code_lengths` or `min_code_length`/`max_code_length`.

---


## Response

{% hint style="success" %}
**Returns:**
void

{% endhint %}


---

## Examples


### Report device constraints (minimum and maximum code lengths)

Enables you to report access code-related constraints for a device.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.accessCodes.reportDeviceConstraints({
  device_id: "cd17e797-e952-47a1-ba47-46bf72934181",
  min_code_length: 4,
  max_code_length: 6,
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_codes/report_device_constraints" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "device_id": "cd17e797-e952-47a1-ba47-46bf72934181",
  "min_code_length": 4,
  "max_code_length": 6
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.access_codes.report_device_constraints(
    device_id="cd17e797-e952-47a1-ba47-46bf72934181",
    min_code_length=4,
    max_code_length=6,
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.access_codes.report_device_constraints(
  device_id: "cd17e797-e952-47a1-ba47-46bf72934181",
  min_code_length: 4,
  max_code_length: 6,
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->access_codes->report_device_constraints(
    device_id: "cd17e797-e952-47a1-ba47-46bf72934181",
    min_code_length: 4,
    max_code_length: 6
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam access-codes report-device-constraints --device_id "cd17e797-e952-47a1-ba47-46bf72934181" --min_code_length 4 --max_code_length 6
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
