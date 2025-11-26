# Create an Access Grant
{% hint style="info" %}
**Early Access Preview.** The Access Grants API is currently in Alpha. We're actively developing it and seeking early feedback at [support@seam.co](mailto:support@seam.co). Expect breaking changes as we refine the design.
{% endhint %}

- [Request Parameters](#request-parameters)
- [Response](#response)
- [Examples](#examples)

Creates a new Access Grant.


{% tabs %}
{% tab title="JavaScript" %}

Creates a new Access Grant using space IDs and an existing user identity.

#### Code:

```javascript
await seam.accessGrants.create({
  user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  space_ids: [
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
  ],
  requested_access_methods: [
    { mode: "code" },
    { mode: "card" },
    { mode: "mobile_key" },
  ],
  starts_at: "2025-06-16T16:54:17.946606Z",
  ends_at: "2025-06-18T16:54:17.946606Z",
});
```

#### Output:

```javascript
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

{% tab title="cURL" %}

Creates a new Access Grant using space IDs and an existing user identity.

#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identity_id": "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  "space_ids": [
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
  ],
  "requested_access_methods": [
    {
      "mode": "code"
    },
    {
      "mode": "card"
    },
    {
      "mode": "mobile_key"
    }
  ],
  "starts_at": "2025-06-16T16:54:17.946606Z",
  "ends_at": "2025-06-18T16:54:17.946606Z"
}
EOF
```

#### Output:

```curl
{
  "access_grant": {
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
}
```
{% endtab %}

{% tab title="Python" %}

Creates a new Access Grant using space IDs and an existing user identity.

#### Code:

```python
seam.access_grants.create(user_identity_id="e3d736c1-540d-4d10-83e5-9a4e135453b4", space_ids=["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"], requested_access_methods=[{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}], starts_at="2025-06-16T16:54:17.946606Z", ends_at="2025-06-18T16:54:17.946606Z")
```

#### Output:

```python
AccessGrant(access_grant_id="ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b", access_method_ids=["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"], created_at="2025-06-16T16:54:17.946606Z", display_name="My Access Grant", ends_at="2025-06-18T16:54:17.946606Z", instant_key_url="https://ik.seam.co/ABCXYZ", requested_access_methods=[{"display_name":"PIN Code Credential","mode":"code","created_at":"2025-06-16T16:54:17.946606Z","created_access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]},{"display_name":"Card Credential","mode":"card","created_at":"2025-06-16T16:54:19.946606Z","created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]},{"display_name":"Mobile Key Credential","mode":"mobile_key","created_at":"2025-06-16T16:54:21.946606Z","created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]}], space_ids=["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"], starts_at="2025-06-16T16:54:17.946606Z", user_identity_id="e3d736c1-540d-4d10-83e5-9a4e135453b4", workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}

Creates a new Access Grant using space IDs and an existing user identity.

#### Code:

```ruby
seam.access_grants.create(user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4", space_ids: ["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"], requested_access_methods: [{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}], starts_at: "2025-06-16T16:54:17.946606Z", ends_at: "2025-06-18T16:54:17.946606Z")
```

#### Output:

```ruby
{"access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b","access_method_ids" => ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],"created_at" => "2025-06-16T16:54:17.946606Z","display_name" => "My Access Grant","ends_at" => "2025-06-18T16:54:17.946606Z","instant_key_url" => "https://ik.seam.co/ABCXYZ","requested_access_methods" => [{"display_name":"PIN Code Credential","mode":"code","created_at":"2025-06-16T16:54:17.946606Z","created_access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]},{"display_name":"Card Credential","mode":"card","created_at":"2025-06-16T16:54:19.946606Z","created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]},{"display_name":"Mobile Key Credential","mode":"mobile_key","created_at":"2025-06-16T16:54:21.946606Z","created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]}],"space_ids" => ["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"],"starts_at" => "2025-06-16T16:54:17.946606Z","user_identity_id" => "e3d736c1-540d-4d10-83e5-9a4e135453b4","workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}

Creates a new Access Grant using space IDs and an existing user identity.

#### Code:

```php
$seam->access_grants->create(
    user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4",
    space_ids: [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    ],
    requested_access_methods: [
        ["mode" => "code"],
        ["mode" => "card"],
        ["mode" => "mobile_key"],
    ],
    starts_at: "2025-06-16T16:54:17.946606Z",
    ends_at: "2025-06-18T16:54:17.946606Z",
);
```

#### Output:

```php
[
    "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
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
    "user_identity_id" => "e3d736c1-540d-4d10-83e5-9a4e135453b4",
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}

Creates a new Access Grant using space IDs and an existing user identity.

#### Code:

```seam_cli
seam access-grants create --user_identity_id "e3d736c1-540d-4d10-83e5-9a4e135453b4" --space_ids ["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"] --requested_access_methods [{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}] --starts_at "2025-06-16T16:54:17.946606Z" --ends_at "2025-06-18T16:54:17.946606Z"
```

#### Output:

```seam_cli
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


<details>

<summary>Authentication Methods</summary>

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`requested_access_methods`** *Array* *of Objects* (Required)

<details>

<summary><b><code>code</code></b> <i>String</i></summary>

Specific PIN code to use for this access method. Only applicable when mode is 'code'.

</details>

---



<details>

<summary><b><code>mode</code></b> <i>Enum</i></summary>

Access method mode. Supported values: `code`, `card`, `mobile_key`.

Enum values:

- <code>code</code>
- <code>card</code>
- <code>mobile_key</code>

</details>

---


**`access_grant_key`** *String*

Unique key for the access grant within the workspace.

---

**`acs_entrance_ids`** *Array* *of UUIDs*

Set of IDs of the [entrances](https://docs.seam.co/latest/api/acs/systems/list) to which access is being granted.

---

**`customization_profile_id`** *String*

ID of the customization profile to apply to the Access Grant and its access methods.

---

**`device_ids`** *Array* *of UUIDs*

Set of IDs of the [devices](https://docs.seam.co/latest/api/devices/list) to which access is being granted.

---

**`ends_at`** *String*

Date and time at which the validity of the new grant ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`location`** *Object*

When used, creates a new location with the given entrances and devices, and gives the user access to this location.

<details>

<summary><b><code>acs_entrance_ids</code></b> <i>List</i></summary>

{% hint style="warning" %}
**Deprecated**. Use `acs_entrance_ids` at the top level.
{% endhint %}

</details>

---



<details>

<summary><b><code>device_ids</code></b> <i>List</i></summary>

{% hint style="warning" %}
**Deprecated**. Use `device_ids` at the top level.
{% endhint %}

</details>

---



<details>

<summary><b><code>name</code></b> <i>String</i></summary>

Name of the location.

</details>

---


**`location_ids`** *Array* *of UUIDs*

{% hint style="warning" %}
**Deprecated**. Use `space_ids`.
{% endhint %}

---

**`name`** *String*

Name for the access grant.

---

**`reservation_key`** *String*

Reservation key for the access grant.

---

**`space_ids`** *Array* *of UUIDs*

Set of IDs of existing spaces to which access is being granted.

---

**`space_keys`** *Array* *of Strings*

Set of keys of existing spaces to which access is being granted.

---

**`starts_at`** *String*

Date and time at which the validity of the new grant starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`user_identity`** *Object*

When used, creates a new user identity with the given details, and grants them access.

<details>

<summary><b><code>email_address</code></b> <i>String</i></summary>

Unique email address for the user identity.

</details>

---



<details>

<summary><b><code>full_name</code></b> <i>String</i></summary>

</details>

---



<details>

<summary><b><code>phone_number</code></b> <i>String</i></summary>

Unique phone number for the user identity in [E.164 format](https://www.itu.int/rec/T-REC-E.164/en) (for example, +15555550100).

</details>

---



<details>

<summary><b><code>user_identity_key</code></b> <i>String</i></summary>

Unique key for the user identity.

</details>

---


**`user_identity_id`** *String*

ID of user identity for whom access is being granted.

---


## Response

{% hint style="success" %}
Returns:
[access\_grant](.)**

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

---

## Examples


### Create an Access Grant using entrances and devices

Creates a new Access Grant using entrance IDs and device IDs and an existing user identity.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.accessGrants.create({
  user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  acs_entrance_ids: [
    "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "550e8400-e29b-41d4-a716-446655440001",
  ],
  device_ids: [
    "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  ],
  requested_access_methods: [
    { mode: "code" },
    { mode: "card" },
    { mode: "mobile_key" },
  ],
  starts_at: "2025-06-16T16:54:17.946606Z",
  ends_at: "2025-06-18T16:54:17.946606Z",
});
```

#### Output:

```javascript
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
  ]
}
```
{% endtab %}

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identity_id": "e3d736c1-540d-4d10-83e5-9a4e135453b4",
  "acs_entrance_ids": [
    "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "550e8400-e29b-41d4-a716-446655440001"
  ],
  "device_ids": [
    "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
  ],
  "requested_access_methods": [
    {
      "mode": "code"
    },
    {
      "mode": "card"
    },
    {
      "mode": "mobile_key"
    }
  ],
  "starts_at": "2025-06-16T16:54:17.946606Z",
  "ends_at": "2025-06-18T16:54:17.946606Z"
}
EOF
```

#### Output:

```curl
{
  "access_grant": {
    "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
    "access_method_ids": [
      "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
      "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
      "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
    ]
  }
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.access_grants.create(user_identity_id="e3d736c1-540d-4d10-83e5-9a4e135453b4", acs_entrance_ids=["f47ac10b-58cc-4372-a567-0e02b2c3d479","550e8400-e29b-41d4-a716-446655440001"], device_ids=["6ba7b811-9dad-11d1-80b4-00c04fd430c8","1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"], requested_access_methods=[{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}], starts_at="2025-06-16T16:54:17.946606Z", ends_at="2025-06-18T16:54:17.946606Z")
```

#### Output:

```python
AccessGrant(access_grant_id="ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b", access_method_ids=["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"])
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.access_grants.create(user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4", acs_entrance_ids: ["f47ac10b-58cc-4372-a567-0e02b2c3d479","550e8400-e29b-41d4-a716-446655440001"], device_ids: ["6ba7b811-9dad-11d1-80b4-00c04fd430c8","1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"], requested_access_methods: [{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}], starts_at: "2025-06-16T16:54:17.946606Z", ends_at: "2025-06-18T16:54:17.946606Z")
```

#### Output:

```ruby
{"access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b","access_method_ids" => ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->access_grants->create(
    user_identity_id: "e3d736c1-540d-4d10-83e5-9a4e135453b4",
    acs_entrance_ids: [
        "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "550e8400-e29b-41d4-a716-446655440001",
    ],
    device_ids: [
        "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    ],
    requested_access_methods: [
        ["mode" => "code"],
        ["mode" => "card"],
        ["mode" => "mobile_key"],
    ],
    starts_at: "2025-06-16T16:54:17.946606Z",
    ends_at: "2025-06-18T16:54:17.946606Z",
);
```

#### Output:

```php
[
    "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
    "access_method_ids" => [
        "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
        "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
        "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f",
    ],
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam access-grants create --user_identity_id "e3d736c1-540d-4d10-83e5-9a4e135453b4" --acs_entrance_ids ["f47ac10b-58cc-4372-a567-0e02b2c3d479","550e8400-e29b-41d4-a716-446655440001"] --device_ids ["6ba7b811-9dad-11d1-80b4-00c04fd430c8","1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d"] --requested_access_methods [{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}] --starts_at "2025-06-16T16:54:17.946606Z" --ends_at "2025-06-18T16:54:17.946606Z"
```

#### Output:

```seam_cli
{
  "access_grant_id": "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
  "access_method_ids": [
    "a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d",
    "5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f",
    "c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"
  ]
}
```
{% endtab %}

{% endtabs %}

---


### Create an Access Grant including a new user identity

Creates a new Access Grant and create a new user identity as part of the same operation.

{% tabs %}
{% tab title="JavaScript" %}



#### Code:

```javascript
await seam.accessGrants.create({
  user_identity: {
    full_name: "Jane Doe",
    email_address: "jane.doe@example.com",
    phone_number: "+1555551003",
  },
  space_ids: [
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
  ],
  requested_access_methods: [
    { mode: "code" },
    { mode: "card" },
    { mode: "mobile_key" },
  ],
  starts_at: "2025-06-16T16:54:17.946606Z",
  ends_at: "2025-06-18T16:54:17.946606Z",
});
```

#### Output:

```javascript
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

{% tab title="cURL" %}



#### Code:

```curl
curl --include --request POST "https://connect.getseam.com/access_grants/create" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- << EOF
{
  "user_identity": {
    "full_name": "Jane Doe",
    "email_address": "jane.doe@example.com",
    "phone_number": "+1555551003"
  },
  "space_ids": [
    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"
  ],
  "requested_access_methods": [
    {
      "mode": "code"
    },
    {
      "mode": "card"
    },
    {
      "mode": "mobile_key"
    }
  ],
  "starts_at": "2025-06-16T16:54:17.946606Z",
  "ends_at": "2025-06-18T16:54:17.946606Z"
}
EOF
```

#### Output:

```curl
{
  "access_grant": {
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
}
```
{% endtab %}

{% tab title="Python" %}



#### Code:

```python
seam.access_grants.create(user_identity={"full_name":"Jane Doe","email_address":"jane.doe@example.com","phone_number":"+1555551003"}, space_ids=["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"], requested_access_methods=[{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}], starts_at="2025-06-16T16:54:17.946606Z", ends_at="2025-06-18T16:54:17.946606Z")
```

#### Output:

```python
AccessGrant(access_grant_id="ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b", access_method_ids=["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"], created_at="2025-06-16T16:54:17.946606Z", display_name="My Access Grant", ends_at="2025-06-18T16:54:17.946606Z", instant_key_url="https://ik.seam.co/ABCXYZ", requested_access_methods=[{"display_name":"PIN Code Credential","mode":"code","created_at":"2025-06-16T16:54:17.946606Z","created_access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]},{"display_name":"Card Credential","mode":"card","created_at":"2025-06-16T16:54:19.946606Z","created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]},{"display_name":"Mobile Key Credential","mode":"mobile_key","created_at":"2025-06-16T16:54:21.946606Z","created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]}], space_ids=["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"], starts_at="2025-06-16T16:54:17.946606Z", user_identity_id="e3d736c1-540d-4d10-83e5-9a4e135453b4", workspace_id="750fc0bc-4450-4356-8d9f-18c6a3a6b2c7")
```
{% endtab %}

{% tab title="Ruby" %}



#### Code:

```ruby
seam.access_grants.create(user_identity: {"full_name":"Jane Doe","email_address":"jane.doe@example.com","phone_number":"+1555551003"}, space_ids: ["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"], requested_access_methods: [{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}], starts_at: "2025-06-16T16:54:17.946606Z", ends_at: "2025-06-18T16:54:17.946606Z")
```

#### Output:

```ruby
{"access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b","access_method_ids" => ["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d","5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f","c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"],"created_at" => "2025-06-16T16:54:17.946606Z","display_name" => "My Access Grant","ends_at" => "2025-06-18T16:54:17.946606Z","instant_key_url" => "https://ik.seam.co/ABCXYZ","requested_access_methods" => [{"display_name":"PIN Code Credential","mode":"code","created_at":"2025-06-16T16:54:17.946606Z","created_access_method_ids":["a1b2c3d4-e5f6-4a3b-2c1d-0e9f8a7b6c5d"]},{"display_name":"Card Credential","mode":"card","created_at":"2025-06-16T16:54:19.946606Z","created_access_method_ids":["5f4e3d2c-1b0a-9f8e-7d6c-5b4a3c2d1e0f"]},{"display_name":"Mobile Key Credential","mode":"mobile_key","created_at":"2025-06-16T16:54:21.946606Z","created_access_method_ids":["c7d8e9f0-1a2b-3c4d-5e6f-7a8b9c0d1e2f"]}],"space_ids" => ["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"],"starts_at" => "2025-06-16T16:54:17.946606Z","user_identity_id" => "e3d736c1-540d-4d10-83e5-9a4e135453b4","workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7"}
```
{% endtab %}

{% tab title="PHP" %}



#### Code:

```php
$seam->access_grants->create(
    user_identity: [
        "full_name" => "Jane Doe",
        "email_address" => "jane.doe@example.com",
        "phone_number" => "+1555551003",
    ],
    space_ids: [
        "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
    ],
    requested_access_methods: [
        ["mode" => "code"],
        ["mode" => "card"],
        ["mode" => "mobile_key"],
    ],
    starts_at: "2025-06-16T16:54:17.946606Z",
    ends_at: "2025-06-18T16:54:17.946606Z",
);
```

#### Output:

```php
[
    "access_grant_id" => "ef83cca9-5fdf-4ac2-93f3-c21c5a8be54b",
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
    "user_identity_id" => "e3d736c1-540d-4d10-83e5-9a4e135453b4",
    "workspace_id" => "750fc0bc-4450-4356-8d9f-18c6a3a6b2c7",
];
```
{% endtab %}

{% tab title="Seam CLI" %}



#### Code:

```seam_cli
seam access-grants create --user_identity {"full_name":"Jane Doe","email_address":"jane.doe@example.com","phone_number":"+1555551003"} --space_ids ["1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d","7f8e9d0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a"] --requested_access_methods [{"mode":"code"},{"mode":"card"},{"mode":"mobile_key"}] --starts_at "2025-06-16T16:54:17.946606Z" --ends_at "2025-06-18T16:54:17.946606Z"
```

#### Output:

```seam_cli
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
