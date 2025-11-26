# List Access Grants
{% hint style="info" %}
**Early Access Preview.** The Access Grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)

Gets an Access Grant.


{% tabs %}
{% tab title="JavaScript" %}

Returns a list of all Access Grants.

#### Code:

```javascript
await seam.accessGrants.list({
  user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40",
  acs_system_id: "9f169742-048a-4105-84e3-bd1e0f9dc790",
  acs_entrance_id: "2673b363-4748-4a64-8075-f669c862ec74",
  space_id: "1d20c47d-3cc0-41ca-9917-bc798d071543",
});
```

#### Output:

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
          "display_name": "PIN Code Credential",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
        },
        {
          "display_name": "Card Credential",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
        },
        {
          "display_name": "Mobile Key Credential",
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
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Returns a list of all Access Grants.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identity_id": "f7620fcf-d92f-471e-b97e-3806daeebd40",
  "acs_system_id": "9f169742-048a-4105-84e3-bd1e0f9dc790",
  "acs_entrance_id": "2673b363-4748-4a64-8075-f669c862ec74",
  "space_id": "1d20c47d-3cc0-41ca-9917-bc798d071543"
}
EOF
```

#### Output:

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
            "display_name": "PIN Code Credential",
            "mode": "code",
            "created_at": "2025-06-16T16:54:17.946606Z",
            "created_access_method_ids": [
              "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"
            ]
          },
          {
            "display_name": "Card Credential",
            "mode": "card",
            "created_at": "2025-06-16T16:54:19.946606Z",
            "created_access_method_ids": [
              "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"
            ]
          },
          {
            "display_name": "Mobile Key Credential",
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
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Returns a list of all Access Grants.

#### Code:

```python
seam.access_grants.list(user_identity_id="f7620fcf-d92f-471e-b97e-3806daeebd40", acs_system_id="9f169742-048a-4105-84e3-bd1e0f9dc790", acs_entrance_id="2673b363-4748-4a64-8075-f669c862ec74", space_id="1d20c47d-3cc0-41ca-9917-bc798d071543")
```

#### Output:

```python
[AccessGrant(access_grant={"access_grant_id":"704eadf0-a0a2-4715-b0e1-2f002dc1b6e0","access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],"created_at":"2025-06-16T16:54:17.946606Z","display_name":"My Access Grant","ends_at":"2025-06-18T16:54:17.946606Z","instant_key_url":"https://ik.seam.co/ABCXYZ","requested_access_methods":[{"display_name":"PIN Code Credential","mode":"code","created_at":"2025-06-16T16:54:17.946606Z","created_access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]},{"display_name":"Card Credential","mode":"card","created_at":"2025-06-16T16:54:19.946606Z","created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]},{"display_name":"Mobile Key Credential","mode":"mobile_key","created_at":"2025-06-16T16:54:21.946606Z","created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]}],"space_ids":["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"],"starts_at":"2025-06-16T16:54:17.946606Z","user_identity_id":"f7620fcf-d92f-471e-b97e-3806daeebd40","workspace_id":"750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"})]
```
{% endtab %}

{% tab title="Ruby" %}

Returns a list of all Access Grants.

#### Code:

```ruby
seam.access_grants.list(user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40", acs_system_id: "9f169742-048a-4105-84e3-bd1e0f9dc790", acs_entrance_id: "2673b363-4748-4a64-8075-f669c862ec74", space_id: "1d20c47d-3cc0-41ca-9917-bc798d071543")
```

#### Output:

```ruby
[{"access_grant" => {"access_grant_id":"704eadf0-a0a2-4715-b0e1-2f002dc1b6e0","access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],"created_at":"2025-06-16T16:54:17.946606Z","display_name":"My Access Grant","ends_at":"2025-06-18T16:54:17.946606Z","instant_key_url":"https://ik.seam.co/ABCXYZ","requested_access_methods":[{"display_name":"PIN Code Credential","mode":"code","created_at":"2025-06-16T16:54:17.946606Z","created_access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]},{"display_name":"Card Credential","mode":"card","created_at":"2025-06-16T16:54:19.946606Z","created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]},{"display_name":"Mobile Key Credential","mode":"mobile_key","created_at":"2025-06-16T16:54:21.946606Z","created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]}],"space_ids":["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"],"starts_at":"2025-06-16T16:54:17.946606Z","user_identity_id":"f7620fcf-d92f-471e-b97e-3806daeebd40","workspace_id":"750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}}]
```
{% endtab %}

{% tab title="PHP" %}

Returns a list of all Access Grants.

#### Code:

```php
$seam->access_grants->list(
    user_identity_id: "f7620fcf-d92f-471e-b97e-3806daeebd40",
    acs_system_id: "9f169742-048a-4105-84e3-bd1e0f9dc790",
    acs_entrance_id: "2673b363-4748-4a64-8075-f669c862ec74",
    space_id: "1d20c47d-3cc0-41ca-9917-bc798d071543",
);
```

#### Output:

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
                    "display_name" => "PIN Code Credential",
                    "mode" => "code",
                    "created_at" => "2025-06-16T16:54:17.946606Z",
                    "created_access_method_ids" => [
                        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
                    ],
                ],
                [
                    "display_name" => "Card Credential",
                    "mode" => "card",
                    "created_at" => "2025-06-16T16:54:19.946606Z",
                    "created_access_method_ids" => [
                        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
                    ],
                ],
                [
                    "display_name" => "Mobile Key Credential",
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
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Returns a list of all Access Grants.

#### Code:

```seam_cli
seam access-grants list --user_identity_id "f7620fcf-d92f-471e-b97e-3806daeebd40" --acs_system_id "9f169742-048a-4105-84e3-bd1e0f9dc790" --acs_entrance_id "2673b363-4748-4a64-8075-f669c862ec74" --space_id "1d20c47d-3cc0-41ca-9917-bc798d071543"
```

#### Output:

```seam_cli
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
          "display_name": "PIN Code Credential",
          "mode": "code",
          "created_at": "2025-06-16T16:54:17.946606Z",
          "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
        },
        {
          "display_name": "Card Credential",
          "mode": "card",
          "created_at": "2025-06-16T16:54:19.946606Z",
          "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
        },
        {
          "display_name": "Mobile Key Credential",
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

**`access_grant_key`** *String*

Filter Access Grants by access_grant_key.

---

**`acs_entrance_id`** *String*

ID of the entrance by which you want to filter the list of Access Grants.

---

**`acs_system_id`** *String*

ID of the access system by which you want to filter the list of Access Grants.

---

**`customer_key`** *String*

Customer key for which you want to list access grants.

---

**`location_id`** *String*

{% hint style="warning" %}
**Deprecated**. Use `space_id`.
{% endhint %}

---

**`reservation_key`** *String*

Filter Access Grants by reservation_key.

---

**`space_id`** *String*

ID of the space by which you want to filter the list of Access Grants.

---

**`user_identity_id`** *String*

ID of user identity by which you want to filter the list of Access Grants.

---


## Response

{% hint style="success" %}
Returns:
Array of [access\_grants](.)**

{% endhint %}


{% tabs %}
{% tab title="JSON" %}



```json
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
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
      "display_name": "PIN Code Credential",
      "mode": "code",
      "created_at": "2025-06-16T16:54:17.946606Z",
      "created_access_method_ids": ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]
    },
    {
      "display_name": "Card Credential",
      "mode": "card",
      "created_at": "2025-06-16T16:54:19.946606Z",
      "created_access_method_ids": ["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]
    },
    {
      "display_name": "Mobile Key Credential",
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
{% endtabs %}
