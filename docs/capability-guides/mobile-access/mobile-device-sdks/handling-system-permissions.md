# Handling System Permissions

This guide demonstrates how to request necessary system permissions, such as Bluetooth or Location Access. The SDK enables your application to identify and request the necessary permissions for specific features. Additionally, it details how to display warnings or banners within your application when required permissions are not enabled.

## Retrieving and Requesting Required Permissions at Start Up

Upon launch, the application needs to request the necessary permissions from the user. To retrieve the obtain the list of required permissions, use the `listRequiredAndroidPermissions` or `listRequiredIosPermissions` methods, and specify the features the application will be using.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
val requiredPermissions = seam.phone.native.listRequiredAndroidPermissions(
  enableUnlockWithTap = true
)

if (requiredPermissions.isNotEmpty()) {
  // Request required permissions from the user.
}
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
let requiredPermissions = seam.phone.native.listRequiredIosPermissions( // Coming soon!
  enableUnlockWithTap: true
)

if (!requiredPermissions.isEmpty) {
  // Request required permissions from the user.
}
```
{% endtab %}
{% endtabs %}

Once you've acquired the list of required permissions, please refer to relevant Android and iOS documentation for guidance on adding system permissions.&#x20;

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption><p>Requesting Required System Permissions for your App</p></figcaption></figure>

***

## Perform a System Check and Display Warnings

An app user may choose to deny the application's permission requests. Before launching any features, your application must perform a system check. If the required permissions are not enabled, the app must inform the user, and instruct the user to enable them.

{% tabs %}
{% tab title="Android Kotlin" %}
```kotlin
fun handleEvent(
  event: SeamEvent
) {
  // Check whether the phone state has changed.
  // Note that these events are located under the phone namespace.
  if (event is SeamEvent.Phone) {
    val phone = seam.phone.get().nativeMetadata

    if (
      // The desired state has not been met.
      !phone.canUnlockWithTap
    ) {
      if (phone.errors.any { it is SeamError.Phone.Native.MissingRequiredAndroidPermissions }) {
        // Need to update the required permissions.
        val requiredPermissions = seam.phone.native.listRequiredAndroidPermissions(
          enableUnlockWithTap = true
        )

        // Request the requiredPermissions or prompt the user to do so.
      }
    }
  }
}
```
{% endtab %}

{% tab title="iOS Swift" %}
```swift
func eventDelegate(
    event: SeamEvent
) {
    // Check whether the phone state has changed.
    // Note that these events are located under the phone namespace.
    switch (event) {
    case .phone: 
       let phone = seam.phone.get().nativeMetadata // Coming soon!
       
       // The desired state has not been met.
       if(!phone.canUnlockWithTap) {
         if (phone.errors.contains(where: $0 == {.phone(.native(.missingRequiredIosPermissions)))}) {
           // Need to update the required permissions.
           let requiredPermissions = seam.phone.native.listRequiredIosPermissions( // Coming soon!
             enableUnlockWithTap: true
           )
           // Request the requiredPermissions or prompt the user to do so.
         }
       }
       break
    }
}
```
{% endtab %}
{% endtabs %}

<figure><img src="../../../.gitbook/assets/image (7).png" alt=""><figcaption><p>Inform the user to enable required system permissions.</p></figcaption></figure>

