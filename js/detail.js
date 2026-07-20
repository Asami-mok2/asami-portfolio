const details = {
  anime: {
    title: "アニメ検索アプリ",
    image: "../public/images/anime-app.svg",
    tags: ["SwiftUI", "API", "JSON"],
    overview: "アニメ作品を検索し、作品情報や詳細を確認できるiOSアプリです。APIから取得したデータを一覧と詳細画面に整理して表示します。",
    purpose: "API連携やJSONデータの扱い、SwiftUIでの画面表示を学ぶために制作しました。",
    functions: ["アニメ作品の検索", "検索結果の一覧表示", "作品詳細の表示", "外部リンクへの遷移"],
    point: "検索結果をカード形式で表示し、作品名・画像・スコアなどを見やすく整理しました。必要な情報を迷わず確認できる画面構成を意識しています。",
    learned: "APIから取得したデータをアプリ画面に表示する流れと、データを見やすく整理する大切さを学びました。",
  },
  kanji: {
    title: "漢字クイズアプリ",
    image: "../public/images/kanji-app.svg",
    tags: ["SwiftUI", "Quiz", "UI"],
    overview: "表示された漢字の読みを選んで答えるクイズアプリです。学習しやすい画面と結果表示を意識しました。",
    purpose: "SwiftUIの状態管理、ボタン操作、画面遷移、正誤判定を学ぶために制作しました。",
    functions: ["クイズ出題", "選択肢による回答", "正誤判定", "結果画面の表示"],
    point: "入力・選択・結果表示の流れを分かりやすくし、初めて使う人でも操作に迷わない画面を目指しました。",
    learned: "@Stateを使った状態管理や、画面ごとの役割を分けて考えることを学びました。",
  },
  designhub: {
    title: "DesignHub",
    image: "../public/images/designhub.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    overview: "デザインの参考になる情報やアイデアを探しやすく整理するWebサイト案です。",
    purpose: "Web制作の構成力や、ユーザーが目的の情報を探しやすいUIを考えるために制作しました。",
    functions: ["作品カード一覧", "カテゴリ表示", "タグによる整理", "レスポンシブ対応"],
    point: "情報を詰め込みすぎず、カード型のレイアウトで見やすく整理しました。スマホでも読みやすい余白を意識しています。",
    learned: "Webページの構成、カードUI、余白設計、レスポンシブ対応の考え方を学びました。",
  },
};

const root = document.querySelector("[data-work]");
if (root) {
  const key = root.dataset.work;
  const work = details[key];

  if (work) {
    document.title = `${work.title} | 宮川 麻実 ポートフォリオ`;
    document.getElementById("detailTitle").textContent = work.title;
    document.getElementById("detailImage").src = work.image;
    document.getElementById("detailImage").alt = `${work.title}の画面イメージ`;
    document.getElementById("detailTags").innerHTML = work.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
    document.getElementById("overview").textContent = work.overview;
    document.getElementById("purpose").textContent = work.purpose;
    document.getElementById("functions").innerHTML = work.functions.map((item) => `<li>${item}</li>`).join("");
    document.getElementById("point").textContent = work.point;
    document.getElementById("learned").textContent = work.learned;
  }
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => observer.observe(element));
