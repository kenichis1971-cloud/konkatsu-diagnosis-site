import { PageShell } from "@/components/PageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "お問い合わせ",
  description: "婚活診断サイトへのご質問やご連絡に関する案内ページです。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell title="お問い合わせ" lead="ご質問やご連絡は、今後設置予定のお問い合わせフォームよりお送りいただけます。">
      <h2>フォーム準備中</h2>
      <p>
        現在、お問い合わせフォームの設置準備を進めています。公開までは、連絡先や送信方法をこのページで案内する予定です。
      </p>
      <div className="notice-box">
        <p>
          診断内容や掲載情報についてのご意見も、フォーム公開後に受け付ける予定です。
        </p>
      </div>
    </PageShell>
  );
}
