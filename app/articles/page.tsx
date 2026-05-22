import Link from "next/link";
import { DiagnosisReturnLink, type DiagnosisReturnSearchParams } from "@/components/DiagnosisReturnLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "婚活コラム | 婚活の選択肢を整理するヒント",
  description:
    "婚活を始める前に、価値観・活動ペース・出会い方の選択肢を落ち着いて整理するためのコラムページです。",
  path: "/articles",
});

const articleCards = [
  {
    status: "公開中",
    title: "婚活を始める前に整理したいこと",
    body: "婚活を始める前に、希望・不安・使える時間を落ち着いて整理するためのコラムです。",
    suitableFor: "何から考え始めるとよいか、順番を決めたい人。",
    relatedLinks: [{ href: "/diagnosis", label: "10問診断と合わせて読む" }],
    href: "/articles/before-start",
  },
  {
    status: "公開中",
    title: "結婚相談所を比較するときの見方",
    body: "サポート内容・費用・活動ペースなど、比較時に見ておきたい軸を整理します。",
    suitableFor: "結婚相談所を比較する前に、基準をそろえたい人。",
    relatedLinks: [{ href: "/marriage-agencies", label: "比較準備ページも見る" }],
    href: "/articles/compare-marriage-agencies",
  },
  {
    status: "公開中",
    title: "婚活アプリを使う前に考えたいこと",
    body: "使いやすさ・費用感・距離感など、始める前に確認したいポイントをまとめています。",
    suitableFor: "自分のペースで進めつつ、安心面も確認したい人。",
    relatedLinks: [{ href: "/marriage-apps", label: "比較準備ページも見る" }],
    href: "/articles/before-using-marriage-apps",
  },
  {
    status: "公開中",
    title: "結婚観を見直したいときに考えること",
    body: "条件だけでなく、暮らし方や価値観を含めて結婚観を見直すヒントを整理します。",
    suitableFor: "条件と日々の暮らしで大切にしたいことを分けて考えたい人。",
    relatedLinks: [{ href: "/diagnosis", label: "10問診断で軸を整理する" }],
    href: "/articles/review-marriage-values",
  },
  {
    status: "公開中",
    title: "婚活で疲れたときの気持ちの整え方",
    body: "婚活に疲れを感じたとき、少し立ち止まって気持ちを整える考え方を扱います。",
    suitableFor: "情報や予定が多く、気持ちを整える時間を取りたい人。",
    relatedLinks: [{ href: "/diagnosis", label: "診断結果と合わせて見直す" }],
    href: "/articles/when-marriage-activities-feel-tiring",
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
          <p className="eyebrow">Articles</p>
          <h2 id="articles-list-title">公開中のコラム（5本）</h2>
          <p className="articles-list-intro">まずは気になるテーマから1本読むか、診断結果に近いテーマから選ぶのがおすすめです。</p>
          <div className="card-grid articles-card-grid">
            {articleCards.map((article) => (
              <article className="text-card article-card article-card--published" key={article.title}>
                <p className="eyebrow article-card__status">{article.status}</p>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <h4>こんな人に向いています</h4>
                <p>{article.suitableFor}</p>
                <p>
                  <Link className="article-card-link" href={article.href}>
                    この記事を読む
                  </Link>
                </p>
                <div className="article-card__related-links">
                  {article.relatedLinks.map((link) => (
                    <p key={link.href + link.label}>
                      <Link className="article-card-link article-card-link--subtle" href={link.href}>
                        {link.label}
                      </Link>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="text-card text-card--large articles-note">
            <h3>診断結果と合わせて読むと整理しやすいテーマです</h3>
            <p>
              各コラムは、婚活を急がせるためではなく、自分の希望や不安を落ち着いて整理するための読みものです。
              診断結果を見たあとに気になるテーマから読むと、次に考えたいことを見つけやすくなります。
            </p>
          </div>
          <DiagnosisReturnLink searchParams={params} />
        </div>
      </section>
    </main>
  );
}
