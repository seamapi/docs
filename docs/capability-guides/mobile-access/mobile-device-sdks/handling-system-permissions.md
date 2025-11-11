# Handling System Permissions

The mobile SDK surfaces missing or required system permissions (Bluetooth, internet connectivity, and so on) as `CredentialError.userInteractionRequired(action)` entries in each credential’s `errors` array. After activation, observe these errors and handle the specified actions. Errors update automatically as requirements change.

## Monitoring Permission Errors

{% tabs %}
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
{% endtab %}

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
{% endtab %}
{% endtabs %}

The mobile SDK automatically clears resolved permission errors once the required permission is granted, reflecting the updated credential state.

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

## See also

For a complete SwiftUI-based implementation of credential error handling for iOS, see `SeamUnlockCardView` in the SeamComponents library, which demonstrates observing credential errors and updating the UI accordingly.
