import Link from "next/link";
import { Hero } from "@/components/Hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "あなたに合う婚活スタイル診断 | 婚活診断サイト",
  description:
    "10問の診断を通して、婚活で大切にしたい価値観や自分に合いそうな進め方をやさしく整理するサイトです。",
  path: "/",
});

const features = [
  {
    title: "気持ちを言葉にする",
    body: "婚活で大切にしたいことや、今の迷いを落ち着いて見つめるきっかけを用意します。",
  },
  {
    title: "選択肢を整理する",
    body: "いろいろな婚活方法を比べる前に、自分に合いそうな進め方を考える土台をつくります。",
  },
  {
    title: "無理なく一歩進む",
    body: "焦らずに、自分のペースで次の行動を考えやすくすることを大切にします。",
  },
];

const siteOverviewItems = [
  {
    title: "10問で婚活スタイルを整理する",
    body: "4択で答えながら、自分に合う進め方を考えるきっかけをつくれます。",
    href: "/diagnosis",
    label: "診断ページを見る",
  },
  {
    title: "婚活コラムで考え方を整理する",
    body: "始める前の不安や迷いを、落ち着いて整理するための読み物です。",
    href: "/articles",
    label: "コラムを読む",
  },
  {
    title: "結婚相談所の比較軸を知る",
    body: "サポートや費用など、比べるときに見たいポイントを整理できます。",
    href: "/marriage-agencies",
    label: "相談所比較を見る",
  },
  {
    title: "婚活アプリ選びの視点を確認する",
    body: "真剣度や費用感など、自分に合うか考えるための視点をまとめています。",
    href: "/marriage-apps",
    label: "アプリ比較を見る",
  },
  {
    title: "占い鑑定で気持ちを見直す",
    body: "タロットや西洋占星術を、自己理解の補助として活用できます。",
    href: "/fortune",
    label: "占い鑑定を見る",
  },
];

const internalLinks = [
  {
    title: "婚活コラム",
    body: "婚活前に、考え方や選択肢を整理するためのコラムです。",
    href: "/articles",
    label: "考え方を整理する",
  },
  {
    title: "結婚相談所比較",
    body: "サポートや費用を比べる前に、自分に合う基準を整えます。",
    href: "/marriage-agencies",
    label: "比較ポイントを見る",
  },
  {
    title: "婚活アプリ比較",
    body: "真剣度・使いやすさ・費用感を、選ぶ前に落ち着いて確認できます。",
    href: "/marriage-apps",
    label: "選ぶ前に確認する",
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
            <p>4択の質問に答えながら、自分に合いそうな進め方を見つめる診断です。</p>
          </div>
          <div className="diagnosis-cta-card__action">
            <Link className="button button--large" href="/diagnosis">
              自分に合う婚活スタイルを見てみる
            </Link>
            <p>所要時間の目安は数分です。気軽に今の考えを整理できます。</p>
          </div>
        </div>
      </section>

      <section className="section section--site-overview" aria-labelledby="site-overview-title">
        <div className="section__inner">
          <p className="eyebrow">Site Overview</p>
          <h2 id="site-overview-title">このサイトでできること</h2>
          <p className="lead">診断を入口に、婚活の考え方と選択肢を少しずつ整理できます。</p>
          <div className="card-grid card-grid--compact">
            {siteOverviewItems.map((item) => (
              <article className="text-card" key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href}>{item.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--internal-links" aria-labelledby="internal-links-title">
        <div className="section__inner">
          <div className="internal-links__header">
            <p className="eyebrow">Next Options</p>
            <h2 id="internal-links-title">診断のあとに、気になるテーマを深められます</h2>
            <p>コラムや比較ページで、次に考えたいことを自然に確認できます。</p>
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

      <section className="section section--soft section--about" aria-labelledby="about-title">
        <div className="section__inner two-column">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-title">比べる前に、まず自分を整える。</h2>
          </div>
          <div className="text-card">
            <p>
              婚活には、出会い方・進め方・距離感など、たくさんの選択肢があります。
              このサイトでは、特定のサービスをすすめるのではなく、希望や不安を整理する補助として診断コンテンツを提供しています。
            </p>
          </div>
        </div>
      </section>

      <section className="section section--features" aria-labelledby="features-title">
        <div className="section__inner">
          <p className="eyebrow">Features</p>
          <h2 id="features-title">安心して使える設計を目指します</h2>
          <div className="card-grid card-grid--compact">
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
