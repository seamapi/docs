# List Entrances Accessible to an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all accessible entrances for a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `acs_access_group_id` to retrieve all accessible entrances for an access group.

#### Code

```javascript
await seam.acs.accessGroups.listAccessibleEntrances({
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
});
```

#### Output

```javascript
[
  {
    "acs_entrance_id": "66666666-6666-6666-6666-666666666666",
    "name": "Main Entrance",
    "display_name": "Main Entrance",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-10-15T12:00:00.000Z"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Specify the `acs_access_group_id` to retrieve all accessible entrances for an access group.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/list_accessible_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "44444444-4444-4444-4444-444444444444"
}
EOF
```

#### Output

```curl
{
  "acs_entrances": [
    {
      "acs_entrance_id": "66666666-6666-6666-6666-666666666666",
      "name": "Main Entrance",
      "display_name": "Main Entrance",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "created_at": "2024-10-15T12:00:00.000Z"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `acs_access_group_id` to retrieve all accessible entrances for an access group.

#### Code

```python
seam.acs.access_groups.list_accessible_entrances(
    acs_access_group_id="44444444-4444-4444-4444-444444444444"
)
```

#### Output

```python
[
    AcsEntrance(
        acs_entrance_id="66666666-6666-6666-6666-666666666666",
        name="Main Entrance",
        display_name="Main Entrance",
        acs_system_id="11111111-1111-1111-1111-111111111111",
        workspace_id="00000000-0000-0000-0000-000000000000",
        created_at="2024-10-15T12:00:00.000Z",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `acs_access_group_id` to retrieve all accessible entrances for an access group.

#### Code

```ruby
seam.acs.access_groups.list_accessible_entrances(
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
)
```

#### Output

```ruby
[
  {
    "acs_entrance_id" => "66666666-6666-6666-6666-666666666666",
    "name" => "Main Entrance",
    "display_name" => "Main Entrance",
    "acs_system_id" => "11111111-1111-1111-1111-111111111111",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "created_at" => "2024-10-15T12:00:00.000Z",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Specify the `acs_access_group_id` to retrieve all accessible entrances for an access group.

#### Code

```php
<?php
$seam->acs->access_groups->list_accessible_entrances(
    acs_access_group_id: "44444444-4444-4444-4444-444444444444"
);
```

#### Output

```php
<?php
[
    [
        "acs_entrance_id" => "66666666-6666-6666-6666-666666666666",
        "name" => "Main Entrance",
        "display_name" => "Main Entrance",
        "acs_system_id" => "11111111-1111-1111-1111-111111111111",
        "workspace_id" => "00000000-0000-0000-0000-000000000000",
        "created_at" => "2024-10-15T12:00:00.000Z",
    ],
];
```
{% endtab %}

{% tab title="Go" %}

Specify the `acs_access_group_id` to retrieve all accessible entrances for an access group.

#### Code

```go
package main

import api "github.com/seamapi/go"
import accessgroups "github.com/seamapi/go/accessgroups"

func main() {
	client.Acs.AccessGroups.ListAccessibleEntrances(
		context.Background(),
		accessgroups.AccessGroupsListAccessibleEntrancesRequest{
			AcsAccessGroupId: api.String("44444444-4444-4444-4444-444444444444"),
		},
	)
}
```

#### Output

```go
[]api.AcsEntrance{api.AcsEntrance{AcsEntranceId: "66666666-6666-6666-6666-666666666666", Name: "Main Entrance", DisplayName: "Main Entrance", AcsSystemId: "11111111-1111-1111-1111-111111111111", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2024-10-15T12:00:00.000Z"}}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `acs_access_group_id` to retrieve all accessible entrances for an access group.

#### Code

```seam_cli
seam acs access-groups list-accessible-entrances --acs_access_group_id "44444444-4444-4444-4444-444444444444"
```

#### Output

```seam_cli
[
  {
    "acs_entrance_id": "66666666-6666-6666-6666-666666666666",
    "name": "Main Entrance",
    "display_name": "Main Entrance",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "created_at": "2024-10-15T12:00:00.000Z"
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

**`acs_access_group_id`** *String* (Required)

ID of the access group for which you want to retrieve all accessible entrances.

---


## Response

Array of [acs\_entrances](./)

