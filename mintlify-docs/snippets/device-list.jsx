// Renders the Seam DeviceDB <device-list-by-capability> web component.
//
// Why a snippet (and not the raw element in MDX): Mintlify's MDX compiler
// treats a hyphenated tag like <device-list-by-capability> as a missing React
// component and drops it ("Component ... does not exist"). Inside a .jsx
// snippet, React renders the hyphenated tag as a real custom DOM element, so
// the web component can upgrade once the CDN module loads.
//
// The CDN module is loaded once per page from here (a <script> rendered in JSX
// would not execute, so it's injected imperatively on the client).

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

  return (
    <device-list-by-capability
      manufacturers={manufacturers}
      capability-name={capabilityName}
      token={token}
    />
  );
};
