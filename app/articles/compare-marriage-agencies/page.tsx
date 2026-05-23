import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "結婚相談所を比較するときの見方 | 婚活コラム",
  description:
    "結婚相談所を選ぶ前に、サポート内容・費用・活動ペース・相談しやすさ・紹介の仕組みといった比較軸を落ち着いて整理するための記事です。",
  path: "/articles/compare-marriage-agencies",
});

const comparisonPoints = [
  {
    title: "サポートの手厚さ",
    body: "面談の頻度、プロフィール作成のサポート、お見合い後の振り返りなど、どこまで伴走してくれるかを確認します。自分だけで進めたいのか、相談しながら進めたいのかで見方が変わります。",
  },
  {
    title: "費用の内訳",
    body: "入会時・月額・活動中にかかる費用など、合計の見え方をそろえて確認するのがポイントです。金額だけでなく、何に対する費用なのかまで整理しておくと比較しやすくなります。",
  },
  {
    title: "活動ペース",
    body: "平日や休日にどの程度時間を使えるかをふまえて、無理なく続けやすいペースを考えます。短い期間で詰め込むより、生活リズムに合う進め方を選ぶ視点が大切です。",
  },
  {
    title: "相談しやすさ",
    body: "困ったときに連絡しやすいか、相談方法が合っているか、担当者との距離感が心地よいかなどは、続けやすさに関わります。体験時の印象もあわせて見ておくと安心です。",
  },
  {
    title: "紹介や出会い方の仕組み",
    body: "紹介の方法や検索の使い方、活動中の進め方など、出会い方の設計を確認します。自分が大切にしたい条件や価値観を反映しやすい仕組みかどうかを見ておきましょう。",
  },
];

export default function CompareMarriageAgenciesArticlePage() {
  return (
    <main>
      <section className="review-values-hero" aria-labelledby="compare-marriage-agencies-title">
        <picture className="review-values-hero__picture">
          <source media="(max-width: 780px)" srcSet="/images/articles-compare-marriage-agencies-hero-mobile.png" />
          <img
            className="review-values-hero__image"
            src="/images/articles-compare-marriage-agencies-hero-desktop.png"
            alt=""
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="review-values-hero__overlay" aria-hidden="true" />
        <div className="review-values-hero__content">
          <p className="eyebrow">Article</p>
          <h1 id="compare-marriage-agencies-title" className="review-values-title">
            結婚相談所を
            <br />
            比較するときの見方
          </h1>
          <p className="review-values-lead">
            結婚相談所を比較するときは、先にサービス名を並べるよりも、まず比較軸を整理しておくと落ち着いて判断しやすくなります。
            このページでは、比較前に確認しておきたい視点をやわらかくまとめます。
          </p>
        </div>
      </section>

      <div className="page-shell review-values-shell">
        <article className="page-card content-area review-values-article" aria-labelledby="compare-marriage-agencies-title">
          <section aria-labelledby="compare-marriage-agencies-intro">
              <h2 id="compare-marriage-agencies-intro">1. はじめに</h2>
              <p>
                結婚相談所は、サポートの受け方や活動の進め方がそれぞれ異なります。最初に比較軸を持っておくことで、情報が増えても迷いにくくなり、自分に合う確認先を選びやすくなります。
              </p>
            </section>

          <section aria-labelledby="compare-marriage-agencies-five-points" className="review-values-points">
              <h2 id="compare-marriage-agencies-five-points">2. 比較前に見ておきたい5つのポイント</h2>
              <div className="card-grid">
                {comparisonPoints.map((point) => (
                  <section className="text-card" key={point.title}>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </section>
                ))}
              </div>
              <p>
                それぞれのポイントを一度言葉にしたうえで、
                <Link href="/marriage-agencies">結婚相談所ページ</Link>
                の比較情報を見ると、必要な情報を拾いやすくなります。
              </p>
            </section>

          <section aria-labelledby="compare-marriage-agencies-cost-balance">
              <h2 id="compare-marriage-agencies-cost-balance">3. 費用だけで決めない方がよい理由</h2>
              <p>
                費用は大切な判断材料ですが、安い・高いだけで決めると、あとから必要なサポートとのズレを感じることがあります。
                自分が必要としているサポート量と、費用のバランスを一緒に見ていく視点が役立ちます。
              </p>
            </section>

          <section aria-labelledby="compare-marriage-agencies-with-diagnosis">
              <h2 id="compare-marriage-agencies-with-diagnosis">4. 診断結果と合わせて考える</h2>
              <p>
                確認したいポイントは人によって変わります。慎重に見極めたい人、短期集中で進めたい人、条件整理をしたい人など、タイプによって重視する項目は異なります。
              </p>
              <p>
                <Link href="/diagnosis">10問診断</Link>
                の結果と合わせて読むと、自分に必要なサポート量や確認順を整理しやすくなります。必要に応じて
                <Link href="/articles">コラム一覧</Link>
                から他のテーマもあわせて確認してみてください。
              </p>
            </section>

          <section aria-labelledby="compare-marriage-agencies-summary">
              <h2 id="compare-marriage-agencies-summary">5. まとめ</h2>
              <p>
                比較を始める前に、まずは自分の比較軸を言葉にすることが大切です。軸がある状態で情報を見ると、落ち着いて判断しやすくなります。
                あわてて結論を出すより、今の自分に合う確認先を順番に選んでいきましょう。
              </p>
          </section>
        </article>
      </div>
    </main>
  );
}
