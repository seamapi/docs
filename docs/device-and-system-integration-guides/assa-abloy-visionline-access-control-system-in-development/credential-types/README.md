---
description: Learn how to configure Visionline mobile credentials.
---

# Configuring Visionline Mobile Credentials

In the ASSA ABLOY Visionline Access Management System, locks are standalone and battery-powered. All access permissions and scheduling details are contained within the key cards and mobile credentials, characterizing these systems as "data-on-card" systems.

This guide describes how to issue guest and staff mobile credentials on the Visionline ACS.

## Access Permission Assignment for Visionline

Visionline is a [credential-based access control system](../../../capability-guides/access-systems/understanding-access-control-system-differences.md#credential-based-access-control-systems). That is, you create ACS users and credentials. Within these credentials, you specify the set of entrances to which you want to grant access and the schedules for this access.

<figure><img src="../../../.gitbook/assets/acs-arch-credential-based.png" alt="Seam resource relationships for a credential-based ACS"><figcaption><p>Seam resource relationships for a credential-based ACS</p></figcaption></figure>

### Credential Types for Visionline

When creating credentials, you can configure [guest](./#issuing-guest-mobile-credentials) mobile credentials for a Visionline ACS. Guest credentials are further subdivided into [override](./#issue-the-first-credential-for-a-reservation) and [joiner](./#issue-subsequent-credentials-for-a-reservation) credentials. An override credential serves as the first access grant for a reservation and revokes all previous guest access to the included guest room entrances. When a reservation includes multiple guests who need access, all subsequent access grants for the same reservation are joiner credentials. This type of credential provides shared access that matches the grants of existing credentials. For more details, see the following sections:

* [Guest Mobile Credential Types](./#guest-mobile-credential-types)
* [Issue the First Credential for a Reservation](./#issue-the-first-credential-for-a-reservation)
* [Issue Subsequent Credentials for a Reservation](./#issue-subsequent-credentials-for-a-reservation)

{% hint style="info" %}
Seam currently only supports issuing guest mobile credentials. We will extend support to plastic cards in the future.
{% endhint %}

### Access Grant Process for Visionline

Use the following basic process to grant access in a Visionline ACS:

1. Set up the mobile user account by creating a [user identity](../../../products/mobile-access-in-development/managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity).
2. Turn on the [enrollment automation](../../../products/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system.md) for this user identity and credential manager.
3. Associate the user identity with an [ACS user](../../../products/access-systems/#what-is-a-user).
4. Gather the entrances to which the credential should have access.
5. Create the [guest](./#issuing-guest-mobile-credentials) mobile credential.

***

## Issuing Guest Mobile Credentials

To issue a guest mobile credential for the Visionline ACS, create a credential with `visionline_metadata.card_function_type` set to `guest`. Also, for a guest credential, you normally set `visionline_metadata.card_format` to `rfid48`, unless the guest needs a higher-capacity `TLCode` card. For more information about Visionline metadata, see [`acs_credential.visionline_metadata` Properties](../mobile-credential-related-properties.md#acs\_credential.visionline\_metadata-properties).

### Guest Mobile Credential Types

Guest mobile credentials consist of two credential types: override credentials and joiner credentials.

When issuing the [first guest credential for a reservation](./#issue-the-first-credential-for-a-reservation), a hotel needs to guarantee that all previous access to the guest room entrance is revoked. To revoke all other access, you create an override credential that invalidates all previous access to the guest room entrance. That is, an override credential overrides any existing credentials that previously granted access to the same guest room entrance.

Reservations may involve multiple parties. In these situations, hotels often need to provide credentials for the same guest room entrances to additional guests. To do so, [issue "joiner credentials."](./#issue-subsequent-credentials-for-a-reservation) This type of credential allows shared access with any existing credentials that already grant entry to the same guest room entrances.

***

### Issue the First Credential for a Reservation

To issue the first guest credential for a reservation, create an override credential. This credential type invalidates any existing guest access to the target entrances. When creating an override credential, set `visionline_metadata.override` to `true`.

{% hint style="info" %}
You can also [verify whether a user identity has a phone that is set up for a credential manager](checking-if-a-user-identity-has-a-phone-that-is-set-up-for-a-credential-manager.md) and, consequently, is ready to accept an override guest credential.
{% endhint %}

{% tabs %}
{% tab title="Python" %}
```python
# Set up the mobile user account.
user_identity = seam.user_identities.create(
    user_identity_key="xxx"
)

# Turn on the enrollment automation for this user identity
# and credential manager.
seam.enrollment_automation.launch(
    credential_manager_acs_system_id=assa_credential_services.acs_system_id,
    user_identity_id=guest_user_identity.user_identity_id,
    create_credential_manager_user=True
)

# Associate the user identity with the ACS user.
acs_user = seam.acs.users.get(
    email="jane@example.com"
)
seam.user_identities.add_acs_user(
    user_identity=user_identity.user_identity_id,
    acs_user_id=acs_user.acs_user_id
)

# Gather entrances to which the credential should have access.
room_entrance = seam.acs.entrances.get(name=f"Room {room_number}")
common_door = seam.acs.entrances.get(name=f"Main Entrance")

# Check whether the user identity has an active endpoint on their phones.
# To learn how to verify this condition, see "Check if a user identity has 
# a phone that is set up for a credential manager."
if has_active_endpoint(user_identity.user_identity_id):
  # Create the override mobile credential.
  cred = seam.acs.credentials.create(
    acs_user_id="xxx",
    credential_manager_acs_system_id="xx"
    is_multi_phone_sync_credential=True,
    access_method="mobile_key",
    starts_at="2023-01-01 10:40:00.000",
    ends_at="2023-01-04 10:40:00.000"
    allowed_acs_entrance_ids=[
      room_entrance.acs_entrance_id,
      common_door.acs_entrance_id
    ],
    visionline_metadata={
      "cardFormat": "rfid48",
      "label": "%ROOMNUM% - %SITENAME%",
      "is_override_key": True
    }
)
```
{% endtab %}
{% endtabs %}

***

### Issue Subsequent Credentials for a Reservation

Once you have created an override mobile credential as the first credential for a reservation, you can issue mobile credentials to additional guests on the same reservation. To do so, issue "joiner credentials." This type of credential allows shared access with any existing credentials that already grant entry to the same guest room entrances. Note that you can create joiner mobile credentials that provide access to guest room entrances, common entrances, or both.

For example:

* You already created an override mobile credential to grant a guest access to hotel rooms 101 and 102. Now, you create a joiner mobile credential that grants a different guest on the same reservation access to the same two hotel rooms.
* You already created an override mobile credential to grant a guest access to hotel rooms 101 and 102. Now, you create a joiner mobile credential that grants a different guest on the same reservation access to hotel room 101 only.

To issue a joiner credential, you must specify both the entrances to which to grant access and the credentials with which to associate the new joiner credential. Use the following properties:

* `allowed_acs_entrance_ids`
* `visionline_metadata.joiner_acs_credential_ids`

For instructions on how to retrieve credentials that have overlapping access, see [Issuing Various Types of Guest Joiner Mobile Credentials](issuing-various-types-of-guest-joiner-mobile-credentials.md).

{% tabs %}
{% tab title="Python" %}
```python
# Set up the mobile user account.
user_identity = seam.user_identities.create(
    user_identity_key="xxx"
)

# Turn on the enrollment automation for this user identity
# and credential manager.
seam.enrollment_automation.launch(
  credential_manager_acs_system_id=assa_credential_services.acs_system_id,
  user_identity_id=guest_user_identity.user_identity_id,
  create_credential_manager_user: true
)

# Associate the user identity with the ACS user.
acs_user = seam.acs.users.get(
  email="jane@example.com"
)
seam.user_identities.add_acs_user(
  user_identity=user_identity.user_identity_id,
  acs_user_id=acs_user.acs_user_id
)

# Gather entrances to which the credential should have access.
room_entrance = seam.acs.entrances.get(name=f"Room {room_number}")
common_door = seam.acs.entrances.get(name=f"Main Entrance")

# Retrieve existing valid credentials for guest doors to add as joiners.
# Be sure to check that these credentials correspond with the correct
# reservation.
joiner1 = seam.acs.credentials.get(id="xxx")
joiner2 = seam.acs.credentials.get(id="yyy")
joiners = [joiner1, joiner2]

# Create the mobile credential.
cred = seam.acs.credentials.create({
  acs_user_id: "xxx",
  credential_manager_acs_system_id="xxs"
  is_multi_phone_sync_credential: True,
  access_method = "mobile_key",
  starts_at: "2023-01-01 10:40:00.000",
  ends_at: "2023-01-04 10:40:00.000",
  allowed_acs_entrance_ids: [
    common_door.acs_entrance_id,
    room_entrance.acs_entrance_id
  ],
  visionline_metadata: {
    "cardFormat": "rfid48",
    "label": "%ROOMNUM% - %SITENAME%",
    "joiner_acs_credential_ids": [
      joiner['acs_credential_id'] for joiner in joiners
    ]
  }
})
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Python" %}
```python
all_entrances = seam.acs.entrances.list(
  acs_system_id=acs_system.acs_system_id
)

# Filter for entrances with the common entrance category types.
common_entrance_category_types = ["common", "common (PMS)"]

def filter_entrances_by_profile_type(entrance_list, category_types):
    common_entrances = []
    for entrance in entrance_list:
        if entrance["visionline_metadata"]["door_category"] in category_types:
            common_entrances.append(entrance)
    return common_entrances

common_entrances = filter_entrances_by_profile_type(
    all_entrances,
    common_entrance_category_types
)
```
{% endtab %}
{% endtabs %}

<figure><img src="../../../.gitbook/assets/Join only.png" alt="In the Seam Console, we disable the Override option when a user identity has not set up their phone to receive Visionline credentials." width="421"><figcaption><p>In the Seam Console, we disable the Override option when a user identity has not set up their phone to receive Visionline credentials.</p></figcaption></figure>
