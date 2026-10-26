(function () {
  "use strict";

  /* ---------------------------------------------------------
     GA4 settings
     --------------------------------------------------------- */
  // GA4の測定ID（「G-」から始まるID）。管理画面で取得したIDに置き換える
  var MEASUREMENT_ID = "G-JQ0D1S25B1";
  // 本番のURLでだけ計測する（ローカル確認やプレビューの閲覧をKPIに含めない）
  var PRODUCTION_HOST = "asami-portfolio.pages.dev";

  if (!/^G-[A-Z0-9]+$/.test(MEASUREMENT_ID) || MEASUREMENT_ID === "G-XXXXXXXXXX") return;
  if (location.hostname !== PRODUCTION_HOST) return;
  // guard against loading the tag twice
  if (window.__gaInitialized) return;
  window.__gaInitialized = true;

  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
  document.head.appendChild(tag);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // page_view is sent once here on each page load
  window.gtag("config", MEASUREMENT_ID);

  var init = function () {
    /* -------------------------------------------------------
       KPI【読まれた】Works section reached (once per page view)
       ------------------------------------------------------- */
    var works = document.getElementById("work");
    if (works && "IntersectionObserver" in window) {
      var sent = false;
      var worksObserver = new IntersectionObserver(
        function (entries) {
          if (sent || !entries.some(function (e) { return e.isIntersecting; })) return;
          sent = true;
          worksObserver.disconnect();
          window.gtag("event", "works_section_view", { section_id: "work" });
        },
        // fires when the top of #work reaches the middle of the screen
        { threshold: 0, rootMargin: "0px 0px -50% 0px" }
      );
      worksObserver.observe(works);
    }

    /* -------------------------------------------------------
       KPI【動いた】GitHub link click
       ------------------------------------------------------- */
    document.addEventListener("click", function (e) {
      var link = e.target.closest && e.target.closest("a[href]");
      if (!link || link.hostname !== "github.com") return;
      var section = link.closest("section");
      window.gtag("event", "github_click", {
        link_url: link.href,
        link_location: section ? section.id || section.classList[0] : "other",
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
