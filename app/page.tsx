import Link from "next/link";
import { Hero } from "@/components/Hero";

const features = [
  {
    title: "気持ちを言葉にする",
    body: "婚活で何を大切にしたいのか、今の迷いや不安を落ち着いて見つめるきっかけを用意します。",
  },
  {
    title: "選択肢を整理する",
    body: "いろいろな婚活方法を比べる前に、自分に合いそうな進め方を考えるための土台を作ります。",
  },
  {
    title: "無理なく一歩進む",
    body: "焦りをあおるのではなく、自分のペースで次の行動を考えやすくすることを大切にします。",
  },
];

const internalLinks = [
  {
    title: "婚活コラム",
    body: "婚活を始める前に、考え方や選択肢を整理するためのコラムです。",
    href: "/articles",
    label: "婚活の考え方を整理する",
  },
  {
    title: "結婚相談所比較",
    body: "サポート・費用・進め方を比べる前に、自分に合う基準を整理します。",
    href: "/marriage-agencies",
    label: "相談所を選ぶ前に整理する",
  },
  {
    title: "婚活アプリ比較",
    body: "婚活アプリを選ぶ前に、真剣度・使いやすさ・費用感を整理します。",
    href: "/marriage-apps",
    label: "アプリを選ぶ前に整理する",
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Konkatsu Diagnosis"
        title={
          <>
            <span className="hero__title-line">あなたに合う</span>
            <span className="hero__title-line">婚活スタイル診断</span>
          </>
        }
        description="結婚や婚活について考えはじめたとき、自分に合う進め方や大切にしたい価値観を見つめるための診断サイトです。"
        ctaHref="/diagnosis"
        ctaLabel="まずは10問で診断する"
      />

      <section className="section section--diagnosis-cta" aria-labelledby="diagnosis-cta-title">
        <div className="section__inner diagnosis-cta-card">
          <div className="diagnosis-cta-card__content">
            <p className="eyebrow">10 Questions</p>
            <h2 id="diagnosis-cta-title">10問で婚活スタイルを整理してみませんか</h2>
            <p>
              4択の質問に答えながら、自分に合いそうな出会い方や進め方を見つめる診断です。
              診断結果は、自己理解と選択肢整理の参考として使えます。
            </p>
          </div>
          <div className="diagnosis-cta-card__action">
            <Link className="button button--large" href="/diagnosis">
              自分に合う婚活スタイルを見てみる
            </Link>
            <p>所要時間の目安は数分です。気軽に今の考えを整理できます。</p>
          </div>
        </div>
      </section>

      <section className="section section--internal-links" aria-labelledby="internal-links-title">
        <div className="section__inner">
          <div className="internal-links__header">
            <p className="eyebrow">Next Options</p>
            <h2 id="internal-links-title">診断のあとに、選択肢をもう少し整理できます</h2>
            <p>
              診断だけで終わらず、婚活の考え方やサービス選びの基準を落ち着いて確認できるページを用意しています。
              今の状況に合わせて、気になるテーマから見てみてください。
            </p>
          </div>
          <div className="internal-link-grid">
            {internalLinks.map((item) => (
              <Link className="internal-link-card" href={item.href} key={item.href}>
                <article>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span>{item.label}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="about-title">
        <div className="section__inner two-column">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-title">比べる前に、まず自分を整える。</h2>
          </div>
          <div className="text-card">
            <p>
              婚活には、出会い方・進め方・距離感など、たくさんの選択肢があります。
              このサイトでは、特定のサービスをすすめるのではなく、あなた自身の希望や不安を整理する補助として診断コンテンツを提供していきます。
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="section__inner">
          <p className="eyebrow">Features</p>
          <h2 id="features-title">安心して使える設計を目指します</h2>
          <div className="card-grid">
            {features.map((feature) => (
              <article className="text-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
