(function () {
  "use strict";

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------
     Scroll reveal (words + generic)
     --------------------------------------------------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            // small stagger for siblings entering together
            setTimeout(function () {
              el.classList.add("is-in");
            }, i * 60);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------------------------------------------------------
     Custom cursor
     --------------------------------------------------------- */
  var cursor = document.querySelector(".cursor");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    .matches;

  if (cursor && finePointer && !prefersReduced) {
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    var tx = cx;
    var ty = cy;

    window.addEventListener("mousemove", function (e) {
      tx = e.clientX;
      ty = e.clientY;
    });

    (function loop() {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      cursor.style.transform =
        "translate(" + cx + "px," + cy + "px) translate(-50%, -50%)";
      requestAnimationFrame(loop);
    })();

    var hoverTargets = document.querySelectorAll(
      "a, .workview__media, .worktab, .header-cta, button"
    );
    hoverTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.classList.add("is-hover");
      });
      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("is-hover");
      });
    });
  } else if (cursor) {
    cursor.style.display = "none";
  }

  /* ---------------------------------------------------------
     Work panel: tab switching
     --------------------------------------------------------- */
  var works = [
    {
      title: "お菓子袋ラッピングサポートロボ",
      href: "works/robotics.html",
      img: "./public/images/robotics/preview.png",
      alt: "お菓子袋ラッピングサポートロボのイメージ",
      desc: "お菓子袋のラッピング工程を支援するロボット構想。CAD設計と3Dプリンターで蛇腹折り用の治具を製作し、SO-101アームでの活用を想定して設計しました。",
      tags: ["CAD", "3Dプリンター", "SO-101"],
    },
    {
      title: "DesignHub",
      href: "works/designhub.html",
      img: "./public/images/designhub/cover.png",
      alt: "DesignHub のイメージ",
      desc: "Web上にあるフリー素材を検索・閲覧・管理できるスマートフォンアプリ。カテゴリやキーワードから素材を探し、利用条件をひと目で確認できるようにしました。",
      tags: ["Figma", "Prototype", "UI/UX"],
    },
  ];

  var tabs = document.querySelectorAll(".worktab");
  var view = document.querySelector(".workpanel__view");
  var viewImg = document.querySelector(".workview__img");
  var viewTitle = document.querySelector(".workview__title");
  var viewDesc = document.querySelector(".workview__desc");
  var viewTags = document.querySelector(".workview__tags");

  if (tabs.length && view && viewImg && viewTitle && viewDesc && viewTags) {
    var current = 0;

    var previewWork = function (index) {
      var w = works[index];
      if (!w || index === current) return;
      current = index;

      tabs.forEach(function (t) {
        t.classList.toggle(
          "is-active",
          Number(t.getAttribute("data-index")) === index
        );
      });

      // 右パネルのリンク先も同期
      view.setAttribute("href", w.href);

      viewImg.classList.add("is-fading");
      window.setTimeout(function () {
        viewImg.setAttribute("src", w.img);
        viewImg.setAttribute("alt", w.alt);
        viewImg.classList.remove("is-fading");
      }, 200);

      viewTitle.textContent = w.title;
      viewDesc.textContent = w.desc;
      viewTags.innerHTML = w.tags
        .map(function (tag) {
          return "<li>" + tag + "</li>";
        })
        .join("");
    };

    tabs.forEach(function (tab) {
      var idx = Number(tab.getAttribute("data-index"));
      // ホバー / フォーカスでプレビュー切替（クリックは既定の遷移）
      tab.addEventListener("mouseenter", function () {
        previewWork(idx);
      });
      tab.addEventListener("focus", function () {
        previewWork(idx);
      });
    });
  }

  /* ---------------------------------------------------------
     Header hide on scroll down / show on scroll up
     --------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  var lastY = window.scrollY;
  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        if (y > lastY && y > 200) {
          header.style.transform = "translateY(-120%)";
        } else {
          header.style.transform = "translateY(0)";
        }
        header.style.transition = "transform 0.4s ease";
        lastY = y;
      },
      { passive: true }
    );
  }

  /* ---------------------------------------------------------
     Footer: last-updated date (from the file's own timestamp)
     --------------------------------------------------------- */
  var updatedEl = document.getElementById("updated-date");
  if (updatedEl) {
    var modified = new Date(document.lastModified);
    if (!isNaN(modified.getTime())) {
      var y2 = modified.getFullYear();
      var m2 = String(modified.getMonth() + 1).padStart(2, "0");
      var d2 = String(modified.getDate()).padStart(2, "0");
      updatedEl.textContent = "Last updated: " + y2 + "." + m2 + "." + d2;
    }
  }
})();
