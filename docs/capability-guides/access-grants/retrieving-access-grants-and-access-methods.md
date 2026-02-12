---
description: Learn how to list and get Access Grants and access methods.
---

# Retrieving Access Grants and Access Methods

You can list all Access Grants, and you can also filter the list by one or more of the following properties:

* `acs_entrance_id`
* `acs_system_id`
* `space_id`
* `user_identity_id`

You can also list all access methods for a specified Access Grant. In addition, you can get a specific Access Grant or access method by its ID.

***

## List Access Grants

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.list()
```

**Output:**

```python
[
  AccessGrant(
    access_grant={
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
          ],
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
          ],
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
          ],
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    }
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Output:**

```curl
{
  "access_grants": [
    {
      "access_grant": {
        "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
        "access_method_ids": [
          "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
        ],
        "created_at": "2025-06-16T16:54:17.946606Z",
        "display_name": "My Access Grant",
        "ends_at": "2025-06-18T16:54:17.946606Z",
        "instant_key_url": "https://ik.seam.co/ABCXYZ",
        "requested_access_methods": [
          {
            "display_name": "PIN Code",
            "mode": "code",
            "created_at": "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids": [
              "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
            ]
          },
          {
            "display_name": "Plastic Card",
            "mode": "card",
            "created_at": "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
            ]
          },
          {
            "display_name": "Mobile Key",
            "mode": "mobile_key",
            "created_at": "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
            ]
          }
        ],
        "space_ids": [
          "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
          "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
        ],
        "starts_at": "2025-06-16T16:54:17.946606Z",
        "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
      }
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.list();
```

**Output:**

```javascript
[
  {
    "access_grant": {
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
    }
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.list()
```

**Output:**

```ruby
[
  {
    "access_grant" => {
      access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      access_method_ids: %w[
        a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d
        5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f
        c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f
      ],
      created_at: "2025-06-16T16:54:17.946606Z",
      display_name: "My Access Grant",
      ends_at: "2025-06-18T16:54:17.946606Z",
      instant_key_url: "https://ik.seam.co/ABCXYZ",
      requested_access_methods: [
        {
          display_name: "PIN Code",
          mode: "code",
          created_at: "2025-06-16T16:54:17.946606Z",
          created_access_method_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        },
        {
          display_name: "Plastic Card",
          mode: "card",
          created_at: "2025-06-16T16:54:19.946606Z",
          created_access_method_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        },
        {
          display_name: "Mobile Key",
          mode: "mobile_key",
          created_at: "2025-06-16T16:54:21.946606Z",
          created_access_method_ids: ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        },
      ],
      space_ids: %w[1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d 7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a],
      starts_at: "2025-06-16T16:54:17.946606Z",
      user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40",
      workspace_id: "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    },
  },
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->list();
```

**Output:**

```php
[
  [
    "access_grant" => [
      "access_grant_id" => "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids" => [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at" => "2025-06-16T16:54:17.946606Z",
      "display_name" => "My Access Grant",
      "ends_at" => "2025-06-18T16:54:17.946606Z",
      "instant_key_url" => "https://ik.seam.co/ABCXYZ",
      "requested_access_methods" => [
        [
          "display_name" => "PIN Code",
          "mode" => "code",
          "created_at" => "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids" => [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          ],
        ],
        [
          "display_name" => "Plastic Card",
          "mode" => "card",
          "created_at" => "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids" => [
            "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          ],
        ],
          [
            "display_name" => "Mobile Key",
            "mode" => "mobile_key",
            "created_at" => "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids" => [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            ],
          ],
        ],
        "space_ids" => [
            "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
            "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        ],
        "starts_at" => "2025-06-16T16:54:17.946606Z",
        "user_identity_id" => "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    ],
  ],
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

### List Access Grants for an Entrance

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.list(
    acs_entrance_id="2673b363-4748-4a64-8075-f669c862ec74"
)
```

**Output:**

```python
[
  AccessGrant(
    access_grant={
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
          ],
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
          ],
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
          ],
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    }
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_entrance_id": "2673b363-4748-4a64-8075-f669c862ec74"
}'
```

**Output:**

```curl
{
  "access_grants": [
    {
      "access_grant": {
        "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
        "access_method_ids": [
          "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
        ],
        "created_at": "2025-06-16T16:54:17.946606Z",
        "display_name": "My Access Grant",
        "ends_at": "2025-06-18T16:54:17.946606Z",
        "instant_key_url": "https://ik.seam.co/ABCXYZ",
        "requested_access_methods": [
          {
            "display_name": "PIN Code",
            "mode": "code",
            "created_at": "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids": [
              "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
            ]
          },
          {
            "display_name": "Plastic Card",
            "mode": "card",
            "created_at": "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
            ]
          },
          {
            "display_name": "Mobile Key",
            "mode": "mobile_key",
            "created_at": "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
            ]
          }
        ],
        "space_ids": [
          "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
          "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
        ],
        "starts_at": "2025-06-16T16:54:17.946606Z",
        "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
      }
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.list({
  acs_entrance_id: "2673b363-4748-4a64-8075-f669c862ec74"
});
```

**Output:**

```javascript
[
  {
    "access_grant": {
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
    }
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.list(
  acs_entrance_id: "2673b363-4748-4a64-8075-f669c862ec74"
)
```

**Output:**

```ruby
[
  {
    "access_grant" => {
      access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      access_method_ids: %w[
        a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d
        5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f
        c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f
      ],
      created_at: "2025-06-16T16:54:17.946606Z",
      display_name: "My Access Grant",
      ends_at: "2025-06-18T16:54:17.946606Z",
      instant_key_url: "https://ik.seam.co/ABCXYZ",
      requested_access_methods: [
        {
          display_name: "PIN Code",
          mode: "code",
          created_at: "2025-06-16T16:54:17.946606Z",
          created_access_method_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        },
        {
          display_name: "Plastic Card",
          mode: "card",
          created_at: "2025-06-16T16:54:19.946606Z",
          created_access_method_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        },
        {
          display_name: "Mobile Key",
          mode: "mobile_key",
          created_at: "2025-06-16T16:54:21.946606Z",
          created_access_method_ids: ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        },
      ],
      space_ids: %w[1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d 7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a],
      starts_at: "2025-06-16T16:54:17.946606Z",
      user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40",
      workspace_id: "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    },
  },
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->list(
  acs_entrance_id: "2673b363-4748-4a64-8075-f669c862ec74"
);
```

**Output:**

```php
[
  [
    "access_grant" => [
      "access_grant_id" => "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids" => [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at" => "2025-06-16T16:54:17.946606Z",
      "display_name" => "My Access Grant",
      "ends_at" => "2025-06-18T16:54:17.946606Z",
      "instant_key_url" => "https://ik.seam.co/ABCXYZ",
      "requested_access_methods" => [
        [
          "display_name" => "PIN Code",
          "mode" => "code",
          "created_at" => "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids" => [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          ],
        ],
        [
          "display_name" => "Plastic Card",
          "mode" => "card",
          "created_at" => "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids" => [
            "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          ],
        ],
          [
            "display_name" => "Mobile Key",
            "mode" => "mobile_key",
            "created_at" => "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids" => [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            ],
          ],
        ],
        "space_ids" => [
            "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
            "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        ],
        "starts_at" => "2025-06-16T16:54:17.946606Z",
        "user_identity_id" => "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    ],
  ],
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

### List Access Grants for an Access System

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.list(
    acs_system_id="9f169742-048a-4105-84e3-bd1e0f9dc790"
)
```

**Output:**

```python
[
  AccessGrant(
    access_grant={
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
          ],
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
          ],
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
          ],
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    }
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "acs_system_id": "9f169742-048a-4105-84e3-bd1e0f9dc790"
}'
```

**Output:**

```curl
{
  "access_grants": [
    {
      "access_grant": {
        "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
        "access_method_ids": [
          "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
        ],
        "created_at": "2025-06-16T16:54:17.946606Z",
        "display_name": "My Access Grant",
        "ends_at": "2025-06-18T16:54:17.946606Z",
        "instant_key_url": "https://ik.seam.co/ABCXYZ",
        "requested_access_methods": [
          {
            "display_name": "PIN Code",
            "mode": "code",
            "created_at": "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids": [
              "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
            ]
          },
          {
            "display_name": "Plastic Card",
            "mode": "card",
            "created_at": "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
            ]
          },
          {
            "display_name": "Mobile Key",
            "mode": "mobile_key",
            "created_at": "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
            ]
          }
        ],
        "space_ids": [
          "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
          "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
        ],
        "starts_at": "2025-06-16T16:54:17.946606Z",
        "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
      }
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.list({
  acs_system_id: "9f169742-048a-4105-84e3-bd1e0f9dc790"
});
```

**Output:**

```javascript
[
  {
    "access_grant": {
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
    }
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.list(
  acs_system_id: "9f169742-048a-4105-84e3-bd1e0f9dc790"
)
```

**Output:**

```ruby
[
  {
    "access_grant" => {
      access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      access_method_ids: %w[
        a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d
        5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f
        c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f
      ],
      created_at: "2025-06-16T16:54:17.946606Z",
      display_name: "My Access Grant",
      ends_at: "2025-06-18T16:54:17.946606Z",
      instant_key_url: "https://ik.seam.co/ABCXYZ",
      requested_access_methods: [
        {
          display_name: "PIN Code",
          mode: "code",
          created_at: "2025-06-16T16:54:17.946606Z",
          created_access_method_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        },
        {
          display_name: "Plastic Card",
          mode: "card",
          created_at: "2025-06-16T16:54:19.946606Z",
          created_access_method_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        },
        {
          display_name: "Mobile Key",
          mode: "mobile_key",
          created_at: "2025-06-16T16:54:21.946606Z",
          created_access_method_ids: ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        },
      ],
      space_ids: %w[1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d 7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a],
      starts_at: "2025-06-16T16:54:17.946606Z",
      user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40",
      workspace_id: "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    },
  },
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->list(
  acs_system_id: "9f169742-048a-4105-84e3-bd1e0f9dc790"
);
```

**Output:**

```php
[
  [
    "access_grant" => [
      "access_grant_id" => "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids" => [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at" => "2025-06-16T16:54:17.946606Z",
      "display_name" => "My Access Grant",
      "ends_at" => "2025-06-18T16:54:17.946606Z",
      "instant_key_url" => "https://ik.seam.co/ABCXYZ",
      "requested_access_methods" => [
        [
          "display_name" => "PIN Code",
          "mode" => "code",
          "created_at" => "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids" => [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          ],
        ],
        [
          "display_name" => "Plastic Card",
          "mode" => "card",
          "created_at" => "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids" => [
            "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          ],
        ],
          [
            "display_name" => "Mobile Key",
            "mode" => "mobile_key",
            "created_at" => "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids" => [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            ],
          ],
        ],
        "space_ids" => [
            "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
            "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        ],
        "starts_at" => "2025-06-16T16:54:17.946606Z",
        "user_identity_id" => "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    ],
  ],
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

### List Access Grants for a Space

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.list(
  space_id="1d20c47d-3cc0-41ca-9917-bc798d071543"
)
```

**Output:**

```python
[
  AccessGrant(
    access_grant={
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
          ],
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
          ],
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
          ],
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    }
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "space_id": "1d20c47d-3cc0-41ca-9917-bc798d071543"
}'
```

**Output:**

```curl
{
  "access_grants": [
    {
      "access_grant": {
        "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
        "access_method_ids": [
          "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
        ],
        "created_at": "2025-06-16T16:54:17.946606Z",
        "display_name": "My Access Grant",
        "ends_at": "2025-06-18T16:54:17.946606Z",
        "instant_key_url": "https://ik.seam.co/ABCXYZ",
        "requested_access_methods": [
          {
            "display_name": "PIN Code",
            "mode": "code",
            "created_at": "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids": [
              "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
            ]
          },
          {
            "display_name": "Plastic Card",
            "mode": "card",
            "created_at": "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
            ]
          },
          {
            "display_name": "Mobile Key",
            "mode": "mobile_key",
            "created_at": "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
            ]
          }
        ],
        "space_ids": [
          "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
          "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
        ],
        "starts_at": "2025-06-16T16:54:17.946606Z",
        "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
      }
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.list({
  space_id: "1d20c47d-3cc0-41ca-9917-bc798d071543"
});
```

**Output:**

```javascript
[
  {
    "access_grant": {
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
    }
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.list(
  space_id: "1d20c47d-3cc0-41ca-9917-bc798d071543"
)
```

**Output:**

```ruby
[
  {
    "access_grant" => {
      access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      access_method_ids: %w[
        a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d
        5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f
        c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f
      ],
      created_at: "2025-06-16T16:54:17.946606Z",
      display_name: "My Access Grant",
      ends_at: "2025-06-18T16:54:17.946606Z",
      instant_key_url: "https://ik.seam.co/ABCXYZ",
      requested_access_methods: [
        {
          display_name: "PIN Code",
          mode: "code",
          created_at: "2025-06-16T16:54:17.946606Z",
          created_access_method_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        },
        {
          display_name: "Plastic Card",
          mode: "card",
          created_at: "2025-06-16T16:54:19.946606Z",
          created_access_method_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        },
        {
          display_name: "Mobile Key",
          mode: "mobile_key",
          created_at: "2025-06-16T16:54:21.946606Z",
          created_access_method_ids: ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        },
      ],
      space_ids: %w[1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d 7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a],
      starts_at: "2025-06-16T16:54:17.946606Z",
      user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40",
      workspace_id: "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    },
  },
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->list(
  space_id: "1d20c47d-3cc0-41ca-9917-bc798d071543"
);
```

**Output:**

```php
[
  [
    "access_grant" => [
      "access_grant_id" => "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids" => [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at" => "2025-06-16T16:54:17.946606Z",
      "display_name" => "My Access Grant",
      "ends_at" => "2025-06-18T16:54:17.946606Z",
      "instant_key_url" => "https://ik.seam.co/ABCXYZ",
      "requested_access_methods" => [
        [
          "display_name" => "PIN Code",
          "mode" => "code",
          "created_at" => "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids" => [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          ],
        ],
        [
          "display_name" => "Plastic Card",
          "mode" => "card",
          "created_at" => "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids" => [
            "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          ],
        ],
          [
            "display_name" => "Mobile Key",
            "mode" => "mobile_key",
            "created_at" => "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids" => [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            ],
          ],
        ],
        "space_ids" => [
            "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
            "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        ],
        "starts_at" => "2025-06-16T16:54:17.946606Z",
        "user_identity_id" => "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    ],
  ],
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

### List Access Grants for a User Identity

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.list(
    user_identity_id="f7620fcf-d92f-471e-b97e-3806daeebd40"
)
```

**Output:**

```python
[
  AccessGrant(
    access_grant={
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
          ],
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
          ],
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
          ],
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    }
  ),
  ...
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl -X 'POST' \
  'https://connect.getseam.com/access_grants/list' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${SEAM_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
  "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40"
}'
```

**Output:**

```curl
{
  "access_grants": [
    {
      "access_grant": {
        "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
        "access_method_ids": [
          "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
        ],
        "created_at": "2025-06-16T16:54:17.946606Z",
        "display_name": "My Access Grant",
        "ends_at": "2025-06-18T16:54:17.946606Z",
        "instant_key_url": "https://ik.seam.co/ABCXYZ",
        "requested_access_methods": [
          {
            "display_name": "PIN Code",
            "mode": "code",
            "created_at": "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids": [
              "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
            ]
          },
          {
            "display_name": "Plastic Card",
            "mode": "card",
            "created_at": "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
            ]
          },
          {
            "display_name": "Mobile Key",
            "mode": "mobile_key",
            "created_at": "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids": [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
            ]
          }
        ],
        "space_ids": [
          "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
          "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
        ],
        "starts_at": "2025-06-16T16:54:17.946606Z",
        "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
      }
    },
    ...
  ],
  "ok": true
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.list({
  user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40"
});
```

**Output:**

```javascript
[
  {
    "access_grant": {
      "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids": [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
      ],
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "My Access Grant",
      "ends_at": "2025-06-18T16:54:17.946606Z",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "requested_access_methods": [
        {
          "display_name": "PIN Code",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
        },
        {
          "display_name": "Plastic Card",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
        },
        {
          "display_name": "Mobile Key",
          "mode": "mobile_key",
          "created_at": "2025-06-16T16:54:21.946606Z",
          "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
        }
      ],
      "space_ids": [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
      ],
      "starts_at": "2025-06-16T16:54:17.946606Z",
      "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
      "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
    }
  },
  ...
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.list(
  user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40"
)
```

**Output:**

```ruby
[
  {
    "access_grant" => {
      access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      access_method_ids: %w[
        a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d
        5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f
        c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f
      ],
      created_at: "2025-06-16T16:54:17.946606Z",
      display_name: "My Access Grant",
      ends_at: "2025-06-18T16:54:17.946606Z",
      instant_key_url: "https://ik.seam.co/ABCXYZ",
      requested_access_methods: [
        {
          display_name: "PIN Code",
          mode: "code",
          created_at: "2025-06-16T16:54:17.946606Z",
          created_access_method_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        },
        {
          display_name: "Plastic Card",
          mode: "card",
          created_at: "2025-06-16T16:54:19.946606Z",
          created_access_method_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        },
        {
          display_name: "Mobile Key",
          mode: "mobile_key",
          created_at: "2025-06-16T16:54:21.946606Z",
          created_access_method_ids: ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        },
      ],
      space_ids: %w[1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d 7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a],
      starts_at: "2025-06-16T16:54:17.946606Z",
      user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40",
      workspace_id: "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    },
  },
  ...
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->list(
  user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40"
);
```

**Output:**

```php
[
  [
    "access_grant" => [
      "access_grant_id" => "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
      "access_method_ids" => [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      ],
      "created_at" => "2025-06-16T16:54:17.946606Z",
      "display_name" => "My Access Grant",
      "ends_at" => "2025-06-18T16:54:17.946606Z",
      "instant_key_url" => "https://ik.seam.co/ABCXYZ",
      "requested_access_methods" => [
        [
          "display_name" => "PIN Code",
          "mode" => "code",
          "created_at" => "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids" => [
            "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
          ],
        ],
        [
          "display_name" => "Plastic Card",
          "mode" => "card",
          "created_at" => "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids" => [
            "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
          ],
        ],
          [
            "display_name" => "Mobile Key",
            "mode" => "mobile_key",
            "created_at" => "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids" => [
              "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            ],
          ],
        ],
        "space_ids" => [
            "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
            "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
        ],
        "starts_at" => "2025-06-16T16:54:17.946606Z",
        "user_identity_id" => "f7620fcf-d92f-471e-b97e-3806daeebd40",
        "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
    ],
  ],
  ...
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

***

## List Access Methods for an Access Grant

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_methods.list(access_grant_id="9072ebcd-95f3-4e4b-8f2f-10053911533b")
```

**Output:**

```python
[
    AccessMethod(
        access_method_id="a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        created_at="2025-06-16T16:54:17.946606Z",
        display_name="PIN Code",
        is_card_encoding_required=false,
        mode="code",
        workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc",
    ),
    AccessMethod(
        access_method_id="5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        created_at="2025-06-16T16:54:19.946606Z",
        display_name="Plastic Card",
        is_card_encoding_required=true,
        mode="card",
        workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc",
    ),
    AccessMethod(
        access_method_id="c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
        created_at="2025-06-16T16:54:21.946606Z",
        display_name="Mobile Key",
        instant_key_url="https://ik.seam.co/ABCXYZ",
        is_card_encoding_required=false,
        mode="mobile_key",
        workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc",
    ),
]
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl --include --request POST "https://connect.getseam.com/access_methods/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_grant_id": "9072ebcd-95f3-4e4b-8f2f-10053911533b"
}
EOF
```

**Output:**

```curl
{
  "access_methods": [
    {
      "access_method_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
      "created_at": "2025-06-16T16:54:17.946606Z",
      "display_name": "PIN Code",
      "is_card_encoding_required": false,
      "mode": "code",
      "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
    },
    {
      "access_method_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
      "created_at": "2025-06-16T16:54:19.946606Z",
      "display_name": "Plastic Card",
      "is_card_encoding_required": true,
      "mode": "card",
      "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
    },
    {
      "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
      "created_at": "2025-06-16T16:54:21.946606Z",
      "display_name": "Mobile Key",
      "instant_key_url": "https://ik.seam.co/ABCXYZ",
      "is_card_encoding_required": false,
      "mode": "mobile_key",
      "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
    }
  ]
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessMethods.list({
  access_grant_id: "9072ebcd-95f3-4e4b-8f2f-10053911533b",
});
```

**Output:**

```javascript
[
  {
    "access_method_id": "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "created_at": "2025-06-16T16:54:17.946606Z",
    "display_name": "PIN Code",
    "is_card_encoding_required": false,
    "mode": "code",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  },
  {
    "access_method_id": "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "created_at": "2025-06-16T16:54:19.946606Z",
    "display_name": "Plastic Card",
    "is_card_encoding_required": true,
    "mode": "card",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  },
  {
    "access_method_id": "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    "created_at": "2025-06-16T16:54:21.946606Z",
    "display_name": "Mobile Key",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required": false,
    "mode": "mobile_key",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  }
]
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_methods.list(access_grant_id: "9072ebcd-95f3-4e4b-8f2f-10053911533b")
```

**Output:**

```ruby
[
  {
    "access_method_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "created_at" => "2025-06-16T16:54:17.946606Z",
    "display_name" => "PIN Code",
    "is_card_encoding_required" => false,
    "mode" => "code",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
  },
  {
    "access_method_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "created_at" => "2025-06-16T16:54:19.946606Z",
    "display_name" => "Plastic Card",
    "is_card_encoding_required" => true,
    "mode" => "card",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
  },
  {
    "access_method_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    "created_at" => "2025-06-16T16:54:21.946606Z",
    "display_name" => "Mobile Key",
    "instant_key_url" => "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required" => false,
    "mode" => "mobile_key",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
  },
]
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_methods->list(
    access_grant_id: "9072ebcd-95f3-4e4b-8f2f-10053911533b"
);
```

**Output:**

```php
[
    [
        "access_method_id" => "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "created_at" => "2025-06-16T16:54:17.946606Z",
        "display_name" => "PIN Code",
        "is_card_encoding_required" => false,
        "mode" => "code",
        "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
    ],
    [
        "access_method_id" => "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "created_at" => "2025-06-16T16:54:19.946606Z",
        "display_name" => "Plastic Card",
        "is_card_encoding_required" => true,
        "mode" => "card",
        "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
    ],
    [
        "access_method_id" => "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
        "created_at" => "2025-06-16T16:54:21.946606Z",
        "display_name" => "Mobile Key",
        "instant_key_url" => "https://ik.seam.co/ABCXYZ",
        "is_card_encoding_required" => false,
        "mode" => "mobile_key",
        "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
    ],
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

***

## Get an Access Grant

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_grants.get(access_grant_id="704eadf0-a0a2-4715-b0e1-2f002dc1b6e0")
```

**Output:**

```python
AccessGrant(
    access_grant_id="704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
    access_method_ids=[
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    ],
    created_at="2025-06-16T16:54:17.946606Z",
    display_name="My Access Grant",
    ends_at="2025-06-18T16:54:17.946606Z",
    instant_key_url="https://ik.seam.co/ABCXYZ",
    requested_access_methods=[
        {
            "display_name": "PIN Code",
            "mode": "code",
            "created_at": "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
        },
        {
            "display_name": "Plastic Card",
            "mode": "card",
            "created_at": "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
        },
        {
            "display_name": "Mobile Key",
            "mode": "mobile_key",
            "created_at": "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
        },
    ],
    space_ids=[
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    ],
    starts_at="2025-06-16T16:54:17.946606Z",
    user_identity_id="e3d736c1-540d-4d10-83e5-9a4e135453b4",
    workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0"
}
EOF
```

**Output:**

```curl
{
  "access_grant": {
    "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
    "access_method_ids": [
      "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
      "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
      "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
    ],
    "created_at": "2025-06-16T16:54:17.946606Z",
    "display_name": "My Access Grant",
    "ends_at": "2025-06-18T16:54:17.946606Z",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    "requested_access_methods": [
      {
        "display_name": "PIN Code",
        "mode": "code",
        "created_at": "2025-06-16T16:54:17.946606Z",
        "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
      },
      {
        "display_name": "Plastic Card",
        "mode": "card",
        "created_at": "2025-06-16T16:54:19.946606Z",
        "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
      },
      {
        "display_name": "Mobile Key",
        "mode": "mobile_key",
        "created_at": "2025-06-16T16:54:21.946606Z",
        "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
      }
    ],
    "space_ids": [
      "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
    ],
    "starts_at": "2025-06-16T16:54:17.946606Z",
    "user_identity_id": "e3d736c1-540d-4d10-83e5-9a4e135453b4",
    "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessGrants.get({
  access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
});
```

**Output:**

```javascript
{
  "access_grant_id": "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
  ],
  "created_at": "2025-06-16T16:54:17.946606Z",
  "display_name": "My Access Grant",
  "ends_at": "2025-06-18T16:54:17.946606Z",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "requested_access_methods": [
    {
      "display_name": "PIN Code",
      "mode": "code",
      "created_at": "2025-06-16T16:54:17.946606Z",
      "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
    },
    {
      "display_name": "Plastic Card",
      "mode": "card",
      "created_at": "2025-06-16T16:54:19.946606Z",
      "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
    },
    {
      "display_name": "Mobile Key",
      "mode": "mobile_key",
      "created_at": "2025-06-16T16:54:21.946606Z",
      "created_access_method_ids": ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]
    }
  ],
  "space_ids": [
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
  ],
  "starts_at": "2025-06-16T16:54:17.946606Z",
  "user_identity_id": "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  "workspace_id": "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_grants.get(access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0")
```

**Output:**

```ruby
{
  "access_grant_id" => "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
  "access_method_ids" => %w[
    a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d
    5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f
    c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f
  ],
  "created_at" => "2025-06-16T16:54:17.946606Z",
  "display_name" => "My Access Grant",
  "ends_at" => "2025-06-18T16:54:17.946606Z",
  "instant_key_url" => "https://ik.seam.co/ABCXYZ",
  "requested_access_methods" => [
    {
      display_name: "PIN Code",
      mode: "code",
      created_at: "2025-06-16T16:54:17.946606Z",
      created_access_method_ids: ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"],
    },
    {
      display_name: "Plastic Card",
      mode: "card",
      created_at: "2025-06-16T16:54:19.946606Z",
      created_access_method_ids: ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"],
    },
    {
      display_name: "Mobile Key",
      mode: "mobile_key",
      created_at: "2025-06-16T16:54:21.946606Z",
      created_access_method_ids: ["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],
    },
  ],
  "space_ids" => %w[1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d 7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a],
  "starts_at" => "2025-06-16T16:54:17.946606Z",
  "user_identity_id" => "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
}
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_grants->get(
    access_grant_id: "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0"
);
```

**Output:**

```php
[
    "access_grant_id" => "704eadf0-a0a2-4715-b0e1-2f002dc1b6e0",
    "access_method_ids" => [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    ],
    "created_at" => "2025-06-16T16:54:17.946606Z",
    "display_name" => "My Access Grant",
    "ends_at" => "2025-06-18T16:54:17.946606Z",
    "instant_key_url" => "https://ik.seam.co/ABCXYZ",
    "requested_access_methods" => [
        [
            "display_name" => "PIN Code",
            "mode" => "code",
            "created_at" => "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids" => [
                "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
            ],
        ],
        [
            "display_name" => "Plastic Card",
            "mode" => "card",
            "created_at" => "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids" => [
                "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
            ],
        ],
        [
            "display_name" => "Mobile Key",
            "mode" => "mobile_key",
            "created_at" => "2025-06-16T16:54:21.946606Z",
            "created_access_method_ids" => [
                "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
            ],
        ],
    ],
    "space_ids" => [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    ],
    "starts_at" => "2025-06-16T16:54:17.946606Z",
    "user_identity_id" => "e3d736c1-540d-4d10-83e5-9a4e135453b4",
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

***

## Get an Access Method

{% tabs %}
{% tab title="Python" %}
**Code:**

```python
seam.access_methods.get(access_method_id="7410aea4-6bed-490c-a602-dd417d9cd075")
```

**Output:**

```python
AccessMethod(
    access_method_id="7410aea4-6bed-490c-a602-dd417d9cd075",
    created_at="2025-06-14T16:54:17.946612Z",
    display_name="My Mobile Key",
    instant_key_url="https://ik.seam.co/ABCXYZ",
    is_card_encoding_required=false,
    mode="mobile_key",
    workspace_id="661025d3-c1d2-403c-83a8-af153aaedfbc",
)
```
{% endtab %}

{% tab title="cURL (bash)" %}
**Code:**

```curl
curl --include --request POST "https://connect.getseam.com/access_methods/get" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "access_method_id": "7410aea4-6bed-490c-a602-dd417d9cd075"
}
EOF
```

**Output:**

```curl
{
  "access_method": {
    "access_method_id": "7410aea4-6bed-490c-a602-dd417d9cd075",
    "created_at": "2025-06-14T16:54:17.946612Z",
    "display_name": "My Mobile Key",
    "instant_key_url": "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required": false,
    "mode": "mobile_key",
    "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
  }
}
```
{% endtab %}

{% tab title="JavaScript" %}
**Code:**

```javascript
await seam.accessMethods.get({
  access_method_id: "7410aea4-6bed-490c-a602-dd417d9cd075",
});
```

**Output:**

```javascript
{
  "access_method_id": "7410aea4-6bed-490c-a602-dd417d9cd075",
  "created_at": "2025-06-14T16:54:17.946612Z",
  "display_name": "My Mobile Key",
  "instant_key_url": "https://ik.seam.co/ABCXYZ",
  "is_card_encoding_required": false,
  "mode": "mobile_key",
  "workspace_id": "661025d3-c1d2-403c-83a8-af153aaedfbc"
}
```
{% endtab %}

{% tab title="Ruby" %}
**Code:**

```ruby
seam.access_methods.get(access_method_id: "7410aea4-6bed-490c-a602-dd417d9cd075")
```

**Output:**

```ruby
{
  "access_method_id" => "7410aea4-6bed-490c-a602-dd417d9cd075",
  "created_at" => "2025-06-14T16:54:17.946612Z",
  "display_name" => "My Mobile Key",
  "instant_key_url" => "https://ik.seam.co/ABCXYZ",
  "is_card_encoding_required" => false,
  "mode" => "mobile_key",
  "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
}
```
{% endtab %}

{% tab title="PHP" %}
**Code:**

```php
$seam->access_methods->get(
    access_method_id: "7410aea4-6bed-490c-a602-dd417d9cd075"
);
```

**Output:**

```php
[
    "access_method_id" => "7410aea4-6bed-490c-a602-dd417d9cd075",
    "created_at" => "2025-06-14T16:54:17.946612Z",
    "display_name" => "My Mobile Key",
    "instant_key_url" => "https://ik.seam.co/ABCXYZ",
    "is_card_encoding_required" => false,
    "mode" => "mobile_key",
    "workspace_id" => "661025d3-c1d2-403c-83a8-af153aaedfbc",
];
```
{% endtab %}

{% tab title="C#" %}
**Code:**

```csharp
// Coming Soon!
```

**Output:**

```json
// Coming Soon!
```
{% endtab %}
{% endtabs %}

