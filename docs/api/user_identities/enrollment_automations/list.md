# List Enrollment Automations

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Returns a list of all [enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `user_identity_id`.

#### Code

```javascript
await seam.userIdentities.enrollmentAutomations.list({
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
});
```

#### Output

```javascript
[
  {
    "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "is_running": true,
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-09T05:45:33.068Z"
  }
]
```
{% endtab %}

{% tab title="cURL" %}

Specify the desired `user_identity_id`.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/enrollment_automations/list" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
}
EOF
```

#### Output

```curl
{
  "enrollment_automations": [
    {
      "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
      "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
      "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
      "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
      "is_running": true,
      "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
      "created_at": "2024-01-09T05:45:33.068Z"
    }
  ]
}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `user_identity_id`.

#### Code

```python
seam.user_identities.enrollment_automations.list(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f"
)
```

#### Output

```python
[
    EnrollmentAutomation(
        user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f",
        enrollment_automation_id="05505650-aa57-49ab-8f19-429738758895",
        acs_credential_provisioning_automation_id="05505650-aa57-49ab-8f19-429738758895",
        credential_manager_acs_system_id="6737e186-8d54-48ce-a7da-a0be4d252172",
        is_running=true,
        workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        created_at="2024-01-09T05:45:33.068Z",
    )
]
```
{% endtab %}

{% tab title="Ruby" %}

Specify the desired `user_identity_id`.

#### Code

```ruby
seam.user_identities.enrollment_automations.list(
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
)
```

#### Output

```ruby
[
  {
    "user_identity_id" => "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    "enrollment_automation_id" => "05505650-aa57-49ab-8f19-429738758895",
    "acs_credential_provisioning_automation_id" => "05505650-aa57-49ab-8f19-429738758895",
    "credential_manager_acs_system_id" => "6737e186-8d54-48ce-a7da-a0be4d252172",
    "is_running" => true,
    "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at" => "2024-01-09T05:45:33.068Z",
  },
]
```
{% endtab %}

{% tab title="PHP" %}

Specify the desired `user_identity_id`.

#### Code

```php
<?php
$seam->user_identities->enrollment_automations->list(
    user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
);
```

#### Output

```php
<?php
[
    [
        "user_identity_id" => "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
        "enrollment_automation_id" => "05505650-aa57-49ab-8f19-429738758895",
        "acs_credential_provisioning_automation_id" =>
            "05505650-aa57-49ab-8f19-429738758895",
        "credential_manager_acs_system_id" =>
            "6737e186-8d54-48ce-a7da-a0be4d252172",
        "is_running" => true,
        "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
        "created_at" => "2024-01-09T05:45:33.068Z",
    ],
];
```
{% endtab %}

{% tab title="Go" %}

Specify the desired `user_identity_id`.

#### Code

```go
package main

import api "github.com/seamapi/go"
import enrollmentautomations "github.com/seamapi/go/enrollmentautomations"

func main() {
	client.UserIdentities.EnrollmentAutomations.List(
		context.Background(),
		enrollmentautomations.EnrollmentAutomationsListRequest{
			UserIdentityId: api.String("5c945ab5-c75e-4bcb-8e5f-9410061c401f"),
		},
	)
}
```

#### Output

```go
[]api.EnrollmentAutomation{api.EnrollmentAutomation{UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f", EnrollmentAutomationId: "05505650-aa57-49ab-8f19-429738758895", AcsCredentialProvisioningAutomationId: "05505650-aa57-49ab-8f19-429738758895", CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172", IsRunning: true, WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-09T05:45:33.068Z"}}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the desired `user_identity_id`.

#### Code

```seam_cli
seam user-identities enrollment-automations list --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
```

#### Output

```seam_cli
[
  {
    "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "is_running": true,
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-09T05:45:33.068Z"
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

**`user_identity_id`** *String* (Required)

````
ID of the user identity for which you want to retrieve enrollment automations.
````

---


## Response

Array of [enrollment\_automations](./)


---

## Examples

