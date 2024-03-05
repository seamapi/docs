# iOS Mobile Key Support \[WIP]

## Configure Seam

Before we start, make sure you've completed the steps laid out below to set up to your workspace:

*   **Connect your ACS account to Seam using a** [**Connect Webview**](../../../core-concepts/connect-webviews/)

    This step requires the login details for your ACS account. For more information, see the guide for your specific ACS brand.
* **Connect your credential manager account to Seam using a Connect Webview**\
  This step requires the login details for your credential manager account. For more information, see the corresponding guide for your credential manager type.
* **Configure any Workspace settings required**\
  Some integrations require certain workspace-wide settings to be configured. For more information, see the guide for your specific ACS brand.

***

## Install the Seam iOS SDK

### Cocoapods

### Swift Package Manager

1. Open the following menu item in Xcode:
2. **File > Add Packages...**
3. In the **Search or Enter Package URL** search box enter this URL:\
   `https://github.com/seamapi/{INSERT PACKAGE}.swift`

***

## Configure the SDK

### Create User Identity and Generate a Client Session Token

```python
user_identity = seam.user_identities.create(
    email="jane@example.com"
)

seam.enrollment_automations.launch(
    credential_manager_acs_system_id=credential_manager.acs_system_id,
    user_identity_id=user_identity.user_identity_id
)

client_session = client_session.create(
    user_identity_ids=[user_identity.user_identity_id]
)

# Use this token to launch your mobile controller
token = client_session.token
```

### Use the Client Session Token to launch the Mobile Controller

Using the Client Session Token and the providers, launch the Mobile Controller.

```swift
import SeamSDK

var seam: SeamApi?

seam = SeamApi(authToken: clientSessionToken)

# How do we initialize for a particular pro



```

### Confirm that the phone is set up and registered with the Credential Manager

Insert code for that

```
// Some code
```

\[Show an Internet Connection required error if no endpoints are configured]

***

## System Requirements

How to configure your application to ask for these permissions.

### Retrieving the whether the settings have been enabled, based on the providers

```
// Some code
```



***

## Credential&#x20;

### Retrieve Mobile Credentials

```
// Some code
```

### Unlocking an Entrance with a Credential

```
// Some code
```

#### Handling Unlock Errors

***

## Error handling

```
// Some code
```
