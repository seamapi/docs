---
description: >-
  Learn how to determine when your app should disable the override credential
  option for guest credentials.
---

# Checking if a User Identity Has a Phone That Is Set up for a Credential Manager

To issue an [override guest credential](./#issue-the-first-credential-for-a-reservation) to an app user, the app user must first set up their phone. If you want to disable the "override" option where it's not available, you can use the following check before allowing a user to configure an override credential:

{% tabs %}
{% tab title="Python" %}
```
def has_active_endpoint(user_identity_id):
    phones = seam.phones.list({
        owner_user_identity_id=user_identity_id
    })
    for phone in phones:
        metadata = phone.get('assa_abloy_credential_service_metadata', {})
        if metadata.get('has_active_endpoint'):
            return True
    return False

# Check if any phone has an active endpoint.
user_identity = seam.user_identities.get(phone_number="1234567890")
active_endpoint_exists = has_active_endpoint(user_identity.user_identity_id)
```
{% endtab %}
{% endtabs %}

## Example of Disabling the Override Option When It's Not Available

<figure><img src="../../../.gitbook/assets/Join only.png" alt="In the Seam Console, we disable the Override option when a user identity has not set up their phone to receive Visionline credentials. " width="421"><figcaption><p>In the Seam Console, we disable the Override option when a user identity has not set up their phone to receive Visionline credentials. </p></figcaption></figure>
