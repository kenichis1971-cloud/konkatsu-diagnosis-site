import Link from "next/link";
import { DiagnosisReturnLink, type DiagnosisReturnSearchParams } from "@/components/DiagnosisReturnLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "占い鑑定・結婚観整理 | 婚活の迷いを見直す準備ページ",
  description:
    "婚活診断だけでは整理しきれない気持ちや結婚観を、占い鑑定や個別相談の観点からやさしく見直す準備ページです。",
  path: "/fortune",
});

const fortuneMenus = [
  {
    title: "タロットで今の気持ちを整理する",
    label: "準備中",
    body: "今の迷いや相手との向き合い方、自分でも言葉にしきれていない本音を、カードの象徴を手がかりに整理するメニュー候補です。未来を決めつけるのではなく、考えを落ち着いて見直す補助として準備しています。",
    organize: [
      "今いちばん引っかかっている気持ち",
      "相手との距離感や向き合い方",
      "次に確認したい自分の本音",
    ],
    suitedFor: [
      "気持ちが揺れていて、まず整理したい人",
      "答えを急がず、考える材料がほしい人",
    ],
  },
  {
    title: "西洋占星術で恋愛・結婚傾向を見る",
    label: "受付準備中",
    body: "生まれ持った恋愛傾向や結婚観、安心しやすい関係性を、星の配置を参考に見直すメニュー候補です。金星・月・太陽などの基本的な要素から、無理のない関わり方をやさしく整理します。",
    organize: [
      "恋愛で大切にしやすい価値観",
      "結婚生活で安心しやすい関係性",
      "自分らしく続けやすい婚活ペース",
    ],
    suitedFor: [
      "恋愛や結婚の傾向を客観的に見たい人",
      "相性よりも自分の安心感を理解したい人",
    ],
  },
  {
    title: "結婚観を見直す鑑定",
    label: "準備中",
    body: "相手に求める条件だけでなく、生活観・安心感・将来像を一緒に整理するメニュー候補です。診断結果で見えた傾向をもとに、婚活の方向性を見直すための言葉を増やしていきます。",
    organize: [
      "譲れない条件と見直せる条件",
      "日々の暮らし方や生活リズムの希望",
      "将来像に対する安心感や不安の正体",
    ],
    suitedFor: [
      "条件が多くなり、優先順位を整理したい人",
      "結婚後の暮らしを具体的に考えたい人",
    ],
  },
  {
    title: "婚活の進め方を整理する相談",
    label: "受付準備中",
    body: "アプリ、相談所、紹介や自然な出会い、いったん休む選択肢まで、今の状況に合わせて並べ直す相談メニュー候補です。今すぐ決めるためではなく、次の一歩を考えやすくするために準備しています。",
    organize: [
      "今の婚活方法で負担になっていること",
      "試しやすい出会い方と休む選択肢",
      "次の一歩に向けた小さな行動",
    ],
    suitedFor: [
      "複数の進め方で迷っている人",
      "焦らず、自分に合う動き方を考えたい人",
    ],
  },
];

const preparationSteps = [
  "婚活診断の結果を読み返し、気になった言葉をメモする",
  "結婚生活で大切にしたいことを、条件と気持ちに分けて書き出す",
  "相談したいテーマをひとつに絞らず、迷いのまま置いておく",
  "鑑定受付が始まったときに見直せるよう、今の状況を簡単に残しておく",
];

type FortunePageProps = {
  searchParams?: Promise<DiagnosisReturnSearchParams>;
};

export default async function FortunePage({ searchParams }: FortunePageProps) {
  const params = (await searchParams) ?? {};

  return (
    <main>
      <section className="fortune-hero" aria-labelledby="fortune-title">
        <div className="fortune-hero__content">
          <p className="eyebrow">Fortune & Reflection</p>
          <h1 id="fortune-title">
            <span className="fortune-title-line">婚活で迷ったときに</span>
            <span className="fortune-title-line">気持ちと結婚観を整える</span>
          </h1>
          <p>
            診断結果だけでは整理しきれない気持ちや結婚観を、占い鑑定や個別相談の観点からゆっくり見直すための準備ページです。
          </p>
        </div>
      </section>

      <div className="page-shell fortune-content-shell">
        <section className="page-card content-area fortune-content">
          <section className="fortune-overview" aria-labelledby="fortune-overview-title">
            <div>
              <p className="eyebrow">Fortune Menu</p>
              <h2 id="fortune-overview-title">占い鑑定メニューのご案内</h2>
              <p>
                婚活診断の結果だけでは整理しきれない気持ちや迷いがある方へ、公開中のSTORESページで鑑定メニューをご案内しています。
                占い・鑑定は、気持ちの整理や選択肢を考える補助としてご利用ください。
              </p>
            </div>
            <aside className="fortune-status-card" aria-label="受付状況">
              <span>公開中</span>
              <h3>STORESショップでご案内中</h3>
              <p>
                タロット鑑定・西洋占星術・結婚観整理など、気持ちを落ち着いて見直すための鑑定メニューを掲載しています。
              </p>
            </aside>
          </section>

          <section aria-labelledby="fortune-menu-title">
            <p className="eyebrow">Menu Ideas</p>
            <h2 id="fortune-menu-title">鑑定メニュー候補</h2>
            <p>
              どのメニューも結果を断定するものではなく、今の気持ちや結婚観を見直すためのきっかけとして設計していく予定です。
            </p>
            <div className="fortune-card-grid">
              {fortuneMenus.map((menu) => (
                <article className="fortune-card" key={menu.title}>
                  <span>{menu.label}</span>
                  <h3>{menu.title}</h3>
                  <p>{menu.body}</p>
                  <div className="fortune-card__details">
                    <h4>整理できること</h4>
                    <ul>
                      {menu.organize.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="fortune-card__details">
                    <h4>向いている人</h4>
                    <ul>
                      {menu.suitedFor.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="fortune-preparation" aria-labelledby="fortune-preparation-title">
            <div>
              <p className="eyebrow">Before Session</p>
              <h2 id="fortune-preparation-title">受付開始までにできる準備</h2>
              <p>
                鑑定や相談を受ける前に、今の気持ちを少しだけ言葉にしておくと、必要になったときに振り返りやすくなります。
              </p>
            </div>
            <ul>
              {preparationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section className="fortune-note" aria-labelledby="fortune-note-title">
            <p className="eyebrow">Gentle Notice</p>
            <h2 id="fortune-note-title">不安を強めず、自分のペースで見直すために</h2>
            <p>
              占い鑑定や相談は、結婚の結果を約束するものではありません。婚活で感じている迷いや希望を一度整理し、自分に合う選択肢を落ち着いて考えるための補助として準備しています。
            </p>
          </section>

          <section className="fortune-next-step" aria-labelledby="fortune-cta-title">
            <div>
              <p className="eyebrow">Fortune CTA</p>
              <h2 id="fortune-cta-title">気持ち整理の鑑定ページを見る</h2>
              <p>
                必要な方だけ、鑑定メニューをご確認ください。外部のSTORESページへ移動します。
              </p>
            </div>
            <a
              className="diagnosis-button"
              href="https://fortuneteller-lucia.stores.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              外部サイトで鑑定メニューを見る
            </a>
          </section>

          <section className="fortune-next-step" aria-labelledby="fortune-next-title">
            <div>
              <p className="eyebrow">With Diagnosis</p>
              <h2 id="fortune-next-title">まずは診断結果から見直す</h2>
              <p>
                まだ婚活スタイルがはっきりしていない場合は、10問診断で大切にしたい価値観や進め方を確認してから、このページのメニュー候補を見直してみてください。診断結果と合わせて見ると、今の迷いや選択肢を整理しやすくなります。
              </p>
            </div>
            <Link className="diagnosis-button diagnosis-button--subtle" href="/diagnosis">
              10問診断へ戻る
            </Link>
          </section>
          <DiagnosisReturnLink searchParams={params} />
        </section>
      </div>
    </main>
  );
}
