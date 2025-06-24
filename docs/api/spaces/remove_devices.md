# Remove Devices from a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Removes devices from a specific space.


{% tabs %}
{% tab title="JavaScript" %}

Removes devices from a specific space.

#### Code

```javascript
await seam.spaces.removeDevices();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Removes devices from a specific space.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/spaces/remove_devices" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Removes devices from a specific space.

#### Code

```python
seam.spaces.remove_devices()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Removes devices from a specific space.

#### Code

```ruby
seam.spaces.remove_devices()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Removes devices from a specific space.

#### Code

```php
<?php
$seam->spaces->remove_devices();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Removes devices from a specific space.

#### Code

```seam_cli
seam spaces remove-devices
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

**`device_ids`** *Array* *of UUIDs* (Required)

IDs of the devices that you want to remove from the space.

---

**`space_id`** *String* (Required)

ID of the space from which you want to remove devices.

---


## Response

void

