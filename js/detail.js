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
  robotics: {
    title: "お菓子袋ラッピングサポートロボ",
    tags: ["CAD", "3Dプリンター", "SO-101"],
    overview:
      "お菓子袋のラッピング工程の一部を自動化し、作業を支援するロボットです。手作業で生じる仕上がりのばらつきや衛生面の課題を、機構による補助で軽減することを目指しました。",
    purpose:
      "手作業によるラッピングは仕上がりにばらつきが出やすく、衛生面への配慮も必要でした。この課題を解決するため、蛇腹折りと固定（当初はタイ留めを想定）を自動化する構想からスタートしました。",
    functions: [
      "蛇腹折り用ジグザグ治具の設計・製作（CAD設計 → 3Dプリンターで出力）",
      "押し込み式から挟み込み式へ変更した固定機構",
      "動作の流れを人の手で検証（SO-101アームへの実装は今後の課題）",
    ],
    point:
      "当初は押し込み式の固定を想定していましたが、ロボットアームでの押し込みは難しいと判断し、挟み込み式に設計を変更しました。また役割分担も見直し、袋のセットや位置固定は人が行い、蛇腹折りをロボット側の主な役割とすることで、袋詰め作業全体との連携が取りやすい構成にしました。",
    learned:
      "完全自動化ではなく人と協力する形へ構想を見直したことで、蛇腹折り工程が最も手間とばらつきの出やすい作業だと分かりました。現時点では治具の設計・試作と、人の手による動作検証までが完了しており、CADと3Dプリンターで製作した挟み込み式のジグザグ治具をSO-101アームに実際に取り付けて自動動作させるところまでは至っていません。今後はロボットアームへの実装を目指します。",
  },
};

const root = document.querySelector("[data-work]");
if (root) {
  const key = root.dataset.work;
  const work = details[key];

  if (work) {
    document.title = `${work.title} | 宮川 麻実 ポートフォリオ`;

    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };
    const setHtml = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = value;
    };

    setText("detailTitle", work.title);

    const imageEl = document.getElementById("detailImage");
    if (imageEl && work.image) {
      imageEl.src = work.image;
      imageEl.alt = `${work.title}の画面イメージ`;
    }

    setHtml("detailTags", work.tags.map((tag) => `<span class="tag">${tag}</span>`).join(""));
    setText("overview", work.overview);
    setText("purpose", work.purpose);
    setHtml("functions", work.functions.map((item) => `<li>${item}</li>`).join(""));
    setText("point", work.point);
    setText("learned", work.learned);
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
