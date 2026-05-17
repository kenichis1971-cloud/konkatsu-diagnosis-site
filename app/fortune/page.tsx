import Link from "next/link";
import type { Metadata } from "next";
import { DiagnosisReturnLink, type DiagnosisReturnSearchParams } from "@/components/DiagnosisReturnLink";

export const metadata: Metadata = {
  title: "婚活占い・結婚観整理の準備ページ",
  description:
    "婚活診断の結果だけでは整理しきれない気持ちや結婚観を、タロット・西洋占星術・個別相談の観点からやさしく見直すための準備ページです。",
};

const fortuneMenus = [
  {
    title: "タロットで今の気持ちを整理する",
    label: "準備中",
    body: "婚活中に揺れやすい気持ちや、今の自分が大切にしたいことを、カードの象徴を手がかりに言葉へ整えていく鑑定メニュー候補です。",
    points: [
      "今の気持ちを落ち着いて見直したい",
      "迷いの背景にある価値観を整理したい",
      "次に考えたいことをやさしく確認したい",
    ],
  },
  {
    title: "西洋占星術で恋愛・結婚傾向を見る",
    label: "受付前",
    body: "生まれ持った性質や人との関わり方の傾向を参考に、恋愛や結婚に向き合うときの自分らしいペースを見直すメニュー候補です。",
    points: [
      "恋愛や結婚への向き合い方を知りたい",
      "無理なく続けやすい婚活ペースを考えたい",
      "自分の強みや安心しやすい関係性を整理したい",
    ],
  },
  {
    title: "結婚観を見直す鑑定",
    label: "準備中",
    body: "条件や理想だけでなく、暮らし方・家族観・お金や仕事とのバランスなど、結婚にまつわる大切な軸を見直すメニュー候補です。",
    points: [
      "譲れないことと柔軟に考えたいことを分けたい",
      "将来の暮らし方を具体的に言葉にしたい",
      "診断結果を個別の結婚観に落とし込みたい",
    ],
  },
  {
    title: "婚活の進め方を整理する相談",
    label: "受付前",
    body: "相談所・アプリ・紹介・休むタイミングなど、今後の進め方に迷ったときに選択肢を並べて考えるための個別相談メニュー候補です。",
    points: [
      "次に進む方法を一度整理したい",
      "今の活動ペースが合っているか見直したい",
      "焦りすぎず、自分に合う選択肢を考えたい",
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
              <p className="eyebrow">Coming Soon</p>
              <h2 id="fortune-overview-title">占い鑑定・結婚観整理メニューは準備中です</h2>
              <p>
                現在は受付前のため、外部販売ページや決済ページへのリンクは設置していません。今後、婚活診断の結果を見たあとに、より個別の気持ちや価値観を見直せる導線として整えていく予定です。
              </p>
            </div>
            <aside className="fortune-status-card" aria-label="受付状況">
              <span>準備中</span>
              <h3>今後追加予定の内容</h3>
              <p>
                タロット鑑定・西洋占星術・結婚観整理・婚活の迷い整理など、自己理解を深めるためのメニュー候補を検討しています。
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
                    <h4>こんな整理に</h4>
                    <ul>
                      {menu.points.map((point) => (
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

          <section className="fortune-next-step" aria-labelledby="fortune-next-title">
            <div>
              <p className="eyebrow">With Diagnosis</p>
              <h2 id="fortune-next-title">まずは診断結果から見直す</h2>
              <p>
                まだ婚活スタイルがはっきりしていない場合は、10問診断で大切にしたい価値観や進め方を確認してから、このページのメニュー候補を見直してみてください。
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
