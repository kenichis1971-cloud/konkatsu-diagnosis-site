import { Hero } from "@/components/Hero";

const placeholders = [
  "現在の婚活への向き合い方を整理する質問",
  "大切にしたい価値観やペースを考える質問",
  "自分に合いそうな婚活スタイルの方向性を知る結果ページ",
];

export const metadata = {
  title: "あなたに合う婚活スタイル診断",
  description: "婚活スタイル診断ページの準備中画面です。診断ロジックは今後追加予定です。",
};

export default function DiagnosisPage() {
  return (
    <main>
      <Hero
        eyebrow="Diagnosis"
        title="あなたに合う婚活スタイル診断"
        description="いくつかの質問を通して、婚活への向き合い方や選択肢を整理するための診断ページです。診断本体は今後追加予定です。"
      />
      <section className="section section--soft">
        <div className="section__inner diagnosis-frame">
          <div className="text-card text-card--large">
            <p className="eyebrow">Coming Soon</p>
            <h2>診断ロジックは準備中です</h2>
            <p>
              今回はページの枠組みのみを作成しています。次回以降、10問4択の質問や結果タイプを追加していく予定です。
            </p>
          </div>
          <div className="card-grid">
            {placeholders.map((item, index) => (
              <article className="step-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <p className="note">
            この診断は自己理解と選択肢整理の補助を目的としており、特定の結果や将来を保証するものではありません。
          </p>
        </div>
      </section>
    </main>
  );
}
