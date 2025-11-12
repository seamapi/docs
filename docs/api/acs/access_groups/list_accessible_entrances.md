# List Entrances Accessible to an Access Group

- [Request Parameters](#request-parameters)
- [Response](#response)

Returns a list of all accessible entrances for a specified [access group](https://docs.seam.co/latest/capability-guides/access-systems/assigning-users-to-access-groups).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all accessible entrances for a specified access group.

#### Code:

```javascript
await seam.acs.accessGroups.listAccessibleEntrances({
  acs_access_group_id: "1b02a29f-effd-4ce6-8a58-16ec09fd9b50",
});
```

#### Output:

```javascript
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
    "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
    "created_at": "2025-06-15T16:54:17.946495Z",
    "display_name": "Main Entrance",
    "errors": [],
    "visionline_metadata": {
      "door_category": "guest",
      "door_name": "Main Entrance",
      "profiles": [
        {
          "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
          "visionline_door_profile_type": "BLE"
        }
      ]
    }
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all accessible entrances for a specified access group.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/access_groups/list_accessible_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_access_group_id": "1b02a29f-effd-4ce6-8a58-16ec09fd9b50"
}
EOF
```

#### Output:

```curl
{
  "acs_entrances": [
    {
      "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
      "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
      "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
      "created_at": "2025-06-15T16:54:17.946495Z",
      "display_name": "Main Entrance",
      "errors": [],
      "visionline_metadata": {
        "door_category": "guest",
        "door_name": "Main Entrance",
        "profiles": [
          {
            "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
            "visionline_door_profile_type": "BLE"
          }
        ]
      }
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all accessible entrances for a specified access group.

#### Code:

```python
seam.acs.access_groups.list_accessible_entrances(
    acs_access_group_id="1b02a29f-effd-4ce6-8a58-16ec09fd9b50"
)
```

#### Output:

```python
[
    AcsEntrance(
        acs_entrance_id="f74e4879-5991-4e2f-a368-888983dcfbfc",
        acs_system_id="6a74a969-94ea-4383-b5cf-5e7da8c113d1",
        connected_account_id="1b9a3e0d-443f-4063-b619-4ca7e2a97751",
        created_at="2025-06-15T16:54:17.946495Z",
        display_name="Main Entrance",
        errors=[],
        visionline_metadata={
            "door_category": "guest",
            "door_name": "Main Entrance",
            "profiles": [
                {
                    "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
                    "visionline_door_profile_type": "BLE",
                }
            ],
        },
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all accessible entrances for a specified access group.

#### Code:

```ruby
seam.acs.access_groups.list_accessible_entrances(
  acs_access_group_id: "1b02a29f-effd-4ce6-8a58-16ec09fd9b50",
)
```

#### Output:

```ruby
[
  {
    "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "acs_system_id" => "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
    "connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
    "created_at" => "2025-06-15T16:54:17.946495Z",
    "display_name" => "Main Entrance",
    "errors" => [],
    "visionline_metadata" => {
      door_category: "guest",
      door_name: "Main Entrance",
      profiles: [
        {
          visionline_door_profile_id: "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
          visionline_door_profile_type: "BLE",
        },
      ],
    },
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all accessible entrances for a specified access group.

#### Code:

```php
$seam->acs->access_groups->list_accessible_entrances(
    acs_access_group_id: "1b02a29f-effd-4ce6-8a58-16ec09fd9b50",
);
```

#### Output:

```php
[
    [
        "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
        "acs_system_id" => "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
        "connected_account_id" => "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
        "created_at" => "2025-06-15T16:54:17.946495Z",
        "display_name" => "Main Entrance",
        "errors" => [],
        "visionline_metadata" => [
            "door_category" => "guest",
            "door_name" => "Main Entrance",
            "profiles" => [
                [
                    "visionline_door_profile_id" =>
                        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
                    "visionline_door_profile_type" => "BLE",
                ],
            ],
        ],
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all accessible entrances for a specified access group.

#### Code:

```seam_cli
seam acs access-groups list-accessible-entrances --acs_access_group_id "1b02a29f-effd-4ce6-8a58-16ec09fd9b50"
```

#### Output:

```seam_cli
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
    "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
    "created_at": "2025-06-15T16:54:17.946495Z",
    "display_name": "Main Entrance",
    "errors": [],
    "visionline_metadata": {
      "door_category": "guest",
      "door_name": "Main Entrance",
      "profiles": [
        {
          "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
          "visionline_door_profile_type": "BLE"
        }
      ]
    }
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

{% hint style="success" %}
Returns:
**Array of [acs\_entrances](./../entrances)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
  "acs_system_id": "6a74a969-94ea-4383-b5cf-5e7da8c113d1",
  "connected_account_id": "1b9a3e0d-443f-4063-b619-4ca7e2a97751",
  "created_at": "2025-06-15T16:54:17.946495Z",
  "display_name": "Main Entrance",
  "errors": [],
  "space_ids": [],
  "visionline_metadata": {
    "door_category": "guest",
    "door_name": "Main Entrance",
    "profiles": [
      {
        "visionline_door_profile_id": "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        "visionline_door_profile_type": "BLE"
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}
