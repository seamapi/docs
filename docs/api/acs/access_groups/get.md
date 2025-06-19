# Get an Access Group

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Specify the `acs_access_group_id` of the access group that you want to retrieve.

#### Code

```javascript
await seam.acs.accessGroups.get({
  acs_access_group_id: "44444444-4444-4444-4444-444444444444",
});
```

#### Output

```javascript
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
```
{% endtab %}

{% tab title="cURL" %}

Specify the `acs_access_group_id` of the access group that you want to retrieve.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/get" \
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
  "acs_access_group": {
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
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `acs_access_group_id` of the access group that you want to retrieve.

#### Code

```python
seam.acs.access_groups.get(acs_access_group_id="44444444-4444-4444-4444-444444444444")
```

#### Output

```python
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
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `acs_access_group_id` of the access group that you want to retrieve.

#### Code

```ruby
seam.acs.access_groups.get(acs_access_group_id: "44444444-4444-4444-4444-444444444444")
```

#### Output

```ruby
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
}
```
{% endtab %}

{% tab title="PHP" %}

Specify the `acs_access_group_id` of the access group that you want to retrieve.

#### Code

```php
<?php
$seam->acs->access_groups->get(
    acs_access_group_id: "44444444-4444-4444-4444-444444444444"
);
```

#### Output

```php
<?php
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
];
```
{% endtab %}

{% tab title="Go" %}

Specify the `acs_access_group_id` of the access group that you want to retrieve.

#### Code

```go
package main

import api "github.com/seamapi/go"
import accessgroups "github.com/seamapi/go/accessgroups"

func main() {
	client.Acs.AccessGroups.Get(
		context.Background(),
		accessgroups.AccessGroupsGetRequest{
			AcsAccessGroupId: api.String("44444444-4444-4444-4444-444444444444"),
		},
	)
}
```

#### Output

```go
api.AcsAccessGroup{AcsAccessGroupId: "44444444-4444-4444-4444-444444444444", Name: "Lobby Access", DisplayName: "Lobby Access", AccessGroupTypeDisplayName: "PTI access level", AccessGroupType: "pti_access_level", ExternalType: "pti_access_level", ExternalTypeDisplayName: "PTI access level", AcsSystemId: "11111111-1111-1111-1111-111111111111", WorkspaceId: "00000000-0000-0000-0000-000000000000", CreatedAt: "2023-11-30T06:27:15.437Z"}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `acs_access_group_id` of the access group that you want to retrieve.

#### Code

```seam_cli
seam acs access-groups get --acs_access_group_id "44444444-4444-4444-4444-444444444444"
```

#### Output

```seam_cli
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

````
ID of the access group that you want to get.
````

---


## Response

[acs\_access\_group](./)


---

## Examples

