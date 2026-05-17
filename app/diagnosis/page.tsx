import { Hero } from "@/components/Hero";
import { MarriageDiagnosisClient } from "@/components/MarriageDiagnosisClient";
import { type DiagnosisTypeId, isDiagnosisTypeId } from "@/lib/marriageDiagnosis";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "10問で婚活スタイルを整理する診断",
  description:
    "4択の10問診断で、婚活で大切にしたい価値観や自分に合いそうな出会い方を整理するためのページです。",
  path: "/diagnosis",
});

type DiagnosisPageProps = {
  searchParams?: Promise<{
    result?: string | string[];
  }>;
};

function getInitialResultId(result: string | string[] | undefined): DiagnosisTypeId | undefined {
  const value = Array.isArray(result) ? result[0] : result;

  return isDiagnosisTypeId(value) ? value : undefined;
}

export default async function DiagnosisPage({ searchParams }: DiagnosisPageProps) {
  const params = await searchParams;
  const initialResultId = getInitialResultId(params?.result);

  return (
    <main>
      <Hero
        eyebrow="Diagnosis"
        title={
          <>
            <span className="hero__title-line">あなたに合う</span>
            <span className="hero__title-line">婚活スタイル診断</span>
          </>
        }
        description="10問の質問を通して、今の気持ちや大切にしたい価値観を整理します。結果は自己理解と選択肢整理の補助としてご利用ください。"
      />
      <section className="section section--soft">
        <div className="section__inner diagnosis-frame">
          <MarriageDiagnosisClient key={initialResultId ?? "new-diagnosis"} initialResultId={initialResultId} />
        </div>
      </section>
    </main>
  );
}
