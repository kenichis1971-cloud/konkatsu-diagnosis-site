import { Hero } from "@/components/Hero";
import { MarriageDiagnosisClient } from "@/components/MarriageDiagnosisClient";
import { type DiagnosisTypeId, isDiagnosisTypeId } from "@/lib/marriageDiagnosis";

export const metadata = {
  title: "あなたに合う婚活スタイル診断",
  description: "10問の固定ロジックで、婚活への向き合い方や選択肢を整理するための診断ページです。",
};

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
