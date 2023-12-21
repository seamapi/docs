# Credential Types

In the Assa Abloy Visionline access control system, the locks are standalone and battery-powered. All access permissions and scheduling details are contained within the key card and mobile credentials, characterizing these systems as "Data-on-card" systems. This guide will detail the various credential types available in Visionline and provide instructions on how to create them.

## Credential Properties

### Allowed Entrance IDs

Use the List Entrance endpoint to retrieve the available entrances at this site. Include the IDs of the entrances that you would like to grant access to.

### Card Formats

**`rfid48` -** Low capacity RFID card (48 bytes; used for all guest card types except for guest advanced card)

**`TLCode`** - High capacity RFID card (for card types needing more than 48 bytes, e.g. guest advanced cards and most card types for staff)

### Override

This property is only available when issuing guest or mobile credentials. If set to `true`, issuing this credential will render all previously issued credentials on the same entrances invalid.

### Auto-join

This property is only available when issuing guest or mobile credentials. If set to `true`, the issued credential, along with any other valid guest credentials for the same entrances , will both grant access.



<table><thead><tr><th width="175">Properties</th><th width="290">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>allowed_entrance_ids</code> <mark style="color:red;">*</mark></td><td>List of IDs of the entrances accessible by this credential</td><td><code>string[]</code></td></tr><tr><td><code>card_format</code> <mark style="color:red;">*</mark></td><td>Card format of the credential</td><td><p><code>enum</code></p><p>Values: <code>rfid48</code> | <code>TLCode</code></p></td></tr><tr><td><code>override</code></td><td>If set to <code>true</code>, this credential may override any overlapping credentials that are not specified as joiners.</td><td><code>boolean</code></td></tr><tr><td><code>auto_join</code></td><td></td><td><code>boolean</code></td></tr><tr><td><code>starts_at</code></td><td>Start date and time stamp for credential activation</td><td>ISO 8601 format</td></tr><tr><td><code>ends_at</code> <mark style="color:red;">*</mark></td><td>End date and time stamp for credential activation</td><td>ISO 8601 format</td></tr></tbody></table>
