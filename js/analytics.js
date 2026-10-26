(function () {
  "use strict";

  /* ---------------------------------------------------------
     GA4 custom events
     GA4のタグ（gtag.js・page_view）は各ページの<head>直後で読み込む。
     ここではKPI用のカスタムイベントだけを送る
     --------------------------------------------------------- */
  if (typeof window.gtag !== "function") return;

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
