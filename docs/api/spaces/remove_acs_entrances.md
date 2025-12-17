# Remove Entrances from a Space
{% hint style="info" %}
**Early Access Preview.** The spaces API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Removes [entrances](../../capability-guides/access-systems/retrieving-entrance-details.md) from a specific space.


{% tabs %}
{% tab title="JavaScript" %}

Removes entrances from a specific space.

#### Code:

```javascript
await seam.spaces.removeAcsEntrances({
  space_id: "674e511a-06c6-4734-b4ce-af467496d5fe",
  acs_entrance_ids: ["fd859a36-199b-4c2f-894a-24d52621f6a4"],
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Removes entrances from a specific space.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/spaces/remove_acs_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "space_id": "674e511a-06c6-4734-b4ce-af467496d5fe",
  "acs_entrance_ids": [
    "fd859a36-199b-4c2f-894a-24d52621f6a4"
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

Removes entrances from a specific space.

#### Code:

```python
seam.spaces.remove_acs_entrances(
    space_id="674e511a-06c6-4734-b4ce-af467496d5fe",
    acs_entrance_ids=["fd859a36-199b-4c2f-894a-24d52621f6a4"],
)
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Removes entrances from a specific space.

#### Code:

```ruby
seam.spaces.remove_acs_entrances(
  space_id: "674e511a-06c6-4734-b4ce-af467496d5fe",
  acs_entrance_ids: ["fd859a36-199b-4c2f-894a-24d52621f6a4"],
)
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Removes entrances from a specific space.

#### Code:

```php
$seam->spaces->remove_acs_entrances(
    space_id: "674e511a-06c6-4734-b4ce-af467496d5fe",
    acs_entrance_ids: ["fd859a36-199b-4c2f-894a-24d52621f6a4"],
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Removes entrances from a specific space.

#### Code:

```seam_cli
seam spaces remove-acs-entrances --space_id "674e511a-06c6-4734-b4ce-af467496d5fe" --acs_entrance_ids ["fd859a36-199b-4c2f-894a-24d52621f6a4"]
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

IDs of the entrances that you want to remove from the space.

---

**`space_id`** *String* (Required)

ID of the space from which you want to remove entrances.

---


## Response

{% hint style="success" %}
Returns:
**void

{% endhint %}

