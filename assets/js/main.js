(function () {
  "use strict";

  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  var sections = Array.prototype.map
    .call(navLinks, function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  document.querySelectorAll(".see-more-toggle").forEach(function (btn) {
    var grid = btn.previousElementSibling;
    if (!grid) return;
    var extras = grid.querySelectorAll(".is-extra");
    var count = btn.getAttribute("data-count");
    var label = btn.querySelector(".see-more-label");

    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      extras.forEach(function (card) {
        if (expanded) {
          card.setAttribute("hidden", "");
        } else {
          card.removeAttribute("hidden");
        }
      });
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (label) {
        label.textContent = expanded ? "See " + count + " more" : "See less";
      }
    });
  });
})();
