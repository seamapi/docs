// Renders the Seam DeviceDB <device-list-by-capability> web component inside an
// <iframe>.
//
// Why an iframe: Mintlify compiles a hyphenated JSX tag into a missing
// component (`_component0`), and injecting the web component into the React
// tree (dangerouslySetInnerHTML or a ref) makes the component mutate the DOM
// during hydration, which throws React #418. An iframe runs the component in
// its own document — fully outside React — so none of that can happen. The
// inner page reports its height via postMessage so the iframe auto-resizes and
// reads like an inline element (no fixed height / inner scrollbar).
//
// Everything lives INSIDE the component on purpose: Mintlify evaluates the
// exported function in isolation and drops module-level declarations, so a
// top-level `const` would be undefined at runtime ("X is not defined").

export const DeviceList = ({
  manufacturers,
  capabilityName,
  token = "6c51f0a4-d421-429e-8295-d02271aa4f23",
}) => {
  const cdn =
    "https://cdn.devicedb.seam.co/v/0.0.15/DeviceListByCapability.global.js"
  const close = "</scr" + "ipt>"

  const srcDoc = [
    '<!doctype html><html><head><meta charset="utf-8">',
    "<style>html,body{margin:0;padding:0;background:transparent}</style></head><body>",
    `<script type="module" src="${cdn}">${close}`,
    `<device-list-by-capability manufacturers="${manufacturers}" capability-name="${capabilityName}" token="${token}"></device-list-by-capability>`,
    `<script>new ResizeObserver(function(){parent.postMessage({__devicedb:true,height:document.documentElement.scrollHeight},"*")}).observe(document.documentElement)${close}`,
    "</body></html>",
  ].join("")

  const onRef = (iframe) => {
    if (!iframe || iframe.dataset.devicedbBound) return
    iframe.dataset.devicedbBound = "1"
    window.addEventListener("message", (event) => {
      if (
        event.source === iframe.contentWindow &&
        event.data &&
        event.data.__devicedb
      ) {
        iframe.style.height = `${event.data.height}px`
      }
    })
  }

  return (
    <iframe
      ref={onRef}
      srcDoc={srcDoc}
      title="Compatible devices"
      style={{ width: "100%", minHeight: "320px", border: "none" }}
    />
  )
}
