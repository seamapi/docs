# Delete an Enrollment Automation

Deletes a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system). You must delete all enrollment automations associated with a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) before [deleting the user identity](https://docs.seam.co/latest/api/user_identities/delete).

{% hint style="success" %}
```
POST /user_identities/enrollment_automations/delete ⇒ void
```

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>
{% endhint %}

{% tabs %}
{% tab title="JavaScript" %}
#### Code

```javascript
await seam.userIdentities.enrollmentAutomations.delete({
  enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895",
});
```

#### Output

```javascript
// void
```
{% endtab %}

{% tab title="Python" %}
#### Code

```python
seam.user_identities.enrollment_automations.delete(
    enrollment_automation_id="05505650-aa57-49ab-8f19-429738758895"
)
```

#### Output

```python
None
```
{% endtab %}

{% tab title="Ruby" %}
#### Code

```ruby
seam.user_identities.enrollment_automations.delete(
  enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895",
)
```

#### Output

```ruby
nil
```
{% endtab %}

{% tab title="PHP" %}
#### Code

```php
<?php
$seam->user_identities->enrollment_automations->delete(
    enrollment_automation_id: "05505650-aa57-49ab-8f19-429738758895"
);
```

#### Output

```php
null
```
{% endtab %}

{% tab title="Seam CLI" %}
#### Code

```seam_cli
seam user-identities enrollment-automations delete --enrollment_automation_id "05505650-aa57-49ab-8f19-429738758895"
```

#### Output

```seam_cli
{}
```
{% endtab %}

{% tab title="Go" %}
#### Code

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

#### Output

```go
nil
```
{% endtab %}

{% endtabs %}


## Request Parameters

### `enrollment_automation_id`

Type: `string`
Required: Yes

ID of the desired enrollment automation.

---


## Return Type

void
