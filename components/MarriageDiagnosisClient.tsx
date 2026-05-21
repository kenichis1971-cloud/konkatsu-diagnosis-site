"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  type DiagnosisTypeId,
  diagnosisQuestions,
  getDiagnosisResult,
  getDiagnosisResultByType,
} from "@/lib/marriageDiagnosis";

type NextActionLink = {
  href: string;
  label: string;
};

function getNextActionLink(title: string): NextActionLink | null {
  if (title.startsWith("婚活記事")) {
    return { href: "/articles", label: "ページを見る" };
  }

  if (title.startsWith("結婚相談所比較")) {
    return { href: "/marriage-agencies", label: "詳しく見る" };
  }

  if (title.startsWith("婚活アプリ比較")) {
    return { href: "/marriage-apps", label: "詳しく見る" };
  }

  if (title.startsWith("占い鑑定")) {
    return { href: "/fortune", label: "詳しく見る" };
  }

  return null;
}

function getNextActionTitle(title: string) {
  return title.replace(" 準備中", "");
}

type MarriageDiagnosisClientProps = {
  initialResultId?: DiagnosisTypeId;
};

export function MarriageDiagnosisClient({ initialResultId }: MarriageDiagnosisClientProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisTypeId[]>([]);
  const [queryResultId, setQueryResultId] = useState<DiagnosisTypeId | null>(initialResultId ?? null);
  const isComplete = answers.length === diagnosisQuestions.length;
  const isResultVisible = isComplete || queryResultId !== null;
  const currentQuestion = diagnosisQuestions[currentIndex];
  const result = useMemo(
    () => (queryResultId ? getDiagnosisResultByType(queryResultId) : getDiagnosisResult(answers)),
    [answers, queryResultId],
  );
  const progressValue = isComplete ? 100 : Math.round((currentIndex / diagnosisQuestions.length) * 100);

  const handleAnswer = (answer: DiagnosisTypeId) => {
    setQueryResultId(null);
    const nextAnswers = [...answers.slice(0, currentIndex), answer];
    setAnswers(nextAnswers);

    if (currentIndex < diagnosisQuestions.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setQueryResultId(null);
    router.replace("/diagnosis");
  };

  if (isResultVisible) {
    return (
      <div className="diagnosis-card diagnosis-card--result" aria-live="polite">
        <div className="diagnosis-result-header">
          <p className="eyebrow">Result</p>
          <h2>{result.title}</h2>
          <p>
            この結果は、今の自分を整理し、婚活で見直せそうな選択肢を考えるための参考です。
            「今の傾向」から順に読むと、次に確認したいポイントを見つけやすくなります。
          </p>
        </div>
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
        <div className="diagnosis-result-bridge">
          <p>
            結果を読んで気になった部分があれば、下の候補から近いものを選んでみてください。
            すぐに決めるためではなく、今の自分に合う確認先を増やすための案内です。
          </p>
        </div>
        <section className="diagnosis-next-actions" aria-labelledby="diagnosis-next-actions-title">
          <div>
            <p className="eyebrow">Next actions</p>
            <h3 id="diagnosis-next-actions-title">次にできること</h3>
            <p>
              診断結果をもとに、自己理解と選択肢整理に使いやすい4つの確認先をまとめています。
              気になるテーマから、今の自分に合う情報を選んで確認してみてください。
            </p>
          </div>
          <div className="diagnosis-next-actions__grid">
            {result.actionCards.map((card) => {
              const link = getNextActionLink(card.title);
              const title = getNextActionTitle(card.title);
              const cardContent = (
                <>
                  <span>{link ? link.label : "準備中"}</span>
                  <h4>{title}</h4>
                  <p>{card.description}</p>
                </>
              );

              if (link) {
                return (
                  <Link
                    className="diagnosis-next-action-card diagnosis-next-action-card--link"
                    href={`${link.href}?from=diagnosis&result=${result.id}`}
                    key={card.title}
                    aria-label={`${title}のページを見る`}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article className="diagnosis-next-action-card" key={card.title}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </section>
        <p className="note">
          この診断は自己理解と選択肢整理の補助を目的としており、特定の結果や将来を保証するものではありません。
          不安をあおるものではなく、今の気持ちを言葉にするための参考としてご利用ください。
        </p>
        <div className="diagnosis-actions">
          <button className="diagnosis-button" type="button" onClick={handleRestart}>
            もう一度、今の気持ちで診断する
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
