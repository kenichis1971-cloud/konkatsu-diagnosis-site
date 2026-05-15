import type { Metadata } from "next";

const articleCards = [
  {
    label: "準備中",
    title: "婚活を始める前に整理したいこと",
    body: "出会い方を選ぶ前に、今の気持ち・生活のペース・大切にしたい価値観をやさしく書き出すためのコラムを準備しています。",
  },
  {
    label: "準備中",
    title: "結婚相談所を比較するときの見方",
    body: "料金やサポート内容だけでなく、自分が相談しやすい距離感や進め方を考えるための視点を整理していく予定です。",
  },
  {
    label: "準備中",
    title: "婚活アプリを使う前に考えたいこと",
    body: "気軽さと向き合い方のバランス、プロフィール作成時に無理をしすぎない考え方などをまとめる予定です。",
  },
  {
    label: "準備中",
    title: "自分の結婚観を見直すヒント",
    body: "条件だけに寄せすぎず、安心できる関係性や暮らし方を見つめ直すための問いを用意していきます。",
  },
];

const guideItems = [
  "不安をあおるのではなく、今の気持ちを落ち着いて整理する",
  "サービスを選ぶ前に、自分に合う進め方や距離感を考える",
  "診断結果とあわせて、婚活の選択肢を見渡す材料にする",
];

export const metadata: Metadata = {
  title: "婚活コラム",
  description:
    "婚活を始める前の整理、結婚相談所や婚活アプリの見方、自分の結婚観を見直すヒントを準備している記事ページです。",
};

export default function ArticlesPage() {
  return (
    <main className="articles-page">
      <section className="articles-hero" aria-labelledby="articles-title">
        <div className="articles-hero__content">
          <p className="eyebrow">Articles</p>
          <h1 id="articles-title">婚活コラム</h1>
          <p>
            婚活を始める前の気持ちや、結婚相談所・婚活アプリなどの選択肢を、
            自分のペースで見つめるための記事ページを準備しています。
          </p>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="articles-role-title">
        <div className="section__inner articles-intro-grid">
          <div>
            <p className="eyebrow">Guide</p>
            <h2 id="articles-role-title">比べる前に、気持ちと選択肢を整える場所へ。</h2>
          </div>
          <div className="text-card articles-role-card">
            <p>
              このページでは、特定の方法を急いで選ぶためではなく、婚活にまつわる考え方や
              比較の視点を整理するコラムを少しずつ追加していく予定です。
            </p>
            <ul className="articles-guide-list">
              {guideItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="articles-list-title">
        <div className="section__inner">
          <div className="articles-section-heading">
            <p className="eyebrow">Coming Soon</p>
            <h2 id="articles-list-title">準備中の記事テーマ</h2>
            <p>
              今後、自己理解と選択肢整理に役立つ内部コンテンツとして、以下のテーマを追加していきます。
            </p>
          </div>
          <div className="articles-card-grid">
            {articleCards.map((article) => (
              <article className="article-card" key={article.title}>
                <span>{article.label}</span>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
