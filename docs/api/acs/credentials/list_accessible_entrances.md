# List Accessible Entrances


- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [entrances](https://docs.seam.co/latest/api/acs/entrances) to which a [credential](https://docs.seam.co/latest/api/acs/credentials) grants access.


{% tabs %}
{% tab title="JavaScript" %}

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

#### Code

```javascript
await seam.acs.credentials.listAccessibleEntrances({
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
});
```

#### Output

```javascript
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "visionline_metadata": {
      "profiles": [
        {
          "visionline_door_profile_id": "Guest Door",
          "visionline_door_profile_type": "BLE"
        }
      ],
      "door_name": "Guest Lock 2",
      "door_category": "guest"
    },
    "latch_metadata": null,
    "display_name": "Guest Lock 2",
    "created_at": "2024-03-26T14:31:18.979Z"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/acs/credentials/list_accessible_entrances" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "acs_credential_id": "66666666-6666-6666-6666-666666666666"
}
EOF
```

#### Output

```curl
{
  "acs_entrances": [
    {
      "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
      "acs_system_id": "11111111-1111-1111-1111-111111111111",
      "workspace_id": "00000000-0000-0000-0000-000000000000",
      "visionline_metadata": {
        "profiles": [
          {
            "visionline_door_profile_id": "Guest Door",
            "visionline_door_profile_type": "BLE"
          }
        ],
        "door_name": "Guest Lock 2",
        "door_category": "guest"
      },
      "latch_metadata": null,
      "display_name": "Guest Lock 2",
      "created_at": "2024-03-26T14:31:18.979Z"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

#### Code

```python
seam.acs.credentials.list_accessible_entrances(
    acs_credential_id="66666666-6666-6666-6666-666666666666"
)
```

#### Output

```python
[
    AcsEntrance(
        acs_entrance_id="55555555-5555-5555-5555-555555555555",
        acs_system_id="11111111-1111-1111-1111-111111111111",
        workspace_id="00000000-0000-0000-0000-000000000000",
        visionline_metadata={
            "profiles": [
                {
                    "visionline_door_profile_id": "Guest Door",
                    "visionline_door_profile_type": "BLE",
                }
            ],
            "door_name": "Guest Lock 2",
            "door_category": "guest",
        },
        latch_metadata=None,
        display_name="Guest Lock 2",
        created_at="2024-03-26T14:31:18.979Z",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

#### Code

```ruby
seam.acs.credentials.list_accessible_entrances(
  acs_credential_id: "66666666-6666-6666-6666-666666666666",
)
```

#### Output

```ruby
[
  {
    "acs_entrance_id" => "55555555-5555-5555-5555-555555555555",
    "acs_system_id" => "11111111-1111-1111-1111-111111111111",
    "workspace_id" => "00000000-0000-0000-0000-000000000000",
    "visionline_metadata" => {
      profiles: [{ visionline_door_profile_id: "Guest Door", visionline_door_profile_type: "BLE" }],
      door_name: "Guest Lock 2",
      door_category: "guest",
    },
    "latch_metadata" => nil,
    "display_name" => "Guest Lock 2",
    "created_at" => "2024-03-26T14:31:18.979Z",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

#### Code

```php
<?php
$seam->acs->credentials->list_accessible_entrances(
    acs_credential_id: "66666666-6666-6666-6666-666666666666"
);
```

#### Output

```php
<?php
[
    [
        "acs_entrance_id" => "55555555-5555-5555-5555-555555555555",
        "acs_system_id" => "11111111-1111-1111-1111-111111111111",
        "workspace_id" => "00000000-0000-0000-0000-000000000000",
        "visionline_metadata" => [
            "profiles" => [
                [
                    "visionline_door_profile_id" => "Guest Door",
                    "visionline_door_profile_type" => "BLE",
                ],
            ],
            "door_name" => "Guest Lock 2",
            "door_category" => "guest",
        ],
        "latch_metadata" => null,
        "display_name" => "Guest Lock 2",
        "created_at" => "2024-03-26T14:31:18.979Z",
    ],
];
```
{% endtab %}

{% tab title="Go" %}

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

#### Code

```go
package main

import api "github.com/seamapi/go"
import credentials "github.com/seamapi/go/credentials"

func main() {
	client.Acs.Credentials.ListAccessibleEntrances(
		context.Background(),
		credentials.CredentialsListAccessibleEntrancesRequest{
			AcsCredentialId: api.String("66666666-6666-6666-6666-666666666666"),
		},
	)
}
```

#### Output

```go
[]api.AcsEntrance{api.AcsEntrance{AcsEntranceId: "55555555-5555-5555-5555-555555555555", AcsSystemId: "11111111-1111-1111-1111-111111111111", WorkspaceId: "00000000-0000-0000-0000-000000000000", VisionlineMetadata: api.AcsEntranceVisionlineMetadata{Profiles: []AcsEntranceVisionlineMetadataProfiles{api.AcsEntranceVisionlineMetadataProfilesProfiles{VisionlineDoorProfileId: "Guest Door", VisionlineDoorProfileType: "BLE"}}, DoorName: "Guest Lock 2", DoorCategory: "guest"}, LatchMetadata: nil, DisplayName: "Guest Lock 2", CreatedAt: "2024-03-26T14:31:18.979Z"}}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the `acs_credential_id` for which you want to retrieve all entrances to which the credential grants access.

#### Code

```seam_cli
seam acs credentials list-accessible-entrances --acs_credential_id "66666666-6666-6666-6666-666666666666"
```

#### Output

```seam_cli
[
  {
    "acs_entrance_id": "55555555-5555-5555-5555-555555555555",
    "acs_system_id": "11111111-1111-1111-1111-111111111111",
    "workspace_id": "00000000-0000-0000-0000-000000000000",
    "visionline_metadata": {
      "profiles": [
        {
          "visionline_door_profile_id": "Guest Door",
          "visionline_door_profile_type": "BLE"
        }
      ],
      "door_name": "Guest Lock 2",
      "door_category": "guest"
    },
    "latch_metadata": null,
    "display_name": "Guest Lock 2",
    "created_at": "2024-03-26T14:31:18.979Z"
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

**`acs_credential_id`** *String* (Required)

ID of the credential for which you want to retrieve all entrances to which the credential grants access.

---


## Response

Array of [acs\_entrances](./)


---

## Examples

