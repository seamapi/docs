# Delete an Enrollment Automation

```
POST /user_identities/enrollment_automations/delete ⇒ void
```

Deletes a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system). You must delete all enrollment automations associated with a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) before [deleting the user identity](https://docs.seam.co/latest/api/user_identities/delete).

{% tabs %}
{% tab title="JavaScript" %}
#### Request

```javascript
await seam.userIdentities.enrollmentAutomations.delete({
  enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895",
});
```

#### Response

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Request

```python
seam.user_identities.enrollment_automations.delete(
    enrollment_automation_id="05505650-aa57-49ab-8f19-429738758895"
)
```

#### Response

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Request

```ruby
seam.user_identities.enrollment_automations.delete(
  enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895",
)
```

#### Response

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Request

```php
<?php
$seam->user_identities->enrollment_automations->delete(
    enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895"
);
```

#### Response

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Request

```seam_cli
seam user-identities enrollment-automations delete --enrollment_automation_id "05505650-aa57-49ab-8f19-429738758895"
```

#### Response

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Request

```go
package main

import api "github.com/seamapi/go"
import enrollmentautomations "github.com/seamapi/go/enrollmentautomations"

func main() {
	client.UserIdentities.EnrollmentAutomations.Delete(
		context.Background(),
		enrollmentautomations.EnrollmentAutomationsDeleteRequest{
			EnrollmentAutomationId: api.String("05505650-aa57-49ab-8f19-429738758895"),
		},
	)
}
```

#### Response

```go
nil
```
{% endtab %}

{% endtabs %}

## Authentication Methods

- API key
- Personal access token

## Request Parameters

### `enrollment_automation_id`

Type: `string`
Required: Yes

ID of the desired enrollment automation.

***

## Return Type

void
