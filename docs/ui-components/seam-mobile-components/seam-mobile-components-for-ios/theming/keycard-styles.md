---
description: >-
  Style key card components with custom gradients, logos, corner radius, and
  shadows.
---

# Keycard styles

Controls the look of key card UI (background gradient, logo, shadow, corner radius, etc.).

```swift
public struct KeyCard {
    public var backgroundGradient: [Color]
    public var accentColor: Color
    public var logoAssetName: String
    public var cornerRadius: CGFloat
    public var shadowColor: Color
    public var shadowRadius: CGFloat
    public var shadowYOffset: CGFloat
}
```

#### Examples:

```swift
// Change only the corner radius (uses builder).
let rounded = SeamTheme.KeyCard.default.with(cornerRadius: 24)

// Full control via initializer.
let branded = SeamTheme.KeyCard(
    backgroundGradient: [.blue, .purple],
    accentColor: .white,
    logoAssetName: "MyBrandLogo",
    cornerRadius: 18,
    shadowColor: .black.opacity(0.12),
    shadowRadius: 12,
    shadowYOffset: 6
)
```
