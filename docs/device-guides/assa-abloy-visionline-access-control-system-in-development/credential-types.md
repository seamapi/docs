# Configuring Visionline Mobile Credentials

In the ASSA ABLOY Visionline Access Management System, the locks are standalone and battery-powered. All access permissions and scheduling details are contained within the key cards and mobile credentials, characterizing these systems as "data-on-card" systems. This guide describes how to issue credential on the Visionline system.

{% hint style="info" %}
Note: Seam currently only supports issuing guest mobile credentials. We will extend support to plastic card  and staff credentials in the future.
{% endhint %}

***

## Guest Mobile Credential Properties

Here are some of the properties involved in issuing a guest mobile credential:

<table><thead><tr><th width="260">Property</th><th width="176">Type</th><th width="290">Description</th></tr></thead><tbody><tr><td><code>cardFormat</code> in <code>visionline_metadata</code></td><td><code>enum</code><br><em>Required</em></td><td><p><code>rfid48</code> | <code>TLCode</code></p><p>For guest cards, generally it’ll be <code>rfid48</code>, a low-capacity card. It can store up to 33 consecutive guest rooms, 28 common rooms, and 7 additional rooms. The exception is a guest advanced card, which needs a higher capacity format.</p><p><code>TLCode</code> is a high capacity RFID card (for card types needing more than 48 bytes). These are used for staff cards and guest advanced cards.</p></td></tr><tr><td><code>is_override_key</code> in <code>visionline_metadata</code></td><td><code>Boolean</code><br><em>Optional</em></td><td>Indicates whether this credential invalidates any previously-issued credentials for overlapping entrances</td></tr><tr><td><code>joiners</code> in <code>visionline_metadata</code></td><td><code>String[]</code><br><em>Optional</em></td><td>This property is a list of credential IDs that the current credential will share entrance access with. When <code>override_previous_credentials</code> is set to <code>false</code>, <code>jointCredentialIDs</code> becomes a mandatory field.</td></tr><tr><td><code>label</code> in <code>visionline_metadata</code></td><td><code>String</code><br><em>Optional</em></td><td>This field provides “Label” field data for mobile credentials. This field may contain plain text as well as predefined placeholders. The placeholders are surrounded by percentage % sign.</td></tr><tr><td><code>starts_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br><em>Optional</em></td><td>Start date and time stamp for credential activation</td></tr><tr><td><code>ends_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br>Required</td><td>End date and time stamp for credential expiration</td></tr></tbody></table>

#### Label Placeholders

This field provides “Label” field data for mobile credentials. This field may contain plain text as well as predefined placeholders. The placeholders are surrounded by percentage `%` sign. Visionline replaces these placeholders with their actual values before issuing mobile key. The final text will be truncated to 32 characters. The valid placeholders are:

* `%ROOMNUM%` - Replaced with main guest room number or name
* `%ROOMLIST%` - Replaced with comma separated list of guest rooms
* `%ROOMRANGE%` - Replaced with hyphen separated room range or if some rooms do not fit intoany range then they are added as comma separated list.
* `%SITENAME%` - Name of the property
* `%CARDNUM%` - Credential ID
* `%UUID%` - BLE UUID
* `%USERID%` - the value passed in the UI field

***

### Issuing the first credential for a reservation

When issuing guest credentials, hotels need to guarantee that all previous access to guest room entrances is revoked. This is accomplished by issuing an override credential, which overrides any existing credentials that previously granted access to the same guest room entrances.

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python"><strong># Setting up the Mobile user account
</strong><strong>user_identity = seam.user_identities.create(
</strong><strong>    user_identity_key="xxx"
</strong><strong>)
</strong><strong>
</strong># Turn on the enrollment automation for that user identity and credential
<strong># manager.
</strong><strong>seam.enrollment_automation.launch(
</strong><strong>    credential_manager_acs_system_id=assa_credential_services.acs_system_id,
</strong><strong>    user_identity_id=guest_user_identity.user_identity_id
</strong><strong>)
</strong><strong>
</strong><strong># Associating the user identity with the ACS user
</strong><strong>acs_user = seam.acs.users.get(
</strong><strong>    email="jane@example.com"
</strong><strong>)
</strong>seam.user_identities.add_acs_user(
    user_identity=user_identity.user_identity_id,
    acs_user_id=acs_user.acs_user_id
)

# Grant ACS User access to entrances
room_entrance = seam.acs.entrances.get(name=f"Room {room_number}")
common_door = seam.acs.entrances.get(name=f"Main Entrance")
for entrance in [room_entrance, common_door]:
    seam.acs.entrances.grant_access(
      entrance_id=entrance.entrance_id,
      acs_user_id=acs_user.acs_user_id,
    )

# Creating the mobile credential
cred = seam.acs.credentials.create(
    acs_user_id="xxx",
    credential_manager_acs_system_id="xx"
    is_multi_phone_sync_credential=True,
    access_method="mobile_key",
    starts_at="2023-01-01 10:40:00.000",
    ends_at="2023-01-04 10:40:00.000"
    visionline_metadata={
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "is_override_key": True
    }
)
</code></pre>
{% endtab %}
{% endtabs %}

***

### Issuing subsequent credentials for a reservation

For reservations involving multiple parties, hotels often need to provide credentials to additional guests. This is facilitated through the issuance of a 'joiner credential'. This type of credential allows shared access with any existing credentials that already grant entry to the same guest room entrances. To issue a joiner credential, it is necessary to specify the credential(s) that the new joiner credential will be associated with. For instructions on how to retrieve credentials that have overlapping access, [refer to the below section](credential-types.md#list-all-valid-credentials-for-a-set-of-doors-to-add-as-joiners).

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python"># Setting up the Mobile user account
user_identity = seam.user_identities.create(
    user_identity_key="xxx"
)

# Turn on the enrollment automation for that user identity and credential
# manager.
seam.enrollment_automation.launch(
    credential_manager_acs_system_id=assa_credential_services.acs_system_id,
    user_identity_id=guest_user_identity.user_identity_id
)

# Associating the user identity with the ACS user
acs_user = seam.acs.users.get(
    email="jane@example.com"
)
seam.user_identities.add_acs_user(
    user_identity=user_identity.user_identity_id,
    acs_user_id=acs_user.acs_user_id
)

# Grant ACS User access to entrances
room_entrance = seam.acs.entrances.get(name=f"Room {room_number}")
common_doors = seam.acs.entrances.get(name=f"Main Entrance")
for entrance in [room_entrance, common_doors]:
    seam.acs.entrances.grant_access(
        entrance_id=entrance.entrance_id,
        acs_user_id=acs_user.acs_user_id,
    )

# Retrieve existing valid credentials for guest doors to add as joiners
# Be sure to check that these credentials correspond with the correct
# reservation.
joiner1 = seam.acs.credentials.get(id="xxx")
joiner2 = seam.acs.credentials.get(id="yyy")
joiners = [joiner1, joiner2]

# Creating the mobile credential
<strong>cred = seam.acs.credentials.create({
</strong>    acs_user_id: "xxx",
    credential_manager_acs_system_id="xxs"
    is_multi_phone_sync_credential: True,
    access_method = "mobile_key",
    starts_at: "2023-01-01 10:40:00.000",
    ends_at: "2023-01-04 10:40:00.000",
    visionline_metadata: {
        "cardFormat": "rfid48",
        "label": "%ROOMNUM% - %SITENAME%",
        "joiners": [
            joiner['visionline_metadata']['id'] for joiner in joiners
        ]
    }
})
</code></pre>
{% endtab %}
{% endtabs %}

***

## Retrieving guest and common entrances

To differentiate between guest or common entrances, you can look at the `profiles` attribute within an entrance's `visionline_metadata` property.

### Fetching Guest Entrances

Filter entrances based on the profile type `BLE`:

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python"># Retrieve all entrances from the ACS system
all_entrances = seam.acs.entrances.list(
<strong>  acs_system_id=acs_system.acs_system_id
</strong>)

# Filter for entrances with the guest entrance profile type
guest_entrance_profile_type = "BLE"

def filter_entrances_with_profile_type(door_list, profile_type):
    guest_entrances = []
    for entrance in entrance_list:
        if "profiles" in entrance["visionline_metadata"]:
            for profile in entrance["visionline_metadata"]["profiles"]:
                # check for Visionline common entrance profile
                if profile.get("type") == profile_type:
                    guest_entrances.append(entrance)
                    break
    return guest_entrances

guest_entrances = filter_entrances_by_profile_type(
    entrances,
    guest_entrance_profile_type
)
</code></pre>
{% endtab %}
{% endtabs %}

### Fetching Common Entrances

Filter entrances based on the profile type `commonDoor`:

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python">all_entrances = seam.acs.entrances.list(
  acs_system_id=acs_system.acs_system_id
)

# Filter for entrances with the common entrance profile type
<strong>common_entrance_profile_type = "commonDoor"
</strong>
def filter_entrances_by_profile_type(entrance_list, profile_type):
    common_entrances = []
    for entrance in entrance_list:
        if "profiles" in entrance["visionline_metadata"]:
            for profile in entrance["visionline_metadata"]["profiles"]:
                # check for Visionline common entrance profile
                if profile.get("type") == profile_type:
                    common_entrances.append(entrance)
                    break
    return common_entrances

common_entrances = filter_entrances_by_profile_type(
    all_entrances,
    common_entrance_profile_type
)
</code></pre>
{% endtab %}
{% endtabs %}

***

## List all valid credentials for a set of doors to add as joiners

Use the `seam.acs.entrances.list_credentials_with_access` endpoint to fetch a list of credentials. Provide the list of `entrance_id`'s, and set  `include_only_valid` to `true` to

Seam is working on surfacing entrance information on a credential level. This is a temporary workaround for retrieving valid credentials for a set of doors.

{% tabs %}
{% tab title="Python" %}
<pre class="language-python"><code class="lang-python"># Define the list of entrances to check
room_101 = seam.acs.entrances.get(
    acs_system_id=acs_system.acs_system_id,
    name="Room 101"
)
room_102 = seam.acs.entrances.get(
    acs_system_id=acs_system.acs_system_id,
    name="Room 102"
)
desired_entrance_ids = [
    room_101.entrance_id,
    room_102.entrance_id,
]

# Retrive all valid credentials for the set of entrances
<strong>seam.acs.entrances.list_credentials_with_access(
</strong><strong>    entrance_ids=desired_entrance_ids
</strong><strong>    is_valid=true
</strong><strong>)
</strong></code></pre>
{% endtab %}
{% endtabs %}

***

## Check if a user identity has a phone that is set up for a credential manager

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

# Check if any phone has an active endpoint
user_identity = seam.user_identities.get(phone_number="1234567890")
active_endpoint_exists = has_active_endpoint(user_identity.user_identity_id)
```
{% endtab %}
{% endtabs %}
