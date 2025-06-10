# Delete a User Identity

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Deletes a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity). To delete a user identity, you must first delete any [credentials](https://docs.seam.co/latest/api/access-control-systems/credentials) and [enrollment automations](https://docs.seam.co/latest/api/user_identities/enrollment_automations/delete) associated with the user identity. You must also deactivate any associated phones.


{% tabs %}
{% tab title="JavaScript" %}
#### Code

Specify the desired `user_identity_id`.

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
#### Code

Specify the desired `user_identity_id`.

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
#### Code

Specify the desired `user_identity_id`.

```python
seam.user_identities.delete(user_identity_id="44d48b20-0dbe-419d-91ca-ab8bceecd135")
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

Specify the desired `user_identity_id`.

```ruby
seam.user_identities.delete(user_identity_id: "44d48b20-0dbe-419d-91ca-ab8bceecd135")
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

Specify the desired `user_identity_id`.

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
#### Code

Specify the desired `user_identity_id`.

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
#### Code

Specify the desired `user_identity_id`.

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

ID of the desired user identity.

---


## Response

void


---

## Examples

