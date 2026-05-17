import { PageShell } from "@/components/PageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "利用規約・免責事項",
  description: "婚活診断サイトの目的、診断コンテンツの扱い、免責事項についてご案内します。",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell title="利用規約・免責事項" lead="本サイトをご利用いただく前に、以下の内容をご確認ください。">
      <h2>本サイトの目的</h2>
      <p>
        本サイトは、婚活や結婚に関する自己理解と選択肢整理の補助を目的として情報を提供します。
      </p>
      <h2>診断コンテンツについて</h2>
      <p>
        診断結果や掲載情報は参考情報であり、特定の行動、成果、将来の結果を保証するものではありません。
      </p>
      <h2>免責事項</h2>
      <p>
        本サイトの情報を利用したことによって生じた損害等について、運営者は責任を負いかねます。ご自身の状況に合わせて判断してください。
      </p>
      <h2>内容の変更</h2>
      <p>本規約および掲載内容は、必要に応じて予告なく変更する場合があります。</p>
    </PageShell>
  );
}
