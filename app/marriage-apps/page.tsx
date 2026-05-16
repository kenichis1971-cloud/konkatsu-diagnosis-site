import Link from "next/link";

export const metadata = {
  title: "婚活アプリ比較の準備ページ",
  description:
    "婚活アプリを選ぶ前に、真剣度・使いやすさ・費用・価値観などの比較観点をやさしく整理する準備ページです。",
};

const comparisonCards = [
  {
    title: "真剣度を重視したい人向け",
    label: "比較予定",
    body: "プロフィール項目の深さ、本人確認の考え方、結婚への温度感を確認しやすいかなど、落ち着いて活動したい人のための観点です。",
  },
  {
    title: "まずは気軽に始めたい人向け",
    label: "準備中",
    body: "登録までのわかりやすさ、操作のしやすさ、日常のすきま時間で無理なく見直せるかを整理する観点です。",
  },
  {
    title: "費用を抑えて試したい人向け",
    label: "比較予定",
    body: "無料で確認できる範囲、有料プランの考え方、継続しやすい予算感を分けて見ていくための観点です。",
  },
  {
    title: "価値観や結婚観を重視したい人向け",
    label: "準備中",
    body: "希望する暮らし方、家族観、活動ペースなど、自分らしい婚活スタイルと照らし合わせるための観点です。",
  },
];

const checklistItems = [
  "真剣度・使いやすさ・費用のうち、今いちばん大切にしたい軸はどれか",
  "プロフィールや条件だけでなく、価値観や結婚観も確認したいか",
  "短い時間で進めたいか、時間をかけて少しずつ整理したいか",
  "結婚相談所のサポートと比べて、自分で進める範囲をどう考えるか",
];

const differenceItems = [
  {
    title: "婚活アプリ",
    body: "自分のペースで情報を見ながら進めやすい一方で、比較軸や確認したいことを自分で整理しておくと判断しやすくなります。",
  },
  {
    title: "結婚相談所",
    body: "担当者のサポートや面談を活用しながら進めやすい一方で、費用感やサポート範囲を事前に確認しておくことが大切です。",
  },
];

export default function MarriageAppsPage() {
  return (
    <main>
      <section className="apps-hero" aria-labelledby="apps-title">
        <div className="apps-hero__content">
          <p className="eyebrow">Marriage Apps</p>
          <h1 id="apps-title">
            <span className="apps-title-line">婚活アプリを選ぶ前に</span>
            <span className="apps-title-line">整理したいこと</span>
          </h1>
          <p>
            診断結果とあわせて、真剣度・使いやすさ・費用・価値観などの比較軸をやさしく整理するための準備ページです。特定サービス名や外部URLは、今後の掲載に向けて準備中です。
          </p>
        </div>
      </section>

      <div className="page-shell apps-content-shell">
        <section className="page-card content-area">
          <section className="apps-overview" aria-labelledby="apps-overview-title">
            <div>
              <p className="eyebrow">Preparation</p>
              <h2 id="apps-overview-title">比較する前に、自分の優先順位をゆっくり確認する</h2>
              <p>
                婚活アプリは、サービスごとに雰囲気や使い方、費用の考え方が異なります。
                先に自分が大切にしたい軸を言葉にしておくと、情報を見たときに選択肢を整理しやすくなります。
              </p>
            </div>
            <div className="apps-status-card" aria-label="掲載準備状況">
              <span>準備中</span>
              <h3>サービス比較は今後追加予定です</h3>
              <p>
                現時点では、特定の婚活アプリ名や外部URLは掲載していません。まずは選び方の観点を整理するページとしてご利用ください。
              </p>
            </div>
          </section>

          <section aria-labelledby="apps-cards-title">
            <p className="eyebrow">Viewpoints</p>
            <h2 id="apps-cards-title">比較観点カード</h2>
            <div className="apps-card-grid">
              {comparisonCards.map((card) => (
                <article className="apps-card" key={card.title}>
                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="apps-checklist" aria-labelledby="apps-checklist-title">
            <div>
              <p className="eyebrow">Checklist</p>
              <h2 id="apps-checklist-title">婚活アプリを調べる前のメモ</h2>
              <p>
                気になる情報を見比べる前に、次のような観点をメモしておくと、自分に合う婚活スタイルを考えやすくなります。
              </p>
            </div>
            <ul>
              {checklistItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="apps-difference" aria-labelledby="apps-difference-title">
            <div>
              <p className="eyebrow">Style</p>
              <h2 id="apps-difference-title">結婚相談所との違いも一緒に整理する</h2>
              <p>
                どちらが良いと決めつけるのではなく、サポートの受け方や費用感、進めるペースの違いを見ながら、自分に合う選択肢を考えるための土台にします。
              </p>
            </div>
            <div className="apps-difference-grid">
              {differenceItems.map((item) => (
                <article className="apps-difference-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="apps-next-step" aria-labelledby="apps-next-title">
            <div>
              <p className="eyebrow">With Diagnosis</p>
              <h2 id="apps-next-title">診断結果と合わせて選択肢を整理する</h2>
              <p>
                まだ自分に合いそうな婚活スタイルがはっきりしていない場合は、10問の診断で大切にしたい価値観や進め方を確認してから、このページの観点を見直してみてください。
              </p>
            </div>
            <Link className="diagnosis-button diagnosis-button--subtle" href="/diagnosis">
              10問診断で整理する
            </Link>
          </section>
        </section>
      </div>
    </main>
  );
}
