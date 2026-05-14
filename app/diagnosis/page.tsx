import { Hero } from "@/components/Hero";
import { MarriageDiagnosisClient } from "@/components/MarriageDiagnosisClient";

export const metadata = {
  title: "あなたに合う婚活スタイル診断",
  description: "10問の固定ロジックで、婚活への向き合い方や選択肢を整理するための診断ページです。",
};

export default function DiagnosisPage() {
  return (
    <main>
      <Hero
        eyebrow="Diagnosis"
        title="あなたに合う婚活スタイル診断"
        description="10問の質問を通して、今の気持ちや大切にしたい価値観を整理します。結果は自己理解と選択肢整理の補助としてご利用ください。"
      />
      <section className="section section--soft">
        <div className="section__inner diagnosis-frame">
          <MarriageDiagnosisClient />
        </div>
      </section>
    </main>
  );
}
