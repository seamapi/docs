(function () {
  const e = window;
  const t = document;
  const n = function () {
    n.e(arguments);
  };
  n.q = [];
  n.e = function (e) {
    n.q.push(e);
  };
  e.Pylon = n;
  const r = function () {
    const e = t.createElement("script");
    e.setAttribute("type", "text/javascript");
    e.setAttribute("async", "true");
    e.setAttribute(
      "src",
      "https://widget.usepylon.com/widget/5c45ac2d-37ee-433b-97e3-73a08749f5d3"
    );
    const n = t.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(e, n);
  };
  if (t.readyState === "complete") {
    r();
  } else if (e.addEventListener) {
    e.addEventListener("load", r, false);
  }
})();
