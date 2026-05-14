"use client";

import { useMemo, useState } from "react";
import {
  type DiagnosisTypeId,
  diagnosisQuestions,
  getDiagnosisResult,
} from "@/lib/marriageDiagnosis";

export function MarriageDiagnosisClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisTypeId[]>([]);
  const isComplete = answers.length === diagnosisQuestions.length;
  const currentQuestion = diagnosisQuestions[currentIndex];
  const result = useMemo(() => getDiagnosisResult(answers), [answers]);
  const progressValue = isComplete ? 100 : Math.round((currentIndex / diagnosisQuestions.length) * 100);

  const handleAnswer = (answer: DiagnosisTypeId) => {
    const nextAnswers = [...answers.slice(0, currentIndex), answer];
    setAnswers(nextAnswers);

    if (currentIndex < diagnosisQuestions.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  };

  const handleBack = () => {
    if (isComplete) {
      setCurrentIndex(diagnosisQuestions.length - 1);
      setAnswers((currentAnswers) => currentAnswers.slice(0, -1));
      return;
    }

    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
  };

  if (isComplete) {
    return (
      <div className="diagnosis-card diagnosis-card--result" aria-live="polite">
        <p className="eyebrow">Result</p>
        <h2>{result.title}</h2>
        <div className="diagnosis-result-grid">
          <section>
            <h3>今の傾向</h3>
            <p>{result.tendency}</p>
          </section>
          <section>
            <h3>婚活で起きやすいこと</h3>
            <p>{result.commonPattern}</p>
          </section>
          <section>
            <h3>おすすめの次の一歩</h3>
            <p>{result.nextStep}</p>
          </section>
        </div>
        <section className="diagnosis-next-actions" aria-labelledby="diagnosis-next-actions-title">
          <div>
            <p className="eyebrow">Next actions</p>
            <h3 id="diagnosis-next-actions-title">次にできること</h3>
            <p>
              診断結果をもとに、自己理解と選択肢整理に使いやすいコンテンツを準備しています。
              気になるものから確認できるよう、今後順次追加予定です。
            </p>
          </div>
          <div className="diagnosis-next-actions__grid">
            {result.actionCards.map((card) => (
              <article className="diagnosis-next-action-card" key={card.title}>
                <span>準備中</span>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>
        <p className="note">
          この診断は自己理解と選択肢整理の補助を目的としており、特定の結果や将来を保証するものではありません。
        </p>
        <div className="diagnosis-actions">
          <button className="diagnosis-button diagnosis-button--subtle" type="button" onClick={handleBack}>
            戻る
          </button>
          <button className="diagnosis-button" type="button" onClick={handleRestart}>
            もう一度診断する
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="diagnosis-card" aria-live="polite">
      <div className="diagnosis-progress" aria-label={`進捗 ${currentIndex + 1} / ${diagnosisQuestions.length}`}>
        <div className="diagnosis-progress__meta">
          <span>Question {currentIndex + 1}</span>
          <span>{diagnosisQuestions.length}問中{currentIndex + 1}問目</span>
        </div>
        <div className="diagnosis-progress__bar" aria-hidden="true">
          <span style={{ width: `${progressValue}%` }} />
        </div>
      </div>

      <p className="eyebrow">Marriage Style Diagnosis</p>
      <h2>{currentQuestion.text}</h2>
      <div className="diagnosis-options">
        {currentQuestion.options.map((option) => {
          const selected = answers[currentIndex] === option.type;

          return (
            <button
              className="diagnosis-option"
              type="button"
              key={option.label}
              onClick={() => handleAnswer(option.type)}
              aria-pressed={selected}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="diagnosis-actions">
        <button
          className="diagnosis-button diagnosis-button--subtle"
          type="button"
          onClick={handleBack}
          disabled={currentIndex === 0}
        >
          戻る
        </button>
      </div>
    </div>
  );
}
