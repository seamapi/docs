# Credential Types

In the ASSA ABLOY Visionline Access Management System, the locks are standalone and battery-powered. All access permissions and scheduling details are contained within the key card and mobile credentials, characterizing these systems as "data-on-card" systems. This guide describes the various credential types available in Visionline and provides instructions for how to create them.

## Credential Properties

Visionline supports the following credential properties:

### Allowed Entrance IDs

Use the List Entrance endpoint to retrieve the available entrances at the site. Include the IDs of the entrances to which you want to grant access.

### Card Formats

Visionline supports the following card formats:

**`rfid48`:** Low-capacity Radio Frequency Identification (RFID) card (48 bytes). This card format is used for all guest card types except for guest advanced cards.

**`TLCode`:** High-capacity RFID card. This card format is used for card types needing more than 48 bytes, for example, guest advanced cards and most card types for staff.

### Override

This property is only available when issuing guest or mobile credentials. If you set this property to `true`, issuing this credential renders invalid all previously-issued credentials on the same entrances.

### Auto-join

This property is only available when issuing guest or mobile credentials. If you set this property to `true`, the issued credential and any other valid guest credentials for the same entrances all grant access.

### Starts At/Ends At

Use these properties to set the start and end times for the credential.

### Credential Property Reference

The following table summarizes the Visionline credential properties:

<table><thead><tr><th width="260">Property</th><th width="176">Type</th><th width="290">Description</th></tr></thead><tbody><tr><td><code>allowed_entrance_ids</code></td><td><code>String[]</code><br><em>Required</em></td><td>List of IDs of the entrances that this credential can access</td></tr><tr><td><code>card_format</code></td><td><code>Enum</code><br><em>Required</em></td><td>Card format of the credential<br>Values: <code>rfid48</code> | <code>TLCode</code></td></tr><tr><td><code>override</code></td><td><code>Boolean</code><br><em>Optional</em></td><td>Indicates whether this credential invalidates any previously-issued credentials for overlapping entrances</td></tr><tr><td><code>auto_join</code></td><td><code>Boolean</code><br><em>Optional</em></td><td>Indicates whether this credential can grant access to entrances, along with any other valid guest credentials to the same entrances</td></tr><tr><td><code>starts_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br><em>Optional</em></td><td>Start date and time stamp for credential activation</td></tr><tr><td><code>ends_at</code></td><td><a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format<br>Required</td><td>End date and time stamp for credential activation</td></tr></tbody></table>
