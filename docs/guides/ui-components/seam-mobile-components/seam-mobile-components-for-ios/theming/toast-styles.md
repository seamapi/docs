---
description: >-
  Configure transient banners by customizing background, text, accent, and
  layout.
---

# Toast styles

Styles transient banners shown by components.

```swift
public struct Toast {
    public var background: Color
    public var textColor: Color
    public var accentColor: Color
    public var borderColor: Color
    public var cornerRadius: CGFloat
    public var shadowColor: Color
    public var shadowRadius: CGFloat
    public var shadowYOffset: CGFloat
    public var horizontalPadding: CGFloat
    public var verticalPadding: CGFloat
}
```

#### **Example:**

```swift
let toast = SeamTheme.Toast.default.with(
    background: Color(UIColor.secondarySystemBackground),
    borderColor: Color(UIColor.separator),
    cornerRadius: 14
)
```
