import Link from "next/link";
import { DiagnosisReturnLink, type DiagnosisReturnSearchParams } from "@/components/DiagnosisReturnLink";

export const metadata = {
  title: "結婚相談所比較の準備ページ",
  description:
    "結婚相談所を選ぶ前に、サポート・費用・出会いの数・進め方などの比較観点をやさしく整理する準備ページです。",
};

const comparisonPoints = [
  {
    title: "サポート重視で選びたい人向け",
    label: "比較予定",
    body: "担当者との相談頻度、プロフィール作成の手伝い、活動中の振り返りなど、伴走してもらえる範囲を整理する観点です。",
  },
  {
    title: "費用を抑えて始めたい人向け",
    label: "準備中",
    body: "初期費用・月会費・活動中にかかる費用などを分けて確認し、無理なく続けやすい予算感を考える観点です。",
  },
  {
    title: "短期集中で進めたい人向け",
    label: "比較予定",
    body: "活動ペース、紹介や申込みのしやすさ、面談のタイミングなど、限られた期間で動きやすい環境を見比べる観点です。",
  },
  {
    title: "まずは情報収集したい人向け",
    label: "準備中",
    body: "資料請求や無料相談で確認したいことをまとめ、すぐに決めずに選択肢を落ち着いて把握するための観点です。",
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
