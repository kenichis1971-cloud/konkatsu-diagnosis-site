import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "婚活で疲れたときの気持ちの整え方 | 婚活コラム",
  description:
    "婚活で疲れを感じたときに、無理に前向きになるのではなく、休み方・比較との距離・活動量の見直しをやさしく整理するための記事です。",
  path: "/articles/when-marriage-activities-feel-tiring",
});

const fatigueReasons = [
  {
    title: "比較が続いてしまう",
    body: "他の人の進み方や周囲の話を見聞きする機会が増えると、自分の現在地を必要以上に気にしやすくなります。比較の時間が長くなるほど、気持ちの余白が減りやすくなります。",
  },
  {
    title: "結果を急ぎすぎてしまう",
    body: "早く答えを出したい気持ちは自然ですが、急ぐほど小さな迷いにも強い不安を感じやすくなります。気持ちの整理より先に判断を重ねると、疲れが積み重なりやすくなります。",
  },
  {
    title: "連絡や予定調整の負担が重なる",
    body: "日々の連絡や日程調整が続くと、婚活以外の生活とのバランスが取りにくくなることがあります。忙しさが続く時期は、心身の疲れに気づきにくいこともあります。",
  },
  {
    title: "『進めなきゃ』が強くなる",
    body: "自分の気持ちよりも『止まってはいけない』という感覚が強くなると、納得感より義務感が前に出やすくなります。そうした状態は、迷いを大きく感じる原因にもなります。",
  },
];

const resetActions = [
  {
    title: "一度、活動量を減らしてみる",
    body: "予定を詰め込みすぎているときは、まず予定数を少しだけ減らしてみましょう。気持ちに余白が戻ると、次に何を大切にしたいかを考えやすくなります。",
  },
  {
    title: "会う人数や連絡頻度を見直す",
    body: "自分に合う頻度は人によって異なります。やり取りの量を少し調整するだけでも、負担感が和らぎ、丁寧に向き合える感覚を取り戻しやすくなります。",
  },
  {
    title: "希望を短い言葉で書き出す",
    body: "『安心して話せる関係がいい』『生活リズムを大切にしたい』など、今の希望を短く言葉にしておくと、判断の基準がはっきりしやすくなります。",
  },
  {
    title: "出来事と自分の価値を結びつけすぎない",
    body: "うまくいかなかった経験があっても、それだけで自分の価値が決まるわけではありません。出来事をひとつずつ切り分けて受け止めると、気持ちの回復につながりやすくなります。",
  },
  {
    title: "必要なら休む日をつくる",
    body: "立ち止まることは後退ではなく、整え直す時間です。休む日を先に決めておくと、安心して続けるためのリズムをつくりやすくなります。",
  },
];

export default function MarriageActivityFatigueArticlePage() {
  return (
    <main>
      <section className="review-values-hero review-fatigue-hero" aria-labelledby="marriage-fatigue-title">
        <picture className="review-fatigue-hero__image">
          <source media="(max-width: 780px)" srcSet="/images/articles-when-marriage-activities-feel-tiring-hero-mobile.png" />
          <img src="/images/articles-when-marriage-activities-feel-tiring-hero-desktop.png" alt="" />
        </picture>
        <div className="review-values-hero__content review-fatigue-hero__content">
          <p className="eyebrow">Article</p>
          <h1 id="marriage-fatigue-title" className="review-values-title">婚活で疲れた時の気持ちの整え方</h1>
          <p className="review-values-lead">
            婚活を続けていると、疲れや迷いを感じる時期があります。無理に前向きになるより、いまの気持ちと活動のペースをやさしく整えることが、次の一歩を選ぶ助けになります。
          </p>
        </div>
      </section>

      <div className="page-shell review-values-shell review-fatigue-shell">
        <article className="page-card content-area review-values-article" aria-labelledby="marriage-fatigue-title">
          <section aria-labelledby="marriage-fatigue-intro">
            <h2 id="marriage-fatigue-intro">1. はじめに</h2>
            <p>
              婚活で疲れたり迷ったりすることは、特別なことではありません。頑張ってきたからこそ、少し立ち止まって整理したくなる時期は自然に訪れます。
            </p>
            <p>
              そんなときは答えを急ぐより、いまの心の負担や活動の量を見直すことが大切です。整える時間を持つことで、納得しながら進める感覚を取り戻しやすくなります。
            </p>
          </section>

          <section aria-labelledby="marriage-fatigue-reasons">
            <h2 id="marriage-fatigue-reasons">2. 婚活で疲れやすくなる理由</h2>
            <div className="card-grid">
              {fatigueReasons.map((reason) => (
                <section className="text-card" key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="marriage-fatigue-actions">
            <h2 id="marriage-fatigue-actions">3. 気持ちを整えるためにできること</h2>
            <div className="card-grid">
              {resetActions.map((action) => (
                <section className="text-card" key={action.title}>
                  <h3>{action.title}</h3>
                  <p>{action.body}</p>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="marriage-fatigue-with-diagnosis">
            <h2 id="marriage-fatigue-with-diagnosis">4. 診断結果と合わせて考える</h2>
            <p>
              気持ちの整え方は、慎重に見極めたい時期なのか、自信を取り戻したい時期なのか、再スタートしたい時期なのかで少しずつ変わります。
            </p>
            <p>
              <Link href="/diagnosis">10問4択の診断</Link>は、答えを決めつけるためではなく、いまの自分の状態を言葉にする参考として活用できます。
              さらに気持ちをやわらかく整えたいときは、<Link href="/fortune">占い鑑定ページ</Link>を読みものとして確認するのもひとつの方法です。
            </p>
          </section>

          <section aria-labelledby="marriage-fatigue-summary">
            <h2 id="marriage-fatigue-summary">5. まとめ</h2>
            <p>
              婚活で疲れたときは、無理に答えを出すより、自分のペースを見直すことが大切です。休むこと、比べすぎないこと、活動量を整えることは、続けるための前向きな準備になります。
            </p>
            <p>
              いまの気持ちを整理したうえで、<Link href="/articles">コラム一覧へ戻る</Link>と、次に読みたいテーマを選びやすくなります。
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
