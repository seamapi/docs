---
description: >-
  Learn about credential properties that you should use when creating mobile
  credentials.
---

# Mobile Credential-Related Properties

When issuing a guest mobile credential, you can use the following relevant properties:

## `acs_credential` Properties

These properties are applicable to [guest](credential-types/#issuing-guest-mobile-credentials) credentials for the Visionline ACS.

<table><thead><tr><th width="260">Property</th><th width="116">Type</th><th width="290">Description</th></tr></thead><tbody><tr><td><code>is_multi_phone_sync_credential</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the credential is a <a href="../../capability-guides/mobile-access/issuing-mobile-credentials-from-an-access-control-system.md#what-are-multi-phone-sync-credentials">multi-phone sync credential</a>.<br>When creating a Seam mobile key for a Visionline ACS, you must set this property to <code>true</code>.</td></tr><tr><td><code>allowed_acs_entrance_ids</code></td><td>Array of strings <em>Optional</em></td><td>List of ACS entrance IDs to which you want to grant the specified ACS user access. </td></tr><tr><td><code>starts_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br><em>Optional</em></td><td>Starting timestamp for credential activation.</td></tr><tr><td><code>ends_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br><em>Optional</em></td><td>Ending timestamp for credential expiration.</td></tr></tbody></table>

***

## `acs_credential.visionline_metadata` Properties

Use the `credential.visionline_metadata` object to include brand-specific data for your Visionline credentials.

<table><thead><tr><th width="260">Property</th><th width="116">Type</th><th width="290">Description</th></tr></thead><tbody><tr><td><code>card_function_type</code></td><td>Enum<br><em>Optional</em></td><td><code>guest</code></td></tr><tr><td><code>cardFormat</code></td><td>Enum<br><em>Required</em></td><td><p><code>rfid48</code> | <code>TLCode</code></p><ul><li><code>rfid48</code>: A low-capacity card. It can store up to 33 consecutive guest rooms, 28 common rooms, and 7 additional rooms.</li><li><code>TLCode</code>: A high capacity RFID card (for card types needing more than 48 bytes).</li></ul><p>For guest cards, generally use <code>rfid48</code>.</p><p>For guest advanced cards, which need a higher capacity format, use <code>TLCode</code>.</p></td></tr><tr><td><code>label</code></td><td>String<br><em>Optional</em></td><td>"Label" field data for mobile credentials. This field may contain plain text, as well as predefined placeholders. The placeholders are surrounded by percent signs (<code>%</code>).<br>See <a href="mobile-credential-related-properties.md#label-placeholders">Label Placeholders</a>.</td></tr><tr><td><code>override</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether this guest credential invalidates any previously-issued credentials for overlapping entrances.<br>Applicable only to guest credentials.</td></tr><tr><td><code>joiner_acs_credential_ids</code></td><td>Array of strings <em>Optional</em></td><td>List of credential IDs with which the current guest credential shares entrance access. When <code>override_previous_credentials</code> is <code>false</code>, <code>joiner_acs_credential_ids</code> becomes a mandatory field.<br>Applicable only to guest credentials.</td></tr><tr><td><code>assa_abloy_credential_service_mobile_endpoint_id</code></td><td>String<br><em>Optional</em></td><td>ID of the ASSA ABLOY Credential Service mobile endpoint associated with the credential.</td></tr><tr><td><code>is_valid</code></td><td>Boolean<br><em>Optional</em></td><td>Indicates whether the credential is currently valid.</td></tr></tbody></table>

***

## Label Placeholders

The `label` field provides "label" field data for mobile credentials. This field may contain plain text, as well as predefined placeholders. The placeholders are surrounded by percent signs (`%`). Visionline replaces these placeholders with the actual values before issuing mobile keys. The final text is truncated to 32 characters. The valid placeholders are as follows:

* `%ROOMNUM%`: Replaced with main guest room number or name.
* `%ROOMLIST%`: Replaced with comma-separated list of guest rooms.
* `%ROOMRANGE%`: Replaced with hyphen-separated room range. Alternately, if some rooms do not fit into any range, then they are added as a comma-separated list.
* `%SITENAME%`: Name of the property.
* `%CARDNUM%`: Credential ID.
* `%UUID%`: BLE UUID.
* `%USERID%`: Value passed in the UI field.