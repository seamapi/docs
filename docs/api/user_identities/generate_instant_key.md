# Generate an Instant Key

- [Request Parameters](#request-parameters)
- [Response](#response)

Generates a new [instant key](https://docs.seam.co/latest/capability-guides/mobile-access/instant-keys) for a specified [user identity](../../capability-guides/mobile-access/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Generates a new instant key for a specified user identity.

#### Code:

```javascript
await seam.userIdentities.generateInstantKey({
  user_identity_id: "d92e0c7b-72a1-4063-9ee8-2acefc240358",
  max_use_count: 10,
});
```

#### Output:

```javascript
{
  "client_session_id": "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
  "created_at": "2025-06-14T16:54:17.946559Z",
  "expires_at": "2025-06-16T16:54:17.946559Z",
  "instant_key_id": "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "user_identity_id": "d92e0c7b-72a1-4063-9ee8-2acefc240358",
  "workspace_id": "4d1c24b2-781e-4d1a-8d77-15249ad57c8a"
}
```
{% endtab %}

{% tab title="cURL" %}

Generates a new instant key for a specified user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/generate_instant_key" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "d92e0c7b-72a1-4063-9ee8-2acefc240358",
  "max_use_count": 10
}
EOF
```

#### Output:

```curl
{
  "instant_key": {
    "client_session_id": "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
    "created_at": "2025-06-14T16:54:17.946559Z",
    "expires_at": "2025-06-16T16:54:17.946559Z",
    "instant_key_id": "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    "user_identity_id": "d92e0c7b-72a1-4063-9ee8-2acefc240358",
    "workspace_id": "4d1c24b2-781e-4d1a-8d77-15249ad57c8a"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Generates a new instant key for a specified user identity.

#### Code:

```python
seam.user_identities.generate_instant_key(
    user_identity_id="d92e0c7b-72a1-4063-9ee8-2acefc240358", max_use_count=10
)
```

#### Output:

```python
InstantKey(
    client_session_id="bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
    created_at="2025-06-14T16:54:17.946559Z",
    expires_at="2025-06-16T16:54:17.946559Z",
    instant_key_id="1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
    instant_key_url="https://ik.seam.co/ABCXYZ",
    user_identity_id="d92e0c7b-72a1-4063-9ee8-2acefc240358",
    workspace_id="4d1c24b2-781e-4d1a-8d77-15249ad57c8a",
)
```
{% endtab %}

{% tab title="Ruby" %}

Generates a new instant key for a specified user identity.

#### Code:

```ruby
seam.user_identities.generate_instant_key(
  user_identity_id: "d92e0c7b-72a1-4063-9ee8-2acefc240358",
  max_use_count: 10,
)
```

#### Output:

```ruby
{
  "client_session_id" => "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
  "created_at" => "2025-06-14T16:54:17.946559Z",
  "expires_at" => "2025-06-16T16:54:17.946559Z",
  "instant_key_id" => "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
  "instant_key_url" => "https://ik.seam.co/ABCXYZ",
  "user_identity_id" => "d92e0c7b-72a1-4063-9ee8-2acefc240358",
  "workspace_id" => "4d1c24b2-781e-4d1a-8d77-15249ad57c8a",
}
```
{% endtab %}

{% tab title="PHP" %}

Generates a new instant key for a specified user identity.

#### Code:

```php
$seam->user_identities->generate_instant_key(
    user_identity_id: "d92e0c7b-72a1-4063-9ee8-2acefc240358",
    max_use_count: 10,
);
```

#### Output:

```php
[
    "client_session_id" => "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
    "created_at" => "2025-06-14T16:54:17.946559Z",
    "expires_at" => "2025-06-16T16:54:17.946559Z",
    "instant_key_id" => "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
    "instant_key_url" => "https://ik.seam.co/ABCXYZ",
    "user_identity_id" => "d92e0c7b-72a1-4063-9ee8-2acefc240358",
    "workspace_id" => "4d1c24b2-781e-4d1a-8d77-15249ad57c8a",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Generates a new instant key for a specified user identity.

#### Code:

```seam_cli
seam user-identities generate-instant-key --user_identity_id "d92e0c7b-72a1-4063-9ee8-2acefc240358" --max_use_count 10
```

#### Output:

```seam_cli
{
  "client_session_id": "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
  "created_at": "2025-06-14T16:54:17.946559Z",
  "expires_at": "2025-06-16T16:54:17.946559Z",
  "instant_key_id": "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "user_identity_id": "d92e0c7b-72a1-4063-9ee8-2acefc240358",
  "workspace_id": "4d1c24b2-781e-4d1a-8d77-15249ad57c8a"
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

**`user_identity_id`** *String* (Required)

ID of the user identity for which you want to generate an instant key.

---

**`customization_profile_id`** *String*

---

**`max_use_count`** *Number*

Maximum number of times the instant key can be used. Default: 1.

---


## Response

{% hint style="success" %}
Returns:
**[instant\_key](./../instant_keys)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "client_session_id": "bfe3b1c6-fb9e-48b1-9b5b-c762b2983af6",
  "created_at": "2025-06-14T16:54:17.946559Z",
  "expires_at": "2025-06-16T16:54:17.946559Z",
  "instant_key_id": "1d05c2f6-5b6f-4a9c-b80d-1eca26be12b9",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "user_identity_id": "e7a94acb-bd8a-4462-b6fb-8612d35cd7c3",
  "workspace_id": "4d1c24b2-781e-4d1a-8d77-15249ad57c8a"
}
```
{% endtab %}
{% endtabs %}
