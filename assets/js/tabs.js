// Tabs on the experience page. Each tab has its own link, e.g. /experience/#industry.
(function () {
  var bar = document.querySelector(".xtabs");
  if (!bar) return;
  var tabs = Array.prototype.slice.call(bar.querySelectorAll("[role=tab]"));
  function show(id, focus) {
    var found = false;
    tabs.forEach(function (t) {
      var on = t.getAttribute("aria-controls") === id;
      if (on) found = true;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      if (on && focus) t.focus();
    });
    return found;
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () {
      var id = t.getAttribute("aria-controls");
      show(id);
      history.replaceState(null, "", "#" + id);
    });
    t.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      show(n.getAttribute("aria-controls"), true);
      history.replaceState(null, "", "#" + n.getAttribute("aria-controls"));
    });
  });
  function fromHash() {
    var id = location.hash.slice(1);
    if (!id || !show(id)) show(tabs[0].getAttribute("aria-controls"));
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();
})();
