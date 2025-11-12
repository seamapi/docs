# Get an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Returns a specified access group.

#### Code:

```javascript
await seam.acs.accessGroups.get({
  acs_access_group_id: "09eb5265-6e3b-4e6d-bf96-736171c547ae",
});
```

#### Output:

```javascript
{
  "access_group_type": "salto_ks_access_group",
  "access_group_type_display_name": "Salto KS Access Group",
  "acs_access_group_id": "09eb5265-6e3b-4e6d-bf96-736171c547ae",
  "acs_system_id": "045baa77-6d06-40fe-a2cd-b82eef688f4a",
  "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
  "created_at": "2025-06-15T16:54:17.946453Z",
  "display_name": "Main Group",
  "external_type": "salto_ks_access_group",
  "external_type_display_name": "Salto KS Access Group",
  "is_managed": true,
  "name": "My Access Group",
  "warnings": [],
  "workspace_id": "ac19352c-869a-4209-9ce7-44c740a8b5d0"
}
```
{% endtab %}

{% tab title="cURL" %}

Returns a specified access group.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "09eb5265-6e3b-4e6d-bf96-736171c547ae"
}
EOF
```

#### Output:

```curl
{
  "acs_access_group": {
    "access_group_type": "salto_ks_access_group",
    "access_group_type_display_name": "Salto KS Access Group",
    "acs_access_group_id": "09eb5265-6e3b-4e6d-bf96-736171c547ae",
    "acs_system_id": "045baa77-6d06-40fe-a2cd-b82eef688f4a",
    "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
    "created_at": "2025-06-15T16:54:17.946453Z",
    "display_name": "Main Group",
    "external_type": "salto_ks_access_group",
    "external_type_display_name": "Salto KS Access Group",
    "is_managed": true,
    "name": "My Access Group",
    "warnings": [],
    "workspace_id": "ac19352c-869a-4209-9ce7-44c740a8b5d0"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Returns a specified access group.

#### Code:

```python
seam.acs.access_groups.get(acs_access_group_id="09eb5265-6e3b-4e6d-bf96-736171c547ae")
```

#### Output:

```python
AcsAccessGroup(
    access_group_type="salto_ks_access_group",
    access_group_type_display_name="Salto KS Access Group",
    acs_access_group_id="09eb5265-6e3b-4e6d-bf96-736171c547ae",
    acs_system_id="045baa77-6d06-40fe-a2cd-b82eef688f4a",
    connected_account_id="daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
    created_at="2025-06-15T16:54:17.946453Z",
    display_name="Main Group",
    external_type="salto_ks_access_group",
    external_type_display_name="Salto KS Access Group",
    is_managed=true,
    name="My Access Group",
    warnings=[],
    workspace_id="ac19352c-869a-4209-9ce7-44c740a8b5d0",
)
```
{% endtab %}

{% tab title="Ruby" %}

Returns a specified access group.

#### Code:

```ruby
seam.acs.access_groups.get(acs_access_group_id: "09eb5265-6e3b-4e6d-bf96-736171c547ae")
```

#### Output:

```ruby
{
  "access_group_type" => "salto_ks_access_group",
  "access_group_type_display_name" => "Salto KS Access Group",
  "acs_access_group_id" => "09eb5265-6e3b-4e6d-bf96-736171c547ae",
  "acs_system_id" => "045baa77-6d06-40fe-a2cd-b82eef688f4a",
  "connected_account_id" => "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
  "created_at" => "2025-06-15T16:54:17.946453Z",
  "display_name" => "Main Group",
  "external_type" => "salto_ks_access_group",
  "external_type_display_name" => "Salto KS Access Group",
  "is_managed" => true,
  "name" => "My Access Group",
  "warnings" => [],
  "workspace_id" => "ac19352c-869a-4209-9ce7-44c740a8b5d0",
}
```
{% endtab %}

{% tab title="PHP" %}

Returns a specified access group.

#### Code:

```php
$seam->acs->access_groups->get(
    acs_access_group_id: "09eb5265-6e3b-4e6d-bf96-736171c547ae"
);
```

#### Output:

```php
[
    "access_group_type" => "salto_ks_access_group",
    "access_group_type_display_name" => "Salto KS Access Group",
    "acs_access_group_id" => "09eb5265-6e3b-4e6d-bf96-736171c547ae",
    "acs_system_id" => "045baa77-6d06-40fe-a2cd-b82eef688f4a",
    "connected_account_id" => "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
    "created_at" => "2025-06-15T16:54:17.946453Z",
    "display_name" => "Main Group",
    "external_type" => "salto_ks_access_group",
    "external_type_display_name" => "Salto KS Access Group",
    "is_managed" => true,
    "name" => "My Access Group",
    "warnings" => [],
    "workspace_id" => "ac19352c-869a-4209-9ce7-44c740a8b5d0",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a specified access group.

#### Code:

```seam_cli
seam acs access-groups get --acs_access_group_id "09eb5265-6e3b-4e6d-bf96-736171c547ae"
```

#### Output:

```seam_cli
{
  "access_group_type": "salto_ks_access_group",
  "access_group_type_display_name": "Salto KS Access Group",
  "acs_access_group_id": "09eb5265-6e3b-4e6d-bf96-736171c547ae",
  "acs_system_id": "045baa77-6d06-40fe-a2cd-b82eef688f4a",
  "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
  "created_at": "2025-06-15T16:54:17.946453Z",
  "display_name": "Main Group",
  "external_type": "salto_ks_access_group",
  "external_type_display_name": "Salto KS Access Group",
  "is_managed": true,
  "name": "My Access Group",
  "warnings": [],
  "workspace_id": "ac19352c-869a-4209-9ce7-44c740a8b5d0"
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

**`acs_access_group_id`** *String* (Required)

ID of the access group that you want to get.

---


## Response

{% hint style="success" %}
Returns:
**[acs\_access\_group](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_group_type": "salto_ks_access_group",
  "access_group_type_display_name": "Salto KS Access Group",
  "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
  "acs_system_id": "045baa77-6d06-40fe-a2cd-b82eef688f4a",
  "connected_account_id": "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
  "created_at": "2025-06-15T16:54:17.946453Z",
  "display_name": "Main Group",
  "external_type": "salto_ks_access_group",
  "external_type_display_name": "Salto KS Access Group",
  "is_managed": true,
  "name": "My Access Group",
  "warnings": [],
  "workspace_id": "ac19352c-869a-4209-9ce7-44c740a8b5d0"
}
```
{% endtab %}
{% endtabs %}
