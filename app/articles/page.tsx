import { DiagnosisReturnLink, type DiagnosisReturnSearchParams } from "@/components/DiagnosisReturnLink";

export const metadata = {
  title: "婚活コラム",
  description: "婚活の考え方や出会い方を、自分らしく整理するためのコラムページです。",
};

const articleCards = [
  {
    title: "婚活で大切にしたい価値観を整理する",
    body: "出会い方を選ぶ前に、安心できる距離感や将来像を言葉にしておくと、判断に迷いにくくなります。",
  },
  {
    title: "自分に合うペースを見つける",
    body: "焦って行動量だけを増やすのではなく、続けやすい頻度や休み方を決めておくことも大切です。",
  },
  {
    title: "出会いの選択肢を比べる前に",
    body: "婚活サービスや紹介の形を比べるときは、目的・安全性・サポートの有無を落ち着いて確認しましょう。",
  },
];

type ArticlesPageProps = {
  searchParams?: Promise<DiagnosisReturnSearchParams>;
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const params = (await searchParams) ?? {};

  return (
    <main>
      <section className="articles-hero" aria-labelledby="articles-title">
        <picture className="articles-hero__picture">
          <source media="(max-width: 780px)" srcSet="/images/articles-hero-mobile.jpg" />
          <img src="/images/articles-hero-desktop.jpg" alt="" className="articles-hero__image" />
        </picture>
        <div className="articles-hero__overlay" />
        <div className="articles-hero__content">
          <p className="eyebrow">Konkatsu Column</p>
          <h1 id="articles-title">婚活コラム</h1>
          <p>
            婚活で迷いやすい考え方、出会い方の選び方、自分らしい進め方を整理するための読みものをまとめています。
          </p>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="articles-list-title">
        <div className="section__inner">
          <DiagnosisReturnLink searchParams={params} />
          <p className="eyebrow">Articles</p>
          <h2 id="articles-list-title">婚活を落ち着いて考えるヒント</h2>
          <div className="card-grid">
            {articleCards.map((article) => (
              <article className="text-card" key={article.title}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
