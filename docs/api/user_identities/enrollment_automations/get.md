# Get an Enrollment Automation

```
POST /user_identities/enrollment_automations/get ⇒ { enrollment_automation }
```

Returns a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.enrollmentAutomations.get({
  enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895",
});
```

#### Output

```javascript
{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
  "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
  "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
  "is_running": true,
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at": "2024-01-09T05:45:33.068Z"
}
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.user_identities.enrollment_automations.get(
    enrollment_automation_id="05505650-aa57-49ab-8f19-429738758895"
)
```

#### Output

```python
EnrollmentAutomation(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    enrollment_automation_id="05505650-aa57-49ab-8f19-429738758895",
    acs_credential_provisioning_automation_id="05505650-aa57-49ab-8f19-429738758895",
    credential_manager_acs_system_id="6737e186-8d54-48ce-a7da-a0be4d252172",
    is_running=true,
    workspace_id="398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    created_at="2024-01-09T05:45:33.068Z",
)
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.user_identities.enrollment_automations.get(
  enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895",
)
```

#### Output

```ruby
{
  "user_identity_id" => "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "enrollment_automation_id" => "05505650-aa57-49ab-8f19-429738758895",
  "acs_credential_provisioning_automation_id" => "05505650-aa57-49ab-8f19-429738758895",
  "credential_manager_acs_system_id" => "6737e186-8d54-48ce-a7da-a0be4d252172",
  "is_running" => true,
  "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at" => "2024-01-09T05:45:33.068Z",
}
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->user_identities->enrollment_automations->get(
    enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895"
);
```

#### Output

```php
<?php
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
];
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam user-identities enrollment-automations get --enrollment_automation_id "05505650-aa57-49ab-8f19-429738758895"
```

#### Output

```seam_cli
{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
  "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
  "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
  "is_running": true,
  "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
  "created_at": "2024-01-09T05:45:33.068Z"
}
```
{% endtab %}

{% tab title="Go" %}
#### Code

```go
package main

import api "github.com/seamapi/go"
import enrollmentautomations "github.com/seamapi/go/enrollmentautomations"

func main() {
	client.UserIdentities.EnrollmentAutomations.Get(
		context.Background(),
		enrollmentautomations.EnrollmentAutomationsGetRequest{
			EnrollmentAutomationId: api.String("05505650-aa57-49ab-8f19-429738758895"),
		},
	)
}
```

#### Output

```go
api.EnrollmentAutomation{UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f", EnrollmentAutomationId: "05505650-aa57-49ab-8f19-429738758895", AcsCredentialProvisioningAutomationId: "05505650-aa57-49ab-8f19-429738758895", CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172", IsRunning: true, WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-09T05:45:33.068Z"}
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Client session token
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

---

## Request Parameters

### `enrollment_automation_id`

Type: `string`
Required: Yes

ID of the desired enrollment automation.

---


---

## Return Type

[enrollment\_automation](./)
