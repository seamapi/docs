# List Access Groups

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all access groups, filtered by user identity.

#### Code:

```javascript
await seam.acs.accessGroups.list({
  acs_system_id: "1b529056-1b04-450b-b3da-016b65a5017f",
  acs_user_id: "ebe506e1-33ba-44e8-892b-2d12c1709cd8",
  user_identity_id: "9b1deda4-07e2-4e90-acde-5724b6ab7305",
});
```

#### Output:

```javascript
[
  {
    "access_group_type": "salto_ks_access_group",
    "access_group_type_display_name": "Salto KS Access Group",
    "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
    "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
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
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all access groups, filtered by user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
  "acs_user_id": "ebe506e1-33ba-44e8-892b-2d12c1709cd8",
  "user_identity_id": "9b1deda4-07e2-4e90-acde-5724b6ab7305"
}
EOF
```

#### Output:

```curl
{
  "acs_access_groups": [
    {
      "access_group_type": "salto_ks_access_group",
      "access_group_type_display_name": "Salto KS Access Group",
      "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
      "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all access groups, filtered by user identity.

#### Code:

```python
seam.acs.access_groups.list(
    acs_system_id="1b529056-1b04-450b-b3da-016b65a5017f",
    acs_user_id="ebe506e1-33ba-44e8-892b-2d12c1709cd8",
    user_identity_id="9b1deda4-07e2-4e90-acde-5724b6ab7305",
)
```

#### Output:

```python
[
    AcsAccessGroup(
        access_group_type="salto_ks_access_group",
        access_group_type_display_name="Salto KS Access Group",
        acs_access_group_id="3f448826-9875-4947-9519-e468090a4f7d",
        acs_system_id="1b529056-1b04-450b-b3da-016b65a5017f",
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
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all access groups, filtered by user identity.

#### Code:

```ruby
seam.acs.access_groups.list(
  acs_system_id: "1b529056-1b04-450b-b3da-016b65a5017f",
  acs_user_id: "ebe506e1-33ba-44e8-892b-2d12c1709cd8",
  user_identity_id: "9b1deda4-07e2-4e90-acde-5724b6ab7305",
)
```

#### Output:

```ruby
[
  {
    "access_group_type" => "salto_ks_access_group",
    "access_group_type_display_name" => "Salto KS Access Group",
    "acs_access_group_id" => "3f448826-9875-4947-9519-e468090a4f7d",
    "acs_system_id" => "1b529056-1b04-450b-b3da-016b65a5017f",
    "connected_account_id" => "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
    "created_at" => "2025-06-15T16:54:17.946453Z",
    "display_name" => "Main Group",
    "external_type" => "salto_ks_access_group",
    "external_type_display_name" => "Salto KS Access Group",
    "is_managed" => true,
    "name" => "My Access Group",
    "warnings" => [],
    "workspace_id" => "ac19352c-869a-4209-9ce7-44c740a8b5d0",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all access groups, filtered by user identity.

#### Code:

```php
$seam->acs->access_groups->list(
    acs_system_id: "1b529056-1b04-450b-b3da-016b65a5017f",
    acs_user_id: "ebe506e1-33ba-44e8-892b-2d12c1709cd8",
    user_identity_id: "9b1deda4-07e2-4e90-acde-5724b6ab7305",
);
```

#### Output:

```php
[
    [
        "access_group_type" => "salto_ks_access_group",
        "access_group_type_display_name" => "Salto KS Access Group",
        "acs_access_group_id" => "3f448826-9875-4947-9519-e468090a4f7d",
        "acs_system_id" => "1b529056-1b04-450b-b3da-016b65a5017f",
        "connected_account_id" => "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
        "created_at" => "2025-06-15T16:54:17.946453Z",
        "display_name" => "Main Group",
        "external_type" => "salto_ks_access_group",
        "external_type_display_name" => "Salto KS Access Group",
        "is_managed" => true,
        "name" => "My Access Group",
        "warnings" => [],
        "workspace_id" => "ac19352c-869a-4209-9ce7-44c740a8b5d0",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all access groups, filtered by user identity.

#### Code:

```seam_cli
seam acs access-groups list --acs_system_id "1b529056-1b04-450b-b3da-016b65a5017f" --acs_user_id "ebe506e1-33ba-44e8-892b-2d12c1709cd8" --user_identity_id "9b1deda4-07e2-4e90-acde-5724b6ab7305"
```

#### Output:

```seam_cli
[
  {
    "access_group_type": "salto_ks_access_group",
    "access_group_type_display_name": "Salto KS Access Group",
    "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
    "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
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
]
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

**`acs_system_id`** *String*

ID of the access system for which you want to retrieve all access groups.

---

**`acs_user_id`** *String*

ID of the access system user for which you want to retrieve all access groups.

---

**`user_identity_id`** *String*

ID of the user identity for which you want to retrieve all access groups.

---


## Response

{% hint style="success" %}
Returns:
**Array of [acs\_access\_groups](.)

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

---

## Examples


### List access groups for an access system user

Returns a list of all access groups, filtered by access system user.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.accessGroups.list({
  acs_system_id: "1b529056-1b04-450b-b3da-016b65a5017f",
  acs_user_id: "ebe506e1-33ba-44e8-892b-2d12c1709cd8",
});
```

#### Output:

```javascript
[
  {
    "access_group_type": "salto_ks_access_group",
    "access_group_type_display_name": "Salto KS Access Group",
    "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
    "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
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
]
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
  "acs_user_id": "ebe506e1-33ba-44e8-892b-2d12c1709cd8"
}
EOF
```

#### Output:

```curl
{
  "acs_access_groups": [
    {
      "access_group_type": "salto_ks_access_group",
      "access_group_type_display_name": "Salto KS Access Group",
      "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
      "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
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
  ]
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.acs.access_groups.list(
    acs_system_id="1b529056-1b04-450b-b3da-016b65a5017f",
    acs_user_id="ebe506e1-33ba-44e8-892b-2d12c1709cd8",
)
```

#### Output:

```python
[
    AcsAccessGroup(
        access_group_type="salto_ks_access_group",
        access_group_type_display_name="Salto KS Access Group",
        acs_access_group_id="3f448826-9875-4947-9519-e468090a4f7d",
        acs_system_id="1b529056-1b04-450b-b3da-016b65a5017f",
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
]
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.acs.access_groups.list(
  acs_system_id: "1b529056-1b04-450b-b3da-016b65a5017f",
  acs_user_id: "ebe506e1-33ba-44e8-892b-2d12c1709cd8",
)
```

#### Output:

```ruby
[
  {
    "access_group_type" => "salto_ks_access_group",
    "access_group_type_display_name" => "Salto KS Access Group",
    "acs_access_group_id" => "3f448826-9875-4947-9519-e468090a4f7d",
    "acs_system_id" => "1b529056-1b04-450b-b3da-016b65a5017f",
    "connected_account_id" => "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
    "created_at" => "2025-06-15T16:54:17.946453Z",
    "display_name" => "Main Group",
    "external_type" => "salto_ks_access_group",
    "external_type_display_name" => "Salto KS Access Group",
    "is_managed" => true,
    "name" => "My Access Group",
    "warnings" => [],
    "workspace_id" => "ac19352c-869a-4209-9ce7-44c740a8b5d0",
  },
]
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->acs->access_groups->list(
    acs_system_id: "1b529056-1b04-450b-b3da-016b65a5017f",
    acs_user_id: "ebe506e1-33ba-44e8-892b-2d12c1709cd8",
);
```

#### Output:

```php
[
    [
        "access_group_type" => "salto_ks_access_group",
        "access_group_type_display_name" => "Salto KS Access Group",
        "acs_access_group_id" => "3f448826-9875-4947-9519-e468090a4f7d",
        "acs_system_id" => "1b529056-1b04-450b-b3da-016b65a5017f",
        "connected_account_id" => "daba7bd0-edb6-4bb9-a70b-f9ae08a0e301",
        "created_at" => "2025-06-15T16:54:17.946453Z",
        "display_name" => "Main Group",
        "external_type" => "salto_ks_access_group",
        "external_type_display_name" => "Salto KS Access Group",
        "is_managed" => true,
        "name" => "My Access Group",
        "warnings" => [],
        "workspace_id" => "ac19352c-869a-4209-9ce7-44c740a8b5d0",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam acs access-groups list --acs_system_id "1b529056-1b04-450b-b3da-016b65a5017f" --acs_user_id "ebe506e1-33ba-44e8-892b-2d12c1709cd8"
```

#### Output:

```seam_cli
[
  {
    "access_group_type": "salto_ks_access_group",
    "access_group_type_display_name": "Salto KS Access Group",
    "acs_access_group_id": "3f448826-9875-4947-9519-e468090a4f7d",
    "acs_system_id": "1b529056-1b04-450b-b3da-016b65a5017f",
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
]
```
{% endtab %}

{% endtabs %}
