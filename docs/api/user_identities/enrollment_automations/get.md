# Get an Enrollment Automation

```
POST /user_identities/enrollment_automations/get ⇒ { enrollment_automation }
```

{% hint style="info" %}
**Authentication Methods:** `client_session_token`, `personal_access_token`, `console_session_token`, `api_key`
{% endhint %}

Returns a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.enrollmentAutomations.get({
  enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895",
});
```

#### Response

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
#### Request

```python
seam.user_identities.enrollment_automations.get(
    enrollment_automation_id="05505650-aa57-49ab-8f19-429738758895"
)
```

#### Response

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
#### Request

```ruby
seam.user_identities.enrollment_automations.get(enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895")
```

#### Response

```ruby
{"user_identity_id" => "5c945ab5-c75e-4bcb-8e5f-9410061c401f", "enrollment_automation_id" => "05505650-aa57-49ab-8f19-429738758895", "acs_credential_provisioning_automation_id" => "05505650-aa57-49ab-8f19-429738758895", "credential_manager_acs_system_id" => "6737e186-8d54-48ce-a7da-a0be4d252172", "is_running" => true, "workspace_id" => "398d80b7-3f96-47c2-b85a-6f8ba21d07be", "created_at" => "2024-01-09T05:45:33.068Z"}
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->user_identities->enrollment_automations->get(
    enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895"
);
```

#### Response

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
#### Request

```seam_cli
seam user-identities enrollment-automations get --enrollment_automation_id "05505650-aa57-49ab-8f19-429738758895"
```

#### Response

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
#### Request

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

#### Response

```go
api.EnrollmentAutomation{UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f", EnrollmentAutomationId: "05505650-aa57-49ab-8f19-429738758895", AcsCredentialProvisioningAutomationId: "05505650-aa57-49ab-8f19-429738758895", CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172", IsRunning: true, WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-09T05:45:33.068Z"}
```
{% endtab %}

{% endtabs %}

## Request Parameters

### `enrollment_automation_id`

Type: `string`
Required: Yes

ID of the desired enrollment automation.

***

## Return Type

[enrollment\_automation](./)
