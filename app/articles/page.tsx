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
    body: "いきなりサービスを選ぶ前に、結婚に向けて大切にしたい希望・不安・活動に使える時間をやさしく言葉にするテーマです。診断結果と合わせて読むことで、今の自分に合いそうな進め方を見つめやすくします。",
    suitableFor: "婚活を始めたいけれど、何から考えればよいか迷っている人に向いています。",
    relatedLinks: [
      { href: "/articles/before-start", label: "この記事を読む" },
      { href: "/diagnosis", label: "10問診断で気持ちを整理する" },
    ],
  },
  {
    status: "公開中",
    title: "結婚相談所を比較するときの見方",
    body: "結婚相談所を比較するときに、サポート内容・費用・活動ペース・相談しやすさ・紹介の仕組みを落ち着いて整理するためのコラムです。",
    suitableFor: "相談しながら進める婚活が気になり、比べる基準を先に持っておきたい人に向いています。",
    relatedLinks: [
      { href: "/articles/compare-marriage-agencies", label: "この記事を読む" },
      { href: "/marriage-agencies", label: "結婚相談所比較の準備ページへ" },
    ],
  },
  {
    status: "公開中",
    title: "婚活アプリを使う前に考えたいこと",
    body: "真剣度の受け止め方、使いやすさ、費用感、プロフィール確認、メッセージの距離感など、始める前に落ち着いて確認したいポイントをまとめる予定です。",
    suitableFor: "自分のペースで進めたい一方で、安全面や続けやすさも気になる人に向いています。",
    relatedLinks: [
      { href: "/articles/before-using-marriage-apps", label: "この記事を読む" },
      { href: "/marriage-apps", label: "婚活アプリ比較の準備ページへ" },
    ],
  },
  {
    status: "公開中",
    title: "結婚観を見直したいときに考えること",
    body: "条件や理想だけでなく、生活・価値観・安心感・将来の過ごし方を整理しながら、今の自分に合う結婚観を見つめるためのコラムです。",
    suitableFor: "相手に求める条件と、これからの暮らしで大切にしたいことを分けて考えたい人に向いています。",
    relatedLinks: [
      { href: "/articles/review-marriage-values", label: "この記事を読む" },
      { href: "/diagnosis", label: "10問診断で大切にしたい軸を整理する" },
      { href: "/fortune", label: "占い鑑定ページも見る" },
    ],
  },
  {
    status: "準備中",
    title: "婚活で疲れたときの気持ちの整え方",
    body: "思うように進まない時期に、無理に結論を急がず少し立ち止まるための考え方を扱う予定です。不安をあおらず、気持ちと行動量の整え方をやわらかくまとめます。",
    suitableFor: "婚活の情報量や予定に疲れを感じ、いったん自分の気持ちを確認したい人に向いています。",
    relatedLinks: [
      { href: "/diagnosis", label: "診断で今の状態を見直す" },
      { href: "/fortune", label: "占い鑑定ページも見る" },
    ],
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
          <h2 id="articles-list-title">婚活を落ち着いて考えるヒント</h2>
          <div className="card-grid">
            {articleCards.map((article) => (
              <article className="text-card" key={article.title}>
                <p className="eyebrow">{article.status}</p>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <h4>こんな人に向いています</h4>
                <p>{article.suitableFor}</p>
                <h4>関連ページ</h4>
                {article.relatedLinks.map((link) => (
                  <p key={link.href + link.label}>
                    <Link className="article-card-link" href={link.href}>
                      {link.label}
                    </Link>
                  </p>
                ))}
              </article>
            ))}
          </div>
          <div className="text-card text-card--large articles-note">
            <h3>診断結果と合わせて読むと整理しやすいテーマです</h3>
            <p>
              各コラムは、婚活を急がせるためではなく、自分の希望や不安を落ち着いて整理するための読みものとして準備しています。
              診断結果を見たあとに気になるテーマから確認すると、次に考えたいことを見つけやすくなります。
            </p>
          </div>
          <DiagnosisReturnLink searchParams={params} />
        </div>
      </section>
    </main>
  );
}
