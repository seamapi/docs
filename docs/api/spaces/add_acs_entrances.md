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

#### Code:

```javascript
await seam.spaces.addAcsEntrances({
  space_id: "9f930664-c0d8-441b-8d66-2b1d0d2466f4",
  acs_entrance_ids: ["b127a710-db3e-402c-afdf-5474769b1d83"],
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds entrances to a specific space.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/add_acs_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "space_id": "9f930664-c0d8-441b-8d66-2b1d0d2466f4",
  "acs_entrance_ids": [
    "b127a710-db3e-402c-afdf-5474769b1d83"
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

Adds entrances to a specific space.

#### Code:

```python
seam.spaces.add_acs_entrances(
    space_id="9f930664-c0d8-441b-8d66-2b1d0d2466f4",
    acs_entrance_ids=["b127a710-db3e-402c-afdf-5474769b1d83"],
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds entrances to a specific space.

#### Code:

```ruby
seam.spaces.add_acs_entrances(
  space_id: "9f930664-c0d8-441b-8d66-2b1d0d2466f4",
  acs_entrance_ids: ["b127a710-db3e-402c-afdf-5474769b1d83"],
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds entrances to a specific space.

#### Code:

```php
$seam->spaces->add_acs_entrances(
    space_id: "9f930664-c0d8-441b-8d66-2b1d0d2466f4",
    acs_entrance_ids: ["b127a710-db3e-402c-afdf-5474769b1d83"],
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Adds entrances to a specific space.

#### Code:

```seam_cli
seam spaces add-acs-entrances --space_id "9f930664-c0d8-441b-8d66-2b1d0d2466f4" --acs_entrance_ids ["b127a710-db3e-402c-afdf-5474769b1d83"]
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

**`acs_entrance_ids`** *Array* *of UUIDs* (Required)

IDs of the entrances that you want to add to the space.

---

**`space_id`** *String* (Required)

ID of the space to which you want to add entrances.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

