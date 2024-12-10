# List Enrollment Automations

```
POST /user_identities/enrollment_automations/list ⇒ { enrollment_automations: [enrollment_automation, …] }
```

Returns a list of all [enrollment automations](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.enrollmentAutomations.list({
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
});
```

#### Response

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

{% tab title="Python" %}
#### Request

```python
seam.user_identities.enrollment_automations.list(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f"
)
```

#### Response

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
#### Request

```ruby
seam.user_identities.enrollment_automations.list(user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f")
```

#### Response

```ruby
[{"user_identity_id" => "5c945ab5-c75e-4bcb-8e5f-9410061c401f", "enrollment_automation_id" => "05505650-aa57-49ab-8f19-429738758895", "acs_credential_provisioning_automation_id" => "05505650-aa57-49ab-8f19-429738758895", "credential_manager_acs_system_id" => "6737e186-8d54-48ce-a7da-a0be4d252172", "is_running" => true, "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be", "created_at" => "2024-01-09T05:45:33.068Z"}]
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->user_identities->enrollment_automations->list(
    user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
);
```

#### Response

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

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam user-identities enrollment-automations list --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f"
```

#### Response

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

{% tab title="Go" %}
#### Request

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

#### Response

```go
[]api.EnrollmentAutomation{api.EnrollmentAutomation{UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f", EnrollmentAutomationId: "05505650-aa57-49ab-8f19-429738758895", AcsCredentialProvisioningAutomationId: "05505650-aa57-49ab-8f19-429738758895", CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172", IsRunning: true, WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-09T05:45:33.068Z"}}
```
{% endtab %}

{% endtabs %}

## Authentication

This endpoint supports the following authentication methods:

<table>
  <tbody>
    <tr>
      <td>Client Session Token</td>
    </tr>
    <tr>
      <td>Personal Access Token</td>
    </tr>
    <tr>
      <td>Console Session Token</td>
    </tr>
    <tr>
      <td>API Key</td>
    </tr>
  </tbody>
</table>

## Request Parameters

### `user_identity_id`

Type: `string`
Required: Yes

ID of the user identity for which you want to retrieve all enrollment automations.

***

## Return Type

Array<[enrollment\_automation](./)>
