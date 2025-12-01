# Sandbox Assa Abloy Vostio Access Control System

Use the following set of credentials to add virtual Assa Abloy Vingcard Vostio locks to your Seam [sandbox workspace](../../core-concepts/workspaces/#sandbox-workspaces):

{% hint style="info" %}
To use the virtual Visionline Access Control System (ACS) to issue mobile keys in a sandbox workspace, you must also connect the [virtual ASSA ABLOY Credential Services](../../device-guides/sandbox-and-sample-data/assa-abloy-credential-service-sample-data.md).
{% endhint %}

## Vostio Credentials

| Field        | Value                                                                    |
| ------------ | ------------------------------------------------------------------------ |
| System Name  | Any string to identify this Vostio ACS site, for example, My Vostio Site |
| Username     | `jane`                                                                   |
| Password     | `1234`                                                                   |
| Client ID    | `1234`                                                                   |
| User Pool ID | `1234`                                                                   |

## Mobile Key Information

If you plan to create mobile keys, select the **Mobile Keys will be issued in this system** field and specify the following information:

| Field     | Value |
| --------- | ----- |
| BLE UUID  | 1     |
| System ID | 1     |
