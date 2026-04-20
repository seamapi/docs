---
description: >-
  Define semantic colors for text, backgrounds, states, and accents with
  SeamTheme.Colors.
---

# Colors

Semantic app-wide colors used across components.

```swift
public struct Colors {
    public var accent: Color
    public var primaryText: Color
    public var secondaryText: Color
    public var primaryTextLight: Color
    public var primaryTextDark: Color
    public var danger: Color
    public var error: Color
    public var warning: Color
    public var info: Color
    public var success: Color
    public var grayFill: Color
    public var lightFill: Color
    public var darkFill: Color
    public var secondaryFill: Color
    public var progress: Color
    public var primaryBackground: Color
    public var secondaryBackground: Color
}
```

#### Example (partial override):

```swift
let colors = SeamTheme.Colors.default.with(
    accent: .teal,
    primaryBackground: Color(UIColor.systemBackground)
)
```
