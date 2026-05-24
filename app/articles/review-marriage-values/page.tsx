import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "結婚観を見直したいときに考えること | 婚活コラム",
  description:
    "結婚観を見直したいときに、条件だけでなく生活・価値観・安心感・将来の過ごし方をやさしく整理するためのコラムです。",
  path: "/articles/review-marriage-values",
});

const reviewPoints = [
  {
    title: "どんな生活を心地よいと感じるか",
    body: "朝と夜の過ごし方、休日の使い方、会話のテンポなど、日常の小さな場面に目を向けると、自分に合う暮らしの輪郭が見えやすくなります。",
  },
  {
    title: "何を大切にしている人と過ごしたいか",
    body: "金銭感覚、思いやりの伝え方、約束への向き合い方など、相手に求める条件とは別に『一緒にいると安心しやすい価値観』を言葉にしてみます。",
  },
  {
    title: "ひとりの時間とふたりの時間のバランス",
    body: "ずっと一緒にいることだけが理想とは限りません。自分の時間をどう確保したいかを整理すると、無理の少ない関係性を考えやすくなります。",
  },
  {
    title: "家族や仕事との向き合い方",
    body: "結婚後の暮らしでは、ふたりだけでなく家族や仕事との距離感も大切になります。現時点での優先順位を話せる形にしておくと、迷いが減りやすくなります。",
  },
  {
    title: "将来の不安をどう分かち合いたいか",
    body: "不安があること自体は自然です。気持ちを閉じ込めるのではなく、どんな伝え方なら安心できるかを考えることが、長く続けやすい関係性のヒントになります。",
  },
];

export default function ReviewMarriageValuesArticlePage() {
  return (
    <main>
      <section className="review-values-hero review-marriage-values-hero" aria-labelledby="review-values-title">
        <picture className="review-marriage-values-hero__image">
          <source media="(max-width: 780px)" srcSet="/images/articles-review-marriage-values-hero-mobile.png" />
          <img src="/images/articles-review-marriage-values-hero-desktop.png" alt="" />
        </picture>
        <div className="review-values-hero__content review-marriage-values-hero__content">
          <p className="eyebrow">Article</p>
          <h1 id="review-values-title" className="review-values-title">結婚観を見直したい時に考える事</h1>
          <p className="review-values-lead">
            婚活を続けていると、条件だけでは答えを出しにくい迷いが生まれることがあります。そんなときは、自分がどんな暮らしや関係を心地よいと感じるのかを、あらためて言葉にしてみることが、気持ちを整理するきっかけになります。
          </p>
        </div>
      </section>

      <div className="page-shell review-values-shell review-marriage-values-shell">
        <article className="page-card content-area review-values-article" aria-labelledby="review-values-title">
          <section aria-labelledby="review-values-intro">
            <h2 id="review-values-intro">1. はじめに</h2>
            <p>
              婚活では、条件を整理することも大切ですが、それだけでは気持ちが決めきれない場面もあります。
              迷いをなくすことよりも、今の自分が大切にしたい軸を少しずつ言葉にすることが、次の選択を考える土台になります。
            </p>
          </section>

          <section aria-labelledby="review-values-five-points" className="review-values-points">
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
            <p>
              条件は比較しやすく、整理もしやすい要素です。一方で価値観は、言葉にしないと自分でも気づきにくいことがあります。
            </p>
            <p>
              条件だけで決めるのではなく、毎日を続けていく関係性をどう育てたいかも合わせて考えると、選ぶ視点がやさしく広がります。
            </p>
          </section>

          <section aria-labelledby="review-values-with-diagnosis">
            <h2 id="review-values-with-diagnosis">4. 診断結果と合わせて考える</h2>
            <p>
              <Link href="/diagnosis">10問4択の診断</Link>
              と合わせて見ると、自分がどこで迷いやすいか、どんな進め方が合いやすいかを整理しやすくなります。
            </p>
            <p>
              たとえば、慎重に見極めたい人・条件を整理したい人・価値観を大切にしたい人など、タイプによって確認したい点は少しずつ変わります。
              気持ちをゆるやかに整えたいときは、<Link href="/fortune">占い鑑定ページ</Link>を読み物として参考にするのもひとつの方法です。
            </p>
          </section>

          <section aria-labelledby="review-values-summary">
            <h2 id="review-values-summary">5. まとめ</h2>
            <p>
              結婚観は、一度決めたら終わりではありません。状況や気持ちが変わる中で、今の自分に合う考え方に見直していくことも自然な流れです。
            </p>
            <p>
              整理した内容を持って、<Link href="/articles">コラム一覧へ戻る</Link>と、次に読みたいテーマを選びやすくなります。
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
