import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "婚活アプリを使う前に考えたいこと | 婚活コラム",
  description:
    "婚活アプリを使う前に、真剣度・使いやすさ・費用感・プロフィール確認・やり取りのペースを整理するための記事です。",
  path: "/articles/before-using-marriage-apps",
});

const preparationPoints = [
  { title: "どのくらい真剣に婚活したいか", body: "今どれくらい結婚を意識しているかを言葉にすると、見たい情報の優先順位が整いやすくなります。" },
  { title: "どのくらいの頻度で使えるか", body: "毎日使えるのか、週に数回が現実的かで続けやすさは変わります。生活リズムに合う頻度を先に考えてみましょう。" },
  { title: "費用をどこまでかけられるか", body: "月単位でどこまでなら負担なく続けられるかを確認すると、比較するときに迷いにくくなります。" },
  { title: "プロフィールで何を確認したいか", body: "価値観や生活イメージなど、プロフィールで重視したい項目を決めておくと、情報に振り回されにくくなります。" },
  { title: "会う前にどこまでやり取りしたいか", body: "メッセージを重ねてから会いたいか、早めに会って話したいかなど、心地よい距離感を先に決めておくと安心です。" },
];

export default function BeforeUsingMarriageAppsArticlePage() {
  return (
    <main>
      <section className="section section--soft" aria-labelledby="before-using-marriage-apps-title">
        <div className="section__inner">
          <article className="page-card content-area before-start-article before-using-apps-article" aria-labelledby="before-using-marriage-apps-title">
            <header className="app-article-header marriage-apps-article-header before-using-apps-header">
              <p className="eyebrow">Article</p>
              <h1 id="before-using-marriage-apps-title" className="before-using-apps-title">婚活アプリを使う前に考えたいこと</h1>
              <p className="before-using-apps-lead">婚活アプリは手軽に始めやすい一方で、使う前に目的やペースを整理しておくと、気持ちが整いやすくなります。いきなり比較に入るより、まず自分が何を重視したいかを言葉にしてみましょう。</p>
            </header>

            <section aria-labelledby="before-using-marriage-apps-intro">
              <h2 id="before-using-marriage-apps-intro">1. はじめに</h2>
              <p>情報が多いと、最初は何から見ればよいか迷いやすくなります。先に自分の考え方を整理しておくことで、必要な情報を落ち着いて選びやすくなり、無理のない進め方につながります。</p>
            </section>

            <section aria-labelledby="before-using-marriage-apps-five-points" className="before-start-points before-using-apps-points">
              <h2 id="before-using-marriage-apps-five-points">2. 使う前に整理したい5つのこと</h2>
              <div className="card-grid">
                {preparationPoints.map((point) => (
                  <section className="text-card" key={point.title}>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </section>
                ))}
              </div>
              <p>整理した内容をもとに、<Link href="/marriage-apps">婚活アプリ比較の準備ページ</Link>を見ると、確認したいポイントを絞り込みやすくなります。</p>
            </section>

            <section aria-labelledby="before-using-marriage-apps-ease">
              <h2 id="before-using-marriage-apps-ease">3. 「気軽さ」だけで決めない方がよい理由</h2>
              <p>使いやすさは大切ですが、それだけで判断すると、後から目的とのズレを感じることがあります。自分の温度感や続けやすいペースと合っているかをあわせて確認することで、より納得感のある選び方をしやすくなります。</p>
            </section>

            <section aria-labelledby="before-using-marriage-apps-with-diagnosis">
              <h2 id="before-using-marriage-apps-with-diagnosis">4. 診断結果と合わせて考える</h2>
              <p>確認したい点はタイプによって変わります。自然な出会いを重視したい人、行動量を増やしたい人、条件整理をしたい人など、それぞれの視点で優先順位は異なります。</p>
              <p><Link href="/diagnosis">10問診断</Link>の結果とあわせて見直すと、自分に合う比較軸を言葉にしやすくなります。必要に応じて<Link href="/articles">コラム一覧</Link>から他の記事を読むと、考え方をさらに整理しやすくなります。</p>
            </section>

            <section aria-labelledby="before-using-marriage-apps-summary">
              <h2 id="before-using-marriage-apps-summary">5. まとめ</h2>
              <p>アプリを選ぶ前に、自分の使い方や優先順位を先に言葉にしておくことが大切です。比較の前に軸を持っておくことで、情報の受け取り方がやわらかくなり、次の一歩を落ち着いて考えやすくなります。</p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
