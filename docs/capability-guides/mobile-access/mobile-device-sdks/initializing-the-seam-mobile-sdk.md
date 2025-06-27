# Initializing the Seam Mobile SDK

## 1. Install the Seam SDK

The Seam SDK is [available for download on request](mailto:support@seam.co) and is fully documented. See the Seam [Android](https://android.seam.vc/) and [iOS](https://ios.seam.vc/documentation/seamsdk/seam) SDK reference documentation.

{% hint style="info" %}
You must also use the Seam API to perform server-side actions. Consequently, [install a Seam server-side SDK](../../../api-overview/installation.md) in the language of your choice if you have not done so already.
{% endhint %}

{% tabs %}
{% tab title="Android Kotlin" %}
To install the Seam Android SDK:

1. Copy the Seam Android SDK `.aar` file (for example, `seam-phone-sdk-android.aar`) into the `libs` directory for your project.
2.  Add the Android Archive (AAR) name (for example, `seam-phone-sdk-android`) to the `dependencies` block of the [`app/build.gradle`](https://developer.android.com/studio/build/dependencies) file for your app.

    There may be additional dependencies required for your specific access control system. For details, see the appropriate [system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems).

{% code title="build.gradle.kts" %}
```gradle
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
    // ...

    // Add the Seam Android SDK.
    implementation(project(":seam-phone-sdk-android"))
}
```
{% endcode %}
{% endtab %}

{% tab title="iOS Swift" %}
You can install SeamSDK via CocoaPods or Swift Package Manager (SPM).  
SeamSDK supports per-lock-provider integration granularity--include only the modules you need to keep your app footprint minimal.

{% code title="Podfile" %}
```ruby
use_frameworks!
platform :ios, '15.0'

target 'YourApp' do
  # Local pod install with file path to SeamSdk.podspec
  pod 'SeamSDK', :path => 'PATH_TO_SEAM_SDK/SeamSDK.podspec'
  # Optional subspecs for specific providers:
  pod 'SeamSDK/SeamDormakabaIntegration', :path => 'PATH_TO_SEAM_SDK/SeamSDK.podspec'
  pod 'SeamSDK/SeamLatchIntegration', :path => 'PATH_TO_SEAM_SDK/SeamSDK.podspec'
end
```
{% endcode %}

{% tabs %}
{% tab title="SPM" %}
```swift
dependencies: [
    .package(path: "PATH_TO_SEAM_SDK/SeamSDK")
],
targets: [
    .target(
        name: "YourApp",
        dependencies: ["SeamSDK", "SeamSaltoIntegration"]
    )
]
```
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

***

## 2. Implement any Manufacturer- and Mobile OS-Specific Requirements

Note the following manufacturer- and OS-specific requirements:

### Manufacturer-Specific Requirements

See the [device or system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems) for the access control system or device for which you are planning to develop. Further, you may need to register for developer access with the ACS that you have chosen to use.

***

### iOS Requirement

If you are developing an iOS app, add [`requestAutomaticPassPresentationSuppression()`](https://developer.apple.com/documentation/passkit/pkpasslibrary/requestautomaticpasspresentationsuppression\(responsehandler:\)) to your app to prevent the user's phone from displaying Apple Wallet while scanning for Bluetooth low energy (BLE) or similar locks. This method suppresses Apple Wallet while your mobile app is in the foreground.

{% hint style="info" %}
The use of this method requires a special entitlement from Apple.
{% endhint %}

***

## 3. Configure a User Identity for your App User and Generate a Client Session Token

A [user identity](../managing-mobile-app-user-accounts-with-user-identities.md) enables the application to request a user's mobile access permissions and use the app to unlock doors.

First, use the Seam API or Seam Console to create a [user identity](../managing-mobile-app-user-accounts-with-user-identities.md#what-is-a-user-identity) that will correspond to the App User Account using your internal user ID or other identifying information.

Then, using the user identity, create a [client session](../../../core-concepts/authentication/client-session-tokens/) and capture the resulting [client session token](../../../core-concepts/authentication/client-session-tokens/). This token will be used to authenticate the user on your application.

{% tabs %}
{% tab title="Python" %}
```python
# Create the user identity.
user_identity = seam.user_identities.create(
    email_address="jane@example.com"
)

# Create the client session.
client_session = seam.client_sessions.create(
    user_identity_ids=[user_identity.user_identity_id]
)

# Use this token to launch your mobile controller.
token = client_session.token
```
{% endtab %}

{% tab title="cURL (bash)" %}
```bash
# Create the user identity.
user_identity=$(curl -X 'POST' \
  'https://connect.getseam.com/user_identities/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
        "email_address": "jane@example.com"
  }')
  
# Get the user identity ID.
user_identity_id=$(echo $user_identity | jq -r '.user_identity.user_identity_id')

# Create the client session.
client_session=$(curl -X 'POST' \
  'https://connect.getseam.com/client_sessions/create' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer ${API_KEY}" \
  -H 'Content-Type: application/json' \
  -d "{
        \"user_identity_ids\": [\"$user_identity_id\"]
  }")

# Get the resulting client session token and 
# use this token to launch your mobile controller.
token=$(echo $client_session | jq -r '.client_session.token')
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
// Create the user identity.
const userIdentity = await seam.userIdentities.create({
    email_address: "jane@example.com"
});

// Create the client session.
const clientSession = await seam.clientSessions.create({
    user_identity_ids: [userIdentity.user_identity_id]
});

// Use this token to launch your mobile controller.
const token = clientSession.token;
```
{% endtab %}

{% tab title="Ruby" %}
```ruby
# Create the user identity.
user_identity = client.user_identities.create(
    email_address: "jane@example.com"
)

# Create the client session.
client_session = client.client_sessions.create(
    user_identity_ids: [user_identity.user_identity_id]
)

# Use this token to launch your mobile controller.
token = client_session.token
```
{% endtab %}

{% tab title="PHP" %}
```php
// Create the user identity.
$user_identity = $seam->user_identities->create(
  email_address: "jane@example.com"
);

// Create the client session.
$client_session = $seam->client_sessions->create(
  user_identity_ids: [$user_identity->user_identity_id]
);

// Use this token to launch your mobile controller.
$token = $client_session->token;
```
{% endtab %}


{% endtabs %}

***

## 4. Initialize the Mobile SDK with the Client Session Token


Use the client session token you generated earlier to bootstrap the Seam SDK on the device. Under the hood, this will set up credential synchronization and start a background sync loop to keep permissions up to date.


### Initialization and Error Handling

Perform initialization and activation within your app’s asynchronous context (e.g., Swift’s `Task` or Kotlin coroutines) so you can handle errors. The initialization call may fail due to configuration issues (such as an invalid token), and the activation call may fail due to network or runtime errors. Catch these errors and present a user-friendly message or fallback UI as appropriate.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
import co.seam.sdk.Seam
import co.seam.sdk.SeamError


// Initialize the Seam client with the client session token. nclude the
// Android activity context and a .
val seam = SeamClient(
    clientSessionToken = seamClientSessionToken,
    androidContext = activityContext,
    seamEventHandler = 
)

try {
    seam.phone.native.initialize(
        // Opt into features with these options
        enableUnlockWithTap = true
    )
} catch (e: SeamError) {
    // Handle unrecoverable initialization errors.
}
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
import SeamSDK

// Initialize the Mobile SDK with the Client Session Token (CST)
Task {
    do {
        // Bootstrap the SDK with the CST from your login flow
        try SeamSDKManager.initialize(clientSessionToken: token)
        // Start credential sync and background polling
        try await SeamSDKManager.shared.activate()
        print("Seam SDK is now active")
    } catch let error as SeamSDKV2Error {
        // Handle SDK-specific initialization errors (invalid token, workspace issues)
        showAlert(title: "Initialization Failed", message: error.localizedDescription)
    } catch {
        // Handle any other errors (network, unexpected)
        showAlert(title: "Unexpected Error", message: error.localizedDescription)
    }
}
```
{% endtab %}
{% endtabs %}


### Credential Errors

Any errors that occur between activation and deactivation surface on individual credential objects via their `errors` property. Observe the `credentials` array to detect and handle these errors:

```swift
import SeamSDK
import Combine

private var credentialErrorsCancellable: AnyCancellable?

func startMonitoringCredentialErrors() {
    credentialErrorsCancellable = SeamSDKManager.shared.$credentials
        .sink { credentials in
            for credential in credentials where !credential.errors.isEmpty {
                print("Errors for \(credential.displayName):", credential.errors)
            }
        }
}
```

#### Credential Error Types

- `awaitingLocalCredential`: Credential is being prepared locally.
- `expired`: Credential has expired and cannot be used.
- `userInteractionRequired(action)`: Additional user interaction required; check the `action` for specifics.
- `unknown`: An unspecified error occurred.

#### Possible `userInteractionRequired` Actions

- `completeOtpAuthorization(otpUrl:)`: User must complete OTP authorization.
- `enableInternet`: User must enable internet connectivity.
- `enableBluetooth`: User must enable Bluetooth.
- `grantBluetoothPermission`: User must grant Bluetooth permission.
- `appRestartRequired`: User must restart the app.
