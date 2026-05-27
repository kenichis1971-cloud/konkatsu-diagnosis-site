import Link from "next/link";
import { DiagnosisReturnLink, type DiagnosisReturnSearchParams } from "@/components/DiagnosisReturnLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "婚活アプリ比較 | 使う前に整理したいポイント",
  description:
    "婚活アプリ・マッチングアプリを比較する前に、真剣度・年齢層・費用感・使いやすさ・安全性などを整理するページです。",
  path: "/marriage-apps",
});

const comparisonCards = [
  {
    title: "真剣度",
    label: "比較軸",
    body: "婚活向きの利用者が多いか、恋活寄りの使い方が中心かを確認しておくと、目的とのズレを減らしやすくなります。",
    pointsTitle: "確認ポイント",
    points: [
      "利用目的（婚活・恋活）がプロフィールや案内で分かるか",
      "結婚時期の希望など、将来に関する項目を確認しやすいか",
      "自分の活動目的と、サービス全体の雰囲気に差がないか",
    ],
  },
  {
    title: "年齢層",
    label: "比較軸",
    body: "自分の年代に近い利用者が多いかどうかは、やり取りのしやすさや話題の合いやすさに関わるポイントです。",
    pointsTitle: "確認ポイント",
    points: [
      "主要な利用年齢層が公開されているか",
      "自分の年齢帯で無理なく出会いの候補を探せそうか",
      "年代別の検索や絞り込みが使いやすいか",
    ],
  },
  {
    title: "費用感",
    label: "比較軸",
    body: "無料でできる範囲と有料で広がる範囲を分けて見て、続けられる予算かどうかを考えておくと安心です。",
    pointsTitle: "確認ポイント",
    points: [
      "無料で確認できる機能と、有料機能の違い",
      "月額費用・更新単位・追加課金の有無",
      "まず試す期間と、見直しタイミングを決められるか",
    ],
  },
  {
    title: "使いやすさ",
    label: "比較軸",
    body: "登録から検索、メッセージまでの流れが自分に合っているかは、無理なく続けるための基本になります。",
    pointsTitle: "確認ポイント",
    points: [
      "画面の見やすさや操作の分かりやすさ",
      "通知頻度や検索条件の調整がしやすいか",
      "生活リズムの中で、負担なく利用できそうか",
    ],
  },
  {
    title: "安全性・本人確認",
    label: "比較軸",
    body: "本人確認、通報、ブロックなどの基本機能を先に確認しておくと、安心して活動しやすくなります。",
    pointsTitle: "確認ポイント",
    points: [
      "本人確認の手順や、年齢確認の案内が明確か",
      "通報・ブロック・サポート窓口の導線が分かりやすいか",
      "利用規約や注意事項を登録前に確認できるか",
    ],
  },
  {
    title: "婚活向きか恋活向きか",
    label: "比較軸",
    body: "どちらかが良い悪いではなく、今の自分の目的に合うかどうかを基準にすると選びやすくなります。",
    pointsTitle: "確認ポイント",
    points: [
      "結婚を意識したプロフィール項目が充実しているか",
      "まずは交流中心で始める設計か、将来の話をしやすい設計か",
      "自分が望むペースで進めやすい雰囲気か",
    ],
  },
];

const checklistItems = [
  "結婚をどのくらい意識して活動したいか",
  "自分の年齢層に合うサービスか",
  "月額費用を無理なく許容できるか",
  "本人確認や通報機能があるか",
  "メッセージのやり取りを無理なく続けられそうか",
  "登録後に見直すタイミング（1か月後など）を決めているか",
];

type MarriageAppsPageProps = {
  searchParams?: Promise<DiagnosisReturnSearchParams>;
};

export default async function MarriageAppsPage({ searchParams }: MarriageAppsPageProps) {
  const params = (await searchParams) ?? {};

  return (
    <main>
      <section className="apps-hero" aria-labelledby="apps-title">
        <div className="apps-hero__content">
          <p className="eyebrow">Marriage Apps</p>
          <h1 id="apps-title">
            <span className="apps-title-line">婚活アプリ・マッチングアプリを</span>
            <span className="apps-title-line">比較する前に整理したいこと</span>
          </h1>
          <p>
            診断結果を見たあとに、次の一歩を落ち着いて考えるためのページです。婚活アプリやマッチングアプリは婚活の選択肢の一つとして、まずは比較軸をやさしく整理していきましょう。
          </p>
        </div>
      </section>

      <div className="page-shell apps-content-shell">
        <section className="page-card content-area">
          <section className="apps-overview" aria-labelledby="apps-overview-title">
            <div>
              <p className="eyebrow">Preparation</p>
              <h2 id="apps-overview-title">比較前に、目的と優先順位を言葉にしておく</h2>
              <p>
                先に「何を重視するか」を決めておくと、情報量が多くても見比べやすくなります。真剣度・年齢層・費用感・使いやすさ・安全性の順に、ひとつずつ確認してみてください。
              </p>
            </div>
            <div className="apps-status-card" aria-label="掲載準備状況">
              <span>準備中</span>
              <h3>婚活アプリ比較リンクは準備中です</h3>
              <p>
                このページでは、外部URLや特定サービスへの案内は掲載していません。まずは比較・検討の土台づくりとしてご利用ください。
              </p>
            </div>
          </section>

          <section aria-labelledby="apps-cards-title">
            <p className="eyebrow">Viewpoints</p>
            <h2 id="apps-cards-title">婚活アプリ・マッチングアプリの比較軸</h2>
            <div className="apps-card-grid apps-card-grid--triple">
              {comparisonCards.map((card) => (
                <article className="apps-card" key={card.title}>
                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <div className="apps-card__details">
                    <h4>{card.pointsTitle}</h4>
                    <ul>
                      {card.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="apps-checklist" aria-labelledby="apps-checklist-title">
            <div>
              <p className="eyebrow">Checklist</p>
              <h2 id="apps-checklist-title">登録前に確認したいポイント</h2>
              <p>
                気になるサービスを見つけたら、登録前に次の項目をチェックしておくと、あとで判断を見直しやすくなります。
              </p>
            </div>
            <ul>
              {checklistItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="apps-next-step" aria-labelledby="apps-next-title">
            <div>
              <p className="eyebrow">Next Step</p>
              <h2 id="apps-next-title">外部リンクではなく、まずは内部ページで整理する</h2>
              <p>
                比較軸を確認したあとに、診断結果の見直しや婚活コラムを読むことで、自分に合う進め方をより具体的に考えやすくなります。
              </p>
            </div>
            <div className="apps-next-step__actions">
              <Link className="diagnosis-button diagnosis-button--subtle" href="/diagnosis">
                まずは診断結果を見直す
              </Link>
              <Link className="diagnosis-button diagnosis-button--subtle" href="/articles">
                婚活コラムを読む
              </Link>
            </div>
          </section>
          <DiagnosisReturnLink searchParams={params} />
        </section>
      </div>
    </main>
  );
}
