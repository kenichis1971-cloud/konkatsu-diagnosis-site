import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "婚活を始める前に整理したいこと | 婚活コラム",
  description:
    "婚活を始める前に、自分の気持ち・希望・不安・使える時間・費用感を落ち着いて整理するための記事です。診断結果と合わせて次のページを選びやすくします。",
  path: "/articles/before-start",
});

const reflectionPoints = [
  {
    title: "どんな結婚生活を望んでいるか",
    body: "まずは条件だけでなく、どんな毎日を心地よく感じるかを考えてみます。暮らし方や会話の雰囲気、休日の過ごし方などを言葉にすると、婚活の方向性を見直しやすくなります。",
  },
  {
    title: "今の不安は何か",
    body: "不安がある状態は自然なことです。『何が気になっているのか』『どの場面で迷いやすいのか』を分けて書き出すと、必要な情報を選びやすくなります。",
  },
  {
    title: "婚活に使える時間はどれくらいか",
    body: "平日と休日で使える時間は変わります。今の生活リズムの中で無理なく続けられるペースを考えておくと、焦らず進める土台になります。",
  },
  {
    title: "費用をどこまでかけられるか",
    body: "費用感を先に決めておくと、選択肢を比較するときに迷いにくくなります。短期だけでなく、数か月単位でどの程度なら負担なく続けられるかを確認してみましょう。",
  },
  {
    title: "自分に合う進め方は何か",
    body: "サポートを受けながら進めたいのか、自分のペースで進めたいのかを整理しておくと、次に確認するページを選びやすくなります。",
  },
];

export default function BeforeStartArticlePage() {
  return (
    <main>
      <div className="page-shell">
        <article className="page-card content-area" aria-labelledby="before-start-title">
          <p className="eyebrow">Article</p>
          <h1 id="before-start-title">婚活を始める前に整理したいこと</h1>
          <p>
            婚活を始めるときは、いきなり方法を決める前に、まず自分の状態を整える時間が役立ちます。
            気持ちや希望、不安を言葉にしておくと、情報の受け取り方がやわらかくなり、次に見るページも選びやすくなります。
          </p>

          <section aria-labelledby="before-start-intro">
            <h2 id="before-start-intro">1. はじめに</h2>
            <p>
              婚活は選択肢が多いからこそ、最初に『今の自分は何を大切にしたいか』を整理しておくことが大切です。
              先に自分の軸をつくっておくと、あとから情報を見たときにも、必要なものを落ち着いて選びやすくなります。
            </p>
          </section>

          <section aria-labelledby="before-start-five-points">
            <h2 id="before-start-five-points">2. まず整理したい5つのこと</h2>
            <div className="card-grid">
              {reflectionPoints.map((point) => (
                <section className="text-card" key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="before-start-service-view">
            <h2 id="before-start-service-view">3. サービス選びの前に考えたいこと</h2>
            <p>
              結婚相談所、婚活アプリ、コラム、占い鑑定などは、それぞれ役割が異なります。どれかひとつを正解と決めつけるのではなく、今の自分に合う確認先を選ぶことがポイントです。
            </p>
            <p>
              たとえば『まず気持ちを整理したい』のか、『具体的な比較軸を持ちたい』のかで、先に見るページは変わります。
            </p>
          </section>

          <section aria-labelledby="before-start-with-diagnosis">
            <h2 id="before-start-with-diagnosis">4. 診断結果と合わせて見る</h2>
            <p>
              診断結果は、自己理解と選択肢整理の参考として使えるものです。将来を保証するものではありませんが、今の状態を言葉にするきっかけとして活用できます。
            </p>
            <ul>
              <li>
                迷いが大きいときは <Link href="/diagnosis">10問診断</Link> を見直す
              </li>
              <li>
                サポートを受ける選択肢を確認したいときは <Link href="/marriage-agencies">結婚相談所ページ</Link>
              </li>
              <li>
                自分のペースで進める選択肢を確認したいときは <Link href="/marriage-apps">婚活アプリページ</Link>
              </li>
              <li>
                気持ちや結婚観を見直したいときは <Link href="/fortune">占い鑑定ページ</Link>
              </li>
            </ul>
          </section>

          <section aria-labelledby="before-start-summary">
            <h2 id="before-start-summary">5. まとめ</h2>
            <p>
              焦って決めるより、まずは自分の優先順位を言葉にすることが大切です。整理した内容をもとに、
              <Link href="/articles">コラム一覧</Link>
              や各ページを順番に見ていくと、次の一歩を選びやすくなります。
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
