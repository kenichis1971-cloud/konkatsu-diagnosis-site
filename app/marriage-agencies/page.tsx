import Link from "next/link";
import { DiagnosisReturnLink, type DiagnosisReturnSearchParams } from "@/components/DiagnosisReturnLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "結婚相談所比較 | 選ぶ前に整理したいポイント",
  description:
    "結婚相談所を選ぶ前に、サポート内容・費用・活動ペース・比較するときの基準をやさしく整理するページです。",
  path: "/marriage-agencies",
});

const comparisonPoints = [
  {
    title: "サポート重視で選びたい人向け",
    label: "見るポイント",
    body: "担当者とどのくらい相談できるか、紹介後にどんなフォローがあるかを確認し、初めての婚活でも落ち着いて進めやすい体制かを整理する観点です。",
    points: ["担当者との相談頻度", "紹介後の振り返りや連絡のしやすさ", "プロフィールや活動計画のサポート範囲"],
    fitFor: ["一人で判断しすぎず相談しながら進めたい", "婚活の流れを確認しながら始めたい"],
    memo: "相談できる回数だけでなく、困ったときにどの方法で連絡できるかも見ておくと安心材料を整理しやすくなります。",
  },
  {
    title: "費用を抑えて始めたい人向け",
    label: "費用整理",
    body: "初期費用・月額費用・成婚料の有無を分けて見ながら、活動期間が少し延びても無理なく続けられるかを考える観点です。",
    points: ["初期費用と月額費用", "成婚料や追加費用の有無", "予算内で続けやすい活動期間"],
    fitFor: ["まずは負担を抑えて検討したい", "毎月の支出を見通してから始めたい"],
    memo: "安さだけで決めるのではなく、必要なサポートが含まれているかを合わせて確認すると比較しやすくなります。",
  },
  {
    title: "短期集中で進めたい人向け",
    label: "進め方",
    body: "紹介数、活動ペース、面談頻度を見比べながら、自分がどれくらい時間を使えるかと無理のない予定の組み方を整理する観点です。",
    points: ["月ごとの紹介数や申込みの目安", "面談や振り返りの頻度", "仕事や生活の中で使える時間"],
    fitFor: ["期限を意識しながら計画的に動きたい", "活動時間を先に確保して進めたい"],
    memo: "短期間で進めたい場合も、休むタイミングや振り返る時間を含めて考えると続け方を調整しやすくなります。",
  },
  {
    title: "まずは情報収集したい人向け",
    label: "情報収集",
    body: "資料請求や無料相談でサービス内容を比べ、自分に合う活動スタイルを確認してから次の一歩を考えるための観点です。",
    points: ["資料請求で確認したい基本情報", "無料相談で聞きたいサポート内容", "自分に合う活動スタイルの違い"],
    fitFor: ["すぐに決めず選択肢を整理したい", "相談所の仕組みを知ってから検討したい"],
    memo: "気になる点をメモしてから相談すると、あとで複数の選択肢を落ち着いて比べやすくなります。",
  },
];

const checkItems = [
  "自分はサポートの手厚さをどれくらい求めているか",
  "月々の費用や活動期間をどの程度にしたいか",
  "紹介の数・検索のしやすさ・出会い方の幅をどう見たいか",
  "仕事や生活リズムに合わせて続けやすい進め方か",
];

type MarriageAgenciesPageProps = {
  searchParams?: Promise<DiagnosisReturnSearchParams>;
};

export default async function MarriageAgenciesPage({ searchParams }: MarriageAgenciesPageProps) {
  const params = (await searchParams) ?? {};

  return (
    <main>
      <section className="agencies-hero" aria-labelledby="agencies-title">
        <div className="agencies-hero__overlay" />
        <div className="agencies-hero__content">
          <p className="eyebrow">Information</p>
          <h1 id="agencies-title">
            <span className="agencies-title-line">結婚相談所を選ぶ前に</span>
            <span className="agencies-title-line">整理したいこと</span>
          </h1>
          <p>
            診断結果とあわせて、サポート・費用・出会いの数・進め方などを落ち着いて見比べるための準備ページです。特定サービスの紹介や外部リンクは、今後の掲載に向けて準備中です。
          </p>
        </div>
      </section>

      <div className="page-shell agencies-content-shell">
        <section className="page-card content-area">
          <section className="agencies-overview" aria-labelledby="agencies-overview-title">
            <div>
              <p className="eyebrow">Preparation</p>
              <h2 id="agencies-overview-title">比較する前に、自分の希望をやさしく言葉にする</h2>
              <p>
                結婚相談所には、サポートの手厚さ、費用感、出会いの数、活動ペースなど、見ておきたいポイントがいくつもあります。
                先に自分の希望を整理しておくと、情報を見たときに迷いを少し減らしやすくなります。
              </p>
            </div>
            <div className="agencies-status-card" aria-label="掲載準備状況">
              <span>準備中</span>
              <h3>サービス比較は今後追加予定です</h3>
              <p>
                現時点では、特定の結婚相談所名や外部URLは掲載していません。まずは選び方の観点を整理するページとしてご利用ください。
              </p>
            </div>
          </section>

          <section aria-labelledby="agencies-cards-title">
            <p className="eyebrow">Viewpoints</p>
            <h2 id="agencies-cards-title">比較観点カード</h2>
            <div className="agencies-card-grid">
              {comparisonPoints.map((point) => (
                <article className="agencies-card" key={point.title}>
                  <span>{point.label}</span>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                  <div className="agencies-card__section">
                    <h4>見るポイント</h4>
                    <ul>
                      {point.points.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="agencies-card__section agencies-card__section--soft">
                    <h4>向いている人</h4>
                    <ul>
                      {point.fitFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="agencies-card__memo">確認メモ：{point.memo}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="agencies-checklist" aria-labelledby="agencies-checklist-title">
            <div>
              <p className="eyebrow">Checklist</p>
              <h2 id="agencies-checklist-title">相談所を調べる前のメモ</h2>
              <p>
                気になるサービスを見つけたときに比べやすいよう、次のような観点をメモしておくのがおすすめです。
              </p>
            </div>
            <ul>
              {checkItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="agencies-next-step" aria-labelledby="agencies-next-title">
            <div>
              <p className="eyebrow">With Diagnosis</p>
              <h2 id="agencies-next-title">診断結果と合わせて選択肢を整理する</h2>
              <p>
                まだ自分に合いそうな婚活スタイルがはっきりしていない場合は、10問の診断で大切にしたい価値観や進め方を確認してから、このページの観点を見直してみてください。
                診断結果と合わせて見ると、サポート・費用・活動ペースの優先順位を整理しやすくなります。
              </p>
            </div>
            <Link className="diagnosis-button diagnosis-button--subtle" href="/diagnosis">
              10問診断で整理する
            </Link>
          </section>
          <DiagnosisReturnLink searchParams={params} />
        </section>
      </div>
    </main>
  );
}
