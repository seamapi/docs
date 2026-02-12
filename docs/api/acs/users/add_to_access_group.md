# Add an ACS User to an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)

Adds a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) to a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Adds a specified access system user to a specified access group.

#### Code:

```javascript
await seam.acs.users.addToAccessGroup({
  acs_user_id: "15ce02a8-b145-4c02-adc9-d9d84c8a1177",
  acs_access_group_id: "58c8b034-e527-4635-a335-afc74dc79b27",
});
```

#### Output:

```javascript
// void
```
{% endtab %}

{% tab title="cURL" %}

Adds a specified access system user to a specified access group.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/add_to_access_group" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "acs_user_id": "15ce02a8-b145-4c02-adc9-d9d84c8a1177",
  "acs_access_group_id": "58c8b034-e527-4635-a335-afc74dc79b27"
}
EOF
```

#### Output:

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Adds a specified access system user to a specified access group.

#### Code:

```python
seam.acs.users.add_to_access_group(acs_user_id="15ce02a8-b145-4c02-adc9-d9d84c8a1177", acs_access_group_id="58c8b034-e527-4635-a335-afc74dc79b27")
```

#### Output:

```python
None
```
{% endtab %}

{% tab title="Ruby" %}

Adds a specified access system user to a specified access group.

#### Code:

```ruby
seam.acs.users.add_to_access_group(acs_user_id: "15ce02a8-b145-4c02-adc9-d9d84c8a1177", acs_access_group_id: "58c8b034-e527-4635-a335-afc74dc79b27")
```

#### Output:

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}

Adds a specified access system user to a specified access group.

#### Code:

```php
$seam->acs->users->add_to_access_group(
    acs_user_id: "15ce02a8-b145-4c02-adc9-d9d84c8a1177",
    acs_access_group_id: "58c8b034-e527-4635-a335-afc74dc79b27",
);
```

#### Output:

```php

```
{% endtab %}

{% tab title="Seam CLI" %}

Adds a specified access system user to a specified access group.

#### Code:

```seam_cli
seam acs users add-to-access-group --acs_user_id "15ce02a8-b145-4c02-adc9-d9d84c8a1177" --acs_access_group_id "58c8b034-e527-4635-a335-afc74dc79b27"
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

**`acs_access_group_id`** *String* (Required)

ID of the access group to which you want to add an access system user.

---

**`acs_user_id`** *String* (Required)

ID of the access system user that you want to add to an access group.

---


## Response

{% hint style="success" %}
Returns:
**void**

{% endhint %}

