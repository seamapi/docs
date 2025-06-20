# Delete a User Identity

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity). This deletes the user identity and all associated resources, including any [credentials](https://docs.seam.co/latest/api/access-control-systems/credentials), [acs users](https://docs.seam.co/latest/api/access-control-systems/users) and [client sessions](https://docs.seam.co/latest/api/client_sessions).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `user_identity_id`.

#### Code

```javascript
await seam.userIdentities.delete({
  user_identity_id: "44d48b20-0dbe-419d-91ca-ab8bceecd135",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Specify the desired `user_identity_id`.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "44d48b20-0dbe-419d-91ca-ab8bceecd135"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `user_identity_id`.

#### Code

```python
seam.user_identities.delete(user_identity_id="44d48b20-0dbe-419d-91ca-ab8bceecd135")
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Specify the desired `user_identity_id`.

#### Code

```ruby
seam.user_identities.delete(user_identity_id: "44d48b20-0dbe-419d-91ca-ab8bceecd135")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Specify the desired `user_identity_id`.

#### Code

```php
<?php
$seam->user_identities->delete(
    user_identity_id: "44d48b20-0dbe-419d-91ca-ab8bceecd135"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Go" %}

Specify the desired `user_identity_id`.

#### Code

```go
package main

import api "github.com/seamapi/go"

func main() {
	client.UserIdentities.Delete(
		context.Background(),
		api.UserIdentitiesDeleteRequest{
			UserIdentityId: api.String("44d48b20-0dbe-419d-91ca-ab8bceecd135"),
		},
	)
}
```

#### Output

```go
nil
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the desired `user_identity_id`.

#### Code

```seam_cli
seam user-identities delete --user_identity_id "44d48b20-0dbe-419d-91ca-ab8bceecd135"
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

**`user_identity_id`** *String* (Required)

ID of the user identity that you want to delete.

---


## Response

void

