import Link from "next/link";
import { type DiagnosisTypeId, isDiagnosisTypeId } from "@/lib/marriageDiagnosis";

export type DiagnosisReturnSearchParams = {
  from?: string | string[];
  result?: string | string[];
};

type DiagnosisReturnLinkProps = {
  searchParams: DiagnosisReturnSearchParams;
};

function getSingleParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export function getDiagnosisReturnResult(searchParams: DiagnosisReturnSearchParams): DiagnosisTypeId | null {
  const from = getSingleParam(searchParams.from);
  const result = getSingleParam(searchParams.result);

  if (from === "diagnosis" && isDiagnosisTypeId(result)) {
    return result;
  }

  return null;
}

export function DiagnosisReturnLink({ searchParams }: DiagnosisReturnLinkProps) {
  const result = getDiagnosisReturnResult(searchParams);

  if (!result) {
    return null;
  }

  return (
    <div className="diagnosis-return-link" aria-label="診断結果への戻り導線">
      <Link className="diagnosis-button diagnosis-button--subtle" href={`/diagnosis?result=${result}`}>
        先ほどの診断結果に戻る
      </Link>
    </div>
  );
}
