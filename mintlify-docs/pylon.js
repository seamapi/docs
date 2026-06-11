(function () {
  var e = window;
  var t = document;
  var n = function () {
    n.e(arguments);
  };
  n.q = [];
  n.e = function (e) {
    n.q.push(e);
  };
  e.Pylon = n;
  var r = function () {
    var e = t.createElement("script");
    e.setAttribute("type", "text/javascript");
    e.setAttribute("async", "true");
    e.setAttribute(
      "src",
      "https://widget.usepylon.com/widget/5c45ac2d-37ee-433b-97e3-73a08749f5d3"
    );
    var n = t.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(e, n);
  };
  if (t.readyState === "complete") {
    r();
  } else if (e.addEventListener) {
    e.addEventListener("load", r, false);
  }
})();
