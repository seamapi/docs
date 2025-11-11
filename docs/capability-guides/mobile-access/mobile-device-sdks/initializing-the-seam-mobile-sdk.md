# Initializing the Seam Mobile SDK

## 1. Install the Seam SDK

The Seam SDK is [available for download on request](mailto:support@seam.co) and is fully documented. See the Seam [Android](https://android.seam.vc/) and [iOS](https://ios.seam.vc/documentation/seamsdk/seam) SDK reference documentation.

{% hint style="info" %}
You must also use the Seam API to perform server-side actions. Consequently, [install a Seam server-side SDK](../../../api/installation.md) in the language of your choice if you have not done so already.
{% endhint %}

{% tabs %}
{% tab title="Android Kotlin" %}
### Configure Gradle to use Seam GitHub Packages

This project retrieves the Seam Mobile SDK artifacts from GitHub Packages.

To build successfully, you need valid credentials and must configure Gradle to fetch dependencies from Seam’s private package repository.

#### If you're using Kotlin Script (settings.gradle.kts):

{% code title="settings.gradle.kts" %}
```kotlin
// getPropertyOrNull is a helper function defined in settings.gradle.kts
// to safely read properties from local.properties
fun getPropertyOrNull(propertyName: String): String? {
    val propertiesFile = file("local.properties")
    if (!propertiesFile.exists()) return null

    val properties = Properties()
    properties.load(propertiesFile.inputStream())
    return properties.getProperty(propertyName, null)
}

// settings.gradle.kts
repositories {
    // ... other repositories
    maven {
        name = "GitHubPackages"
        url = uri("https://maven.pkg.github.com/seampkg/seam-mobile-sdk")
        credentials {
            username = getPropertyOrNull("seamUsername")
            password = getPropertyOrNull("seamPat")
        }
    }
}
```
{% endcode %}

#### if you're using Groovy:

{% code title="settings.gradle" %}
```groovy
// getPropertyOrNull is a helper function defined in settings.gradle
// to safely read properties from local.properties
String getPropertyOrNull(String propertyName) {
    def propertiesFile = file("local.properties")
    if (!propertiesFile.exists()) return null

    def properties = new Properties()
    properties.load(propertiesFile.inputStream())
    return properties.getProperty(propertyName, null)
}

// settings.gradle
repositories {
    // ... other repositories
    maven {
        name = "GitHubPackages"
        url = uri("https://maven.pkg.github.com/seampkg/seam-mobile-sdk")
        credentials {
            username = getPropertyOrNull("githubUsername")
            password = getPropertyOrNull("githubPat")
        }
    }
}
```
{% endcode %}

***

### Add your GitHub credentials

Gradle requires two credentials to download the Seam SDK packages from GitHub:

<table><thead><tr><th width="152.2001953125">Credential</th><th>Description</th><th>Where to get it</th></tr></thead><tbody><tr><td><code>githubUsername</code></td><td>Your GitHub username.</td><td>Use the same username you use to log in to GitHub.</td></tr><tr><td><code>githubPat</code></td><td>Personal Access Token (PAT) with the <code>read:packages</code> scope</td><td>Follow the steps below to generate it.</td></tr></tbody></table>

#### **To retrieve your credentials**

1.  Ask Seam to add your GitHub account as a collaborator to the private repository:

    [https://github.com/seampkg/seam-mobile-sdk](https://github.com/seampkg/seam-mobile-sdk)![Attachment.tiff](file:///Attachment.tiff)
2.  Once you’ve been added, go to your GitHub account:

    **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. Select **Generate new token (classic)** and choose:
   * Expiration: as needed (e.g., 90 days or “No expiration” if permitted)
   * Scopes: check only `read:packages`
4. Copy the generated token. This is your `githubPat` value.

Once you have both values, create a `local.properties` file in your project root:

{% code title="local.properties" %}
```properties
# local.properties (DO NOT COMMIT THIS FILE)
githubUsername=YOUR_GITHUB_USERNAME
githubPat=YOUR_GITHUB_CLASSIC_PAT
```
{% endcode %}

{% hint style="info" %}
Important:

* &#x20;`local.properties` is listed in `.gitignore` by default. Never commit this file to version control.
* PATs are private credentials--treat them like passwords.
* If your token expires or you lose access,&#x20;
{% endhint %}

***

### Add Seam SDK dependencies

Include the required Seam SDK components in your `app/build.gradle.kts`.

The `seam-phone-sdk-android-core` module provides the core functionality and must be included for all other components to work.

Each additional dependency enables support for a specific lock or credential integration. For example, to use **Salto Space**, add the `seam-phone-sdk-android-saltospace` module. You can include as many integration modules as your app requires.

#### Kotlin script (build.gradle.kts):

{% code title="app/build.gradle.kts" %}
```kotlin
val seamVersion = "3.1.6" // Or the desired version

dependencies {
    // ... other dependencies
    implementation("co.seam:seam-phone-sdk-android-core:$seamVersion")
    implementation("co.seam:seam-phone-sdk-android-saltoks:$seamVersion")
    implementation("co.seam:seam-phone-sdk-android-saltospace:$seamVersion")
    implementation("co.seam:seam-phone-sdk-android-latch:$seamVersion")
    implementation("co.seam:seam-phone-sdk-android-assaabloy:$seamVersion")
    implementation("co.seam:seam-phone-sdk-android-legic:$seamVersion")
    // ...
}
```
{% endcode %}

#### Groovy script (build.gradle):

{% code title="app/build.gradle" %}
```groovy
// app/build.gradle.kts
def seamVersion = "3.1.6" // Or the desired version

dependencies {
    // ... other dependencies
    implementation "co.seam:seam-phone-sdk-android-core:$seamVersion"
    implementation "co.seam:seam-phone-sdk-android-saltoks:$seamVersion"
    implementation "co.seam:seam-phone-sdk-android-saltospace:$seamVersion"
    implementation "co.seam:seam-phone-sdk-android-latch:$seamVersion"
    implementation "co.seam:seam-phone-sdk-android-assaabloy:$seamVersion"
    implementation "co.seam:seam-phone-sdk-android-legic:$seamVersion"
    // ...
}
```
{% endcode %}
{% endtab %}

{% tab title="iOS Swift" %}
You can install SeamSDK via CocoaPods or Swift Package Manager (SPM).\
SeamSDK supports per-lock-provider integration granularity. Include only the modules you need to keep your app footprint minimal.

#### CocoaPods:

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

#### Swift Package Manager:

{% code title="Package.swift" %}
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
{% endcode %}
{% endtab %}
{% endtabs %}

***

## 2. Implement any Manufacturer- and Mobile OS-Specific Requirements

Note the following manufacturer- and OS-specific requirements:

### Manufacturer-Specific Requirements

See the [device or system integration guide](../../../device-and-system-integration-guides/overview.md#access-control-systems) for the access control system or device for which you are planning to develop. Further, you may need to register for developer access with the ACS that you have chosen to use.

***

### iOS Requirement

While not required, you can optionally request the `com.apple.developer.passkit.pass-presentation-suppression` entitlement from the Apple Developer portal. This entitlement prevents Apple Wallet from appearing when scanning for Bluetooth low energy (BLE) or similar locks, improving the unlock experience.

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

Use the client session token that you generated earlier to bootstrap the Seam SDK on the device. Under the hood, this action sets up credential synchronization and starts a background sync loop to keep permissions up to date.

### Initialization and Error Handling

Perform initialization and activation within your app’s asynchronous context (for example, Swift’s `Task` or Kotlin coroutines) so that you can handle errors. The initialization call may fail due to configuration issues (such as an invalid token), and the activation call may fail due to network or runtime errors. Catch these errors and present a user-friendly message or fallback UI as appropriate.

{% tabs %}
{% tab title="iOS Swift" %}
```swift
import SeamSDK

// Initialize the Mobile SDK with the client session token (CST).
Task {
    do {
        // Bootstrap the SDK with the CST from your login flow.
        try Seam.initialize(clientSessionToken: token)
        // Start credential sync and background polling.
        try await Seam.shared.activate()
        print("Seam SDK is now active.")
    } catch let error as SeamError {
        // Handle SDK-specific initialization errors (invalid token, etc).
        showAlert(title: "Initialization Failed", message: error.localizedDescription)
    }
}
```
{% endtab %}

{% tab title="Android Kotlin" %}
```kotlin
try {
    SeamSDK.initialize(context, "seam_cst_...")
    SeamSDK.getInstance().activate()
} catch (seamError: SeamError) {
    when (seamError) {
        is SeamError.AlreadyInitialized -> {
            // handle error when SDK is already initialized
        }
        is SeamError.DeactivationInProgress -> {
            // handle error when app is being deactivated
        }
        is SeamError.InternetConnectionRequired -> {
            // handle error when internet connection is required
        }
        is SeamError.InvalidClientSessionToken ->  {
            // handle error when client session token is invalid
        }
        else -> {
            // handle other errors
        }
    }
}
```
{% endtab %}
{% endtabs %}

### Credential Errors

Any errors that occur between activation and deactivation surface on individual credential objects through their `errors` property. You can observe the `credentials` list to detect and handle these issues in real time.

{% tabs %}
{% tab title="iOS Swift" %}
#### Observe credential errors

```swift
import SeamSDK
import Combine

private var credentialErrorsCancellable: AnyCancellable?

func startMonitoringCredentialErrors() {
    credentialErrorsCancellable = Seam.shared.$credentials
        .sink { credentials in
            for credential in credentials where !credential.errors.isEmpty {
                print("Errors for \(credential.displayName):", credential.errors)
            }
        }
}
```

#### Credential error types

* `awaitingLocalCredential`: Waiting for a local credential to become available.
* `expired`: The credential has expired and is no longer valid.
* `userInteractionRequired(action)`: User interaction is required to resolve the issue; inspect action for details.
* `unsupportedDevice`: The current device is not supported.
* `contactSeamSupport`: Configuration error requiring developer attention.
* `unknown`: An unclassified or unexpected credential error occurred.

#### userInteractionRequired actions

* `completeOtpAuthorization(otpUrl:)`: The user must complete OTP authorization via the provided URL.
* `enableInternet`: The user must enable internet connectivity.
* `enableBluetooth`: The user must enable Bluetooth on the device.
* `grantBluetoothPermission`: The user must grant Bluetooth permission to the app.
* `appRestartRequired`: The user must restart the app to resolve the issue.
{% endtab %}

{% tab title="Android Kotlin" %}
#### Observe credential errors

```kotlin
// One of the attributes of the credential is a list of errors of type `SeamCredentialError`
coroutineScope.launch {
    SeamSDK.getInstance().credentials.collect { credentialsList ->
        val errors = credentialsList.flatMap { it.errors }
        errors.forEach { error ->
            when (error) {
                is SeamCredentialError.Expired -> { /* handle credential expiration error */}
                is SeamCredentialError.Loading -> { /* handle not loaded yet */ }
                is SeamCredentialError.Unknown -> { /* handle unknown error */}
                is SeamCredentialError.UserInteractionRequired -> {
                    handleUserInteractionRequired(error.interaction)
                }
            }
        }
    }
}

fun handleUserInteractionRequired(interaction: SeamRequiredUserInteraction) {
    when (interaction) {
        is SeamRequiredUserInteraction.CompleteOtpAuthorization -> { /* handle OTP authorization */ }
        is SeamRequiredUserInteraction.EnableBluetooth -> { /* handle Bluetooth error */ }
        is SeamRequiredUserInteraction.EnableInternet -> { /* handle Internet connection error*/ }
        is SeamRequiredUserInteraction.GrantPermissions -> { /* handle permissions error*/ }
    }
}

```

#### Credential error types

* `Loading`: The system is waiting for a local credential to become available.
* `Expired`: The credential has expired and is no longer valid.
* `UserInteractionRequired(val interaction: SeamRequiredUserInteraction)`: User interaction is required to resolve the issue; check interaction for specifics.
* `Unknown`: An unclassified or unexpected credential error occurred.

#### userInteractionRequired actions

* `CompleteOtpAuthorization(val otpUrl: String)`: The user must complete OTP authorization via the provided URL.
* `EnableInternet`: The user must enable internet connectivity.
* `EnableBluetooth`: The user must enable Bluetooth on the device.
* `GrantPermissions(val permissions: List<String>)`: The user must grant the required permissions.
* `AppRestartRequired`: The user must restart the app to resolve the issue.
{% endtab %}
{% endtabs %}
