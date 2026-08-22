(function () {
  "use strict";

  var deck = document.querySelector(".slidedeck");
  if (!deck) return;

  var track = deck.querySelector(".slidedeck__track");
  var slides = Array.prototype.slice.call(deck.querySelectorAll(".slidedeck__slide"));
  var prevBtn = deck.querySelector(".slidedeck__arrow--prev");
  var nextBtn = deck.querySelector(".slidedeck__arrow--next");
  var currentEl = deck.querySelector(".slidedeck__current");
  var totalEl = deck.querySelector(".slidedeck__total");
  var dotsWrap = deck.querySelector(".slidedeck__dots");

  if (!track || !slides.length || !prevBtn || !nextBtn || !dotsWrap) return;

  var index = 0;

  if (totalEl) totalEl.textContent = slides.length;

  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slidedeck__dot";
    dot.setAttribute("aria-label", (i + 1) + "枚目のスライドへ");
    dot.addEventListener("click", function () {
      goTo(i);
    });
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll(".slidedeck__dot"));

  function render() {
    track.style.transform = "translateX(-" + index * 100 + "%)";
    if (currentEl) currentEl.textContent = index + 1;
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === index);
    });
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function goTo(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    render();
  }

  prevBtn.addEventListener("click", function () {
    goTo(index - 1);
  });
  nextBtn.addEventListener("click", function () {
    goTo(index + 1);
  });

  deck.setAttribute("tabindex", "0");
  deck.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  });

  render();
})();
