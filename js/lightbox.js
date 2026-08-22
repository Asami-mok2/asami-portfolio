(function () {
  "use strict";

  var lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  var content = lightbox.querySelector(".lightbox__content");
  var closeBtn = lightbox.querySelector(".lightbox__close");
  var triggers = document.querySelectorAll("[data-lightbox]");

  function open(type, src, alt) {
    if (type === "video") {
      content.innerHTML = '<video controls playsinline></video>';
      var videoEl = content.querySelector("video");
      videoEl.src = src;
      var playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function (err) {
          console.warn("動画の自動再生がブロックされました。再生ボタンを押してください。", err);
        });
      }
    } else {
      content.innerHTML = '<img src="' + src + '" alt="' + (alt || "") + '" />';
    }
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    content.innerHTML = "";
  }

  triggers.forEach(function (el) {
    el.addEventListener("click", function () {
      var type = el.getAttribute("data-lightbox");
      var src = el.getAttribute("data-src");
      var alt = el.getAttribute("data-alt");
      if (src) open(type, src, alt);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
