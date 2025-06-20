# Unassign a Credential from an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)

Unassigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) from a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

#### Code

```javascript
await seam.acs.credentials.unassign({
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/unassign" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "33333333-3333-3333-3333-333333333333",
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

#### Code

```python
seam.acs.credentials.unassign(
    acs_user_id="33333333-3333-3333-3333-333333333333",
    acs_credential_id="66666666-6666-6666-6666-666666666666",
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

#### Code

```ruby
seam.acs.credentials.unassign(
  acs_user_id: "33333333-3333-3333-3333-333333333333",
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

#### Code

```php
<?php
$seam->acs->credentials->unassign(
    acs_user_id: "33333333-3333-3333-3333-333333333333",
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the desired `acs_user_id` and `acs_credential_id` to unassign the specified credential from the specified ACS user.

#### Code

```seam_cli
seam acs credentials unassign --acs_user_id "33333333-3333-3333-3333-333333333333" --acs_credential_id "66666666-6666-6666-6666-666666666666"
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

**`acs_credential_id`** *String* (Required)

ID of the credential that you want to unassign from an access system user.

---

**`acs_user_id`** *String*

ID of the access system user from which you want to unassign a credential. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity from which you want to unassign a credential. You can only provide one of acs_user_id or user_identity_id.

---


## Response

void

