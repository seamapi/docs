# Delete an Enrollment Automation

- [Request Parameters](#request-parameters)
- [Response](#response)

Deletes a specified [enrollment automation](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system). You must delete all enrollment automations associated with a [user identity](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities#what-is-a-user-identity) before [deleting the user identity](https://docs.seam.co/latest/api/user_identities/delete).


{% tabs %}
{% tab title="JavaScript" %}

Specify the desired `enrollment_automation_id`.

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

{% tab title="cURL" %}

Specify the desired `enrollment_automation_id`.

#### Code

```curl
curl --include --request POST "https://connect.getseam.com/user_identities/enrollment_automations/delete" \
  --header "Authorization: Bearer $SEAM_API_KEY" \
  --json @- <<EOF
{
  "enrollment_automation_id": "05505650-aa57-49ab-8f19-429738758895"
}
EOF
```

#### Output

```curl
{}
```
{% endtab %}

{% tab title="Python" %}

Specify the desired `enrollment_automation_id`.

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

Specify the desired `enrollment_automation_id`.

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

Specify the desired `enrollment_automation_id`.

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

{% tab title="Go" %}

Specify the desired `enrollment_automation_id`.

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

{% tab title="Seam CLI" %}

Specify the desired `enrollment_automation_id`.

#### Code

```seam_cli
seam user-identities enrollment-automations delete --enrollment_automation_id "05505650-aa57-49ab-8f19-429738758895"
```

#### Output

```seam_cli
{}
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

**`enrollment_automation_id`** *String* (Required)

ID of the enrollment automation that you want to delete.

---


## Response

void

