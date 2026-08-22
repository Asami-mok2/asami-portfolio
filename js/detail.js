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
    image: "../public/images/designhub/designhub.svg",
    tags: ["Figma", "Prototype", "UI/UX"],
    overview:
      "Web上にあるフリー素材を、検索・閲覧・管理できるスマートフォンアプリです。画像やイラスト、アイコンなどの素材をカテゴリやキーワードから探し、素材ごとの利用条件を確認できます。気になった素材はお気に入りに登録でき、必要な素材を後からまとめて確認できるように設計しました。",
    purpose:
      "Webサイトや資料を制作する際、フリー素材を探すために複数の素材サイトを確認したり、それぞれのサイトで利用規約を確認したりする手間があります。そこで「素材を探すこと」と「利用条件を確認すること」を一つのアプリで行えるようにしたいと考え、このアプリを制作しました。素材探しにかかる手間を減らし、必要な素材をよりスムーズに見つけられることを目的としています。",
    functions: [
      "キーワードによる素材検索",
      "カテゴリからの素材検索",
      "画像・イラスト・アイコンなどの素材一覧表示",
      "素材の詳細・プレビュー表示",
      "配布元サイト・URLの確認",
      "商用利用や加工、クレジット表記などの利用条件の確認",
      "お気に入り登録・解除",
      "お気に入り素材の一覧表示",
      "お気に入り素材の複数選択・削除",
      "フィルター・並び替え",
      "最近見た素材の表示",
      "マイページ・各種設定",
    ],
    point: [
      {
        title: "利用条件をひと目で確認できるようにした",
        text:
          "フリー素材はサイトや素材によって商用利用・加工・クレジット表記などの条件が異なります。そのため詳細画面では規約を文章だけで表示するのではなく、「商用利用OK」「加工OK」「クレジット不要」「再配布NG」のように、重要な条件をひと目で判断できる表示を意識しました。",
      },
      {
        title: "素材を探す方法を複数用意した",
        text:
          "目的の素材が決まっている場合は検索から、まだ決まっていない場合はカテゴリやおすすめ・人気素材から探せるようにしました。「人物」「自然」「建物」「ビジネス」など内容から探せるカテゴリも用意し、目的に合わせて素材へたどり着けるようにしています。",
      },
      {
        title: "スマートフォンでの操作の分かりやすさを意識した",
        text:
          "ホーム・お気に入り・マイページなど、よく使う画面はボトムナビゲーションから移動できるようにしました。素材一覧では画像そのものが見やすいグリッド表示を採用し、検索・フィルター・並び替えなどの操作も分かりやすい位置に配置しました。",
      },
      {
        title: "お気に入りを後から整理しやすくした",
        text:
          "気になった素材を保存するだけでなく、複数の素材を選択して削除や共有ができるようにしました。選択中の素材にはチェックや枠を表示し、どの素材を選んでいるかが視覚的に分かるよう工夫しました。",
      },
    ],
    learned:
      "今回の制作を通して、機能を追加するだけでなく、ユーザーがどのような順番で操作するのかを考えて画面を設計することの重要性を学びました。特に「素材を探す→詳細を見る→利用条件を確認する→お気に入りに保存する」という一連の流れを意識することで、それぞれの画面に必要な情報や機能を整理できました。また、情報を多く表示する場合でも、すべてを同じように見せるのではなく、重要な情報に優先順位をつけ、ユーザーが判断しやすい形で提示することがUI設計では重要だと学びました。",
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

    const pointEl = document.getElementById("point");
    if (pointEl) {
      if (Array.isArray(work.point)) {
        pointEl.innerHTML = work.point
          .map((item) => `<div class="detail-subpoint"><h3>${item.title}</h3><p>${item.text}</p></div>`)
          .join("");
      } else {
        pointEl.textContent = work.point;
      }
    }

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
