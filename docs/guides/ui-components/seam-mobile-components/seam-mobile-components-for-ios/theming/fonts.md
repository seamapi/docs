---
description: Set typography roles with SeamTheme.Fonts to match your app’s text hierarchy.
---

# Fonts

Semantic typography roles aligned to Dynamic Type.

```swift
public struct Fonts {
    public var largeTitle: Font
    public var title: Font
    public var title2: Font
    public var title3: Font
    public var headline: Font
    public var subheadline: Font
    public var body: Font
    public var callout: Font
    public var footnote: Font
    public var caption: Font
    public var caption2: Font
    public var actionTitle: Font
    public var sectionHeader: Font
}
```

Example:

```swift
let fonts = SeamTheme.Fonts.default.with(
    largeTitle: .system(size: 40, weight: .bold),
    actionTitle: .headline.weight(.semibold)
)
```
