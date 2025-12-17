# List Entrances

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Returns a list of all [access system entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md).


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all entrances for a specified access system.

#### Code:

```javascript
await seam.acs.entrances.list({
  acs_system_id: "d34802da-d8e3-4d0b-98c3-16d6e18ed508",
});
```

#### Output:

```javascript
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "acs_system_id": "d34802da-d8e3-4d0b-98c3-16d6e18ed508",
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

Returns a list of all entrances for a specified access system.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/acs/entrances/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_system_id": "d34802da-d8e3-4d0b-98c3-16d6e18ed508"
}
EOF
```

#### Output:

```curl
{
  "acs_entrances": [
    {
      "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
      "acs_system_id": "d34802da-d8e3-4d0b-98c3-16d6e18ed508",
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

Returns a list of all entrances for a specified access system.

#### Code:

```python
seam.acs.entrances.list(acs_system_id="d34802da-d8e3-4d0b-98c3-16d6e18ed508")
```

#### Output:

```python
[
    AcsEntrance(
        acs_entrance_id="f74e4879-5991-4e2f-a368-888983dcfbfc",
        acs_system_id="d34802da-d8e3-4d0b-98c3-16d6e18ed508",
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

Returns a list of all entrances for a specified access system.

#### Code:

```ruby
seam.acs.entrances.list(acs_system_id: "d34802da-d8e3-4d0b-98c3-16d6e18ed508")
```

#### Output:

```ruby
[
  {
    "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "acs_system_id" => "d34802da-d8e3-4d0b-98c3-16d6e18ed508",
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

Returns a list of all entrances for a specified access system.

#### Code:

```php
$seam->acs->entrances->list(
    acs_system_id: "d34802da-d8e3-4d0b-98c3-16d6e18ed508",
);
```

#### Output:

```php
[
    [
        "acs_entrance_id" => "f74e4879-5991-4e2f-a368-888983dcfbfc",
        "acs_system_id" => "d34802da-d8e3-4d0b-98c3-16d6e18ed508",
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

Returns a list of all entrances for a specified access system.

#### Code:

```seam_cli
seam acs entrances list --acs_system_id "d34802da-d8e3-4d0b-98c3-16d6e18ed508"
```

#### Output:

```seam_cli
[
  {
    "acs_entrance_id": "f74e4879-5991-4e2f-a368-888983dcfbfc",
    "acs_system_id": "d34802da-d8e3-4d0b-98c3-16d6e18ed508",
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

**`acs_credential_id`** *String*

ID of the credential for which you want to retrieve all entrances.

---

**`acs_entrance_ids`** *Array* *of UUIDs*

IDs of the entrances for which you want to retrieve all entrances.

---

**`acs_system_id`** *String*

ID of the access system for which you want to retrieve all entrances.

---

**`connected_account_id`** *String*

ID of the connected account for which you want to retrieve all entrances.

---

**`customer_key`** *String*

Customer key for which you want to list entrances.

---

**`limit`** *Number*

Maximum number of records to return per page.

---

**`location_id`** *String*

{% hint style="warning" %}
**Deprecated**. Use `space_id`.
{% endhint %}

---

**`page_cursor`** *String*

Identifies the specific page of results to return, obtained from the previous page's `next_page_cursor`.

---

**`search`** *String*

String for which to search. Filters returned entrances to include all records that satisfy a partial match using `display_name`.

---

**`space_id`** *String*

ID of the space for which you want to list entrances.

---


## Response

{% hint style="success" %}
Returns:
**Array of [acs\_entrances](.)

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


### List entrances for a credential

Returns a list of all access system entrances for a specified credential.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.entrances.list({
  acs_credential_id: "e2a3eed8-5b4d-41a7-9c1d-1d06c41b0d5a",
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
curl --include --request POST "https://connect.getseam.com/acs/entrances/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "e2a3eed8-5b4d-41a7-9c1d-1d06c41b0d5a"
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
seam.acs.entrances.list(acs_credential_id="e2a3eed8-5b4d-41a7-9c1d-1d06c41b0d5a")
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
seam.acs.entrances.list(acs_credential_id: "e2a3eed8-5b4d-41a7-9c1d-1d06c41b0d5a")
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
$seam->acs->entrances->list(
    acs_credential_id: "e2a3eed8-5b4d-41a7-9c1d-1d06c41b0d5a",
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
seam acs entrances list --acs_credential_id "e2a3eed8-5b4d-41a7-9c1d-1d06c41b0d5a"
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

---


### List entrances for a space

Returns a list of all access system entrances for a specified space.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.entrances.list({
  space_id: "3bd2edc0-aae7-440c-98ec-a5ab03664833",
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
curl --include --request POST "https://connect.getseam.com/acs/entrances/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "space_id": "3bd2edc0-aae7-440c-98ec-a5ab03664833"
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
seam.acs.entrances.list(space_id="3bd2edc0-aae7-440c-98ec-a5ab03664833")
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
seam.acs.entrances.list(space_id: "3bd2edc0-aae7-440c-98ec-a5ab03664833")
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
$seam->acs->entrances->list(space_id: "3bd2edc0-aae7-440c-98ec-a5ab03664833");
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
seam acs entrances list --space_id "3bd2edc0-aae7-440c-98ec-a5ab03664833"
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

---


### List entrances for an access grant

Returns a list of all access system entrances for a specified access grant.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.entrances.list({
  access_grant_id: "6596ea31-f747-4253-950e-dba0de24fedb",
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
curl --include --request POST "https://connect.getseam.com/acs/entrances/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_grant_id": "6596ea31-f747-4253-950e-dba0de24fedb"
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
seam.acs.entrances.list(access_grant_id="6596ea31-f747-4253-950e-dba0de24fedb")
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
seam.acs.entrances.list(access_grant_id: "6596ea31-f747-4253-950e-dba0de24fedb")
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
$seam->acs->entrances->list(
    access_grant_id: "6596ea31-f747-4253-950e-dba0de24fedb",
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
seam acs entrances list --access_grant_id "6596ea31-f747-4253-950e-dba0de24fedb"
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

---


### List entrances for an access method

Returns a list of all access system entrances for a specified access method.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.acs.entrances.list({
  access_method_id: "f838c33b-bc00-47a4-8bde-2aa8ea4258cc",
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
curl --include --request POST "https://connect.getseam.com/acs/entrances/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_method_id": "f838c33b-bc00-47a4-8bde-2aa8ea4258cc"
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
seam.acs.entrances.list(access_method_id="f838c33b-bc00-47a4-8bde-2aa8ea4258cc")
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
seam.acs.entrances.list(access_method_id: "f838c33b-bc00-47a4-8bde-2aa8ea4258cc")
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
$seam->acs->entrances->list(
    access_method_id: "f838c33b-bc00-47a4-8bde-2aa8ea4258cc",
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
seam acs entrances list --access_method_id "f838c33b-bc00-47a4-8bde-2aa8ea4258cc"
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
