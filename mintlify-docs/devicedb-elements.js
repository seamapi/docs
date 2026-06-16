// Loads the Seam DeviceDB embeddable web components from the CDN once per page.
// Mintlify auto-includes root .js files on every page (same mechanism as
// pylon.js). The custom element <device-list-by-capability> is placed in MDX
// per brand guide; once this module registers it, the browser upgrades any
// instance — including ones rendered on client-side (SPA) navigations.
//
// Pin to a specific version (CDN URLs are immutable once published).
;(function () {
  const SRC =
    "https://cdn.devicedb.seam.co/v/0.0.15/DeviceListByCapability.global.js"
  if (document.querySelector('script[data-devicedb-elements]')) return
  const s = document.createElement("script")
  s.type = "module"
  s.src = SRC
  s.setAttribute("data-devicedb-elements", "")
  document.head.appendChild(s)
})()
