// Search and filters for the publications page.
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".pubs .pub"));
  if (!cards.length) return;
  var q = document.getElementById("pub-q");
  var type = document.getElementById("pub-type");
  var count = document.getElementById("pub-count");
  var empty = document.getElementById("pub-empty");
  var state = { year: "", topic: "" };

  function pick(groupId, key) {
    var group = document.getElementById(groupId);
    group.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      group.querySelectorAll("button").forEach(function (x) {
        x.classList.toggle("is-on", x === b);
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      state[key] = b.dataset.v;
      apply();
    });
  }

  function apply() {
    var words = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var t = type.value;
    var shown = 0;
    cards.forEach(function (c) {
      var li = c.closest("li") || c;
      var ok =
        (!state.year || c.dataset.year === state.year) &&
        (!t || c.dataset.type === t) &&
        (!state.topic || (c.dataset.topics || "").split(",").indexOf(state.topic) > -1) &&
        words.every(function (w) {
          return c.dataset.text.indexOf(w) > -1;
        });
      li.hidden = !ok;
      if (ok) shown++;
    });
    var filtered = shown !== cards.length;
    count.textContent = filtered ? "Showing " + shown + " of " + cards.length + " publications" : cards.length + " publications";
    empty.hidden = shown !== 0;
  }

  pick("pub-years", "year");
  pick("pub-topics", "topic");
  q.addEventListener("input", apply);
  type.addEventListener("change", apply);
  apply();
})();
