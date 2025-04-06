# Create a Credential for an ACS User

Creates a new [credential](../../../capability-guides/access-systems/managing-credentials.md) for a specified [ACS user](https://docs.seam.co/latest/capability-guides/access-systems/user-management).

{% hint style="success" %}
```
POST /acs/credentials/create ⇒ { acs_credential }
```
{% endhint %}

<details>

<summary>Authentication Methods</summary>

- API key
- Personal access token
  <br>Must also include the `seam-workspace` header in the request.
</details>

## Parameters

**`access_method`** *String* (Required)

Access method for the new credential. Supported values: `code`, `card`, `mobile_key`.

---

**`acs_user_id`** *String* (Required)

ID of the ACS user to whom the new credential belongs.

---

**`allowed_acs_entrance_ids`** *Array* *of UUIDs*

Set of IDs of the [entrances](../../../capability-guides/access-systems/retrieving-entrance-details.md) for which the new credential grants access.

---

**`assa_abloy_vostio_metadata`** *Object*

Vostio-specific metadata for the new credential.

---

**`code`** *String*

Access (PIN) code for the new credential. There may be manufacturer-specific code restrictions. For details, see the applicable [device or system integration guide](../../../device-and-system-integration-guides/overview.md).

---

**`credential_manager_acs_system_id`** *String*

ACS system ID of the credential manager for the new credential.

---

**`ends_at`** *String*

Date and time at which the validity of the new credential ends, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Must be a time in the future and after `starts_at`.

---

**`is_multi_phone_sync_credential`** *Boolean*

Indicates whether the new credential is a [multi-phone sync credential](https://docs.seam.co/latest/capability-guides/mobile-access-in-development/issuing-mobile-credentials-from-an-access-control-system#what-are-multi-phone-sync-credentials).

---

**`salto_space_metadata`** *Object*

Salto Space-specific metadata for the new credential.

---

**`starts_at`** *String*

Date and time at which the validity of the new credential starts, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

---

**`visionline_metadata`** *Object*

Visionline-specific metadata for the new credential.

---


## Return Type

[acs\_credential](./)
