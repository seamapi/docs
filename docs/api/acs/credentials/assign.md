# Assign a Credential to an ACS User

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Assigns a specified [credential](../../../capability-guides/access-systems/managing-credentials.md) to a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).


{% tabs %}
{% tab title="JavaScript" %}

Assigns a specified credential to a specified access system user, using the associated user identity.

#### Code:

```javascript
await seam.acs.credentials.assign({
  user_identity_id: "1082e2e8-ecbd-4ef1-aa61-a805f7ae2f01",
  acs_credential_id: "59c9af06-7881-46d2-8d9b-3eda964c058b",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Assigns a specified credential to a specified access system user, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/assign" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identity_id": "1082e2e8-ecbd-4ef1-aa61-a805f7ae2f01",
  "acs_credential_id": "59c9af06-7881-46d2-8d9b-3eda964c058b"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Assigns a specified credential to a specified access system user, using the associated user identity.

#### Code:

```python
seam.acs.credentials.assign(user_identity_id="1082e2e8-ecbd-4ef1-aa61-a805f7ae2f01", acs_credential_id="59c9af06-7881-46d2-8d9b-3eda964c058b")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Assigns a specified credential to a specified access system user, using the associated user identity.

#### Code:

```ruby
seam.acs.credentials.assign(user_identity_id: "1082e2e8-ecbd-4ef1-aa61-a805f7ae2f01", acs_credential_id: "59c9af06-7881-46d2-8d9b-3eda964c058b")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Assigns a specified credential to a specified access system user, using the associated user identity.

#### Code:

```php
$seam->acs->credentials->assign(
    user_identity_id: "1082e2e8-ecbd-4ef1-aa61-a805f7ae2f01",
    acs_credential_id: "59c9af06-7881-46d2-8d9b-3eda964c058b",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Assigns a specified credential to a specified access system user, using the associated user identity.

#### Code:

```seam_cli
seam acs credentials assign --user_identity_id "1082e2e8-ecbd-4ef1-aa61-a805f7ae2f01" --acs_credential_id "59c9af06-7881-46d2-8d9b-3eda964c058b"
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
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_credential_id`** *String* (Required)

ID of the credential that you want to assign to an access system user.

---

**`acs_user_id`** *String*

ID of the access system user to whom you want to assign a credential. You can only provide one of acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity to whom you want to assign a credential. You can only provide one of acs_user_id or user_identity_id. If the ACS system contains an ACS user with the same `email_address` or `phone_number` as the user identity that you specify, they are linked, and the credential belongs to the ACS user. If the ACS system does not have a corresponding ACS user, one is created.

---


## Response

{% hint style="success" %}
Returns:
void**

{% endhint %}


---

## Examples


### Assign a credential to an access system user

Assigns a specified credential to a specified access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.credentials.assign({
  acs_user_id: "143f083a-d61c-4d85-923f-d5483fb5a7d4",
  acs_credential_id: "59c9af06-7881-46d2-8d9b-3eda964c058b",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/assign" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_user_id": "143f083a-d61c-4d85-923f-d5483fb5a7d4",
  "acs_credential_id": "59c9af06-7881-46d2-8d9b-3eda964c058b"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.credentials.assign(acs_user_id="143f083a-d61c-4d85-923f-d5483fb5a7d4", acs_credential_id="59c9af06-7881-46d2-8d9b-3eda964c058b")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.credentials.assign(acs_user_id: "143f083a-d61c-4d85-923f-d5483fb5a7d4", acs_credential_id: "59c9af06-7881-46d2-8d9b-3eda964c058b")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->credentials->assign(
    acs_user_id: "143f083a-d61c-4d85-923f-d5483fb5a7d4",
    acs_credential_id: "59c9af06-7881-46d2-8d9b-3eda964c058b",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs credentials assign --acs_user_id "143f083a-d61c-4d85-923f-d5483fb5a7d4" --acs_credential_id "59c9af06-7881-46d2-8d9b-3eda964c058b"
```

#### Output:

```seam_cli
{}
```
{% endtab %}

{% endtabs %}
