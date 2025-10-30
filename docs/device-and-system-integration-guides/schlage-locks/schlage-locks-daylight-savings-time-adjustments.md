---
description: Handling Schlage lock DST (Daylight Saving Time) schedule adjustments
---

# Schlage Locks - Daylight Savings time adjustments

Schlage locks have a known Daylight Saving Time (DST) issue that can shift access schedules by one hour during time changes. This can cause access codes to expire early or stay active longer than intended.

Because Seam does not receive timezone information from Schlage, we can’t identify which locks are in regions that observe DST. To ensure uninterrupted access, Seam has applied a preventative fix for the **November 2025 fall-back transition** to **all Schlage locks that might be in DST-observing time zones.**

During this transition, Seam automatically extends the end time of any access codes that overlap the DST change by one hour, ensuring they remain active for their intended duration.

{% hint style="info" %}
**Note:** Software developers may see an “externally modified” warning on some codes — this is expected and indicates that Seam applied the adjustment.
{% endhint %}

**Time zones affected by DST:**

* **North America:** Eastern, Central, Mountain, Pacific, Alaska, Newfoundland
* **Europe:** Western, Central, Eastern
* **Oceania:** Australian Eastern/Central, New Zealand

Schlage is developing a firmware update to permanently resolve this issue. Seam will maintain this workaround through the March 2026 spring-forward period.
