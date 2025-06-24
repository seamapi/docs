# Add Entrances to a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Adds [entrances](../../capability-guides/access-systems/retrieving-entrance-details.md) to a specific space.


{% tabs %}
{% tab title="JavaScript" %}

Adds entrances to a specific space.

#### Code

```javascript
await seam.spaces.addAcsEntrances();
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds entrances to a specific space.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/spaces/add_acs_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY"
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Adds entrances to a specific space.

#### Code

```python
seam.spaces.add_acs_entrances()
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds entrances to a specific space.

#### Code

```ruby
seam.spaces.add_acs_entrances()
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds entrances to a specific space.

#### Code

```php
<?php
$seam->spaces->add_acs_entrances();
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Adds entrances to a specific space.

#### Code

```seam_cli
seam spaces add-acs-entrances
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

**`acs_entrance_ids`** *Array* *of UUIDs* (Required)

IDs of the entrances that you want to add to the space.

---

**`space_id`** *String* (Required)

ID of the space to which you want to add entrances.

---


## Response

void

