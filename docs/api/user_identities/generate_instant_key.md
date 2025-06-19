# Generate an Instant Key

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Generates a new [instant key](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/instant-keys) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `user_identity_id` to receive the instant key.

#### Code

```javascript
await seam.userIdentities.generateInstantKey({
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
});
```

#### Output

```javascript
{
  "instant_key_id": "33fb0384-b2b3-445e-b780-3fad784e9baa",
  "instant_key_url": "https://ik.seam.co/EXAMPLE",
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "client_session_id": "7cc9b16b-d139-45e2-8042-5cef6ee101ea",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at": "2024-01-09T05:45:33.068Z",
  "expires_at": "2024-02-09T05:45:33.068Z"
}
```
{% endtab %}

{% tab title="cURL" %}

Specify the `user_identity_id` to receive the instant key.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/generate_instant_key" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
}
EOF
```

#### Output

```curl
{
  "instant_key": {
    "instant_key_id": "33fb0384-b2b3-445e-b780-3fad784e9baa",
    "instant_key_url": "https://ik.seam.co/EXAMPLE",
    "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "client_session_id": "7cc9b16b-d139-45e2-8042-5cef6ee101ea",
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-09T05:45:33.068Z",
    "expires_at": "2024-02-09T05:45:33.068Z"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `user_identity_id` to receive the instant key.

#### Code

```python
seam.user_identities.generate_instant_key(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f"
)
```

#### Output

```python
InstantKey(
    instant_key_id="33fb0384-b2b3-445e-b780-3fad784e9baa",
    instant_key_url="https://ik.seam.co/EXAMPLE",
    user_identity_id="48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    client_session_id="7cc9b16b-d139-45e2-8042-5cef6ee101ea",
    workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    created_at="2024-01-09T05:45:33.068Z",
    expires_at="2024-02-09T05:45:33.068Z",
)
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `user_identity_id` to receive the instant key.

#### Code

```ruby
seam.user_identities.generate_instant_key(user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f")
```

#### Output

```ruby
{
  "instant_key_id" => "33fb0384-b2b3-445e-b780-3fad784e9baa",
  "instant_key_url" => "https://ik.seam.co/EXAMPLE",
  "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "client_session_id" => "7cc9b16b-d139-45e2-8042-5cef6ee101ea",
  "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at" => "2024-01-09T05:45:33.068Z",
  "expires_at" => "2024-02-09T05:45:33.068Z",
}
```
{% endtab %}

{% tab title="PHP" %}

Specify the `user_identity_id` to receive the instant key.

#### Code

```php
<?php
$seam->user_identities->generate_instant_key(
    user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
);
```

#### Output

```php
<?php
[
    "instant_key_id" => "33fb0384-b2b3-445e-b780-3fad784e9baa",
    "instant_key_url" => "https://ik.seam.co/EXAMPLE",
    "user_identity_id" => "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
    "client_session_id" => "7cc9b16b-d139-45e2-8042-5cef6ee101ea",
    "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at" => "2024-01-09T05:45:33.068Z",
    "expires_at" => "2024-02-09T05:45:33.068Z",
];
```
{% endtab %}

{% tab title="Go" %}

Specify the `user_identity_id` to receive the instant key.

#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.GenerateInstantKey(
		context.Background(),
		api.UserIdentitiesGenerateInstantKeyRequest{
			UserIdentityId: api.String("5c945ab5-c75e-4bcb-8e5f-9410061c401f"),
		},
	)
}
```

#### Output

```go
api.InstantKey{InstantKeyId: "33fb0384-b2b3-445e-b780-3fad784e9baa", InstantKeyUrl: "https://ik.seam.co/EXAMPLE", UserIdentityId: "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a", ClientSessionId: "7cc9b16b-d139-45e2-8042-5cef6ee101ea", WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-09T05:45:33.068Z", ExpiresAt: "2024-02-09T05:45:33.068Z"}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `user_identity_id` to receive the instant key.

#### Code

```seam_cli
seam user-identities generate-instant-key --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
```

#### Output

```seam_cli
{
  "instant_key_id": "33fb0384-b2b3-445e-b780-3fad784e9baa",
  "instant_key_url": "https://ik.seam.co/EXAMPLE",
  "user_identity_id": "48500a8e-5e7e-4bde-b7e5-0be97cae5d7a",
  "client_session_id": "7cc9b16b-d139-45e2-8042-5cef6ee101ea",
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at": "2024-01-09T05:45:33.068Z",
  "expires_at": "2024-02-09T05:45:33.068Z"
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

**`max_use_count`** *Number*

Maximum number of times the instant key can be used. Default: 1.

---


## Response

[instant\_key](./)


---

## Examples

