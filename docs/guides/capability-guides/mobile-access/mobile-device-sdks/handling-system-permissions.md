# Handling System Permissions

The mobile SDK surfaces missing or required system permissions (Bluetooth, internet connectivity, and so on) as `CredentialError.userInteractionRequired(action)` entries in each credential’s `errors` array. After activation, observe these errors and handle the specified actions. Errors update automatically as requirements change.

***

## Platform Setup Requirements

First, configure the required platform capabilities.

{% tabs %}
{% tab title="iOS Swift" %}
1.  **Suppress Apple Wallet while unlocking with BLE**\
    To prevent the Apple Wallet dialog from appearing when your app uses BLE to unlock a door, do the following:

    * Add the `requestAutomaticPassPresentationSuppression()` call to your app.\
      This method suppresses Apple Wallet while your mobile app is in the foreground and ensures a smoother `unlockWithTap` experience.
    * Request the  `com.apple.developer.passkit.pass-presentation-suppression` entitlement from Apple.&#x20;

    Apple Wallet suppression and Bluetooth scanning only apply while the app is in the foreground. Ensure unlock operations are initiated while the app is active.
2.  **Enable Bluetooth capability**

    Add the required Bluetooth key to your app’s entitlements file:

    ```xml
    <dict>
      <key>com.apple.security.device.bluetooth</key>
      <true/>
    </dict>
    ```
{% endtab %}

{% tab title="Android Kotlin" %}
1.  **Request Bluetooth permissions**

    Define and call a helper function in your app to request the necessary Bluetooth permissions at runtime.
2.  **For Android 12 (API 31) and newer:**

    ```
    Manifest.permission.BLUETOOTH_SCAN
    Manifest.permission.BLUETOOTH_CONNECT
    Manifest.permission.BLUETOOTH_ADVERTISE
    ```
3.  **For Android 11 (API 30) and older:**

    ```
    Manifest.permission.BLUETOOTH
    Manifest.permission.BLUETOOTH_ADMIN
    Manifest.permission.ACCESS_COARSE_LOCATION
    Manifest.permission.ACCESS_FINE_LOCATION
    ```

See [Android request permissions](https://developer.android.com/training/permissions/requesting) for more details.
{% endtab %}
{% endtabs %}

## Monitoring Permission Errors

{% tabs %}
{% tab title="iOS Swift" %}
Use Combine to watch the published credentials array and handle permission-related errors:

```swift
import SeamSDK
import Combine

func startMonitoringPermissionErrors() {
    permissionCancellable = Seam.shared.$credentials
        .map { credentials in
            credentials.flatMap { credential in
                credential.errors.compactMap { error in
                    guard case .userInteractionRequired(let action) = error else { return nil }
                    return action
                }
            }
        }
        .receive(on: RunLoop.main)
        .sink { actions in
            actions.forEach { handlePermissionAction($0) }
        }
}
```

The mobile SDK automatically clears resolved permission errors once the required permission is granted, reflecting the updated credential state.
{% endtab %}

{% tab title="Android Kotlin" %}
```kotlin
coroutineScope.launch {
    SeamSDK.getInstance().credentials.collect { credentialsList ->
        val errors = credentialsList.flatMap { it.errors }
        errors.forEach { error ->
            when (error) {
                is SeamCredentialError.UserInteractionRequired -> {
                    handleUserInteractionRequired(error.interaction)
                }
                else -> { /* handle other errors */ }
            }
        }
    }

    fun handleUserInteractionRequired(interaction: SeamRequiredUserInteraction) {
        when (interaction) {
            is SeamRequiredUserInteraction.GrantPermissions -> {
                 /* handle permissions error */
                 // interaction.permissions contains the list of required permissions
            }
            else -> { /* handle other errors */ }
        }
    }
}
```

The mobile SDK automatically clears resolved permission errors once the required permission is granted, reflecting the updated credential state.
{% endtab %}
{% endtabs %}

## Handling Permission Actions

Implement your handler for each action:

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
fun handleUserInteractionRequired(interaction: SeamRequiredUserInteraction) {
    when (interaction) {
        is SeamRequiredUserInteraction.CompleteOtpAuthorization -> { /* handle OTP authorization */ }
        is SeamRequiredUserInteraction.EnableBluetooth -> { /* handle Bluetooth error */ }
        is SeamRequiredUserInteraction.EnableInternet -> { /* handle Internet connection error*/ }
        is SeamRequiredUserInteraction.GrantPermissions -> { /* handle permissions error*/ }
    }
}
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
func handlePermissionAction(_ action: CredentialUserAction) {
    switch action {
    case .enableInternet:
        // Prompt the user to enable network connectivity.
    case .enableBluetooth:
        // Prompt the user to turn on Bluetooth.
    case .grantBluetoothPermission:
        // Prompt the user to grant Bluetooth permission in Settings.
    }
}
```
{% endtab %}
{% endtabs %}

***

## See also

For a complete SwiftUI-based implementation of credential error handling for iOS, see `SeamUnlockCardView` in the SeamComponents library, which demonstrates observing credential errors and updating the UI accordingly.
