---
description: >-
  Control unlock card appearance, including header, key button, progress,
  instructions, and status states.
---

# UnlockCard styles

Used by `SeamUnlockCardView` and related UI (container, header, key button, progress, instructions, status colors).

```swift
public struct UnlockCard {
    // Container & header
    public var cardBackground: Color?
    public var headerBackground: Color?
    public var dividerColor: Color
    public var headerTitleColor: Color
    public var headerSubtitleColor: Color
    public var providerLogoTint: Color

    // Primary action (big key)
    public var keyIconColorIdle: Color
    public var keyIconColorActive: Color
    public var keyButtonGradient: [Color]
    public var keyButtonShadowColor: Color
    public var keyButtonShadowRadius: CGFloat
    public var keyButtonShadowYOffset: CGFloat

    // Progress & labels
    public var progressColor: Color
    public var phaseTitleColor: Color

    // Instructions
    public var instructionTextColor: Color
    public var bulletBackground: Color
    public var bulletTextColor: Color

    // Status
    public var successColor: Color
    public var errorColor: Color
    public var statusMessageColor: Color
}
```

#### Examples:

```
// Subtle gradient and soft shadow for the big key button
let unlock = SeamTheme.UnlockCard.default.with(
    keyButtonGradient: [Color.accentColor.opacity(0.75), .accentColor],
    keyButtonShadowColor: .black.opacity(0.12),
    keyButtonShadowRadius: 10,
    keyButtonShadowYOffset: 6,
    progressColor: .accentColor
)

// Dark header with light title/subtitle
let darkHeader = SeamTheme.UnlockCard.default.with(
    headerBackground: .black,
    headerTitleColor: .white,
    headerSubtitleColor: .white.opacity(0.7),
    providerLogoTint: .white.opacity(0.8)
)
```
