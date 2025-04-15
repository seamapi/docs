# List Access Groups

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [access groups](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).

{% tabs %}
{% tab title="Signature" %}
```
POST /acs/access_groups/list ⇒ { acs_access_groups: [acs_access_group, …] }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication]{https://docs.seam.co/latest/api/authentication}.
</details>

## Request Parameters

**`acs_system_id`** *String*

ID of the access control system for which you want to retrieve all access groups.

---

**`acs_user_id`** *String*

ID of the user for which you want to retrieve all access groups.

---


## Response

Array of [acs\_access\_groups](./)
{% tabs %}
{% tab title="JSON" %}
```json
{
  JSON representation of acs_access_group
}
```
{% endtab %}
{% endtabs %}

---

## Examples
  
### List access groups

To filter the list of access groups, include an `acs_system_id` or `acs_user_id`.

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.acs.accessGroups.list({
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  acs_user_id: "33333333-3333-3333-3333-333333333333",
});
```

#### Output

```javascript
[
  {
    "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
    "name": "Lobby Access",
    "display_name": "Lobby Access",
    "access_group_type_display_name": "PTI access level",
    "access_group_type": "pti_access_level",
    "external_type": "pti_access_level",
    "external_type_display_name": "PTI access level",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-11-30T06:27:15.437Z"
  }
]
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.acs.access_groups.list(
    acs_system_id="11111111-1111-1111-1111-111111111111",
    acs_user_id="33333333-3333-3333-3333-333333333333",
)
```

#### Output

```python
[
    AcsAccessGroup(
        acs_access_group_id="44444444-4444-4444-4444-444444444444",
        name="Lobby Access",
        display_name="Lobby Access",
        access_group_type_display_name="PTI access level",
        access_group_type="pti_access_level",
        external_type="pti_access_level",
        external_type_display_name="PTI access level",
        acs_system_id="11111111-1111-1111-1111-111111111111",
        workspace_id="00000000-0000-0000-0000-000000000000",
        created_at="2023-11-30T06:27:15.437Z",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.acs.access_groups.list(
  acs_system_id: "11111111-1111-1111-1111-111111111111",
  acs_user_id: "33333333-3333-3333-3333-333333333333",
)
```

#### Output

```ruby
[
  {
    "acs_access_group_id" => "44444444-4444-4444-4444-444444444444",
    "name" => "Lobby Access",
    "display_name" => "Lobby Access",
    "access_group_type_display_name" => "PTI access level",
    "access_group_type" => "pti_access_level",
    "external_type" => "pti_access_level",
    "external_type_display_name" => "PTI access level",
    "acs_system_id" => "11111111-1111-1111-1111-111111111111",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "created_at" => "2023-11-30T06:27:15.437Z",
  },
]
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->acs->access_groups->list(
    acs_system_id: "11111111-1111-1111-1111-111111111111",
    acs_user_id: "33333333-3333-3333-3333-333333333333"
);
```

#### Output

```php
<?php
[
    [
        "acs_access_group_id" => "44444444-4444-4444-4444-444444444444",
        "name" => "Lobby Access",
        "display_name" => "Lobby Access",
        "access_group_type_display_name" => "PTI access level",
        "access_group_type" => "pti_access_level",
        "external_type" => "pti_access_level",
        "external_type_display_name" => "PTI access level",
        "acs_system_id" => "11111111-1111-1111-1111-111111111111",
        "workspace_id" => "00000000-0000-0000-0000-000000000000",
        "created_at" => "2023-11-30T06:27:15.437Z",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam acs access-groups list --acs_system_id "11111111-1111-1111-1111-111111111111" --acs_user_id "33333333-3333-3333-3333-333333333333"
```

#### Output

```seam_cli
[
  {
    "acs_access_group_id": "44444444-4444-4444-4444-444444444444",
    "name": "Lobby Access",
    "display_name": "Lobby Access",
    "access_group_type_display_name": "PTI access level",
    "access_group_type": "pti_access_level",
    "external_type": "pti_access_level",
    "external_type_display_name": "PTI access level",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2023-11-30T06:27:15.437Z"
  }
]
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import accessgroups "github.com/seamapi/go/accessgroups"

func main() {
	client.Acs.AccessGroups.List(
		context.Background(),
		accessgroups.AccessGroupsListRequest{
			AcsSystemId: api.String("11111111-1111-1111-1111-111111111111"),
			AcsUserId:   api.String("33333333-3333-3333-3333-333333333333"),
		},
	)
}
```

#### Output

```go
[]api.AcsAccessGroup{api.AcsAccessGroup{AcsAccessGroupId: "44444444-4444-4444-4444-444444444444", Name: "Lobby Access", DisplayName: "Lobby Access", AccessGroupTypeDisplayName: "PTI access level", AccessGroupType: "pti_access_level", ExternalType: "pti_access_level", ExternalTypeDisplayName: "PTI access level", AcsSystemId: "11111111-1111-1111-1111-111111111111", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2023-11-30T06:27:15.437Z"}}
```
{% endtab %}

{% endtabs %}


