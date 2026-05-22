import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "結婚観を見直したいときに考えること | 婚活コラム",
  description:
    "条件や理想だけでは整理しきれない迷いに向き合い、生活・価値観・安心感・将来の過ごし方を落ち着いて言葉にするための記事です。",
  path: "/articles/review-marriage-values",
});

const reviewPoints = [
  { title: "どんな生活を心地よいと感じるか", body: "忙しい日の過ごし方、休みの日に大切にしたい時間、家での会話の雰囲気など、毎日の感覚を思い浮かべると結婚後のイメージが具体的になります。" },
  { title: "何を大切にしている人と過ごしたいか", body: "価値観は同じである必要はありませんが、尊重し合えるかどうかは安心感につながります。譲れないことと、歩み寄れることを分けて考えてみましょう。" },
  { title: "ひとりの時間とふたりの時間のバランス", body: "距離感の心地よさは人それぞれです。どちらかに寄せすぎず、自分が落ち着いて過ごせるバランスを言葉にしておくと、関係性のイメージが整いやすくなります。" },
  { title: "家族や仕事との向き合い方", body: "結婚後の生活では、家族との関わり方や仕事の優先度も影響します。今の生活を前提に、無理のない形を想像しておくことが大切です。" },
  { title: "将来の不安をどう分かち合いたいか", body: "不安がゼロになる必要はありません。気持ちを共有したいのか、具体的な行動で支え合いたいのかなど、安心につながる関わり方を考えてみましょう。" },
];

export default function ReviewMarriageValuesArticlePage() {
  return (
    <main>
      <section className="review-values-hero" aria-labelledby="review-marriage-values-title">
        <div className="review-values-hero__media" aria-hidden="true" />
        <div className="review-values-hero__overlay" aria-hidden="true" />
        <div className="review-values-hero__content">
          <p className="eyebrow">Article</p>
          <h1 id="review-marriage-values-title" className="review-values-title">結婚観を見直したいときに考えること</h1>
          <p className="review-values-lead">
            婚活を続けていると、条件だけでは整理しきれない迷いが出てくることがあります。
            このページでは、今の自分に合う結婚観をやわらかく言葉にしていくための視点をまとめます。
          </p>
        </div>
      </section>

      <section className="section section--soft review-values-shell" aria-labelledby="review-values-intro">
        <div className="section__inner">
          <article className="page-card content-area before-start-article review-values-article" aria-labelledby="review-marriage-values-title">
            <section aria-labelledby="review-values-intro">
              <h2 id="review-values-intro">1. はじめに</h2>
              <p>婚活では、比較しやすい条件に目が向きやすい一方で、生活の感覚や安心感のような要素は後回しになりがちです。迷いがあるときほど、正解を探すのではなく、今の自分が大切にしたいことを言葉にしてみる時間が役立ちます。</p>
            </section>

            <section aria-labelledby="review-values-five-points" className="before-start-points review-values-points">
              <h2 id="review-values-five-points">2. 結婚観を見直すときに考えたい5つのこと</h2>
              <div className="card-grid">
                {reviewPoints.map((point) => (
                  <section className="text-card" key={point.title}>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section aria-labelledby="review-values-conditions">
              <h2 id="review-values-conditions">3. 条件と価値観を分けて考える</h2>
              <p>条件は比較しやすい反面、価値観は言葉にしないと見えにくいものです。どちらか一方だけで決めるのではなく、続けやすい関係性という視点も合わせて考えると、判断の納得感が高まりやすくなります。</p>
              <p>気持ちの整理に時間を取りたいときは、<Link href="/fortune">占い鑑定ページ</Link>を参考にしながら、自分の考え方を落ち着いて見つめ直すのもひとつの方法です。</p>
            </section>

            <section aria-labelledby="review-values-with-diagnosis">
              <h2 id="review-values-with-diagnosis">4. 診断結果と合わせて考える</h2>
              <p>確認したいポイントはタイプによって変わります。慎重に見極めたい人、条件を整理したい人、価値観を大切にしたい人など、それぞれの視点に合わせて見直す順番を変えていくと整理しやすくなります。</p>
              <p><Link href="/diagnosis">10問診断</Link>の結果と合わせて読むことで、今の自分が大切にしたい軸を言葉にしやすくなります。必要に応じて<Link href="/marriage-agencies">結婚相談所ページ</Link>や<Link href="/marriage-apps">婚活アプリページ</Link>も確認すると、次に見たい情報を選びやすくなります。</p>
            </section>

            <section aria-labelledby="review-values-summary">
              <h2 id="review-values-summary">5. まとめ</h2>
              <p>結婚観は一度決めたら終わりではなく、生活の変化に合わせて見直してよいものです。焦って結論を出すより、今の自分に合う考え方を少しずつ言葉にしていくことが、安心して進むための土台になります。</p>
              <p>ほかの視点もあわせて整理したいときは、<Link href="/articles">コラム一覧</Link>に戻って気になるテーマから読んでみてください。</p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
