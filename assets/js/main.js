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

  // ---------- Tabbed timeline ----------
  var tabBtns = document.querySelectorAll(".tab-btn[data-tab-target]");
  var tabPanels = document.querySelectorAll("[data-tab-panel]");

  function activateTab(targetId) {
    if (!targetId) return;
    tabBtns.forEach(function (b) {
      var isActive = b.getAttribute("data-tab-target") === targetId;
      b.classList.toggle("is-active", isActive);
      b.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    tabPanels.forEach(function (panel) {
      if (panel.id === targetId) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  }

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activateTab(btn.getAttribute("data-tab-target"));
    });
  });

  // ---------- Nav ----------
  var navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  navLinks.forEach(function (link) {
    var tabTarget = link.getAttribute("data-tab");
    if (tabTarget) {
      link.addEventListener("click", function () {
        activateTab(tabTarget);
      });
    }
  });

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
          if (entry.target.id === "journey") {
            var activeTabBtn = document.querySelector(".tab-btn.is-active");
            var activeTab = activeTabBtn ? activeTabBtn.getAttribute("data-tab-target") : null;
            navLinks.forEach(function (link) {
              link.classList.toggle(
                "is-active",
                link.getAttribute("href") === "#journey" && link.getAttribute("data-tab") === activeTab
              );
            });
            return;
          }
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id && !link.getAttribute("data-tab")
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

  // ---------- Timeline "see more" ----------
  document.querySelectorAll(".see-more-link").forEach(function (btn) {
    var container = btn.previousElementSibling;
    if (!container) return;
    var extras = container.querySelectorAll(".is-extra");
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

  // ---------- Project gallery: search, filter sidebar, sort, view toggle ----------
  var galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    var cards = Array.prototype.slice.call(galleryGrid.querySelectorAll(".gallery-card"));
    var sidebar = document.getElementById("gallery-sidebar");
    var countNum = document.getElementById("gallery-count-num");
    var emptyMsg = document.getElementById("gallery-empty");
    var searchInput = document.getElementById("gallery-search-input");
    var sortBtn = document.getElementById("gallery-sort");
    var viewBtns = document.querySelectorAll(".view-toggle__btn");

    var state = { category: "all", skill: "all", search: "" };

    // Build category counts
    var categoryCounts = {};
    var skillCounts = {};
    cards.forEach(function (card) {
      var cat = card.getAttribute("data-category");
      if (cat) categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      var skills = card.getAttribute("data-skills");
      if (skills) {
        skills.split("|").forEach(function (s) {
          if (!s) return;
          skillCounts[s] = (skillCounts[s] || 0) + 1;
        });
      }
    });

    function buildFilterRow(group, label, value, count, isActive) {
      var row = document.createElement("button");
      row.type = "button";
      row.className = "filter-row" + (isActive ? " is-active" : "");
      row.setAttribute("data-group", group);
      row.setAttribute("data-value", value);
      row.innerHTML =
        "<span>" + label + "</span><span class=\"count-badge\">" + count + "</span>";
      row.addEventListener("click", function () {
        state[group] = value;
        sidebar.querySelectorAll('[data-group="' + group + '"]').forEach(function (r) {
          r.classList.toggle("is-active", r === row);
        });
        applyFilters();
      });
      return row;
    }

    if (sidebar) {
      var totalCount = cards.length;

      var catGroup = document.createElement("div");
      catGroup.className = "filter-group";
      var catHeader = document.createElement("div");
      catHeader.className = "filter-group-header";
      catHeader.textContent = "Category";
      catGroup.appendChild(catHeader);
      catGroup.appendChild(buildFilterRow("category", "All categories", "all", totalCount, true));
      Object.keys(categoryCounts)
        .sort()
        .forEach(function (cat) {
          catGroup.appendChild(buildFilterRow("category", cat, cat, categoryCounts[cat], false));
        });
      sidebar.appendChild(catGroup);

      var techGroup = document.createElement("div");
      techGroup.className = "filter-group";
      var techHeader = document.createElement("div");
      techHeader.className = "filter-group-header";
      techHeader.textContent = "Tech Stack";
      techGroup.appendChild(techHeader);
      techGroup.appendChild(buildFilterRow("skill", "All tech", "all", totalCount, true));
      Object.keys(skillCounts)
        .sort(function (a, b) {
          return skillCounts[b] - skillCounts[a];
        })
        .slice(0, 12)
        .forEach(function (skill) {
          techGroup.appendChild(buildFilterRow("skill", skill, skill, skillCounts[skill], false));
        });
      sidebar.appendChild(techGroup);
    }

    function applyFilters() {
      var visibleCount = 0;
      cards.forEach(function (card) {
        var matchesCategory =
          state.category === "all" || card.getAttribute("data-category") === state.category;
        var cardSkills = (card.getAttribute("data-skills") || "").split("|");
        var matchesSkill = state.skill === "all" || cardSkills.indexOf(state.skill) !== -1;
        var matchesSearch =
          state.search === "" ||
          (card.getAttribute("data-search") || "").indexOf(state.search) !== -1;
        var visible = matchesCategory && matchesSkill && matchesSearch;
        card.classList.toggle("is-hidden-by-filter", !visible);
        if (visible) visibleCount++;
      });
      if (countNum) countNum.textContent = visibleCount;
      if (emptyMsg) emptyMsg.toggleAttribute("hidden", visibleCount !== 0);
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.search = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }

    if (sortBtn) {
      sortBtn.addEventListener("click", function () {
        var order = sortBtn.getAttribute("data-order") === "desc" ? "asc" : "desc";
        sortBtn.setAttribute("data-order", order);
        sortBtn.querySelector("span").textContent =
          order === "desc" ? "Newest first" : "Oldest first";
        var ordered = cards.slice();
        if (order === "asc") ordered.reverse();
        ordered.forEach(function (card) {
          galleryGrid.appendChild(card);
        });
      });
    }

    viewBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var view = btn.getAttribute("data-view");
        galleryGrid.setAttribute("data-view", view);
        viewBtns.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
      });
    });
  }

  // ---------- Career Gantt chart ----------
  var gantt = document.getElementById("gantt-chart");
  if (gantt) {
    function toMonthIndex(value) {
      if (value === "present") value = new Date().toISOString().slice(0, 7);
      var parts = value.split("-");
      return parseInt(parts[0], 10) * 12 + (parseInt(parts[1], 10) - 1);
    }

    var spanStart = toMonthIndex(gantt.getAttribute("data-span-start"));
    var spanEnd = toMonthIndex(gantt.getAttribute("data-span-end"));
    var totalMonths = spanEnd - spanStart;

    gantt.querySelectorAll(".gantt-segment").forEach(function (seg) {
      var start = toMonthIndex(seg.getAttribute("data-start"));
      var end = toMonthIndex(seg.getAttribute("data-end"));
      var left = ((start - spanStart) / totalMonths) * 100;
      var width = ((end - start) / totalMonths) * 100;
      seg.style.left = left + "%";
      seg.style.width = Math.max(width, 2) + "%";
    });
  }
})();
