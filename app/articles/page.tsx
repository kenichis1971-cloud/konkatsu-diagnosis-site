import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "婚活コラム",
  description: "婚活の迷いや選択肢をやさしく整理するコラムページです。",
};

export default function ArticlesPage() {
  return (
    <main>
      <section className="articles-hero" aria-labelledby="articles-hero-title">
        <div className="articles-hero__content">
          <p className="eyebrow">Konkatsu Column</p>
          <h1 id="articles-hero-title">婚活コラム</h1>
          <p>
            婚活の進め方や気持ちの整理に役立つヒントを、やわらかく読みやすい形でお届けします。
          </p>
        </div>
      </section>
    </main>
  );
}
