---
description: >-
  Learn how to set up Seam Mobile Components in your iOS project using Swift
  Package Manager, drop in SeamAccessView for a complete unlock flow, and
  customize the look with SeamTheme.
---

# Seam Mobile Components for iOS

#### Prerequisites

* Xcode 15+
* iOS 16+ target

You should already have a Seam workspace and API key set up. If you’re new to Seam, start with the [Seam Mobile SDK](https://docs.seam.co/latest/mobile/ios/quickstart).

***

### Installation

Add the Seam Mobile Components package via Swift Package Manager:

```swift
dependencies: [
    .package(url: "https://github.com/seamapi/SeamComponents", from: "1.0.0")
]
```

Then import it in your SwiftUI code:

```swift
import SeamComponents
```

***

### Quick Start: `SeamAccessView`

The fastest way to get started is with SeamAccessView.

This view orchestrates all the underlying Mobile Seam Components to deliver a complete unlock experience.

```swift
import SwiftUI
import SeamSDK
import SeamComponents

struct ContentView: View {
    init() {
        try? Seam.initialize(clientSessionToken: "YOUR_CLIENT_SESSION_TOKEN")
    }

    var body: some View {
        SeamAccessView()
    }
}
```

That’s it — you now have a ready-to-use, production-ready unlock interface.

***

### How It Works with the Seam Mobile SDK

*   If you’re using Seam Mobile SDK:

    SeamAccessView automatically hooks into the SDK for device discovery, credential management, and unlock flows. No extra setup is needed.
*   If you’re only using Mobile Seam Components:

    You still get a fully functional unlock UI without writing SDK-level code. Under the hood, the component takes care of talking to the Seam SDK for you.

Think of SeamAccessView as a shortcut to a complete access solution, while the SDK gives you deeper programmatic control.

***

### Customization with `SeamTheme`

Mobile Seam Components are white-label ready. You can use SeamTheme to apply your brand colors, fonts, and visual style across all components.

```swift
SeamAccessView()
    .seamTheme(.init(
        accentColor: .blue,
        backgroundColor: .black,
        cornerRadius: 12
    ))
```

By default, components are styled with Seam’s design system, but theming lets you align them to your app’s identity.

***

### See Also

* Explore [Seam Mobile SDK](https://docs.seam.co/latest/mobile/ios/quickstart)
