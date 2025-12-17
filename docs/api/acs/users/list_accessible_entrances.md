# List ACS User-Accessible Entrances

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Lists the [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a specified [access system user](https://docs.seam.co/latest/capability-guides/access-systems/user-management) has access.


{% tabs %}
{% tab title="JavaScript" %}

Lists the entrances to which a specified access system user has access, using the associated user identity.

#### Code:

```javascript
await seam.acs.users.listAccessibleEntrances({
  user_identity_id: "3b8abf24-21b3-40ee-9c21-6fb2daf97401",
  acs_system_id: "88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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

Lists the entrances to which a specified access system user has access, using the associated user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list_accessible_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "3b8abf24-21b3-40ee-9c21-6fb2daf97401",
  "acs_system_id": "88d5ae6a-708d-4602-983d-6dd5de07ba1d"
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

Lists the entrances to which a specified access system user has access, using the associated user identity.

#### Code:

```python
seam.acs.users.list_accessible_entrances(
    user_identity_id="3b8abf24-21b3-40ee-9c21-6fb2daf97401",
    acs_system_id="88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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

Lists the entrances to which a specified access system user has access, using the associated user identity.

#### Code:

```ruby
seam.acs.users.list_accessible_entrances(
  user_identity_id: "3b8abf24-21b3-40ee-9c21-6fb2daf97401",
  acs_system_id: "88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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

Lists the entrances to which a specified access system user has access, using the associated user identity.

#### Code:

```php
$seam->acs->users->list_accessible_entrances(
    user_identity_id: "3b8abf24-21b3-40ee-9c21-6fb2daf97401",
    acs_system_id: "88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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

Lists the entrances to which a specified access system user has access, using the associated user identity.

#### Code:

```seam_cli
seam acs users list-accessible-entrances --user_identity_id "3b8abf24-21b3-40ee-9c21-6fb2daf97401" --acs_system_id "88d5ae6a-708d-4602-983d-6dd5de07ba1d"
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
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`acs_system_id`** *String*

ID of the access system for which you want to list accessible entrances. You can only provide acs_system_id with user_identity_id.

---

**`acs_user_id`** *String*

ID of the access system user for whom you want to list accessible entrances. You can only provide acs_user_id or user_identity_id.

---

**`user_identity_id`** *String*

ID of the user identity for whom you want to list accessible entrances. You can only provide acs_user_id or user_identity_id.

---


## Response

{% hint style="success" %}
Returns:
**Array of [acs\_entrances](./../entrances)

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

---

## Examples


### List accessible entrances for an access system user

Lists the entrances to which a specified access system user has access.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.users.listAccessibleEntrances({
  acs_user_id: "4c84e6d3-e89a-4d85-9363-e9f6e928131a",
  acs_system_id: "88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/users/list_accessible_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_user_id": "4c84e6d3-e89a-4d85-9363-e9f6e928131a",
  "acs_system_id": "88d5ae6a-708d-4602-983d-6dd5de07ba1d"
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



#### Code:

```python
seam.acs.users.list_accessible_entrances(
    acs_user_id="4c84e6d3-e89a-4d85-9363-e9f6e928131a",
    acs_system_id="88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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



#### Code:

```ruby
seam.acs.users.list_accessible_entrances(
  acs_user_id: "4c84e6d3-e89a-4d85-9363-e9f6e928131a",
  acs_system_id: "88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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



#### Code:

```php
$seam->acs->users->list_accessible_entrances(
    acs_user_id: "4c84e6d3-e89a-4d85-9363-e9f6e928131a",
    acs_system_id: "88d5ae6a-708d-4602-983d-6dd5de07ba1d",
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



#### Code:

```seam_cli
seam acs users list-accessible-entrances --acs_user_id "4c84e6d3-e89a-4d85-9363-e9f6e928131a" --acs_system_id "88d5ae6a-708d-4602-983d-6dd5de07ba1d"
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
