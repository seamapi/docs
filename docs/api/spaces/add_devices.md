# Add Devices to a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Adds devices to a specific space.


{% tabs %}
{% tab title="JavaScript" %}

Adds devices to a specific space.

#### Code:

```javascript
await seam.spaces.addDevices({
  space_id: "4d53b5c0-87cd-4de9-832d-025e075e7cd4",
  device_ids: ["22fb4992-463c-4ccd-b568-50fcea243665"],
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds devices to a specific space.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/add_devices" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "space_id": "4d53b5c0-87cd-4de9-832d-025e075e7cd4",
  "device_ids": [
    "22fb4992-463c-4ccd-b568-50fcea243665"
  ]
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Adds devices to a specific space.

#### Code:

```python
seam.spaces.add_devices(
    space_id="4d53b5c0-87cd-4de9-832d-025e075e7cd4",
    device_ids=["22fb4992-463c-4ccd-b568-50fcea243665"],
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds devices to a specific space.

#### Code:

```ruby
seam.spaces.add_devices(
  space_id: "4d53b5c0-87cd-4de9-832d-025e075e7cd4",
  device_ids: ["22fb4992-463c-4ccd-b568-50fcea243665"],
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds devices to a specific space.

#### Code:

```php
$seam->spaces->add_devices(
    space_id: "4d53b5c0-87cd-4de9-832d-025e075e7cd4",
    device_ids: ["22fb4992-463c-4ccd-b568-50fcea243665"]
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Adds devices to a specific space.

#### Code:

```seam_cli
seam spaces add-devices --space_id "4d53b5c0-87cd-4de9-832d-025e075e7cd4" --device_ids ["22fb4992-463c-4ccd-b568-50fcea243665"]
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

**`device_ids`** *Array* *of UUIDs* (Required)

IDs of the devices that you want to add to the space.

---

**`space_id`** *String* (Required)

ID of the space to which you want to add devices.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

