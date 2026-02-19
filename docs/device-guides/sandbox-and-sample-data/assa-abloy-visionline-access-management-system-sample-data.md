# Sandbox Assa Abloy Visionline Access Control System

Use the following set of credentials to add virtual [ASSA ABLOY Visionline Access Control System](../../device-and-system-integration-guides/assa-abloy-visionline-access-control-system/)-connected devices to your Seam [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces):

{% hint style="info" %}
To use the virtual Vostio Access System to issue mobile keys in a sandbox workspace, you must also connect a [virtual ASSA ABLOY Credential Services](assa-abloy-credential-service-sample-data.md).
{% endhint %}

## Sandbox Seam Bridge Connection Credentials

| Pairing Token |
| ------------- |
| prefilled     |

## Visionline Credentials

<table><thead><tr><th width="328">Visionline Site Name</th><th width="282">Username</th><th width="162">Password</th></tr></thead><tbody><tr><td>Any string to identify this Visionline ACS site, for example, My Visionline Site</td><td>jane</td><td>1234</td></tr></tbody></table>

## Mobile Key Information

If you plan to create mobile keys, select the **Mobile Keys will be issued in this system** field and specify the following information:

| Mobile Access UUID | System ID |
| ------------------ | --------- |
| 1                  | 1         |

## Seam Bridge Connection Information

Normally, leave the **Seam Bridge and Visionline server are installed on different computers** field unchecked.\
If you choose to select this field, type `https://192.168.1.100` in the **LAN URL of the Visionline server** field.
