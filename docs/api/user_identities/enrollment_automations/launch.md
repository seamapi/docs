# Launch an Enrollment Automation

- [Request Parameters](./#request-parameters)
- [Response](./#response)
- [Examples](./#examples)

Sets up a new [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system) for a specified [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) with a specified [credential manager](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `user_identity_id` and `credential_manager_acs_system_id`. You can also specify an `acs_credential_pool_id`. Either set `create_credential_manager_user` to `true` or specify the `credential_manager_acs_user_id`.

#### Code

```javascript
await seam.userIdentities.enrollmentAutomations.launch({
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
  acs_credential_pool_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  create_credential_manager_user: true,
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

{% tab title="cURL" %}

Specify the desired `user_identity_id` and `credential_manager_acs_system_id`. You can also specify an `acs_credential_pool_id`. Either set `create_credential_manager_user` to `true` or specify the `credential_manager_acs_user_id`.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/enrollment_automations/launch" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
  "acs_credential_pool_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "create_credential_manager_user": true
}
EOF
```

#### Output

```curl
{
  "enrollment_automation": {
    "user_identity_id": "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "acs_credential_provisioning_automation_id": "05505650-aa57-49ab-8f19-429738758895",
    "credential_manager_acs_system_id": "6737e186-8d54-48ce-a7da-a0be4d252172",
    "is_running": true,
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "created_at": "2024-01-09T05:45:33.068Z"
  }
}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `user_identity_id` and `credential_manager_acs_system_id`. You can also specify an `acs_credential_pool_id`. Either set `create_credential_manager_user` to `true` or specify the `credential_manager_acs_user_id`.

#### Code

```python
seam.user_identities.enrollment_automations.launch(
    user_identity_id="5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    credential_manager_acs_system_id="6737e186-8d54-48ce-a7da-a0be4d252172",
    acs_credential_pool_id="3fa85f64-5717-4562-b3fc-2c963f66afa6",
    create_credential_manager_user=true,
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

Specify the desired `user_identity_id` and `credential_manager_acs_system_id`. You can also specify an `acs_credential_pool_id`. Either set `create_credential_manager_user` to `true` or specify the `credential_manager_acs_user_id`.

#### Code

```ruby
seam.user_identities.enrollment_automations.launch(
  user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
  credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
  acs_credential_pool_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  create_credential_manager_user: true,
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

Specify the desired `user_identity_id` and `credential_manager_acs_system_id`. You can also specify an `acs_credential_pool_id`. Either set `create_credential_manager_user` to `true` or specify the `credential_manager_acs_user_id`.

#### Code

```php
<?php
$seam->user_identities->enrollment_automations->launch(
    user_identity_id: "5c945ab5-c75e-4bcb-8e5f-9410061c401f",
    credential_manager_acs_system_id: "6737e186-8d54-48ce-a7da-a0be4d252172",
    acs_credential_pool_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    create_credential_manager_user: true
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

{% tab title="Go" %}

Specify the desired `user_identity_id` and `credential_manager_acs_system_id`. You can also specify an `acs_credential_pool_id`. Either set `create_credential_manager_user` to `true` or specify the `credential_manager_acs_user_id`.

#### Code

```go
package main

import api "github.com/seamapi/go"
import enrollmentautomations "github.com/seamapi/go/enrollmentautomations"

func main() {
	client.UserIdentities.EnrollmentAutomations.Launch(
		context.Background(),
		enrollmentautomations.EnrollmentAutomationsLaunchRequest{
			UserIdentityId:               api.String("5c945ab5-c75e-4bcb-8e5f-9410061c401f"),
			CredentialManagerAcsSystemId: api.String("6737e186-8d54-48ce-a7da-a0be4d252172"),
			AcsCredentialPoolId:          api.String("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
			CreateCredentialManagerUser:  api.Bool(true),
		},
	)
}
```

#### Output

```go
api.EnrollmentAutomation{UserIdentityId: "5c945ab5-c75e-4bcb-8e5f-9410061c401f", EnrollmentAutomationId: "05505650-aa57-49ab-8f19-429738758895", AcsCredentialProvisioningAutomationId: "05505650-aa57-49ab-8f19-429738758895", CredentialManagerAcsSystemId: "6737e186-8d54-48ce-a7da-a0be4d252172", IsRunning: true, WorkspaceId: "398d80b7-3f96-47c2-b85a-6f8ba21d07be", CreatedAt: "2024-01-09T05:45:33.068Z"}
```
{% endtab %}

{% tab title="Seam CLI" %}

Specify the desired `user_identity_id` and `credential_manager_acs_system_id`. You can also specify an `acs_credential_pool_id`. Either set `create_credential_manager_user` to `true` or specify the `credential_manager_acs_user_id`.

#### Code

```seam_cli
seam user-identities enrollment-automations launch --user_identity_id "5c945ab5-c75e-4bcb-8e5f-9410061c401f" --credential_manager_acs_system_id "6737e186-8d54-48ce-a7da-a0be4d252172" --acs_credential_pool_id "3fa85f64-5717-4562-b3fc-2c963f66afa6" --create_credential_manager_user true
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

{% endtabs %}


<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.

To learn more, see [Authentication](https://docs.seam.co/latest/api/authentication).
</details>

## Request Parameters

**`credential_manager_acs_system_id`** *String* (Required)

````
ID of the desired access system that serves as the credential manager for the enrollment automation.
````

---

**`user_identity_id`** *String* (Required)

````
ID of the user identity for which you want to launch an enrollment automation.
````

---

**`acs_credential_pool_id`** *String*

````
ID of the credential pool from which to obtain credentials for the user identity.
````

---

**`create_credential_manager_user`** *Boolean*

````
Indicates whether to create an associated credential manager user. If you set `create_credential_manager_user` to `true`, you cannot specify a `credential_manager_acs_user_id`.
````

---

**`credential_manager_acs_user_id`** *String*

````
ID of the associated access system user within the credential manager. If you specify a `credential_manager_acs_user_id`, you cannot set `create_credential_manager_user` to `true`.
````

---


## Response

[enrollment\_automation](./)


---

## Examples

