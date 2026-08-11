// Lucky Automobile & Workshop — site scripts
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // Contact form: client-side validation + success message.
  // NOTE: This form has no backend wired up yet. To receive real bookings,
  // connect it to Netlify Forms (add data-netlify="true" + a hidden
  // "form-name" input), Formspree, or your own endpoint, then replace the
  // preventDefault() block below with a real fetch()/submit.
  var form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var successBox = document.getElementById("form-success");
      if (successBox) {
        successBox.classList.add("show");
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }
})();
