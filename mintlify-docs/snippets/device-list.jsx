// Renders the Seam DeviceDB <device-list-by-capability> web component.
//
// Mintlify's MDX/JSX compiler turns a hyphenated tag (in MDX *or* in a .jsx
// snippet) into a missing component reference — `<device-list-by-capability>`
// compiles to `_component0`, which is undefined and throws. So we never write
// the custom element as JSX. Instead we inject it as raw HTML via
// dangerouslySetInnerHTML: the browser parses the markup and upgrades the
// custom element once the CDN module registers it. The values interpolated
// here are author-controlled (no user input), so the HTML string is safe.
//
// The CDN module is loaded once per page (a <script> rendered by React would
// not execute, so it's injected imperatively on the client).

export const DeviceList = ({
  manufacturers,
  capabilityName,
  token = "6c51f0a4-d421-429e-8295-d02271aa4f23",
}) => {
  if (typeof document !== "undefined") {
    const id = "devicedb-elements-loader";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.type = "module";
      script.src =
        "https://cdn.devicedb.seam.co/v/0.0.15/DeviceListByCapability.global.js";
      document.head.appendChild(script);
    }
  }

  const html = `<device-list-by-capability manufacturers="${manufacturers}" capability-name="${capabilityName}" token="${token}"></device-list-by-capability>`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
