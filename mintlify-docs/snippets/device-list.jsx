// Renders the Seam DeviceDB <device-list-by-capability> web component.
//
// Two Mintlify/React constraints shape this:
//   1. A hyphenated JSX tag compiles to a missing component (`_component0 is
//      not defined`) and throws — so we never write the custom element as JSX.
//   2. Server-rendering the element and letting the web component upgrade on
//      the client causes a React hydration mismatch (#418) — so we render an
//      empty <div> (identical on server and client) and inject the element
//      AFTER mount via a ref callback, which only runs on the client.
//
// The CDN module is loaded once per page from the same ref callback.

export const DeviceList = ({
  manufacturers,
  capabilityName,
  token = "6c51f0a4-d421-429e-8295-d02271aa4f23",
}) => {
  const mount = (el) => {
    if (!el || el.querySelector("device-list-by-capability")) return;

    const loaderId = "devicedb-elements-loader";
    if (!document.getElementById(loaderId)) {
      const script = document.createElement("script");
      script.id = loaderId;
      script.type = "module";
      script.src =
        "https://cdn.devicedb.seam.co/v/0.0.15/DeviceListByCapability.global.js";
      document.head.appendChild(script);
    }

    const element = document.createElement("device-list-by-capability");
    element.setAttribute("manufacturers", manufacturers);
    element.setAttribute("capability-name", capabilityName);
    element.setAttribute("token", token);
    el.appendChild(element);
  };

  return <div ref={mount} />;
};
