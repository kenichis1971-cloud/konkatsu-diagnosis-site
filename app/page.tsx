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

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Konkatsu Diagnosis"
        title="婚活の迷いを、やさしく整理する診断サイト"
        description="結婚や婚活について考えはじめたとき、自分に合う進め方や大切にしたい価値観を見つめるための診断サイトです。"
        ctaHref="/diagnosis"
        ctaLabel="診断ページを見る"
      />

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
